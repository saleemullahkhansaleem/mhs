import React from "react";
import { Button } from "@/components/ui/button";
import { BlogSection, DetailsHeroSection, Heading } from "@/components";

const posts = [
  {
    title: "The Future of Technology: Trends to Watch",
    date: "October 1, 2024",
    excerpt:
      "Explore the latest trends shaping the future of technology, from AI to blockchain.",
    image: "/images/blog1.jpg",
  },
  {
    title: "How to Build a Successful Startup",
    date: "September 15, 2024",
    excerpt:
      "Learn the key steps to launch your startup successfully and avoid common pitfalls.",
    image: "/images/blog2.jpg",
  },
  {
    title: "Maximizing Efficiency with Remote Work",
    date: "August 30, 2024",
    excerpt:
      "Discover strategies for maximizing productivity in a remote work environment.",
    image: "/images/blog3.jpg",
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Our Blogs"
        description="Insights, tips, and updates from MHS Tech Venture."
      />

      {/* Blog Posts Section */}
      <BlogSection />
      {/* <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="mb-4">{post.excerpt}</p>
                <Button
                  className="text-white bg-primary hover:bg-primary-dark"
                  size="sm"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <Heading>Transform Your Business?</Heading>
          </h2>
          <p className="mb-6 text-lg">
            Join us on our journey to explore innovative solutions and
            technology.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
