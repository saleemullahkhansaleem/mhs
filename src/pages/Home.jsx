import {
  AboutSection,
  BlogSection,
  Certified,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  TeamSection,
  Testimonial,
  WhyChooseUs,
} from "@/components";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <main className="flex-1 pt-16">
      <Helmet>
        <title>MHS Tech Ventures</title>
        <meta
          name="description"
          content="MHS Tech Ventures provides cutting-edge technology solutions to businesses worldwide. From software development to consultancy, we help you achieve your digital transformation goals."
        />
      </Helmet>
      <HeroSection />
      <Certified />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TeamSection />
      {/* <Testimonial /> */}
      <BlogSection />
    </main>
  );
}
