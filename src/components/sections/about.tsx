import Image from "next/image";
import { Section } from "@/components/sections/shared";

export function About() {
  return (
    <Section id="sobre" panel>
      <div className="grid items-center gap-12 md:grid-cols-[0.82fr_1.18fr]">
        <div className="relative aspect-[4/5] overflow-hidden border border-border">
          <Image
            src="/fernanda.jpeg"
            alt="Fernanda Moreira Bezerra, advogada"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-top"
            priority
          />
        </div>
        <div>
          <span className="eyebrow">Quem sou</span>
          <h2 className="mb-6 mt-3 text-2xl leading-snug text-ivory sm:text-3xl">
            Advocacia com estratégia, técnica e atendimento personalizado.
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Meu compromisso é oferecer uma advocacia pautada na transparência,
              agilidade e segurança jurídica.
            </p>
            <p>
              Atuo na prevenção e resolução de conflitos nas áreas de Direito
              Imobiliário, Direito Civil e Direito de Família, prestando
              atendimento consultivo e contencioso para pessoas físicas e
              empresas.
            </p>
            <p>
              Cada cliente recebe uma análise individualizada, buscando sempre a
              solução mais eficiente e segura para o seu caso.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}