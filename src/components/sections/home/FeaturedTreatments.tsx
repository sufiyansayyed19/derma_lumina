import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TREATMENTS } from "../../../lib/data";

export default function FeaturedTreatments() {
  const features = TREATMENTS.slice(0, 3);

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
      <div className="bg-[#F8F5FC] rounded-[40px] p-8 md:p-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
             <h2 className="font-serif text-4xl md:text-5xl mb-4">Popular Treatments</h2>
             <p className="text-gray-500 max-w-md">
               Discover our most requested procedures for this season, curated for immediate results.
             </p>
          </div>
          <Link href="/treatments" className="text-[#9B8AFB] font-bold flex items-center gap-2 hover:gap-4 transition-all mb-2">
            See Full Menu <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((treatment, idx) => (
            <Link key={treatment.id} href={`/treatments/${treatment.id}`}>
              <div 
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full fade-in-up"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="w-full h-40 bg-gray-100 rounded-2xl mb-6 relative overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest bg-purple-50 px-2 py-1 rounded-md">
                      {treatment.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold mt-3 mb-1 group-hover:text-purple-600 transition-colors">
                      {treatment.title}
                    </h3>
                  </div>
                  {/* Price removed from here */}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}