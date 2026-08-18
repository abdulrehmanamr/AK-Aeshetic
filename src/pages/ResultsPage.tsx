import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { RESULTS_DATA } from '../data/results';
import { TreatmentCategory } from '../types';

export default function ResultsPage() {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory | 'all'>('all');

  const filteredResults = selectedCategory === 'all'
    ? RESULTS_DATA
    : RESULTS_DATA.filter((r) => r.category === selectedCategory);

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Clinical Results' }]} className="mb-6" />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Verified Case Studies
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
            Authentic Patient Results.
          </h1>
          <p className="text-base text-[#171614]/80 leading-relaxed font-light">
            Interactive before-and-after photographic comparisons. All case studies represent actual patients treated under physician protocols at MK Aesthetics Studio, Lahore.
          </p>
        </div>
      </section>

      {/* Category Pills Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#DDD1C3]/80 pb-6">
          {(['all', 'skin', 'hair', 'laser', 'injectables', 'rejuvenation', 'body'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#171614] text-[#F7F3ED] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#171614] hover:bg-[#EFE8DE] border border-[#DDD1C3]'
              }`}
            >
              {cat === 'all' ? 'All Results' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Case Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredResults.map((result) => (
            <article
              key={result.id}
              className="bg-[#FAF7F2] border border-[#DDD1C3] rounded-sm overflow-hidden p-6 space-y-6 shadow-xs"
              id={`result-case-${result.id}`}
            >
              {/* Interactive Drag Slider */}
              <BeforeAfterSlider
                beforeImage={result.beforeImage}
                afterImage={result.afterImage}
                beforeLabel="BEFORE"
                afterLabel="AFTER MK TREATMENT"
                aspectRatio="aspect-[16/11]"
              />

              {/* Case Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#9A8D80]">
                    {result.category.toUpperCase()} • {result.timeline}
                  </span>
                  <span className="bg-[#EFE8DE] text-[#171614] text-[10px] font-semibold px-2 py-0.5 rounded-xs">
                    {result.sessionsCount}
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl font-bold text-[#171614]">
                  {result.title}
                </h3>

                <p className="text-xs text-[#9A8D80] font-semibold">
                  Protocol: {result.treatmentName}
                </p>

                <p className="text-xs sm:text-sm text-[#171614]/80 leading-relaxed font-light">
                  {result.description}
                </p>

                {result.doctorNotes && (
                  <div className="bg-[#F7F3ED] p-3 rounded-xs border-l-2 border-[#171614] text-xs text-[#171614]/80 space-y-0.5">
                    <span className="font-semibold text-[#171614] block">Physician Observations:</span>
                    <span>{result.doctorNotes}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171614] text-white p-8 sm:p-12 rounded-sm text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
            Start Your Own Transformation
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold">
            Ready to Begin Your Aesthetic Journey?
          </h2>
          <p className="text-sm text-[#DDD1C3]/80 max-w-xl mx-auto">
            Book an in-person assessment with our medical doctors for an honest evaluation of what aesthetic treatments can achieve for you.
          </p>
          <div className="pt-2">
            <Link
              to="/book-consultation"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#F7F3ED] text-[#171614] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-white transition-colors"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
