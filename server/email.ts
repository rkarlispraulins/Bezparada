import nodemailer from 'nodemailer';

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
  subject?: string;
}

export async function sendContactEmail(data: EmailData): Promise<void> {
  const { firstName, lastName, email, phone, details, subject } = data;
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #013720; border-bottom: 2px solid #94f27f; padding-bottom: 10px;">
        Jauns kontakta pieprasījums no BEZ PARĀDA.LV
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
          <strong>Nākamie soļi:</strong> Sazinies ar klientu 24 stundu laikā, lai sniegtu bezmaksas konsultāciju.
        </p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
        <p>Šis e-pasts tika automātiski nosūtīts no BEZ PARĀDA.LV kontakta formas.</p>
        <p>Laiks: ${new Date().toLocaleString('lv-LV', { timeZone: 'Europe/Riga' })}</p>
      </div>
    </div>
  `;

  const emailSubject =
    subject && subject !== 'Konsultācijas pieprasījums'
      ? `🔔 ${subject}: ${firstName} ${lastName}`
      : `🔔 Jauns konsultācijas pieprasījums: ${firstName} ${lastName}`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'info@zabkrumins.lv',
    subject: emailSubject,
    html: htmlContent,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to info@zabkrumins.lv');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email notification');
  }
}