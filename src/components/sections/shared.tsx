import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  panel = false,
  children,
}: {
  id?: string;
  className?: string;
  panel?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-20 sm:py-24",
        panel && "border-y border-border bg-card",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export function RingBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full border border-primary bg-background text-gold-light",
        className,
      )}
    >
      {children}
    </div>
  );
}
