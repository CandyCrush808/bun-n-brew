import { createFileRoute } from "@tanstack/react-router";
import { ADDRESS, MAPS, PHONE, PHONE_DISPLAY } from "@/components/site";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Bun n Brew, Akurdi Railway Station Road, Nigdi" },
      { name: "description", content: "Find Bun n Brew at Ganesh Enclave, Akurdi Railway Station Road, Nigdi. Open daily 11am–10pm." },
      { property: "og:title", content: "Visit Bun n Brew, Nigdi" },
      { property: "og:description", content: "Address, hours and directions for Bun n Brew Cafe." },
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
      <div>
        <h1 className="text-6xl font-bold md:text-8xl">Come <span className="font-serif font-normal italic text-primary">by.</span></h1>
        <dl className="mt-10 space-y-8">
          <div><dt className="text-sm uppercase tracking-[0.25em] text-primary">Address</dt><dd className="mt-2 text-lg">{ADDRESS}</dd></div>
          <div><dt className="text-sm uppercase tracking-[0.25em] text-primary">Hours</dt><dd className="mt-2 text-lg">Monday – Sunday, 11am – 10pm</dd></div>
          <div><dt className="text-sm uppercase tracking-[0.25em] text-primary">Phone</dt><dd className="mt-2 text-lg"><a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a></dd></div>
        </dl>
        <a href={MAPS} target="_blank" rel="noreferrer" className="mt-10 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Open in Google Maps</a>
      </div>
      <iframe
        title="Bun n Brew on the map"
        src="https://www.google.com/maps?q=Bun+n+Brew+Ganesh+Enclave+Akurdi+Railway+Station+Road+Nigdi&output=embed"
        className="min-h-[420px] w-full rounded-3xl border border-border"
        loading="lazy"
      />
    </section>
  );
}
