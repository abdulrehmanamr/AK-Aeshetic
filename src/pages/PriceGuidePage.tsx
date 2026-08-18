import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, ShieldCheck, Sparkles } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { PRICE_ITEMS } from '../data/prices';
import { TreatmentCategory } from '../types';

export default function PriceGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory | 'all'>('all');

  const filteredPrices = selectedCategory === 'all'
    ? PRICE_ITEMS
    : PRICE_ITEMS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Price Guide' }]} className="mb-6" />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Transparent Pricing
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
            Clinical Treatment Guide.
          </h1>
          <p className="text-base text-[#171614]/80 leading-relaxed font-light">
            We maintain full transparency regarding all procedure fees. Below is an indicative guide to our medical aesthetic services in Lahore. Individual requirements may vary based on skin area, severity, and personalized physician protocols.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
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
              {cat === 'all' ? 'All Treatments' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Pricing Cards / Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#DDD1C3] rounded-sm divide-y divide-[#DDD1C3]/60 shadow-xs">
          {filteredPrices.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#EFE8DE]/40 transition-colors"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#9A8D80]">
                    {item.category}
                  </span>
                  {item.popular && (
                    <span className="bg-[#C5A880] text-[#171614] text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-xs flex items-center space-x-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Popular</span>
                    </span>
                  )}
                </div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#171614]">
                  {item.treatmentName}
                </h3>
                <p className="text-xs sm:text-sm text-[#171614]/75 leading-relaxed">
                  {item.description}
                </p>
                {item.note && (
                  <p className="text-xs text-[#9A8D80] italic">
                    Note: {item.note}
                  </p>
                )}
              </div>

              <div className="flex flex-col md:items-end justify-between sm:shrink-0 space-y-3">
                <div className="md:text-right">
                  <div className="text-xl sm:text-2xl font-bold text-[#171614] font-mono">
                    {item.pricing}
                  </div>
                  <div className="text-xs text-[#9A8D80] uppercase tracking-wider">
                    {item.sessions}
                  </div>
                </div>

                <Link
                  to="/book-consultation"
                  className="px-4 py-2 bg-[#171614] hover:bg-black text-[#F7F3ED] text-xs font-semibold uppercase tracking-wider rounded-xs text-center transition-colors"
                >
                  Book Treatment →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Policy Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DE] p-6 rounded-sm border border-[#DDD1C3] flex items-start space-x-3 text-xs text-[#171614]/80">
          <Info className="w-5 h-5 text-[#9A8D80] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#171614] uppercase tracking-wider block">
              Clinical Fee & Treatment Policy
            </span>
            <p>
              Fees listed above are indicative and subject to customized physician assessment based on surface area and severity. All injectable procedures utilize single-patient authentic syringes opened in front of the patient. Multi-session packages and combined modalities may qualify for bundle concessions. Contact the clinic for customized quotations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
