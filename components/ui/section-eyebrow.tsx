import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode; className?: string };

export function SectionEyebrow({ children, className }: Props) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span aria-hidden className="h-px w-6 bg-[var(--color-accent)]" />
      <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-light)]">
        {children}
      </span>
    </div>
  );
}
