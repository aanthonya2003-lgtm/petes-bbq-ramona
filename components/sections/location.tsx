import { ArrowUpRight, MapPin, Phone, Wallet, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SITE } from "@/lib/site";

export function Location() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative bg-[var(--color-bg)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Find Us</SectionEyebrow>
          <h2 id="location-heading" className="mt-5 font-display text-h1 font-bold text-[var(--color-cream)]">
            Follow the smoke down <em className="italic text-[var(--color-accent-light)]">Main Street</em>.
          </h2>
          <p className="mt-5 text-lead font-light text-[var(--color-cream-sub)]">
            The outdoor wood smoker is visible from the road. If you can see it, you&rsquo;re close.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Hours table */}
          <Reveal className="lg:col-span-7">
            <article className="card flex h-full flex-col p-7 lg:p-9">
              <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-light)]">
                <Clock size={12} aria-hidden /> Hours
              </div>

              <ul className="mt-6 divide-y divide-[var(--color-border-sub)]">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex items-baseline justify-between gap-4 py-3.5">
                    <span className="font-display text-[1.05rem] text-[var(--color-cream)]">
                      {h.day}
                    </span>
                    <span className="font-sans text-[0.95rem] font-medium text-[var(--color-cream-sub)]">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[oklch(67%_0.18_45_/_0.06)] p-5">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-light)]">
                    Happy Hour
                  </p>
                  <p className="mt-1 font-display text-[1.05rem] text-[var(--color-cream)]">
                    {SITE.happyHour}
                  </p>
                </div>
                <a href="#happy-hour" className="text-[0.8rem] font-semibold text-[var(--color-accent-light)] hover:text-[var(--color-cream)]">
                  See deals →
                </a>
              </div>
            </article>
          </Reveal>

          {/* Right column stack */}
          <div className="grid gap-5 lg:col-span-5">
            <Reveal delay={90}>
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center justify-between p-6"
                aria-label={`Open ${SITE.address.full} in Google Maps`}
              >
                <div>
                  <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-light)]">
                    <MapPin size={12} aria-hidden /> Address
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] font-bold leading-tight text-[var(--color-cream)]">
                    {SITE.address.line1}
                  </p>
                  <p className="text-[0.9rem] text-[var(--color-cream-sub)]">
                    {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                  </p>
                </div>
                <ArrowUpRight size={18} aria-hidden className="text-[var(--color-muted)] transition-colors duration-150 group-hover:text-[var(--color-accent-light)]" />
              </a>
            </Reveal>

            <Reveal delay={140}>
              <a
                href={SITE.phone.tel}
                className="card group flex items-center justify-between p-6"
                aria-label={`Call ${SITE.phone.display}`}
              >
                <div>
                  <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-light)]">
                    <Phone size={12} aria-hidden /> Phone
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] font-bold leading-tight text-[var(--color-cream)]">
                    {SITE.phone.display}
                  </p>
                  <p className="text-[0.9rem] text-[var(--color-cream-sub)]">Catering · Pickup · Questions</p>
                </div>
                <ArrowUpRight size={18} aria-hidden className="text-[var(--color-muted)] transition-colors duration-150 group-hover:text-[var(--color-accent-light)]" />
              </a>
            </Reveal>

            <Reveal delay={190}>
              <article className="card p-6">
                <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-light)]">
                  <Wallet size={12} aria-hidden /> Payments
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {SITE.payments.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-[var(--color-border-sub)] px-3 py-1 text-[0.78rem] text-[var(--color-cream)]"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
