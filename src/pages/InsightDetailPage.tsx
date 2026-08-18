import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS } from '../data/blogPosts';

export default function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 space-y-4">
        <h1 className="font-serif-editorial text-3xl font-bold">Article Not Found</h1>
        <p className="text-sm text-[#9A8D80]">The requested clinical article does not exist.</p>
        <Link
          to="/insights"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-[#171614] text-white text-xs uppercase tracking-wider rounded-xs"
        >
          <span>Return to Insights</span>
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header / Breadcrumb */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Clinical Insights', path: '/insights' },
            { label: post.title }
          ]}
        />

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs text-[#9A8D80]">
            <span className="bg-[#171614] text-[#F7F3ED] px-2.5 py-1 rounded-xs font-bold uppercase tracking-wider text-[10px]">
              {post.category}
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#171614] leading-[1.18]">
            {post.title}
          </h1>

          <p className="text-lg text-[#171614]/80 leading-relaxed font-light italic">
            "{post.excerpt}"
          </p>

          {/* Author Badge */}
          <div className="flex items-center space-x-3 pt-2 border-t border-[#DDD1C3]/80">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#DDD1C3]"
            />
            <div>
              <span className="font-bold text-sm text-[#171614] block">{post.author.name}</span>
              <span className="text-xs text-[#9A8D80]">{post.author.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-[#EFE8DE] shadow-2xl border border-[#DDD1C3]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Main Article Body */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="space-y-8 text-base sm:text-lg text-[#171614]/85 leading-relaxed font-light">
          {Array.isArray(post.content) ? (
            post.content.map((sec, index) => (
              <div key={index} className="space-y-4">
                {sec.sectionHeading && (
                  <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614] pt-6 border-t border-[#171614]/10">
                    {sec.sectionHeading}
                  </h2>
                )}
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                {sec.keyTakeaway && (
                  <div className="frosted-card p-6 rounded-2xl border-l-4 border-[#171614] my-6 space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#9A8D80] font-bold block">
                      Clinical Key Takeaway
                    </span>
                    <p className="text-sm sm:text-base font-serif-editorial italic text-[#171614] font-normal">
                      "{sec.keyTakeaway}"
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>{String(post.content)}</p>
          )}
        </article>

        {/* Tags */}
        <div className="pt-8 mt-12 border-t border-[#DDD1C3] flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase font-bold tracking-wider text-[#9A8D80] mr-2">
            Topics:
          </span>
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#FAF7F2] border border-[#DDD1C3] text-[#171614] text-xs px-3 py-1 rounded-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 border-t border-[#DDD1C3] pt-16">
          <h2 className="font-serif-editorial text-3xl font-bold text-[#171614]">
            More Clinical Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rel) => (
              <BlogCard key={rel.slug} post={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
