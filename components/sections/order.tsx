import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SITE } from "@/lib/site";

const CARDS = [
  {
    title: "Pickup",
    platform: "Toast Tab",
    href: SITE.order.toast,
    desc: "Skip the line. Order ahead, pull up to 977 Main St, and follow the smoke.",
    accent: "var(--color-accent)",
    cta: "Order on Toast",
  },
  {
    title: "DoorDash",
    platform: "Delivery",
    href: SITE.order.doordash,
    desc: "Hot brisket and ribs to your door anywhere DoorDash reaches Ramona.",
    accent: "#FF3008",
    cta: "Order on DoorDash",
  },
  {
    title: "Uber Eats",
    platform: "Delivery",
    href: SITE.order.uber,
    desc: "Loaded fries, plates, and burritos delivered fast across the area.",
    accent: "#06C167",
    cta: "Order on Uber Eats",
  },
];

export function Order() {
  return (
    <section
      id="order"
      aria-labelledby="order-heading"
      className="relative bg-[var(--color-bg)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Order Your Way</SectionEyebrow>
          <h2 id="order-heading" className="mt-5 font-display text-h1 font-bold text-[var(--color-cream)]">
            Three ways to <em className="italic text-[var(--color-accent-light)]">eat tonight</em>.
          </h2>
          <p className="mt-5 text-lead font-light text-[var(--color-cream-sub)]">
            Pickup direct or delivery via your platform of choice. Same kitchen, same smoke.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90}>
              <article
                className="card flex h-full flex-col p-7"
                style={{ ["--brand" as string]: c.accent } as React.CSSProperties}
              >
                <span
                  aria-hidden
                  className="h-1 w-12 rounded-full"
                  style={{ background: c.accent }}
                />
                <h3 className="mt-5 font-display text-[1.75rem] font-bold leading-tight text-[var(--color-cream)]">
                  {c.title}
                </h3>
                <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {c.platform}
                </p>
                <p className="mt-5 flex-1 text-body text-[var(--color-cream-sub)]">{c.desc}</p>

                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-[0.875rem] font-semibold text-[var(--color-cream)] transition-all duration-200 hover:-translate-y-px"
                  style={{ borderColor: c.accent }}
                >
                  {c.cta}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
