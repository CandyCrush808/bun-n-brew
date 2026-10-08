import { Link } from "@tanstack/react-router";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

export const PHONE = "+917972871114";
export const PHONE_DISPLAY = "079728 71114";
export const ADDRESS =
  "Shop No. 5, Ganesh Enclave, Akurdi Railway Station Road, Nigdi, Pimpri-Chinchwad, Maharashtra 411044";
export const MAPS = "https://maps.app.goo.gl/DoXmjm6BveUuq7gP7";
export const INSTAGRAM = "https://www.instagram.com/bun_n_brewcafe/";

const navLink =
  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Bun n Brew home"
          className="font-display text-xl font-extrabold tracking-tight"
        >
          Bun <span className="font-serif font-normal italic text-primary">n</span> Brew
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          <Link to="/" className={navLink} activeProps={{ className: `${navLink} text-foreground` }}>
            Home
          </Link>
          <Link to="/menu" className={navLink} activeProps={{ className: `${navLink} text-foreground` }}>
            Menu
          </Link>
          <Link to="/visit" className={navLink} activeProps={{ className: `${navLink} text-foreground` }}>
            Visit
          </Link>
          <Link to="/instagram" className={navLink} activeProps={{ className: `${navLink} text-foreground` }}>
            Instagram
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Call us
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
        >
          {open ? <X aria-hidden="true" size={20} /> : <MenuIcon aria-hidden="true" size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-muted"
              activeProps={{ className: "rounded-2xl bg-muted px-4 py-3 font-semibold text-primary" }}
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-muted"
              activeProps={{ className: "rounded-2xl bg-muted px-4 py-3 font-semibold text-primary" }}
            >
              Menu
            </Link>
            <Link
              to="/visit"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-muted"
              activeProps={{ className: "rounded-2xl bg-muted px-4 py-3 font-semibold text-primary" }}
            >
              Visit
            </Link>
            <Link
              to="/instagram"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-muted"
              activeProps={{ className: "rounded-2xl bg-muted px-4 py-3 font-semibold text-primary" }}
            >
              Instagram
            </Link>
            <a
              href={`tel:${PHONE}`}
              onClick={closeMenu}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-3xl font-extrabold tracking-tight">
              Bun <span className="font-serif font-normal italic text-primary">n</span> Brew
            </Link>
            <p className="mt-2 font-serif text-lg italic text-muted-foreground">बन एन ब्रू</p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Thick cold coffee, loaded burgers and easygoing café moments near Akurdi Railway Station.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Explore</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/menu" className="text-muted-foreground hover:text-foreground">Menu</Link>
              <Link to="/visit" className="text-muted-foreground hover:text-foreground">Visit</Link>
              <Link to="/instagram" className="text-muted-foreground hover:text-foreground">Instagram</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Find us</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{ADDRESS}</p>
            <p className="mt-3 text-sm text-muted-foreground">Open daily · 11am – 10pm</p>
            <a href={`tel:${PHONE}`} className="mt-3 inline-block text-sm font-semibold hover:text-primary">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bun n Brew. All rights reserved.</p>
          <a href={MAPS} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Get directions →
          </a>
        </div>
      </div>
    </footer>
  );
}
