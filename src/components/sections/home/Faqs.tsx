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
    <section className="py-24 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 page-transition-in">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-3 block">
            Questions & Answers
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            Frequently Asked <span className="italic text-purple-600">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our treatments, procedures, and what to expect.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          {FAQS.map((faq, index) => (
            <div
              key={faq.id}
              className="fade-in-up"
              style={{ animation: `fadeInUp 0.8s ease-out ${(index + 1) * 0.1}s both` }}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full bg-white hover:bg-purple-50 transition-colors duration-300 rounded-xl p-6 text-left border-2 border-purple-100 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div
                  className="bg-white border-2 border-t-0 border-purple-100 rounded-b-xl p-6 text-gray-600 leading-relaxed animate-expand"
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
        <div className="mt-16 text-center fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}>
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
