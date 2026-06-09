"use server";

import { prisma } from "@/lib/prisma";

export type SchoolRegState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const VALID_PLANS = ["free", "premium", "premium_plus", "unknown"] as const;

export async function submitSchoolRegistration(
  _prev: SchoolRegState,
  formData: FormData
): Promise<SchoolRegState> {
  const schoolName  = (formData.get("schoolName")   as string | null)?.trim();
  const city        = (formData.get("city")          as string | null)?.trim();
  const contactName = (formData.get("contactName")   as string | null)?.trim();
  const phone       = (formData.get("phone")         as string | null)?.trim();
  const email       = (formData.get("email")         as string | null)?.trim() || null;
  const planRaw     = (formData.get("planInterest")  as string | null)?.trim() || "unknown";
  const planInterest = VALID_PLANS.includes(planRaw as typeof VALID_PLANS[number])
    ? planRaw
    : "unknown";

  if (!schoolName || schoolName.length < 2)
    return { status: "error", message: "Veuillez saisir le nom de l'établissement." };
  if (!city || city.length < 2)
    return { status: "error", message: "Veuillez saisir la ville." };
  if (!contactName || contactName.length < 2)
    return { status: "error", message: "Veuillez saisir le nom du responsable." };
  if (!phone || phone.length < 8)
    return { status: "error", message: "Veuillez saisir un numéro de téléphone valide." };

  try {
    await prisma.schoolRegistration.create({
      data: { schoolName, city, contactName, phone, email, planInterest },
    });
    return { status: "success" };
  } catch (err) {
    console.error("[school-registration action]", err);
    return {
      status: "error",
      message: "Une erreur est survenue. Réessayez ou contactez-nous par téléphone.",
    };
  }
}
