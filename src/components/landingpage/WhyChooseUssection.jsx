import { motion } from "framer-motion";
import { Heading } from "..";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const whyChooseUs = [
  {
    title: "Proven Track Record",
    description:
      "We have a strong portfolio of successful projects that have consistently exceeded client expectations, showcasing our reliability and dedication to quality.",
  },
  {
    title: "Expert Team",
    description:
      "Our skilled professionals bring expertise across various domains, ensuring your project is handled with care and the latest industry knowledge.",
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer high-quality solutions at competitive prices, with a transparent pricing model that has no hidden fees, making our services accessible to all.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Our client-centric philosophy prioritizes your needs, ensuring our solutions align with your goals through open communication and collaboration.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6 bg-secondary/10 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 order-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why<Heading> Our Customers</Heading> Choose Us
            </h2>
            <ul className="grid gap-8 space-y-2 pt-4">
              {whyChooseUs.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-start gap-4 text-lg group"
                >
                  <div className="rounded transition-colors group-hover:scale-110 text-5xl font-bold text-primary">
                    {"0" + (index + 1) + "."}
                  </div>
                  <div className="">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="pt-4">
              <Button size="lg" variant="" asChild>
                <Link to="/contact-us">Get in touch</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-12 lg:justify-start"
          >
            <div className="relative w-full max-w-xl aspect-square">
              <img
                src="/images/2.png"
                alt="Global Network"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
