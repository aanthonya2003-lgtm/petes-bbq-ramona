import { Flame } from "lucide-react";

const ITEMS = [
  "Slow-Smoked Daily",
  "Ramona's Premier BBQ",
  "Open 7 Days",
  "Beer on Tap",
  "Happy Hour Mon–Fri 1–5PM",
  "Catering Up to 500 Guests",
  "Loyalty Rewards",
];

export function Marquee() {
  // Duplicate items for seamless loop.
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden border-y border-[var(--color-border-sub)] bg-[var(--color-surface)] py-5"
      role="marquee"
      aria-label="Pete's BBQ highlights"
    >
      <div className="marquee">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-4 font-display text-[1.5rem] italic text-[var(--color-cream-sub)]"
          >
            {item}
            <Flame size={14} aria-hidden className="text-[var(--color-accent)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
