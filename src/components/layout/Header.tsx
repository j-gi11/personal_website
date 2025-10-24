import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      setIsMobileMenuOpen(false);

      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = sections[0]; // Default to first section

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
            break;
          }
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        const mobileMenu = document.querySelector("[data-mobile-menu]");
        const hamburgerButton = document.querySelector(
          "[data-hamburger-button]"
        );

        if (
          mobileMenu &&
          !mobileMenu.contains(target) &&
          hamburgerButton &&
          !hamburgerButton.contains(target)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768;

      if (isMobile) {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset - 80;
        window.scrollTo({
          top: elementTop,
          behavior: "smooth",
        });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection("#about")}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Jagroop Gill
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-200 hover:text-primary cursor-pointer relative ${
                    activeSection === item.href.substring(1)
                      ? "text-primary font-bold"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Navigation - Horizontal Accordion */}
          <div className="md:hidden relative">
            {/* Hamburger Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-10"
              data-hamburger-button
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>

            {/* Horizontal Accordion Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute right-0 top-0 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden"
                  style={{ zIndex: 5 }}
                  data-mobile-menu
                >
                  <nav className="flex items-center space-x-1 p-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className={`text-xs font-medium transition-all duration-200 hover:text-primary cursor-pointer relative whitespace-nowrap px-3 py-2 rounded-md hover:bg-muted/50 ${
                            activeSection === item.href.substring(1)
                              ? "text-primary font-bold bg-muted/30"
                              : "text-foreground/80"
                          }`}
                        >
                          {item.name}
                          {activeSection === item.href.substring(1) && (
                            <motion.div
                              layoutId="activeTabMobile"
                              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </button>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
