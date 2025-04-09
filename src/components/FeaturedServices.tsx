
import React from "react";
import { Scissors, Droplet, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-yarrow-taupe/20 hover-lift",
        `animate-slideUp [animation-delay:${delay}ms]`
      )}
    >
      <div className="bg-yarrow-sage/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-yarrow-sage">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
    </div>
  );
};

const FeaturedServices = () => {
  const services = [
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Organic Manicures",
      description: "Experience luxurious, non-toxic manicures using our organic, plant-based products that nourish while they beautify.",
      delay: 100
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Natural Pedicures",
      description: "Rejuvenate your feet with our holistic pedicure treatments using natural exfoliants and organic polishes.",
      delay: 200
    },
    {
      icon: <Droplet className="h-6 w-6" />,
      title: "Nail & Cuticle Care",
      description: "Therapeutic treatments to restore balance and health to your nails and cuticles using natural, clean ingredients.",
      delay: 300
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Sustainable Products",
      description: "Curated selection of clean, cruelty-free, eco-conscious nail care products for home maintenance.",
      delay: 400
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-yarrow-cream">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
          Our Services
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-800 mb-6">
          Holistic Nail Care Services
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every service at CURED is thoughtfully designed to enhance your natural beauty while minimizing environmental impact.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={service.delay}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link
          to="/services"
          className="group inline-flex items-center text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 font-medium"
        >
          View all our services
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedServices;
