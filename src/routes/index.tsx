import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { categories, providers } from "@/lib/providers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillNear AI — Find your next skill, nearby" },
      { name: "description", content: "Discover, compare and book nearby coaching, coding, music, yoga, gym and sports classes with AI-personalised recommendations." },
      { property: "og:title", content: "SkillNear AI — Find your next skill, nearby" },
      { property: "og:description", content: "AI-powered local learning, fitness and activity discovery and booking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = ["Create profile", "Select interests", "Search nearby", "AI ranks options", "Compare providers", "Book & pay"];

function Index() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [maxKm, setMaxKm] = useState(5);
  const [budget, setBudget] = useState(3000);

  const results = useMemo(
    () =>
      providers
        .filter((p) => (cat === "All" || p.category === cat) && p.distance <= maxKm && p.fee <= budget)
        .filter((p) => (p.name + p.tags + p.category).toLowerCase().includes(q.toLowerCase()))
        .sort((a, b) => b.match - a.match),
    [cat, q, maxKm, budget],
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="bg-grain">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
          <span className="inline-block rounded-full bg-highlight px-3 py-1 text-xs font-semibold uppercase tracking-wider">AI match · nearby</span>
          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.02] md:text-7xl">
            Find your next skill, <span className="text-primary italic">nearby.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Discover coaching, fitness and activities around you — compare distance, fees, ratings and open seats, then book in one place.
          </p>
          <div className="mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl border bg-card p-2 shadow-card sm:flex-row">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Try “guitar”, “yoga”, “python”…"
              className="flex-1 rounded-xl bg-transparent px-4 py-3 outline-none"
            />
            <a href="#explore" className="rounded-xl bg-primary px-6 py-3 text-center font-semibold text-primary-foreground">
              Explore classes →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            {[["Discover", "Classes near you"], ["Compare", "Fees, slots, ratings"], ["Book & pay", "Reminders included"]].map(([t, d]) => (
              <div key={t}><div className="font-display text-lg font-bold">{t}</div><div className="text-muted-foreground">{d}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="explore" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Recommended near you</p>
            <h2 className="mt-1 text-4xl font-bold">AI-personalised results</h2>
          </div>
          <div className="flex flex-wrap gap-5 text-sm">
            <label className="flex flex-col gap-1">Distance ≤ {maxKm} km
              <input type="range" min={1} max={5} step={0.5} value={maxKm} onChange={(e) => setMaxKm(+e.target.value)} className="accent-primary" />
            </label>
            <label className="flex flex-col gap-1">Budget ≤ ₹{budget.toLocaleString("en-IN")}
              <input type="range" min={1000} max={3000} step={100} value={budget} onChange={(e) => setBudget(+e.target.value)} className="accent-primary" />
            </label>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c ? "border-foreground bg-foreground text-background" : "bg-card hover:border-primary"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <Link key={p.id} to="/provider/$id" params={{ id: p.id }}
              className="group flex flex-col rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary font-display text-xl font-bold text-primary">{p.name[0]}</div>
                <span className="rounded-full bg-highlight px-2.5 py-1 text-xs font-bold">{p.match}% match</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.tags}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <span>📍 {p.distance} km</span><span>⭐ {p.rating}</span>
                <span>🕒 {p.time}</span><span className={p.seats <= 3 ? "font-semibold text-accent" : ""}>🪑 {p.seats} seats</span>
              </div>
              <div className="mt-5 flex items-center justify-between border-t pt-4">
                <span className="font-display text-lg font-bold">₹{p.fee.toLocaleString("en-IN")}<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                <span className="text-sm font-semibold text-primary group-hover:underline">View details →</span>
              </div>
            </Link>
          ))}
          {results.length === 0 && <p className="text-muted-foreground">No classes match these filters — try widening distance or budget.</p>}
        </div>
      </section>

      <section id="how" className="scroll-mt-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-4xl font-bold">How it works</h2>
          <p className="mt-2 max-w-xl opacity-80">Our AI ranks options by interest match, distance, schedule, budget, availability and ratings — and learns from your feedback.</p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <li key={s} className="rounded-2xl border border-primary-foreground/20 p-5">
                <div className="font-display text-3xl font-extrabold text-highlight">0{i + 1}</div>
                <div className="mt-2 font-medium">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="partners" className="mx-auto grid max-w-6xl scroll-mt-20 gap-6 px-5 py-20 md:grid-cols-3">
        {[
          ["For learners", "Less time searching, more relevant nearby options and progress tracking."],
          ["For instructors & clubs", "Verified profiles, class publishing, slot management and booking records."],
          ["For administrators", "Visibility into users, partners, bookings, commissions and activity."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border bg-card p-6">
            <h3 className="text-2xl font-bold">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © 2026 SkillNear AI · Prashant Gautam · Aditya Prabhat · Lalit Kumar
      </footer>
    </div>
  );
}
