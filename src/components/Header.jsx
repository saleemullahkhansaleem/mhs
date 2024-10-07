import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Header({ setDarkMode, darkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-background/60 backdrop-blur-md z-50 transition-colors duration-300">
        <LogoMHS />
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {[
            { name: "Home", link: "/" },
            { name: "Services", link: "/services" },
            { name: "Portfolio", link: "/portfolio" },
            { name: "About", link: "/about-us" },
            { name: "Contact", link: "/contact-us" },
            { name: "Blogs", link: "/blogs" },
            { name: "Career", link: "/careers" },
          ].map(({ name, link }) => (
            <NavLink
              key={name}
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-medium text-primary transition-colors"
                  : "text-sm font-medium hover:text-primary transition-colors"
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <Button className="ml-4 hidden md:inline-flex" variant="outline">
          Get Started
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="ml-auto md:ml-2"
        >
          {darkMode ? (
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </Button>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background pt-16 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {["Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  className="text-2xl font-medium hover:text-primary transition-colors"
                  to="#"
                >
                  {item}
                </Link>
              ))}
              <Button className="mt-4" variant="">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function LogoMHS({ footer = false }) {
  return (
    <Link className="flex items-center" to="/">
      <img
        src="/images/logos/logo.png"
        alt="MHS Tech Venture Logo"
        className="h-10"
      />
      <div className="hidden md:block">
        <h1
          className={`ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
            footer ? "from-white" : "from-accent-foreground"
          } to-primary uppercase`}
        >
          MHS Tech Venture
        </h1>
        <p
          className={`ml-2 text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r ${
            footer ? "from-white" : "from-accent-foreground"
          } to-primary uppercase text-justify tracking-[7px]`}
        >
          Private Limited
        </p>
      </div>
    </Link>
  );
}
