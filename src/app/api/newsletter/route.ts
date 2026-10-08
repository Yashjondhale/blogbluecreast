import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message || "Invalid email" },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // Log subscription intent for double opt-in dispatch
    console.log(`[Newsletter Subscription] ${email} opted in to The BlueCrest Dispatch`);

    // In production: hook into Resend Audiences or Buttondown API
    // e.g. if (process.env.BUTTONDOWN_API_KEY) { ... }

    return NextResponse.json({
      success: true,
      message: "Check your inbox for the confirmation email to complete your double opt-in.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not process subscription. Please try again." },
      { status: 500 }
    );
  }
}
