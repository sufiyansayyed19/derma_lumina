import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BeforeAfterSlider from "../../components/ui/BeforeAfterSlider";
import { TREATMENTS } from "../../lib/data";

interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  image: string;
  beforeAfterImage?: string;
}

export default function TreatmentsPage() {
  const skinTreatments = TREATMENTS.filter(t => t.category === "Skin");
  const bodyTreatments = TREATMENTS.filter(t => t.category === "Body");
  const hairTreatments = TREATMENTS.filter(t => t.category === "Hair");

  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* --- REFINED HEADER (Clean, Left-Aligned, High-End) --- */}
      <section className="pt-8 md:pt-18 pb-6 md:pb-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Small Eyebrow Text */}
          <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-4 block page-transition-in">
            Services Menu
          </span>

          {/* Big Headline */}
          <div 
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-12 page-header-reveal"
            style={{
              animation: 'revealUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-gray-900 leading-[0.9]">
              Our <br />
              <span className="italic text-gray-400">Treatments</span>
            </h1>

            {/* Description on the right */}
            <div className="max-w-md mb-2">
              <p className="text-gray-500 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
                Advanced clinical procedures curated for results. Every treatment 
                is customized to your unique anatomy.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-[1200px] mx-auto px-6 pt-6 md:pt-8">
        <TreatmentSection title="Skin & Face" subtitle="Clinical Dermatology" items={skinTreatments} />
        <TreatmentSection title="Body & Slimming" subtitle="Contouring" items={bodyTreatments} />
        <TreatmentSection title="Hair Restoration" subtitle="Trichology" items={hairTreatments} />

        <div className="mt-10 md:mt-14 flex flex-col items-center text-center gap-3 bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl border border-gray-100 px-5 py-6">
          <p className="text-sm md:text-base text-gray-700">
            Not sure which treatment fits? Book a quick consult and we’ll guide you.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-purple-600 text-white font-bold text-sm md:text-base shadow-md hover:shadow-lg transition-all"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

    </main>
  );
}

// --- HELPER COMPONENTS ---

function TreatmentSection({ title, subtitle, items }: { title: string, subtitle: string, items: Treatment[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-16 md:mb-24">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
           <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-2">{subtitle}</span>
           <h2 className="font-serif text-4xl text-gray-900">{title}</h2>
        </div>
        <div className="hidden md:block h-px flex-1 bg-gray-100 mx-8 mb-4"></div> {/* Decorative Line */}
        <div className="hidden md:block text-sm text-gray-400 font-sans mb-2">
           {items.length} Procedures
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, idx) => (
          <TreatmentCard key={item.id} item={item} idx={idx} showSlider={idx === 0} />
        ))}
      </div>
    </div>
  );
}

function TreatmentCard({ item, idx, showSlider }: { item: Treatment, idx: number, showSlider?: boolean }) {
  return (
    <Link href={`/treatments/${item.id}`} className="group block h-full">
      <div 
        className="h-full rounded-[28px] md:rounded-[32px] border border-gray-100 bg-white shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 fade-in-up"
        style={{
          animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`,
        }}
      >
        
        <div className="relative h-52 md:h-64 bg-gray-50 overflow-hidden">
          {showSlider && item.beforeAfterImage ? (
            <BeforeAfterSlider
              beforeImage={item.image}
              afterImage={item.beforeAfterImage}
              title={item.title}
            />
          ) : (
            <>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-gray-900 shadow-sm">
                  {item.category}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="p-5 md:p-7 flex flex-col gap-3 md:gap-4">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl text-gray-900 transition-colors group-hover:text-purple-600 leading-tight">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
              {item.shortDesc}
            </p>
          </div>

          <div className="mt-auto pt-4 flex items-center text-gray-400 font-bold text-xs uppercase tracking-wider group-hover:text-purple-600 transition-colors">
            View Details
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}