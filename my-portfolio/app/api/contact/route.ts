import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// If you will send mail with Resend, keep Node runtime (not Edge)
export const runtime = "nodejs";
export const revalidate = 0;

const TOPICS = [
  "Portfolio inquiry",
  "Freelance project",
  "UI/UX",
  "Interview",
  "Other",
] as const;

// Make zod accept the readonly tuple:
const TopicEnum = z.enum([...TOPICS] as [
  (typeof TOPICS)[number],
  ...(typeof TOPICS)[number][]
]);

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Enter a valid email"),
  // Mirror the client: convert "" → undefined so required_error triggers nicely
  topic: z.preprocess((v) => (v === "" ? undefined : v), TopicEnum),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1500, "Message too long"),
  consent: z.boolean().refine((v) => v === true, {
    message: "Consent required",
  }),

  // Optional spam honeypot:
  // hp: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  // 1) Parse JSON safely
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON." },
      { status: 400 }
    );
  }

  // 2) Validate
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid input.", issues: parsed.error.issues },
      { status: 422 }
    );
  }

  const { name, email, topic, message } = parsed.data;

  //3) (Optional) Send email via Resend / Nodemailer
  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    console.log(process.env.RESEND_API_KEY);
    console.log(process.env.CONTACT_TO_EMAIL);
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL!,
        to: process.env.CONTACT_TO_EMAIL,
        subject: `Portfolio Contact: ${topic}`,
        html: `Name: ${name} \n Email: ${email} \n Topic: ${topic} \n\n ${message}`,
      });
    } catch (e) {
      return NextResponse.json(
        { success: false, error: "Email send failed." },
        { status: 500 }
      );
    }
  }

  // 4) Success
  return NextResponse.json({ success: true });
}
