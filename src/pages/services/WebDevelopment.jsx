import { DetailsHeroSection, Heading, ServiceCard } from "@/components";
import { Button } from "@/components/ui/button";
import { webDevelopmentData } from "@/data";
import { ArrowLeft, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function WebDevelopmentPage() {
  const { title, description, features, process, technologies } =
    webDevelopmentData;

  return (
    <>
      {/* Hero Section */}
      <DetailsHeroSection title={title} description={description} />

      {/* Service Section */}
      <section className="container mx-auto px-4 py-12">
        <Button variant="link" size="lg" className="mb-8" asChild>
          <Link to="/services">
            <ArrowLeft className="mr-2" /> Back to services
          </Link>
        </Button>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ServiceCard service={feature} index={index} key={index} />
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8 mt-12 text-center">
          Our <Heading> Web Development </Heading> Process
        </h2>

        {/* Process Section */}
        <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-8">
          We follow a structured approach to ensure we meet your business goals
          and deliver a website that aligns with your vision. Our process
          includes:
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <ServiceCard service={step} index={index} key={index} />
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8 mt-12 text-center">
          <Heading> Technologies </Heading> We Use
        </h2>

        {/* Technologies Section */}
        <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-8">
          We work with a wide range of modern tools and technologies to deliver
          the best results. These include:
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <ServiceCard
              service={{
                title: tech.name,
                icon: tech.icon,
                description: tech.description,
              }}
              index={index}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}
