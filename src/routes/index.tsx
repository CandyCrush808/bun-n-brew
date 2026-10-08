import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import coffees from "@/assets/coffees.jpg";
import bread from "@/assets/garlic-bread.jpg";
import { INSTAGRAM as INSTAGRAM_URL, MAPS, PHONE } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bun n Brew — Cold Coffee & Burgers in Nigdi, Pimpri-Chinchwad" },
      {
        name: "description",
        content:
          "Thick cold coffee, loaded burgers and cheese garlic bread near Akurdi Railway Station, Nigdi. Open daily 11am–10pm.",
      },
      { property: "og:title", content: "Bun n Brew — Cold Coffee & Burgers in Nigdi" },
      {
        property: "og:description",
        content: "Thick cold coffee, burgers and quick bites near Akurdi station.",
      },
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
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Chicken burger and thick cold coffee at Bun n Brew"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Nigdi · Pimpri-Chinchwad</p>
          <h1 className="max-w-3xl text-6xl font-extrabold leading-[0.88] md:text-8xl">
            Thick coffee.<br />
            <span className="font-serif font-normal italic text-primary">Loaded</span> buns.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-7 text-muted-foreground">
            Your neighbourhood café by Akurdi Railway Station — for friends, students and families.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">See the menu</Link>
            <a href={MAPS} target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Get directions</a>
          </div>
          <p className="mt-10 text-sm text-muted-foreground"><span className="text-xl font-bold text-foreground">4.8★</span> · 48+ Google reviews · Open daily 11am–10pm</p>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="eyebrow">Start here</p><h2 className="section-title">What are you <span className="serif-accent">craving?</span></h2></div>
          <Link to="/menu" className="text-sm font-bold uppercase tracking-[0.15em] text-primary">Explore everything →</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Coffee", "Thick, chocolate or regular.", coffees],
            ["Burgers", "Loaded and made for proper hunger.", hero],
            ["Quick bites", "Cheesy things for the table.", bread],
          ].map(([title, copy, image], i) => (
            <Link to="/menu" key={title as string} className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border">
              <img src={image as string} alt={title as string} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">0{i + 1}</p>
                <h3 className="mt-2 text-3xl font-bold">{title as string}</h3>
                <p className="mt-2 text-sm text-white/65">{copy as string}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24 text-secondary-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="eyebrow">Most loved</p><h2 className="section-title">The things people <span className="serif-accent">come back for.</span></h2></div>
            <p className="max-w-xl text-sm leading-7 text-secondary-foreground/60 lg:justify-self-end">Start with the signatures, then stay for whatever catches your eye.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Thick Cold Coffee", "Creamy, chilled & our signature sip", coffees],
              ["Special Chicken Burger", "A proper loaded favourite", hero],
              ["Cheese Garlic Bread", "Golden, cheesy & made for sharing", bread],
            ].map(([name, note, image], i) => (
              <article key={name as string} className={i === 1 ? "md:translate-y-10" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                  <img src={image as string} alt={name as string} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur">Favourite</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold">{name as string}</h3>
                <p className="mt-1 text-sm text-secondary-foreground/55">{note as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:items-center">
        <img src={coffees} alt="Thick, chocolate and regular cold coffee" width={1024} height={1024} loading="lazy" className="rounded-[2rem] object-cover shadow-2xl shadow-black/10" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">The Brew</p>
          <h2 className="mt-3 text-5xl font-bold">Cold coffee, <span className="font-serif font-normal italic">three ways</span></h2>
          <p className="mt-5 leading-7 text-muted-foreground">Our speciality. Thick, regular and chocolate cold coffee — made with quality ingredients at prices that keep you coming back.</p>
          <ul className="mt-6 space-y-3 font-display text-2xl">
            <li>Thick Cold Coffee</li><li>Chocolate Cold Coffee</li><li>Regular Cold Coffee</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 md:grid-cols-2 md:items-center">
        <div className="md:order-2"><img src={bread} alt="Cheese garlic bread at Bun n Brew" width={1024} height={1024} loading="lazy" className="rounded-[2rem] object-cover shadow-2xl shadow-black/10" /></div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">The Bun</p>
          <h2 className="mt-3 text-5xl font-bold">Guest <span className="font-serif font-normal italic">favourites</span></h2>
          <p className="mt-5 leading-7 text-muted-foreground">What our guests keep talking about in their reviews.</p>
          <ul className="mt-6 space-y-3 font-display text-2xl">
            <li>Special Chicken Burger</li><li>Devil's Burger</li><li>Cheese Garlic Bread</li>
          </ul>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground md:col-span-5 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Follow the café</p>
            <h2 className="mt-5 text-5xl font-bold leading-[0.9]">See what's <span className="font-serif font-normal italic">brewing.</span></h2>
            <p className="mt-5 text-sm leading-6 opacity-75">Food, coffee and little moments from Bun n Brew.</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-primary-foreground px-5 py-3 text-sm font-bold text-primary">Follow on Instagram →</a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-7">
            {[coffees, hero, bread, coffees].map((image, i) => <img key={i} src={image} alt="Bun n Brew café moment" loading="lazy" className="aspect-square w-full rounded-[1.5rem] object-cover" />)}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-60">What guests say</p>
          <h2 className="mt-2 text-5xl font-bold">Heard at the <span className="font-serif font-normal italic">table</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-[2rem] border border-secondary-foreground/15 p-8 transition-transform hover:-translate-y-1">
                <blockquote className="font-serif text-2xl leading-snug">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm opacity-70">— {r.name}, Google review</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">A table is waiting</p>
        <h2 className="mt-3 text-5xl font-bold md:text-7xl">Swing by <span className="font-serif font-normal italic text-primary">today.</span></h2>
        <p className="mt-4 text-muted-foreground">Open every day, 11am to 10pm.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/visit" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Find us</Link>
          <a href={`tel:${PHONE}`} className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-muted">Call ahead</a>
        </div>
      </section>
    </>
  );
}
