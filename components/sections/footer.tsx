import { Instagram, Facebook, Twitter } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { SITE } from "@/lib/site";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Menu",      href: "#menu" },
      { label: "Drinks",    href: SITE.pages.drinkMenu, external: true },
      { label: "Events",    href: SITE.pages.events,    external: true },
      { label: "Catering",  href: "#catering" },
      { label: "Reviews",   href: "#reviews" },
    ],
  },
  {
    title: "Order",
    links: [
      { label: "Pickup (Toast)", href: SITE.order.toast,    external: true },
      { label: "DoorDash",       href: SITE.order.doordash, external: true },
      { label: "Uber Eats",      href: SITE.order.uber,     external: true },
      { label: "Gift Cards",     href: SITE.rewards.gift,   external: true },
      { label: "Rewards",        href: SITE.rewards.join,   external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: SITE.phone.display, href: SITE.phone.tel },
      { label: SITE.email,         href: `mailto:${SITE.email}` },
      { label: SITE.address.full,  href: SITE.maps, external: true },
    ],
  },
];

const SOCIAL = [
  { Icon: Instagram, label: "Instagram", href: SITE.social.instagram },
  { Icon: Facebook,  label: "Facebook",  href: SITE.social.facebook },
  { Icon: Twitter,   label: "Twitter",   href: SITE.social.twitter },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border-sub)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-7 max-w-sm text-body text-[var(--color-cream-sub)]">
              Slow-smoked barbecue on Main Street in Ramona, California. Open since 2015 —
              follow the smoke off Highway 67.
            </p>

            <ul className="mt-8 flex gap-2">
              {SOCIAL.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} — opens in new tab`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-sub)] text-[var(--color-cream)] transition-colors duration-150 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
                  >
                    <Icon size={16} aria-hidden />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.social.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yelp — opens in new tab"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--color-border-sub)] px-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-cream)] transition-colors duration-150 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
                >
                  Yelp
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-light)]">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-[0.9rem] text-[var(--color-cream-sub)] transition-colors duration-150 hover:text-[var(--color-cream)]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border-sub)] pt-7 text-[0.78rem] text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Pete&rsquo;s BBQ · Ramona, CA</p>
          <p>Designed for the smell of oak smoke at sundown.</p>
        </div>
      </div>
    </footer>
  );
}
