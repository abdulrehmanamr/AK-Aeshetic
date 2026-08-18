import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import TreatmentCard from '../components/TreatmentCard';
import { TREATMENTS, TREATMENT_CATEGORIES } from '../data/treatments';
import { TreatmentCategory } from '../types';

export default function CategoryTreatmentPage() {
  const { categoryId } = useParams<{ categoryId: string }>();

  const category = TREATMENT_CATEGORIES.find((c) => c.id === categoryId);

  // If not a valid category, or if it might be a single treatment slug, check
  const isDirectTreatment = TREATMENTS.some((t) => t.slug === categoryId);
  if (isDirectTreatment) {
    return <Navigate to={`/treatments/${categoryId}`} replace />;
  }

  if (!category) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 space-y-4">
        <h1 className="font-serif-editorial text-3xl font-bold">Category Not Found</h1>
        <p className="text-sm text-[#9A8D80]">
          The aesthetic treatment category you requested does not exist.
        </p>
        <Link
          to="/treatments"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-[#171614] text-white text-xs uppercase tracking-wider rounded-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Treatments</span>
        </Link>
      </div>
    );
  }

  const categoryTreatments = TREATMENTS.filter((t) => t.category === category.id);

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Category Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Treatments', path: '/treatments' },
            { label: category.name }
          ]}
          className="mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Clinical Specialty
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
              {category.name} Treatments.
            </h1>
            <p className="text-lg text-[#171614]/80 leading-relaxed font-light">
              {category.description}
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/10] rounded-sm overflow-hidden bg-[#EFE8DE] shadow-xl border border-[#DDD1C3]">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Treatments List in Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-[#DDD1C3] pb-4">
          <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
            Available Protocols in {category.name} ({categoryTreatments.length})
          </h2>
          <Link
            to="/treatments"
            className="text-xs uppercase font-semibold tracking-wider text-[#9A8D80] hover:text-[#171614] transition-colors"
          >
            ← All Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryTreatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] p-8 rounded-sm border border-[#DDD1C3] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif-editorial text-2xl font-bold text-[#171614]">
              Unsure if {category.name} is the right protocol for you?
            </h3>
            <p className="text-xs sm:text-sm text-[#171614]/75">
              Book an in-person assessment with our medical doctors for a personalized diagnosis.
            </p>
          </div>
          <Link
            to="/book-consultation"
            className="px-6 py-3 bg-[#171614] text-[#F7F3ED] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-black transition-colors shrink-0"
          >
            Book Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
