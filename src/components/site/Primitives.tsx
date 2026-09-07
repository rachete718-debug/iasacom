import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { VIDEOS, waLink } from "@/lib/iasa";
import { cn } from "@/lib/utils";

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- Buttons ---------- */
const baseBtn =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";

export function GradientButton({
  children,
  href,
  to,
  className,
  type,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  className?: string;
  type?: "submit";
}) {
  const cls = cn(
    baseBtn,
    "btn-glow text-primary-foreground shadow-[0_10px_30px_-12px_var(--violet)]",
    className,
  );
  const style = { background: "var(--grad-brand)" };
  if (to) {
    return (
      <Link to={to} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        style={style}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} style={style}>
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  href,
  to,
  className,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  className?: string;
}) {
  const cls = cn(baseBtn, "glass text-foreground hover:border-primary/60 hover:bg-white/10", className);
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href ?? "#"}
      className={cls}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function WhatsAppButton({
  message,
  label = "Écrire sur WhatsApp",
  className,
}: {
  message: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        baseBtn,
        "btn-glow bg-whatsapp text-[oklch(0.16_0.03_275)] hover:bg-whatsapp/90",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.13.07-1.82-.11a16.6 16.6 0 0 1-1.65-.61c-2.9-1.25-4.8-4.17-4.94-4.37-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.12.07.68-.17 1.36Z" />
      </svg>
      {label}
    </a>
  );
}

/* ---------- Layout helpers ---------- */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
      <div className="container-iasa">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[11px] tracking-[0.22em] text-primary uppercase sm:text-xs">
      ✦ {children}
    </p>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center,
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="font-display text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative pt-28 pb-10 sm:pt-32 sm:pb-14">
      <div className="container-iasa">
        <Reveal>
          <SectionTitle as="h1" eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </Reveal>
        {children ? (
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("glass card-hover rounded-2xl p-6 sm:p-7", className)}>{children}</div>;
}

/* ---------- YouTube ---------- */
export function YouTubeEmbed({
  videoKey,
  className,
}: {
  videoKey: keyof typeof VIDEOS;
  className?: string;
}) {
  const video = VIDEOS[videoKey];
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;
  return (
    <figure className={cn("mx-auto w-full max-w-[340px]", className)}>
      <div className="glass overflow-hidden rounded-2xl p-2">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black">
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube.com/embed/${video.id}?rel=0&playsinline=1`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        {video.title} —{" "}
        <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          voir sur YouTube
        </a>
      </figcaption>
    </figure>
  );
}

/* ---------- Offer card ---------- */
export function OfferCard({
  name,
  price,
  delay,
  desc,
  features,
  wa,
  highlight,
}: {
  name: string;
  price: string;
  delay: string;
  desc: string;
  features: string[];
  wa: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass card-hover flex h-full flex-col rounded-2xl p-6 sm:p-7",
        highlight && "border-primary/50",
      )}
    >
      {highlight ? (
        <span className="mb-3 self-start rounded-full bg-primary/15 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
          Populaire
        </span>
      ) : null}
      <h3 className="font-display text-xl font-bold">{name}</h3>
      <p className="mt-2 font-display text-3xl font-bold grad-text">{price}</p>
      <p className="mt-1 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
        Délai : {delay}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex gap-2 text-muted-foreground">
            <span aria-hidden="true" className="mt-0.5 text-primary">
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2 pt-2">
        <WhatsAppButton message={wa} label="Commander" className="px-5 text-xs" />
        <GhostButton to="/contact" className="px-5 text-xs">
          Demander un devis
        </GhostButton>
      </div>
    </div>
  );
}

export function OfferGrid({
  offers,
}: {
  offers: Array<{
    name: string;
    price: string;
    delay: string;
    desc: string;
    features: string[];
    wa: string;
    highlight?: boolean;
  }>;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((o, i) => (
        <Reveal key={o.name} delay={(i % 3) * 90}>
          <OfferCard {...o} />
        </Reveal>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Prêt à donner vie à votre projet ?",
  text = "Parlons-en dès aujourd'hui. Réponse rapide, proposition claire, sans engagement.",
  message,
}: {
  title?: string;
  text?: string;
  message: string;
}) {
  return (
    <Section>
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="iasa-orb"
            style={{ width: 320, height: 320, background: "var(--violet)", top: -140, right: -80 }}
          />
          <h2 className="relative font-display text-2xl font-bold text-balance sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {text}
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton message={message} label="Parlons de votre projet" />
            <GhostButton to="/contact">Demander un devis</GhostButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
