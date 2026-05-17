import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { SITE } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0B08",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://petessd.com"),
  title: {
    default: "Pete's BBQ — Slow-Smoked Barbecue in Ramona, California",
    template: "%s · Pete's BBQ Ramona",
  },
  description:
    "Pete's BBQ in Ramona — slow-smoked brisket, ribs, and tri-tip since 2015. Order pickup, delivery, or catering for up to 500 guests.",
  applicationName: "Pete's BBQ Ramona",
  keywords: [
    "Pete's BBQ", "BBQ Ramona", "barbecue San Diego County",
    "Ramona catering", "smoked brisket Ramona", "Ramona restaurants",
  ],
  authors: [{ name: "Pete's BBQ" }],
  alternates: { canonical: "https://petessd.com/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://petessd.com/",
    siteName: "Pete's BBQ Ramona",
    title: "Pete's BBQ — Slow-Smoked Barbecue in Ramona",
    description: "Follow the smoke off Main Street. Brisket, ribs, tri-tip. Pickup, delivery, catering.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PetesBBQSD",
    creator: "@PetesBBQSD",
    title: "Pete's BBQ — Ramona",
    description: "Slow-smoked barbecue since 2015. Pickup, delivery, catering up to 500.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "@id": "https://petessd.com/#restaurant",
  name: "Pete's BBQ",
  image: "https://petessd.com/og.png",
  url: "https://petessd.com/",
  telephone: "+17607890584",
  priceRange: "$$",
  servesCuisine: ["Barbecue", "American", "Catering"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "977 Main St",
    addressLocality: "Ramona",
    addressRegion: "CA",
    postalCode: "92065",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.0414, longitude: -116.8678 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "10:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday"], opens: "10:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "20:00" },
  ],
  paymentAccepted: "Credit, Debit, Apple Pay, Google Pay, EBT",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.3", reviewCount: "1400" },
  sameAs: [
    SITE.social.instagram,
    SITE.social.facebook,
    SITE.social.twitter,
    SITE.social.yelp,
  ],
  hasMenu: SITE.pages.foodMenu,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-[var(--color-bg)]"
        >
          Skip to content
        </a>
        <GrainOverlay />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </body>
    </html>
  );
}
