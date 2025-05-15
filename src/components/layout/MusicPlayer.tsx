
import React, { useState } from "react";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Heart,
  Share2,
  Download
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface MusicPlayerProps {
  isVisible?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isVisible = true }) => {
  const isMobile = useIsMobile();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [progress, setProgress] = useState([0]);
  const [isLiked, setIsLiked] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t z-40 py-2 px-4">
      <div className="container mx-auto flex flex-col">
        {/* Progress Bar */}
        <div className="w-full px-2 mb-2">
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center space-x-3 w-1/4">
            <div className="h-10 w-10 overflow-hidden rounded bg-muted">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
                alt="Album Cover"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:block overflow-hidden">
              <p className="font-medium truncate">Dreamy Nights</p>
              <p className="text-xs text-muted-foreground truncate">Ambient Waves</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex h-8 w-8 rounded-full"
              onClick={() => console.log("Previous song")}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex h-8 w-8 rounded-full"
              onClick={() => console.log("Next song")}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          {/* Volume & Actions */}
          <div className="flex items-center justify-end space-x-2 w-1/4">
            <Button
              variant="ghost"
              size="icon"
              className={`hidden sm:flex h-8 w-8 rounded-full ${isLiked ? 'text-red-500' : ''}`}
              onClick={toggleLike}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex h-8 w-8 rounded-full"
              onClick={() => console.log("Download track")}
            >
              <Download className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex h-8 w-8 rounded-full"
              onClick={() => console.log("Share track")}
            >
              <Share2 className="h-4 w-4" />
            </Button>
            
            <div className="hidden md:flex items-center space-x-2 ml-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-20"
              />
            </div>
          </div>
        </div>

        {/* Mobile Time Display */}
        <div className="flex justify-between text-xs text-muted-foreground mt-1 px-2 sm:hidden">
          <span>0:00</span>
          <span>3:45</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
