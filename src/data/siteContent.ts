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

/**
 * Temporary hero slideshow images for layout verification.
 * Final client-provided assets (6 desktop 1920x1080 and 6 mobile portrait versions) will replace these.
 */
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

export const aboutParagraphs = [
  'Sushill Waddhwa is an international entrepreneur, investor, and Founder & CMD of Platinum World Grroup. He divides his time between Mumbai, Dubai, Sri Lanka and Europe.',
  'His journey began with his first event in the first year of Hotel Management in 1989 and evolved into an international career spanning events, weddings, celebrations, hospitality, luxury hotels, destinations and travel.',
  'His work has taken him across 82 countries and 2,040+ luxury hotels, building extensive relationships with hotels, destinations, planners and hospitality leaders worldwide. He is constantly exploring new hotels and destinations to promote for events, destination weddings, celebrations and luxury travel.',
  'His entrepreneurial interests span events and wedding tourism, hospitality, investments, lifestyle experiences, media and entertainment. Beyond business, he is passionate about travel, fitness, style, hotels, astrology, numerology and discovering new experiences. He continues to explore new ventures, creative storytelling and emerging technologies.',
];

export const aboutStats = [
  { value: '82', label: 'Countries' },
  { value: '2,040+', label: 'Luxury hotels' },
  { value: '1989', label: 'The Journey Begins' },
];

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
    assetSlotName: 'Platinum World Grroup Enterprise Image Slot',
    isPendingAsset: true,
  },
  {
    id: 'venture-artoso',
    name: 'Artoso Hospitality Corp',
    badge: 'Boutique Hospitality',
    tagline: 'Global Footprint. Local Flair. Luxury Boutique Hotels Worldwide.',
    description:
      'An AI-powered lifestyle company redefining luxury hospitality through distinctive boutique hotels and resorts in key destinations worldwide, creating experiences beyond conventional hospitality.',
    imageSrc: '',
    assetSlotName: 'Artoso Hospitality Corp Image Slot',
    isPendingAsset: true,
  },
  {
    id: 'venture-pictures',
    name: 'Platinum World Pictures',
    badge: 'Media & Production',
    tagline: 'Creating content that drives business',
    description:
      'A media, film and entertainment venture producing premium content and AI-powered videos for luxury brands, hotels, tourism boards and event companies. Services include brand campaigns, destination films, wedding films, social media content and digital marketing assets. Vertical-format micro web series are in development.',
    imageSrc: '',
    assetSlotName: 'Platinum World Pictures Media Image Slot',
    isPendingAsset: true,
  },
  {
    id: 'venture-lifestyle',
    name: 'Platinum World Lifestyle',
    badge: 'Curated Advisory',
    tagline: 'Advisory for Lifestyle solutions',
    description:
      'A discreet lifestyle advisory service connecting ultra-high-net-worth individuals with trusted specialists for private aviation, superyachts, luxury real estate, citizenship and residency advisory, and bespoke lifestyle concierge services.',
    imageSrc: '',
    assetSlotName: 'Platinum World Lifestyle Image Slot',
    isPendingAsset: true,
  },
  {
    id: 'venture-investments',
    name: 'Family Office Investments',
    badge: 'Strategic Capital',
    tagline: 'Real Estate, Equities, Start-ups',
    description:
      'An active portfolio of real estate holdings and investments across hospitality, energy, technology, AI, finance and other strategic sectors, with an ongoing mandate for high-growth opportunities and innovative global ventures.',
    imageSrc: '',
    assetSlotName: 'Family Office Investments Portfolio Image Slot',
    isPendingAsset: true,
  },
];

export interface PrivateJetShowcase {
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  imageSrc?: string;
  assetSlotName: string;
  isPendingAsset: boolean;
}

export const privateJetShowcase: PrivateJetShowcase = {
  eyebrow: 'Private Aviation Advisory',
  title: 'Gulfstream & Bespoke Air Travel',
  tagline: 'Uncompromising Mobility for Global Leaders',
  description:
    'Dedicated private jet charter, bespoke routing, and comprehensive aviation advisory connecting prime global corridors. Prepared for the client-provided Gulfstream image asset.',
  imageSrc: '',
  assetSlotName: 'Client-Provided Gulfstream / Private-Jet Asset Slot',
  isPendingAsset: true,
};

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
  category: string;
  imageSrc?: string;
  assetSlotName: string;
  isPendingAsset: boolean;
}

export const campaigns: CollaborationBrand[] = [
  {
    id: 'collab-lana-by',
    name: 'Lana By',
    category: 'Luxury Hospitality & Living',
    imageSrc: '',
    assetSlotName: 'Lana By Asset Slot',
    isPendingAsset: true,
  },
  {
    id: 'collab-one-only',
    name: "One&Only One Za'abeel",
    category: 'Ultra-Luxury Resort & Urban Sanctuary',
    imageSrc: '',
    assetSlotName: 'One&Only Asset Slot',
    isPendingAsset: true,
  },
  {
    id: 'collab-six-senses',
    name: 'Six Senses Zighy Bay',
    category: 'Boutique Eco-Luxury Sanctuary',
    imageSrc: '',
    assetSlotName: 'Six Senses Asset Slot',
    isPendingAsset: true,
  },
  {
    id: 'collab-cinnamon-life',
    name: 'Cinnamon Life at City of Dreams',
    category: 'Integrated Resort & Entertainment Destination',
    imageSrc: '',
    assetSlotName: 'Cinnamon Life Asset Slot',
    isPendingAsset: true,
  },
  {
    id: 'collab-itc-ratnadipa',
    name: 'ITC Ratnadipa',
    category: 'Iconic Oceanfront Luxury Hospitality',
    imageSrc: '',
    assetSlotName: 'ITC Ratnadipa Asset Slot',
    isPendingAsset: true,
  },
  {
    id: 'collab-kahanda-kanda',
    name: 'Kahanda Kanda',
    category: 'Exclusive Boutique Estate & Sanctuary',
    imageSrc: '',
    assetSlotName: 'Kahanda Kanda Asset Slot',
    isPendingAsset: true,
  },
  {
    id: 'collab-perfume-brand',
    name: 'Haute Parfumerie & Fragrance Collaboration',
    category: 'Luxury Fragrance & Perfume Brand',
    imageSrc: '',
    assetSlotName: 'Perfume-Brand Collaboration Asset Slot (Client TBA)',
    isPendingAsset: true,
  },
  {
    id: 'collab-future-brand',
    name: 'Prestige Brand Partnership',
    category: 'Curated Brand Collaborations',
    imageSrc: '',
    assetSlotName: 'Additional Brand Collaboration Asset Slot (Client TBA)',
    isPendingAsset: true,
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
  imageSrc?: string;
  assetSlotName: string;
  isPendingAsset: boolean;
}

export const mediaCoverageItems: MediaCoverageItem[] = [
  {
    id: 'media-01',
    publication: 'International Hospitality Feature',
    category: 'Global Leadership',
    headline: 'Redefining Cross-Border Luxury Hospitality & Global Landmark Buyouts',
    description:
      'An executive exploration into international hotel acquisitions, luxury celebration curation, and market expansion across 82 nations.',
    href: '#',
    dateBadge: 'Editorial Feature',
    imageSrc: '',
    assetSlotName: 'Media Coverage Asset Slot 01',
    isPendingAsset: true,
  },
  {
    id: 'media-02',
    publication: 'Luxury Travel & Destinations',
    category: 'Curated Experiences',
    headline: 'The Art of Ultra-Luxury Destination Curation & Milestone Celebrations',
    description:
      'In-depth perspective on the future of high-net-worth experiential travel, private island retreats, and bespoke destination partnerships.',
    href: '#',
    dateBadge: 'Press Feature',
    imageSrc: '',
    assetSlotName: 'Media Coverage Asset Slot 02',
    isPendingAsset: true,
  },
  {
    id: 'media-03',
    publication: 'Family Office & Capital Review',
    category: 'Investment Strategy',
    headline: 'Family Office Investments: Strategic Capital in Hospitality, Real Estate & AI',
    description:
      'Navigating private wealth diversification, sustainable hospitality portfolios, and emerging tech frontiers in international markets.',
    href: '#',
    dateBadge: 'Executive Profile',
    imageSrc: '',
    assetSlotName: 'Media Coverage Asset Slot 03',
    isPendingAsset: true,
  },
  {
    id: 'media-04',
    publication: 'Prestige Lifestyle & Aviation',
    category: 'Private Aviation & Advisory',
    headline: 'Discreet Lifestyle Advisory: Private Jets, Superyachts and Global Mobility',
    description:
      'A masterclass on providing seamless, bespoke solutions for ultra-high-net-worth individuals across private aviation and luxury assets.',
    href: '#',
    dateBadge: 'Special Report',
    imageSrc: '',
    assetSlotName: 'Media Coverage Asset Slot 04',
    isPendingAsset: true,
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
