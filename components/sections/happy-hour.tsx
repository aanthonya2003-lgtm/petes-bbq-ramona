import { Clock } from "lucide-react";
import { HAPPY_HOUR } from "@/lib/menu";
import { Reveal } from "@/components/ui/reveal";

export function HappyHour() {
  return (
    <section
      id="happy-hour"
      aria-labelledby="happy-heading"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--color-bg) 0%, oklch(20% 0.05 55) 50%, var(--color-bg) 100%)",
        }}
      />
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-10 lg:py-24">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-light)]">
              <Clock size={12} aria-hidden /> Happy Hour
            </p>
            <h2
              id="happy-heading"
              className="mt-3 font-display text-h2 font-bold text-[var(--color-cream)]"
            >
              Monday – Friday · <em className="italic text-[var(--color-accent-light)]">1:00–5:00 PM</em>
            </h2>
          </div>
          <p className="max-w-sm text-body text-[var(--color-cream-sub)]">
            Three deals. Five hours. Dine-in only at 977 Main St.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {HAPPY_HOUR.map((d, i) => (
            <Reveal as="li" key={d.name} delay={i * 90}>
              <article className="card flex items-baseline justify-between p-6">
                <h3 className="font-display text-[1.2rem] font-bold text-[var(--color-cream)]">
                  {d.name}
                </h3>
                <span className="font-display text-[1.4rem] font-bold text-[var(--color-gold)]">
                  {d.price}
                </span>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
