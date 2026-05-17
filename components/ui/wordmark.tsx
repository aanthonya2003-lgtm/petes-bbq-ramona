import { cn } from "@/lib/utils";

type Props = { className?: string; eyebrow?: boolean };

/** PETE'S wordmark — Playfair 900, optional eyebrow line. */
export function Wordmark({ className, eyebrow = true }: Props) {
  return (
    <div className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className="font-display text-[1.45rem] font-black tracking-[-0.02em] text-[var(--color-cream)]"
        style={{ fontStyle: "italic" }}
      >
        PETE&rsquo;S
      </span>
      {eyebrow && (
        <span className="mt-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-cream-sub)]">
          Barbecue · Ramona
        </span>
      )}
    </div>
  );
}
