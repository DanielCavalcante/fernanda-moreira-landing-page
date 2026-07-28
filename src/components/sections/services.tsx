import { Section, SectionHeading } from "@/components/sections/shared";
import { services } from "@/lib/site-config";

export function Services() {
  return (
    <Section panel>
      <SectionHeading eyebrow="Como podemos ajudar" title="Serviços" />
      <div className="grid border-t border-border md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="border-border p-8 md:border-l md:first:border-l-0"
          >
            <h3 className="mb-5 font-serif text-xl text-gold-light">
              {service.title}
            </h3>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-6 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="absolute left-0 text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
