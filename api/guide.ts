import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { z } from 'zod';

/*
 * Guide request endpoint + the mail it sends.
 *
 * The mail code lives in this file rather than a module of its own because
 * Vercel bundles each function from its own directory and drops anything it
 * does not consider part of it: an import of ../shared/ and then of
 * ./_guide-email both threw ERR_MODULE_NOT_FOUND in production. The dev
 * server imports the named export below, so there is still only one copy.
 */

export const GUIDE_TITLE = "Juridiskās personas maksātnespējas process";
export const GUIDE_PATH = "/celvedis/juridiskas-personas-maksatnespeja-2026.pdf";
export const INTERNAL_RECIPIENT = "info@zabkrumins.lv";

const BRAND_DARK = "#013720";
const BRAND_LIME = "#94f27f";

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

/** Absolute URL of the guide, e.g. https://bezparada.lv/celvedis/...pdf */
export function guideUrl(origin?: string): string {
  const base = (origin || process.env.PUBLIC_SITE_URL || "https://bezparada.lv").replace(/\/+$/, "");
  return `${base}${GUIDE_PATH}`;
}

function recipientHtml(downloadUrl: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #232b27;">
      <h2 style="color: ${BRAND_DARK}; border-bottom: 2px solid ${BRAND_LIME}; padding-bottom: 10px;">
        Tavs ceļvedis ir gatavs
      </h2>

      <p style="line-height: 1.6;">
        Paldies par interesi! Zemāk vari lejupielādēt bezmaksas ceļvedi
        <strong>„${GUIDE_TITLE}“</strong> — no pirmajiem maksājumu kavējumiem līdz procesa noslēgumam,
        vienkāršā un saprotamā valodā.
      </p>

      <div style="text-align: center; margin: 32px 0;">
        <a href="${downloadUrl}"
           style="display: inline-block; background-color: ${BRAND_LIME}; color: ${BRAND_DARK};
                  text-decoration: none; font-weight: bold; font-size: 16px;
                  padding: 14px 32px; border-radius: 999px;">
          Lejupielādēt ceļvedi (PDF)
        </a>
      </div>

      <p style="font-size: 13px; color: #6b716d; line-height: 1.6;">
        Ja poga nedarbojas, nokopē šo saiti pārlūkā:<br>
        <a href="${downloadUrl}" style="color: ${BRAND_DARK};">${downloadUrl}</a>
      </p>

      <div style="background-color: #f5f6f2; padding: 18px; border-radius: 8px;
                  border-left: 4px solid ${BRAND_LIME}; margin: 28px 0;">
        <p style="margin: 0 0 8px; color: ${BRAND_DARK};"><strong>Ko darīt tālāk?</strong></p>
        <p style="margin: 0; line-height: 1.6;">
          Ja situācija ir steidzama, sazinies ar mums — pirmā saruna ir bez maksas un bez saistībām.<br>
          Tālrunis: <a href="tel:+37129025555" style="color: ${BRAND_DARK};">+371 29025555</a><br>
          E-pasts: <a href="mailto:${INTERNAL_RECIPIENT}" style="color: ${BRAND_DARK};">${INTERNAL_RECIPIENT}</a>
        </p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; line-height: 1.6;">
        <p style="margin: 0 0 6px;">
          Ceļvedis ir vispārīga informācija, nevis juridiska konsultācija konkrētai situācijai.
        </p>
        <p style="margin: 0;">BEZ PARĀDA.LV · ZAB Krūmiņš · bezparada.lv</p>
      </div>
    </div>
  `;
}

function internalHtml(email: string, downloadUrl: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: ${BRAND_DARK}; border-bottom: 2px solid ${BRAND_LIME}; padding-bottom: 10px;">
        Jauns ceļveža pieprasījums
      </h2>

      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0 0 8px;"><strong>E-pasts:</strong> <a href="mailto:${email}">${email}</a></p>
        <p style="margin: 0 0 8px;"><strong>Ceļvedis:</strong> ${GUIDE_TITLE}</p>
        <p style="margin: 0;"><strong>Piekrišana datu apstrādei:</strong> apstiprināta</p>
      </div>

      <p style="font-size: 13px; color: #666;">
        Ceļvedis jau ir automātiski nosūtīts uz norādīto adresi (${downloadUrl}).
      </p>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
        <p>Šis e-pasts tika automātiski nosūtīts no BEZ PARĀDA.LV ceļveža formas.</p>
        <p>Laiks: ${new Date().toLocaleString("lv-LV", { timeZone: "Europe/Riga" })}</p>
      </div>
    </div>
  `;
}

/**
 * Sends the guide to the lead, then notifies the firm.
 *
 * Throws if the guide itself cannot be delivered — that is the thing the
 * visitor was promised. A failing internal notification is logged and
 * swallowed, so a lead is never shown an error for it.
 */
export async function sendGuideEmail(email: string, origin?: string): Promise<void> {
  const transporter = createTransporter();
  const downloadUrl = guideUrl(origin);

  await transporter.sendMail({
    from: `BEZ PARĀDA.LV <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Tavs bezmaksas ceļvedis: ${GUIDE_TITLE}`,
    html: recipientHtml(downloadUrl),
    replyTo: INTERNAL_RECIPIENT,
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: INTERNAL_RECIPIENT,
      subject: `📘 Ceļveža pieprasījums: ${email}`,
      html: internalHtml(email, downloadUrl),
      replyTo: email,
    });
  } catch (error) {
    console.error("Guide lead notification failed (guide itself was sent):", error);
  }
}


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
