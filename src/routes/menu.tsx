import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import coffees from "@/assets/coffees.jpg";
import hero from "@/assets/hero.jpg";
import bread from "@/assets/garlic-bread.jpg";
import { INSTAGRAM, PHONE, PHONE_DISPLAY } from "@/components/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Bun n Brew Cafe, Nigdi" },
      {
        name: "description",
        content:
          "Explore Bun n Brew's cold coffees, burgers and quick bites in Nigdi, Pimpri-Chinchwad.",
      },
      { property: "og:title", content: "Menu — Bun n Brew Cafe" },
      {
        property: "og:description",
        content: "Thick cold coffee, burgers and cheese garlic bread near Akurdi Railway Station.",
      },
    ],
  }),
  component: Menu,
});

const groups = [
  {
    title: "Cold Coffee",
    eyebrow: "The brew",
    image: coffees,
    items: ["Thick Cold Coffee", "Chocolate Cold Coffee", "Regular Cold Coffee"],
  },
  {
    title: "Burgers",
    eyebrow: "The buns",
    image: hero,
    items: ["Special Chicken Burger", "Devil's Burger"],
  },
  {
    title: "Quick Bites",
    eyebrow: "Something extra",
    image: bread,
    items: ["Cheese Garlic Bread"],
  },
];

function Menu() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-20 md:pb-20 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Made to order</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <h1 className="text-6xl font-extrabold leading-[0.9] md:text-8xl">
            The <span className="font-serif font-normal italic text-primary">menu</span>
          </h1>
          <p className="max-w-md text-base leading-7 text-muted-foreground md:justify-self-end">
            A short list of the things Bun n Brew is known for. Today's prices and the complete menu are available by phone or Instagram.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-5 pb-24">
        {groups.map((group, index) => (
          <article
            key={group.title}
            className="grid overflow-hidden rounded-[2rem] border border-border bg-card md:grid-cols-[0.8fr_1.2fr]"
          >
            <div className={`relative min-h-64 md:min-h-full ${index % 2 ? "md:order-2" : ""}`}>
              <img
                src={group.image}
                alt={group.title === "Burgers" ? "Bun n Brew burger and cold coffee" : group.title === "Cold Coffee" ? "Cold coffees at Bun n Brew" : "Cheese garlic bread at Bun n Brew"}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <p className="absolute bottom-5 left-5 rounded-full bg-background/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
                {group.eyebrow}
              </p>
            </div>

            <div className="p-7 md:p-10">
              <h2 className="text-4xl font-bold md:text-5xl">{group.title}</h2>
              <ul className="mt-6 divide-y divide-border">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center justify-between gap-4 py-5">
                    <span className="font-display text-xl font-semibold md:text-2xl">{item}</span>
                    <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Call for price</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-70">Need today's specials?</p>
            <h2 className="mt-2 text-4xl font-bold">Call or check Instagram.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Call {PHONE_DISPLAY}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="rounded-full border border-secondary-foreground/20 px-6 py-3 font-semibold hover:bg-secondary-foreground/10">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
