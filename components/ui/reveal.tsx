"use client";

import * as React from "react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealTag = "div" | "section" | "article" | "header" | "footer" | "ul" | "li";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
};

/**
 * IntersectionObserver-driven reveal. 700ms cubic-bezier(0.22, 1, 0.36, 1)
 * + 24px lift. One animation per scroll trigger. Reduced-motion compatible
 * via globals.css.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return React.createElement(
    as,
    {
      ref: ref as React.Ref<HTMLElement>,
      className: cn("reveal", className),
    },
    children,
  );
}
