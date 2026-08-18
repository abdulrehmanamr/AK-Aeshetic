import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export interface GenericFAQItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: GenericFAQItem[];
  allowMultiple?: boolean;
}

export default function FAQAccordion({ items, allowMultiple = false }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '0']);

  const getItemId = (item: GenericFAQItem, index: number) => item.id || `faq-${index}`;

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const itemId = getItemId(item, index);
        const isOpen = openIds.includes(itemId);
        return (
          <div
            key={itemId}
            className="frosted-card rounded-2xl p-4 sm:p-5 transition-all shadow-xs"
            id={`faq-item-${itemId}`}
          >
            <button
              type="button"
              onClick={() => toggleItem(itemId)}
              className="w-full flex items-center justify-between text-left group focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center space-x-3 pr-4">
                <span className="text-xs font-mono text-[#9A8D80] font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-serif-editorial text-base sm:text-lg md:text-xl font-bold text-[#171614] group-hover:text-amber-800 transition-colors leading-snug">
                  {item.question}
                </span>
              </div>

              <div
                className={`w-7 h-7 shrink-0 rounded-full border border-[#171614]/15 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'bg-[#171614] text-white rotate-180 border-[#171614]' : 'bg-white/40 text-[#171614]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 pl-7 sm:pl-8 pr-4 text-xs sm:text-sm text-[#171614]/80 leading-relaxed font-sans-body">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
