import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { FaQuoteLeft } from "react-icons/fa";
import { SectionContainer } from "..";
import { testimonialsData } from "@/data";

export default function TestimonialSection() {
  return (
    <SectionContainer
      id="testimonials-section"
      title="What Our"
      titleColor="Clients Say"
      description="Hear from our clients about the innovative solutions and exceptional service they experienced with MHS Tech Venture."
      bgImage="/images/pattern-bg.jpg"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {testimonialsData.map((testimonial, index) => (
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
    </SectionContainer>
  );
}
