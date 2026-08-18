import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-xs tracking-wider uppercase text-[#9A8D80] ${className}`}>
      <Link to="/" className="hover:text-[#171614] flex items-center transition-colors">
        <Home className="w-3.5 h-3.5" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-[#DDD1C3]" />
            {item.path && !isLast ? (
              <Link to={item.path} className="hover:text-[#171614] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#171614] font-medium truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
