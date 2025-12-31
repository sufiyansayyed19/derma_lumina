import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { CLINIC_INFO } from "../../lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT: Copyright Text */}
        <p className="text-gray-400 text-sm font-sans">
          © {currentYear} {CLINIC_INFO.name}. All rights reserved.
        </p>

        {/* RIGHT: Social Icons */}
        <div className="flex items-center gap-6">
          
          {/* Instagram */}
          <Link 
            href={`https://instagram.com/${CLINIC_INFO.social.instagram.replace('@', '')}`} 
            target="_blank"
            className="text-gray-400 hover:text-[#E1306C] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </Link>

          {/* YouTube */}
          <Link 
            href="https://youtube.com" 
            target="_blank"
            className="text-gray-400 hover:text-[#FF0000] transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={22} />
          </Link>

          {/* WhatsApp (Custom SVG since Lucide doesn't have it) */}
          <Link 
            href={`https://wa.me/${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`} 
            target="_blank"
            className="text-gray-400 hover:text-[#25D366] transition-colors"
            aria-label="WhatsApp"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 1h4a.5.5 0 0 0 1-1v-1a.5.5 0 0 0-1-1h-4a.5.5 0 0 0-1 1v1z" opacity="0" />
            </svg>
          </Link>

        </div>
      </div>
    </footer>
  );
}