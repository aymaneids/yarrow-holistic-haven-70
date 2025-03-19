
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import FeaturedServices from "@/components/FeaturedServices";
import TestimonialCard from "@/components/TestimonialCard";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <AboutIntro />
      <FeaturedServices />
      
      {/* Testimonials */}
      <section 
        className="py-20 px-6 md:px-10 bg-cover bg-center bg-fixed relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(196, 183, 166, 0.8), rgba(196, 183, 166, 0.9)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3634&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs uppercase tracking-wider font-medium">
            Client Experiences
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-white/90 max-w-2xl mx-auto mb-10">
            We're honored to be part of our clients' beauty journeys. Here's what they have to say about their Yarrow experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Penny transformed not just my hair, but my entire approach to beauty. The organic color left my hair feeling healthier than ever before!"
              author="Sarah W."
              className="animate-slideUp [animation-delay:100ms]"
            />
            <TestimonialCard 
              quote="Finally found a salon that aligns with my values. The sustainable practices and non-toxic products make me feel good about my beauty routine."
              author="Michael T."
              className="animate-slideUp [animation-delay:200ms]"
            />
            <TestimonialCard 
              quote="My scalp has never felt better since switching to Yarrow. Penny truly understands holistic hair care and the results speak for themselves."
              author="Jamie L."
              className="animate-slideUp [animation-delay:300ms]"
            />
          </div>
        </div>
      </section>
      
      {/* Contact/Location */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="animate-slideInLeft">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
              Visit Yarrow
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-800 mb-6">
              Come Experience Holistic Beauty
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We'd love to welcome you to our sustainable salon suite in Charleston. Schedule your visit today and discover the Yarrow difference.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-yarrow-sage" />
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Our Location</h3>
                  <address className="not-italic text-gray-600">
                    1334 Ashley River Road<br />Charleston, SC 29407
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-1 text-yarrow-sage" />
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Tuesday - Friday: 9am - 6pm<br />
                    Saturday: 9am - 3pm<br />
                    Closed Sunday & Monday
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/book-now"
                className="bg-yarrow-sage hover:bg-yarrow-moss text-white px-6 py-3 rounded-md transition-all duration-300 font-medium hover:shadow-md inline-flex items-center"
              >
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                to="/contact"
                className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 font-medium inline-flex items-center"
              >
                View Contact Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="h-[400px] md:h-full rounded-lg overflow-hidden shadow-lg animate-slideInRight">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.1703968503985!2d-80.03273048482711!3d32.82182478096075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7c5acb7e2f1d%3A0x7caee99b43a847f0!2s1334%20Ashley%20River%20Rd%2C%20Charleston%2C%20SC%2029407%2C%20USA!5e0!3m2!1sen!2sus!4v1651248737956!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yarrow Holistic Beauty Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
