import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="px-6 pb-8 pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center gap-5 border-b border-border pb-10">
          <Image
            src="/logo.png"
            alt={siteConfig.legalName}
            width={64}
            height={64}
            className="h-14 w-auto"
          />
          <span className="font-serif text-xl text-ivory">
            {siteConfig.legalName}
          </span>
          <p className="max-w-md text-sm text-muted-foreground">
            {siteConfig.role} — atendimento presencial e online em todo o Brasil.
          </p>
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-3">
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              Escritório
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.contact.oab}</li>
              <li>{siteConfig.contact.hours}</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  WhatsApp: {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              Redes
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  {siteConfig.contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.legalName}. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
}
