
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CategorySectionProps {
  title: string;
  seeAllLink?: string;
  className?: string;
  children: ReactNode;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  seeAllLink,
  className,
  children
}) => {
  return (
    <section className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {seeAllLink && (
          <Link 
            to={seeAllLink}
            className="text-muted-foreground hover:text-primary flex items-center text-sm font-medium"
          >
            See all
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};

export default CategorySection;
