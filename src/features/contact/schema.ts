import { z } from "zod";

/**
 * Shared Zod schema used on BOTH the client (React Hook Form resolver)
 * and the server (API route validation). Single source of truth.
 */

export const PRACTICE_AREA_OPTIONS = [
  { value: "imobiliario", label: "Direito Imobiliário" },
  { value: "civil", label: "Direito Civil" },
  { value: "familia", label: "Direito de Família" },
  { value: "outro", label: "Outro / Não sei" },
] as const;

export const PERIOD_OPTIONS = [
  { value: "manha", label: "Manhã (9h–12h)" },
  { value: "tarde", label: "Tarde (13h–18h)" },
] as const;

const practiceAreaValues = PRACTICE_AREA_OPTIONS.map((o) => o.value) as [
  string,
  ...string[],
];
const periodValues = PERIOD_OPTIONS.map((o) => o.value) as [string, ...string[]];

const phoneRegex = /^\(?\d{2}\)?\s?9?\s?\d{4}-?\d{4}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Informe seu nome completo.")
    .max(120, "Nome muito longo."),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail.")
    .email("E-mail inválido."),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Telefone inválido. Ex: (83) 99999-9999."),
  area: z.enum(practiceAreaValues, {
    errorMap: () => ({ message: "Selecione uma área de atuação." }),
  }),
  preferredDate: z
    .string()
    .min(1, "Escolha uma data.")
    .refine((value) => {
      const picked = new Date(`${value}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return picked >= today;
    }, "A data deve ser hoje ou futura."),
  preferredPeriod: z.enum(periodValues, {
    errorMap: () => ({ message: "Selecione um período." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Descreva seu caso em pelo menos 10 caracteres.")
    .max(1500, "Mensagem muito longa."),
  // Honeypot — bots fill it, humans don't. Must stay empty.
  company: z.string().max(0).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar para prosseguir." }),
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const contactResponseSchema = z.object({
  ok: z.boolean(),
  message: z.string(),
  protocol: z.string().optional(),
});

export type ContactResponse = z.infer<typeof contactResponseSchema>;
