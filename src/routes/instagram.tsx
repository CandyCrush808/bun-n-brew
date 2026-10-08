import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram as InstagramIcon } from "lucide-react";
import coffees from "@/assets/coffees.jpg";
import hero from "@/assets/hero.jpg";
import bread from "@/assets/garlic-bread.jpg";
import { INSTAGRAM } from "@/components/site";

export const Route = createFileRoute("/instagram")({
  head: () => ({
    meta: [
      { title: "Instagram — Bun n Brew" },
      { name: "description", content: "See Bun n Brew through coffee, burgers, quick bites and café moments." },
    ],
  }),
  component: InstagramPage,
});

const posts = [
  { image: hero, title: "Loaded buns", note: "The burger break", rotate: "-rotate-3", position: "md:col-start-1 md:row-start-1" },
  { image: coffees, title: "The brew", note: "Cold coffee weather", rotate: "rotate-2", position: "md:col-start-2 md:row-start-1 md:mt-20" },
  { image: bread, title: "For the table", note: "Cheesy garlic bread", rotate: "-rotate-2", position: "md:col-start-3 md:row-start-1 md:mt-8" },
  { image: coffees, title: "Coffee break", note: "Slow down a little", rotate: "rotate-3", position: "md:col-start-1 md:row-start-2 md:mt-10" },
  { image: hero, title: "Burger mood", note: "Big bite energy", rotate: "-rotate-1", position: "md:col-start-2 md:row-start-2 md:-mt-8" },
  { image: bread, title: "Something extra", note: "Made for sharing", rotate: "rotate-2", position: "md:col-start-3 md:row-start-2 md:mt-14" },
];

function InstagramPage() {
  return (
    <main className="overflow-hidden bg-secondary text-secondary-foreground">
      <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 md:pb-16 md:pt-28">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/15 bg-secondary-foreground/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
            <InstagramIcon size={15} />
            @bun_n_brewcafe
          </div>
          <h1 className="mt-7 text-6xl font-extrabold leading-[0.82] tracking-[-0.05em] md:text-8xl">
            Little moments.<br />
            <span className="font-serif font-normal italic text-primary">Big cravings.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-secondary-foreground/65">
            A scrapbook of coffee breaks, loaded buns and the little café moments that make Bun n Brew feel like your place.
          </p>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:-translate-y-0.5">
            Open Instagram <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="pointer-events-none absolute -right-12 top-12 hidden size-36 rotate-12 rounded-full border-[3px] border-secondary-foreground/20 md:block" />
        <div className="pointer-events-none absolute right-24 top-28 hidden h-1 w-32 -rotate-12 bg-primary/50 md:block" />
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-28 md:pb-40">
        <div className="absolute left-[8%] top-10 hidden h-px w-44 -rotate-12 bg-secondary-foreground/20 md:block" />
        <div className="absolute right-[12%] top-32 hidden size-16 rotate-12 border-2 border-primary/40 md:block" />
        <div className="grid gap-12 md:grid-cols-3 md:grid-rows-2 md:gap-x-10 md:gap-y-2">
          {posts.map((post, index) => (
            <a
              key={post.title + index}
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Bun n Brew Instagram — ${post.title}`}
              className={`group relative block ${post.position} ${post.rotate} transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105`}
            >
              <div className="absolute -top-4 left-1/2 z-10 h-10 w-20 -translate-x-1/2 rotate-[-4deg] bg-primary/70 shadow-sm backdrop-blur-sm" />
              <div className="bg-[#f5efe5] p-3 pb-7 shadow-[0_18px_35px_rgba(0,0,0,0.18)] md:p-4 md:pb-8">
                <div className="relative overflow-hidden bg-black">
                  <img src={post.image} alt={post.title} loading="lazy" className="aspect-[4/4.6] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">View post ↗</span>
                </div>
                <div className="px-2 pt-4 text-[#27231e]">
                  <p className="font-serif text-2xl italic">{post.title}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] opacity-45">{post.note}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-xl rotate-[-1deg] border-y-2 border-secondary-foreground/15 py-6 text-center md:mt-10">
          <p className="font-serif text-3xl italic md:text-4xl">“Coffee. Buns. Good times.”</p>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Bun n Brew · Nigdi</p>
        </div>
      </section>

      <section className="bg-background px-5 py-20 text-center md:py-28">
        <InstagramIcon className="mx-auto text-primary" size={30} />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">More on Instagram</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-5xl font-extrabold leading-[0.9] md:text-7xl">
          The real feed is <span className="font-serif font-normal italic text-primary">waiting.</span>
        </h2>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground">
          Visit @bun_n_brewcafe <ArrowUpRight size={17} />
        </a>
      </section>
    </main>
  );
}
