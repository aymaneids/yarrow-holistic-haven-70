
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      // Parallax effect for hero image
      heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4928&q=80')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-yarrow-cream via-transparent to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-10">
        <div className="max-w-3xl animate-slideDown">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-wider font-medium">
            Nashville's Non-Toxic Nail Salon
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-4 md:mb-6 text-shadow leading-tight">
            Healthy Nails for You and Our Planet
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the intersection of beauty and sustainability at CURED Nails Nashville, where organic nail care meets eco-conscious practices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-now"
              className="bg-yarrow-sage hover:bg-yarrow-moss text-white px-8 py-3 rounded-md transition-all duration-300 text-lg font-medium border border-transparent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yarrow-sage focus:ring-offset-2 hover-scale"
            >
              Book an Appointment
            </Link>
            
            <Link
              to="/services"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-md transition-all duration-300 text-lg font-medium hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 flex items-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group text-white hover:text-yarrow-cream transition-colors duration-300 text-lg font-medium flex items-center underline underline-offset-4"
            >
              About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-float">
        <div className="w-10 h-10 clip-triangle bg-white/30 backdrop-blur-sm border border-white/40 rotate-180"></div>
      </div>
    </div>
  );
};

export default Hero;
