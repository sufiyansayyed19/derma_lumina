import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, Heart } from "lucide-react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { CLINIC_INFO } from "../../lib/data";

export const metadata = {
  title: `About ${CLINIC_INFO.doctor} | ${CLINIC_INFO.name}`,
  description: "Meet our board-certified dermatologist specializing in cosmetic treatments and laser surgery.",
  openGraph: {
    title: `About ${CLINIC_INFO.doctor}`,
    description: "Aesthetic medicine with clinical expertise",
    images: [{ url: "/images/doctor/doctor.png" }],
  },
};

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
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative inline-block">
              {/* Decorative background square */}
              <div className="absolute -inset-4 border-2 border-[#9B8AFB] rounded-3xl z-0"></div>
              
              <div className="relative h-80 md:h-96 w-72 md:w-80 bg-gray-100 rounded-3xl overflow-hidden shadow-lg z-10">
                <Image 
                  src="/images/doctor/doctor.png" 
                  alt={CLINIC_INFO.doctor}
                  fill
                  className="object-cover object-top"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-0 right-0 translate-x-6 translate-y-6 bg-white p-4 rounded-lg shadow-lg z-20 border-l-4 border-[#9B8AFB] w-fit">
                 <p className="text-3xl font-serif font-bold text-gray-900">10+</p>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest whitespace-nowrap">Years of Practice</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 mt-6">
              &quot;Beauty is about <span className="text-[#9B8AFB] italic">confidence</span>, not just perfection.&quot;
            </h2>
            <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-base md:text-lg">
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
            <div className="mt-6 pt-6 border-t border-gray-100">
               <p className="font-serif text-lg text-gray-400 italic">Dr. Ananya S.</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- CREDENTIALS GRID --- */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Credentials & Expertise</h2>
            <p className="text-gray-500 text-sm md:text-base">Why patients trust their skin to us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#9B8AFB]">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-serif text-base font-bold mb-2">Education</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                MBBS (Gold Medalist)<br/>
                MD Dermatology<br/>
                Fellowship in Aesthetic Medicine (Germany)
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-400">
                <Award size={22} />
              </div>
              <h3 className="font-serif text-base font-bold mb-2">Recognition</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                &quot;Best Dermatologist 2024&quot;<br/>
                Member of IADVL<br/>
                Published in International Journals
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                <Heart size={22} />
              </div>
              <h3 className="font-serif text-base font-bold mb-2">Philosophy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Patient-first approach using<br/>
                FDA-approved technology<br/>
                and ethical practices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-12 md:py-16 text-center px-4">
        <div className="bg-[#9B8AFB] text-white rounded-2xl md:rounded-3xl max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
          
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Ready to start your journey?</h2>
            <p className="text-purple-100 text-sm md:text-lg mb-5 max-w-xl mx-auto">
              Schedule a comprehensive consultation to discuss your skin and body goals today.
            </p>
            <Link href={CLINIC_INFO.bookingLink} className="inline-block bg-white text-[#9B8AFB] px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 text-sm md:text-base">
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