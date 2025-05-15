
import React from "react";
import { Card } from "@/components/ui/card";
import { Play, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlaylistCardProps {
  title: string;
  description: string;
  coverUrl: string;
  songCount: number;
  className?: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  title,
  description,
  coverUrl,
  songCount,
  className
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className={cn(
        "music-card overflow-hidden group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-stretch h-full">
        {/* Cover Image */}
        <div className="w-1/3 md:w-2/5 relative">
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <Button
            size="icon"
            variant="default"
            className={cn(
              "absolute bottom-2 right-2 rounded-full h-8 w-8 opacity-0 transition-opacity transform translate-y-2",
              isHovered && "opacity-100 translate-y-0"
            )}
          >
            <Play className="h-4 w-4 ml-0.5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-between flex-grow p-3 md:p-4 bg-card">
          <div>
            <div className="flex items-start justify-between">
              <h3 className="font-medium line-clamp-1">{title}</h3>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 -mr-1 -mt-1"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          </div>
          
          <div className="text-xs text-muted-foreground mt-2">
            {songCount} {songCount === 1 ? "song" : "songs"}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PlaylistCard;
