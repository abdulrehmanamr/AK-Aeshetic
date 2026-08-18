import { LabTest } from '../types';

export const LAB_TESTS: LabTest[] = [
  {
    id: 'lab-1',
    name: 'Comprehensive Hormonal & Androgen Panel',
    code: 'MK-LAB-HORM-01',
    category: 'Hormonal Profile',
    description: 'Measures Free & Total Testosterone, DHEA-S, DHT, LH, FSH, Prolactin, and fasting Insulin to identify underlying endocrine triggers for adult acne, hirsutism, and androgenetic hair loss.',
    turnaroundTime: '24 – 48 Hours',
    sampleType: 'Venous Blood Sample',
    indications: [
      'Recalcitrant cystic jawline acne',
      'Rapid crown or temple hair thinning',
      'Suspected Polycystic Ovarian Syndrome (PCOS)'
    ],
    fastingRequired: true,
    clinicalImportance: 'Aesthetic treatments work best when internal hormonal triggers are accurately identified and medically balanced in tandem with topical therapies.'
  },
  {
    id: 'lab-2',
    name: 'Advanced Trichology & Micronutrient Profile',
    code: 'MK-LAB-TRICH-02',
    category: 'Trichology',
    description: 'Evaluates Serum Ferritin, Total Iron Binding Capacity, Vitamin D3, Vitamin B12, Zinc, and Thyroid (TSH, Free T3, Free T4) levels critical for follicular matrix proliferation.',
    turnaroundTime: '24 Hours',
    sampleType: 'Venous Blood Sample',
    indications: [
      'Sudden excessive hair shedding (Telogen Effluvium)',
      'Brittle hair and poor response to topical hair serums',
      'Pre-PRP baseline optimization'
    ],
    fastingRequired: false,
    clinicalImportance: 'Ensures that cellular growth factors from PRP injections have the biochemical nutritional fuel required to regenerate hair shafts.'
  },
  {
    id: 'lab-3',
    name: 'Digital Optical Skin Barrier & Hydration Analysis',
    code: 'MK-LAB-DERM-03',
    category: 'Dermatopathology',
    description: 'Multi-spectral polarized and UV imaging quantifying sub-surface melanin distribution, porphyrin bacteria levels, trans-epidermal water loss (TEWL), and true biological skin age.',
    turnaroundTime: 'Instant (In-Clinic)',
    sampleType: 'Non-Invasive Optical Multi-Spectral Scan',
    indications: [
      'Formulating bespoke medical peel & laser resurfacing plans',
      'Monitoring treatment response across consecutive sessions',
      'Assessing invisible UV photodamage prior to flare-ups'
    ],
    fastingRequired: false,
    clinicalImportance: 'Provides objective, mathematical baseline data before initiating medical aesthetic procedures.'
  },
  {
    id: 'lab-4',
    name: 'Skin Allergy & Contact Dermatitis Patch Panel',
    code: 'MK-LAB-ALRG-04',
    category: 'Allergy & Sensitivity',
    description: 'Tests for hypersensitivity against standard cosmetic preservatives, fragrances, common topical anesthetics, and vehicle excipients.',
    turnaroundTime: '48 – 72 Hours',
    sampleType: 'Epicutaneous Skin Patch Application',
    indications: [
      'Chronic unprovoked facial redness and perioral dermatitis',
      'History of reactive flare-ups to cosmetic skincare products',
      'Pre-procedure sensitivity screening'
    ],
    fastingRequired: false,
    clinicalImportance: 'Guarantees that all in-clinic serums, peels, and home-care products are 100% biocompatible with the patient.'
  }
];
