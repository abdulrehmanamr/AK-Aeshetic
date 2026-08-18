import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  key?: React.Key;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="group frosted-card overflow-hidden flex flex-col justify-between transition-all duration-300 rounded-3xl"
      id={`blog-card-${post.slug}`}
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE8DE] rounded-t-3xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/30 shadow-xs">
            {post.category}
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center space-x-3 text-xs text-[#9A8D80]">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h3 className="font-serif-editorial text-2xl font-bold text-[#171614] group-hover:text-[#9A8D80] transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="text-sm text-[#171614]/80 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="pt-3 border-t border-[#171614]/5 flex items-center space-x-2.5">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover border border-[#DDD1C3]"
            />
            <div className="text-xs">
              <span className="font-medium text-[#171614]">{post.author.name}</span>
              <span className="text-[#9A8D80] ml-1.5">• {post.author.role}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          to={`/insights/${post.slug}`}
          className="w-full inline-flex items-center justify-between py-2.5 px-4 bg-white/60 hover:bg-[#171614] text-[#171614] hover:text-[#F7F3ED] text-xs font-semibold tracking-[0.14em] uppercase transition-colors rounded-xl group/btn border border-[#171614]/5"
          id={`read-article-${post.slug}`}
        >
          <span>Read Clinical Article</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
