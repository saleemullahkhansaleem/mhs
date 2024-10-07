import { motion } from "framer-motion";
import { ChartNoAxesGantt, Code, Cpu, Headset } from "lucide-react";
import { Heading } from "..";
import { Phone, Globe } from "lucide-react"; // Import your icons here
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Easy to Reach",
    description:
      "Accessible through multiple communication channels for fast responses.",
    icon: <Phone className="h-10 w-10" />,
  },
  {
    title: "Agile Development Methodology",
    description: "Flexible and adaptive solutions to meet your evolving needs.",
    icon: <ChartNoAxesGantt className="h-10 w-10" />,
  },
  {
    title: "Customized Solutions",
    description:
      "Tailored software services to fit the unique demands of your business.",
    icon: <Code className="h-10 w-10" />,
  },
  {
    title: "Worldwide Services",
    description:
      "Delivering reliable software solutions to clients across continents.",
    icon: <Globe className="h-10 w-10" />,
  },
  {
    title: "24/7 Support",
    description:
      "We are here to help around the clock, no matter where you are.",
    icon: <Headset className="h-10 w-10" />,
  },
  {
    title: "Innovative Technology",
    description:
      "Leveraging cutting-edge technologies to stay ahead in the market.",
    icon: <Cpu className="h-10 w-10" />, // Replace with a suitable icon
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6 bg-primary/10 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Global Reach, <Heading>Local Expertise</Heading>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Based in Islamabad, Pakistan, MHS Tech Venture brings world-class
              software solutions to businesses across the globe. Our team
              combines local insights with international best practices to
              deliver unparalleled results.
            </p>
            <ul className="grid sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 text-lg group"
                >
                  <div className="bg-primary/20 p-2 rounded group-hover:bg-primary/60 transition-colors group-hover:scale-110">
                    {item.icon}
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
                <Link to="/">Get in touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
