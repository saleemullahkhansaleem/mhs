import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaCode,
  FaCog,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DetailsHeroSection, Heading } from "@/components";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Our Services"
        description="Empowering your business with cutting-edge solutions."
      />

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We <Heading>Offer</Heading>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Web Development */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 border border-primary/20 rounded-lg bg-background hover:bg-primary/10 transition"
          >
            <FaLaptopCode className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-muted-foreground mb-4">
              We craft modern, responsive websites tailored to your business
              needs, utilizing the latest technologies like React.js and
              Next.js.
            </p>
            <Button>Learn More</Button>
          </motion.div>

          {/* Service 2: Mobile App Development */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 border border-primary/20 rounded-lg bg-background hover:bg-primary/10 transition"
          >
            <FaMobileAlt className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Mobile App Development</h3>
            <p className="text-muted-foreground mb-4">
              We create high-performance mobile apps for Android and iOS,
              ensuring smooth user experiences and robust functionality.
            </p>
            <Button>Learn More</Button>
          </motion.div>

          {/* Service 3: Portal Management Systems */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 border border-primary/20 rounded-lg bg-background hover:bg-primary/10 transition"
          >
            <FaServer className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Portal Management Systems
            </h3>
            <p className="text-muted-foreground mb-4">
              From secure access control to efficient data management, we
              specialize in developing custom portal management systems.
            </p>
            <Button>Learn More</Button>
          </motion.div>

          {/* Service 4: E-commerce Solutions */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 border border-primary/20 rounded-lg bg-background hover:bg-primary/10 transition"
          >
            <FaShoppingCart className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">E-commerce Solutions</h3>
            <p className="text-muted-foreground mb-4">
              We deliver scalable e-commerce platforms with seamless
              integrations and user-friendly interfaces to boost your online
              business.
            </p>
            <Button>Learn More</Button>
          </motion.div>

          {/* Service 5: Software Consultancy */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 border border-primary/20 rounded-lg bg-background hover:bg-primary/10 transition"
          >
            <FaCode className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Software Consultancy</h3>
            <p className="text-muted-foreground mb-4">
              We provide expert consulting services to help you choose the right
              technologies and strategies for your business.
            </p>
            <Button>Learn More</Button>
          </motion.div>

          {/* Service 6: Custom Solutions */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 border border-primary/20 rounded-lg bg-background hover:bg-primary/10 transition"
          >
            <FaCog className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Custom Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Have a unique problem? We design custom software solutions
              tailored to your specific requirements.
            </p>
            <Button>Learn More</Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <Heading>Elevate Your Business?</Heading>
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Get in touch with us to discuss how we can help take your business
            to the next level with our innovative solutions.
          </p>
          <Button size="lg">Contact Us Today</Button>
        </div>
      </section>
    </div>
  );
}
