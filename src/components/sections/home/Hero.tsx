'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO } from "../../../lib/data";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });
  return (
    <section 
      ref={ref}
      className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col justify-center min-h-[70vh]"
    >
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* --- LEFT COLUMN: Image --- */}
        <div className="relative w-full flex justify-center lg:justify-start order-2 lg:order-1">
           <div className="relative">
             <div 
               className="relative h-72 md:h-96 w-64 md:w-80 bg-gray-100 rounded-t-[200px] rounded-b-[200px] border-4 md:border-6 border-white shadow-lg overflow-hidden z-10 fade-in-up mx-auto"
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

             <div className="absolute bottom-2 md:bottom-4 -right-8 md:-right-12 bg-white p-3 md:p-4 rounded-lg shadow-lg flex items-center gap-2 md:gap-3 animate-bounce-slow z-20 border border-gray-200 w-fit">
                <div className="bg-green-50 p-1 md:p-2 rounded-full flex-shrink-0">
                  <CheckCircle2 className="text-green-600 w-4 md:w-5 h-4 md:h-5" />
                </div>
                <div className="whitespace-nowrap">
                   <span className="font-bold block text-gray-900 text-xs">MBBS, MD</span>
                   <span className="text-gray-500 text-[9px] md:text-xs">Board Certified</span>
                </div>
             </div>
           </div>
        </div>

        {/* --- RIGHT COLUMN: Text --- */}
        <div 
          className="flex flex-col gap-4 text-center lg:text-left order-1 lg:order-2"
          style={{
            opacity: hasBeenInView ? 1 : 0,
            transform: hasBeenInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
          }}
        >
           
           <span className="text-[#9B8AFB] font-bold tracking-widest uppercase text-xs">
             Est. 2014 • Hyderabad
           </span>

           <h1 className="font-serif text-4xl md:text-6xl text-gray-900 leading-[1.1]">
             Science of <span className="italic text-gray-400">Skin</span>, <br />
             Art of <span className="text-[#9B8AFB]">Slimming</span>.
           </h1>

           <p className="text-base md:text-lg text-gray-500 font-sans leading-relaxed max-w-lg mx-auto lg:mx-0">
             {CLINIC_INFO.tagline} specialized in non-invasive laser treatments, 
             clinical facials, and fat-freezing technology designed for your confidence.
           </p>
           
           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2">
              <Link href="/treatments" className="bg-[#9B8AFB] hover:bg-[#8573E0] active:button-press text-white px-6 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                View Treatments
              </Link>
              
              <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition cursor-pointer hover:bg-gray-50">
                <Star className="fill-yellow-400 text-yellow-400 w-4 h-4 pulse-soft" />
                <span className="font-bold text-gray-900 text-sm">4.9</span>
                <span className="text-gray-400 text-xs">(2k+ Reviews)</span>
              </div>
           </div>

           {/* 2. REMOVED THE DUPLICATE STATS ROW FROM HERE */}

        </div>
      </div>
    </section>
  );
}