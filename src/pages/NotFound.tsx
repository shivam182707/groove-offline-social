
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="relative h-24 w-24 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-music-primary/20"></div>
          <div className="absolute inset-3 flex items-center justify-center">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="h-12 w-1 bg-music-primary/50 rounded-full"
                  style={{ 
                    height: `${Math.max(3, Math.min(12, i * 2))}rem`,
                    opacity: i % 2 === 0 ? 0.7 : 0.4
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-music-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-2">Oops! We can't find that page.</p>
        <p className="text-muted-foreground mb-8">
          The page at <code className="px-1 py-0.5 bg-muted rounded text-sm">{location.pathname}</code> doesn't exist.
        </p>
        
        <Link to="/">
          <Button>
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
