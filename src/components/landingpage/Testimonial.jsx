import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { FaQuoteLeft } from "react-icons/fa";
import { Heading } from "..";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechStart",
    profile: "/images/testimonials/1.png",
    content:
      "MHS Tech Venture delivered beyond our expectations. Their team's expertise and dedication resulted in a product that has transformed our business.",
  },
  {
    name: "Sarah Lee",
    role: "CTO, InnovateCorp",
    profile: "/images/testimonials/3.png",
    content:
      "Working with MHS Tech Venture was a game-changer for us. Their innovative approach and technical prowess are unmatched.",
  },
  {
    name: "Michael Chen",
    role: "Founder, NextGen Solutions",
    profile: "/images/testimonials/2.png",
    content:
      "MHS Tech Venture's ability to understand our vision and translate it into a robust, scalable solution was impressive. Highly recommended!",
  },
];

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-8 md:py-12 px-4 md:px-6 bg-background transition-colors duration-300 relative"
    >
      <img
        src="/images/pattern-bg.jpg"
        alt="banner image"
        className="w-full h-full object-cover absolute inset-0 opacity-20"
      />

      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          <Heading>What Our Clients Say</Heading>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-primary/5 hover:bg-primary/10 transition-all duration-300 shadow-lg">
                <CardContent className="flex flex-col space-y-4 p-8">
                  <FaQuoteLeft className="text-primary text-2xl" />
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.profile}
                      className="rounded-full bg-muted w-12 object-cover aspect-square"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
