import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser, FaTags, FaCalendarAlt } from "react-icons/fa";
import { MoveRight } from "lucide-react";

export default function BlogCard({post, index}) {
  return (
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
  );
}
