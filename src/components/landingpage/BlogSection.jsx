import { BlogCard, SectionContainer } from "..";
import { blogsData } from "@/data";

export default function BlogSection() {
  return (
    <SectionContainer
      id="blogs-section"
      title="Latest"
      titleColor="News & Blogs"
      description="Stay updated with the latest insights, trends, and innovations in
              the tech industry. Our blogs cover everything from software
              development to digital transformation, reflecting MHS Tech
              Venture's commitment to excellence in delivering cutting-edge
              solutions."
      btnTxt="See all Posts"
      btnUrl="/blogs"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {blogsData.map((post, index) => (
        <BlogCard post={post} index={index} />
      ))}
    </SectionContainer>
  );
}
