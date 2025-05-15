
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface GenreCardProps {
  name: string;
  imageUrl: string;
  className?: string;
}

const GenreCard: React.FC<GenreCardProps> = ({ name, imageUrl, className }) => {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden group cursor-pointer h-32 transition-transform hover:scale-[1.02]",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center p-4 z-10">
        <h3 className="text-white text-xl font-bold text-center drop-shadow-md">
          {name}
        </h3>
      </div>
    </Card>
  );
};

export default GenreCard;
