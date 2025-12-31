import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, Heart } from "lucide-react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { CLINIC_INFO } from "../../lib/data";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "About Dr." }]} />
      
      {/* --- HEADER SECTION --- */}
      <header className="pt-6 pb-4 px-6 md:pt-10 md:pb-6 md:px-12">
        <div className="max-w-300 mx-auto text-left">
          <span className="inline-flex items-center rounded-full bg-gray-50 px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-600">
            About Dr.
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-gray-900 mt-5">
            Meet {CLINIC_INFO.doctor}
          </h1>
          <p className="text-gray-500 max-w-2xl text-sm sm:text-base md:text-lg font-sans mt-3">
            Redefining aesthetic medicine with a blend of clinical expertise and artistic vision.
          </p>
          <div className="mt-8 h-px w-full bg-gray-100" />
        </div>
      </header>

      {/* --- BIO & IMAGE SECTION --- */}
      <section className="max-w-300 mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative">
            {/* Decorative background square */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#9B8AFB] rounded-3xl z-0"></div>
            
            <div className="relative h-125 w-full bg-gray-100 rounded-3xl overflow-hidden shadow-xl z-10">
              <Image 
                src="/images/doctor/doctor.png" 
                alt={CLINIC_INFO.doctor}
                fill
                className="object-cover object-top"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 border-l-4 border-[#9B8AFB]">
               <p className="text-4xl font-serif font-bold text-gray-900">10+</p>
               <p className="text-xs text-gray-500 uppercase tracking-widest">Years of Practice</p>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <h2 className="font-serif text-4xl mb-6">
              &quot;Beauty is about <span className="text-[#9B8AFB] italic">confidence</span>, not just perfection.&quot;
            </h2>
            <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-lg">
              <p>
                Dr. Ananya Sharma is a board-certified dermatologist specializing in cosmetic 
                dermatology and laser surgery. With over a decade of experience, she has helped 
                thousands of patients achieve their skin goals through scientifically proven treatments.
              </p>
              <p>
                She believes in a holistic approach—treating the root cause of skin concerns 
                rather than just masking symptoms. Her signature &quot;Natural Lift&quot; technique 
                has made her one of the most sought-after specialists in the city.
              </p>
            </div>

            {/* Signature Area (Optional) */}
            <div className="mt-10 pt-10 border-t border-gray-100">
               <p className="font-serif text-2xl text-gray-400 italic">Dr. Ananya S.</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- CREDENTIALS GRID --- */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-300 mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Credentials & Expertise</h2>
            <p className="text-gray-500">Why patients trust their skin to us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#9B8AFB]">
                <GraduationCap size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Education</h3>
              <p className="text-gray-600">
                MBBS (Gold Medalist)<br/>
                MD Dermatology<br/>
                Fellowship in Aesthetic Medicine (Germany)
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-400">
                <Award size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Recognition</h3>
              <p className="text-gray-600">
                &quot;Best Dermatologist 2024&quot;<br/>
                Member of IADVL<br/>
                Published in International Journals
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                <Heart size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Philosophy</h3>
              <p className="text-gray-600">
                Patient-first approach using<br/>
                FDA-approved technology<br/>
                and ethical practices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 text-center px-6">
        <div className="bg-[#9B8AFB] text-white rounded-[40px] max-w-5xl mx-auto p-12 md:p-20 relative overflow-hidden">
          
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to start your journey?</h2>
            <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto">
              Schedule a comprehensive consultation to discuss your skin and body goals today.
            </p>
            <Link href={CLINIC_INFO.bookingLink} className="bg-white text-[#9B8AFB] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-gray-100 transition inline-block">
              Book Appointment
            </Link>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
        </div>
      </section>

    </main>
  );
}