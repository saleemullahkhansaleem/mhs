import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUser, FaTags, FaCalendarAlt } from "react-icons/fa";
import { Heading } from "..";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

const blogPosts = [
  {
    title: "How Web Development is Shaping the Future of Business",
    excerpt:
      "Discover the latest trends in web development and how they are transforming business landscapes worldwide.",
    image: "/images/blogs/1.webp",
    url: "/blogs/web-development-future",
    date: "October 1, 2024",
    category: "Web Development",
    author: "John Doe",
  },
  {
    title: "Top Mobile App Development Trends in 2024",
    excerpt:
      "Stay ahead of the curve with the most innovative mobile app development trends shaping the industry in 2024.",
    image: "/images/blogs/2.webp",
    url: "/blogs/mobile-app-trends-2024",
    date: "September 25, 2024",
    category: "Mobile Development",
    author: "Jane Smith",
  },
  {
    title: "The Importance of Custom Software Solutions for Growing Startups",
    excerpt:
      "Learn why custom software is a game-changer for startups looking to scale and optimize their operations.",
    image: "/images/blogs/3.webp",
    url: "/blogs/custom-software-for-startups",
    date: "September 15, 2024",
    category: "Custom Solutions",
    author: "Michael Lee",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blogs"
      className="w-full py-8 md:py-12 px-4 md:px-6 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              <Heading>Latest News & Blogs</Heading>
            </h2>
            <p className="mb-12 text-muted-foreground">
              Stay updated with the latest insights, trends, and innovations in
              the tech industry. Our blogs cover everything from software
              development to digital transformation, reflecting MHS Tech
              Venture's commitment to excellence in delivering cutting-edge
              solutions.
            </p>
          </div>
          <Button size="lg" variant="outline" asChild>
            <Link to="/">See all Posts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-primary/5 hover:bg-primary/10 rounded shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative">
                <div className="absolute top-4 left-4 bg-background/70 px-3 py-1 rounded-full z-10 flex gap-2 items-center">
                  <FaCalendarAlt className="" />
                  {post.date}
                </div>
                <div className="w-full h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-muted-foreground mb-2 text-sm">
                    <div className="flex items-center">
                      <FaTags className="mr-2" /> {post.category}
                    </div>
                    <span>|</span>
                    <div className="flex items-center">
                      <FaUser className="mr-2" /> {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </div>
              <Link
                to={post.url}
                className="group/link text-primary text-lg flex items-end gap-2 hover:font-bold px-6 pb-6"
              >
                Read more{" "}
                <MoveRight className="group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
