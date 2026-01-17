import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validatedData = contactSchema.parse(body);

    // Connect to database
    await connectDB();

    // Save to database
    const contact = await Contact.create(validatedData);

    // Send email notification using Resend
    try {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'your-email@example.com',
        subject: `New Contact: ${validatedData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">New Contact Form Submission</h2>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3>Message:</h3>
              <p style="line-height: 1.6;">${validatedData.message}</p>
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
              Received at ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails - contact is saved in DB
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        contact: {
          id: contact._id,
          name: contact.name,
        }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(50);

    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
