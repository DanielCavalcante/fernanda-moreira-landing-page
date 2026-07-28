import { Gem } from "lucide-react";

import { Section, SectionHeading } from "@/components/sections/shared";
import { differentials } from "@/lib/site-config";

export function Differentials() {
  return (
    <Section id="diferenciais">
      <SectionHeading eyebrow="Por que escolher" title="Diferenciais" />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {differentials.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <Gem className="mt-1 size-3.5 shrink-0 text-primary" />
            <span className="leading-snug text-ivory">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
