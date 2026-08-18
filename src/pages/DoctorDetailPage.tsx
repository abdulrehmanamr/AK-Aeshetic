import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Award, ShieldCheck, GraduationCap, ArrowRight, Check, Calendar } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { DOCTORS } from '../data/doctors';

export default function DoctorDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const doctor = DOCTORS.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 space-y-4">
        <h1 className="font-serif-editorial text-3xl font-bold">Doctor Profile Not Found</h1>
        <p className="text-sm text-[#9A8D80]">
          The requested physician profile could not be found.
        </p>
        <Link
          to="/doctors"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-[#171614] text-white text-xs uppercase tracking-wider rounded-xs"
        >
          <span>Return to Doctors</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-20">
      {/* Header / Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Our Doctors', path: '/doctors' },
            { label: doctor.name }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-sm overflow-hidden bg-[#EFE8DE] shadow-2xl border border-[#DDD1C3]">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-4 left-4 bg-[#171614]/90 backdrop-blur-md text-[#DDD1C3] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-xs">
              {doctor.experienceYears}+ Years Clinical Experience
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2 border-b border-[#171614]/10 pb-4">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
                {doctor.specialty}
              </span>
              <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
                {doctor.name}
              </h1>
              <p className="text-base text-[#9A8D80] font-medium">
                {doctor.title}
              </p>
            </div>

            <div className="space-y-4 text-base text-[#171614]/85 leading-relaxed font-light">
              {Array.isArray(doctor.fullBio) ? (
                doctor.fullBio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))
              ) : (
                <p>{doctor.bio || doctor.shortBio}</p>
              )}
            </div>

            {/* Qualifications */}
            <div className="frosted-card p-6 rounded-3xl space-y-3 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#171614]">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>Academic & Clinical Qualifications</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#171614]/80">
                {doctor.qualifications.map((q, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#171614]">
                <Award className="w-4 h-4 text-[#9A8D80]" />
                <span>Areas of Clinical Specialization</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {doctor.expertise.map((exp, i) => (
                  <span
                    key={i}
                    className="frosted-badge text-[#171614] text-xs font-medium px-3.5 py-1.5 rounded-full"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-[#171614] hover:bg-black text-[#F7F3ED] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation with {doctor.name.split(' ')[1] || doctor.name}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
