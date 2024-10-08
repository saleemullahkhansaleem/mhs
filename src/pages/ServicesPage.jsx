import { Button } from "@/components/ui/button";
import {
  DetailsHeroSection,
  Heading,
  PortfolioSection,
  ServiceCard,
  Testimonial,
} from "@/components";
import { servicesData } from "@/data";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Our Services"
        description="Empowering your business with cutting-edge solutions."
      />

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We <Heading>Offer</Heading>
        </h2>
        <p className="mb-12 text-muted-foreground max-w-3xl mx-auto text-center">
          At MHS Tech Venture, we deliver innovative software solutions to help
          businesses thrive. From web and mobile development to custom portals
          and consultancy, our expert team ensures your digital transformation
          is seamless and scalable.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>
      </section>

      <PortfolioSection />
      <Testimonial />

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <Heading>Elevate Your Business?</Heading>
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Get in touch with us to discuss how we can help take your business
            to the next level with our innovative solutions.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
