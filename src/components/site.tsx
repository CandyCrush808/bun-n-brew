import { Link } from "@tanstack/react-router";

export const PHONE = "+917972871114";
export const PHONE_DISPLAY = "079728 71114";
export const ADDRESS =
  "Shop No. 5, Ganesh Enclave, Akurdi Railway Station Road, Nigdi, Pimpri-Chinchwad, Maharashtra 411044";
export const MAPS = "https://maps.app.goo.gl/DoXmjm6BveUuq7gP7";
export const INSTAGRAM = "https://www.instagram.com/bun_n_brewcafe/";

export function Header() {
  const link = "text-sm text-muted-foreground transition-colors hover:text-foreground";
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-xl font-bold">
          Bun <span className="font-serif italic font-normal text-primary">n</span> Brew
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/menu" className={link} activeProps={{ className: "text-foreground" }}>Menu</Link>
          <Link to="/visit" className={link} activeProps={{ className: "text-foreground" }}>Visit</Link>
          <a href={`tel:${PHONE}`} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            Call
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">Bun n Brew</p>
          <p className="font-serif text-lg italic text-muted-foreground">बन एन ब्रू</p>
        </div>
        <p className="text-sm text-muted-foreground">{ADDRESS}</p>
        <div className="space-y-1 text-sm">
          <p className="text-muted-foreground">Open daily · 11am – 10pm</p>
          <a href={`tel:${PHONE}`} className="block hover:text-primary">{PHONE_DISPLAY}</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="block hover:text-primary">@bun_n_brewcafe</a>
        </div>
      </div>
    </footer>
  );
}
