import React from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappMessage: string;
}

export default function MobileMenu({ isOpen, onClose, whatsappMessage }: MobileMenuProps) {
  const menuLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Results', path: '/results' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Price Guide', path: '/price-guide' },
    { label: 'Courses', path: '/courses' },
    { label: 'Lab Test', path: '/lab-test' },
    { label: 'Insights & Journal', path: '/insights' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const containerVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 15 },
    open: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#0E0E0D]/95 backdrop-blur-xl text-[#F7F3ED] flex flex-col justify-between overflow-y-auto"
          id="mobile-navigation-drawer"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <div>
              <span className="font-cinzel text-lg font-bold tracking-[0.16em] uppercase">
                MK AESTHETICS
              </span>
              <span className="block text-[9px] tracking-[0.2em] text-[#DDD1C3]/60 uppercase">
                Studio • Lahore
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Close menu"
              id="mobile-menu-close-btn"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <div className="px-6 py-6 flex-1 flex flex-col justify-center">
            <motion.nav
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="space-y-3.5"
            >
              {menuLinks.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className="flex items-center justify-between text-xl sm:text-2xl font-serif-editorial tracking-wide hover:text-[#DDD1C3] transition-colors py-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </div>

          {/* Bottom CTAs & Contact Info */}
          <div className="px-6 py-6 border-t border-white/10 bg-white/5 backdrop-blur-md space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/book-consultation"
                onClick={onClose}
                className="flex items-center justify-center py-3.5 px-4 bg-[#F7F3ED] text-[#171614] text-xs font-bold tracking-wider uppercase rounded-full hover:bg-white transition-all shadow-md text-center"
                id="mobile-menu-book-cta"
              >
                Book Consultation
              </Link>

              <a
                href={`https://wa.me/923254515555?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all border border-emerald-500/40 text-center shadow-xs"
                id="mobile-menu-whatsapp-cta"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-between text-[11px] text-white/75 pt-2">
              <span className="flex items-center space-x-1">
                <Phone className="w-3 h-3 text-amber-200" />
                <a href="tel:+923254515555" className="hover:text-white transition-colors">
                  +92 325 4515555
                </a>
              </span>
              <span>1-Km Raiwind Rd, Lahore</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
