import { Section, SectionHeading, RingBadge } from "@/components/sections/shared";
import { processSteps } from "@/lib/site-config";

export function ProcessSteps() {
  return (
    <Section id="atendimento" panel>
      <SectionHeading
        eyebrow="O passo a passo"
        title="Como funciona o atendimento"
      />
      <div className="relative grid gap-10 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
        {processSteps.map((step) => (
          <div key={step.step} className="relative z-10 px-2 text-center">
            <RingBadge className="mx-auto mb-4">
              <span className="font-serif text-xl italic text-gold-light">
                {step.step}
              </span>
            </RingBadge>
            <h3 className="mb-2 text-lg text-ivory">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
