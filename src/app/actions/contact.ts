"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { triageContactForm, TriageContactFormInput } from "@/ai/flows/triage-contact-form";
import { revalidatePath } from "next/cache";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Invalid form data. Please check the fields and try again.",
      fields: {
        name: data.get("name")?.toString() ?? "",
        company: data.get("company")?.toString() ?? "",
        email: data.get("email")?.toString() ?? "",
        message: data.get("message")?.toString() ?? "",
      },
      issues,
      success: false,
    };
  }
  
  const { name, company, email, message } = parsed.data;

  try {
    const triageInput: TriageContactFormInput = { name, company, email, message };
    const triageResult = await triageContactForm(triageInput);

    const submission = {
      ...parsed.data,
      triageCategory: triageResult.category,
      triageReason: triageResult.reason,
      createdAt: serverTimestamp(),
    };

    const contactsCollection = collection(db, "contacts");
    await addDoc(contactsCollection, submission);
    
    revalidatePath("/");

    return { message: `Thank you, ${name}! Your message has been sent. We'll be in touch shortly.`, success: true, fields: {} };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
      fields: parsed.data,
    };
  }
}
