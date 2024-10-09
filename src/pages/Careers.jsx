import { Button } from "@/components/ui/button";
import { DetailsHeroSection, Heading } from "@/components";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Careers at MHS Tech Venture"
        description="Join our team and help us shape the future of technology."
      />

      {/* Why Work With Us */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Why <Heading>Work</Heading> With Us?
        </h2>
        <p className="mb-12 text-muted-foreground max-w-3xl mx-auto">
          At MHS Tech Venture, we foster innovation, creativity, and
          collaboration. We are committed to building a diverse, inclusive
          workplace where you can thrive and make a difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-primary/20 rounded bg-primary/10 hover:bg-primary/20 transition">
            <h3 className="text-2xl font-bold mb-4">Growth Opportunities</h3>
            <p className="text-muted-foreground">
              We offer a path for continuous learning, development, and career
              growth in the ever-evolving tech industry.
            </p>
          </div>
          <div className="p-8 border border-primary/20 rounded bg-primary/10 hover:bg-primary/20 transition">
            <h3 className="text-2xl font-bold mb-4">Innovative Culture</h3>
            <p className="text-muted-foreground">
              Work in an environment that encourages creativity and
              out-of-the-box thinking. We embrace innovative ideas to drive
              success.
            </p>
          </div>
          <div className="p-8 border border-primary/20 rounded bg-primary/10 hover:bg-primary/20 transition">
            <h3 className="text-2xl font-bold mb-4">Work-Life Balance</h3>
            <p className="text-muted-foreground">
              We prioritize work-life balance, ensuring you stay motivated and
              healthy while excelling in your career.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Current <Heading>Job</Heading> Openings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Job Opening 1 */}
            <div className="p-8 border border-primary/20 rounded bg-primary/10 hover:bg-primary/20 transition">
              <h3 className="text-2xl font-bold mb-2">
                Senior React Developer
              </h3>
              <p className="text-muted-foreground mb-4">Islamabad, Pakistan</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" />
                  <span>5+ years of experience in front-end development</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" />
                  <span>Expert in React.js, JavaScript, TypeScript</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" />
                  <span>Experience with RESTful APIs and GraphQL</span>
                </li>
              </ul>
              <Button className="w-full">Apply Now</Button>
            </div>

            {/* Job Opening 2 */}
            <div className="p-8 border border-primary/20 rounded bg-primary/10 hover:bg-primary/20 transition">
              <h3 className="text-2xl font-bold mb-2">UI/UX Designer</h3>
              <p className="text-muted-foreground mb-4">Remote</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" />
                  <span>3+ years of experience in UI/UX design</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" />
                  <span>Proficient in Figma, Sketch, and Adobe XD</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" />
                  <span>
                    Ability to translate concepts into user flows and wireframes
                  </span>
                </li>
              </ul>
              <Button className="w-full">Apply Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Don't See a Role for You? <Heading>Let’s Stay in Touch!</Heading>
          </h2>
          <p className="mb-6 text-lg">
            We're always on the lookout for talented individuals. If you're
            passionate about tech and innovation, drop us a line, and we'll
            notify you of future opportunities.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
