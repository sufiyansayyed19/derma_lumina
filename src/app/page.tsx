// src/app/page.tsx
import Hero from "../components/sections/home/Hero";
import Stats from "../components/sections/home/Stats";
import FeaturedTreatments from "../components/sections/home/FeaturedTreatments";
import Testimonials from "../components/sections/home/Testimonials";
import Faqs from "../components/sections/home/Faqs";
import Newsletter from "../components/sections/home/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <FeaturedTreatments />
      <Testimonials />
      <Faqs />
      <Newsletter />
    </main>
  );
}