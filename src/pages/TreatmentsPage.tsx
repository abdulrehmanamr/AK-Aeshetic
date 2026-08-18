import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, Filter } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import TreatmentCard from '../components/TreatmentCard';
import { TREATMENTS, TREATMENT_CATEGORIES } from '../data/treatments';
import { TreatmentCategory } from '../types';

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTreatments = TREATMENTS.filter((treatment) => {
    const matchesCategory = selectedCategory === 'all' || treatment.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      treatment.name.toLowerCase().includes(query) ||
      treatment.shortDescription.toLowerCase().includes(query) ||
      (treatment.whoItsFor || []).some((ind) => ind.toLowerCase().includes(query)) ||
      (treatment.benefits || []).some((ben) => ben.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Treatments' }]} className="mb-6" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Clinical Services
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
              Comprehensive Aesthetic Treatments.
            </h1>
            <p className="text-base text-[#171614]/80 leading-relaxed font-light">
              Explore our complete suite of evidence-based medical skin, hair, laser, and injectable protocols designed specifically for South Asian skin phenotypes.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#9A8D80] absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments or concerns..."
              className="w-full pl-10 pr-4 py-2.5 frosted-card text-xs sm:text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-[#171614]/30 shadow-xs"
              id="treatments-search-input"
            />
          </div>
        </div>
      </section>

      {/* Category Pills Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#171614]/10 pb-6">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#171614] text-[#F7F3ED] shadow-sm'
                : 'frosted-card text-[#171614] hover:bg-white/80'
            }`}
          >
            All Treatments ({TREATMENTS.length})
          </button>
          {TREATMENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id as TreatmentCategory)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#171614] text-[#F7F3ED] shadow-sm'
                  : 'frosted-card text-[#171614] hover:bg-white/80'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-16 frosted-card p-8 rounded-3xl space-y-3 shadow-xs">
            <p className="font-serif-editorial text-2xl font-bold text-[#171614]">
              No matching clinical treatments found.
            </p>
            <p className="text-xs text-[#9A8D80]">
              Try searching with different keywords such as "laser", "acne", "hair", or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#171614] text-white text-xs uppercase font-bold tracking-wider rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
