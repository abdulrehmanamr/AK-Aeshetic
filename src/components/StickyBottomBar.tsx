import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

export default function StickyBottomBar() {
  const location = useLocation();

  // Don't show sticky bar on full booking flow page to give maximum screen real estate
  if (location.pathname === '/book-consultation') {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    'Hello MK Aesthetics Studio, I would like to book a consultation.'
  );

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#171614]/85 backdrop-blur-xl border-t border-white/10 px-4 py-3 shadow-2xl safe-bottom"
      id="mobile-sticky-bottom-bar"
    >
      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
        {/* Book */}
        <Link
          to="/book-consultation"
          className="flex items-center justify-center space-x-1.5 bg-[#F7F3ED] text-[#171614] py-2.5 px-2 rounded-full text-[11px] font-bold tracking-wider uppercase text-center active:scale-95 transition-all shadow-xs"
          id="mobile-sticky-book"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </Link>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/923254515555?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-1.5 bg-emerald-700 hover:bg-emerald-600 text-white py-2.5 px-2 rounded-full text-[11px] font-bold tracking-wider uppercase text-center active:scale-95 transition-all shadow-xs border border-emerald-500/30"
          id="mobile-sticky-whatsapp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href="tel:+923254515555"
          className="flex items-center justify-center space-x-1.5 bg-white/15 backdrop-blur-md text-[#F7F3ED] border border-white/20 py-2.5 px-2 rounded-full text-[11px] font-bold tracking-wider uppercase text-center active:scale-95 transition-all shadow-xs"
          id="mobile-sticky-call"
        >
          <Phone className="w-3.5 h-3.5 text-amber-200" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
}
