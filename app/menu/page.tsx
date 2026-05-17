import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MENU } from "@/lib/menu";
import { SITE } from "@/lib/site";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Full Menu — Brisket, Ribs, Tri-Tip & More",
  description:
    "The complete Pete's BBQ menu — plates, BBQ fries, burgers, sandwiches, burritos, gyros, sides, kids, and dessert. Verified prices, Ramona CA.",
  alternates: { canonical: "/menu" },
};

const PLATFORMS = [
  { label: "Pickup · Toast", href: SITE.order.toast,    dot: "var(--color-accent)" },
  { label: "DoorDash",       href: SITE.order.doordash, dot: "#FF3008" },
  { label: "Uber Eats",      href: SITE.order.uber,     dot: "#06C167" },
];

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-28 lg:pt-32">
        <header className="mx-auto max-w-[1280px] px-5 pb-14 lg:px-10">
          <Reveal>
            <SectionEyebrow>Menu</SectionEyebrow>
            <h1 className="mt-5 font-display text-h1 font-bold text-[var(--color-cream)]">
              The full <em className="italic text-[var(--color-accent-light)]">menu</em>.
            </h1>
            <p className="mt-5 max-w-2xl text-lead font-light text-[var(--color-cream-sub)]">
              Every plate, every price. Pulled directly from the kitchen at 977 Main St.
            </p>
          </Reveal>
        </header>

        <div className="mx-auto max-w-[1280px] px-5 pb-24 lg:px-10">
          {MENU.map((cat) => (
            <section key={cat.id} id={cat.id} className="border-t border-[var(--color-border-sub)] py-14 first:border-t-0">
              <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-h2 font-bold text-[var(--color-cream)]">
                    {cat.label}
                  </h2>
                  {cat.note && (
                    <p className="mt-2 text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {cat.note}
                    </p>
                  )}
                </div>
              </Reveal>

              <ul className="grid gap-x-10 gap-y-6 md:grid-cols-2">
                {cat.items.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={i * 35} className="border-b border-[var(--color-border-sub)] pb-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-[1.2rem] font-bold text-[var(--color-cream)]">
                        {item.name}
                      </h3>
                      <span aria-hidden className="flex-1 translate-y-[-3px] border-b border-dotted border-[var(--color-border-sub)]" />
                      <span className="font-display text-[1.05rem] font-bold text-[var(--color-gold)]">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="mt-1.5 text-body text-[var(--color-cream-sub)]">{item.desc}</p>
                    )}
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}

          <Reveal className="mt-12 flex flex-col gap-4 rounded-2xl border border-[var(--color-border-sub)] bg-[var(--color-card)] p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-[1.25rem] italic text-[var(--color-cream)]">
              Ordering tonight?
            </p>
            <ul className="flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-sub)] bg-[var(--color-bg)] px-4 py-2 text-[0.82rem] font-semibold text-[var(--color-cream)] transition-colors duration-150 hover:border-[var(--color-accent)]"
                  >
                    <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: p.dot }} />
                    {p.label}
                    <ArrowUpRight size={14} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
