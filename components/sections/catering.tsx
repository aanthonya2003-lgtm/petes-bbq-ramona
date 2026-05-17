import { ArrowUpRight, Phone, Users, MapPin, Calendar, Utensils } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { COMBOS } from "@/lib/menu";
import { SITE } from "@/lib/site";

const SPECS = [
  { icon: Utensils, label: "Full Service", value: `${SITE.catering.perPerson} · min ${SITE.catering.minGuests} guests` },
  { icon: Users,    label: "Pickup / Drop-Off", value: `Combo #4 ($159.99) feeds 10 — scale up` },
  { icon: MapPin,   label: "Delivery Area", value: `${SITE.catering.serviceArea}, ${SITE.catering.deliveryFee}` },
  { icon: Calendar, label: "Advance Notice", value: SITE.catering.advance },
];

export function Catering() {
  return (
    <section
      id="catering"
      aria-labelledby="catering-heading"
      className="relative bg-[var(--color-surface)] py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] gap-14 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Left: copy + specs */}
        <Reveal className="lg:col-span-6">
          <SectionEyebrow>Catering</SectionEyebrow>
          <h2
            id="catering-heading"
            className="mt-5 font-display text-h1 font-bold text-[var(--color-cream)]"
          >
            Feed the <em className="italic text-[var(--color-accent-light)]">whole crowd</em>.
          </h2>
          <p className="mt-5 max-w-lg text-lead font-light text-[var(--color-cream-sub)]">
            Backyard for 50. Wedding for 500. We bring the pit to {SITE.catering.serviceArea} —
            full-service on-site or family-style pickup and delivery.
          </p>

          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {SPECS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-[var(--color-border-sub)] bg-[var(--color-card)] p-5">
                <dt className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-light)]">
                  <Icon size={12} aria-hidden />
                  {label}
                </dt>
                <dd className="mt-2 text-body text-[var(--color-cream)]">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.phone.tel} className="btn btn-primary">
              <Phone size={14} aria-hidden />
              Call to Cater — {SITE.phone.display}
            </a>
            <a
              href={SITE.pages.catering}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Catering Details
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
        </Reveal>

        {/* Right: combo grid */}
        <Reveal className="lg:col-span-6" delay={120}>
          <ul className="grid grid-cols-2 gap-4">
            {COMBOS.map((c) => (
              <li key={c.id}>
                <article className="card flex h-full flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-display text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
                      {c.name}
                    </span>
                    <span className="rounded-full border border-[var(--color-border-sub)] px-2 py-0.5 text-[0.65rem] font-semibold text-[var(--color-cream-sub)]">
                      {c.feeds}
                    </span>
                  </div>
                  <p className="mt-4 font-display text-[1.8rem] font-bold text-[var(--color-cream)]">
                    {c.price}
                  </p>
                  <p className="mt-3 text-[0.78rem] leading-relaxed text-[var(--color-cream-sub)]">
                    {c.notes}
                  </p>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.78rem] text-[var(--color-muted)]">
            On-site full service: {SITE.catering.perPerson} · {SITE.catering.serviceFee} service fee · up to {SITE.catering.maxGuests} guests.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
