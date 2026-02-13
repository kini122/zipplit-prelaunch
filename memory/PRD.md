# Zipplit — Pre-Launch Landing Page PRD

## Original Problem Statement
Redesign the existing Zipplit pre-launch website into a beautiful, interactive, clean-looking landing page. Take design inspiration from 3 reference images (fitprep, GreenBite, FoodHue). Use the brand kit PDF for colours and body text font. Choose a distinctive heading font. Follow the SKILL.md methodology. Ensure mobile-first responsive design, SEO/accessibility best practices, and copy improvements. Must be deployable as a static site.

## Architecture & Tech Stack
- **Framework**: Vite 7 + React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion animations
- **Fonts**: DM Serif Display (headings, serif) + Nunito (body + brand name, sans-serif)
- **Deployment**: Static build via `npm run build:client` → `/dist/spa/` (Netlify-ready via netlify.toml)
- **Build**: SPA with Express server for API routes

## Brand Identity
- **Primary**: Deep Teal #0A4849
- **Accent**: Fresh Lime #9BCF55
- **Background**: Pure White #FFFFFF, Cream #F4F1EA, Surface #F8FAF8
- **Typography**: DM Serif Display (headings), Nunito (body + brand name "Zipplit")

## User Personas
1. **Potential Employees**: 0-2 years experience, looking for career opportunities at a credible startup
2. **Future Customers**: Working professionals, frequent travelers, busy families in Kochi seeking preservative-free meal delivery

## Core Requirements (Static)
- [x] Hero section with high-quality static food image, brand messaging, CTAs
- [x] "Launching Soon" marquee bar
- [x] "Fresh Food First" manifesto section
- [x] "Who It's For" audience cards (bento grid)
- [x] "How Zipplit Does It" process cards (Source Fresh, Cook Daily, Deliver Warm)
- [x] "Grow With Us" careers section with 4 role cards linking to Google Form
- [x] Newsletter signup form
- [x] Footer with social links, quick links, ZIPPLIT watermark
- [x] Mobile-first responsive design
- [x] Full SEO: meta tags, OG/Twitter cards, JSON-LD structured data, canonical URL, proper heading hierarchy
- [x] Full WCAG: skip-to-content, aria-labels, landmarks, focus-visible, reduced motion, form labels, alt text
- [x] Static build deployable

## What's Been Implemented

### V1 (Feb 11, 2026)
- Complete landing page redesign with Fraunces + Nunito
- All 6 sections, video hero background, framer motion animations
- Testing: 100% pass

### V2 (Feb 11, 2026) — SEO & WCAG Overhaul
- **Hero**: Replaced video with high-quality static Unsplash image (fresh produce)
- **Font**: Changed heading font from Fraunces to DM Serif Display; "Zipplit" brand text in Nunito (sans)
- **SEO**: Added JSON-LD Organization + WebSite structured data, OG tags, Twitter cards, canonical URL, theme-color, proper meta descriptions, semantic heading hierarchy (single H1)
- **WCAG**: Skip-to-main-content link, aria-labelledby on all sections, semantic landmarks (header[role=banner], main, footer[role=contentinfo]), nav[aria-label], aria-expanded/aria-controls on mobile menu, <label> for form inputs, focus-visible styles, prefers-reduced-motion support, aria-hidden on decorative elements, descriptive alt text, useReducedMotion hook for animations
- **Static build**: Verified `npm run build:client` → `/dist/spa/` (3.45KB HTML, 70KB CSS, 448KB JS gzipped to ~145KB)
- Testing: **100% across SEO, WCAG, mobile, and functionality**

## Testing Status
- Iteration 1: 95% (mobile hamburger menu visibility)
- Iteration 2: 100% (mobile fix verified)
- Iteration 3: 100% (SEO 100%, WCAG 100%, Mobile 100%, Functionality 100%)

## Prioritized Backlog
### P0 (Critical)
- None remaining

### P1 (High)
- Add actual social media URLs when available
- Connect newsletter to backend email service (SendGrid, Mailchimp, Resend)
- Add proper favicon with Zipplit brand icon

### P2 (Medium)
- Add testimonials/social proof section
- Add Open Graph image for social sharing
- Add performance monitoring (Web Vitals)
- Add analytics (Google Analytics / Mixpanel)

## Next Tasks
- User review and feedback on design
- Newsletter backend integration
- Social media URL integration
- OG image creation for social sharing
