import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Signature } from "@/components/sections/signature";
import { MenuSection } from "@/components/sections/menu";
import { Order } from "@/components/sections/order";
import { HappyHour } from "@/components/sections/happy-hour";
import { Catering } from "@/components/sections/catering";
import { Reviews } from "@/components/sections/reviews";
import { Rewards } from "@/components/sections/rewards";
import { Location } from "@/components/sections/location";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Signature />
        <MenuSection />
        <Order />
        <HappyHour />
        <Catering />
        <Reviews />
        <Rewards />
        <Location />
      </main>
      <Footer />
    </>
  );
}
