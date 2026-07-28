import { Section, SectionHeading, RingBadge } from "@/components/sections/shared";
import { practiceIcons } from "@/components/sections/practice-icons";
import { practiceAreas } from "@/lib/site-config";

export function PracticeAreas() {
  return (
    <Section id="areas">
      <SectionHeading eyebrow="O que fazemos" title="Áreas de Atuação" />
      <div className="grid gap-px border border-border bg-border md:grid-cols-3">
        {practiceAreas.map((area) => {
          const Icon = practiceIcons[area.key];
          return (
            <div key={area.key} className="bg-background p-8">
              <div className="mb-6 flex items-center gap-3">
                <RingBadge className="size-10">
                  <Icon className="size-[18px]" strokeWidth={1.4} />
                </RingBadge>
                <h3 className="text-xl text-ivory">{area.title}</h3>
              </div>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-sm leading-snug text-muted-foreground"
                  >
                    <span className="absolute left-0 text-xs text-primary">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
