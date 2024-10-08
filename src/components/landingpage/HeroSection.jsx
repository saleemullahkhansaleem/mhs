import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { menu } from "@/data";
import { Heading } from "..";

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[calc(100vh-64px)] bg-accent-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-accent to-teal-400 dark:from-purple-900 dark:via-accent dark:to-teal-700 opacity-40"></div>
      <div className="absolute inset-0 bg-accent"></div>
      <img
        src="/images/banner.webp"
        alt="banner image"
        className="w-full h-full object-cover absolute inset-0 opacity-10"
      />
      <div className="dotted-bg absolute inset-0 opacity-70"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center relative z-10">
          <div className="space-y-4 max-w-4xl">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="flex gap-4 justify-center"
            >
              {menu.social.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  title={link.name}
                  className="group/social-link hover:text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon
                    size={24}
                    className="group-hover/social-link:scale-125"
                  />
                </Link>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none "
            >
              Innovative <Heading>Software Solutions</Heading> for a{" "}
              <Heading>Digital World</Heading>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto max-w-[700px] text-xl text-backgroundMuted md:text-2xl/relaxed"
            >
              From Islamabad to the world, we deliver cutting-edge web and
              mobile applications, and robust portal management systems.
            </motion.p>
          </div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button size="lg" asChild>
              <Link to="/contact-us">Get Started</Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px] motion-safe:animate-grid-fade" />
      </div>
    </section>
  );
}
