# Fernanda Moreira Bezerra — Advocacia

Landing page do escritório de advocacia (Imobiliário, Cível e Família).
Construída com foco em performance, acessibilidade e manutenibilidade.

## Stack

- **Next.js 15** (App Router, Server Components, Route Handlers)
- **TypeScript** (strict)
- **Tailwind CSS v4** (config CSS-first via `@theme`)
- **shadcn/ui** (Radix UI + CVA)
- **React Hook Form + Zod** (validação compartilhada client/server)
- **TanStack Query** (mutations do formulário)
- **Sonner** (toasts)
- Fontes: Cormorant Garamond + Jost (via `next/font`, self-hosted)

## Como rodar

Pré-requisito: Node 18.18+ e [pnpm](https://pnpm.io).

```bash
pnpm install
cp .env.example .env.local   # ajuste as variáveis
pnpm dev                     # http://localhost:3000
```

Scripts: `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm typecheck`.

## Arquitetura

Organização **feature-based** com camadas claras entre UI apresentacional,
features de domínio e configuração de conteúdo.

```
src/
├── app/                      # App Router
│   ├── layout.tsx            # fontes, metadata, providers, Toaster
│   ├── page.tsx              # composição das seções
│   ├── globals.css           # design tokens (Tailwind v4 @theme)
│   └── api/contact/route.ts  # validação server-side + entrega do lead
├── components/
│   ├── ui/                   # primitivos shadcn/ui (reutilizáveis)
│   ├── layout/               # header + footer
│   └── sections/             # seções da landing (apresentacionais)
├── features/
│   └── contact/              # domínio "contato/agendamento"
│       ├── schema.ts         # Zod (fonte única, usada nos 2 lados)
│       ├── api.ts            # client fetch tipado
│       ├── use-contact-mutation.ts  # hook TanStack Query
│       └── contact-form.tsx  # form (RHF + Zod resolver)
├── lib/
│   ├── site-config.ts        # TODO o conteúdo/contato centralizado
│   └── utils.ts              # cn()
└── providers/
    └── query-provider.tsx    # QueryClient (por request, SSR-safe)
```

**Princípios aplicados**

- *Single source of truth* de conteúdo em `lib/site-config.ts` — editar textos
  não exige tocar em JSX.
- Schema Zod único validando no cliente (UX) e no servidor (segurança).
- Server Components por padrão; `"use client"` só onde há interatividade
  (header mobile, formulário, providers).
- Design tokens semânticos (shadcn) mapeados sobre a paleta da marca no
  `globals.css` — troca de tema em um só lugar.

## Formulário de contato / agendamento

O endpoint `POST /api/contact` valida o payload com o mesmo schema Zod e hoje
apenas registra o lead no console (stub `deliverLead`). Ponto de integração:
troque `deliverLead` por Resend/Nodemailer, um webhook de CRM ou a WhatsApp
Business API. Há proteção por *honeypot* e consentimento LGPD no formulário.

## Personalização rápida

- Cores/tipografia: `src/app/globals.css` (`:root` e `@theme`).
- Textos, número de WhatsApp, e-mail, OAB: `src/lib/site-config.ts` + `.env.local`.
- Logo: substitua o texto no header/footer por `next/image` apontando para
  `public/logo.png`.
