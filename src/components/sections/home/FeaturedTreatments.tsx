import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TREATMENTS } from "../../../lib/data";

export default function FeaturedTreatments() {
  const features = TREATMENTS.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="bg-[#F8F5FC] rounded-3xl p-6 md:p-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
             <h2 className="font-serif text-3xl md:text-4xl mb-3">Popular Treatments</h2>
             <p className="text-gray-500 max-w-md">
               Discover our most requested procedures for this season, curated for immediate results.
             </p>
          </div>
          <Link href="/treatments" className="text-[#9B8AFB] font-bold flex items-center gap-2 hover:gap-4 transition-all mb-2">
            See Full Menu <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((treatment, idx) => (
            <Link key={treatment.id} href={`/treatments/${treatment.id}`}>
              <div 
                className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer h-full fade-in-up"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="w-full h-32 bg-gray-100 rounded-xl mb-4 relative overflow-hidden">
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
                    <h3 className="font-serif text-lg font-bold mt-2 mb-1 group-hover:text-purple-600 transition-colors">
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