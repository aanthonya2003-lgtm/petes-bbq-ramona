import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { Catering } from "@/components/sections/catering";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ArrowUpRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catering — Up to 500 Guests Across San Diego County",
  description:
    "Pete's BBQ catering for weddings, corporate, and backyard parties across San Diego County. Full-service from $35/person, min 50 guests.",
  alternates: { canonical: "/catering" },
};

export default function CateringPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-28 lg:pt-32">
        <header className="mx-auto max-w-[1280px] px-5 pb-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>Catering</SectionEyebrow>
            <h1 className="mt-5 font-display text-h1 font-bold text-[var(--color-cream)]">
              From 50 to <em className="italic text-[var(--color-accent-light)]">500 guests</em>.
            </h1>
            <p className="mt-5 max-w-2xl text-lead font-light text-[var(--color-cream-sub)]">
              Smoked the same way we&rsquo;ve done it on Main Street since 2015 — brought to your venue,
              your office, or your backyard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phone.tel} className="btn btn-primary">
                <Phone size={14} aria-hidden />
                Call to Cater — {SITE.phone.display}
              </a>
              <a
                href={SITE.pages.catering}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Catering Details
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
          </Reveal>
        </header>

        <Catering />
      </main>
      <Footer />
    </>
  );
}
