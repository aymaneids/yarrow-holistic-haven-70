
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

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
        scrolled
          ? "bg-white/85 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-50"
        >
          <h1 className="font-display font-semibold text-2xl sm:text-3xl text-yarrow-leaf hover:text-yarrow-moss transition-colors duration-300">
            CURED
          </h1>
          <p className="text-xs -mt-1 text-yarrow-stone tracking-wider font-medium">
            NAILS NASHVILLE
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
            href="https://www.instagram.com/curednails" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </nav>

        {/* Mobile Menu - Using Sheet component */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden relative z-50 p-2 text-yarrow-leaf hover:text-yarrow-moss transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-16 bg-white/95 backdrop-blur-lg">
              <nav className="flex flex-col items-center justify-center space-y-8 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
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
                >
                  Book Now
                </Link>
                
                <a 
                  href="https://www.instagram.com/curednails" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 mt-4"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
