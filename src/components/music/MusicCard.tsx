
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Play, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MusicCardProps {
  title: string;
  artist: string;
  coverUrl: string;
  className?: string;
  isFeatured?: boolean;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  coverUrl,
  className,
  isFeatured = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Downloading: ${title} by ${artist}`);
    // Download functionality will be implemented later
  };

  return (
    <Card 
      className={cn(
        "music-card",
        isFeatured ? "aspect-[16/9]" : "aspect-square", 
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log(`Playing: ${title}`)}
    >
      {/* Cover Image */}
      <img
        src={coverUrl}
        alt={`${title} by ${artist}`}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity flex flex-col justify-end p-3",
          isHovered ? "opacity-100" : isFeatured ? "opacity-100" : "opacity-0"
        )}
      >
        <h3 className="text-white font-medium line-clamp-1">{title}</h3>
        <p className="text-white/80 text-sm line-clamp-1">{artist}</p>
        
        {/* Action Buttons */}
        <div className={cn(
          "flex items-center justify-between mt-3 transition-opacity",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full h-8 w-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              console.log(`Playing: ${title}`);
            }}
          >
            <Play className="h-4 w-4 text-white ml-0.5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full h-8 w-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 text-white" />
            </Button>
            
            <Button
              size="icon"
              variant="secondary"
              className={cn(
                "rounded-full h-8 w-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm",
                isLiked && "text-red-500"
              )}
              onClick={toggleLike}
            >
              <Heart className={cn("h-4 w-4 text-white", isLiked && "fill-current text-red-500")} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MusicCard;
