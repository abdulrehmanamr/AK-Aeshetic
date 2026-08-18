import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ShieldCheck, Award, ArrowRight, Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../data/courses';

export default function CoursesPage() {
  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'MK Academy & Training' }]} className="mb-6" />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Professional Education
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
            MK Aesthetics Academy.
          </h1>
          <p className="text-base text-[#171614]/80 leading-relaxed font-light">
            Comprehensive post-graduate masterclasses for registered physicians and dermatologists. Practical hands-on training covering facial anatomy, micro-cannula injectable vectors, and medical laser physics in Lahore.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      {/* Academy Features & Eligibility */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-sm border border-[#DDD1C3] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
              Training Methodology & Standards
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#171614]/80">
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#9A8D80] shrink-0 mt-0.5" />
                <span>1-on-1 and small group supervised live model injections</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#9A8D80] shrink-0 mt-0.5" />
                <span>Complication management and hyaluronidase emergency protocols</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#9A8D80] shrink-0 mt-0.5" />
                <span>CPD-accredited certificate of clinical completion</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
              Physician Eligibility Requirements
            </h2>
            <p className="text-xs sm:text-sm text-[#171614]/80 leading-relaxed font-light">
              Admission to MK Academy injectables and advanced laser workshops is restricted to licensed MBBS / BDS physicians and registered clinical medical practitioners to uphold ethical medical standards.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/923254515555?text=Hello%20MK%20Academy%2C%20I%20am%20a%20physician%20inquiring%20about%20upcoming%20masterclass%20intakes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#171614] hover:text-[#9A8D80]"
              >
                <span>Inquire About Next Intake via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
