"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../../../lib/data";

export default function Faqs() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 page-transition-in">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-2 block">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">
            Frequently Asked <span className="italic text-purple-600">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Find answers to common questions about our treatments, procedures, and what to expect.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          {FAQS.map((faq, index) => (
            <div
              key={faq.id}
              className="fade-in-up"
              style={{ animation: `fadeInUp 0.8s ease-out ${(index + 1) * 0.1}s both` }}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full bg-white hover:bg-purple-50 transition-colors duration-300 rounded-lg p-4 text-left border-2 border-purple-100 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-base pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div
                  className="bg-white border-2 border-t-0 border-purple-100 rounded-b-lg p-4 text-gray-600 leading-relaxed animate-expand"
                  style={{
                    animation: 'slideDown 0.3s ease-out',
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm md:text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
      `}</style>
    </section>
  );
}
