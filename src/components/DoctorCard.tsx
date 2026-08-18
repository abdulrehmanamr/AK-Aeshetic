import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  key?: React.Key;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article
      className="group frosted-card overflow-hidden flex flex-col justify-between transition-all duration-300 rounded-3xl"
      id={`doctor-card-${doctor.slug}`}
    >
      <div>
        {/* Doctor Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#EFE8DE] rounded-t-3xl">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D]/90 via-black/25 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold text-white border border-white/30 inline-block mb-1.5 shadow-xs">
              {doctor.experienceYears}+ Years Experience
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
              {doctor.name}
            </h3>
            <p className="text-xs text-white/80 font-medium">
              {doctor.title}
            </p>
          </div>
        </div>

        {/* Doctor Information */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-[#171614]/80 leading-relaxed">
            {doctor.shortBio}
          </p>

          {/* Key Expertise Chips */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#9A8D80] font-bold block">
              Core Clinical Focus:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {doctor.expertise.slice(0, 3).map((item, i) => (
                <span
                  key={i}
                  className="bg-white/60 backdrop-blur-xs text-[#171614] text-[11px] px-3 py-1 rounded-full font-medium border border-[#171614]/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Action Link */}
      <div className="p-6 pt-0">
        <Link
          to={`/doctors/${doctor.slug}`}
          className="w-full inline-flex items-center justify-between py-3 px-4 bg-[#171614] hover:bg-[#0E0E0D] text-[#F7F3ED] text-xs font-semibold tracking-[0.14em] uppercase transition-colors rounded-xl group/btn shadow-xs"
          id={`view-doctor-${doctor.slug}`}
        >
          <span>View Doctor Profile</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
