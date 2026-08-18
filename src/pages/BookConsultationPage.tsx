import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Clock, Phone, MapPin, Sparkles } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import AppointmentForm from '../components/AppointmentForm';
import { TREATMENTS } from '../data/treatments';

export default function BookConsultationPage() {
  const [searchParams] = useSearchParams();
  const treatmentParam = searchParams.get('treatment') || undefined;

  const preselectedTreatment = TREATMENTS.find((t) => t.slug === treatmentParam);

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Book Consultation' }]} className="mb-6" />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Private Consultation
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
            Schedule Your Assessment.
          </h1>
          <p className="text-base text-[#171614]/80 leading-relaxed font-light">
            Take the first step toward personalized skin health and refined aesthetics. Select your preferred date and time, and our medical coordinator will confirm your private slot within 2 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Clinical Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            {preselectedTreatment && (
              <div className="mb-4 bg-[#EFE8DE] border border-[#DDD1C3] p-4 rounded-xs flex items-center justify-between text-xs">
                <span className="text-[#171614]">
                  Pre-selected Procedure: <strong>{preselectedTreatment.name}</strong> ({preselectedTreatment.categoryName})
                </span>
                <Link to="/treatments" className="text-[#9A8D80] hover:text-[#171614] underline">
                  Change
                </Link>
              </div>
            )}

            <AppointmentForm defaultTreatmentSlug={preselectedTreatment?.slug} />
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-sm border border-[#DDD1C3] space-y-4">
              <h3 className="font-serif-editorial text-2xl font-bold text-[#171614]">
                What Happens During Your Visit?
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#171614]/80 leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="font-mono text-xs font-bold text-[#9A8D80] mt-0.5">01.</span>
                  <span><strong>Comprehensive Skin & Vector Analysis:</strong> Visual and digital evaluation of facial balance, skin tone, and dermal thickness.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-mono text-xs font-bold text-[#9A8D80] mt-0.5">02.</span>
                  <span><strong>Physician Recommendation:</strong> Honest guidance on the most effective modalities and realistic expected outcomes.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-mono text-xs font-bold text-[#9A8D80] mt-0.5">03.</span>
                  <span><strong>Zero Pressure:</strong> You are never pressured into immediate treatments. Same-day treatment is available upon medical clearance.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#171614] text-white p-6 sm:p-8 rounded-sm space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">
                Immediate Assistance
              </span>
              <h4 className="font-serif-editorial text-xl font-bold">
                Need Same-Day Scheduling?
              </h4>
              <p className="text-xs text-[#DDD1C3]/80 leading-relaxed">
                Connect directly with our clinical desk on WhatsApp for immediate schedule coordination.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/923254515555?text=Hello%20MK%20Aesthetics%2C%20I%20am%20looking%20for%20urgent%20or%20same-day%20consultation%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  WhatsApp Clinical Desk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
