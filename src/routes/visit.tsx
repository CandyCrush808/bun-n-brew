import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
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
    <>
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-20 md:pb-20 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Akurdi · Nigdi</p>
        <h1 className="mt-4 text-6xl font-extrabold leading-[0.9] md:text-8xl">Come <span className="font-serif font-normal italic text-primary">by.</span></h1>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-border bg-card p-7 md:p-10">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 text-primary">
                <MapPin size={20} aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.2em]">Address</p>
              </div>
              <p className="mt-3 leading-7 text-muted-foreground">{ADDRESS}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Clock3 size={20} aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.2em]">Hours</p>
              </div>
              <p className="mt-3 text-lg">Monday – Sunday, 11am – 10pm</p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Phone size={20} aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.2em]">Phone</p>
              </div>
              <a href={`tel:${PHONE}`} className="mt-3 block text-lg hover:text-primary">{PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Open in Maps <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={`tel:${PHONE}`} className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-muted">Call us</a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
          <iframe
            title="Map showing Bun n Brew in Nigdi, Pimpri-Chinchwad"
            src="https://www.google.com/maps?q=Bun+n+Brew+Ganesh+Enclave+Akurdi+Railway+Station+Road+Nigdi&output=embed"
            className="min-h-[460px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

