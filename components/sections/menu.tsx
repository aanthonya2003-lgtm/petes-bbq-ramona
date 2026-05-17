"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { MENU } from "@/lib/menu";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { cn } from "@/lib/utils";

const PLATFORMS = [
  { label: "Pickup · Toast",  href: SITE.order.toast,    dot: "var(--color-accent)" },
  { label: "DoorDash",        href: SITE.order.doordash, dot: "#FF3008" },
  { label: "Uber Eats",       href: SITE.order.uber,     dot: "#06C167" },
];

export function MenuSection() {
  const firstId = MENU[0]?.id ?? "";
  const [activeId, setActiveId] = useState<string>(firstId);
  const active = MENU.find((c) => c.id === activeId) ?? MENU[0];

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative bg-[var(--color-surface)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Full Menu</SectionEyebrow>
            <h2
              id="menu-heading"
              className="mt-5 font-display text-h1 font-bold text-[var(--color-cream)]"
            >
              Eight categories. <em className="italic text-[var(--color-accent-light)]">One pit.</em>
            </h2>
          </div>
          <a
            href={SITE.pages.foodMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[var(--color-accent-light)] transition-colors duration-150 hover:text-[var(--color-cream)]"
          >
            Full Menu
            <ArrowUpRight size={14} aria-hidden />
          </a>
        </Reveal>

        {/* Tabs */}
        <Reveal className="mt-10">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:flex-wrap md:overflow-visible"
          >
            {MENU.map((c) => {
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${c.id}`}
                  id={`tab-${c.id}`}
                  onClick={() => setActiveId(c.id)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-[0.82rem] font-semibold transition-all duration-200",
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]"
                      : "border-[var(--color-border-sub)] text-[var(--color-cream-sub)] hover:border-[var(--color-border)] hover:text-[var(--color-cream)]",
                  )}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        {active && (
          <div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="mt-10"
          >
            {active.note && (
              <p className="mb-7 max-w-md font-sans text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {active.note}
              </p>
            )}
            <ul className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {active.items.map((item, i) => (
                <Reveal as="li" key={item.name} delay={i * 35} className="border-b border-[var(--color-border-sub)] pb-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-[1.2rem] font-bold leading-tight text-[var(--color-cream)]">
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
          </div>
        )}

        {/* Order strip */}
        <Reveal className="mt-14 flex flex-col gap-4 rounded-2xl border border-[var(--color-border-sub)] bg-[var(--color-bg)] p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-[1.25rem] italic text-[var(--color-cream)]">
            Ready when you are.
          </p>
          <ul className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-sub)] bg-[var(--color-card)] px-4 py-2 text-[0.82rem] font-semibold text-[var(--color-cream)] transition-colors duration-150 hover:border-[var(--color-accent)]"
                >
                  <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: p.dot }} />
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
