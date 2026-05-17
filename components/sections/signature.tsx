import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SITE } from "@/lib/site";

const FEATURED = [
  {
    badge: "Most Ordered",
    name: "Brisket Fries",
    desc: "Hand-cut fries piled with smoked brisket, fried onions, shredded cheese, and house BBQ. Ramona's quiet legend.",
    price: "$17.99",
    href: SITE.order.toast,
  },
  {
    badge: "Pitmaster's Cut",
    name: "St. Louis Pork Ribs",
    desc: "Slow-smoked over oak. Tender pull, deep bark. Available by the quarter, half, or full rack.",
    price: "From $18.99",
    href: SITE.order.toast,
  },
  {
    badge: "Hidden Gem",
    name: "Gyro Plate",
    desc: "Pita, fries, salad, tzatziki on the side. The off-menu favorite reviewers won't stop writing about.",
    price: "From $8.99",
    href: SITE.order.toast,
  },
];

export function Signature() {
  return (
    <section
      id="signature"
      aria-labelledby="signature-heading"
      className="relative bg-[var(--color-bg)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>The Craft of the Pit</SectionEyebrow>
          <h2 id="signature-heading" className="mt-5 font-display text-h1 font-bold text-[var(--color-cream)]">
            Three plates that built the <em className="italic text-[var(--color-accent-light)]">reputation</em>.
          </h2>
          <p className="mt-5 text-lead font-light text-[var(--color-cream-sub)]">
            Pulled from a thousand reviews. Ordered on repeat. Smoked the same way since 2015.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {FEATURED.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 90}>
              <article className="card flex h-full flex-col p-7">
                <span className="inline-flex w-fit items-center rounded-full border border-[var(--color-border)] bg-[oklch(67%_0.18_45_/_0.08)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-light)]">
                  {item.badge}
                </span>

                <h3 className="mt-5 font-display text-[1.85rem] font-bold leading-tight text-[var(--color-cream)]">
                  {item.name}
                </h3>

                <p className="mt-3 text-body text-[var(--color-cream-sub)]">{item.desc}</p>

                <div className="mt-7 flex items-center justify-between border-t border-[var(--color-border-sub)] pt-5">
                  <span className="font-display text-[1.4rem] font-bold text-[var(--color-gold)]">
                    {item.price}
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-[var(--color-accent-light)] transition-colors duration-150 hover:text-[var(--color-cream)]"
                    aria-label={`Order ${item.name} on Toast`}
                  >
                    Order
                    <ArrowUpRight size={14} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
