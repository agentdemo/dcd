# Future Assets Required — Developer & Client Asset Specification

This document details all final photography, editorial assets, and media specifications required for the Sushill Waddhwa website. The complete layout, responsive picture elements, 3D typography, alternating card structures, and image replacement systems have been fully built and tested.

All assets listed below can be dropped directly into the `/public/` directory or updated in [`src/data/siteContent.ts`](file:///src/data/siteContent.ts) with zero code refactoring needed.

---

## 1. Hero / Banner Slideshow Images

The hero slideshow is engineered with responsive `<picture>` tags serving device-tailored assets to guarantee optimal resolution and prevent layout shifts.

| Asset Slot | Location / Field in `siteContent.ts` | Recommended Desktop Specs | Recommended Mobile Specs | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Slide 1** | `heroSlides[0].desktopSrc` / `mobileSrc` | 1920 × 1080 (16:9 Landscape) | 1080 × 1920 or 800 × 1200 (Portrait) | Primary hero image |
| **Hero Slide 2** | `heroSlides[1].desktopSrc` / `mobileSrc` | 1920 × 1080 (16:9 Landscape) | 1080 × 1920 or 800 × 1200 (Portrait) | Hero slide 2 |
| **Hero Slide 3** | `heroSlides[2].desktopSrc` / `mobileSrc` | 1920 × 1080 (16:9 Landscape) | 1080 × 1920 or 800 × 1200 (Portrait) | Hero slide 3 |
| **Hero Slide 4** | `heroSlides[3].desktopSrc` / `mobileSrc` | 1920 × 1080 (16:9 Landscape) | 1080 × 1920 or 800 × 1200 (Portrait) | Hero slide 4 |
| **Hero Slide 5** | `heroSlides[4].desktopSrc` / `mobileSrc` | 1920 × 1080 (16:9 Landscape) | 1080 × 1920 or 800 × 1200 (Portrait) | Hero slide 5 |
| **Hero Slide 6** | `heroSlides[5].desktopSrc` / `mobileSrc` | 1920 × 1080 (16:9 Landscape) | 1080 × 1920 or 800 × 1200 (Portrait) | Hero slide 6 |
| **Final Alternate Hero Image** | Configurable fallback / alternate | 1920 × 1080 (16:9 Landscape) | 1080 × 1920 (Portrait) | Alternate high-resolution hero master shot |

> **Format:** Optimized WebP or JPG, progressive compression, sRGB color profile.

---

## 2. About Section Image

| Asset Slot | Current File | Target Location | Recommended Dimensions | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Final About-Section Image** | `/images/About/hero-4.jpg` | `/public/images/About/about-final.jpg` | 1200 × 1500 (4:5 Aspect Ratio) | Formal executive editorial portrait of Sushill Waddhwa |

---

## 3. Business Ventures Section Images

Each card in the Business Ventures section contains a dedicated responsive image slot with hover transitions.

| Venture Card | Field in `siteContent.ts` | Target Aspect Ratio | Recommended Resolution | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Platinum World Grroup** | `ventures[0].imageSrc` | 16:10 | 1200 × 750 | Flagship B2B luxury travel, buyouts & milestone events |
| **Artoso Hospitality Corp** | `ventures[1].imageSrc` | 16:9 | 1200 × 675 | AI-driven boutique hotel & resort curation |
| **Platinum World Pictures** | `ventures[2].imageSrc` | 16:9 | 1200 × 675 | Film, premium content production & digital campaigns |
| **Platinum World Lifestyle** | `ventures[3].imageSrc` | 16:9 | 1200 × 675 | Bespoke luxury lifestyle, concierge & advisory |
| **Family Office Investments** | `ventures[4].imageSrc` | 16:9 | 1200 × 675 | Private equity, real estate, hospitality & tech capital |

---

## 4. Gulfstream / Private-Jet Showcase Image

A dedicated cinematic showcase slot in the Business Ventures section is prepared specifically for client-provided aviation photography.

| Asset Slot | Field in `siteContent.ts` | Target Aspect Ratio | Recommended Resolution | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Gulfstream / Private-Jet Asset** | `privateJetShowcase.imageSrc` | 21:9 or 16:9 Cinematic | 1920 × 820 or 1920 × 1080 | Authentic Gulfstream private-jet exterior/interior photo provided by client |

*Note: In accordance with instructions, no AI-generated or generic stock private-jet assets have been used.*

---

## 5. Brand Collaborations Images & Assets

All collaboration cards feature a portrait 4:5 editorial frame with sequential numbers and alternating ivory/white backgrounds.

| Collaboration Card | Field in `siteContent.ts` | Aspect Ratio | Dimensions | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Lana By** | `campaigns[0].imageSrc` | 4:5 | 1000 × 1250 | Client asset pending |
| **One&Only One Za'abeel** | `campaigns[1].imageSrc` | 4:5 | 1000 × 1250 | Client campaign photograph pending |
| **Six Senses Zighy Bay** | `campaigns[2].imageSrc` | 4:5 | 1000 × 1250 | Client campaign photograph pending |
| **Cinnamon Life at City of Dreams** | `campaigns[3].imageSrc` | 4:5 | 1000 × 1250 | Client campaign photograph pending |
| **ITC Ratnadipa** | `campaigns[4].imageSrc` | 4:5 | 1000 × 1250 | Client campaign photograph pending |
| **Kahanda Kanda** | `campaigns[5].imageSrc` | 4:5 | 1000 × 1250 | Client campaign photograph pending |
| **Perfume-Brand Collaboration** | `campaigns[6].imageSrc` | 4:5 | 1000 × 1250 | Perfume brand name, logo & product photograph pending from client |
| **All Other Brand Collaborations** | `campaigns[7].imageSrc` | 4:5 | 1000 × 1250 | Additional brand partners supplied later |
| **Final Brand Logos** | Optional overlay in cards | Transparent SVG / PNG | Vector / 400 × 200 | Clean monochrome or gold brand marks |

---

## 6. Media Section Coverage Assets

The media section contains 4 editorial cards structured for real publications, articles, and interviews.

| Slot | Headline Field | Publication Field | Image Field (`imageSrc`) | Link Field (`href`) |
| :--- | :--- | :--- | :--- | :--- |
| **Media Item 01** | `mediaCoverageItems[0].headline` | `publication` | 16:10 (800 × 500) | Full article URL |
| **Media Item 02** | `mediaCoverageItems[1].headline` | `publication` | 16:10 (800 × 500) | Full article URL |
| **Media Item 03** | `mediaCoverageItems[2].headline` | `publication` | 16:10 (800 × 500) | Full article URL |
| **Media Item 04** | `mediaCoverageItems[3].headline` | `publication` | 16:10 (800 × 500) | Full article URL |

Required client input for each media item:
1. Publication Name (e.g., *Forbes Middle East*, *Robb Report*, *Architectural Digest*)
2. Article Headline
3. Executive Summary / Excerpt
4. Cover / Tear-sheet Image (800 × 500)
5. Live Canonical URL link

---

## 7. How to Update Assets Once Provided

To update any asset, simply:
1. Place image files into `/public/images/` (e.g. `/public/images/collaborations/lana-by.jpg`).
2. Open [`src/data/siteContent.ts`](file:///src/data/siteContent.ts) and set the corresponding `imageSrc` property (e.g. `imageSrc: '/images/collaborations/lana-by.jpg'`).
3. Set `isPendingAsset: false`.
