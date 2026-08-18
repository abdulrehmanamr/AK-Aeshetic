import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS } from '../data/faqs';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Studio' },
    { id: 'consultation', label: 'Consultations' },
    { id: 'skin', label: 'Skin & Lasers' },
    { id: 'injectables', label: 'Injectables' },
    { id: 'hair', label: 'Hair Restoration' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} className="mb-6" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
              Patient Help Desk
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
              Frequently Asked Questions.
            </h1>
            <p className="text-base text-[#171614]/80 leading-relaxed font-light">
              Clear, honest clinical insights into our safety standards, procedures, recovery timelines, and studio appointments in Lahore.
            </p>
          </div>

          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#9A8D80] absolute left-3 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
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
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#171614] text-[#F7F3ED] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#171614] hover:bg-[#EFE8DE] border border-[#DDD1C3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion Component */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF7F2] border border-[#DDD1C3] p-8 rounded-sm space-y-3">
            <p className="font-serif-editorial text-2xl font-bold">No matching questions found.</p>
            <p className="text-xs text-[#9A8D80]">
              Have a specific question not covered here? Feel free to contact our medical desk directly on WhatsApp.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#171614] text-white text-xs uppercase font-semibold tracking-wider rounded-xs"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <FAQAccordion items={filteredFaqs} allowMultiple />
        )}
      </section>

      {/* Direct Contact Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171614] text-white p-8 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif-editorial text-2xl font-bold">
              Still Have Unanswered Questions?
            </h3>
            <p className="text-xs text-[#DDD1C3]/80">
              Speak directly with our clinical patient coordinator on WhatsApp or phone.
            </p>
          </div>
          <a
            href="https://wa.me/923254515555"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#F7F3ED] hover:bg-white text-[#171614] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0 flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Chat With Clinical Desk</span>
          </a>
        </div>
      </section>
    </div>
  );
}
