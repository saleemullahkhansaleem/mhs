import { Button } from "@/components/ui/button";
import { DetailsHeroSection, Heading } from "@/components";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const jobOpenings = [
  {
    id: 3,
    title: "Accountant",
    location: "Islamabad, Pakistan",
    requirements: [
      "Bachelor's degree in Accounting, Finance, or related field",
      "2+ years of experience in accounting or finance",
      "Proficiency in accounting software and MS Excel",
    ],
    label: "Accounting",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    location: "Islamabad, Pakistan",
    requirements: [
      "Expertise in Laravel, PHP, and CodeIgniter",
      "Proficiency in PostgreSQL and MySQL",
      "Strong knowledge of HTML, CSS, and JavaScript",
      "Experience with Tailwind CSS and ShadCN/UI",
      "Proficiency in React and Next.js",
      "Ability to develop and maintain scalable applications",
    ],
    label: "Software Development",
  },
];

export default function Careers() {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Career - MHS Tech Ventures</title>
        <meta
          name="description"
          content="MHS Tech Ventures provides cutting-edge technology solutions to businesses worldwide. From software development to consultancy, we help you achieve your digital transformation goals."
        />
      </Helmet>
      <DetailsHeroSection
        title="Careers at MHS Tech Ventures"
        description="Join our team and help us shape the future of technology."
      />

      {/* Why Work With Us */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Why <Heading>Work</Heading> With Us?
        </h2>
        <p className="mb-12 text-muted-foreground max-w-3xl mx-auto">
          At MHS Tech Ventures, we foster innovation, creativity, and
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
            {jobOpenings.length < 1 ? (
              <h1 className="p-8 text-3xl lg:col-span-2">
                No Openings available right now
              </h1>
            ) : (
              jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="p-8 border border-primary/20 rounded bg-primary/10 hover:bg-primary/20 transition"
                >
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-muted-foreground mb-4">{job.location}</p>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <FaCheckCircle className="text-primary mr-2" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="w-full">Apply Now</Button> */}
                  <p className="">
                    To apply: send your Resume on
                    <Button size="lg" className="" variant="link" asChild>
                      <a href="mailto:mexemas7@gmail.com">mexemas7@gmail.com</a>
                    </Button>
                  </p>
                </div>
              ))
            )}
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
