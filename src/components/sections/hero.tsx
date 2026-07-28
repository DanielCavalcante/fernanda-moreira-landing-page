import { Heart, Home, Scale } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RingBadge } from "@/components/sections/shared";
import { siteConfig } from "@/lib/site-config";

const specialties = [
  { icon: Home, label: "Direito Imobiliário" },
  { icon: Scale, label: "Direito Civil" },
  { icon: Heart, label: "Direito de Família" },
];

export function Hero() {
  return (
    <section id="top" className="px-6 pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Advocacia</span>
        <h1 className="mt-3 text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-3 font-serif text-lg italic text-gold-light sm:text-xl">
          {siteConfig.role}
        </p>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted-foreground">
          Soluções jurídicas estratégicas para proteger seu patrimônio, seus
          direitos e sua tranquilidade.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <a href="#contato">Agendar atendimento</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        <div className="mx-auto mt-14 flex max-w-xl flex-wrap justify-center gap-x-14 gap-y-8 border-t border-border pb-4 pt-10">
          {specialties.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <RingBadge>
                <Icon className="size-5" strokeWidth={1.4} />
              </RingBadge>
              <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
