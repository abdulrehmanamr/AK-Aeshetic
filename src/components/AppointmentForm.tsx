import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TREATMENTS } from '../data/treatments';

interface AppointmentFormProps {
  defaultTreatmentSlug?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function AppointmentForm({ defaultTreatmentSlug, onSuccess, className = '' }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: defaultTreatmentSlug || '',
    preferredDate: '',
    preferredTime: 'Afternoon (1:00 PM – 4:00 PM)',
    message: '',
    isFirstVisit: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Valid phone number is required (e.g. +92 300 1234567)';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      errs.phone = 'Please provide a valid contact number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.treatment) {
      errs.treatment = 'Please select a primary treatment of interest';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date for your visit';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical dispatch processing
    await new Promise((resolve) => setTimeout(resolve, 900));

    // Save locally for demo persistence
    try {
      const existing = JSON.parse(localStorage.getItem('mk_consultation_requests') || '[]');
      existing.push({
        ...formData,
        id: 'REQ-' + Date.now(),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('mk_consultation_requests', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#DDD1C3', '#C5A880', '#171614']
      });
    } catch {
      // ignore
    }

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: defaultTreatmentSlug || '',
      preferredDate: '',
      preferredTime: 'Afternoon (1:00 PM – 4:00 PM)',
      message: '',
      isFirstVisit: true,
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div
        className={`frosted-card p-8 sm:p-10 rounded-3xl text-center space-y-5 animate-in fade-in zoom-in-95 duration-300 ${className}`}
        id="consultation-form-success"
      >
        <div className="w-16 h-16 bg-emerald-100/80 backdrop-blur-md text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-300/40">
          <CheckCircle2 className="w-9 h-9 text-emerald-700" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#9A8D80]">
            Consultation Request Received
          </span>
          <h3 className="font-serif-editorial text-3xl font-bold text-[#171614]">
            We Look Forward To Welcoming You
          </h3>
          <p className="text-sm text-[#171614]/80 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-[#171614]">{formData.name}</strong>. Our clinical patient coordinator will review your requested appointment for{' '}
            <strong className="text-[#171614]">
              {TREATMENTS.find((t) => t.slug === formData.treatment)?.name || 'your consultation'}
            </strong>{' '}
            and contact you at <span className="font-semibold">{formData.phone}</span> via WhatsApp/call within 2 hours during studio operating hours (1 PM – 8 PM).
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xs border border-[#171614]/5 p-5 rounded-2xl text-xs text-[#171614] text-left max-w-sm mx-auto space-y-1.5 shadow-xs">
          <div><strong>Studio Address:</strong> 1-Km Raiwind Road, Westwood Colony, Lahore</div>
          <div><strong>Operating Hours:</strong> Mon – Sat: 1:00 PM – 8:00 PM</div>
          <div><strong>Direct Line:</strong> +92 325 4515555</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#171614] text-[#F7F3ED] text-xs font-bold tracking-wider uppercase hover:bg-black transition-colors rounded-xl shadow-xs"
          >
            Submit Another Request
          </button>
          <a
            href={`https://wa.me/923254515555?text=${encodeURIComponent(
              `Hello MK Aesthetics, I just submitted an appointment request for ${formData.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 text-white text-xs font-bold tracking-wider uppercase hover:bg-emerald-600 transition-colors rounded-xl shadow-xs"
          >
            Confirm on WhatsApp Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`frosted-card p-6 sm:p-8 rounded-3xl space-y-5 shadow-xs ${className}`}
      noValidate
      id="consultation-appointment-form"
    >
      <div className="border-b border-[#171614]/5 pb-4">
        <span className="text-[10px] tracking-[0.24em] uppercase font-bold text-[#9A8D80]">
          Private Consultation
        </span>
        <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
          Request Your Appointment
        </h3>
        <p className="text-xs text-[#171614]/70 mt-1">
          Select your desired clinical procedure and time slot. Our concierge coordinates your schedule immediately.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614]">
            Full Name <span className="text-rose-700">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#9A8D80] absolute left-3 top-3" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ayesha Malik"
              className={`w-full pl-9 pr-3 py-2.5 bg-white/80 border text-xs sm:text-sm text-[#171614] rounded-xl focus:outline-none focus:bg-white transition-colors ${
                errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#171614]/10 focus:border-[#171614]'
              }`}
              id="form-input-name"
            />
          </div>
          {errors.name && (
            <p className="text-[11px] text-rose-600 flex items-center space-x-1 mt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614]">
            Phone Number (WhatsApp) <span className="text-rose-700">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#9A8D80] absolute left-3 top-3" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+92 325 4515555"
              className={`w-full pl-9 pr-3 py-2.5 bg-white/80 border text-xs sm:text-sm text-[#171614] rounded-xl focus:outline-none focus:bg-white transition-colors ${
                errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#171614]/10 focus:border-[#171614]'
              }`}
              id="form-input-phone"
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-rose-600 flex items-center space-x-1 mt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614]">
            Email Address <span className="text-rose-700">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#9A8D80] absolute left-3 top-3" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@domain.com"
              className={`w-full pl-9 pr-3 py-2.5 bg-white/80 border text-xs sm:text-sm text-[#171614] rounded-xl focus:outline-none focus:bg-white transition-colors ${
                errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#171614]/10 focus:border-[#171614]'
              }`}
              id="form-input-email"
            />
          </div>
          {errors.email && (
            <p className="text-[11px] text-rose-600 flex items-center space-x-1 mt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Treatment Select */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614]">
            Treatment of Interest <span className="text-rose-700">*</span>
          </label>
          <select
            value={formData.treatment}
            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
            className={`w-full px-3 py-2.5 bg-white/80 border text-xs sm:text-sm text-[#171614] rounded-xl focus:outline-none focus:bg-white transition-colors ${
              errors.treatment ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#171614]/10 focus:border-[#171614]'
            }`}
            id="form-select-treatment"
          >
            <option value="">Select a Clinical Treatment</option>
            <option value="general-consultation">General Aesthetic Physician Consultation</option>
            {TREATMENTS.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name} ({t.categoryName})
              </option>
            ))}
          </select>
          {errors.treatment && (
            <p className="text-[11px] text-rose-600 flex items-center space-x-1 mt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.treatment}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Preferred Date */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614]">
            Preferred Date <span className="text-rose-700">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-[#9A8D80] absolute left-3 top-3" />
            <input
              type="date"
              value={formData.preferredDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className={`w-full pl-9 pr-3 py-2.5 bg-white/80 border text-xs sm:text-sm text-[#171614] rounded-xl focus:outline-none focus:bg-white transition-colors ${
                errors.preferredDate ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#171614]/10 focus:border-[#171614]'
              }`}
              id="form-input-date"
            />
          </div>
          {errors.preferredDate && (
            <p className="text-[11px] text-rose-600 flex items-center space-x-1 mt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.preferredDate}</span>
            </p>
          )}
        </div>

        {/* Preferred Time Slot */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614]">
            Preferred Time Slot
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-[#9A8D80] absolute left-3 top-3" />
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-white/80 border border-[#171614]/10 text-xs sm:text-sm text-[#171614] rounded-xl focus:outline-none focus:bg-white focus:border-[#171614]"
              id="form-select-time"
            >
              <option value="Early Afternoon (1:00 PM – 3:00 PM)">Early Afternoon (1:00 PM – 3:00 PM)</option>
              <option value="Late Afternoon (3:00 PM – 6:00 PM)">Late Afternoon (3:00 PM – 6:00 PM)</option>
              <option value="Evening (6:00 PM – 8:00 PM)">Evening (6:00 PM – 8:00 PM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Message / Skin Goals */}
      <div className="space-y-1">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614]">
          Clinical Notes / Skin or Hair Goals (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your skin or hair concerns, previous treatments, or specific questions for our physicians..."
          className="w-full p-3 bg-white/80 border border-[#171614]/10 text-xs sm:text-sm text-[#171614] rounded-xl focus:outline-none focus:bg-white focus:border-[#171614]"
          id="form-textarea-message"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 bg-[#171614] hover:bg-[#0E0E0D] text-[#F7F3ED] text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-xl shadow-xs disabled:opacity-50 flex items-center justify-center space-x-2"
        id="form-submit-btn"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Processing Request...</span>
          </>
        ) : (
          <span>Request Consultation</span>
        )}
      </button>

      <div className="text-center">
        <p className="text-[11px] text-[#9A8D80]">
          Strict medical confidentiality maintained. No upfront fee required to request a slot.
        </p>
      </div>
    </form>
  );
}
