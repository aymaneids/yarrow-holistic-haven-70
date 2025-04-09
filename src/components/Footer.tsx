
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yarrow-sage text-white py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="font-display text-xl mb-4">CURED</h3>
            <p className="text-white/80 mb-6 text-sm">
              Nashville's premier non-toxic nail salon dedicated to holistic, organic, and sustainable beauty practices.
            </p>
            <a
              href="https://www.instagram.com/curednails"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-yarrow-cream transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @curednails
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book-now" className="text-white/80 hover:text-white transition-colors">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-display text-xl mb-4">Find Us</h3>
            <address className="not-italic text-white/80 flex items-start mb-4">
              <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>123 Main Street<br />Nashville, TN 37201</span>
            </address>
            <div className="flex items-start text-white/80">
              <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="mb-1">Tuesday - Friday: 9am - 6pm</p>
                <p>Saturday: 9am - 3pm</p>
                <p className="mt-1">Closed Sunday & Monday</p>
              </div>
            </div>
          </div>

          {/* Book */}
          <div>
            <h3 className="font-display text-xl mb-4">Book Your Visit</h3>
            <p className="text-white/80 mb-4">
              Ready to experience the CURED difference? Book your appointment online for an eco-friendly nail service that nurtures you and the planet.
            </p>
            <Link
              to="/book-now"
              className="inline-block bg-white text-yarrow-sage px-6 py-2.5 rounded-md hover:bg-yarrow-cream transition-colors duration-300 font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>&copy; {currentYear} CURED Nails Nashville. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Sustainable beauty for a healthier planet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
