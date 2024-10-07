import { motion } from "framer-motion";
import { Heading } from "..";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

const projects = [
  {
    title: "E-commerce Revolution",
    description:
      "An innovative e-commerce platform designed for seamless online shopping experiences, featuring advanced search filters and secure payment gateways.",
    image: "/images/projects/1.webp",
    url: "#", // Link to the project details
  },
  {
    title: "TaskMaster Pro",
    description:
      "A robust mobile application tailored for task and project management, integrating calendar synchronization and real-time collaboration features.",
    image: "/images/projects/2.webp",
    url: "#",
  },
  {
    title: "DataInsight Analytics",
    description:
      "A cutting-edge web solution that provides real-time data analytics and visualization tools, empowering businesses to make data-driven decisions.",
    image: "/images/projects/3.webp",
    url: "#",
  },
  {
    title: "Business Dashboard Suite",
    description:
      "A user-friendly dashboard application offering comprehensive insights into business performance metrics, streamlining decision-making processes.",
    image: "/images/projects/4.webp",
    url: "#",
  },
  {
    title: "Healthcare Connect",
    description:
      "A telemedicine platform that connects patients with healthcare professionals through secure video consultations and medical record management.",
    image: "/images/projects/5.webp",
    url: "#",
  },
  {
    title: "Smart Inventory System",
    description:
      "An intelligent inventory management solution that optimizes stock levels and enhances order fulfillment processes using real-time data.",
    image: "/images/projects/6.webp",
    url: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-background transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              <Heading>Our Portfolio</Heading>
            </h2>
            <p className="mb-12 text-muted-foreground">
              Explore our diverse range of projects that reflect our expertise
              and commitment to delivering top-notch software solutions tailored
              to our clients' needs.
            </p>
          </div>
          <Button size="lg" variant="outline" asChild>
            <Link to="/">See all Projects</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative overflow-hidden shadow-lg group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-0 w-full h-0 overflow-hidden group-hover:h-16 transition-all duration-300 flex bg-accent/80 z-10">
                <h3 className="text-xl font-bold p-4 flex-1">
                  {project.title}
                </h3>
                <Link
                  to={project.url}
                  className="w-16 h-16 flex items-center justify-center bg-primary transition-colors"
                >
                  <MoveRight />
                </Link>
              </div>
              <p className="absolute bottom-0 w-full max-h-0 h-auto overflow-hidden group-hover:max-h-80 transition-all duration-300 bg-accent/80 group-hover:p-4 z-10">
                {project.description}
              </p>
              <div className="absolute inset-0 opacity-0 transition-all duration-300 bg-black/50 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
