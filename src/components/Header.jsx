import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { menu } from "@/data";

export default function Header({ setDarkMode, darkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-background/60 backdrop-blur-md z-50 transition-colors duration-300">
        <LogoMHS />
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {menu.main.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
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
        <Button
          className="ml-4 hidden md:inline-flex"
          variant="outline"
          asChild
        >
          <Link to="/contact-us">Get Started</Link>
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
            <nav className="flex flex-col items-center justify-center h-full space-y-2">
              {menu.main.map((item) => (
                <NavLink
                  key={item.name}
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-medium text-primary transition-colors py-2"
                      : "text-lg font-medium hover:text-primary transition-colors py-2"
                  }
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="" asChild>
                <Link to="/contact-us">Get Started</Link>
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
      {footer ? (
        <img
          src="/images/logos/logo-dark.png"
          alt="MHS Tech Ventures Logo"
          className="h-10"
        />
      ) : (
        <>
          <img
            src="/images/logos/logo.png"
            alt="MHS Tech Ventures Logo"
            className="h-10 block dark:hidden"
          />
          <img
            src="/images/logos/logo-dark.png"
            alt="MHS Tech Ventures Logo"
            className="h-10 hidden dark:block"
          />
        </>
      )}
      <div className="hidden md:block">
        <h1
          className={`ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
            footer ? "from-white" : "from-accent-foreground"
          } to-primary uppercase`}
        >
          MHS Tech Ventures
        </h1>
        <p
          className={`ml-2 text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r ${
            footer ? "from-white" : "from-accent-foreground"
          } to-primary uppercase text-justify tracking-[7.7px]`}
        >
          Private Limited
        </p>
      </div>
    </Link>
  );
}
