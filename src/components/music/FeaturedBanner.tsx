
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedBannerProps {
  title: string;
  artist: string;
  description: string;
  coverUrl: string;
  className?: string;
}

const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
  title,
  artist,
  description,
  coverUrl,
  className
}) => {
  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden h-72 md:h-96 w-full", 
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={coverUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center p-6 md:p-10 max-w-md z-10">
        <span className="text-white/80 text-sm uppercase tracking-wider mb-1">
          Featured Track
        </span>
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-1">
          {title}
        </h1>
        <p className="text-white/90 text-lg mb-4">
          {artist}
        </p>
        <p className="text-white/70 mb-6 line-clamp-2 md:line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="default" 
            size="sm" 
            className="rounded-full px-6" 
            onClick={() => console.log(`Playing ${title}`)}
          >
            <Play className="h-4 w-4 mr-2" /> Play
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-9 w-9 border-white/20 bg-white/10 hover:bg-white/20"
          >
            <Heart className="h-4 w-4 text-white" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-9 w-9 border-white/20 bg-white/10 hover:bg-white/20"
          >
            <Share2 className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
