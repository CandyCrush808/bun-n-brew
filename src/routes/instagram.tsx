import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram as InstagramIcon, Play } from "lucide-react";
import coffees from "@/assets/coffees.jpg";
import hero from "@/assets/hero.jpg";
import bread from "@/assets/garlic-bread.jpg";
import instagramLogo from "@/assets/instagramlogo.jpg";
import { INSTAGRAM } from "@/components/site";

export const Route = createFileRoute("/instagram")({
  head: () => ({
    meta: [
      { title: "Instagram — Bun n Brew" },
      {
        name: "description",
        content: "Follow Bun n Brew for coffee, burgers, quick bites and café moments in Nigdi.",
      },
      { property: "og:title", content: "Instagram — Bun n Brew" },
      {
        property: "og:description",
        content: "Follow @bun_n_brewcafe for the latest Bun n Brew moments.",
      },
    ],
  }),
  component: InstagramPage,
});

const posts = [
  { image: hero, title: "Loaded buns", note: "The burger break", rotate: "md:-rotate-3", position: "md:col-start-1 md:row-start-1" },
  { image: coffees, title: "The brew", note: "Cold coffee weather", rotate: "md:rotate-2", position: "md:col-start-2 md:row-start-1 md:mt-16" },
  { image: bread, title: "For the table", note: "Cheesy garlic bread", rotate: "md:-rotate-2", position: "md:col-start-3 md:row-start-1 md:mt-8" },
  { image: coffees, title: "Coffee break", note: "Slow down a little", rotate: "md:rotate-3", position: "md:col-start-1 md:row-start-2 md:mt-8" },
  { image: hero, title: "Burger mood", note: "Big bite energy", rotate: "md:-rotate-1", position: "md:col-start-2 md:row-start-2 md:-mt-6" },
  { image: bread, title: "Something extra", note: "Made for sharing", rotate: "md:rotate-2", position: "md:col-start-3 md:row-start-2 md:mt-12" },
];

const cravings = [
  { image: coffees, name: "Thick Cold Coffee", tag: "The classic" },
  { image: hero, name: "Special Chicken Burger", tag: "The hungry one" },
  { image: bread, name: "Cheese Garlic Bread", tag: "The shareable one" },
];

const moments = [
  { image: hero, title: "Burger mood" },
  { image: coffees, title: "Cold coffee moments" },
  { image: bread, title: "Something cheesy" },
];

function InstagramPage() {
  return (
    <div className="overflow-hidden bg-secondary text-secondary-foreground">
      <section className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/15 bg-secondary-foreground/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-secondary-foreground/10"
            >
              <InstagramIcon size={15} aria-hidden="true" /> @bun_n_brewcafe
            </a>
            <h1 className="mt-7 max-w-4xl text-6xl font-extrabold leading-[0.84] tracking-[-0.05em] md:text-8xl">
              Little moments.
              <br />
              <span className="font-serif font-normal italic text-primary">Big cravings.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-secondary-foreground/65">
              Coffee breaks, loaded buns and little café moments — collected in the Bun n Brew scrapbook.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Follow on Instagram <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-5 lg:min-w-[360px]">
            <div className="w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-secondary-foreground/10 bg-secondary-foreground/5 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
              <img
                src={instagramLogo}
                alt="Bun n Brew café logo"
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="grid w-full grid-cols-3 gap-3 border-t border-secondary-foreground/15 pt-5 text-center">
              <div>
                <p className="text-2xl font-extrabold">Fresh</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] opacity-50">Coffee & bites</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">Daily</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] opacity-50">11am–10pm</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">Nigdi</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] opacity-50">Our café</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["01", "Start here", "Coffee, buns & the Bun n Brew vibe", "/menu"],
            ["02", "Most loved", "The things worth ordering first", "/menu"],
            ["03", "Find us", "Come say hello in Nigdi", "/visit"],
          ].map(([number, title, copy, href]) => (
            <Link
              key={number}
              to={href as "/menu" | "/visit"}
              className="group rounded-[1.5rem] border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-secondary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-primary">{number}</span>
                <ArrowUpRight size={17} className="opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </div>
              <h2 className="mt-7 text-2xl font-bold">{title}</h2>
              <p className="mt-2 text-sm opacity-55">{copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 md:pb-36">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Bun n Brew scrapbook</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-6xl">
              Our little <span className="font-serif font-normal italic text-primary">moments.</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs font-bold uppercase tracking-[0.15em] opacity-60 transition hover:opacity-100 md:block"
          >
            View Instagram ↗
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:grid-rows-2 md:gap-x-10 md:gap-y-2">
          {posts.map((post, index) => (
            <a
              key={post.title + index}
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Bun n Brew Instagram — ${post.title}`}
              className={`group relative block ${post.position} ${post.rotate} transition duration-500 hover:z-20 md:hover:rotate-0 md:hover:scale-105`}
            >
              <div className="absolute -top-3 left-1/2 z-10 h-8 w-16 -translate-x-1/2 rotate-[-4deg] bg-primary/70 shadow-sm backdrop-blur-sm" />
              <div className="bg-[#f5efe5] p-3 pb-6 shadow-[0_18px_35px_rgba(0,0,0,0.18)] md:p-4 md:pb-7">
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[4/4.6] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
                    Open Instagram ↗
                  </span>
                </div>
                <div className="px-2 pt-4 text-[#27231e]">
                  <p className="font-serif text-2xl italic">{post.title}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] opacity-45">{post.note}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-xl border-y-2 border-secondary-foreground/15 py-6 text-center md:mt-20">
          <p className="font-serif text-3xl italic md:text-4xl">“Coffee. Buns. Good times.”</p>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Bun n Brew · Nigdi</p>
        </div>
      </section>

      <section className="bg-background px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What's on the table</p>
              <h2 className="mt-3 text-5xl font-extrabold leading-[0.9] md:text-7xl">
                What we're <span className="font-serif font-normal italic text-primary">craving.</span>
              </h2>
            </div>
            <Link to="/menu" className="text-xs font-bold uppercase tracking-[0.15em] text-primary">See full menu →</Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cravings.map((item, index) => (
              <Link key={item.name} to="/menu" className={`group ${index === 1 ? "md:translate-y-8" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
                  <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur">{item.tag}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Explore this on the menu →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Behind the bun</p>
            <h2 className="mt-5 text-5xl font-extrabold leading-[0.88] md:text-6xl">
              Made to be <span className="font-serif font-normal italic">shared.</span>
            </h2>
            <p className="mt-6 text-sm leading-7 opacity-75">
              The pour. The grill. The first bite. Follow the real feed for new café moments.
            </p>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-bold text-primary">
              See Instagram <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={coffees} alt="Cold coffee at Bun n Brew" loading="lazy" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
            <img src={bread} alt="Cheese garlic bread at Bun n Brew" loading="lazy" className="mt-10 aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Instagram moments</p>
              <h2 className="mt-3 text-4xl font-extrabold md:text-6xl">
                See the <span className="font-serif font-normal italic text-primary">mood.</span>
              </h2>
            </div>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-[0.15em] opacity-60 hover:opacity-100">
              Open profile ↗
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {moments.map((moment) => (
              <a
                key={moment.title}
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open Bun n Brew Instagram — ${moment.title}`}
                className="group relative overflow-hidden rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img src={moment.image} alt={moment.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-white text-black" aria-hidden="true">
                  <Play size={15} fill="currentColor" />
                </span>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xl font-bold">{moment.title}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] opacity-65">Open on Instagram</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 md:p-14">
          <div className="absolute -right-16 -top-16 size-44 rounded-full border-[3px] border-primary/20" />
          <div className="absolute right-20 top-20 size-4 rotate-45 bg-primary/60" />
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Bun n Brew moodboard</p>
            <h2 className="mt-4 text-5xl font-extrabold leading-[0.9] md:text-7xl">
              Coffee.
              <br />
              <span className="font-serif font-normal italic text-primary">Buns.</span>
              <br />
              Good times.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {["slow mornings", "one more bite", "coffee first", "meet me here"].map((word, index) => (
              <div
                key={word}
                className={`flex min-h-36 items-center justify-center rounded-[1.5rem] border border-border p-5 text-center ${index % 2 ? "md:rotate-2 bg-secondary text-secondary-foreground" : "md:-rotate-2 bg-background"}`}
              >
                <span className="font-serif text-2xl italic">{word}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
            {["Coffee", "Burgers", "Nigdi", "Good times"].map((tag) => (
              <span key={tag} className="rounded-full border border-border px-4 py-2">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-24 text-center md:py-32">
        <InstagramIcon className="mx-auto text-primary" size={30} aria-hidden="true" />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">The real feed is waiting</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-5xl font-extrabold leading-[0.9] md:text-7xl">
          See what we're <span className="font-serif font-normal italic text-primary">up to.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-muted-foreground">
          New food, café moments and whatever is brewing next.
        </p>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
          Visit @bun_n_brewcafe <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>
    </div>
  );
}
