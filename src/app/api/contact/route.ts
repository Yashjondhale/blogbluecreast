import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(0, "Spam detected"), // Must be empty
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message || "Invalid input data" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // Log the contact submission
    console.log(`[Contact Form Received] From: ${name} <${email}>, Subject: ${subject}`);

    // If Resend or SMTP credentials exist in production:
    if (process.env.RESEND_API_KEY) {
      // Stub for resend integration:
      // await resend.emails.send({ from: 'noreply@bluecreast.in', to: 'contact@bluecreast.in', subject, text: message });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. An editor will review your inquiry within 24-48 hours.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
