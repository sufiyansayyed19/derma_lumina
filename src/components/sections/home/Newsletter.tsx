"use client";

import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    
    // Simulate API call (replace with actual backend integration)
    setTimeout(() => {
      setStatus("success");
      setMessage("Thanks! Check your email for exclusive tips.");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-[600px] mx-auto text-center fade-in-up" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Mail size={32} className="text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
          Get Beauty <span className="italic">Tips</span>
        </h2>
        
        {/* Description */}
        <p className="text-white/90 text-lg mb-8 max-w-md mx-auto">
          Subscribe to our newsletter for exclusive skincare tips, treatment updates, and special offers delivered to your inbox.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-white hover:bg-gray-50 text-purple-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-50 whitespace-nowrap"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>

        {/* Status Message */}
        {status === "success" && (
          <div className="mt-4 flex items-center justify-center gap-2 text-white animate-in fade-in">
            <Check size={20} />
            <p>{message}</p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 flex items-center justify-center gap-2 text-red-100 animate-in fade-in">
            <AlertCircle size={20} />
            <p>{message}</p>
          </div>
        )}

        {/* Trust Badge */}
        <p className="text-white/75 text-sm mt-6">
          ✓ No spam, just skincare wisdom. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
