"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CLINIC_INFO, NAVIGATION } from '../../lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* 1. Logo Section with Certification Icon */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/logo.png"
              alt="Lumina Skin & Body Collective"
              width={190}
              height={52}
              className="h-12 md:h-[54px] w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Dermatologically Tested Icon */}
          <div className="relative w-10 h-10 sm:w-14 sm:h-14 pulse-soft">
            <Image
              src="/icons/icon.png"
              alt="Dermatologically Tested"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 2. Middle Links (Matches 'Products - About us' in image) */}
        <div className="hidden md:flex gap-10">
          {NAVIGATION.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-bold text-gray-600 hover:text-purple-600 transition-colors uppercase tracking-wide font-sans relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* 3. Action Button (Matches 'Log In' purple button) */}
        <div className="flex items-center gap-4">
          <Link 
            href={CLINIC_INFO.bookingLink}
            className="hidden md:block bg-[#9B8AFB] hover:bg-[#8573E0] text-white px-8 py-3 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 active:button-press focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          >
            Book Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-800 hover:text-purple-600 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
          />
          {/* Menu */}
          <div 
            className="fixed top-24 left-0 right-0 md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg z-40 animate-in fade-in-up"
          >
            {NAVIGATION.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-gray-600 font-bold hover:text-purple-600 transition-colors py-2" 
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}