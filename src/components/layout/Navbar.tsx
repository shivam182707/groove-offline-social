
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Menu, 
  X, 
  Home, 
  Library, 
  Heart, 
  Users, 
  User,
  MessageSquare
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Search functionality will be implemented later
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-music-primary animate-pulse-slow"></div>
              <div className="absolute inset-1 flex items-center justify-center">
                <div className="flex space-x-[2px]">
                  <div className="h-4 w-[2px] bg-white rounded-full animate-wave-1"></div>
                  <div className="h-4 w-[2px] bg-white rounded-full animate-wave-2"></div>
                  <div className="h-4 w-[2px] bg-white rounded-full animate-wave-3"></div>
                  <div className="h-4 w-[2px] bg-white rounded-full animate-wave-4"></div>
                  <div className="h-4 w-[2px] bg-white rounded-full animate-wave-5"></div>
                </div>
              </div>
            </div>
            <span className="font-bold text-xl">Melodify</span>
          </Link>

          {/* Search Form - Hidden on mobile */}
          {!isMobile && (
            <form onSubmit={handleSearch} className="hidden md:flex max-w-sm mx-4 flex-1">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for songs, artists or albums..."
                  className="w-full pl-9 bg-muted/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          )}

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="default" size="sm">
                Sign Up
              </Button>
            </Link>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
            
            {/* Mobile Navigation */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <Link to="/login" className="flex justify-center">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="flex justify-center">
                <Button variant="default" size="sm" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
            
            {/* Mobile Links */}
            <div className="space-y-2">
              <Link to="/" className="flex items-center px-4 py-2 hover:bg-muted rounded-md">
                <Home className="h-4 w-4 mr-3" />
                Home
              </Link>
              <Link to="/library" className="flex items-center px-4 py-2 hover:bg-muted rounded-md">
                <Library className="h-4 w-4 mr-3" />
                Library
              </Link>
              <Link to="/favorites" className="flex items-center px-4 py-2 hover:bg-muted rounded-md">
                <Heart className="h-4 w-4 mr-3" />
                Favorites
              </Link>
              <Link to="/friends" className="flex items-center px-4 py-2 hover:bg-muted rounded-md">
                <Users className="h-4 w-4 mr-3" />
                Friends
              </Link>
              <Link to="/chat" className="flex items-center px-4 py-2 hover:bg-muted rounded-md">
                <MessageSquare className="h-4 w-4 mr-3" />
                Chat
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
