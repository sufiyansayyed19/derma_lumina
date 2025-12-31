export const CLINIC_INFO = {
  name: "Lumina Skin & Body Collective",
  doctor: "Dr. Ananya Sharma",
  qualifications: "MBBS, MD (Dermatology), FAM (Germany)",
  tagline: "Science Meets Artistry for Your Skin & Body.",
  phone: "+91 98765 43210",
  email: "hello@luminaclinic.com",
  address: "102, Emerald Plaza, Jubilee Hills, Hyderabad",
  bookingLink: "/contact",
  social: {
    instagram: "@lumina_skin",
    facebook: "LuminaClinic"
  }
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Treatments", href: "/treatments" },
  { name: "Results", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "About Dr.", href: "/about" },
];

export const TREATMENTS = [
  // --- SKIN ---
  {
    id: "hydra-facial",
    category: "Skin",
    title: "Signature HydraFacial",
    shortDesc: "Deep cleansing and hydration for an instant glow.",
    fullDesc: "Our medical-grade HydraFacial uses patented technology to cleanse, extract, and hydrate. It clears dead skin cells while bathing the new skin in cleansing, hydrating, and moisturizing serums. Ideally suited for all skin types.",
    duration: "45 Mins",
    benefits: ["Instant Glow", "No Downtime", "Blackhead Removal", "Deep Hydration"],
    image: "/images/treatments/hydraFacial.png",
    beforeAfterImage: "/images/treatments/gallery/hydraFacialBA.png" // NEW
  },
  {
    id: "laser-toning",
    category: "Skin",
    title: "Q-Switch Laser Toning",
    shortDesc: "Treats pigmentation, dark spots, and uneven skin tone.",
    fullDesc: "A revolutionary laser treatment that breaks down melanin deposits in the skin. Perfect for treating melasma, sun spots, and tattoo removal. It also stimulates collagen production for a smoother texture.",
    duration: "30 Mins",
    benefits: ["Even Skin Tone", "Reduces Melasma", "Collagen Boost", "Acne Scar Reduction"],
    image: "/images/treatments/qSwitchLaser.png",
    beforeAfterImage: "/images/treatments/gallery/qSwitchLaserBA.png" // NEW
  },
  
  // --- BODY ---
  {
    id: "cryolipolysis",
    category: "Body",
    title: "Cool Sculpting (Fat Freeze)",
    shortDesc: "Non-surgical fat reduction technology.",
    fullDesc: "Cryolipolysis is a non-invasive procedure that gently and effectively removes fat from targeted areas of the body that have not responded to traditional diet and exercise. Patients typically see a 20-25% reduction in fat in the treated area.",
    duration: "60 Mins",
    benefits: ["Permanent Fat Loss", "Non-Surgical", "Targeted Shaping", "FDA Approved"],
    image: "/images/treatments/cryolipolysis.png",
    beforeAfterImage: "/images/treatments/gallery/cryolipolysisBA.png" // NEW
  },
  {
    id: "inch-loss",
    category: "Body",
    title: "Ultrasonic Inch Loss",
    shortDesc: "Immediate inch loss using cavitation technology.",
    fullDesc: "Uses low-frequency sound waves to burst fat cells, turning them into liquid which is then naturally eliminated by your body's lymphatic system. Excellent for body contouring before events.",
    duration: "45 Mins",
    benefits: ["Immediate Results", "Skin Tightening", "Painless", "No Downtime"],
    image: "/images/treatments/inch-loss.png",
    beforeAfterImage: "/images/treatments/gallery/inch-lossBA.png" // NEW
  },

  // --- HAIR ---
  {
    id: "prp-therapy",
    category: "Hair",
    title: "PRP Hair Restoration",
    shortDesc: "Uses your own plasma to stimulate hair growth.",
    fullDesc: "Platelet-Rich Plasma (PRP) therapy is a three-step medical treatment in which a person's blood is drawn, processed, and then injected into the scalp. It triggers natural hair growth and maintains it by increasing blood supply to the hair follicle.",
    duration: "60 Mins",
    benefits: ["Natural Regrowth", "Reduces Fall", "Thicker Hair", "Autologous (Safe)"],
    image: "/images/treatments/prp.png",
    beforeAfterImage: "/images/treatments/gallery/prpBA.png" // NEW
  }
];


export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Kapoor",
    image: "/images/testimonials/profiles/priya.png",
    beforeAfter: "/images/testimonials/priya.png",
    treatment: "HydraFacial",
    rating: 5,
    text: "Dr. Ananya is absolutely incredible! My skin has never looked better. The HydraFacial treatment gave me that instant glow and the results are lasting. Highly recommend!"
  },
  {
    id: 2,
    name: "Aisha Khan",
    image: "/images/testimonials/profiles/aisha.png",
    beforeAfter: "/images/testimonials/aisha.png",
    treatment: "Q-Switch Laser Toning",
    rating: 5,
    text: "After years of dealing with melasma, I finally found a solution. Dr. Ananya's expertise is unmatched. My skin tone is now even and I feel so confident!"
  },
  {
    id: 3,
    name: "Neha Desai",
    image: "/images/testimonials/profiles/neha.png",
    beforeAfter: "/images/testimonials/neha.png",
    treatment: "CoolSculpting",
    rating: 5,
    text: "Non-invasive, painless, and results are visible within weeks. Dr. Ananya explains everything clearly and makes you feel comfortable. Best decision ever!"
  },
  {
    id: 4,
    name: "Sophia Patel",
    image: "/images/testimonials/profiles/sophia.png",
    beforeAfter: "/images/testimonials/sophia.png",
    treatment: "Microneedling RF",
    rating: 5,
    text: "My acne scars have significantly reduced. The treatment was worth every rupee. The clinic is super clean and the staff is very professional."
  },
  {
    id: 5,
    name: "Meera Shankar",
    image: "/images/testimonials/profiles/meera.png",
    beforeAfter: "/images/testimonials/meera.png",
    treatment: "Signature HydraFacial",
    rating: 5,
    text: "I've been a regular client for 2 years now. Dr. Ananya's personalized approach and cutting-edge treatments keep my skin glowing year-round!"
  },
  {
    id: 6,
    name: "Anjali Mishra",
    image: "/images/testimonials/profiles/anjali.png",
    beforeAfter: "/images/testimonials/anjali.png",
    treatment: "Hair Restoration PRP",
    rating: 5,
    text: "Amazing results! My hair thickness has improved noticeably. Dr. Ananya's knowledge about the latest treatments is impressive. Totally transformed my confidence!"
  }
];

export const FAQS = [
  {
    id: 1,
    question: "Are these treatments safe for all skin types?",
    answer: "Yes, most of our treatments are customized to work safely on all skin types. During your consultation, Dr. Ananya assesses your skin type, concerns, and medical history to create a personalized treatment plan. Some treatments may need adjustments for darker or more sensitive skin, but we have solutions for everyone."
  },
  {
    id: 2,
    question: "How much downtime do I need after treatment?",
    answer: "Downtime varies by treatment. Treatments like HydraFacial and laser toning have minimal to no downtime—you can resume normal activities immediately. Procedures like microneedling RF may have 24-48 hours of mild redness. We'll provide detailed post-care instructions for each treatment."
  },
  {
    id: 3,
    question: "How many sessions are needed to see results?",
    answer: "Results depend on the treatment and your goals. HydraFacial shows immediate results after one session. For concerns like pigmentation or hair loss, a series of 4-6 sessions spaced 4-6 weeks apart typically produces optimal results. We'll discuss realistic timelines during your consultation."
  },
  {
    id: 4,
    question: "Is it safe to combine multiple treatments?",
    answer: "Absolutely! In fact, combining treatments often produces better results. For example, laser toning + microneedling or HydraFacial + PRP can be done together or scheduled strategically. Dr. Ananya will recommend the best combination based on your goals and skin condition."
  },
  {
    id: 5,
    question: "What is your cancellation and refund policy?",
    answer: "We require 24 hours notice for cancellations. Cancellations made within 24 hours of your appointment may incur a 50% charge. Package treatments are non-refundable but can be transferred or rescheduled. Contact us for details on our flexible booking options."
  },
  {
    id: 6,
    question: "Do you offer payment plans or financing options?",
    answer: "Yes! We offer flexible payment plans for larger treatment packages. We also accept major credit cards and partner with financial institutions for EMI options. Contact us to discuss a payment plan that fits your budget."
  },
  {
    id: 7,
    question: "Are there any side effects I should expect?",
    answer: "Most treatments have minimal side effects. Common ones include temporary redness, mild swelling, or sensitivity—all typically resolve within hours to a few days. Serious side effects are rare when treatments are performed by experienced professionals. We'll discuss potential risks during your consultation."
  },
  {
    id: 8,
    question: "Can I do these treatments if I'm pregnant or breastfeeding?",
    answer: "Most cosmetic treatments are not recommended during pregnancy or while breastfeeding due to limited safety data. However, some gentler treatments like consultation-based skincare adjustments are safe. Please inform Dr. Ananya about your pregnancy or breastfeeding status during booking."
  }
];