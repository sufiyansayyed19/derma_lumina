"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../../../lib/data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoplay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoplay(false);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 page-transition-in">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-3 block">
            What Our Clients Say
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            Real Results, Real <span className="italic text-purple-600">Stories</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Thousands of satisfied patients have experienced transformation. Read their stories of confidence and radiance.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          
          {/* Left: Before & After Images */}
          <div className="flex flex-col items-center gap-6 fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            {/* Before & After Slider */}
            <div className="relative w-full h-96 bg-gray-100 rounded-[32px] overflow-hidden shadow-2xl border-4 border-purple-50">
              <Image
                src={current.beforeAfter}
                alt={`${current.name} - Before & After`}
                fill
                className="object-cover transition-opacity duration-500 z-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Fallback gradient - positioned behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center z-0">
                <div className="text-center">
                  <p className="text-purple-600 font-bold text-sm mb-2">Before & After</p>
                  <p className="text-purple-400 text-xs">{current.treatment}</p>
                </div>
              </div>
              
              {/* Before & After Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg z-10">
                <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">Before & After</p>
              </div>

              {/* Treatment Badge */}
              <div className="absolute bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest">{current.treatment}</p>
              </div>
            </div>

            {/* Client Info Below Image */}
            <div className="text-center w-full">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-purple-100 overflow-hidden shadow-lg bg-gradient-to-br from-purple-300 to-purple-600 flex items-center justify-center">
                {/* Avatar with initials */}
                <span className="text-white text-lg font-bold">
                  {current.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-1">{current.name}</h3>
              <p className="text-purple-600 text-sm font-bold uppercase tracking-widest mb-3">
                {current.treatment}
              </p>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Testimonial Text & Navigation */}
          <div className="flex flex-col justify-center fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
            
            {/* Quote */}
            <div className="mb-8">
              <p className="text-gray-600 text-lg font-serif italic leading-relaxed mb-6 relative pl-6">
                <span className="absolute left-0 top-0 text-4xl text-purple-200">"</span>
                {current.text}
              </p>
            </div>

            {/* Testimonial Counter */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                {currentIndex + 1} of {TESTIMONIALS.length}
              </p>
              <div className="h-1 flex-1 bg-gradient-to-l from-purple-600 to-purple-400 rounded-full"></div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Navigation */}
              <div className="flex items-center gap-2 ml-auto">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsAutoplay(false);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-purple-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 p-6 bg-purple-50 rounded-2xl border border-purple-100">
              <p className="text-sm text-gray-600 font-sans">
                <span className="font-bold text-purple-600">✓ Verified Reviews</span> from real clients. 
                We're proud of the trust our patients place in us.
              </p>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-20 fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="font-serif text-4xl text-purple-600 font-bold mb-2">10K+</p>
            <p className="text-gray-600 font-sans text-sm uppercase tracking-widest">Happy Clients</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="font-serif text-4xl text-purple-600 font-bold mb-2">4.9★</p>
            <p className="text-gray-600 font-sans text-sm uppercase tracking-widest">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="font-serif text-4xl text-purple-600 font-bold mb-2">15+</p>
            <p className="text-gray-600 font-sans text-sm uppercase tracking-widest">Years Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}
