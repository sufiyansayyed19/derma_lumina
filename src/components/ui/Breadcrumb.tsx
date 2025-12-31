import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-gray-50 border-b border-gray-100 py-2 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
            Home
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-gray-400" />
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
