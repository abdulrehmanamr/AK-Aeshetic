import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  HeartPulse,
  Award,
  Users,
  Instagram,
  Check,
  Zap,
  MapPin,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TreatmentCard from '../components/TreatmentCard';
import DoctorCard from '../components/DoctorCard';
import FAQAccordion from '../components/FAQAccordion';
import AppointmentForm from '../components/AppointmentForm';
import { TREATMENTS, TREATMENT_CATEGORIES } from '../data/treatments';
import { DOCTORS } from '../data/doctors';
import { REVIEWS, TRUST_STATS } from '../data/reviews';
import { FAQS } from '../data/faqs';
import { RESULTS_DATA } from '../data/results';
import { PRICE_ITEMS } from '../data/prices';
import { COURSES } from '../data/courses';
import { TreatmentCategory } from '../types';

export default function HomePage() {
  // Section 05: Signature carousel state
  const signatureTreatments = TREATMENTS.filter(t => t.slug !== 'hydrafacial');
  const [sigIndex, setSigIndex] = useState(0);

  // Section 06: Treatment Finder state
  const [selectedConcern, setSelectedConcern] = useState<string>('GLOW & TEXTURE');

  // Section 07: Real Results Category Filter state
  const [resultsCategory, setResultsCategory] = useState<TreatmentCategory | 'all'>('laser');

  // Section 10: Why MK active accordion/expand state
  const [whyIndex, setWhyIndex] = useState<number | null>(0);

  // Section 11: Technology tab state
  const [techTab, setTechTab] = useState(0);

  // Section 13: Reviews carousel state with autoplay
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isReviewHovered, setIsReviewHovered] = useState(false);

  // Section 17: Price Guide Tab state
  const [priceTab, setPriceTab] = useState<TreatmentCategory | 'all'>('all');

  // Review Autoplay
  useEffect(() => {
    if (isReviewHovered) return;
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isReviewHovered]);

  const concernRecommendations: Record<string, { title: string; desc: string; slugs: string[] }> = {
    'GLOW & TEXTURE': {
      title: 'Luminosity, Pore Clarification & Hydration',
      desc: 'Target dull skin, micro-congestion, and uneven surface texture with gentle, instant-radiance clinical protocols.',
      slugs: ['hydrafacial', 'chemical-peel-depigmentation', 'carbon-laser-hollywood-peel']
    },
    'ACNE & SCARRING': {
      title: 'Scar Remodeling & Active Acne Control',
      desc: 'Break deep fibrotic scar bands and eliminate dermal inflammation using micro-ablative lasers and medical peels.',
      slugs: ['fractional-co2-laser', 'microneedling-exosomes', 'carbon-laser-hollywood-peel']
    },
    'PIGMENTATION': {
      title: 'Melasma, Sun Spots & Tone Correction',
      desc: 'Safe, progressive tyrosinase inhibition formulated specifically for South Asian skin phenotypes to prevent rebound darkening.',
      slugs: ['chemical-peel-depigmentation', 'hydrafacial', 'carbon-laser-hollywood-peel']
    },
    'WRINKLES': {
      title: 'Fine Lines, Dynamic Movement & Elasticity',
      desc: 'Precision micro-dosing to soften dynamic expression lines while preserving authentic facial warmth.',
      slugs: ['botulinum-wrinkle-relaxing', 'mesotherapy-skin-booster', 'microneedling-exosomes']
    },
    'HAIR LOSS': {
      title: 'Crown Thinning, Shedding & Follicle Revival',
      desc: 'Autologous platelet growth factors and scalp micro-infusions to prolong the growth cycle and increase shaft diameter.',
      slugs: ['prp-hair-restoration']
    },
    'SKIN TIGHTENING': {
      title: 'Structural Neocollagenesis & Firmness',
      desc: 'Non-surgical radiofrequency and bio-remodeling to restore youthful rebound elasticity to cheeks, jawline, and neck.',
      slugs: ['microneedling-exosomes', 'pdo-threads-lift', 'mesotherapy-skin-booster']
    },
    'FACIAL CONTOUR': {
      title: 'Structural Support, Lips & Jawline Harmony',
      desc: 'Cannula-delivered hyaluronic acid architecture to gently define cheekbones, jawline angles, and lip symmetry.',
      slugs: ['dermal-fillers-sculpting', 'botulinum-wrinkle-relaxing', 'pdo-threads-lift']
    },
    'BODY': {
      title: 'Non-Surgical Adiposity & Laxity Reduction',
      desc: 'Focused ultrasound acoustic cavitation targeting localized stubborn fat deposits on abdomen, arms, and flanks.',
      slugs: ['body-contouring-hifu', 'laser-hair-reduction']
    }
  };

  const currentConcernData = concernRecommendations[selectedConcern] || concernRecommendations['GLOW & TEXTURE'];
  const recommendedTreatments = TREATMENTS.filter(t => currentConcernData.slugs.includes(t.slug));

  const filteredResults = resultsCategory === 'all'
    ? RESULTS_DATA
    : RESULTS_DATA.filter(r => r.category === resultsCategory);

  const activeResult = filteredResults[0] || RESULTS_DATA[0];

  const filteredPrices = priceTab === 'all'
    ? PRICE_ITEMS
    : PRICE_ITEMS.filter(p => p.category === priceTab);

  const technologies = [
    {
      title: 'LASER SYSTEMS',
      subtitle: 'Fractional Micro-Ablative & Q-Switched Platforms',
      description: 'Precision wavelengths calibrated with sub-millimeter spot sizes to target atrophic acne scars, melanin chromophores, and follicular melanin without thermal collateral damage to surrounding epidermis.',
      image: 'https://images.unsplash.com/photo-1512290900672-1f02e71df0ed?q=80&w=1200&auto=format&fit=crop',
      features: ['Adjustable pulse stack fluences', 'Continuous contact sapphire cooling', 'Specialized Fitzpatrick III–V safety modes']
    },
    {
      title: 'SKIN REJUVENATION',
      subtitle: 'Fractional RF Microneedling & Bio-Exosome Delivery',
      description: 'Gold-plated insulated micro-needles penetrate precisely into the reticular dermis to emit controlled radiofrequency thermal coagulation, opening pathways for lyophilized bio-cellular growth factors.',
      image: 'https://images.unsplash.com/photo-1512290903020-008107775056?q=80&w=1200&auto=format&fit=crop',
      features: ['0.5mm – 3.5mm automated depth control', 'Quadrupled neocollagenesis signaling', 'Rapid 24-hour epithelial recovery']
    },
    {
      title: 'HAIR RESTORATION',
      subtitle: 'Autologous Double-Spin Closed PRP Systems',
      description: 'High-yield closed medical centrifugation isolating platelet concentrations up to 6x baseline with optimal leukocyte balance to stimulate angiogenic micro-capillaries around miniaturized follicles.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
      features: ['100% autologous and biocompatible', 'High-potency growth factor yield', 'Micro-gauge 32G atraumatic comfort']
    },
    {
      title: 'COLLAGEN STIMULATION',
      subtitle: 'Focused Acoustic Ultrasound & Bio-Remodeling',
      description: 'Multi-depth acoustic ultrasound transducers (HIFU) creating focal thermal coagulation points in deep SMAS and adipose layers, triggering profound long-term tissue remodeling.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
      features: ['Non-invasive dermal contracting', 'Zero epidermal disruption', 'Long-term progressive structural tightening']
    }
  ];

  const whyChoosePoints = [
    {
      num: '01',
      title: 'PERSONALIZED CLINICAL CARE',
      desc: 'No generic packages or one-size-fits-all treatments. Every session is designed around your unique bone structure, skin tone, dynamic muscle mobility, and biological healing velocity.'
    },
    {
      num: '02',
      title: 'NATURAL, UNDETECTABLE RESULTS',
      desc: 'Our fundamental ethos is subtle enhancement over artificial transformation. We reject frozen expressions and overfilled contours, creating rested, elegant results that honor your identity.'
    },
    {
      num: '03',
      title: 'ADVANCED MEDICAL TECHNOLOGY',
      desc: 'We invest exclusively in gold-standard, FDA-cleared and CE-certified medical lasers, closed autologous systems, and premium European injectable products with proven clinical efficacy.'
    },
    {
      num: '04',
      title: 'PHYSICIAN-LED EXPERTISE',
      desc: 'All consultations, injector procedures, and deep energy resurfacing treatments are performed directly by registered, experienced medical doctors with dedicated aesthetic fellowships.'
    },
    {
      num: '05',
      title: 'TRANSPARENT & HONEST GUIDANCE',
      desc: 'We provide clear pricing, realistic timelines, and will openly decline procedures that are not clinically indicated or aligned with your best health and aesthetic interests.'
    }
  ];

  const patientJourneySteps = [
    { step: '01', title: 'CONSULTATION', desc: 'In-depth physical and optical examination of your skin, facial symmetry, or scalp health.' },
    { step: '02', title: 'ASSESSMENT', desc: 'Digital imaging and lab diagnostics to establish objective baseline measurements and medical safety.' },
    { step: '03', title: 'PERSONALIZED PLAN', desc: 'A transparent roadmap outlining recommended treatment sequences, expected results, and downtime.' },
    { step: '04', title: 'TREATMENT', desc: 'Comfortable, physician-administered procedure following rigorous sterile medical protocols.' },
    { step: '05', title: 'AFTERCARE', desc: 'Comprehensive digital guidance, prescribed barrier repair, and ongoing check-ins during recovery.' },
    { step: '06', title: 'RESULTS', desc: 'Review consultation to evaluate outcomes, measure collagen progress, and set maintenance milestones.' }
  ];

  const instagramShots = [
    {
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
      caption: 'Clinical glow post-HydraFacial at MK Studio.'
    },
    {
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
      caption: 'Precision anatomical markings for natural harmonization.'
    },
    {
      image: 'https://images.unsplash.com/photo-1512290900672-1f02e71df0ed?q=80&w=800&auto=format&fit=crop',
      caption: 'Calibrated laser energy resurfacing in action.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      caption: 'Autologous platelet cellular preparation for scalp vitality.'
    },
    {
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
      caption: 'Physician assessment & 3D vector planning.'
    },
    {
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
      caption: 'Subtle lip hydration & Cupid’s bow definition.'
    }
  ];

  return (
    <div className="space-y-0 text-[#171614] overflow-x-hidden">
      {/* ============================================================ */}
      {/* SECTION 01: CINEMATIC HERO (100vh minimum) */}
      {/* ============================================================ */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-[#0E0E0D] text-white overflow-hidden pt-20"
        id="home-hero-section"
      >
        {/* Background Image with slow subtle scale */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop"
              alt="MK Aesthetics Studio - Advanced Aesthetic Medicine Lahore"
              className="w-full h-full object-cover object-center opacity-45"
            />
          </motion.div>
          {/* Subtle Warm Luxury Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D] via-[#0E0E0D]/40 to-black/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0E0E0D]/20 to-[#0E0E0D]/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#DDD1C3]">
              Advanced Aesthetic Medicine • Lahore
            </span>
          </motion.div>

          {/* Editorial Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F7F3ED] leading-[1.08] max-w-4xl"
          >
            Bespoke Treatments.
            <span className="block italic font-normal text-[#DDD1C3]">
              Natural Results.
            </span>
            The Best of You.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-[#DDD1C3]/90 max-w-2xl mt-6 leading-relaxed font-light"
          >
            Personalized aesthetic treatments designed around your unique facial architecture, goals, and skin health in Westwood Colony, Lahore.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-md sm:max-w-none"
          >
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#F7F3ED] text-[#171614] text-xs sm:text-sm font-bold tracking-[0.16em] uppercase hover:bg-white transition-all duration-300 shadow-lg hover:scale-[1.02] rounded-full"
              id="hero-book-btn"
            >
              <span>Book A Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/treatments"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-[#F7F3ED] text-xs sm:text-sm font-bold tracking-[0.16em] uppercase hover:bg-white/20 hover:border-white transition-all duration-300 rounded-full shadow-xs"
              id="hero-explore-btn"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-12 flex items-center space-x-3 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/25 shadow-xs"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-white tracking-wider">
              4.9 ★ <span className="text-white/80 font-normal">287+ Google Reviews</span>
            </span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1 text-white/70 hover:text-white transition-colors cursor-pointer"
          onClick={() => {
            document.getElementById('home-intro-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] tracking-[0.24em] uppercase font-bold">
            Scroll To Explore
          </span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 02: EDITORIAL INTRO */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-[#F7F3ED] border-b border-[#171614]/5"
        id="home-intro-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#EFE8DE] shadow-xl border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
                  alt="MK Aesthetics Studio Patient Experience"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-xs">
                  <span className="text-[10px] uppercase tracking-widest text-amber-200 block font-bold">
                    The MK Standard
                  </span>
                  <p className="mt-1 text-white/95 leading-relaxed">
                    Physician-led assessment ensuring clinical precision and customized safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Text Column (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80] block">
                  The MK Experience
                </span>
                <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171614] leading-[1.12]">
                  Your Skin. Your Features. <br />
                  <span className="italic font-normal text-[#9A8D80]">
                    Your Best Self.
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#171614]/85 leading-relaxed font-light">
                <p>
                  "We believe aesthetic medicine should enhance what already makes you unique. Every treatment begins with understanding your goals, your features, and your skin."
                </p>
                <p className="text-sm sm:text-base text-[#171614]/75">
                  Located on Raiwind Road in Westwood Colony, Lahore, MK Aesthetics Studio represents the pinnacle of contemporary aesthetic medicine. By blending advanced energy platforms with nuanced anatomical injectables, we deliver refined, luminous results that look entirely effortless.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#171614] hover:bg-[#0E0E0D] text-[#F7F3ED] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all shadow-xs group"
                  id="intro-discover-btn"
                >
                  <span>Discover Our Approach</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/doctors"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white/70 backdrop-blur-xs border border-[#171614]/10 hover:border-[#171614] hover:bg-white text-[#171614] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-colors shadow-xs"
                >
                  <span>Meet Our Physicians</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 03: TRUST STRIP (Horizontal Swipe on Mobile) */}
      {/* ============================================================ */}
      <section className="bg-white/40 backdrop-blur-md py-6 border-b border-[#171614]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto no-scrollbar space-x-8 sm:space-x-12 justify-between py-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#171614]">
            <div className="flex items-center space-x-2 shrink-0">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>4.9 ★ 287+ Reviews</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#9A8D80]" />
              <span>Personalized Care</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <Cpu className="w-4 h-4 text-[#9A8D80]" />
              <span>Advanced Technology</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <Sparkles className="w-4 h-4 text-[#9A8D80]" />
              <span>Natural-Looking Results</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <Award className="w-4 h-4 text-[#9A8D80]" />
              <span>Professional Expertise</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#9A8D80]" />
              <span>Safety & Hygiene</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 04: TREATMENT CATEGORIES (Interactive Panels) */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#F7F3ED] border-b border-[#171614]/5" id="home-categories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80] block">
              Bespoke Specialties
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
              Treatments Designed <br />
              <span className="italic font-normal text-[#9A8D80]">Around You.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#171614]/75">
              Explore our six specialized clinical divisions dedicated to transformative skin health, hair restoration, and surgical-grade non-invasive aesthetics.
            </p>
          </div>

          {/* Interactive Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/treatments/${cat.id}`}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#171614] flex flex-col justify-end p-6 border border-white/20 transition-all duration-500 hover:shadow-xl shadow-xs"
                id={`cat-panel-${cat.id}`}
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-65 group-hover:opacity-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D] via-[#0E0E0D]/40 to-transparent" />

                {/* Content Overlay */}
                <div className="relative z-10 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-white/80 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 shadow-xs">
                      0{TREATMENT_CATEGORIES.indexOf(cat) + 1} • {cat.count} Protocols
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#171614] transition-colors">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-[#DDD1C3] transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-white/80 line-clamp-2 font-light">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 05: SIGNATURE TREATMENTS (HydraFacial Featured & Carousel) */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-white/40 backdrop-blur-xs border-b border-[#171614]/5" id="home-signature-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171614]/5 pb-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80] block">
                Signature Protocols
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
                The Treatments Our Patients Love.
              </h2>
            </div>
            <Link
              to="/treatments"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.16em] text-[#171614] hover:text-[#9A8D80] transition-colors"
            >
              <span>View All 12 Clinical Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Large Featured HydraFacial Box */}
          <div className="bg-[#171614] text-white rounded-3xl overflow-hidden border border-white/20 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto lg:h-full relative overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
                  alt="Medical Grade HydraFacial at MK Aesthetics Studio Lahore"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/30 shadow-xs">
                  ★ Featured Gold Standard
                </div>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#DDD1C3]">
                    Skin Health & Glow Protocol
                  </span>
                  <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                    Medical Grade HydraFacial™
                  </h3>
                  <p className="text-sm text-[#DDD1C3]/90 italic font-light">
                    "Deep pore cleansing, painless extractions, and antioxidant infusion."
                  </p>
                </div>

                <p className="text-sm text-white/80 leading-relaxed font-light">
                  Our customized Vortex-Fusion HydraFacial removes deep follicular congestion, sloughs dead stratum corneum cells, and drenches skin with medical-grade hyaluronic acid and peptides with zero post-treatment downtime.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Instant dewy glass skin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Painless vortex extraction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Medical LED light stimulation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero peeling or downtime</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/treatments/hydrafacial"
                    className="px-6 py-3 bg-[#F7F3ED] text-[#171614] text-xs font-bold tracking-wider uppercase rounded-full hover:bg-white transition-all shadow-xs"
                  >
                    View HydraFacial Protocol →
                  </Link>
                  <Link
                    to="/book-consultation"
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wider uppercase rounded-full hover:bg-white/20 transition-colors shadow-xs"
                  >
                    Book Treatment
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel for PRP, Microneedling, Laser, Fillers, PDO Threads */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#9A8D80]">
                More Signature Procedures
              </span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setSigIndex((prev) => (prev === 0 ? signatureTreatments.length - 3 : prev - 1))}
                  className="p-2.5 rounded-full bg-white/70 backdrop-blur-xs border border-[#171614]/10 hover:bg-white transition-colors shadow-xs"
                  aria-label="Previous signature treatments"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSigIndex((prev) => (prev >= signatureTreatments.length - 3 ? 0 : prev + 1))}
                  className="p-2.5 rounded-full bg-white/70 backdrop-blur-xs border border-[#171614]/10 hover:bg-white transition-colors shadow-xs"
                  aria-label="Next signature treatments"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid / Carousel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {signatureTreatments.slice(sigIndex, sigIndex + 3).map((treatment) => (
                <TreatmentCard key={treatment.slug} treatment={treatment} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 06: INTERACTIVE TREATMENT FINDER */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#F7F3ED] border-b border-[#171614]/5" id="home-finder-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Interactive Clinical Finder
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
              What Would You Like To Improve?
            </h2>
            <p className="text-sm text-[#171614]/75">
              Select your primary aesthetic objective to discover the clinically indicated treatments practiced at MK Studio.
            </p>
          </div>

          {/* Selectable Options Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {Object.keys(concernRecommendations).map((concern) => {
              const isSelected = selectedConcern === concern;
              return (
                <button
                  key={concern}
                  type="button"
                  onClick={() => setSelectedConcern(concern)}
                  className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-200 shadow-xs ${
                    isSelected
                      ? 'bg-[#171614] text-[#F7F3ED] shadow-sm scale-105'
                      : 'bg-white/70 backdrop-blur-xs text-[#171614] hover:bg-white border border-[#171614]/5'
                  }`}
                  id={`concern-btn-${concern.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {concern}
                </button>
              );
            })}
          </div>

          {/* Dynamic Recommended Treatments Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedConcern}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="frosted-card p-6 rounded-3xl max-w-3xl mx-auto text-center space-y-1 shadow-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#9A8D80] font-bold">
                  Recommended Clinical Pathway for {selectedConcern}
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#171614]">
                  {currentConcernData.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#171614]/80">
                  {currentConcernData.desc}
                </p>
              </div>

              {/* Treatment Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedTreatments.map((treatment) => (
                  <TreatmentCard key={treatment.slug} treatment={treatment} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 07: REAL RESULTS (Dark Charcoal Section with Slider) */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#171614] text-white border-b border-white/10" id="home-results-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#C5A880] block">
                Evidence-Based Outcomes
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#F7F3ED]">
                Enhancement, Not Transformation.
              </h2>
              <p className="text-sm text-[#DDD1C3]/80">
                Interactive before and after comparison cases. We practice authentic medicine with verified patient timelines.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'skin', 'hair', 'laser', 'injectables'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setResultsCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-xs ${
                    resultsCategory === cat
                      ? 'bg-[#F7F3ED] text-[#171614]'
                      : 'bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Before / After Interactive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={activeResult.beforeImage}
                afterImage={activeResult.afterImage}
                beforeLabel="BEFORE"
                afterLabel="AFTER MK TREATMENT"
                aspectRatio="aspect-[16/11]"
              />
            </div>

            <div className="lg:col-span-5 space-y-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-xl">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-amber-200 uppercase bg-white/15 px-3 py-1 rounded-full border border-white/20 inline-block">
                  {activeResult.category.toUpperCase()} • {activeResult.timeline}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white">
                  {activeResult.title}
                </h3>
                <p className="text-xs text-[#DDD1C3]/90 font-medium">
                  Treatment: {activeResult.treatmentName} ({activeResult.sessionsCount})
                </p>
              </div>

              <p className="text-sm text-[#DDD1C3]/80 leading-relaxed font-light">
                {activeResult.description}
              </p>

              {activeResult.doctorNotes && (
                <div className="bg-black/30 backdrop-blur-xs border-l-2 border-[#C5A880] p-3.5 rounded-r-xl text-xs text-white/90 space-y-1">
                  <span className="font-bold text-amber-200 uppercase tracking-wider block">Clinical Notes:</span>
                  <p>{activeResult.doctorNotes}</p>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                <Link
                  to="/results"
                  className="text-amber-200 hover:text-white transition-colors uppercase font-bold tracking-wider flex items-center space-x-1"
                >
                  <span>View All Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/book-consultation"
                  className="px-4 py-2 bg-[#F7F3ED] text-[#171614] font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors shadow-xs"
                >
                  Book Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 08: PHILOSOPHY */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36 bg-[#0E0E0D] text-white overflow-hidden" id="home-philosophy-section">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1800&auto=format&fit=crop"
            alt="MK Philosophy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0D] via-[#0E0E0D]/85 to-[#0E0E0D]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#C5A880] block">
              Our Core Philosophy
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F3ED] leading-[1.12]">
              Beauty Should Never Look Artificial.
            </h2>
            <p className="text-base sm:text-lg text-[#DDD1C3]/90 leading-relaxed font-light">
              We reject the industrialization of aesthetic medicine where faces are altered according to transient trends. At MK Aesthetics Studio, our clinical practice is grounded in three immutable tenets:
            </p>
          </div>

          {/* Three Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/15">
            <div className="space-y-3 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <span className="font-mono text-xs text-[#C5A880] tracking-widest font-bold block">
                01 / PRINCIPLE
              </span>
              <h3 className="font-serif-editorial text-2xl font-bold text-white">
                Personalized
              </h3>
              <p className="text-sm text-[#DDD1C3]/80 leading-relaxed font-light">
                Tailored treatments based on individual dermal thickness, facial vectors, and biological repair capacity rather than generic protocol templates.
              </p>
            </div>

            <div className="space-y-3 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <span className="font-mono text-xs text-[#C5A880] tracking-widest font-bold block">
                02 / PRINCIPLE
              </span>
              <h3 className="font-serif-editorial text-2xl font-bold text-white">
                Natural
              </h3>
              <p className="text-sm text-[#DDD1C3]/80 leading-relaxed font-light">
                Preserving authentic emotional expressiveness and subtle proportions. Results that invite compliments on your refreshed radiance, not your procedures.
              </p>
            </div>

            <div className="space-y-3 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <span className="font-mono text-xs text-[#C5A880] tracking-widest font-bold block">
                03 / PRINCIPLE
              </span>
              <h3 className="font-serif-editorial text-2xl font-bold text-white">
                Precise
              </h3>
              <p className="text-sm text-[#DDD1C3]/80 leading-relaxed font-light">
                Atraumatic cannula micro-dosing, calibrated pulse wavelengths, and strict medical asepsis to ensure maximum patient safety and predictable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 09: DOCTORS */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#F7F3ED] border-b border-[#171614]/5" id="home-doctors-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171614]/5 pb-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80] block">
                Medical Leadership
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
                Expertise Behind Every Treatment.
              </h2>
            </div>
            <p className="text-sm text-[#171614]/75 max-w-md">
              Meet our registered medical physicians and clinical dermatologists dedicated to evidence-based aesthetics in Lahore.
            </p>
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10: WHY MK (Animated Expandable Rows) */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-white/40 backdrop-blur-xs border-b border-[#171614]/5" id="home-why-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80] block">
              The MK Standard
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
              Why Choose MK Aesthetics?
            </h2>
          </div>

          <div className="frosted-card rounded-3xl divide-y divide-[#171614]/5 overflow-hidden shadow-xs">
            {whyChoosePoints.map((item, index) => {
              const isOpen = whyIndex === index;
              return (
                <div
                  key={item.num}
                  className="p-6 sm:p-8 cursor-pointer transition-colors hover:bg-white/40"
                  onClick={() => setWhyIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 sm:space-x-10">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#9A8D80]">
                        {item.num}
                      </span>
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#171614]">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-[#171614]/10 bg-white/70 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-90 bg-[#171614] text-white' : ''}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-12 sm:pl-16 max-w-3xl text-sm sm:text-base text-[#171614]/80 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 11: TECHNOLOGY */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#171614] text-white border-b border-white/10" id="home-tech-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#C5A880] block">
                Clinical Precision
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#F7F3ED]">
                Technology Meets Expertise.
              </h2>
            </div>

            {/* Switcher Buttons */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((t, idx) => (
                <button
                  key={t.title}
                  type="button"
                  onClick={() => setTechTab(idx)}
                  className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-colors shadow-xs ${
                    techTab === idx
                      ? 'bg-[#F7F3ED] text-[#171614]'
                      : 'bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20 border border-white/15'
                  }`}
                >
                  {t.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Technology Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden bg-black border border-white/15 shadow-xl">
              <img
                src={technologies[techTab].image}
                alt={technologies[techTab].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest text-amber-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                  MK Platform 0{techTab + 1}
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-white">
                  {technologies[techTab].subtitle}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#DDD1C3]/85 leading-relaxed font-light">
                {technologies[techTab].description}
              </p>

              <div className="space-y-2.5 pt-2">
                {technologies[techTab].features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-white/90">
                    <Zap className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/treatments"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#F7F3ED] text-[#171614] text-xs font-bold tracking-wider uppercase rounded-full hover:bg-white transition-colors shadow-xs"
                >
                  <span>Explore Associated Protocols</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 12: PATIENT JOURNEY */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#F7F3ED] border-b border-[#171614]/5" id="home-journey-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              The Structured Path
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
              Your Journey Starts Here.
            </h2>
            <p className="text-sm text-[#171614]/75">
              From your initial diagnostic conversation to long-term collagen maintenance, experience a thoughtful medical journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patientJourneySteps.map((step) => (
              <div
                key={step.step}
                className="frosted-card p-8 rounded-3xl space-y-3 relative hover:shadow-lg transition-all shadow-xs"
              >
                <span className="font-mono text-3xl font-bold text-[#DDD1C3] block">
                  {step.step}
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#171614]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#171614]/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 13: REVIEWS (Working Carousel with Pause on Hover) */}
      {/* ============================================================ */}
      <section
        className="py-24 sm:py-32 bg-white/40 backdrop-blur-xs border-b border-[#171614]/5"
        id="home-reviews-section"
        onMouseEnter={() => setIsReviewHovered(true)}
        onMouseLeave={() => setIsReviewHovered(false)}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Verified Patient Feedback
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
              Loved By Our Patients.
            </h2>
            <div className="inline-flex items-center space-x-2 pt-2 bg-white/60 backdrop-blur-xs px-4 py-1.5 rounded-full border border-[#171614]/5 shadow-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#171614]">
                4.9 ★ Rating on Google ({TRUST_STATS.reviewsCount}+ Reviews)
              </span>
            </div>
          </div>

          {/* Testimonial Active Display */}
          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 max-w-3xl"
              >
                <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#171614] leading-relaxed italic">
                  "{REVIEWS[reviewIndex].comment}"
                </p>

                <div className="space-y-1 text-xs">
                  <div className="font-bold text-[#171614] uppercase tracking-wider">
                    {REVIEWS[reviewIndex].author}
                  </div>
                  <div className="text-[#9A8D80]">
                    Treatment: {REVIEWS[reviewIndex].treatment} • Verified Patient
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setReviewIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))}
              className="p-2.5 rounded-full bg-white/70 backdrop-blur-xs border border-[#171614]/10 hover:bg-white transition-colors shadow-xs"
              aria-label="Previous patient review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-1.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setReviewIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    reviewIndex === idx ? 'w-6 bg-[#171614]' : 'w-1.5 bg-[#DDD1C3]'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setReviewIndex((prev) => (prev + 1) % REVIEWS.length)}
              className="p-2.5 rounded-full bg-white/70 backdrop-blur-xs border border-[#171614]/10 hover:bg-white transition-colors shadow-xs"
              aria-label="Next patient review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 14: INSTAGRAM GALLERY */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F7F3ED] border-b border-[#171614]/5" id="home-instagram-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b border-[#171614]/5 pb-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80] block">
                Social Aesthetics
              </span>
              <h2 className="font-serif-editorial text-3xl font-bold text-[#171614]">
                Inside MK.
              </h2>
            </div>
            <a
              href="https://mkaestheticsstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-[#171614] hover:text-[#9A8D80] flex items-center space-x-1.5 bg-white/60 backdrop-blur-xs px-4 py-2 rounded-full border border-[#171614]/5 shadow-xs"
            >
              <Instagram className="w-4 h-4" />
              <span>@mkaestheticsstudio</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramShots.map((shot, idx) => (
              <a
                key={idx}
                href="https://mkaestheticsstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-[#EFE8DE] border border-[#171614]/5 shadow-xs"
              >
                <img
                  src={shot.image}
                  alt={shot.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 15: MK ACADEMY (Dark Section) */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#171614] text-white border-b border-white/10" id="home-academy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#C5A880] block">
                Professional Clinical Training
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#F7F3ED]">
                Learn From Experience.
              </h2>
              <p className="text-sm text-[#DDD1C3]/80">
                MK Academy trains licensed physicians in advanced facial anatomy, micro-cannula injectables, and clinical laser operations.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-200 hover:text-white transition-colors"
            >
              <span>View All Academy Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.slug}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all shadow-xl"
              >
                <div>
                  <div className="aspect-[16/10] relative overflow-hidden bg-black">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/30 shadow-xs">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[11px] text-white/70 font-mono">
                      {course.duration} • {course.format}
                    </span>
                    <h3 className="font-serif-editorial text-2xl font-bold text-white">
                      {course.title}
                    </h3>
                    <p className="text-xs text-[#DDD1C3]/80 line-clamp-2">
                      {course.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/courses/${course.slug}`}
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 bg-[#F7F3ED] text-[#171614] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors shadow-xs"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 16: LAB SERVICES */}
      {/* ============================================================ */}
      <section className="py-20 bg-white/40 backdrop-blur-xs border-b border-[#171614]/5" id="home-lab-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="frosted-card p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
                Diagnostic Accuracy
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#171614]">
                Better Understanding. Better Care.
              </h2>
              <p className="text-sm text-[#171614]/80 max-w-2xl leading-relaxed">
                Discover underlying hormonal, trichological, and barrier dysfunctions with our in-studio and partner clinical diagnostic panels. Aesthetic treatments work best when informed by rigorous objective biological data.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/lab-test"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#171614] text-[#F7F3ED] text-xs font-bold tracking-wider uppercase rounded-full hover:bg-black transition-all shadow-xs"
                id="home-lab-cta"
              >
                <span>Explore Lab Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 17: PRICE GUIDE (Working Tabs) */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#F7F3ED] border-b border-[#171614]/5" id="home-pricing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171614]/5 pb-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80] block">
                Honest Transparency
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
                Clear Pricing. No Surprises.
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'skin', 'hair', 'laser', 'injectables', 'rejuvenation', 'body'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setPriceTab(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-xs ${
                    priceTab === cat
                      ? 'bg-[#171614] text-white shadow-xs'
                      : 'bg-white/70 backdrop-blur-xs text-[#171614] hover:bg-white border border-[#171614]/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing List Table */}
          <div className="frosted-card rounded-3xl divide-y divide-[#171614]/5 overflow-hidden shadow-xs">
            {filteredPrices.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#171614]">
                      {item.treatmentName}
                    </h3>
                    {item.popular && (
                      <span className="bg-[#171614] text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full shadow-xs">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#171614]/75 max-w-xl">
                    {item.description}
                  </p>
                  {item.note && (
                    <p className="text-[11px] text-[#9A8D80] italic">
                      {item.note}
                    </p>
                  )}
                </div>

                <div className="text-right sm:shrink-0">
                  <div className="text-base sm:text-lg font-bold text-[#171614] font-mono">
                    {item.pricing}
                  </div>
                  <div className="text-[11px] text-[#9A8D80] uppercase tracking-wider">
                    {item.sessions}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/price-guide"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#171614] text-[#F7F3ED] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-black transition-all shadow-xs"
            >
              <span>View Full Price Guide & Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 18: FAQ (Working Accordion) */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-white/40 backdrop-blur-xs border-b border-[#171614]/5" id="home-faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Patient Guidance
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm text-[#171614]/75">
              Clear answers to the most common questions regarding appointments, downtime, and procedures at MK Aesthetics.
            </p>
          </div>

          {/* Working Accordion */}
          <FAQAccordion items={FAQS.slice(0, 7)} />

          <div className="text-center pt-4">
            <Link
              to="/faq"
              className="text-xs uppercase tracking-widest font-bold text-[#171614] hover:text-[#9A8D80] transition-colors inline-flex items-center space-x-1"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 19: FINAL CTA (Cinematic Background) */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36 bg-[#0E0E0D] text-white overflow-hidden" id="home-final-cta-section">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2000&auto=format&fit=crop"
            alt="Ready to meet your best self"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D] via-[#0E0E0D]/70 to-[#0E0E0D]/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-amber-200 block">
            Begin Your Consultation
          </span>

          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F3ED] leading-tight">
            Ready To Meet <br />
            <span className="italic font-normal text-[#DDD1C3]">Your Best Self?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#DDD1C3]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a private one-on-one aesthetic assessment at our Lahore clinic or speak directly with our clinical coordinators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 bg-[#F7F3ED] text-[#171614] text-xs sm:text-sm font-bold tracking-[0.16em] uppercase rounded-full hover:bg-white transition-all shadow-xl hover:scale-105"
            >
              Book A Consultation
            </Link>

            <a
              href="https://wa.me/923254515555?text=Hello%20MK%20Aesthetics%20Studio%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase rounded-full transition-all border border-emerald-500/40 flex items-center justify-center space-x-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center space-x-2 text-xs text-[#DDD1C3]/70">
            <Phone className="w-3.5 h-3.5" />
            <a href="tel:+923254515555" className="hover:text-white transition-colors font-medium">
              Direct Telephone: +92 325 4515555
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 20: CONTACT (Split Layout with Interactive Form) */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#F7F3ED]" id="home-contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Visit Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
                  Clinic Location
                </span>
                <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
                  Visit MK Aesthetics Studio
                </h2>
                <p className="text-sm text-[#171614]/75 leading-relaxed">
                  Conveniently situated in Westwood Colony on Raiwind Road, Lahore. We maintain private on-site parking and dedicated clinical privacy.
                </p>
              </div>

              <div className="space-y-5 text-sm text-[#171614] frosted-card p-6 sm:p-8 rounded-3xl shadow-xs">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-[#9A8D80] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#171614]">Address:</strong>
                    <span>1-Km Raiwind Road, Westwood Colony, Lahore, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-[#9A8D80] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#171614]">Operating Hours:</strong>
                    <span>Monday – Saturday: 1:00 PM – 8:00 PM</span>
                    <span className="block text-xs text-[#9A8D80]">Sunday: Closed / VIP Scheduled Inquiries</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-[#9A8D80] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#171614]">Direct Contact:</strong>
                    <a href="tel:+923254515555" className="hover:underline font-semibold block text-[#171614]">
                      +92 325 4515555
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
