import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AboutSection,
  BlogSection,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  TeamSection,
  Testimonial,
  WhyChooseUs,
} from "@/components";

export default function Home() {
  return (
    <main className="flex-1 pt-16">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TeamSection/>
      <Testimonial />
      <BlogSection />
    </main>
  );
}
