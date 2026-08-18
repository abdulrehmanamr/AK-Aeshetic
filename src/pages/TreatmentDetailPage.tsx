import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ArrowRight,
  Zap,
  Info,
  ChevronRight
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import TreatmentCard from '../components/TreatmentCard';
import { TREATMENTS } from '../data/treatments';

export default function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 space-y-4">
        <h1 className="font-serif-editorial text-3xl font-bold">Treatment Protocol Not Found</h1>
        <p className="text-sm text-[#9A8D80]">
          The requested clinical procedure could not be located in our treatment directory.
        </p>
        <Link
          to="/treatments"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-[#171614] text-white text-xs uppercase tracking-wider rounded-xs"
        >
          <span>Return to All Treatments</span>
        </Link>
      </div>
    );
  }

  const relatedTreatments = TREATMENTS.filter(
    (t) => t.category === treatment.category && t.slug !== treatment.slug
  ).slice(0, 3);

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-20">
      {/* Breadcrumbs & Treatment Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Treatments', path: '/treatments' },
            { label: treatment.categoryName, path: `/treatments/${treatment.category}` },
            { label: treatment.name }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Visual */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#EFE8DE] shadow-2xl border border-[#DDD1C3]">
              <img
                src={treatment.image}
                alt={treatment.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#171614]/90 backdrop-blur-md text-[#F7F3ED] text-[11px] uppercase font-bold tracking-widest px-3 py-1 rounded-xs">
                  {treatment.categoryName}
                </span>
                {treatment.signature && (
                  <span className="bg-[#C5A880] text-[#171614] text-[11px] uppercase font-bold tracking-widest px-3 py-1 rounded-xs flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Signature Protocol</span>
                  </span>
                )}
              </div>
            </div>

            {/* Price Starting At info pill */}
            {treatment.priceStartingAt && (
              <div className="bg-[#FAF7F2] p-4 rounded-xs border border-[#DDD1C3] flex items-center justify-between text-xs">
                <span className="text-[#9A8D80] font-semibold uppercase tracking-wider">
                  Indicative Pricing:
                </span>
                <span className="font-mono font-bold text-sm text-[#171614]">
                  Starting from {treatment.priceStartingAt}
                </span>
              </div>
            )}
          </div>

          {/* Treatment Details & Summary */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171614] leading-tight">
                {treatment.name}
              </h1>
              <p className="text-base text-[#9A8D80] italic font-serif-editorial">
                "{treatment.tagline}"
              </p>
            </div>

            <p className="text-base text-[#171614]/85 leading-relaxed font-light">
              {treatment.fullDescription}
            </p>

            {/* Quick Clinical Specs Table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-[#DDD1C3]">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#9A8D80] block font-bold">
                  Duration
                </span>
                <span className="text-xs font-semibold text-[#171614]">
                  {treatment.duration}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#9A8D80] block font-bold">
                  Downtime
                </span>
                <span className="text-xs font-semibold text-[#171614]">
                  {treatment.downtime}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#9A8D80] block font-bold">
                  Sessions
                </span>
                <span className="text-xs font-semibold text-[#171614]">
                  {treatment.sessionsRecommended || treatment.recommendedSessions || 'Bespoke plan'}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#9A8D80] block font-bold">
                  Discomfort
                </span>
                <span className="text-xs font-semibold text-[#171614]">
                  {treatment.painLevel}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to={`/book-consultation?treatment=${treatment.slug}`}
                className="flex-1 text-center py-3.5 px-6 bg-[#171614] hover:bg-black text-[#F7F3ED] text-xs font-bold tracking-wider uppercase rounded-full transition-all shadow-md"
                id="book-this-treatment-btn"
              >
                Book This Treatment →
              </Link>
              <a
                href={`https://wa.me/923254515555?text=${encodeURIComponent(
                  `Hello MK Aesthetics, I am interested in booking ${treatment.name}. Could you provide more details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all flex items-center justify-center space-x-2 shadow-xs"
              >
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Indications & Target Concerns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 frosted-card p-8 rounded-3xl space-y-4 shadow-xs">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
              Who It's For & Concerns Addressed
            </h2>
            <p className="text-xs text-[#171614]/75">
              This protocol is medically indicated for patients presenting with:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#171614]">
              {(treatment.whoItsFor || treatment.indications || []).map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 frosted-card p-8 rounded-3xl space-y-4 shadow-xs">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
              Key Clinical Benefits & Outcomes
            </h2>
            <p className="text-xs text-[#171614]/75">
              Anticipated results achieved through this procedure:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#171614]">
              {treatment.benefits.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Protocol / Procedure Steps */}
      {treatment.process && treatment.process.length > 0 && (
        <section className="py-12 border-y border-[#171614]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
                Step-by-Step Procedure
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#171614]">
                The Clinical Protocol
              </h2>
              <p className="text-xs sm:text-sm text-[#171614]/75">
                Standardized physician sequence ensuring patient safety and maximum efficacy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatment.process.map((step, idx) => (
                <div key={idx} className="frosted-card p-6 rounded-3xl space-y-2 relative shadow-xs">
                  <span className="font-mono text-xl font-bold text-[#9A8D80]">
                    {step.step || `0${idx + 1}`}
                  </span>
                  <h3 className="font-serif-editorial text-lg font-bold text-[#171614]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#171614]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What to Expect & Recovery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What to Expect */}
          <div className="frosted-card p-8 rounded-3xl space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 text-[#171614]">
              <Info className="w-5 h-5 text-amber-600" />
              <h3 className="font-serif-editorial text-2xl font-bold">
                What to Expect During Visit
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#171614]/80">
              {(treatment.whatToExpect || treatment.preCare || []).map((care, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-[#9A8D80] font-bold">•</span>
                  <span>{care}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recovery & Aftercare */}
          <div className="frosted-card p-8 rounded-3xl space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 text-[#171614]">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="font-serif-editorial text-2xl font-bold">
                Recovery & Aftercare Notes
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#171614]/80">
              {(treatment.recovery || treatment.afterCare || []).map((care, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-[#9A8D80] font-bold">•</span>
                  <span>{care}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related FAQs */}
      {(treatment.faq || treatment.faqs) && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Clinical Inquiries
            </span>
            <h2 className="font-serif-editorial text-3xl font-bold text-[#171614]">
              Treatment FAQs
            </h2>
          </div>

          <FAQAccordion items={treatment.faq || treatment.faqs || []} />
        </section>
      )}

      {/* Related Treatments */}
      {relatedTreatments.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 border-t border-[#DDD1C3] pt-16">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
              Complementary & Related Protocols
            </h2>
            <Link
              to="/treatments"
              className="text-xs uppercase font-semibold tracking-wider text-[#9A8D80] hover:text-[#171614]"
            >
              View All Treatments →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedTreatments.map((rel) => (
              <TreatmentCard key={rel.slug} treatment={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
