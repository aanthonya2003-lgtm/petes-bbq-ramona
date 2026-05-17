import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="ember-stage relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-light)]">
        404 · Off the trail
      </span>
      <h1 className="mt-5 font-display text-display font-black text-[var(--color-cream)]">
        Page <em className="italic text-[var(--color-accent-light)]">smoked away</em>.
      </h1>
      <p className="mt-5 max-w-md text-lead text-[var(--color-cream-sub)]">
        That link doesn&rsquo;t exist on the pit. Head back to the menu or call the kitchen.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Back to Home
          <ArrowUpRight size={14} aria-hidden />
        </Link>
        <Link href="/menu" className="btn btn-ghost">View Menu</Link>
      </div>
    </main>
  );
}
