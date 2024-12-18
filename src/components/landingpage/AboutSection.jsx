import { motion, useInView } from "framer-motion";
import { Heading } from "..";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { features } from "@/data";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6 bg-primary/10 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 150 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center lg:justify-end lg:order-2"
          >
            <div className="relative w-full max-w-xl aspect-square">
              <img
                src="/images/1.png"
                alt="Global Network"
                className="w-full"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Global Reach, <Heading>Local Expertise</Heading>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Based in Islamabad, Pakistan, MHS Tech Ventures brings world-class
              software solutions to businesses across the globe. Our team
              combines local insights with international best practices to
              deliver unparalleled results.
            </p>
            <ul className="grid sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  className="flex items-start gap-4 text-lg group"
                >
                  <div className="bg-primary/20 p-2 rounded group-hover:bg-primary/60 transition-colors group-hover:scale-110">
                    <item.icon className="h-10 w-10" />
                  </div>
                  <div>
                    <span className="font-bold">{item.title}</span>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="text-right pt-4">
              <Button size="lg" variant="" asChild>
                <Link to="/contact-us">Get in touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
