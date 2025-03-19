
import React, { useEffect } from "react";
import { MapPin, Clock, Instagram, ArrowRight } from "lucide-react";

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-yarrow-taupe/20 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
            Get In Touch
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-gray-800 mb-6">
            Contact Yarrow Holistic Beauty
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We'd love to hear from you or welcome you to our salon. Book an appointment or connect with us online.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-display font-semibold text-gray-800 mb-8">
              Visit Our Salon
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1 text-yarrow-sage" />
                <div>
                  <h3 className="font-medium text-xl text-gray-800 mb-2">Our Location</h3>
                  <address className="not-italic text-gray-600 text-lg">
                    1334 Ashley River Road<br />Charleston, SC 29407
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 mt-1 text-yarrow-sage" />
                <div>
                  <h3 className="font-medium text-xl text-gray-800 mb-2">Business Hours</h3>
                  <div className="text-gray-600 space-y-1 text-lg">
                    <p>Tuesday - Friday: 9am - 6pm</p>
                    <p>Saturday: 9am - 3pm</p>
                    <p>Sunday & Monday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="h-6 w-6 mr-4 mt-1 text-yarrow-sage" />
                <div>
                  <h3 className="font-medium text-xl text-gray-800 mb-2">Social Media</h3>
                  <a
                    href="https://www.instagram.com/yourmanegirlpenny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 font-medium text-lg"
                  >
                    @yourmanegirlpenny
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-medium text-xl text-gray-800 mb-4">Book an Appointment</h3>
              <p className="text-gray-600 mb-6">
                Ready to experience holistic beauty at Yarrow? Book your appointment online through our Vagaro scheduling system.
              </p>
              <a
                href="https://www.vagaro.com/yarrowholisticbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yarrow-sage hover:bg-yarrow-moss text-white px-6 py-3 rounded-md transition-all duration-300 font-medium hover:shadow-md inline-flex items-center"
              >
                Book Online
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
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
      
      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-10 bg-yarrow-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
              FAQ
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-display font-semibold mb-3 text-gray-800">What makes your hair color organic?</h3>
              <p className="text-gray-600">
                Our organic hair colors use naturally derived ingredients, are free from ammonia, PPD, resorcinol, and other harmful chemicals. They provide beautiful color results while being gentler on your hair, scalp, and the environment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-display font-semibold mb-3 text-gray-800">Do I need to prepare anything before my appointment?</h3>
              <p className="text-gray-600">
                For color services, we recommend not washing your hair for 24-48 hours prior to your appointment. This allows natural oils to protect your scalp during the coloring process. For all appointments, bring inspiration photos and be ready to discuss your hair goals.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-display font-semibold mb-3 text-gray-800">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                We kindly request 24 hours notice for cancellations. Late cancellations or no-shows may result in a fee of 50% of the scheduled service. We understand emergencies happen, so please communicate with us as soon as possible.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-display font-semibold mb-3 text-gray-800">Do you sell the products you use?</h3>
              <p className="text-gray-600">
                Yes, we offer a curated selection of the sustainable, clean, non-toxic, and organic products we use in our services. Ask your stylist for recommendations tailored to your specific hair needs during your visit.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 md:px-10 bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-yarrow-moss/90"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            We Can't Wait to Meet You
          </h2>
          
          <p className="text-white/90 mb-10 leading-relaxed">
            Join our community of clients who value healthy, sustainable beauty practices. Your holistic hair journey begins with a single appointment.
          </p>
          
          <a
            href="https://www.vagaro.com/yarrowholisticbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-yarrow-cream text-yarrow-moss px-8 py-3 rounded-md transition-all duration-300 text-lg font-medium hover:shadow-lg inline-flex items-center"
          >
            Book Your Visit Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
