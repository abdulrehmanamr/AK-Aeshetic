import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import DoctorCard from '../components/DoctorCard';
import { DOCTORS } from '../data/doctors';

export default function DoctorsPage() {
  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Our Doctors' }]} className="mb-6" />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Medical Leadership
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
            Physicians & Specialists.
          </h1>
          <p className="text-base text-[#171614]/80 leading-relaxed font-light">
            Every clinical procedure at MK Aesthetics Studio is directed and administered by certified medical doctors holding rigorous aesthetic fellowships and degrees.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* Trust & Accreditations Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-sm border border-[#DDD1C3] grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="font-mono text-3xl font-bold text-[#171614]">10+ Years</div>
            <div className="text-xs uppercase tracking-wider text-[#9A8D80] font-semibold">Clinical Experience</div>
            <p className="text-xs text-[#171614]/70">Thousands of successful medical aesthetic and laser cases.</p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-3xl font-bold text-[#171614]">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#9A8D80] font-semibold">Physician-Administered</div>
            <p className="text-xs text-[#171614]/70">All injectable and deep laser procedures performed directly by doctors.</p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-3xl font-bold text-[#171614]">4.9 ★</div>
            <div className="text-xs uppercase tracking-wider text-[#9A8D80] font-semibold">Patient Satisfaction</div>
            <p className="text-xs text-[#171614]/70">Over 287 verified Google patient reviews in Lahore.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
