import {
  contactResponseSchema,
  type ContactFormValues,
  type ContactResponse,
} from "./schema";

export async function submitContact(
  values: ContactFormValues,
): Promise<ContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const json = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      (json && typeof json.message === "string" && json.message) ||
      "Não foi possível enviar sua solicitação. Tente novamente.";
    throw new Error(message);
  }

  return contactResponseSchema.parse(json);
}
