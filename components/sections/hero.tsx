"use client";

import { useMemo } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { SITE } from "@/lib/site";

type Ember = {
  left: string;
  size: string;
  delay: string;
  duration: string;
  drift: string;
};

function useEmbers(count: number): Ember[] {
  return useMemo(() => {
    // Deterministic pseudo-random (no hydration mismatch).
    const seed = (i: number) => Math.sin(i * 9301 + 49297) * 233280;
    const frac = (i: number) => Math.abs(seed(i) - Math.floor(seed(i)));
    return Array.from({ length: count }, (_, i) => ({
      left: `${(frac(i) * 100).toFixed(2)}%`,
      size: `${(2 + frac(i + 11) * 4).toFixed(2)}px`,
      delay: `${(frac(i + 23) * 8).toFixed(2)}s`,
      duration: `${(8 + frac(i + 41) * 7).toFixed(2)}s`,
      drift: `${((frac(i + 67) - 0.5) * 80).toFixed(2)}px`,
    }));
  }, [count]);
}

export function Hero() {
  const embers = useEmbers(14);

  return (
    <section
      id="hero"
      className="ember-stage relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28 lg:pt-32"
      aria-labelledby="hero-heading"
    >
      {/* Embers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {embers.map((e, i) => (
          <span
            key={i}
            className="ember ember-pulse"
            style={{
              left: e.left,
              bottom: "-20px",
              width: e.size,
              height: e.size,
              animation: `emberRise ${e.duration} var(--ease-out-expo) ${e.delay} infinite`,
              ["--drift" as string]: e.drift,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Veil for legibility */}
      <div aria-hidden className="ember-veil absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-20 lg:px-10 lg:pb-28">
        {/* Eyebrow pill */}
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[oklch(67%_0.18_45_/_0.08)] px-4 py-1.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-light)]">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Ramona, California · Est. 2015
        </span>

        <h1
          id="hero-heading"
          className="text-display font-display font-black text-[var(--color-cream)]"
        >
          Smoke.{" "}
          <span className="font-display italic text-[var(--color-accent-light)]">Fire.</span>{" "}
          Perfection.
        </h1>

        <p className="mt-6 max-w-xl text-lead font-light text-[var(--color-cream-sub)]">
          {SITE.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={SITE.order.toast}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Order Pickup
            <ArrowUpRight size={16} aria-hidden />
          </a>
          <a href="#menu" className="btn btn-ghost">View Full Menu</a>
        </div>

        {/* Rating strip */}
        <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
          <RatingTile platform="Google"      score={SITE.ratings.google.score}      meta={`${SITE.ratings.google.reviews} reviews`} />
          <RatingTile platform="Yelp"        score={SITE.ratings.yelp.score}        meta={`${SITE.ratings.yelp.reviews} reviews`} />
          <RatingTile platform="TripAdvisor" score={SITE.ratings.tripadvisor.score} meta={SITE.ratings.tripadvisor.note} />
        </ul>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-cream-sub)] lg:flex"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-[var(--color-cream-sub)] to-transparent" />
      </div>
    </section>
  );
}

function RatingTile({ platform, score, meta }: { platform: string; score: string; meta: string }) {
  return (
    <li className="flex items-center gap-2.5">
      <Star size={14} className="fill-[var(--color-gold)] text-[var(--color-gold)]" aria-hidden />
      <span className="font-display text-[1.05rem] font-bold text-[var(--color-cream)]">{score}</span>
      <span className="font-sans text-[0.78rem] text-[var(--color-cream-sub)]">
        {platform} · {meta}
      </span>
    </li>
  );
}
