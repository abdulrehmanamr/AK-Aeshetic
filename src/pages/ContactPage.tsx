import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import AppointmentForm from '../components/AppointmentForm';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Studio' }]} className="mb-6" />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Get In Touch
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
            Visit Our Lahore Studio.
          </h1>
          <p className="text-base text-[#171614]/80 leading-relaxed font-light">
            We are conveniently located in Westwood Colony on Raiwind Road, Lahore. Whether you wish to book a consultation or ask a preliminary clinical question, we look forward to assisting you.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Details & Directions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF7F2] p-8 rounded-sm border border-[#DDD1C3] space-y-6">
              <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
                MK Aesthetics Studio
              </h2>

              <div className="space-y-4 text-sm text-[#171614]">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-[#9A8D80] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#171614]">Location & Address:</strong>
                    <span>1-Km Raiwind Road, Westwood Colony, Lahore, Punjab 54000, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-[#9A8D80] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#171614]">Clinic Hours:</strong>
                    <span>Monday – Saturday: 1:00 PM – 8:00 PM</span>
                    <span className="block text-xs text-[#9A8D80]">Sunday: Closed (Prior Appointments & Emergency Inquiries)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-[#9A8D80] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#171614]">Direct Contact:</strong>
                    <a href="tel:+923254515555" className="font-semibold hover:underline block text-[#171614]">
                      +92 325 4515555
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-[#9A8D80] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#171614]">Email Concierge:</strong>
                    <span>info@mkaestheticsstudio.com</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDD1C3]/60 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/923254515555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider rounded-xs text-center transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Parking & Accessibility Note */}
            <div className="bg-[#EFE8DE] p-6 rounded-sm border border-[#DDD1C3] text-xs text-[#171614]/80 space-y-2">
              <strong className="text-[#171614] uppercase tracking-wider block font-bold">
                Arrival & Parking Information:
              </strong>
              <p>
                Private on-site dedicated patient parking is available directly in front of the studio entrance. Our clinic features step-free ramp access and discreet private waiting areas for confidential appointments.
              </p>
            </div>
          </div>

          {/* Right Column - Appointment Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
}
