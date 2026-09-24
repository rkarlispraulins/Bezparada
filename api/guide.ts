import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { sendGuideEmail } from '../shared/guide-email';

const guideSchema = z.object({
  email: z.string().email('Valid email is required'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required' }),
  }),
});

function requestOrigin(req: VercelRequest): string | undefined {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  if (!host) return undefined;
  const proto = (req.headers['x-forwarded-proto'] as string) || 'https';
  return `${proto}://${Array.isArray(host) ? host[0] : host}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = guideSchema.parse(req.body);

    await sendGuideEmail(body.email, requestOrigin(req));

    res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors,
      });
    }

    console.error('Guide form error:', error);
    res.status(500).json({ error: 'Failed to send the guide' });
  }
}
