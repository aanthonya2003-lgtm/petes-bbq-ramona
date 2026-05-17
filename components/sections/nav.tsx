"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Menu",       href: "#menu" },
  { label: "Drinks",     href: SITE.pages.drinkMenu, external: true },
  { label: "Events",     href: SITE.pages.events,    external: true },
  { label: "Catering",   href: "#catering" },
  { label: "Gift Cards", href: SITE.rewards.gift,    external: true },
  { label: "Rewards",    href: SITE.rewards.join,    external: true },
] as const;

const ORDER_OPTIONS = [
  { label: "Pickup",    sub: "Toast",     href: SITE.order.toast,    dot: "var(--color-accent)" },
  { label: "DoorDash",  sub: "Delivery",  href: SITE.order.doordash, dot: "#FF3008" },
  { label: "Uber Eats", sub: "Delivery",  href: SITE.order.uber,     dot: "#06C167" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-[450ms]",
        scrolled
          ? "border-b border-[var(--color-border-sub)] bg-[oklch(12%_0.015_55_/_0.78)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-5 py-4 lg:px-10">
        <Link href="/" aria-label="Pete's BBQ — Home">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[0.85rem] font-medium text-[var(--color-cream)] transition-colors duration-150 hover:text-[var(--color-accent-light)]"
              >
                {l.label}
              </Link>
            </li>
          ))}

          {/* Order dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOrderOpen(true)}
            onMouseLeave={() => setOrderOpen(false)}
          >
            <button
              type="button"
              className="btn btn-primary !px-5 !py-2 text-[0.85rem]"
              aria-haspopup="menu"
              aria-expanded={orderOpen}
              onClick={() => setOrderOpen((v) => !v)}
            >
              Order Online
              <ChevronDown size={14} aria-hidden />
            </button>

            <div
              role="menu"
              className={cn(
                "absolute right-0 top-[calc(100%+10px)] w-[260px] rounded-2xl border border-[var(--color-border-sub)] bg-[var(--color-surface)] p-2 shadow-2xl transition-all duration-200",
                orderOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0",
              )}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              {ORDER_OPTIONS.map((o) => (
                <a
                  key={o.label}
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[0.875rem] text-[var(--color-cream)] transition-colors duration-150 hover:bg-[var(--color-card)]"
                >
                  <span className="flex items-center gap-2.5">
                    <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: o.dot }} />
                    {o.label}
                  </span>
                  <span className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {o.sub}
                  </span>
                </a>
              ))}
            </div>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-sub)] text-[var(--color-cream)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[68px] z-30 origin-top overflow-hidden border-t border-[var(--color-border-sub)] bg-[var(--color-bg)] lg:hidden",
          open ? "max-h-[100dvh]" : "max-h-0",
        )}
        style={{ transition: "max-height 420ms var(--ease-out-expo)" }}
      >
        <ul className="flex flex-col gap-1 px-5 py-6">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block py-3 font-display text-2xl text-[var(--color-cream)] hover:text-[var(--color-accent-light)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-4 grid gap-2">
            {ORDER_OPTIONS.map((o) => (
              <a
                key={o.label}
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-[var(--color-border-sub)] bg-[var(--color-card)] px-4 py-3 text-[var(--color-cream)]"
              >
                <span className="flex items-center gap-2.5 font-semibold">
                  <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: o.dot }} />
                  Order via {o.label}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">{o.sub}</span>
              </a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  );
}
