import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, GraduationCap, Award, Check, UserCheck, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { COURSES } from '../data/courses';

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 space-y-4">
        <h1 className="font-serif-editorial text-3xl font-bold">Course Not Found</h1>
        <p className="text-sm text-[#9A8D80]">
          The requested academy training curriculum could not be found.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-[#171614] text-white text-xs uppercase tracking-wider rounded-xs"
        >
          <span>Return to Academy Courses</span>
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
            { label: 'Academy & Courses', path: '/courses' },
            { label: course.title }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-[#EFE8DE] shadow-2xl border border-[#DDD1C3]">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#171614]/90 backdrop-blur-md text-[#DDD1C3] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-xs">
                {course.level} Level Masterclass
              </div>
            </div>

            {/* Instructor Box */}
            <div className="bg-[#FAF7F2] p-4 rounded-sm border border-[#DDD1C3] flex items-center space-x-4">
              <img
                src={course.instructor.image}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full object-cover border border-[#DDD1C3]"
              />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A8D80] block">
                  Lead Clinical Instructor
                </span>
                <span className="font-bold text-sm text-[#171614]">{course.instructor.name}</span>
                <p className="text-xs text-[#9A8D80]">{course.instructor.title}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#9A8D80]">
                {course.duration} • {course.format}
              </span>
              <h1 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171614] leading-tight">
                {course.title}
              </h1>
              <p className="text-base text-[#9A8D80] italic font-serif-editorial">
                {course.subtitle}
              </p>
            </div>

            <p className="text-base text-[#171614]/85 leading-relaxed font-light">
              {course.overview || course.shortDescription}
            </p>

            <div className="frosted-card p-4 rounded-2xl flex items-center justify-between text-xs shadow-xs">
              <span className="text-[#9A8D80] font-bold uppercase tracking-wider">
                Accreditation:
              </span>
              <span className="font-bold text-[#171614]">
                {course.certificationNote || 'MK Academy Clinical Certificate of Competence'}
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/923254515555?text=${encodeURIComponent(
                  `Hello MK Academy, I am a doctor inquiring about enrollment for the ${course.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3.5 px-6 bg-[#171614] hover:bg-black text-[#F7F3ED] text-xs font-bold tracking-wider uppercase rounded-full transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire For Next Intake via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Syllabus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Detailed Modules
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#171614]">
            Course Curriculum & Syllabus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.curriculum.map((item, idx) => (
            <div key={idx} className="frosted-card p-6 rounded-3xl space-y-3 shadow-xs">
              <span className="font-mono text-xs text-[#9A8D80] font-bold">
                {item.module || `MODULE 0${idx + 1}`}
              </span>
              <h3 className="font-serif-editorial text-xl font-bold text-[#171614]">
                {item.title}
              </h3>
              {item.topics && (
                <ul className="space-y-1.5 pt-2 text-xs text-[#171614]/80">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-start space-x-2">
                      <span className="text-[#9A8D80]">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility & Outcomes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="frosted-card p-8 rounded-3xl space-y-4 shadow-xs">
            <h3 className="font-serif-editorial text-2xl font-bold text-[#171614]">
              Candidate Eligibility
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#171614]/80">
              {course.whoItsFor.map((el, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="frosted-card p-8 rounded-3xl space-y-4 shadow-xs">
            <h3 className="font-serif-editorial text-2xl font-bold text-[#171614]">
              Clinical Learning Outcomes
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#171614]/80">
              {course.whatYoullLearn.map((out, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
