import React from "react";
import { Button } from "@/components/ui/button";
import { BlogCard, DetailsHeroSection, Heading } from "@/components";
import { blogsData, newsData } from "@/data";
import { Link } from "react-router-dom";

export default function BlogsPage() {
  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Our Blogs"
        description="Insights, tips, and updates from MHS Tech Venture."
      />

      {/* <BlogSection /> */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest <Heading> Articles</Heading>
        </h2>
        <p className="mb-12 text-muted-foreground max-w-3xl mx-auto text-center">
          Stay informed with our latest insights, industry trends, and expert
          tips in web development, mobile applications, and custom solutions.
          Our articles aim to keep you ahead of the technological curve, helping
          you make informed decisions to grow your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsData.map((post, index) => (
            <BlogCard post={post} index={index} key={index} />
          ))}
        </div>
      </section>

      {/* <NewsSection /> */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest <Heading> News</Heading>
        </h2>
        <p className="mb-12 text-muted-foreground max-w-3xl mx-auto text-center">
          Catch up on the latest updates, partnerships, and product launches
          from MHS Tech Venture. Our news section keeps you in the loop with
          important developments and milestones as we continue to expand and
          innovate globally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((post, index) => (
            <BlogCard post={post} index={index} key={index} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <Heading>Transform Your Business?</Heading>
          </h2>
          <p className="mb-6 text-lg">
            Join us on our journey to explore innovative solutions and
            technology.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
