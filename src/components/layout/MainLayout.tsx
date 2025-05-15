
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  
  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthPage && (
        <>
          <div className="h-24" /> {/* Spacer for music player */}
          <MusicPlayer />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
