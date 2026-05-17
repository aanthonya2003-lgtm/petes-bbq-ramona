import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { Order } from "@/components/sections/order";
import { Location } from "@/components/sections/location";

export const metadata: Metadata = {
  title: "Order Online — Pickup, DoorDash, Uber Eats",
  description:
    "Order Pete's BBQ for pickup on Toast Tab, delivery via DoorDash, or Uber Eats. Open 7 days in Ramona, CA.",
  alternates: { canonical: "/order" },
};

export default function OrderPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-28 lg:pt-32">
        <Order />
        <Location />
      </main>
      <Footer />
    </>
  );
}
