import { ArrowUpRight, Gift, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SITE } from "@/lib/site";

export function Rewards() {
  return (
    <section
      id="rewards"
      aria-labelledby="rewards-heading"
      className="relative bg-[var(--color-surface)] py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] gap-5 px-5 md:grid-cols-2 lg:px-10">
        <Reveal>
          <article className="card flex h-full flex-col gap-7 p-8 lg:p-10">
            <SectionEyebrow>Loyalty Rewards</SectionEyebrow>
            <Sparkles size={28} aria-hidden className="text-[var(--color-accent)]" />
            <div>
              <h2
                id="rewards-heading"
                className="font-display text-h2 font-bold text-[var(--color-cream)]"
              >
                Join free. <em className="italic text-[var(--color-accent-light)]">+25 points</em> on signup.
              </h2>
              <p className="mt-4 text-body text-[var(--color-cream-sub)]">
                Earn on every order — pickup or in-store. Redeem on the meals you order anyway.
              </p>
            </div>
            <a
              href={SITE.rewards.join}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-fit"
            >
              Join Rewards — 25 pts Free
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="card flex h-full flex-col gap-7 p-8 lg:p-10">
            <SectionEyebrow>Gift Cards</SectionEyebrow>
            <Gift size={28} aria-hidden className="text-[var(--color-accent)]" />
            <div>
              <h2 className="font-display text-h2 font-bold text-[var(--color-cream)]">
                The gift of <em className="italic text-[var(--color-accent-light)]">slow-smoked brisket</em>.
              </h2>
              <p className="mt-4 text-body text-[var(--color-cream-sub)]">
                Pick any amount. Delivered digitally — no shipping, no waiting, ready in minutes.
              </p>
            </div>
            <a
              href={SITE.rewards.gift}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-fit"
            >
              Send a Gift Card
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
