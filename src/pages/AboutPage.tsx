import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, HeartHandshake, Sparkles, ArrowRight, Star, Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { DOCTORS } from '../data/doctors';

export default function AboutPage() {
  const values = [
    {
      title: 'Evidence-Based Medicine',
      desc: 'We strictly adhere to peer-reviewed dermatological and aesthetic clinical standards. Every injectable, laser setting, and topical formula is proven safe and effective.',
      icon: ShieldCheck
    },
    {
      title: 'Subtle Facial Harmony',
      desc: 'Our aesthetic principle is grounded in Golden Ratio anatomical proportions. We avoid over-treatment and exaggerated features in favor of understated elegance.',
      icon: Sparkles
    },
    {
      title: 'Physician Direct Oversight',
      desc: 'Every assessment and invasive procedure is handled directly by qualified medical doctors with advanced postgraduate aesthetic training.',
      icon: Award
    },
    {
      title: 'Patient Trust & Candor',
      desc: 'We prioritize long-term skin health over short-term sales. If a requested procedure will not yield beneficial results, our physicians will honestly advise against it.',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-20">
      {/* Header / Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About MK' }]} className="mb-6" />

        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            The Studio Story
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614] leading-[1.12]">
            Redefining Aesthetic Medicine in Lahore.
          </h1>
          <p className="text-lg text-[#171614]/80 leading-relaxed font-light">
            Founded with a commitment to clinical rigor and artistic discernment, MK Aesthetics Studio provides bespoke medical aesthetics that celebrate your natural individuality.
          </p>
        </div>
      </section>

      {/* Main Narrative & Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-base text-[#171614]/85 leading-relaxed font-light">
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#171614]">
              "A Sanctuary of Clinical Precision and Calm."
            </h2>
            <p>
              Located in Westwood Colony on Raiwind Road, MK Aesthetics Studio was created as an antidote to commercialized, high-pressure aesthetic clinics. We recognized that true skin health and aesthetic refinement require personalized time, deep anatomical understanding, and unhurried clinical consultations.
            </p>
            <p>
              Our studio combines world-class medical laser technology with an ambient, minimalist environment designed to make your aesthetic journey comfortable, confidential, and rewarding.
            </p>
            <div className="bg-[#FAF7F2] p-6 rounded-sm border border-[#DDD1C3] space-y-3">
              <div className="font-serif-editorial text-xl font-bold text-[#171614]">
                The MK Promise
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#171614]/80">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#9A8D80] shrink-0" />
                  <span>100% authentic, FDA-cleared and CE-certified medical products</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#9A8D80] shrink-0" />
                  <span>No commercial upselling or unnecessary procedures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#9A8D80] shrink-0" />
                  <span>Complete medical confidentiality and post-treatment follow-up</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/5] rounded-sm overflow-hidden bg-[#EFE8DE] shadow-2xl border border-[#DDD1C3]">
            <img
              src="https://images.unsplash.com/photo-1512290900672-1f02e71df0ed?q=80&w=1200&auto=format&fit=crop"
              alt="Inside MK Aesthetics Studio clinic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#FAF7F2] py-20 border-y border-[#DDD1C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Our Guiding Principles
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#171614]">
              The Four Pillars of MK Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-[#F7F3ED] p-6 rounded-sm border border-[#DDD1C3] space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#EFE8DE] flex items-center justify-center text-[#171614]">
                    <Icon className="w-5 h-5 text-[#171614]" />
                  </div>
                  <h3 className="font-serif-editorial text-xl font-bold text-[#171614]">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#171614]/75 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Medical Leadership Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171614] text-white p-8 sm:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
              Physician Leadership
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-white">
              Led By Qualified Aesthetic Doctors
            </h2>
            <p className="text-sm text-[#DDD1C3]/80 leading-relaxed max-w-2xl">
              Meet Dr. Maryam Khan and Dr. Kamran Siddiqui. Our lead doctors combine over a decade of clinical experience in facial aesthetics, laser physics, and regenerative dermatology.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/doctors"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#F7F3ED] text-[#171614] text-xs font-semibold tracking-wider uppercase rounded-xs hover:bg-white transition-colors"
            >
              <span>Meet The Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
