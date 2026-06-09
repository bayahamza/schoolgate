"use server";

import { prisma } from "@/lib/prisma";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();
  const phone = (formData.get("phone") as string | null)?.trim() || null;
  const reason = (formData.get("reason") as string | null)?.trim() || null;

  if (!name || name.length < 2) {
    return { status: "error", message: "Veuillez saisir votre nom." };
  }
  if (!message || message.length < 10) {
    return { status: "error", message: "Votre message est trop court (10 caractères minimum)." };
  }

  try {
    await prisma.contactRequest.create({
      data: { name, message, phone, reason },
    });
    return { status: "success" };
  } catch (err) {
    console.error("[contact action]", err);
    return {
      status: "error",
      message: "Une erreur est survenue. Réessayez ou contactez-nous par téléphone.",
    };
  }
}
