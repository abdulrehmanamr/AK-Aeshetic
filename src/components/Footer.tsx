import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Clock, Star, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello MK Aesthetics Studio, I would like to inquire about treatments.'
  );

  return (
    <footer className="bg-[#171614] text-[#F7F3ED] border-t border-[#DDD1C3]/15 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand, Review Badge & Quick Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block" id="footer-logo">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.16em] uppercase text-[#F7F3ED]">
                MK AESTHETICS STUDIO
              </span>
              <span className="block text-xs tracking-[0.24em] text-[#DDD1C3]/70 uppercase mt-1">
                Advanced Aesthetic Medicine • Lahore
              </span>
            </Link>

            <p className="text-sm text-[#DDD1C3]/80 max-w-md leading-relaxed">
              "Bespoke Treatments. Natural Results. The Best of You." High-end aesthetic medicine, clinical dermatology, autologous hair restoration, and laser resurfacing tailored specifically for South Asian skin health.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white">4.9 ★ Rating</span>
                <span className="text-[#DDD1C3]/70 ml-1.5">(287+ Verified Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Treatments Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDD1C3]">
              Specialties & Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-[#DDD1C3]/80">
              <li>
                <Link to="/treatments/skin" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Medical HydraFacial™</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/treatments/hair" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Autologous PRP Hair Therapy</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/treatments/laser" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Fractional CO2 Laser Resurfacing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/treatments/injectables" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Precision Botulinum & Fillers</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/treatments/rejuvenation" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>RF Microneedling & Exosomes</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/treatments/body" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>HIFU Body Contouring</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Clinic Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDD1C3]">
              Studio Location & Hours
            </h4>
            <div className="space-y-3 text-sm text-[#DDD1C3]/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#DDD1C3] shrink-0 mt-1" />
                <span>1-Km Raiwind Road, Westwood Colony, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#DDD1C3] shrink-0" />
                <span>Monday – Saturday: 1:00 PM – 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#DDD1C3] shrink-0" />
                <a href="tel:+923254515555" className="hover:text-white transition-colors font-medium">
                  +92 325 4515555
                </a>
              </div>
            </div>

            {/* Newsletter / Insights signup */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider text-[#DDD1C3]/90 font-medium mb-2">
                Clinical Journal & VIP Invitations
              </span>
              {subscribed ? (
                <div className="flex items-center space-x-2 text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you. You have been added to our private clinical circle.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2.5 text-xs text-white placeholder-white/50 focus:outline-none focus:border-white rounded-xl"
                    aria-label="Email address for clinical journal updates"
                  />
                  <button
                    type="submit"
                    className="bg-[#F7F3ED] text-[#171614] px-5 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-white transition-colors rounded-xl shadow-xs"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Tier: Main Navigation Links Strip */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider uppercase text-[#DDD1C3]/70 font-medium">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/about" className="hover:text-white transition-colors">About Studio</Link>
            <Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link>
            <Link to="/results" className="hover:text-white transition-colors">Real Results</Link>
            <Link to="/doctors" className="hover:text-white transition-colors">Our Doctors</Link>
            <Link to="/price-guide" className="hover:text-white transition-colors">Price Guide</Link>
            <Link to="/courses" className="hover:text-white transition-colors">MK Academy</Link>
            <Link to="/lab-test" className="hover:text-white transition-colors">Lab Services</Link>
            <Link to="/insights" className="hover:text-white transition-colors">Editorial Journal</Link>
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Bottom Tier: Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#DDD1C3]/60">
          <p className="flex items-center space-x-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-[#DDD1C3]/80 shrink-0" />
            <span>
              All medical aesthetic procedures performed by licensed, registered medical practitioners. Individual patient results may vary.
            </span>
          </p>
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} MK Aesthetics Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
