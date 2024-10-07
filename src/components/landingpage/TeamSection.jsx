import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { Heading } from "..";

const teamMembers = [
  {
    name: "Muhammad Hanif Shah",
    position: "Chief Executive Officer",
    image: "/images/team/placeholder.webp",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/johndoe",
  },
  {
    name: "Ehtesham Ahmed",
    position: "Lead Software Engineer",
    image: "/images/team/ehtesham.png",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    github: "https://github.com/janesmith",
  },
  {
    name: "Mubashar Iftekhar",
    position: "Project Manager",
    image: "/images/team/placeholder.webp",
    linkedin: "https://linkedin.com/in/mikejohnson",
    twitter: "https://twitter.com/mikejohnson",
    github: "https://github.com/mikejohnson",
  },
  {
    name: "Saleemullah Khan",
    position: "Project Manager",
    image: "/images/team/placeholder.webp",
    linkedin: "https://linkedin.com/in/mikejohnson",
    twitter: "https://twitter.com/mikejohnson",
    github: "https://github.com/mikejohnson",
  },
];

export default function TeamSection() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            <Heading>Meet Our Team</Heading>
          </h2>
          <p className="text-muted-foreground mt-4">
            Our talented team is committed to delivering innovative solutions
            and ensuring your project's success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden bg-white dark:bg-foreground rounded shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">{member.name}</h3>
                <p className="text-primary text-lg mb-4">{member.position}</p>
                <div className="flex space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
