"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { TREATMENTS } from "../../lib/data";

const CATEGORIES = ["All", "Skin", "Body", "Hair"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCases = activeCategory === "All" 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <main className="min-h-screen bg-white pb-20">
      <Breadcrumb items={[{ label: "Gallery" }]} />
      
      {/* --- HEADER --- */}
      <section className="bg-[#EFE9F5] py-12 md:py-20 px-6 text-center">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-3 block">
          Real People, Real Results
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
          Gallery of <span className="italic text-purple-600">Transformations</span>
        </h1>
        <p className="text-gray-500 font-sans max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Browse through our success stories. Each treatment is customized to the 
          unique anatomy and goals of our patients.
        </p>
      </section>

      {/* --- FILTER TABS --- */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-gray-900 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="max-w-[1200px] mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {filteredCases.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              
              {/* Image Card */}
              <div className="relative h-[350px] md:h-[400px] w-full bg-gray-100 rounded-[40px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-gray-100">
                {/* HERE WE USE THE NEW BEFORE/AFTER IMAGE */}
                <Image
                  src={item.beforeAfterImage || item.image} 
                  alt={`${item.title} Before and After`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur text-purple-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                   <Check size={14} className="text-green-500" /> Verified Result
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                   <p className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-1">
                     {item.category}
                   </p>
                   <h3 className="font-serif text-2xl md:text-3xl">{item.title}</h3>
                </div>
              </div>

              {/* Patient Details */}
              <div className="px-4 py-6 flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-900 font-bold">
                     <span className="w-2 h-2 rounded-full bg-purple-500" />
                     Patient Concern
                  </div>
                  <p className="text-gray-500 text-sm pl-4">
                    {item.category === 'Skin' ? 'Pigmentation & Dullness' : 
                     item.category === 'Body' ? 'Stubborn Fat Deposits' : 'Receding Hair Line'}
                  </p>
                </div>

                <div className="text-right space-y-2">
                  <div className="text-gray-900 font-bold">Outcome</div>
                  <p className="text-gray-500 text-sm">
                    {item.category === 'Skin' ? 'Clear, Radiant Skin' : 
                     item.category === 'Body' ? 'Visible Inch Loss' : 'Increased Density'}
                  </p>
                </div>
              </div>
              
            </div>
          ))}

        </div>
      </div>

    </main>
  );
}