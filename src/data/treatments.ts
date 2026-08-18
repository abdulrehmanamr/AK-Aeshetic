import { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    slug: 'hydrafacial',
    name: 'Medical Grade HydraFacial™',
    category: 'skin',
    categoryName: 'Skin Health & Glow',
    tagline: 'Deep pore cleansing, painless extractions, and antioxidant infusion.',
    shortDescription: 'The gold standard multi-step clinical treatment that cleanses, exfoliates, extracts impurities, and hydrates the skin with medical-grade peptide serums.',
    fullDescription: 'The HydraFacial at MK Aesthetics Studio is customized for South Asian skin phenotypes, utilizing patented Vortex-Fusion technology. It removes deep follicular congestion, sloughs dead stratum corneum cells, and drenches the skin with targeted hyaluronic acid, niacinamide, and botanical antioxidants. Ideal for pre-event radiance or ongoing monthly skin health.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    duration: '45 – 60 mins',
    downtime: 'Zero downtime',
    sessionsRecommended: '1 session every 4 weeks for optimal skin health',
    painLevel: 'None',
    featured: true,
    signature: true,
    priceStartingAt: 'Rs. 18,000 / session',
    benefits: [
      'Immediate dewy luminosity and refine skin texture',
      'Painless blackhead and sebum extraction with vortex vacuum',
      'Deep hydration with cross-linked hyaluronic acid infusions',
      'Minimizes visible pores and soothes environmental inflammation',
      'Completely safe for all Fitzpatrick skin types I–VI'
    ],
    whoItsFor: [
      'Dull, congested, or dehydrated skin',
      'Enlarged pores and excess sebum production',
      'Uneven skin texture prior to weddings or important events',
      'Patients seeking a no-downtime, refreshing monthly treatment'
    ],
    process: [
      {
        step: '01',
        title: 'Vortex Exfoliation & Peel',
        description: 'Gentle lactic and glycolic acid infusion loosens cellular debris and prepares pores without post-peel flaking.'
      },
      {
        step: '02',
        title: 'Vortex Extraction',
        description: 'Automated spiral vacuum extracts comedones and congestion painlessly while infusing calming honey extract.'
      },
      {
        step: '03',
        title: 'Targeted Booster Infusion',
        description: 'Custom serum formulated with peptides, tranexamic acid, and antioxidants tailored to your skin assessment.'
      },
      {
        step: '04',
        title: 'Hydration & LED Therapy',
        description: 'Deep hydration lock with high molecular hyaluronic acid paired with medical LED light therapy to stimulate collagen.'
      }
    ],
    whatToExpect: [
      'A cooling, refreshing sensation akin to a soft paintbrush across the skin',
      'Instant post-treatment glass skin glow with zero redness or irritation',
      'Immediate return to daily activities and makeup after 4 hours'
    ],
    recovery: [
      'Apply broad-spectrum SPF 50+ sun protection daily',
      'Avoid active retinoids or chemical exfoliants for 48 hours',
      'Keep skin hydrated with the prescribed barrier repair serum'
    ],
    resultsTimeline: 'Immediate glow lasting 3 to 4 weeks with cumulative improvements over continuous sessions.',
    faq: [
      {
        question: 'Is there any peeling or redness after HydraFacial?',
        answer: 'No. The medical-grade HydraFacial at MK Aesthetics Studio is designed to gently resurface the skin without visible shedding or lingering erythema.'
      },
      {
        question: 'Can I do HydraFacial before a wedding or photoshoot?',
        answer: 'Yes, it is best scheduled 2 to 3 days before your event for maximum luminous glow and seamless makeup application.'
      }
    ]
  },
  {
    slug: 'prp-hair-restoration',
    name: 'Advanced Autologous PRP Therapy',
    category: 'hair',
    categoryName: 'Hair Restoration',
    tagline: 'Bio-cellular platelet growth factors to halt shedding and awaken dormant follicles.',
    shortDescription: 'Autologous platelet-rich plasma enriched with cellular growth factors to stimulate microvascularization, strengthen hair shafts, and regenerate thinning follicles.',
    fullDescription: 'Our medical PRP protocol isolates high-concentration autologous platelets using double-centrifugation closed systems. When micro-injected into the follicular dermis, alpha-granules release VEGF, PDGF, and FGF growth factors that prolong the anagen (growth) phase, thicken miniaturized shafts, and decrease androgenic thinning.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    duration: '60 mins',
    downtime: '24 hours minimal swelling',
    sessionsRecommended: '3 to 4 sessions spaced 4 weeks apart, followed by maintenance',
    painLevel: 'Mild',
    featured: true,
    signature: true,
    priceStartingAt: 'Rs. 22,000 / session',
    benefits: [
      'Halts excessive hair shedding within 4 to 6 weeks',
      'Increases hair shaft thickness and follicular density',
      '100% autologous and biocompatible with zero allergic risk',
      'Stimulates micro-circulation across thinning scalp zones'
    ],
    whoItsFor: [
      'Male and female pattern androgenetic alopecia (thinning hair)',
      'Telogen effluvium (stress or post-illness hair fall)',
      'Patients noticing widening hair partings or receding hairline'
    ],
    process: [
      {
        step: '01',
        title: 'Blood Collection & Separation',
        description: 'Small blood sample collected in specialized sterile PRP tubes and processed in a precision medical centrifuge.'
      },
      {
        step: '02',
        title: 'Scalp Numbing & Disinfection',
        description: 'High-potency topical anesthetic cream applied to scalp for maximal patient comfort during administration.'
      },
      {
        step: '03',
        title: 'Targeted Micro-Injections',
        description: 'Concentrated platelet plasma is precisely injected at 2–3mm depth into targeted follicular dermis.'
      }
    ],
    whatToExpect: [
      'Mild pressure sensations during injection; well-tolerated with topical numbing',
      'Slight tightness or tenderness in the scalp for 12 to 24 hours'
    ],
    recovery: [
      'Do not wash hair or scalp for 24 hours post-procedure',
      'Avoid heavy gym workouts or saunas for 48 hours',
      'Gentle sulfate-free hair wash allowed after 24 hours'
    ],
    resultsTimeline: 'Reduction in hair fall within 30 days. Visible new density and shaft thickening around month 3–4.',
    faq: [
      {
        question: 'How many PRP sessions will I need?',
        answer: 'Most patients achieve substantial density improvement with an initial series of 3 to 4 monthly sessions, followed by maintenance every 4 to 6 months.'
      }
    ]
  },
  {
    slug: 'fractional-co2-laser',
    name: 'Fractional CO2 Laser Resurfacing',
    category: 'laser',
    categoryName: 'Advanced Laser Systems',
    tagline: 'Deep micro-ablative thermal remodeling for acne scars and skin texture.',
    shortDescription: 'Advanced fractional micro-ablative laser targeting deep acne scarring, enlarged pores, surgical scars, and skin laxity by stimulating profound dermal neocollagenesis.',
    fullDescription: 'Fractional CO2 laser delivers microscopic thermal columns (MTZs) deep into the dermis while leaving surrounding tissue intact for rapid re-epithelialization. This precision ablative remodeling vaporizes fibrotic scar tissue and triggers dramatic production of new Type I and Type III collagen.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f02e71df0ed?q=80&w=1200&auto=format&fit=crop',
    duration: '60 – 90 mins (including numbing)',
    downtime: '4 – 7 days of mild redness and micro-crusting',
    sessionsRecommended: '2 to 4 sessions spaced 6 to 8 weeks apart',
    painLevel: 'Moderate',
    featured: true,
    signature: false,
    priceStartingAt: 'Rs. 28,000 / session',
    benefits: [
      'Dramatically reduces deep boxcar, rolling, and ice-pick acne scars',
      'Smooths coarse texture and shrinks enlarged follicular openings',
      'Tightens mild facial skin laxity and improves fine periorbital lines',
      'Long-term dermal structural remodeling'
    ],
    whoItsFor: [
      'Persistent post-acne scarring and uneven skin indentations',
      'Deep textural irregularities and photo-damaged skin',
      'Patients seeking significant, structural dermal rejuvenation'
    ],
    process: [
      {
        step: '01',
        title: 'Clinical Evaluation & Numbing',
        description: 'Skin is cleansed and potent compounded topical anesthetic is applied for 45 minutes.'
      },
      {
        step: '02',
        title: 'Fractional Energy Delivery',
        description: 'Customized spot size, pulse duration, and pitch parameters adjusted to treat specific scar depths safely.'
      },
      {
        step: '03',
        title: 'Post-Laser Soothing & Barrier Mask',
        description: 'Application of cooling post-laser regenerative growth factor gel to accelerate epithelial healing.'
      }
    ],
    whatToExpect: [
      'Warm sunburn-like sensation for 2–4 hours post-treatment',
      'Microscopic dot matrix (bronzing) forming over 24–48 hours, sloughing off gently by day 5–7'
    ],
    recovery: [
      'Keep treated area constantly moisturized with prescribed medical ointment',
      'Strict sun avoidance and physical mineral SPF 50+ protection',
      'Do not pick or scratch flaking skin; let it shed naturally'
    ],
    resultsTimeline: 'Initial surface smoothness visible at 2 weeks; structural collagen remodeling peaks at 3 to 6 months.',
    faq: [
      {
        question: 'Is Fractional CO2 safe for South Asian skin?',
        answer: 'Yes, when calibrated with specialized pulse spacing and lower fluency density to prevent post-inflammatory hyperpigmentation (PIH).'
      }
    ]
  },
  {
    slug: 'botulinum-wrinkle-relaxing',
    name: 'Precision Botulinum Toxin Injections',
    category: 'injectables',
    categoryName: 'Medical Injectables',
    tagline: 'Artistic muscle relaxation preserving natural expressiveness and smooth contours.',
    shortDescription: 'Targeted neurotoxin micro-dosing to soften dynamic forehead lines, crow’s feet, frown lines, and perform non-surgical facial contouring with natural mobility.',
    fullDescription: 'At MK Aesthetics Studio, our philosophy on wrinkle relaxation is subtle enhancement, never frozen expressions. We perform anatomic micro-droplet placements into hyperactive facial mimetic muscles, gently releasing dynamic tension while preserving your full range of authentic, warm emotions.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    duration: '30 mins',
    downtime: 'Zero downtime',
    sessionsRecommended: 'Repeat every 4 to 6 months to maintain smooth prevention',
    painLevel: 'Minimal',
    featured: true,
    signature: true,
    priceStartingAt: 'Rs. 950 / unit',
    benefits: [
      'Softens forehead horizontal lines, glabella frown 11s, and lateral crow’s feet',
      'Prevents static creasing from becoming permanently etched into skin',
      'Masseter slimming for jawline contouring and bruxism (teeth grinding) relief',
      'Natural, rested, refreshed appearance with full eye expressiveness'
    ],
    whoItsFor: [
      'Patients noticing dynamic expression lines during smiling or frowning',
      'Preventive anti-aging for individuals in their late 20s to 50s+',
      'Patients with square or prominent jaw muscles wanting facial contouring'
    ],
    process: [
      {
        step: '01',
        title: 'Dynamic Muscle Mapping',
        description: 'Our aesthetic physician observes your facial dynamics in motion to calculate exact micro-units.'
      },
      {
        step: '02',
        title: 'Ultra-Fine Micro Injection',
        description: 'Using 32G micro-needles, minute doses are placed into hyperactive target muscle bellies.'
      }
    ],
    whatToExpect: [
      'Brief pin-prick sensations; takes less than 15 minutes of actual injection time',
      'Small raised mosquito-bite bumps that disappear within 20 minutes'
    ],
    recovery: [
      'Remain upright for 4 hours post-procedure; do not lie down or massage face',
      'Avoid strenuous workouts, saunas, and hot showers for 24 hours',
      'Full effects settle smoothly over 5 to 14 days'
    ],
    resultsTimeline: 'Onset begins around day 3–4, with maximum refinement visible at day 10–14.',
    faq: [
      {
        question: 'Will my face look frozen or unnatural?',
        answer: 'Never. Our physicians use precise micro-dosing tailored to your facial architecture to ensure natural mobility and organic expression.'
      }
    ]
  },
  {
    slug: 'dermal-fillers-sculpting',
    name: 'Hyaluronic Acid Dermal Fillers',
    category: 'injectables',
    categoryName: 'Medical Injectables',
    tagline: 'Structural volume restoration, lip balancing, and sharp jawline definition.',
    shortDescription: 'Premium cross-linked hyaluronic acid gels strategically placed using micro-cannulas to restore midface volume, sculpt chin and jawlines, and enhance lip symmetry.',
    fullDescription: 'Dermal fillers provide immediate structural architecture, replenishing deep fat pad deflation and bone resorption that occurs with aging. We utilize atraumatic blunt micro-cannula techniques to minimize bruising, deliver anatomically harmonious proportions, and emphasize your natural facial balance.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    duration: '45 – 60 mins',
    downtime: '24 – 48 hours mild swelling',
    sessionsRecommended: 'Typically 1 session lasting 12 to 18 months',
    painLevel: 'Mild',
    featured: true,
    signature: true,
    priceStartingAt: 'Rs. 42,000 / syringe (1ml)',
    benefits: [
      'Restores cheekbone support and lifts nasolabial folds naturally',
      'Creates hydrated, defined lip borders and balanced volume',
      'Sharpens mandibular angle and chin projection for balanced profile',
      'Cannula technique ensures maximum safety and minimal bruising'
    ],
    whoItsFor: [
      'Under-eye hollows and dark tear-trough shadows',
      'Midface volume loss and deepening smile lines',
      'Receding chin, soft jawline, or asymmetrical lips'
    ],
    process: [
      {
        step: '01',
        title: '3D Facial Profile Assessment',
        description: 'Comprehensive analysis of facial symmetry, bone structure, and dynamic expression vectors.'
      },
      {
        step: '02',
        title: 'Micro-Cannula Placement',
        description: 'Lidocaine-infused hyaluronic gel placed via single entry points to sculpt underlying tissue without vascular trauma.'
      }
    ],
    whatToExpect: [
      'Immediate structural enhancement with slight localized swelling for 24–48 hours'
    ],
    recovery: [
      'Avoid high-impact exercise, alcohol, and dental work for 48 hours',
      'Do not apply firm pressure or sleep on face for 3 nights'
    ],
    resultsTimeline: 'Immediate structural result; settles into seamless soft-tissue integration by day 14.',
    faq: [
      {
        question: 'Are hyaluronic acid fillers reversible?',
        answer: 'Yes, pure hyaluronic acid fillers can be safely and completely dissolved using hyaluronidase enzyme if ever desired.'
      }
    ]
  },
  {
    slug: 'laser-hair-reduction',
    name: 'Triple-Wavelength Laser Hair Reduction',
    category: 'laser',
    categoryName: 'Advanced Laser Systems',
    tagline: 'Permanent follicular reduction with cooling sapphire contact technology.',
    shortDescription: 'Medical diode, alexandrite, and Nd:YAG triple-combination laser destroying hair follicles at root depth with continuous sub-zero contact cooling for all skin tones.',
    fullDescription: 'Our advanced multi-wavelength laser platform emits targeted photothermal energy that selectively destroys the melanin-rich follicular bulb while safeguarding surrounding epidermal layers. Sub-zero sapphire cooling ensures virtually painless sessions across face, arms, legs, back, and sensitive areas.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
    duration: '20 – 60 mins depending on zone',
    downtime: 'Zero downtime',
    sessionsRecommended: '6 to 8 sessions spaced 4 to 6 weeks apart',
    painLevel: 'Minimal',
    featured: false,
    signature: false,
    priceStartingAt: 'Rs. 8,000 / session (Full Face)',
    benefits: [
      'Up to 90%+ permanent reduction in active hair density',
      'Completely eliminates painful ingrown hairs and razor bumps',
      'Ultra-fast gliding mode for comfortable large-body coverage',
      'Advanced cooling crystal prevents thermal discomfort'
    ],
    whoItsFor: [
      'Unwanted facial and body hair on all skin tones',
      'Folliculitis, razor burn, and recurring ingrown hairs',
      'Patients seeking smooth, maintenance-free skin year-round'
    ],
    process: [
      {
        step: '01',
        title: 'Skin & Follicle Assessment',
        description: 'Skin tone and follicle depth evaluated to calibrate optimal pulse width and fluence.'
      },
      {
        step: '02',
        title: 'Chilled Crystal Gliding',
        description: 'Laser pulses delivered smoothly across treatment grid with continuous cooling.'
      }
    ],
    whatToExpect: [
      'Mild snapping rubber-band sensation combined with a cold soothing breeze',
      'Shedding of treated hairs occurs naturally over 10 to 14 days'
    ],
    recovery: [
      'Avoid direct sunlight, waxing, or threading between sessions',
      'Shaving is permitted and recommended before each appointment'
    ],
    resultsTimeline: 'Noticeable thinning and slower growth after 2 sessions; significant reduction after 6 sessions.',
    faq: [
      {
        question: 'Does laser hair reduction hurt?',
        answer: 'With our dynamic ice-cooling sapphire head, most patients feel only mild warmth and gentle pinching, far more comfortable than traditional waxing.'
      }
    ]
  },
  {
    slug: 'microneedling-exosomes',
    name: 'RF Microneedling with Bio-Exosomes',
    category: 'rejuvenation',
    categoryName: 'Skin Rejuvenation',
    tagline: 'Deep dermal collagen induction combined with cellular signaling exosomes.',
    shortDescription: 'Fractional radiofrequency microneedling delivering controlled thermal energy into the dermis, infused with regenerative bio-exosomes for dramatic skin tightening and pore reduction.',
    fullDescription: 'RF Microneedling combines precision insulated micro-needles with bipolar radiofrequency energy. By heating the reticular dermis to 55–65°C without damaging the epidermis, it triggers immense pro-collagen synthesis. Topical bio-exosomes applied immediately post-treatment deliver billions of mRNA and growth factor messengers that cut recovery time in half while quadrupling regenerative signaling.',
    image: 'https://images.unsplash.com/photo-1512290903020-008107775056?q=80&w=1200&auto=format&fit=crop',
    duration: '75 mins',
    downtime: '24 – 36 hours mild pinkness',
    sessionsRecommended: '3 sessions spaced 4 weeks apart',
    painLevel: 'Minimal to Mild',
    featured: true,
    signature: true,
    priceStartingAt: 'Rs. 35,000 / session',
    benefits: [
      'Tightens mild jowl laxity, neck crepiness, and open pores',
      'Smooths textured acne scarring and post-inflammatory marks',
      'Bio-exosomes dramatically accelerate cellular repair and barrier strength',
      'Safe across all seasons with minimal thermal surface damage'
    ],
    whoItsFor: [
      'Early skin sagging, loss of elasticity, and dilated pores',
      'Rough texture, shallow scars, and uneven tone',
      'Patients desiring surgical-level tightening without surgical downtime'
    ],
    process: [
      {
        step: '01',
        title: 'Topical Desensitization',
        description: 'Prescription numbing cream applied for 40 minutes for effortless comfort.'
      },
      {
        step: '02',
        title: 'RF Needle Dermal Delivery',
        description: 'Motorized gold-plated insulated needles deliver thermal pulses at customized 0.5mm–3.5mm depths.'
      },
      {
        step: '03',
        title: 'Exosome Infusion',
        description: 'Billions of lyophilized cellular exosomes massage directly into open micro-channels.'
      }
    ],
    whatToExpect: [
      'Mild warmth and pressure during the passes; comfortably managed with topical numbing',
      'Skin appears flushed like a moderate workout for 24 hours'
    ],
    recovery: [
      'Do not wash face with cleansers for 12 hours to allow exosome absorption',
      'Wear physical zinc sunblock from day 2 onwards'
    ],
    resultsTimeline: 'Enhanced tone and glow at 1 week; structural tightening continues over 3 to 6 months.',
    faq: [
      {
        question: 'What is the advantage of adding Exosomes?',
        answer: 'Exosomes contain concentrated growth factors that reduce post-procedure redness by 60% and stimulate up to 300% more collagen than microneedling alone.'
      }
    ]
  },
  {
    slug: 'pdo-threads-lift',
    name: 'Polydioxanone (PDO) Matrix Thread Lift',
    category: 'rejuvenation',
    categoryName: 'Skin Rejuvenation',
    tagline: 'Non-surgical repositioning of sagging facial contours with bio-absorbable collagen threads.',
    shortDescription: 'Minimally invasive barbed and mono PDO threads inserted beneath the subcutaneous layer to instantly elevate midface sagging, redefine jawlines, and stimulate enduring neocollagenesis.',
    fullDescription: 'PDO Thread Lifts represent the frontier of non-surgical rejuvenation. Biodegradable polydioxanone sutures equipped with multidirectional cogs grasp lax subcutaneous tissue, repositioning sagging cheeks and jowls. As the sutures dissolve over 6 to 9 months, they generate a dense scaffold of new structural collagen that holds results for 18 to 24 months.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    duration: '60 – 75 mins',
    downtime: '3 – 5 days of mild swelling and tenderness',
    sessionsRecommended: '1 procedure every 18 to 24 months',
    painLevel: 'Mild',
    featured: false,
    signature: true,
    priceStartingAt: 'Rs. 65,000 / area',
    benefits: [
      'Instant mechanical lifting of jowls, marionette lines, and nasolabial folds',
      'Sharpens submental angle and softens lower face heaviness',
      'Completely bio-absorbable with extensive clinical safety profile',
      'Ongoing collagen matrix production long after thread dissolution'
    ],
    whoItsFor: [
      'Mild to moderate facial laxity and drooping cheek fat pads',
      'Loss of defined jawline border and early neck sagging',
      'Patients wanting structural lift without undergoing surgical rhytidectomy'
    ],
    process: [
      {
        step: '01',
        title: 'Vector Mapping & Local Anesthesia',
        description: 'Precise vectors marked on skin and local lidocaine injected at micro-entry points.'
      },
      {
        step: '02',
        title: 'Cannula-Guided Thread Insertion',
        description: 'Micro-cannulas carry PDO threads into the SMAS-adjacent plane and gently lock into place.'
      }
    ],
    whatToExpect: [
      'Immediate visible elevation of facial contours right after the procedure'
    ],
    recovery: [
      'Avoid wide mouth opening, vigorous chewing, and intense exercise for 1 week',
      'Sleep on back with elevated head for 5 nights'
    ],
    resultsTimeline: 'Instant mechanical lift; optimal skin quality and firming peaks at 3 months.',
    faq: [
      {
        question: 'Do PDO threads dissolve inside the skin?',
        answer: 'Yes, PDO material safely hydrolyzes and naturally dissolves into water and carbon dioxide within 6 to 8 months, leaving your own newly formed collagen matrix behind.'
      }
    ]
  },
  {
    slug: 'body-contouring-hifu',
    name: 'High-Intensity Focused Ultrasound (HIFU) Body',
    category: 'body',
    categoryName: 'Body Rejuvenation',
    tagline: 'Targeted acoustic cavitation for localized adiposity and skin tightening.',
    shortDescription: 'Deep micro and macro-focused ultrasound targeting subcutaneous fat cells and fibrous septae to contour flanks, abdomen, arms, and thighs without surgery.',
    fullDescription: 'HIFU Body delivers high-frequency sound energy focused at precise depths (6mm, 9mm, and 13mm) to disrupt localized adipocyte membranes through thermal coagulation while simultaneously contracting connective tissue. The eliminated cellular lipids are naturally processed and flushed by the lymphatic system over subsequent weeks.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    duration: '60 – 90 mins',
    downtime: 'Zero downtime',
    sessionsRecommended: '1 to 2 sessions spaced 8 weeks apart',
    painLevel: 'Mild',
    featured: false,
    signature: false,
    priceStartingAt: 'Rs. 32,000 / zone',
    benefits: [
      'Reduces stubborn pockets of subcutaneous fat on abdomen, flanks, and thighs',
      'Simultaneously tightens loose overlying skin and stimulates elastin',
      'No incisions, no anesthesia, and zero recovery downtime',
      'Gradual, natural inch loss that harmonizes with body curves'
    ],
    whoItsFor: [
      'Patients near ideal body weight with stubborn localized fat pockets',
      'Post-partum abdominal laxity and loose arm skin',
      'Individuals seeking non-invasive body sculpting'
    ],
    process: [
      {
        step: '01',
        title: 'Target Zone Calibration',
        description: 'Skin thickness and subcutaneous fat layer measured using ultrasound caliber.'
      },
      {
        step: '02',
        title: 'Focused Ultrasound Delivery',
        description: 'Multi-depth transducers deliver acoustic pulses causing targeted fat cell apoptosis.'
      }
    ],
    whatToExpect: [
      'Deep warm prickling sensation beneath the skin during pulse emission'
    ],
    recovery: [
      'Drink 2–3 liters of water daily to support lymphatic lipid clearance',
      'Resume all normal physical workouts immediately'
    ],
    resultsTimeline: 'Tightening begins within 4 weeks; full circumferential reduction visible at 8 to 12 weeks.',
    faq: [
      {
        question: 'Is HIFU Body a weight loss procedure?',
        answer: 'HIFU is a targeted body sculpting and tightening treatment for stubborn fat deposits, not an alternative to systemic weight loss.'
      }
    ]
  },
  {
    slug: 'chemical-peel-depigmentation',
    name: 'Advanced Medical Depigmentation Peels',
    category: 'skin',
    categoryName: 'Skin Health & Glow',
    tagline: 'Targeted tyrosinase inhibition for melasma, sun spots, and post-inflammatory marks.',
    shortDescription: 'Custom multi-acid medical peels featuring tranexamic, azelaic, kojic, and retinoic acids calibrated to inhibit melanin overproduction safely in South Asian skin.',
    fullDescription: 'Hyperpigmentation and stubborn melasma require delicate biochemical management to avoid rebound hyperpigmentation. Our clinic uses progressive, non-aggressive depigmenting protocols that suppress tyrosinase activity, accelerate turnover of pigmented cells, and restore even, illuminated skin tone.',
    image: 'https://images.unsplash.com/photo-1512290902830-4e201b17b3d3?q=80&w=1200&auto=format&fit=crop',
    duration: '40 mins',
    downtime: '2 – 4 days of micro-flaking',
    sessionsRecommended: '3 to 5 sessions spaced 3 weeks apart',
    painLevel: 'Minimal',
    featured: false,
    signature: false,
    priceStartingAt: 'Rs. 14,000 / session',
    benefits: [
      'Fades stubborn melasma patches, sun spots, and dark acne marks (PIH)',
      'Improves cellular turnover and reveals fresh, clarified skin layers',
      'Specially balanced formulation preventing rebound pigment spikes',
      'Restores unified radiance across face and neck'
    ],
    whoItsFor: [
      'Melasma, chloasma, and hormonal pigmentation',
      'Post-acne hyperpigmented dark spots',
      'Sun-damaged, uneven, or hyperkeratotic skin'
    ],
    process: [
      {
        step: '01',
        title: 'Skin Degreasing & Pre-Peel Prep',
        description: 'Alcohol-free cleansing ensures uniform acid penetration across all facial zones.'
      },
      {
        step: '02',
        title: 'Layered Acid Application',
        description: 'Carefully timed application of active depigmenting agents according to skin sensitivity.'
      },
      {
        step: '03',
        title: 'Neutralization & Soothing Seal',
        description: 'Peel neutralized and sealed with a barrier lipid mask containing zinc and centella asiatica.'
      }
    ],
    whatToExpect: [
      'Mild tingling or warm sensation for 3–5 minutes during application'
    ],
    recovery: [
      'Apply gentle moisturizer and SPF 50+ mineral sunblock religiously every 3 hours',
      'Do not use AHAs, BHAs, or retinoids for 5 days post-peel'
    ],
    resultsTimeline: 'Noticeable brightening within 7 days; significant fading of pigment within 3 to 4 sessions.',
    faq: [
      {
        question: 'Will this peel make my skin thin or sensitive?',
        answer: 'No. Medical peels promote healthy cellular turnover and actually thicken the underlying dermal collagen over time.'
      }
    ]
  },
  {
    slug: 'carbon-laser-hollywood-peel',
    name: 'Spectra Q-Switched Carbon Laser Peel',
    category: 'laser',
    categoryName: 'Advanced Laser Systems',
    tagline: 'The iconic "Hollywood Glow" for instant pore shrinking and oil control.',
    shortDescription: 'Liquid medical carbon applied to skin and vaporized with Q-switched Nd:YAG laser pulses to instantly eliminate pore debris, kill acne bacteria, and stimulate radiance.',
    fullDescription: 'Known worldwide as the Hollywood Laser Peel, this procedure begins with an organic carbon lotion that penetrates deep into sebaceous pores. When swept with 1064nm Q-switched laser energy, the carbon particles implode, vaporizing microscopic debris, tightening open pores, and leaving skin silky, matte, and glowing.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
    duration: '45 mins',
    downtime: 'Zero downtime',
    sessionsRecommended: 'Monthly maintenance or before events',
    painLevel: 'None to Minimal',
    featured: false,
    signature: false,
    priceStartingAt: 'Rs. 16,000 / session',
    benefits: [
      'Instant reduction in excessive facial oil and shine',
      'Noticeably tightens enlarged pores and refines texture',
      'Destroys P. acnes bacteria to curb active acne breakouts',
      'Zero downtime — instant makeup-ready radiance'
    ],
    whoItsFor: [
      'Oily, acne-prone skin with dilated pores',
      'Dull skin needing an immediate pre-wedding boost',
      'Patients wanting laser benefits with absolutely no peeling'
    ],
    process: [
      {
        step: '01',
        title: 'Carbon Lotion Application',
        description: 'Micro-fine medical carbon cream applied and allowed to absorb into follicles for 10 minutes.'
      },
      {
        step: '02',
        title: 'Q-Switched Laser Vaporization',
        description: 'Short laser pulses shatter and vaporize the carbon, gently exfoliating dead surface cells.'
      }
    ],
    whatToExpect: [
      'Gentle clicking sound and mild warm snapping sensation, highly relaxing'
    ],
    recovery: [
      'Zero peeling or irritation. Apply sun protection as standard practice.'
    ],
    resultsTimeline: 'Instant porcelain-smooth finish lasting 2 to 3 weeks.',
    faq: [
      {
        question: 'Can I wear makeup right after a carbon peel?',
        answer: 'Yes, you can apply mineral makeup immediately after your session.'
      }
    ]
  },
  {
    slug: 'mesotherapy-skin-booster',
    name: 'Restylane / Profhilo Micro-Skin Booster',
    category: 'rejuvenation',
    categoryName: 'Skin Rejuvenation',
    tagline: 'Deep dermal bio-remodeling and cellular hydration from within.',
    shortDescription: 'Ultraconcentrated non-crosslinked hyaluronic acid and amino acid complexes micro-injected across key bio-aesthetic points for luminous elasticity and crepiness reduction.',
    fullDescription: 'Unlike traditional volumizing fillers, skin boosters and bio-remodeling complexes like Profhilo diffuse evenly throughout the dermal extracellular matrix. They stimulate 4 different types of collagen and elastin fibers, delivering long-lasting inner dewiness and structural elasticity without changing facial volume.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    duration: '40 mins',
    downtime: '24 hours small injection bumps',
    sessionsRecommended: '2 sessions spaced 4 weeks apart, twice a year',
    painLevel: 'Minimal',
    featured: false,
    signature: true,
    priceStartingAt: 'Rs. 48,000 / protocol',
    benefits: [
      'Unlocks deep hydration that topicals cannot achieve',
      'Smooths micro-crepiness around cheeks, smile lines, and neck',
      'Significantly improves tissue firmness, bounce, and elasticity',
      'No artificial volume — purely natural skin quality improvement'
    ],
    whoItsFor: [
      'Dehydrated, tired, or mature skin losing firmness',
      'Fine crinkling lines across midface and neck bands',
      'Patients seeking radiant, youthful skin texture without altering facial shape'
    ],
    process: [
      {
        step: '01',
        title: 'BAP (Bio Aesthetic Point) Mapping',
        description: 'Precise 5 anatomical injection points mapped on each side of the face.'
      },
      {
        step: '02',
        title: 'Micro-Bolus Administration',
        description: 'High-concentration hyaluronic complex slowly injected into deep dermis to naturally spread.'
      }
    ],
    whatToExpect: [
      'Small raised papules at the 5 injection sites that settle within 12 to 24 hours'
    ],
    recovery: [
      'Avoid high-impact exercise, saunas, and steam rooms for 24 hours',
      'Gentle facial skincare only on treatment day'
    ],
    resultsTimeline: 'Enhanced hydration and suppleness in 2 weeks; peak collagen remodeling after session 2.',
    faq: [
      {
        question: 'How is Profhilo different from dermal fillers?',
        answer: 'Fillers create localized volume (e.g. lips or cheekbones), while Profhilo spreads like a liquid honey beneath the skin to bio-remodel elasticity across the entire face.'
      }
    ]
  }
];

export const TREATMENT_CATEGORIES = [
  {
    id: 'skin',
    name: 'Skin Health & Glow',
    shortName: 'Skin',
    tagline: 'Clarity, Texture & Radiance',
    description: 'Bespoke clinical facials, medical chemical peels, and deep dermal hydration designed to restore skin barrier health, tone, and cellular clarity.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
    count: 3
  },
  {
    id: 'hair',
    name: 'Hair Restoration',
    shortName: 'Hair',
    tagline: 'Follicular Health & Density',
    description: 'Advanced autologous cellular therapies, PRP, and mesotherapy cocktails targeting hair thinning, androgenetic alopecia, and scalp rejuvenation.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    count: 2
  },
  {
    id: 'laser',
    name: 'Advanced Laser Systems',
    shortName: 'Laser',
    tagline: 'Precision Energy & Resurfacing',
    description: 'Gold-standard Fractional CO2, Q-Switched Carbon, and Triple-Wavelength Laser platforms for scar remodeling, pore refinement, and hair reduction.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f02e71df0ed?q=80&w=1000&auto=format&fit=crop',
    count: 3
  },
  {
    id: 'injectables',
    name: 'Medical Injectables',
    shortName: 'Injectables',
    tagline: 'Natural Expression & Contour',
    description: 'Artistic facial harmony through precision neurotoxins and premium hyaluronic acid fillers, delivered with micro-cannula safety.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop',
    count: 2
  },
  {
    id: 'rejuvenation',
    name: 'Skin Rejuvenation',
    shortName: 'Rejuvenation',
    tagline: 'Collagen & Bio-Remodeling',
    description: 'Next-generation RF Microneedling, Exosome therapy, PDO threads, and bio-remodeling boosters for lasting structural elasticity.',
    image: 'https://images.unsplash.com/photo-1512290903020-008107775056?q=80&w=1000&auto=format&fit=crop',
    count: 3
  },
  {
    id: 'body',
    name: 'Body Contouring',
    shortName: 'Body',
    tagline: 'Sculpting & Skin Tightening',
    description: 'Non-surgical ultrasound and radiofrequency body sculpting technologies tailored to reduce localized fat and tighten lax skin.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    count: 1
  }
];
