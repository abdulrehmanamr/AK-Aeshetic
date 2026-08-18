import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, GraduationCap, ArrowRight, UserCheck } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  key?: React.Key;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      className="group frosted-card overflow-hidden flex flex-col justify-between transition-all duration-300 rounded-3xl"
      id={`course-card-${course.slug}`}
    >
      <div>
        {/* Cover Photo */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#EFE8DE] rounded-t-3xl">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Level Tag */}
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/30 shadow-xs">
            {course.level} Level
          </div>

          <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-[#DDD1C3]" />
            <span>{course.duration}</span>
            <span className="text-white/40">•</span>
            <span>{course.format}</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-3">
          <h3 className="font-serif-editorial text-2xl font-bold text-[#171614] group-hover:text-[#9A8D80] transition-colors leading-snug">
            {course.title}
          </h3>

          <p className="text-xs text-[#9A8D80] font-medium">
            {course.subtitle}
          </p>

          <p className="text-sm text-[#171614]/80 line-clamp-3 leading-relaxed">
            {course.shortDescription}
          </p>

          <div className="pt-3 border-t border-[#171614]/5 flex items-center space-x-2 text-xs text-[#9A8D80]">
            <UserCheck className="w-3.5 h-3.5 text-[#171614]" />
            <span>Instructor: <strong className="text-[#171614]">{course.instructor.name}</strong></span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          to={`/courses/${course.slug}`}
          className="w-full inline-flex items-center justify-between py-3 px-4 bg-white/60 hover:bg-[#171614] text-[#171614] hover:text-[#F7F3ED] text-xs font-semibold tracking-[0.14em] uppercase transition-colors rounded-xl group/btn border border-[#171614]/5"
          id={`view-course-${course.slug}`}
        >
          <span>Course Curriculum</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
