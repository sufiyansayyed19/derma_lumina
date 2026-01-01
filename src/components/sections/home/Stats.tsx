'use client';

import { useEffect, useState } from 'react';
import { Heart, Users, Award } from 'lucide-react';
import { Counter } from '@/components/ui/Counter';
import { useInView } from '@/hooks/useInView';

export default function Stats() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.3 });

  const stats = [
    {
      label: 'Years of Practice',
      value: 10,
      suffix: '+',
      icon: Award,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Happy Patients',
      value: 5000,
      suffix: '+',
      icon: Users,
      color: 'bg-pink-50 text-pink-600',
    },
    {
      label: 'Treatments Monthly',
      value: 200,
      suffix: '+',
      icon: Heart,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section 
      ref={ref}
      className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 md:p-6 rounded-xl transition-all duration-500 ${
                hasBeenInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                animation: hasBeenInView ? `fadeInUp 0.6s ease-out ${idx * 0.15}s both` : 'none',
              }}
            >
              {/* Icon with Glow */}
              <div className={`w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full ${stat.color} mb-2 md:mb-3 glow-soft`}>
                <Icon size={20} className="md:w-6 md:h-6" />
              </div>

              {/* Value with Counter Animation */}
              <h3
                className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-1 pulse-soft"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15 + 0.2}s both, pulse-soft 3s ease-in-out ${idx * 0.15 + 0.5}s infinite`,
                }}
              >
                {hasBeenInView ? (
                  <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
                ) : (
                  '0'
                )}
              </h3>

              {/* Label */}
              <p className="text-gray-600 font-medium text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}