"use client";

import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { CLINIC_INFO } from "../../lib/data";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Contact" }]} />
      
      {/* --- HEADER --- */}
      <section className="bg-[#EFE9F5] py-12 md:py-20 px-6 text-center">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-3 block">
          Book Appointment
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
          Get in <span className="italic text-purple-600">Touch</span>
        </h1>
        <p className="text-gray-500 font-sans max-w-xl mx-auto text-sm sm:text-base md:text-lg">
          Ready to start your journey? Visit our clinic or send us a message to schedule your consultation.
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- LEFT: Contact Info --- */}
          <div className="space-y-12">
            
            {/* Info Cards */}
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-xs">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-500 text-lg">
                    {CLINIC_INFO.phone}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Mon-Sat, 10am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-500 text-lg">
                    {CLINIC_INFO.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[300px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-md border border-gray-100">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13636.082280928673!2d73.12315824999999!3d19.234888650000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb90c0c4b35ee3%3A0x312cd9c3ffc647f5!2sBahloolguda%2C%20first%20Floor%2C%20Sravya%20D%20estates%2C%20near%2C%20Prashant%20Colony%20Rd%2C%20opp.%20to%20nature%20cure%20hospital%2C%20Prashanth%20Colony%2C%20Balkampet%2C%20Hyderabad%2C%20Telangana%20500016!3m2!1d17.4449009!2d78.45044779999999!5e1!3m2!1sen!2sin!4v1767175532766!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Lumina Clinic Location"
               ></iframe>
            </div>

          </div>

          {/* --- RIGHT: Booking Form --- */}
          <div className="bg-white border border-gray-100 rounded-[40px] p-8 md:p-12 shadow-xl">
            <h3 className="font-serif text-3xl text-gray-900 mb-2">Send a Message</h3>
            <p className="text-gray-500 mb-8">We usually respond within 24 hours.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                  <input type="text" placeholder="Jane" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Service of Interest</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-gray-600">
                  <option>General Consultation</option>
                  <option>Acne Treatment</option>
                  <option>Cool Sculpting</option>
                  <option>Hair Restoration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your concern..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none" />
              </div>

              <button className="w-full bg-[#9B8AFB] hover:bg-[#8573E0] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                <Send size={18} /> Send Request
              </button>

            </form>
          </div>

        </div>
      </div>

    </main>
  );
}