import { Quote } from "lucide-react";

import { Section, SectionHeading } from "@/components/sections/shared";

export function Testimonials() {
  return (
    <Section panel>
      <SectionHeading
        eyebrow="O que dizem nossos clientes"
        title="Depoimentos"
        description="Espaço reservado para avaliações de clientes. Assim que os primeiros depoimentos chegarem, eles aparecerão aqui."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 border border-dashed border-border p-10 text-center"
          >
            <Quote className="size-6 text-primary" />
            <span className="text-sm text-muted-foreground">
              Depoimento em breve
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
