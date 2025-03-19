
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50 hover-lift",
      className
    )}>
      <div className="text-yarrow-sage text-3xl font-serif mb-4">"</div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <p className="text-yarrow-moss font-medium">— {author}</p>
    </div>
  );
};

export default TestimonialCard;
