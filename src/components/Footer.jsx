import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { BackToTopButton } from ".";
import { LogoMHS } from "./Header";

// Dynamic Data for Services, Company, Contact, and Social Links
const servicesLinks = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Mobile App Development", path: "/services/mobile-app-development" },
  {
    name: "Portal Management Systems",
    path: "/services/portal-management-systems",
  },
  { name: "E-commerce Solutions", path: "/services/e-commerce-solutions" },
];

const companyLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Careers", path: "/careers" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact-us" },
];

const contactInfo = [
  { icon: FaEnvelope, text: "info@mhstechventure.com" },
  { icon: FaPhone, text: "+123 456 7890" },
  { icon: FaMapMarkerAlt, text: "123 Tech Avenue, Islamabad, Pakistan" },
];

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: FaFacebookF },
  { name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "YouTube", url: "https://youtube.com", icon: FaYoutube },
  { name: "Instagram", url: "https://instagram.com", icon: FaInstagram },
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
            MHS Tech Venture provides cutting-edge technology solutions to
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
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path} className="hover:underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path} className="hover:underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info and Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            {contactInfo.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center space-x-4">
                <Icon className="mt-1 text-primary" size={20} />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <Link
                  key={name}
                  to={url}
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
        <p className="text-sm">© 2024 MHS Tech Venture. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          {["Terms of Service", "Privacy Policy"].map((item) => (
            <Link
              key={item}
              className="text-sm hover:text-primary transition-colors"
              to="#"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <BackToTopButton />
    </footer>
  );
}
