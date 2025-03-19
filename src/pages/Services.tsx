
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: string; // Optional as some services may have variable pricing
}

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const services: Service[] = [
    // Hair Cutting
    {
      id: "cut-1",
      name: "Holistic Hair Cut",
      description: "A personalized cut tailored to your hair type, face shape, and lifestyle using sustainable techniques. Includes consultation, shampoo, and styling.",
      category: "cutting",
    },
    {
      id: "cut-2",
      name: "Botanical Trim",
      description: "A quick refresh for your current style that maintains your hair's health and shape.",
      category: "cutting",
    },
    {
      id: "cut-3",
      name: "Youth Cut (Under 12)",
      description: "Gentle, child-friendly haircut using non-toxic products safe for young ones.",
      category: "cutting",
    },
    
    // Organic Hair Color
    {
      id: "color-1",
      name: "Organic Full Color",
      description: "Complete color transformation using our premium organic, non-toxic hair color that nourishes while it transforms.",
      category: "color",
    },
    {
      id: "color-2",
      name: "Natural Highlights",
      description: "Dimensional, sun-kissed highlights created with organic color for a natural, luminous effect.",
      category: "color",
    },
    {
      id: "color-3",
      name: "Root Touch-Up",
      description: "Refresh your color at the roots with our organic formula that's gentle on scalp and hair.",
      category: "color",
    },
    {
      id: "color-4",
      name: "Balayage/Ombre",
      description: "Hand-painted, graduated color techniques for a natural-looking, low-maintenance result using organic products.",
      category: "color",
    },
    {
      id: "color-5",
      name: "Gray Blending",
      description: "Subtle blending of gray hair with your natural color for a harmonious, natural look.",
      category: "color",
    },
    
    // Hair & Scalp Care
    {
      id: "care-1",
      name: "Scalp Detox Treatment",
      description: "Deep cleansing treatment that removes product buildup, balances the scalp microbiome, and refreshes your hair's foundation.",
      category: "care",
    },
    {
      id: "care-2",
      name: "Organic Hair Mask",
      description: "Intensive conditioning treatment using organic botanicals to repair and revitalize damaged hair.",
      category: "care",
    },
    {
      id: "care-3",
      name: "Holistic Hair Therapy",
      description: "Comprehensive treatment addressing specific hair concerns with custom-blended natural remedies and techniques.",
      category: "care",
    },
    {
      id: "care-4",
      name: "Botanical Blowout",
      description: "Styled blowout using heat protection and organic products for a smooth, voluminous finish.",
      category: "care",
    }
  ];
  
  const categories = [
    { id: "all", name: "All Services" },
    { id: "cutting", name: "Hair Cutting" },
    { id: "color", name: "Organic Hair Color" },
    { id: "care", name: "Hair & Scalp Care" }
  ];
  
  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="pt-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-yarrow-taupe/20 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
            Our Services
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-gray-800 mb-6">
            Holistic Hair Services
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Every service at Yarrow is thoughtfully designed to enhance your natural beauty while minimizing environmental impact. We use only organic, sustainable, and non-toxic products.
          </p>
          
          <a
            href="https://www.vagaro.com/yarrowholisticbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yarrow-sage hover:bg-yarrow-moss text-white px-6 py-3 rounded-md transition-all duration-300 font-medium hover:shadow-md inline-flex items-center justify-center mx-auto"
          >
            Book Online for Pricing
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
      
      {/* Service Categories */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm",
                  activeCategory === category.id
                    ? "bg-yarrow-sage text-white"
                    : "bg-yarrow-sage/10 text-yarrow-sage hover:bg-yarrow-sage/20"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-yarrow-taupe/20 hover-lift"
              >
                <h3 className="text-xl font-display font-semibold mb-3 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                
                <div className="pt-4 border-t border-yarrow-taupe/10">
                  <a
                    href="https://www.vagaro.com/yarrowholisticbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 font-medium inline-flex items-center"
                  >
                    Book for pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Highlight */}
      <section className="py-20 px-6 md:px-10 bg-yarrow-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
              Our Products
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-800 mb-6">
              Sustainable Beauty Products
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Yarrow, we carefully select each product for its effectiveness, ingredient quality, and environmental impact. Our curated collection features brands that share our commitment to:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="bg-yarrow-sage/20 text-yarrow-sage p-1 rounded-full mr-3 mt-0.5">✓</span>
                <span className="text-gray-600">Non-toxic, clean formulations free from harmful chemicals</span>
              </li>
              <li className="flex items-start">
                <span className="bg-yarrow-sage/20 text-yarrow-sage p-1 rounded-full mr-3 mt-0.5">✓</span>
                <span className="text-gray-600">Organic and naturally-derived ingredients</span>
              </li>
              <li className="flex items-start">
                <span className="bg-yarrow-sage/20 text-yarrow-sage p-1 rounded-full mr-3 mt-0.5">✓</span>
                <span className="text-gray-600">Cruelty-free and ethical production practices</span>
              </li>
              <li className="flex items-start">
                <span className="bg-yarrow-sage/20 text-yarrow-sage p-1 rounded-full mr-3 mt-0.5">✓</span>
                <span className="text-gray-600">Eco-conscious packaging and sustainability</span>
              </li>
              <li className="flex items-start">
                <span className="bg-yarrow-sage/20 text-yarrow-sage p-1 rounded-full mr-3 mt-0.5">✓</span>
                <span className="text-gray-600">Performance that matches or exceeds conventional products</span>
              </li>
            </ul>
            
            <p className="text-gray-600 italic mb-8">
              Ask about our current product offerings during your next visit!
            </p>
          </div>
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1618436245986-f1dcf5d5a72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt="Sustainable beauty products"
              className="w-full h-[500px] object-cover rounded-lg shadow-md hover-lift"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 md:px-10 bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-yarrow-moss/90"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Ready for Your Holistic Hair Experience?
          </h2>
          
          <p className="text-white/90 mb-10 leading-relaxed">
            Book your appointment today and discover the perfect balance of beauty, health, and sustainability at Yarrow Holistic Beauty.
          </p>
          
          <a
            href="https://www.vagaro.com/yarrowholisticbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-yarrow-cream text-yarrow-moss px-8 py-3 rounded-md transition-all duration-300 text-lg font-medium hover:shadow-lg inline-flex items-center"
          >
            Book an Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
