
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  linkText,
  linkTo
}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 music-gradient opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <div className="relative h-16 w-16 mb-6">
            <div className="absolute inset-0 rounded-full bg-white/20"></div>
            <div className="absolute inset-2 flex items-center justify-center">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className={`h-8 w-1 bg-white rounded-full animate-wave-${i}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Melodify</h1>
          <p className="text-center text-white/80 max-w-md">
            Discover, share, and enjoy your favorite music. Connect with friends and build your own musical journey.
          </p>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-2 md:hidden">
            <div className="relative h-10 w-10 mr-2">
              <div className="absolute inset-0 rounded-full bg-music-primary"></div>
              <div className="absolute inset-1 flex items-center justify-center">
                <div className="flex space-x-[2px]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-5 w-[2px] bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Melodify</h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">{title}</h2>
          <p className="text-muted-foreground text-center mb-8">{subtitle}</p>
          
          {children}
          
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              {linkText.split('?')[0]}
              {' '}
              <Link to={linkTo} className="text-primary font-medium hover:underline">
                {linkText.split('?')[1]}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
