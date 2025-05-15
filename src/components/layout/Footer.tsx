
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-music-secondary text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-music-primary"></div>
                <div className="absolute inset-1 flex items-center justify-center">
                  <div className="flex space-x-[2px]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-4 w-[2px] bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
              <span className="font-bold text-xl">Melodify</span>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Discover, share, and enjoy music like never before with our comprehensive platform designed for true music lovers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/library" className="text-gray-400 hover:text-white transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link to="/genres" className="text-gray-400 hover:text-white transition-colors">
                  Genres
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-400 hover:text-white transition-colors">
                  Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/DMCA" className="text-gray-400 hover:text-white transition-colors">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Melodify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
