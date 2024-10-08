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

export default function WebDevelopmentPage() {
  const service = servicesData.find(
    (service) => service.title === "Web Development"
  );

  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title={service.title}
        description="Empowering your business with responsive, dynamic, and scalable web development."
      />

      {/* Service Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Service <Heading>{service.title}</Heading>
        </h2>
        <p className="mb-12 text-muted-foreground max-w-3xl mx-auto text-center">
          {service.description}
        </p>
        <div className="">
          Our web development services focus on delivering high-performance
          websites with a modern look, optimized for speed and scalability. We
          leverage the latest technologies like React, Next.js, and other modern
          frameworks to build dynamic, interactive websites that adapt to your
          business needs.
        </div>
      </section>

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
