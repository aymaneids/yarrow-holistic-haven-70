
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Info, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookNow = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 px-6 md:px-10 bg-yarrow-cream">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
            Book Your Visit
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-gray-800 mb-4">
            Schedule Your Holistic Beauty Experience
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the Yarrow difference with our organic hair treatments and sustainable beauty practices.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-white/50 hover-lift">
            <Calendar className="h-10 w-10 text-yarrow-sage mb-6" />
            <h2 className="text-2xl font-display font-semibold text-gray-800 mb-3">
              Online Booking
            </h2>
            <p className="text-gray-600 mb-6">
              We've made it easy to schedule your appointment online. Simply click the button below to be directed to our Vagaro booking page, where you can view our services, prices, and available time slots.
            </p>
            <a
              href="https://www.vagaro.com/yarrowholisticbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yarrow-sage hover:bg-yarrow-moss text-white px-6 py-3 rounded-md transition-all duration-300 font-medium inline-flex items-center"
            >
              Book Online Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="space-y-6">
            <div className="flex items-start bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/50">
              <Clock className="h-6 w-6 text-yarrow-sage mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Tuesday - Friday: 9am - 6pm<br />
                  Saturday: 9am - 3pm<br />
                  Closed Sunday & Monday
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/50">
              <Info className="h-6 w-6 text-yarrow-sage mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-800 mb-2">First Time Clients</h3>
                <p className="text-gray-600">
                  If this is your first visit, please arrive 10 minutes early to complete a consultation form. This helps us understand your hair goals and any sensitivities.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Preview */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6 text-center">
            Our Popular Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/50">
              <h3 className="font-medium text-gray-800 mb-2">Organic Hair Color</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Our non-toxic, organic hair color provides beautiful results while being gentle on your hair and scalp.
              </p>
              <Link to="/services" className="text-yarrow-sage hover:text-yarrow-moss text-sm font-medium inline-flex items-center">
                View Details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/50">
              <h3 className="font-medium text-gray-800 mb-2">Holistic Hair Treatments</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Restore your hair's natural health with our customized treatments using sustainable products.
              </p>
              <Link to="/services" className="text-yarrow-sage hover:text-yarrow-moss text-sm font-medium inline-flex items-center">
                View Details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/50">
              <h3 className="font-medium text-gray-800 mb-2">Precision Haircuts</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Expertly crafted cuts that enhance your natural beauty and are easy to maintain.
              </p>
              <Link to="/services" className="text-yarrow-sage hover:text-yarrow-moss text-sm font-medium inline-flex items-center">
                View Details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Booking Policy */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-white/50 mb-10">
          <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
            Booking Policy
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yarrow-sage mr-3 mt-0.5" />
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Cancellations:</span> We understand that schedules change. Please provide at least 24 hours notice for cancellations.
              </p>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yarrow-sage mr-3 mt-0.5" />
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Late Arrivals:</span> If you're running late, please let us know. We'll do our best to accommodate you, but may need to adjust your service.
              </p>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yarrow-sage mr-3 mt-0.5" />
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Deposits:</span> For certain services, a deposit may be required at the time of booking.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6">
            Ready to Experience Holistic Beauty?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.vagaro.com/yarrowholisticbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yarrow-sage hover:bg-yarrow-moss text-white px-6 py-3 rounded-md transition-all duration-300 font-medium inline-flex items-center justify-center"
            >
              Book Your Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link to="/contact" className="border border-yarrow-sage text-yarrow-sage hover:bg-yarrow-sage/10 px-6 py-3 rounded-md transition-all duration-300 font-medium inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
