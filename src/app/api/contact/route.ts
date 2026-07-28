import { NextResponse } from "next/server";

import { contactSchema } from "@/features/contact/schema";

/**
 * POST /api/contact
 * Validates the lead with the shared Zod schema, then hands it off.
 *
 * Integration point: replace the `deliverLead` stub with your provider —
 * e.g. Resend/Nodemailer for email, a CRM webhook, or the WhatsApp
 * Business API. Reads CONTACT_INBOX_EMAIL from the environment.
 */

export const runtime = "nodejs";

function makeProtocol() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `FMB-${stamp}-${rand}`;
}

async function deliverLead(
  data: unknown,
  protocol: string,
): Promise<void> {
  // TODO: integrate an email/CRM/WhatsApp provider here.
  // Keeping a server log makes local development verifiable.
  console.info("[contact] new lead", { protocol, data });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Dados inválidos.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // Honeypot triggered — pretend success without processing.
  if (parsed.data.company) {
    return NextResponse.json({
      ok: true,
      message: "Recebido.",
      protocol: makeProtocol(),
    });
  }

  const protocol = makeProtocol();

  try {
    await deliverLead(parsed.data, protocol);
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Não foi possível registrar sua solicitação agora. Tente novamente em instantes.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Solicitação recebida com sucesso.",
    protocol,
  });
}
