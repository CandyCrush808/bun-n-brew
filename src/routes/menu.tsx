import { createFileRoute } from "@tanstack/react-router";
import { INSTAGRAM, PHONE, PHONE_DISPLAY } from "@/components/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Bun n Brew Cafe, Nigdi" },
      { name: "description", content: "Cold coffees, burgers and garlic bread at Bun n Brew, Nigdi." },
      { property: "og:title", content: "Menu — Bun n Brew Cafe" },
      { property: "og:description", content: "Thick cold coffee, chocolate cold coffee, burgers and cheese garlic bread." },
    ],
  }),
  component: Menu,
});

const groups = [
  { title: "Cold Coffee", items: ["Thick Cold Coffee", "Chocolate Cold Coffee", "Regular Cold Coffee"] },
  { title: "Burgers", items: ["Special Chicken Burger", "Devil's Burger"] },
  { title: "Quick Bites", items: ["Cheese Garlic Bread"] },
];

function Menu() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20">
      <h1 className="text-6xl font-bold md:text-8xl">The <span className="font-serif font-normal italic text-primary">menu</span></h1>
      <p className="mt-4 max-w-lg text-muted-foreground">Our best-loved items. For the full menu and today's prices, give us a call or check Instagram.</p>
      <div className="mt-14 space-y-14">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="border-b border-border pb-3 text-sm uppercase tracking-[0.25em] text-primary">{g.title}</h2>
            <ul>
              {g.items.map((i) => (
                <li key={i} className="border-b border-border py-5 font-display text-3xl">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-14 flex flex-wrap gap-3">
        <a href={`tel:${PHONE}`} className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Call {PHONE_DISPLAY}</a>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-muted">Instagram</a>
      </div>
    </section>
  );
}
