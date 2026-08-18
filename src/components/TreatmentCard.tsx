import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentCardProps {
  treatment: Treatment;
  layout?: 'grid' | 'horizontal';
  key?: React.Key;
}

export default function TreatmentCard({ treatment, layout = 'grid' }: TreatmentCardProps) {
  return (
    <article
      className="group frosted-card overflow-hidden flex flex-col justify-between transition-all duration-300 rounded-3xl"
      id={`treatment-card-${treatment.slug}`}
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE8DE] rounded-t-3xl">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Frosted Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="bg-white/25 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/30 shadow-xs">
              {treatment.categoryName}
            </span>
            {treatment.signature && (
              <span className="bg-[#C5A880]/90 backdrop-blur-md text-[#171614] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full flex items-center space-x-1 border border-white/40 shadow-xs">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Signature</span>
              </span>
            )}
          </div>

          {treatment.priceStartingAt && (
            <div className="absolute bottom-3 right-3 bg-white/30 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3 py-1 rounded-full border border-white/40 shadow-xs">
              From {treatment.priceStartingAt}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="font-serif-editorial text-2xl font-bold text-[#171614] group-hover:text-[#9A8D80] transition-colors leading-tight">
            {treatment.name}
          </h3>

          <p className="text-xs text-[#9A8D80] font-medium italic">
            "{treatment.tagline}"
          </p>

          <p className="text-sm text-[#171614]/80 line-clamp-2 leading-relaxed">
            {treatment.shortDescription}
          </p>

          {/* Treatment Metadata specs */}
          <div className="pt-2 border-t border-[#171614]/5 flex items-center justify-between text-xs text-[#9A8D80]">
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#171614]/70" />
              <span>{treatment.duration}</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#171614]/70">
              {treatment.downtime}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-6 pt-0">
        <Link
          to={`/treatments/${treatment.slug}`}
          className="w-full inline-flex items-center justify-between py-3 px-4 bg-white/60 hover:bg-[#171614] text-[#171614] hover:text-[#F7F3ED] text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 rounded-xl group/btn border border-[#171614]/5"
          id={`view-treatment-${treatment.slug}`}
        >
          <span>View Clinical Protocol</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
