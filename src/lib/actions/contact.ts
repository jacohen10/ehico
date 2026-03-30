"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const validated = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: validated.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, phone, service, message } = validated.data;

  try {
    const { error } = await resend.emails.send({
      from: "EHI Co Website <onboarding@resend.dev>",
      to: ["mail@ehico.com"],
      replyTo: email,
      subject: `New Quote Request from ${name}${service ? ` - ${service}` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return {
        success: false,
        message:
          "Something went wrong. Please call us at (757) 640-0243.",
      };
    }

    return {
      success: true,
      message: "Thank you! We'll get back to you within one business day.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please call us at (757) 640-0243.",
    };
  }
}
