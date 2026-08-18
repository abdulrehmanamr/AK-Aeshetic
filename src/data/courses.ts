import { Course } from '../types';

export const COURSES: Course[] = [
  {
    slug: 'advanced-injectables-masterclass',
    title: 'Advanced Medical Injectables & Facial Anatomy Masterclass',
    subtitle: 'Comprehensive hands-on training in botulinum toxins, micro-cannula fillers, and complication management.',
    level: 'Advanced',
    duration: '3 Days (Intensive Hands-on)',
    format: 'Hands-on Clinical',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Designed for registered medical practitioners (MBBS/BDS), this immersive workshop covers danger zone anatomy, MD Codes, micro-cannula technique for lips and midface, and emergency vascular protocols.',
    overview: 'MK Academy provides accredited clinical workshops for physicians aiming to master artistic precision in facial aesthetics. Participants practice on live patient models under one-on-one supervision with Dr. Muhammad Kashif.',
    whoItsFor: [
      'Licensed Physicians (MBBS / FCPS / BDS)',
      'Aesthetic Doctors seeking advanced micro-cannula proficiencies',
      'Medical professionals transitioning into aesthetic clinical practice'
    ],
    whatYoullLearn: [
      '3D Facial Danger Zones and vascular topography ultrasound correlation',
      'Upper, midface, and lower face botulinum toxin micro-dosing',
      'Atraumatic blunt cannula dermal filler placement (lips, pyriform, cheekbones, jawline)',
      'Hyaluronidase protocols and emergency vascular occlusion management algorithms'
    ],
    curriculum: [
      {
        module: 'Module 01',
        title: 'Anatomy, Rheology & Patient Assessment',
        topics: [
          'Facial fat compartments and structural bone changes with age',
          'Hyaluronic acid rheology: G-prime, cohesivity, and product selection',
          'Standardized aesthetic consultation and vector marking'
        ]
      },
      {
        module: 'Module 02',
        title: 'Botulinum Toxins in Clinical Practice',
        topics: [
          'Forehead, glabella, and periorbital dynamics',
          'Masseter reduction and neck platysmal band softening',
          'Preventing ptosis and managing asymmetrical responses'
        ]
      },
      {
        module: 'Module 03',
        title: 'Live Hands-On Clinical Injections',
        topics: [
          'Needle vs. cannula injection demonstrations',
          'Supervised patient injectables across live models',
          'Post-procedure documentation and patient follow-up protocols'
        ]
      }
    ],
    instructor: {
      name: 'Dr. Muhammad Kashif',
      title: 'Founder & Medical Director, MK Aesthetics Studio',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
    },
    prerequisites: [
      'Valid medical license (PMDC / Registered Medical Council)',
      'Completion of fundamental clinical medicine training'
    ],
    certificationNote: 'Certificate of Hands-on Clinical Training issued upon successful completion of practical assessments.',
    schedule: 'Quarterly Cohorts • Limited to 6 Doctors per cohort for maximum hands-on guidance.',
    fee: 'Contact MK Academy for fee schedule and seat reservation',
    faqs: [
      {
        question: 'Are live models provided during the workshop?',
        answer: 'Yes, MK Academy supplies vetted live patient models for every registered physician under direct instructor supervision.'
      },
      {
        question: 'Who is eligible to enroll in this course?',
        answer: 'Enrollment is strictly restricted to licensed medical and dental practitioners (MBBS/BDS).'
      }
    ]
  },
  {
    slug: 'clinical-lasers-energy-devices',
    title: 'Clinical Lasers & Energy-Based Aesthetic Devices',
    subtitle: 'Laser physics, Fractional CO2 protocols, Q-Switched settings, and safety in Fitzpatrick skin types III–VI.',
    level: 'Intermediate',
    duration: '2 Days (Comprehensive)',
    format: 'Hands-on Clinical',
    image: 'https://images.unsplash.com/photo-1512290900672-1f02e71df0ed?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Master the physics, safety precautions, spot size calibration, and specific protocols for laser hair reduction, fractional scar resurfacing, and carbon laser peels.',
    overview: 'A deep-dive technical and practical workshop on configuring energy-based devices specifically for South Asian skin phenotypes to avoid post-inflammatory hyperpigmentation while delivering superior scar remodeling and resurfacing.',
    whoItsFor: [
      'Dermatologists and aesthetic medicine physicians',
      'Clinical aesthetic practitioners operating laser platforms',
      'Medical clinic directors optimizing device efficacy'
    ],
    whatYoullLearn: [
      'Laser-tissue interactions and selective photothermolysis principles',
      'Preventing PIH in Fitzpatrick types IV–VI with customized pulse fluences',
      'Operating Fractional CO2, Q-Switched Nd:YAG, and Diode platforms',
      'Pre-conditioning regimens and active post-laser wound management'
    ],
    curriculum: [
      {
        module: 'Module 01',
        title: 'Laser Physics & South Asian Skin Safety',
        topics: [
          'Wavelengths, pulse duration, fluence, and chromophore targeting',
          'Cooling mechanisms: cryo, contact sapphire, and air cooling',
          'Managing laser emergencies and thermal burns'
        ]
      },
      {
        module: 'Module 02',
        title: 'Scar Subcision & Fractional Resurfacing',
        topics: [
          'Atrophic acne scar subtyping and combination protocols',
          'Step-by-step fractional ablative and non-ablative passes',
          'Live patient demonstration and supervised hands-on operation'
        ]
      }
    ],
    instructor: {
      name: 'Dr. Muhammad Kashif',
      title: 'Lead Laser Surgeon, MK Aesthetics Studio',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
    },
    prerequisites: [
      'Medical or dermatology background recommended'
    ],
    certificationNote: 'Certificate in Clinical Laser Operations and Aesthetic Safety.',
    schedule: 'Bi-monthly cohorts at MK Aesthetics Studio, Lahore.',
    fee: 'Contact MK Academy for seat availability',
    faqs: [
      {
        question: 'Will I get to operate the laser machines myself?',
        answer: 'Yes, full supervised hands-on operation of Fractional CO2, Diode, and Q-Switched platforms is included.'
      }
    ]
  },
  {
    slug: 'chemical-peels-skin-barrier-restoration',
    title: 'Medical Peeling Protocols & Barrier Restoration',
    subtitle: 'Formulations, neutralization kinetics, and medical treatments for melasma and acne.',
    level: 'Fundamental',
    duration: '1 Day Intensive',
    format: 'Blended Learning',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'An evidence-based curriculum covering superficial to medium-depth chemical peels, tyrosinase inhibition pathways, and clinical barrier restoration protocols.',
    overview: 'Learn how to formulate, layer, and safely monitor medical-grade chemical peels for complex pigmentary disorders, active inflammatory acne, and photodamage without rebound darkening.',
    whoItsFor: [
      'Medical aestheticians and junior aesthetic doctors',
      'Dermatology residents and clinical skincare practitioners'
    ],
    whatYoullLearn: [
      'AHA, BHA, TCA, and modified Jessner peel kinetics',
      'Tranexamic acid, azelaic acid, and glutathione combinations',
      'Clinical management of post-inflammatory hyperpigmentation',
      'Long-term topical prescription regimens'
    ],
    curriculum: [
      {
        module: 'Module 01',
        title: 'Biochemistry of Medical Peeling Agents',
        topics: [
          'Acid concentrations vs. free acid value (pKa dynamics)',
          'Neutralization protocols and frost recognition',
          'Pre-peel skin priming strategies'
        ]
      },
      {
        module: 'Module 02',
        title: 'Live Demonstrations & Case Studies',
        topics: [
          'Layering techniques for stubborn melasma',
          'Acne peel protocols and immediate post-peel barrier sealing'
        ]
      }
    ],
    instructor: {
      name: 'Dr. Ayesha Tariq',
      title: 'Consultant Clinical Dermatologist',
      image: 'https://images.unsplash.com/photo-1594824813583-11804f56f4d9?q=80&w=600&auto=format&fit=crop'
    },
    prerequisites: [
      'Medical or aesthetic clinical qualification'
    ],
    certificationNote: 'Certificate of Proficiency in Medical Chemical Peeling & Pigmentation Management.',
    schedule: 'Monthly sessions.',
    fee: 'Contact MK Academy for details',
    faqs: [
      {
        question: 'Does this course cover home-care formulation?',
        answer: 'Yes, designing home-care maintenance plans is a core component of the curriculum.'
      }
    ]
  }
];
