import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_LINKS } from "../../constants";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#beranda");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    setActiveLink(href);

    // Close menu immediately and scroll without delay
    setIsMenuOpen(false);

    // Small delay to let menu start closing, then scroll
    setTimeout(() => scrollToSection(href), 100);
  };

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 90;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleConsultation = () => {
    const phoneNumber = "6287882633686";
    const message = encodeURIComponent(
      "Halo SF Interior, saya tertarik untuk konsultasi desain interior.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
      } border-b border-slate-100 dark:border-slate-800`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-full mx-auto">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-0.5 group">
          <span className="font-montserrat text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0057FF] to-[#00d4ff] bg-clip-text text-transparent transition-all duration-300">
            SF
          </span>
          <span className="font-montserrat text-2xl md:text-3xl font-light text-slate-900 dark:text-white transition-colors duration-300">
            Interior
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(link.href, e)}
              className={`font-inter text-xs font-semibold uppercase tracking-wider transition-colors duration-300 relative ${
                activeLink === link.href
                  ? "text-[#0057FF]"
                  : "text-slate-600 dark:text-slate-400 hover:text-[#0057FF]"
              }`}
            >
              {link.label}
              {activeLink === link.href && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0057FF] to-[#00d4ff]"
                  layoutId="navUnderline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button
          onClick={handleConsultation}
          className="hidden md:block bg-gradient-to-r from-[#0057ff] to-[#00d4ff] text-white font-inter hover:cursor-pointer ease-in-out hover:scale-103 text-sm font-semibold px-6 py-3 rounded-full uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
        >
          KONSULTASI
        </button>

        {/* Mobile Menu Button with Animation */}
        <button
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={toggleMenu}
          className="md:hidden text-slate-900 dark:text-white p-2 relative w-10 h-10 flex items-center justify-center"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              className="w-full h-0.5 bg-current origin-center"
              animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="w-full h-0.5 bg-current"
              animate={
                isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-full h-0.5 bg-current origin-center"
              animate={
                isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAVIGATION_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`font-inter text-sm font-semibold uppercase tracking-wider transition-colors py-2 ${
                    activeLink === link.href
                      ? "text-[#0057FF]"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={handleConsultation}
                className="bg-gradient-to-r from-[#0057ff] to-[#00d4ff] text-white font-inter text-sm font-semibold px-6 py-3 rounded-full uppercase tracking-wider shadow-lg w-full mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  delay: 0.24,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                KONSULTASI
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
