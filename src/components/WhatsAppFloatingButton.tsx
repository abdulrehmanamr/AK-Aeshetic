import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const message = encodeURIComponent(
    'Hello MK Aesthetics Studio, I would like to inquire about booking a consultation.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end">
      {/* Popover Bubble */}
      {showTooltip && (
        <div className="mb-3 bg-[#171614] text-[#F7F3ED] border border-[#DDD1C3]/30 p-3.5 rounded-md shadow-2xl max-w-xs text-xs space-y-2 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#DDD1C3] tracking-wide">MK Clinical Concierge</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/60 hover:text-white"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-white/80 leading-relaxed">
            Have questions about a treatment or need rapid scheduling? Chat with our medical coordinator.
          </p>
        </div>
      )}

      {/* Main WhatsApp Action Button */}
      <a
        href={`https://wa.me/923254515555?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 border border-emerald-400/30"
        aria-label="Chat directly on WhatsApp with MK Aesthetics Studio"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs font-semibold tracking-wider uppercase pr-1">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
