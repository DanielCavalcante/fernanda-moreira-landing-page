import { Section, SectionHeading } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/features/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <Section id="contato">
      <SectionHeading
        eyebrow="Agende sua consulta"
        title="Vamos conversar sobre o seu caso"
        description="Preencha o formulário para solicitar um agendamento. Prefere um canal direto? Fale pelo WhatsApp."
      />
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="border border-border bg-card p-8 sm:p-10">
          <ContactForm />
        </div>
        <aside className="flex flex-col gap-8">
          <div>
            <h3 className="mb-3 font-serif text-xl text-gold-light">
              Atendimento direto
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Presencial e online em todo o Brasil. Respondemos em horário
              comercial: {siteConfig.contact.hours.toLowerCase()}.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-primary">
                WhatsApp
              </span>
              {siteConfig.contact.phoneDisplay}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-primary">
                E-mail
              </span>
              {siteConfig.contact.email}
            </p>
          </div>
          <Button asChild variant="ghost" className="self-start">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </aside>
      </div>
    </Section>
  );
}
