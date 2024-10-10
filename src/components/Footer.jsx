import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { BackToTopButton } from ".";
import { LogoMHS } from "./Header";
import { menu, servicesData } from "@/data";
import { MoveRight } from "lucide-react";

const contactInfo = [
  {
    icon: FaEnvelope,
    text: "info@mhstechventures.com",
    path: "mailto:info@mhstechventures.com",
  },
  { icon: FaPhone, text: "+123 456 7890", path: "tel:+1234567890" },
  { icon: FaMapMarkerAlt, text: "123 Tech Avenue, Islamabad, Pakistan" },
];

export default function Footer() {
  return (
    <footer className="w-full transition-colors duration-300 relative text-background dark:text-foreground md:mt-8">
      <div className="absolute inset-0 bg-accent-foreground dark:bg-accent -z-10"></div>
      <img
        src="/images/footer-bg.jpg"
        alt="banner image"
        className="w-full h-full object-cover absolute inset-0 opacity-20 -z-10"
      />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 md:py-16 px-4 md:px-6">
        {/* Company Description and Newsletter */}
        <div>
          <div className="mb-4">
            <LogoMHS footer />
          </div>
          <p className="p-4">
            MHS Tech Ventures provides cutting-edge technology solutions to
            businesses worldwide. From software development to consultancy, we
            help you achieve your digital transformation goals.
          </p>
          <form className="flex p-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-primary/50 rounded-l focus:outline-none bg-background text-foreground"
            />
            <button
              type="submit"
              className="bg-primary text-background px-4 py-2 rounded-r hover:bg-primary-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Services and Company Links */}
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesData.map(({ title, url }) => (
                <li key={title}>
                  <Link to={url} className="group/link flex items-center gap-2">
                    <MoveRight size={16} className="text-primary" />
                    <span className="group-hover/link:translate-x-2 transition-transform">
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {menu.main.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="group/link flex items-center gap-2"
                  >
                    <MoveRight size={16} className="text-primary" />
                    <span className="group-hover/link:translate-x-2 transition-transform">
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info and Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, text, path }) =>
              path ? (
                <Link
                  to={path}
                  key={text}
                  className="flex items-center space-x-4"
                >
                  <Icon className="mt-1 text-primary" size={20} />
                  <span>{text}</span>
                </Link>
              ) : (
                <div key={text} className="flex items-center space-x-4">
                  <Icon className="mt-1 text-primary" size={20} />
                  <span>{text}</span>
                </div>
              )
            )}
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {menu.social.map(({ name, path, icon: Icon }) => (
                <Link
                  key={name}
                  to={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-white transition-colors"
                  title={name}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        <p className="text-sm">
          © 2024 MHS Tech Ventures. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          {[
            { name: "Terms of Service", link: "/terms-of-services" },
            { name: "Privacy Policy", link: "/privacy-policy" },
          ].map((item) => (
            <Link
              key={item.name}
              className="text-sm hover:text-primary transition-colors"
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <BackToTopButton />
    </footer>
  );
}
