import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import logoAsset from "@/assets/logo-iasa.png.asset.json";
import { EMAIL, NAV_LINKS, TAGLINE, WA_MESSAGES, WHATSAPP_DISPLAY, mailto, waLink } from "@/lib/iasa";
import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Logo IASA"
      width={40}
      height={40}
      className={cn("size-10 rounded-lg object-contain", className)}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "glass-strong" : "bg-transparent",
        )}
      >
        <div className="container-iasa flex h-16 items-center justify-between gap-4 sm:h-18">
          <Link to="/" className="flex items-center gap-3" aria-label="IASA — accueil">
            <Logo />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-tight">IASA</span>
              <span className="block font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                Agency
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow hidden min-h-11 items-center rounded-full px-5 text-sm font-semibold text-primary-foreground lg:inline-flex"
            style={{ background: "var(--grad-brand)" }}
          >
            Parler de mon projet ↗
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="glass flex size-11 items-center justify-center rounded-xl xl:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-foreground transition-all",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 h-0.5 w-5 bg-foreground transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-foreground transition-all",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background/95 px-5 pt-24 pb-10 backdrop-blur-xl transition-all duration-300 xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-xl px-4 py-3 text-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              activeProps={{ className: "text-foreground bg-white/5" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex min-h-12 items-center justify-center rounded-full px-6 font-semibold text-primary-foreground"
            style={{ background: "var(--grad-brand)" }}
          >
            Parler de mon projet ↗
          </a>
          <a
            href={mailto("Demande d'information — IASA")}
            className="glass inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 pt-14 pb-10">
      <div className="container-iasa">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-display text-xl font-bold">IASA</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {TAGLINE}. Agence digitale créative : web, intelligence artificielle, vidéo et création
              visuelle.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services/sites-web" className="hover:text-foreground">
                  Sites web
                </Link>
              </li>
              <li>
                <Link to="/services/ugc-ia" className="hover:text-foreground">
                  UGC IA
                </Link>
              </li>
              <li>
                <Link to="/services/montage-video" className="hover:text-foreground">
                  Montage vidéo
                </Link>
              </li>
              <li>
                <Link to="/services/publicites" className="hover:text-foreground">
                  Publicités produits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Agence</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/a-propos" className="hover:text-foreground">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-foreground">
                  Notre vision
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/collaboration" className="hover:text-foreground">
                  Collaboration
                </Link>
              </li>
              <li>
                <Link to="/processus" className="hover:text-foreground">
                  Processus
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={waLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={mailto("Demande d'information — IASA")} className="break-all hover:text-foreground">
                  {EMAIL}
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Formulaire de devis
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="hover:text-foreground">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} IASA. Tous droits réservés.</p>
          <p className="font-mono tracking-wider">{TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div aria-hidden="true" className="iasa-bg">
        <div className="iasa-grid" />
        <div
          className="iasa-orb"
          style={{ width: 420, height: 420, background: "var(--sky)", top: -120, left: -100 }}
        />
        <div
          className="iasa-orb"
          style={{
            width: 380,
            height: 380,
            background: "var(--pink)",
            top: "35%",
            right: -140,
            animationDelay: "-7s",
          }}
        />
        <div
          className="iasa-orb"
          style={{
            width: 340,
            height: 340,
            background: "var(--violet)",
            bottom: -140,
            left: "30%",
            animationDelay: "-14s",
          }}
        />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
