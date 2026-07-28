import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CtaFinal() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-card to-background px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <span className="eyebrow">Precisa de orientação jurídica?</span>
        <h2 className="mt-3 text-3xl text-ivory sm:text-4xl">
          Conte com uma advocacia comprometida com você
        </h2>
        <p className="mx-auto mb-9 mt-4 max-w-md leading-relaxed text-muted-foreground">
          Proteja seus direitos com segurança, estratégia e atendimento
          personalizado — do primeiro contato até a resolução do seu caso.
        </p>
        <Button asChild size="lg">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Atendimento via WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
