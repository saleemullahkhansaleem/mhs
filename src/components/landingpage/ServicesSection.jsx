import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Smartphone,
  Server,
  ShoppingBag,
  MoveRight,
} from "lucide-react";
import { Heading } from "..";
import { Link } from "react-router-dom";
import { FaPuzzlePiece } from "react-icons/fa";
import { Button } from "../ui/button";

const services = [
  {
    icon: Globe, // Web Development
    title: "Web Development",
    description:
      "We create responsive, dynamic websites tailored to your business needs, ensuring performance and scalability with a modern look.",
    url: "/services/web-development",
  },
  {
    icon: Smartphone, // Mobile App Development
    title: "Mobile App Development",
    description:
      "We specialize in developing native and cross-platform mobile apps for iOS and Android, enhancing user engagement and business growth.",
    url: "/services/mobile-app-development",
  },
  {
    icon: Server, // Portal Management Systems
    title: "Portal Management Systems",
    description:
      "We build secure, scalable portal management systems that streamline your operations with efficient data management.",
    url: "/services/portal-management-systems",
  },
  {
    icon: Code, // Software Consultancy
    title: "Software Consultancy",
    description:
      "Our consultancy helps you navigate technology with expert advice from strategy to implementation for seamless digital transformation.",
    url: "/services/software-consultancy",
  },
  {
    icon: ShoppingBag, // E-commerce Solutions
    title: "E-commerce Solutions",
    description:
      "Our e-commerce solutions provide custom storefronts and secure payment integrations to help you build a successful online business.",
    url: "/services/e-commerce-solutions",
  },
  {
    icon: FaPuzzlePiece, // Custom Solutions
    title: "Custom Solutions",
    description:
      "Tailor-made software solutions to address unique business needs and maximize efficiency.",
    url: "/services/custom-solutions",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6 bg-background transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              <Heading>Our Services</Heading>
            </h2>
            <p className="mb-12 text-muted-foreground">
              At MHS Tech Venture, we deliver innovative software solutions to
              help businesses thrive. From web and mobile development to custom
              portals and consultancy, our expert team ensures your digital
              transformation is seamless and scalable.
            </p>
          </div>
          <Button size="lg" variant="outline" asChild>
            <Link to="/">See all Services</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="flex flex-col justify-between p-8  border-primary rounded-lg hover:text-white bg-primary/5 overflow-hidden relative group"
            >
              <div>
                <div className="mb-6 p-4 bg-primary/10 rounded transition-all duration-300 group-hover:bg-background/20 w-max">
                  <service.icon className="h-10 w-10 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-white mb-4">
                  {service.description}
                </p>
              </div>
              <div className="absolute inset-0 w-0 group-hover:w-full -z-10 bg-primary transition-all duration-300"></div>
              <Link
                to={service.url}
                className="group/link text-primary group-hover:text-white text-lg flex items-end gap-2 hover:font-bold"
              >
                Read more{" "}
                <MoveRight className="group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
