import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import coffees from "@/assets/coffees.jpg";
import bread from "@/assets/garlic-bread.jpg";
import { MAPS, PHONE } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bun n Brew — Cold Coffee & Burgers in Nigdi, Pimpri-Chinchwad" },
      { name: "description", content: "Thick cold coffee, loaded burgers and cheese garlic bread near Akurdi Railway Station, Nigdi. Open daily 11am–10pm." },
      { property: "og:title", content: "Bun n Brew — Cold Coffee & Burgers in Nigdi" },
      { property: "og:description", content: "Thick cold coffee, burgers and quick bites near Akurdi station. Rated 4.8 on Google." },
    ],
  }),
  component: Index,
});

const reviews = [
  { name: "Nitin Khot", text: "Very tasty food Burger and thick cold coffee. Hygiene properly maintained." },
  { name: "Roshan Khan", text: "Must try the cheese garlic bread and the special chicken burger." },
  { name: "Komal Chaudhary", text: "Amazing taste…very reasonable prices…loved devil's burger." },
  { name: "Pratik Manjarekar", text: "Quantity, Quality & price everything is perfect 💯" },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Chicken burger and thick cold coffee at Bun n Brew" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">Nigdi · Pimpri-Chinchwad</p>
          <h1 className="max-w-3xl text-6xl font-bold leading-[0.9] md:text-8xl">
            Thick coffee.<br />
            <span className="font-serif font-normal italic text-primary">Loaded</span> buns.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Your neighbourhood café by Akurdi Railway Station — for friends, students and families.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">See the menu</Link>
            <a href={MAPS} target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-muted">Get directions</a>
          </div>
          <p className="mt-10 text-sm text-muted-foreground"><span className="text-xl font-bold text-foreground">4.8★</span> · 48+ Google reviews · Open daily 11am–10pm</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:items-center">
        <img src={coffees} alt="Thick, chocolate and regular cold coffee" width={1024} height={1024} loading="lazy" className="rounded-3xl" />
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary">The Brew</p>
          <h2 className="mt-3 text-5xl font-bold">Cold coffee, <span className="font-serif font-normal italic">three ways</span></h2>
          <p className="mt-5 text-muted-foreground">Our speciality. Thick, regular and chocolate cold coffee — made with quality ingredients at prices that keep you coming back.</p>
          <ul className="mt-6 space-y-3 font-display text-2xl">
            <li>Thick Cold Coffee</li><li>Chocolate Cold Coffee</li><li>Regular Cold Coffee</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 md:grid-cols-2 md:items-center">
        <div className="md:order-2"><img src={bread} alt="Cheese garlic bread" width={1024} height={1024} loading="lazy" className="rounded-3xl" /></div>
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary">The Bun</p>
          <h2 className="mt-3 text-5xl font-bold">Guest <span className="font-serif font-normal italic">favourites</span></h2>
          <p className="mt-5 text-muted-foreground">What our guests keep talking about in their reviews.</p>
          <ul className="mt-6 space-y-3 font-display text-2xl">
            <li>Special Chicken Burger</li><li>Devil's Burger</li><li>Cheese Garlic Bread</li>
          </ul>
        </div>
      </section>

      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-5xl font-bold">Heard at the <span className="font-serif font-normal italic">table</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-3xl border border-secondary-foreground/15 p-8">
                <blockquote className="font-serif text-2xl leading-snug">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm opacity-70">— {r.name}, Google review</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <h2 className="text-5xl font-bold md:text-7xl">Swing by <span className="font-serif font-normal italic text-primary">today.</span></h2>
        <p className="mt-4 text-muted-foreground">Open every day, 11am to 10pm.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/visit" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Find us</Link>
          <a href={`tel:${PHONE}`} className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-muted">Call ahead</a>
        </div>
      </section>
    </>
  );
}
