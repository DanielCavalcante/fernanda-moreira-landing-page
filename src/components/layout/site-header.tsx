"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-serif text-lg tracking-wide text-ivory"
        >
          Fernanda Moreira Bezerra
          <span className="ml-2 hidden text-xs uppercase tracking-[0.28em] text-primary sm:inline">
            Advocacia
          </span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-9">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
          <button
            type="button"
            className="p-2 text-ivory md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold-light"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <Button asChild className="w-full">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
