
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Book Now", path: "/book-now" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-3 md:px-10",
        scrolled || isMenuOpen
          ? "bg-white/85 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-50"
          onClick={closeMenu}
        >
          <h1 className="font-display font-semibold text-2xl sm:text-3xl text-yarrow-leaf hover:text-yarrow-moss transition-colors duration-300">
            Yarrow
          </h1>
          <p className="text-xs -mt-1 text-yarrow-stone tracking-wider font-medium">
            HOLISTIC BEAUTY
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-yarrow-sage relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-yarrow-sage after:transition-all after:duration-300",
                isActive(link.path)
                  ? "text-yarrow-sage after:w-full"
                  : "text-gray-700 after:w-0 hover:after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/book-now"
            className="bg-yarrow-sage text-white px-4 py-2 rounded-md text-sm hover:bg-yarrow-moss transition-colors duration-300 font-medium"
          >
            Book Now
          </Link>
          
          <a 
            href="https://www.instagram.com/yourmanegirlpenny" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 p-2 text-yarrow-leaf hover:text-yarrow-moss transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
          )}
        >
          <nav className="flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={cn(
                  "text-xl font-medium transition-colors duration-300",
                  isActive(link.path)
                    ? "text-yarrow-sage"
                    : "text-gray-700 hover:text-yarrow-sage"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/book-now"
              className="bg-yarrow-sage text-white px-6 py-3 rounded-md text-lg hover:bg-yarrow-moss transition-colors duration-300 mt-4"
              onClick={closeMenu}
            >
              Book Now
            </Link>
            
            <a 
              href="https://www.instagram.com/yourmanegirlpenny" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 mt-4"
              aria-label="Instagram"
              onClick={closeMenu}
            >
              <Instagram size={24} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
