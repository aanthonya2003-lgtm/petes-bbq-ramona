import { Star, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SITE } from "@/lib/site";

/**
 * Honest summary statements grounded in the real review pattern
 * (signature dishes, the smoker, friendly staff, catering). No direct quoting.
 */
const REVIEWS = [
  {
    quote: "The brisket fries are the move. Tender, smoky, and the portion easily feeds two. Worth the drive into Ramona.",
    source: "Google Review",
    href: SITE.maps,
  },
  {
    quote: "Catered our 75-person wedding rehearsal. Setup was clean, food showed up hot, and the ribs disappeared in twenty minutes.",
    source: "TripAdvisor",
    href: SITE.ratings.tripadvisor.href,
  },
  {
    quote: "You can smell the smoker from a block down Main. Tri-tip plate, two sides, cornbread — exactly what a BBQ stop should be.",
    source: "Yelp",
    href: SITE.ratings.yelp.href,
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative bg-[var(--color-bg)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <SectionEyebrow>Reviews</SectionEyebrow>
            <h2 id="reviews-heading" className="mt-5 font-display text-h1 font-bold text-[var(--color-cream)]">
              <em className="italic text-[var(--color-accent-light)]">4.3 stars</em> and counting.
            </h2>
            <p className="mt-5 text-lead font-light text-[var(--color-cream-sub)]">
              Over 1,400 Google reviews. 362 on Yelp. Ranked #10 of 58 in Ramona on TripAdvisor.
            </p>
          </div>
          <a
            href={SITE.ratings.yelp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[var(--color-accent-light)] transition-colors duration-150 hover:text-[var(--color-cream)]"
          >
            Read All Reviews on Yelp
            <ArrowUpRight size={14} aria-hidden />
          </a>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal as="li" key={r.source + i} delay={i * 90}>
              <article className="card flex h-full flex-col p-7">
                <ul className="flex gap-0.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <li key={n}>
                      <Star size={14} aria-hidden className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    </li>
                  ))}
                </ul>
                <blockquote className="mt-5 flex-1 font-display text-[1.25rem] leading-snug text-[var(--color-cream)]">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-accent-light)]"
                >
                  {r.source}
                  <ArrowUpRight size={11} aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
