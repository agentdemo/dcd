export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Business', href: '#business' },
  { label: 'Brand Collaborations', href: '#collaborations' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Six existing descriptive words used for the continuous left-to-right scrolling strip below the hero banner.
 */
export const brandAttributes = [
  'Global',
  'Sophisticated',
  'Trustworthy',
  'Charismatic',
  'Discerning',
  'Adventurous',
];

export interface HeroSlide {
  id: string;
  src: string;
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  caption?: string;
  isTemporaryAsset: boolean;
  assetSlotName: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-01',
    src: '/output_v2/desktop/sunset_window_landscape_1920x1080.jpg',
    desktopSrc: '/output_v2/desktop/sunset_window_landscape_1920x1080.jpg',
    mobileSrc: '/output_v2/enhanced/WhatsApp%20Image%202026-10-31%20at%2014.03.35_enhanced.jpg',
    alt: 'Sushill Waddhwa at the ocean sunset through a grand glass facade',
    isTemporaryAsset: true,
    assetSlotName: 'Hero Slide 1 (Desktop & Mobile)',
  },
  {
    id: 'hero-02',
    src: '/output_v2/desktop/dining_room_landscape_1920x1080.jpg',
    desktopSrc: '/output_v2/desktop/dining_room_landscape_1920x1080.jpg',
    mobileSrc: '/output_v2/enhanced/WhatsApp%20Image%202026-10-31%20at%2014.03.36_enhanced.jpg',
    alt: 'Sushill Waddhwa standing at an elegant dining table in front of vibrant floral artwork',
    isTemporaryAsset: true,
    assetSlotName: 'Hero Slide 2 (Desktop & Mobile)',
  },
  {
    id: 'hero-03',
    src: '/output_v2/desktop/garden_walkway_landscape_1920x1080.jpg',
    desktopSrc: '/output_v2/desktop/garden_walkway_landscape_1920x1080.jpg',
    mobileSrc: '/output_v2/enhanced/WhatsApp%20Image%202026-10-31%20at%2014.03.35%20(1)_enhanced.jpg',
    alt: 'Sushill Waddhwa strolling along a resort walkway beside a bright architectural wall and lotus pond',
    isTemporaryAsset: true,
    assetSlotName: 'Hero Slide 3 (Desktop & Mobile)',
  },
  {
    id: 'hero-04',
    src: '/output_v2/desktop/painted_corridor_landscape_1920x1080.jpg',
    desktopSrc: '/output_v2/desktop/painted_corridor_landscape_1920x1080.jpg',
    mobileSrc: '/output_v2/enhanced/WhatsApp%20Image%202026-10-31%20at%2014.03.36%20(1)_enhanced.jpg',
    alt: 'Sushill Waddhwa in a painted ceiling corridor walking up stairs',
    isTemporaryAsset: true,
    assetSlotName: 'Hero Slide 4 (Desktop & Mobile)',
  },
  {
    id: 'hero-05',
    src: '/output_v2/desktop/lotus_garden_landscape_1920x1080.jpg',
    desktopSrc: '/output_v2/desktop/lotus_garden_landscape_1920x1080.jpg',
    mobileSrc: '/output_v2/enhanced/WhatsApp%20Image%202026-10-31%20at%2014.03.37%20(1)_enhanced.jpg',
    alt: 'Sushill Waddhwa leaning against a palm tree beside a tranquil lotus garden pond',
    isTemporaryAsset: true,
    assetSlotName: 'Hero Slide 5 (Desktop & Mobile)',
  },
  {
    id: 'hero-06',
    src: '/output_v2/desktop/scuba_diver_landscape_1920x1080.jpg',
    desktopSrc: '/output_v2/desktop/scuba_diver_landscape_1920x1080.jpg',
    mobileSrc: '/output_v2/enhanced/WhatsApp%20Image%202026-10-31%20at%2014.03.37_enhanced.jpg',
    alt: 'Sushill Waddhwa scuba diving underwater holding a guide line',
    isTemporaryAsset: true,
    assetSlotName: 'Hero Slide 6 (Desktop & Mobile)',
  },
];

export const aboutImage = {
  src: '/images/01-about.jpg',
  alt: 'Sushill Waddhwa — Founder & CMD of Platinum World Grroup',
  width: 1086,
  height: 1448,
};

export const aboutSegment = {
  title: '82 countries and 2,040+ luxury hotels',
  paragraph:
    'His work has taken him across 82 countries and 2,040+ luxury hotels, building extensive relationships with hotels, destinations, planners and hospitality leaders worldwide. He is constantly exploring new hotels and destinations to promote for events, destination weddings, celebrations and luxury travel.',
};

export interface VentureItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  imageSrc?: string;
  assetSlotName: string;
  isPendingAsset: boolean;
}

export const ventures: VentureItem[] = [
  {
    id: 'venture-pwg',
    name: 'Platinum World Grroup',
    badge: 'Flagship Enterprise',
    tagline: '500+ Destinations | 100+ Countries | One Call Away',
    description:
      'A global B2B company serving event, wedding, celebration and travel planners through luxury hotel buyouts, group bookings, destination services and experiences across India, Sri Lanka, Asia, Dubai, the Middle East, Monaco, Europe, the UK and beyond. Its intellectual properties include WedTalks Forum, launched in Colombo and expanding internationally, and the forthcoming Global Wedding Festival.',
    imageSrc: '',
    assetSlotName: 'Platinum World Grroup Enterprise',
    isPendingAsset: false,
  },
  {
    id: 'venture-artoso',
    name: 'Artoso Hospitality Corp',
    badge: 'Boutique Hospitality',
    tagline: 'Global Footprint. Local Flair. Luxury Boutique Hotels Worldwide.',
    description:
      'An AI-powered lifestyle company redefining luxury hospitality through distinctive boutique hotels and resorts in key destinations worldwide, creating experiences beyond conventional hospitality.',
    imageSrc: '',
    assetSlotName: 'Artoso Hospitality Corp',
    isPendingAsset: false,
  },
  {
    id: 'venture-pictures',
    name: 'Platinum World Pictures',
    badge: 'Media & Production',
    tagline: 'Creating content that drives business',
    description:
      'A media, film and entertainment venture producing premium content and AI-powered videos for luxury brands, hotels, tourism boards and event companies. Services include brand campaigns, destination films, wedding films, social media content and digital marketing assets. Vertical-format micro web series are in development.',
    imageSrc: '',
    assetSlotName: 'Platinum World Pictures Media',
    isPendingAsset: false,
  },
  {
    id: 'venture-lifestyle',
    name: 'Platinum World Lifestyle',
    badge: 'Curated Advisory',
    tagline: 'Advisory for Lifestyle solutions',
    description:
      'A discreet lifestyle advisory service connecting ultra-high-net-worth individuals with trusted specialists for private aviation, superyachts, luxury real estate, citizenship and residency advisory, and bespoke lifestyle concierge services.',
    imageSrc: '',
    assetSlotName: 'Platinum World Lifestyle',
    isPendingAsset: false,
  },
  {
    id: 'venture-investments',
    name: 'Family Office Investments',
    badge: 'Strategic Capital',
    tagline: 'Real Estate, Equities, Start-ups',
    description:
      'An active portfolio of real estate holdings and investments across hospitality, energy, technology, AI, finance and other strategic sectors, with an ongoing mandate for high-growth opportunities and innovative global ventures.',
    imageSrc: '',
    assetSlotName: 'Family Office Investments Portfolio',
    isPendingAsset: false,
  },
];

export const collaborationCategories = [
  'Luxury hotels and resorts',
  'Tourism boards and destinations',
  'Travel',
  'Automotive',
  'Watches',
  'Fashion',
  'Eyewear',
  'Wellness and lifestyle',
];

export interface CollaborationBrand {
  id: string;
  name: string;
  imageSrc: string;
  assetSlotName: string;
  isPendingAsset: boolean;
}

export const campaigns: CollaborationBrand[] = [
  {
    id: 'collab-one-only',
    name: 'One&Only One Zabeel',
    imageSrc: '/images/02-one-and-only-one-zabeel.jpg',
    assetSlotName: 'One&Only One Zabeel',
    isPendingAsset: false,
  },
  {
    id: 'collab-six-senses',
    name: 'Six Senses Zighy Bay',
    imageSrc: '/images/05-itc-ratnadipa-colombo.jpg',
    assetSlotName: 'Six Senses Zighy Bay',
    isPendingAsset: false,
  },
  {
    id: 'collab-the-lana',
    name: 'Brand Collab with The Lana By Dorchester Collection Dubai',
    imageSrc: '/images/04-brand-collab-the-lana-by-dorchester-collection-dubai.jpg',
    assetSlotName: 'Brand Collab with The Lana By Dorchester Collection Dubai',
    isPendingAsset: false,
  },
  {
    id: 'collab-itc-ratnadipa',
    name: 'ITC Ratnadipa Colombo',
    imageSrc: '/images/03-six-senses-zighy-bay.jpg',
    assetSlotName: 'ITC Ratnadipa Colombo',
    isPendingAsset: false,
  },
  {
    id: 'collab-kahanda-kanda',
    name: 'Kahanda Kanda Resort, Sri Lanka',
    imageSrc: '/images/06-kahanda-kanda-resort-sri-lanka.jpg',
    assetSlotName: 'Kahanda Kanda Resort, Sri Lanka',
    isPendingAsset: false,
  },
  {
    id: 'collab-greek-god',
    name: 'Greek God Men’s Cologne',
    imageSrc: '/images/07-greek-god-mens-cologne.jpg',
    assetSlotName: 'Greek God Men’s Cologne',
    isPendingAsset: false,
  },
  {
    id: 'collab-switzerland',
    name: 'Switzerland Tourism',
    imageSrc: '/images/09-switzerland-tourism.jpg',
    assetSlotName: 'Switzerland Tourism',
    isPendingAsset: false,
  },
  {
    id: 'collab-finland',
    name: 'Brand Collab with Finland Tourism',
    imageSrc: '/images/10-brand-collab-finland-tourism.jpg',
    assetSlotName: 'Brand Collab with Finland Tourism',
    isPendingAsset: false,
  },
  {
    id: 'collab-gulfstream',
    name: 'Gulfstream Private Jets',
    imageSrc: '/images/08-gulfstream-private-jets.jpg',
    assetSlotName: 'Gulfstream Private Jets',
    isPendingAsset: false,
  },
];

export interface MediaCoverageItem {
  id: string;
  publication: string;
  category: string;
  headline: string;
  description: string;
  href: string;
  dateBadge: string;
  imageSrc: string;
  assetSlotName: string;
  isPendingAsset: boolean;
}

export const mediaCoverageItems: MediaCoverageItem[] = [
  {
    id: 'media-01-cio-times',
    publication: 'CIO TIMES',
    category: 'Cover Story',
    headline: 'Visionary Leadership: Building Global Conglomerate Platinum World Grroup',
    description:
      'Founder & CMD Sushill Waddhwa discusses the pioneering journey of launching bespoke incentive travel, luxury destination weddings, and international MICE operations across 82+ countries.',
    href: '#',
    dateBadge: 'CIO TIMES',
    imageSrc: '/images/11-cio-times.jpg',
    assetSlotName: 'CIO TIMES',
    isPendingAsset: false,
  },
  {
    id: 'media-02-exotica',
    publication: 'EXOTICA',
    category: 'Special Edition',
    headline: 'The New Era of Destination Celebrations & Global Luxury Hospitality',
    description:
      'Executive insights on shifting paradigms in ultra-luxury weddings, bespoke destination curations, and turnkey event advisory in over 80 countries.',
    href: '#',
    dateBadge: 'EXOTICA',
    imageSrc: '/images/12-exotica.jpg',
    assetSlotName: 'EXOTICA',
    isPendingAsset: false,
  },
  {
    id: 'media-03-bombay-times',
    publication: 'TIMES OF INDIA',
    category: 'Bombay Times',
    headline: 'A Unique Concept in Corporate Entertainment & Talk Show Formats',
    description:
      'Featuring Sushill Waddhwa’s innovative corporate entertainment talk show concept, curating international celebrity entertainment, MICE galas, and bespoke luxury productions.',
    href: '#',
    dateBadge: 'Bombay Times',
    imageSrc: '/images/13-times-of-india-bombay-times.jpg',
    assetSlotName: 'TIMES OF INDIA — Bombay Times',
    isPendingAsset: false,
  },
  {
    id: 'media-04-delhi-times',
    publication: 'TIMES OF INDIA',
    category: 'Delhi Times',
    headline: 'High-Profile Milestone Weddings: Tendulkars & Dignitaries in Attendance',
    description:
      'Special feature on high-profile milestone destination weddings, hosting sports and business royalty, curated and managed internationally by Platinum World Grroup.',
    href: '#',
    dateBadge: 'Delhi Times',
    imageSrc: '/images/14-times-of-india-delhi-times.jpg',
    assetSlotName: 'TIMES OF INDIA — Delhi Times',
    isPendingAsset: false,
  },
  {
    id: 'media-05-economic-times',
    publication: 'ECONOMIC TIMES',
    category: 'Corporate & Luxury',
    headline: 'The World Is Not Enough: 13 Years of Luxurious & Premium Experiences',
    description:
      'The Economic Times highlights Platinum World Grroup’s trailblazing portfolio of luxury hotel buyouts, grand destination celebrations, and international client engagements.',
    href: '#',
    dateBadge: 'ECONOMIC TIMES',
    imageSrc: '/images/15-economic-times.jpg',
    assetSlotName: 'ECONOMIC TIMES',
    isPendingAsset: false,
  },
];

export const contactDetails = {
  name: 'Sushill Waddhwa',
  role: 'Founder & CMD',
  company: 'Platinum World Grroup',
  email: 'info@platinumworld.net',
  instagramHandle: '@sushillwaddhwa',
  instagramUrl: 'https://instagram.com/sushillwaddhwa',
  linkedin: 'Sushill Waddhwa',
  linkedinUrl: 'https://www.linkedin.com/in/sushillwaddhwa/',
};
