import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-24 bg-[#F7F3ED] text-[#171614] space-y-12">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="space-y-2 border-b border-[#DDD1C3] pb-6">
          <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#9A8D80]">
            Legal & Confidentiality
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#171614]">
            Patient Privacy Policy.
          </h1>
          <p className="text-xs text-[#9A8D80]">
            Last updated: January 2025 • MK Aesthetics Studio (Lahore, Pakistan)
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-[#171614]/85 leading-relaxed font-light">
          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl font-bold text-[#171614]">
              1. Medical Confidentiality & Information Collection
            </h2>
            <p>
              At MK Aesthetics Studio, we take medical confidentiality and patient data security with the utmost seriousness. When you request a consultation, book an appointment, or undergo clinical diagnostics at our Lahore clinic, we collect personal contact information (name, phone number, email) and pertinent clinical history (skin concerns, previous aesthetic treatments, allergies, and medications).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl font-bold text-[#171614]">
              2. Use of Clinical Data & Clinical Photography
            </h2>
            <p>
              Your clinical medical records and baseline photography are stored securely and accessed exclusively by your treating physicians and authorized medical support staff. Before-and-after photographic documentation is captured strictly for clinical diagnostic records and progress evaluation. No patient photos are ever published or utilized for educational or marketing purposes without explicit, written, signed patient consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl font-bold text-[#171614]">
              3. Third-Party Sharing
            </h2>
            <p>
              We do not sell, lease, or distribute your personal or medical information to commercial third parties. Laboratory test samples are processed strictly with accredited clinical diagnostic partner laboratories in Pakistan under strict medical confidentiality protocols.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl font-bold text-[#171614]">
              4. Contact & Inquiries
            </h2>
            <p>
              If you have any questions or requests regarding your personal records, please reach out to our clinic coordinator at info@mkaestheticsstudio.com or call +92 325 4515555.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
