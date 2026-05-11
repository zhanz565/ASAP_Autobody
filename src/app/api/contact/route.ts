import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract text fields
    const firstName = formData.get('First_Name') as string;
    const lastName = formData.get('Last_Name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('Phone') as string;
    const service = formData.get('Service_Requested') as string;
    const vehicle = formData.get('Vehicle') as string;
    const vin = formData.get('VIN') as string;
    const message = formData.get('Message') as string;

    // Process Photo Attachments
    const files = formData.getAll('attachment') as File[];
    const attachments = [];

    for (const file of files) {
      if (file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        attachments.push({
          filename: file.name,
          content: buffer, // Resend handles the buffer automatically
        });
      }
    }

    // 🎨 YOUR STRUCTURED EMAIL TEMPLATE
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #121110; padding: 24px; text-align: center;">
          <h1 style="color: #d98f2b; margin: 0; font-size: 24px; letter-spacing: 2px;">ASAP AUTOBODY</h1>
          <p style="color: #888; margin-top: 8px; font-size: 12px; letter-spacing: 1px;">NEW ESTIMATE REQUEST</p>
        </div>
        <div style="padding: 32px; background-color: #ffffff; color: #1a1a1a;">
          <h2 style="font-size: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px; margin-top: 0;">Customer Details</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #d98f2b;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>

          <h2 style="font-size: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px; margin-top: 32px;">Vehicle & Service</h2>
          <p><strong>Service Requested:</strong> ${service}</p>
          <p><strong>Vehicle:</strong> ${vehicle}</p>
          <p><strong>VIN:</strong> ${vin || 'Not provided'}</p>

          <h2 style="font-size: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px; margin-top: 32px;">Additional Details</h2>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message || 'No additional details provided.'}</p>
        </div>
      </div>
    `;

    // Send the Email
    await resend.emails.send({
      from: 'ASAP Autobody <onboarding@resend.dev>', // Resend's free testing email
      to: 'jazhang248@gmail.com', // Sends directly to you
      replyTo: email, // If you click "Reply" in Gmail, it replies to the customer!
      subject: `New Estimate Request: ${vehicle} (${firstName} ${lastName})`,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}