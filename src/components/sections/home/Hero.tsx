'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO } from "../../../lib/data";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });
  return (
    // 1. CHANGED PADDING HERE (py-6 md:py-12)
    <section 
      ref={ref}
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 md:py-12 flex flex-col justify-center min-h-[80vh]"
    >
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- LEFT COLUMN: Image --- */}
        <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 order-2 lg:order-1">
           <div 
             className="relative h-[320px] md:h-[600px] w-full bg-gray-100 rounded-t-[200px] rounded-b-[200px] border-4 md:border-8 border-white shadow-2xl overflow-hidden z-10 fade-in-up"
             style={{
               animation: hasBeenInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
             }}
           >
             <Image 
                src="/images/doctor/doctor.png" 
                alt="Dr. Ananya Sharma"
                fill
                className="object-cover object-top"
                priority
              />
           </div>

           <div className="absolute bottom-6 md:bottom-10 -right-2 md:-right-8 bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl flex items-center gap-2 md:gap-4 animate-bounce-slow z-20 border border-gray-100 max-w-[160px] md:max-w-[200px]">
              <div className="bg-green-50 p-1.5 md:p-2 rounded-full">
                <CheckCircle2 className="text-green-600 w-4 md:w-6 h-4 md:h-6" />
              </div>
              <div>
                 <span className="font-bold block text-gray-900 text-xs md:text-sm">MBBS, MD</span>
                 <span className="text-gray-500 text-[10px] md:text-xs">Board Certified</span>
              </div>
           </div>
        </div>

        {/* --- RIGHT COLUMN: Text --- */}
        <div 
          className="flex flex-col gap-6 text-center lg:text-left order-1 lg:order-2"
          style={{
            opacity: hasBeenInView ? 1 : 0,
            transform: hasBeenInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
          }}
        >
           
           <span className="text-[#9B8AFB] font-bold tracking-widest uppercase text-sm">
             Est. 2014 • Hyderabad
           </span>

           <h1 className="font-serif text-5xl md:text-7xl text-gray-900 leading-[1.1]">
             Science of <span className="italic text-gray-400">Skin</span>, <br />
             Art of <span className="text-[#9B8AFB]">Slimming</span>.
           </h1>

           <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-lg mx-auto lg:mx-0">
             {CLINIC_INFO.tagline} specialized in non-invasive laser treatments, 
             clinical facials, and fat-freezing technology designed for your confidence.
           </p>
           
           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4">
              <Link href="/treatments" className="bg-[#9B8AFB] hover:bg-[#8573E0] active:button-press text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                View Treatments
              </Link>
              
              <div className="flex items-center gap-2 px-6 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition cursor-pointer hover:bg-gray-50">
                <Star className="fill-yellow-400 text-yellow-400 w-5 h-5 pulse-soft" />
                <span className="font-bold text-gray-900">4.9</span>
                <span className="text-gray-400 text-sm"> (2k+ Reviews)</span>
              </div>
           </div>

           {/* 2. REMOVED THE DUPLICATE STATS ROW FROM HERE */}

        </div>
      </div>
    </section>
  );
}