import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTreatmentsDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Header background states
  const isTransparent = isHome && !scrolled;

  const headerBgClass = isTransparent
    ? 'bg-transparent text-white border-b border-white/10'
    : 'bg-white/60 text-[#171614] backdrop-blur-md border-b border-[#171614]/5 shadow-xs';

  const navLinkClass = isTransparent
    ? 'text-white/85 hover:text-white transition-colors duration-200 text-[11px] tracking-[0.16em] uppercase font-semibold'
    : 'text-[#171614]/80 hover:text-[#9A8D80] transition-colors duration-200 text-[11px] tracking-[0.16em] uppercase font-semibold';

  const activeLinkClass = isTransparent
    ? 'text-white font-bold'
    : 'text-[#171614] font-bold border-b-2 border-[#171614] pb-0.5';

  const whatsappMessage = encodeURIComponent(
    'Hello MK Aesthetics Studio, I would like to book a consultation.'
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Identity */}
            <Link
              to="/"
              className="flex flex-col group py-1"
              id="header-brand-logo"
            >
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.18em] uppercase text-[#171614] transition-transform group-hover:scale-[1.01]">
                MK AESTHETICS
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.3em] font-medium uppercase -mt-0.5 ${
                  isTransparent ? 'text-white/70' : 'text-[#171614]/60'
                }`}
              >
                STUDIO • LAHORE
              </span>
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-7" aria-label="Main Navigation">
              <Link
                to="/about"
                className={`${navLinkClass} ${location.pathname === '/about' ? activeLinkClass : ''}`}
                id="nav-about"
              >
                About
              </Link>

              {/* Treatments with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setTreatmentsDropdownOpen(true)}
                onMouseLeave={() => setTreatmentsDropdownOpen(false)}
              >
                <Link
                  to="/treatments"
                  className={`flex items-center space-x-1 ${navLinkClass} ${
                    location.pathname.startsWith('/treatments') ? activeLinkClass : ''
                  }`}
                  id="nav-treatments"
                >
                  <span>Treatments</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {treatmentsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 w-64 pt-3 z-50"
                    >
                      <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-2.5 text-[#171614]">
                        <Link
                          to="/treatments"
                          className="block px-3 py-2 text-xs font-semibold tracking-wider uppercase border-b border-[#171614]/5 hover:bg-[#F7F3ED] rounded-xl text-[#171614]"
                        >
                          All Treatments Overview →
                        </Link>
                        <div className="py-1 space-y-0.5 text-[13px]">
                          <Link
                            to="/treatments/skin"
                            className="block px-3 py-2 hover:bg-[#F7F3ED] rounded-xl transition-colors text-[#171614]/90 hover:text-[#171614]"
                          >
                            <span className="font-medium">Skin Health & Glow</span>
                            <span className="block text-[11px] text-[#9A8D80]">HydraFacial, Peels</span>
                          </Link>
                          <Link
                            to="/treatments/hair"
                            className="block px-3 py-2 hover:bg-[#F7F3ED] rounded-xl transition-colors text-[#171614]/90 hover:text-[#171614]"
                          >
                            <span className="font-medium">Hair Restoration</span>
                            <span className="block text-[11px] text-[#9A8D80]">Autologous PRP, Meso</span>
                          </Link>
                          <Link
                            to="/treatments/laser"
                            className="block px-3 py-2 hover:bg-[#F7F3ED] rounded-xl transition-colors text-[#171614]/90 hover:text-[#171614]"
                          >
                            <span className="font-medium">Laser Systems</span>
                            <span className="block text-[11px] text-[#9A8D80]">CO2 Scar, Hair Removal</span>
                          </Link>
                          <Link
                            to="/treatments/injectables"
                            className="block px-3 py-2 hover:bg-[#F7F3ED] rounded-xl transition-colors text-[#171614]/90 hover:text-[#171614]"
                          >
                            <span className="font-medium">Medical Injectables</span>
                            <span className="block text-[11px] text-[#9A8D80]">Botulinum, Dermal Fillers</span>
                          </Link>
                          <Link
                            to="/treatments/rejuvenation"
                            className="block px-3 py-2 hover:bg-[#F7F3ED] rounded-xl transition-colors text-[#171614]/90 hover:text-[#171614]"
                          >
                            <span className="font-medium">Skin Rejuvenation</span>
                            <span className="block text-[11px] text-[#9A8D80]">RF Exosomes, PDO Threads</span>
                          </Link>
                          <Link
                            to="/treatments/body"
                            className="block px-3 py-2 hover:bg-[#F7F3ED] rounded-xl transition-colors text-[#171614]/90 hover:text-[#171614]"
                          >
                            <span className="font-medium">Body Contouring</span>
                            <span className="block text-[11px] text-[#9A8D80]">HIFU Non-Surgical Sculpting</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/results"
                className={`${navLinkClass} ${location.pathname === '/results' ? activeLinkClass : ''}`}
                id="nav-results"
              >
                Results
              </Link>
              <Link
                to="/doctors"
                className={`${navLinkClass} ${location.pathname.startsWith('/doctors') ? activeLinkClass : ''}`}
                id="nav-doctors"
              >
                Doctors
              </Link>
              <Link
                to="/price-guide"
                className={`${navLinkClass} ${location.pathname === '/price-guide' ? activeLinkClass : ''}`}
                id="nav-price-guide"
              >
                Price Guide
              </Link>
              <Link
                to="/courses"
                className={`${navLinkClass} ${location.pathname.startsWith('/courses') ? activeLinkClass : ''}`}
                id="nav-courses"
              >
                Courses
              </Link>
              <Link
                to="/lab-test"
                className={`${navLinkClass} ${location.pathname === '/lab-test' ? activeLinkClass : ''}`}
                id="nav-lab-test"
              >
                Lab Test
              </Link>
              <Link
                to="/contact"
                className={`${navLinkClass} ${location.pathname === '/contact' ? activeLinkClass : ''}`}
                id="nav-contact"
              >
                Contact
              </Link>
            </nav>

            {/* Right: Actions (Book Consultation & WhatsApp) */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Book Consultation Button */}
              <Link
                to="/book-consultation"
                className={`inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  isTransparent
                    ? 'bg-white text-[#171614] hover:bg-[#F7F3ED] shadow-md hover:scale-[1.02]'
                    : 'bg-[#171614] text-white hover:bg-[#333] hover:shadow-md'
                }`}
                id="header-book-btn"
              >
                <span>Book Consultation</span>
              </Link>

              {/* WhatsApp Quick Circle Icon */}
              <a
                href={`https://wa.me/923254515555?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-200 ${
                  isTransparent
                    ? 'border-white/30 text-white hover:bg-white/15 hover:border-white'
                    : 'border-[#171614]/10 text-[#171614] hover:bg-white/60 hover:border-[#171614]/20'
                }`}
                aria-label="Contact MK Aesthetics Studio on WhatsApp"
                title="Chat on WhatsApp (+92 325 4515555)"
                id="header-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`xl:hidden p-2.5 rounded-full border transition-colors ${
                  isTransparent
                    ? 'text-white border-white/20 hover:bg-white/10'
                    : 'text-[#171614] border-[#171614]/10 hover:bg-white/60'
                }`}
                aria-label="Toggle Navigation Menu"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        whatsappMessage={whatsappMessage}
      />
    </>
  );
}
