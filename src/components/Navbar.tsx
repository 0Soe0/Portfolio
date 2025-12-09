import { cn, smoothScrollTo } from "../lib/utils";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { ThemeToggle } from "components";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    smoothScrollTo(href, 1200);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); //if the user scrolls down the height of the navbar (10), the navbar will be scrolled
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-xl font-bold text-primary flex items-center"
          >
            <span className="relative z-10">
              <span className="shadow-black dark:text-glow text-foreground">
                Sophia Facal
              </span>{" "}
              portfolio
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {" "}
            {/*hidden in smaller screens*/}
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white/80 dark:text-foreground/80 hover:text-black dark:hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle variant="desktop" />
          </div>

          {/* Mobile nav */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground z-50" //hidden for larger screens
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} //for accessibility
          >
            {isMobileMenuOpen ? (
              <XIcon size={24} className="text-white" />
            ) : (
              <MenuIcon size={24} />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div
            className={cn(
              "fixed inset-0 bg-black/95 dark:bg-background/95 backdrop-blud-md z-40 flex flex-col items-center justify-center h-screen",
              "transition-all duration-300 md:hidden" // style customization, hidden for bigger screens
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <a
                  href={item.href}
                  key={key}
                  className="text-white/80 dark:text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggle variant="mobile" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
