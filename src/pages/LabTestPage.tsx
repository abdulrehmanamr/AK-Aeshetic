import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, ShieldCheck, Clock, Check, FileCheck, ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { LAB_TESTS } from '../data/labTests';

export default function LabTestPage() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Clinical Lab Tests' }]} className="mb-6" />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Diagnostic Medicine
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#171614]">
            Clinical Laboratory Panels.
          </h1>
          <p className="text-base text-[#171614]/80 leading-relaxed font-light">
            Targeting internal causes of stubborn acne, diffuse hair loss, and premature dermal aging. Accurate biological diagnostics enable our physicians to formulate personalized treatment protocols with predictable results.
          </p>
        </div>
      </section>

      {/* Lab Panels List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LAB_TESTS.map((test) => (
            <div
              key={test.id}
              className="frosted-card rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs transition-all duration-300"
              id={`lab-card-${test.id}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#171614]/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A8D80]">
                    {test.sampleType} • {test.turnaroundTime}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#171614] bg-white/40 px-2 py-0.5 rounded-full border border-[#171614]/5">
                    {test.code}
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
                  {test.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#171614]/80 leading-relaxed">
                  {test.description}
                </p>

                {test.indications && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#171614] block">
                      Primary Clinical Indications:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {test.indications.map((ind, i) => (
                        <span
                          key={i}
                          className="frosted-badge text-[#171614] text-[11px] px-3 py-1 rounded-full font-medium"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-xs text-[#171614]/75 italic pt-1">
                  💡 {test.clinicalImportance}
                </div>
              </div>

              <div className="pt-4 border-t border-[#171614]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#9A8D80]">
                  {test.fastingRequired ? '⚠️ Fasting Required (8-10 hrs)' : '✓ No Fasting Required'}
                </span>
                <a
                  href={`https://wa.me/923254515555?text=${encodeURIComponent(
                    `Hello MK Studio, I would like to schedule a ${test.name} diagnostic test.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#171614] hover:bg-black text-[#F7F3ED] text-xs font-bold uppercase tracking-wider rounded-full transition-all text-center shadow-xs"
                >
                  Schedule Test →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Lab Tests Matter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171614] text-white p-8 sm:p-12 rounded-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
              The Diagnostic Advantage
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold">
              Why Aesthetic Medicine Requires Objective Biomarkers
            </h2>
            <p className="text-sm text-[#DDD1C3]/80 leading-relaxed font-light">
              Up to 60% of hair thinning and treatment-resistant acne are driven by underlying ferritin deficiencies, thyroid imbalances, or hyperandrogenism. By pairing medical lab diagnostics with procedural treatments, we treat both root biological causes and visible symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10 text-xs text-[#DDD1C3]/90">
            <div>
              <strong className="text-white block text-sm mb-1 font-serif-editorial">Painless Sampling</strong>
              <span>Conducted in our sterile Lahore treatment suites with disposable vacuum tubes.</span>
            </div>
            <div>
              <strong className="text-white block text-sm mb-1 font-serif-editorial">Accredited Partner Labs</strong>
              <span>Processed in ISO-certified pathology reference laboratories in Pakistan.</span>
            </div>
            <div>
              <strong className="text-white block text-sm mb-1 font-serif-editorial">Integrated Review</strong>
              <span>Results reviewed directly with your treating aesthetic physician.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
