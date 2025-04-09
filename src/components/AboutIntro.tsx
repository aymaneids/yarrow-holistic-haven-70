
import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3648&q=80"
            alt="CURED Nails Nashville interior"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover-lift"
          />
        </div>
        
        <div className="order-1 md:order-2 animate-slideInRight">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
            About CURED
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-800 mb-6">
            Your Holistic Nail Sanctuary
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to CURED Nails Nashville, Nashville's premier non-toxic nail salon. We're committed to providing exceptional nail services with organic, sustainable products that nurture your nails while respecting our planet.
          </p>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our philosophy embraces holistic beauty—recognizing that true beauty stems from health, sustainability, and mindful practices. Every service at CURED is designed with your wellbeing and environmental impact in consideration.
          </p>
          
          <div className="flex items-center mb-8 text-yarrow-stone">
            <MapPin className="h-5 w-5 mr-2 text-yarrow-sage" />
            <address className="not-italic">
              123 Main Street, Nashville, TN 37201
            </address>
          </div>
          
          <Link
            to="/about"
            className="group inline-flex items-center text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 font-medium"
          >
            Learn more about our philosophy
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
