import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-xl font-bold">
          SkillNear<span className="text-accent"> AI</span>
        </Link>
        <nav className="hidden gap-7 text-sm font-medium md:flex">
          <a href="/#explore" className="hover:text-primary">Explore</a>
          <a href="/#how" className="hover:text-primary">How it works</a>
          <a href="/#partners" className="hover:text-primary">For partners</a>
        </nav>
        <div className="flex gap-2 text-sm font-medium">
          <button className="rounded-full px-4 py-2 hover:bg-muted">Login</button>
          <a href="/#partners" className="rounded-full bg-foreground px-4 py-2 text-background">Join as Partner</a>
        </div>
      </div>
    </header>
  );
}
