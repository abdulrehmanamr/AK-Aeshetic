import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, Calendar } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS } from '../data/blogPosts';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Laser Dermatology', 'Regenerative Aesthetics', 'Cosmetic Injectables', 'Skin Barrier Health'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Clinical Insights' }]} className="mb-6" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Evidence & Education
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
              Clinical Insights & Editorial.
            </h1>
            <p className="text-base text-[#171614]/80 leading-relaxed font-light">
              Articles, science breakdowns, and aftercare guidance authored by our practicing aesthetic physicians in Lahore.
            </p>
          </div>

          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#9A8D80] absolute left-3 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles or topics..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#DDD1C3] text-xs sm:text-sm rounded-xs focus:outline-none focus:border-[#171614]"
            />
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#DDD1C3]/80 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#171614] text-[#F7F3ED] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#171614] hover:bg-[#EFE8DE] border border-[#DDD1C3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF7F2] border border-[#DDD1C3] p-8 rounded-sm space-y-3">
            <p className="font-serif-editorial text-2xl font-bold">No articles match your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#171614] text-white text-xs uppercase font-semibold tracking-wider rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
