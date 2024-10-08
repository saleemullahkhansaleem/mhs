import { Code, Globe, Server, ShoppingBag, Smartphone } from "lucide-react";
import { FaPuzzlePiece } from "react-icons/fa";

export const servicesData = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We create responsive, dynamic websites tailored to your business needs, ensuring performance and scalability with a modern look.",
    url: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We specialize in developing native and cross-platform mobile apps for iOS and Android, enhancing user engagement and business growth.",
    url: "/services/mobile-app-development",
  },
  {
    icon: Server,
    title: "Portal Management Systems",
    description:
      "We build secure, scalable portal management systems that streamline your operations with efficient data management.",
    url: "/services/portal-management-systems",
  },
  {
    icon: Code,
    title: "Software Consultancy",
    description:
      "Our consultancy helps you navigate technology with expert advice from strategy to implementation for seamless digital transformation.",
    url: "/services/software-consultancy",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description:
      "Our e-commerce solutions provide custom storefronts and secure payment integrations to help you build a successful online business.",
    url: "/services/e-commerce-solutions",
  },
  {
    icon: FaPuzzlePiece,
    title: "Custom Solutions",
    description:
      "Tailor-made software solutions to address unique business needs and maximize efficiency.",
    url: "/services/custom-solutions",
  },
];
