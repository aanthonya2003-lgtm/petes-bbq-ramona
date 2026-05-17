# Pete's BBQ — Ramona

Production website for **Pete's BBQ** (977 Main St, Ramona, CA · est. 2015).

Stack: **Next.js 16 · React 19 · TypeScript strict · Tailwind v4 (OKLCH) · next/font · Framer Motion · Lucide**.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck    # strict TypeScript pass
pnpm build && pnpm start
```

## Architecture

```
app/
  layout.tsx          ← Root layout: fonts, metadata, JSON-LD Restaurant schema, grain
  page.tsx            ← Homepage (all sections in order)
  menu/page.tsx       ← Full menu, all 8 categories
  catering/page.tsx   ← Catering hero + reusable Catering section
  order/page.tsx      ← Order landing + Location
  opengraph-image.tsx ← Edge-rendered 1200×630 OG image
  sitemap.ts          ← /, /menu, /catering, /order
  robots.ts
  not-found.tsx       ← Custom 404 ("smoked away")
  icon.svg            ← Brand mark (ember on charcoal)
  globals.css         ← @theme tokens, ember keyframes, marquee, reveal, grain

components/
  sections/
    nav.tsx           ← Sticky transparent→dark, dropdown, mobile drawer
    hero.tsx          ← Ember-glow CSS stage + 14 floating particles
    marquee.tsx       ← Continuous loop strip
    signature.tsx     ← 3 featured cards (Brisket Fries, Ribs, Gyro)
    menu.tsx          ← Tabbed full menu (client)
    order.tsx         ← Toast / DoorDash / Uber Eats (color-coded)
    happy-hour.tsx    ← Mon–Fri 1–5PM banner
    catering.tsx      ← 4 specs + 4 combos + call-to-cater CTA
    reviews.tsx       ← 3 review cards with platform attribution
    rewards.tsx       ← Loyalty + Gift Cards (2-up)
    location.tsx      ← Hours table + address/phone/payments
    footer.tsx        ← 3 nav columns + social
  ui/
    grain-overlay.tsx ← Fixed SVG noise (3.8% opacity, overlay)
    reveal.tsx        ← IntersectionObserver entrance (700ms, 24px lift)
    section-eyebrow.tsx
    wordmark.tsx

lib/
  site.ts             ← Verified facts: address, phone, hours, ratings, links
  menu.ts             ← Verified menu (every price from petessd.com)
  utils.ts            ← cn() helper
```

## Design tokens

All colors live as Tailwind v4 `@theme` CSS variables in `app/globals.css` using **OKLCH**:

| Token | OKLCH | Hex (approx) |
|---|---|---|
| `--color-bg` | `oklch(12% 0.015 55)` | `#0E0B08` |
| `--color-surface` | `oklch(17% 0.018 50)` | `#181310` |
| `--color-card` | `oklch(20% 0.022 50)` | `#201914` |
| `--color-accent` | `oklch(67% 0.18 45)` | `#E8762C` |
| `--color-accent-light` | `oklch(76% 0.16 60)` | `#F2A84E` |
| `--color-gold` | `oklch(85% 0.11 80)` | `#F2C97E` |
| `--color-cream` | `oklch(94% 0.015 70)` | `#F5EDE4` |
| `--color-cream-sub` | `oklch(76% 0.03 60)` | `#C8B09A` |

**Typography**: Playfair Display (display, italic accents) + DM Sans (body/UI). Both via `next/font`.

**Motion**: One curve — `cubic-bezier(0.22, 1, 0.36, 1)`. UI 150–200ms. Entrances 700ms. Marquee 28s.

**Reduced motion** disables all animation globally via `@media (prefers-reduced-motion: reduce)`.

## The grain

A single fixed `<div>` rendered at the root layer (`z-index: 9`, `mix-blend-mode: overlay`, `opacity: 0.038`). Inline SVG, 300×300 `feTurbulence` (`baseFrequency=0.75`, `numOctaves=4`), tiled. Zero requests.

## Verified data — DO NOT modify without source

Every menu price, link, and number is sourced from **petessd.com** or verified vendor pages.
If a value changes in real life, edit only `lib/site.ts` or `lib/menu.ts`.

## Lighthouse targets

- LCP < 2.5s · INP < 200ms · CLS < 0.1
- Mobile Performance ≥ 85 · A11y ≥ 95 · Best Practices ≥ 95 · SEO ≥ 95
- Initial JS < 150KB gzipped (Next 16 + dynamic islands)

## Deploy

```bash
vercel
```

Headers (`X-Frame-Options`, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`) are set in `next.config.ts` — verify A grade at [securityheaders.com](https://securityheaders.com).
