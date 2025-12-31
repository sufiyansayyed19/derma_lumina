import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Calendar, ArrowLeft } from "lucide-react";
import { TREATMENTS, CLINIC_INFO } from "../../../lib/data";

// 1. Generate Static Params (Required for static export/performance)
export async function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({
    slug: treatment.id,
  }));
}

// 2. The Page Component
export default async function TreatmentDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find the data matching the URL
  const treatment = TREATMENTS.find((t) => t.id === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      
      {/* --- BREADCRUMB / BACK --- */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-4 page-transition-in">
        <Link href="/treatments" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-purple-600 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Treatments
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT COLUMN: Images & Description (Span 8) --- */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Header */}
          <div className="page-header-reveal">
            <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              {treatment.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
              {treatment.title}
            </h1>
          </div>

          {/* Main Image (Rounded & Beautiful) */}
          <div className="relative w-full h-[300px] md:h-[500px] bg-gray-100 rounded-[32px] overflow-hidden shadow-sm blur-in" style={{ animation: 'blurIn 0.6s ease-out 0.1s both' }}>
             <Image 
               src={treatment.image} 
               alt={treatment.title}
               fill
               className="object-cover"
               priority
             />
          </div>

          {/* Description Text */}
          <div className="prose prose-lg text-gray-500 max-w-none fade-in-up" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
             <h3 className="font-serif text-2xl text-gray-900 mb-4">About the procedure</h3>
             <p className="leading-relaxed text-lg">
               {treatment.fullDesc}
             </p>
          </div>

          {/* Benefits Grid */}
          <div className="bg-[#F8F5FC] rounded-[32px] p-8 mt-4 fade-in-up" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
            <h3 className="font-serif text-2xl text-gray-900 mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {treatment.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-purple-50 fade-in-up"
                  style={{ animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s both` }}
                >
                  <CheckCircle2 className="text-purple-500 w-5 h-5 shrink-0" />
                  <span className="font-medium text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* --- RIGHT COLUMN: Sticky Booking Card (Span 4) --- */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-xl">
              
              <div className="text-center mb-8 border-b border-gray-100 pb-8">
                 <p className="text-gray-500 font-sans text-sm mb-2">Interested in this treatment?</p>
                 <p className="font-serif text-2xl text-gray-900">Book a Consultation</p>
              </div>

              <div className="space-y-6 mb-8">
                 {/* Detail Row 1 */}
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                     <Clock size={18} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-400 font-bold uppercase">Duration</p>
                     <p className="text-gray-900 font-bold">{treatment.duration}</p>
                   </div>
                 </div>

                 {/* Detail Row 2 */}
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                     <Calendar size={18} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-400 font-bold uppercase">Downtime</p>
                     <p className="text-gray-900 font-bold">Minimal / None</p>
                   </div>
                 </div>
              </div>

              <Link 
                href={CLINIC_INFO.bookingLink}
                className="block w-full bg-[#9B8AFB] hover:bg-[#8573E0] active:button-press text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
              >
                Schedule Appointment
              </Link>
              
              <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                *Consultation fee is adjustable against the treatment cost.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}