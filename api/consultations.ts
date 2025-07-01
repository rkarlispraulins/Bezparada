import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Consultation form validation schema
const consultationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone is required'),
  details: z.string().optional(),
});

// Create transporter using Gmail SMTP  
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  details?: string;
}

async function sendConsultationEmail(data: EmailData): Promise<void> {
  const { firstName, lastName, email, phone, details } = data;
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #013720; border-bottom: 2px solid #94f27f; padding-bottom: 10px;">
        Jauna konsultācijas rezervācija no BEZ PARĀDA.LV
      </h2>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #013720; margin-top: 0;">Klienta informācija:</h3>
        <p><strong>Vārds:</strong> ${firstName}</p>
        <p><strong>Uzvārds:</strong> ${lastName}</p>
        <p><strong>E-pasts:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Tālrunis:</strong> <a href="tel:+371${phone}">+371 ${phone}</a></p>
        ${details ? `<p><strong>Papildu informācija:</strong><br>${details.replace(/\n/g, '<br>')}</p>` : ''}
      </div>
      
      <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #94f27f;">
        <p style="margin: 0; color: #013720;">
          <strong>Bezmaksas konsultācija:</strong> Sazinies ar klientu 24 stundu laikā, lai norunātu 30 minūšu bezmaksas konsultāciju.
        </p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
        <p>Šis e-pasts tika automātiski nosūtīts no BEZ PARĀDA.LV konsultācijas formas.</p>
        <p>Laiks: ${new Date().toLocaleString('lv-LV', { timeZone: 'Europe/Riga' })}</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'info@zabkrumins.lv',
    subject: `📅 Jauna bezmaksas konsultācija: ${firstName} ${lastName}`,
    html: htmlContent,
    replyTo: email,
  };

  await transporter.sendMail(mailOptions);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse and validate request body
    const body = consultationSchema.parse(req.body);
    
    // Split name into first and last name
    const nameParts = body.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Send email
    await sendConsultationEmail({
      firstName,
      lastName,
      email: body.email,
      phone: body.phone,
      details: body.details,
    });

    // Return success response
    res.status(200).json({
      success: true,
      consultation: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        details: body.details,
        id: Date.now(), // Simple ID for response
        createdAt: new Date().toISOString(),
      }
    });

  } catch (error) {
    console.error('Consultation form error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }

    res.status(500).json({
      error: 'Failed to process consultation form'
    });
  }
}