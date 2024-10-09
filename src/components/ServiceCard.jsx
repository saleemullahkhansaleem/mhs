import { motion, useInView } from "framer-motion";
import { Info, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function ServiceCard({
  service = { icon: Info, title: "", description: "", url: "/" },
  index = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col justify-between p-8 border-primary rounded-lg hover:text-white bg-primary/5 overflow-hidden relative group"
    >
      <div>
        <div className="mb-6 p-4 bg-primary/10 rounded transition-all duration-300 group-hover:bg-background/20 w-max">
          <service.icon className="h-10 w-10 text-primary group-hover:text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        {service.description && (
          <p className="text-muted-foreground group-hover:text-white mb-4">
            {service.description}
          </p>
        )}
      </div>
      <div className="absolute inset-0 w-0 group-hover:w-full -z-10 bg-primary transition-all duration-300"></div>
      {service.url && (
        <Link
          to={service?.url}
          className="group/link text-primary group-hover:text-white text-lg flex items-end gap-2 hover:font-bold"
        >
          Read more{" "}
          <MoveRight className="group-hover/link:translate-x-2 transition-transform" />
        </Link>
      )}
    </motion.div>
  );
}
