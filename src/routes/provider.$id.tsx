import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { providers } from "@/lib/providers";

export const Route = createFileRoute("/provider/$id")({
  loader: ({ params }) => {
    const p = providers.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Provider"} — SkillNear AI` },
      { name: "description", content: loaderData?.about ?? "Provider profile on SkillNear AI." },
      { property: "og:title", content: `${loaderData?.name ?? "Provider"} — SkillNear AI` },
      { property: "og:description", content: loaderData?.about ?? "Provider profile on SkillNear AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProviderPage,
});

function ProviderPage() {
  const p = Route.useLoaderData();
  const [slot, setSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <Link to="/" hash="explore" className="text-sm text-muted-foreground hover:text-foreground">← Back to results</Link>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">✓ VERIFIED</span>
            <h1 className="mt-4 text-5xl font-extrabold">{p.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{p.category} • {p.tags}</p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              <span>📍 {p.distance} km away</span><span>⭐ {p.rating} rating</span><span>🪑 {p.seats} seats left</span><span className="font-semibold text-accent">{p.match}% AI match</span>
            </div>
            <div className="mt-10 rounded-2xl border bg-card p-6">
              <h2 className="text-2xl font-bold">About the provider</h2>
              <p className="mt-3 text-muted-foreground">{p.about}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Instructor profile and experience", "ID / certificate verified", "Sample videos and achievements", "Student ratings and feedback"].map((x) => (
                  <li key={x} className="rounded-xl bg-muted px-4 py-3 text-sm">✓ {x}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border bg-card p-6 shadow-card lg:sticky lg:top-24">
            {booked ? (
              <div className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-highlight text-2xl">✓</div>
                <h2 className="mt-4 text-2xl font-bold">Booking confirmed</h2>
                <p className="mt-2 text-muted-foreground">{p.name} · {slot}. We'll send you a reminder before the session.</p>
                <button onClick={() => { setBooked(false); setSlot(null); }} className="mt-6 text-sm font-semibold text-primary underline">Reschedule</button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold">Book a class</h2>
                <p className="mt-1 font-display text-3xl font-extrabold">₹{p.fee.toLocaleString("en-IN")}<span className="text-base font-normal text-muted-foreground"> / month</span></p>
                <p className="mt-6 text-sm font-semibold">Available slots</p>
                <div className="mt-2 grid gap-2">
                  {p.slots.map((s) => (
                    <button key={s} onClick={() => setSlot(s)}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${slot === s ? "border-primary bg-secondary" : "hover:border-primary"}`}>
                      {s}
                    </button>
                  ))}
                </div>
                <button disabled={!slot} onClick={() => setBooked(true)}
                  className="mt-6 w-full rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition disabled:opacity-40">
                  Continue to booking
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">Demo mode — no payment is taken.</p>
              </>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
