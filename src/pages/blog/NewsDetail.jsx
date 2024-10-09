import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { newsData } from "@/data"; // Make sure the path is correct
import { DetailsHeroSection } from "@/components";

export default function NewsDetailPage() {
  const { slug } = useParams(); // Get the dynamic part from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Find the blog post that matches the URL slug
    const post = newsData.find((blog) => blog.url.endsWith(slug));
    setBlog(post);
  }, [slug]);

  if (!blog) {
    return <p>Loading...</p>; // Display loading or handle errors
  }

  return (
    <>
      <DetailsHeroSection title={blog.title} description={blog.excerpt} />
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center mb-8 text-muted-foreground">
          <span className="mr-4">By {blog.author}</span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-lg mb-8 w-full max-w-4xl mx-auto"
        />

        {/* Render blog content */}
        <p className="prose mb-8">{blog.description}</p>
        {blog.content.map((item, index) => (
          <div className="space-y-6 mb-8" key={index}>
            <h3 className="text-3xl font-bold">{item.heading}</h3>
            {item.detail.map((para, i) => (
              <p className="text-muted-foreground" key={i + index}>
                {para}
              </p>
            ))}
          </div>
        ))}

        {/* Render tags if available */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Tags:</h2>
            <ul className="flex flex-wrap">
              {blog.tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-2 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
