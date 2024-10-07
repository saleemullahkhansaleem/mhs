import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DetailsHeroSection, Heading } from "@/components";

// Sample portfolio data
const projects = [
  {
    name: "E-commerce Platform",
    description:
      "A scalable and responsive online store built with Next.js and Tailwind CSS.",
    image: "/images/ecommerce-project.webp",
    link: "/portfolio/ecommerce-platform",
  },
  {
    name: "Mobile App Development",
    description:
      "A high-performance mobile app developed for both Android and iOS platforms.",
    image: "/images/mobile-app-project.webp",
    link: "/portfolio/mobile-app-development",
  },
  {
    name: "Custom ERP System",
    description:
      "An enterprise resource planning system designed to streamline business processes.",
    image: "/images/erp-project.webp",
    link: "/portfolio/custom-erp-system",
  },
  {
    name: "Educational Portal",
    description:
      "A web-based portal for online learning and course management.",
    image: "/images/education-portal-project.webp",
    link: "/portfolio/educational-portal",
  },
  {
    name: "Cloud-Based Solution",
    description:
      "A cloud solution that offers seamless integration with various services.",
    image: "/images/cloud-solution-project.webp",
    link: "/portfolio/cloud-based-solution",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Our Portfolio"
        description="Discover the projects we've proudly delivered."
      />

      {/* Portfolio Grid Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden border border-primary/20 rounded-lg bg-background hover:bg-primary/10 transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button size="sm" as="a" href={project.link}>
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Work With Us?</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Let's create something amazing together. Contact us to discuss your
            next project.
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}
