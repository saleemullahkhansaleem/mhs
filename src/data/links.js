import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export const menu = {
  main: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
    { name: "Blogs", path: "/blogs" },
    { name: "Career", path: "/careers" },
  ],
  services: [
    { name: "Web Development", path: "/services/web-development" },
    {
      name: "Mobile App Development",
      path: "/services/mobile-app-development",
    },
    {
      name: "Portal Management Systems",
      path: "/services/portal-management-systems",
    },
    { name: "E-commerce Solutions", path: "/services/e-commerce-solutions" },
  ],
  social: [
    // { name: "Facebook", path: "https://facebook.com", icon: FaFacebookF },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/company/mhs-tech-ventures/",
      icon: FaLinkedinIn,
    },
    {
      name: "Fiverr",
      path: "https://www.fiverr.com/sellers/mhs_tech/",
      icon: TbBrandFiverr,
    },
    {
      name: "Upwork",
      path: "https://www.upwork.com/agencies/1847521254796493292/",
      icon: FaUpwork,
    },
    // { name: "YouTube", path: "https://youtube.com", icon: FaYoutube },
    // { name: "Instagram", path: "https://instagram.com", icon: FaInstagram },
  ],
};
