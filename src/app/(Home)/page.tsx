import type { Metadata } from "next";
import AnimatedBusinessHero from "@/components/animated-buisness-hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional web developer specializing in business websites, landing pages, and web applications. Ready to help your business grow online.",
};

export default function Home() {
  return (
    <main className="flex-1">
      <AnimatedBusinessHero />
    </main>
  );
}
