# Zipplit — Pre-Launch Landing Page PRD

## Original Problem Statement
Redesign the existing Zipplit pre-launch website into a beautiful, interactive, clean-looking landing page. Take design inspiration from 3 reference images (fitprep, GreenBite, FoodHue). Use the brand kit PDF for colours and body text font. Choose a distinctive heading font. Follow the SKILL.md methodology. Ensure mobile-first responsive design, SEO/accessibility best practices, and copy improvements.

## Architecture & Tech Stack
- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion animations
- **Fonts**: Fraunces (headings, serif, editorial) + Nunito (body, from brand kit)
- **Deployment**: Netlify-ready (netlify.toml configured)
- **Build**: SPA with Express server for API routes

## Brand Identity
- **Primary**: Deep Teal #0A4849
- **Accent**: Fresh Lime #9BCF55
- **Background**: Pure White #FFFFFF, Cream #F4F1EA
- **Typography**: Fraunces (headings), Nunito (body)

## User Personas
1. **Potential Employees**: 0-2 years experience, looking for career opportunities at a credible startup
2. **Future Customers**: Working professionals, frequent travelers, busy families in Kochi seeking preservative-free meal delivery

## Core Requirements (Static)
- [x] Hero section with video background, brand messaging, CTAs
- [x] "Launching Soon" marquee bar
- [x] "Fresh Food First" manifesto section
- [x] "Who It's For" audience cards (bento grid)
- [x] "How Zipplit Does It" process cards (Source Fresh, Cook Daily, Deliver Warm)
- [x] "Grow With Us" careers section with 4 role cards linking to Google Form
- [x] Newsletter signup form
- [x] Footer with social links, quick links, ZIPPLIT watermark
- [x] Mobile-first responsive design
- [x] SEO meta tags

## What's Been Implemented (Feb 11, 2026)
- **Complete landing page redesign** with Fraunces + Nunito typography
- **Fixed navigation**: Floating glassmorphic navbar with smooth scroll, mobile hamburger menu
- **Hero section**: Video background with teal overlay, gradient text accent, dual CTAs, scroll indicator
- **Manifesto section**: Cream background with grain texture, philosophy tags
- **Audience section**: Bento grid with asymmetric cards, icon badges, hover animations
- **How It Works section**: 3 numbered feature cards with CDN images, icon + text
- **Careers section**: 4 job role cards linking to Google Form, "Apply Now" CTA
- **Newsletter section**: Email input with validation, success state
- **Footer**: Brand info, quick links, social icons, location, copyright, ZIPPLIT watermark
- **Animations**: Framer Motion fade-up reveals, hover lift effects, marquee scroll
- **Responsive**: Tested at 390px mobile and 1920px desktop — 100% pass rate
- **Accessibility**: data-testid on all interactive elements, aria-labels, semantic HTML

## Testing Status
- Iteration 1: 95% (mobile hamburger menu visibility issue)
- Iteration 2: 100% (all issues fixed)

## Prioritized Backlog
### P0 (Critical)
- None remaining

### P1 (High)
- Add actual social media URLs when available
- Connect newsletter to backend email service (e.g., SendGrid, Mailchimp)
- Add favicon with Zipplit brand icon

### P2 (Medium)
- Add testimonials/social proof section
- Add a "Why Zipplit" feature comparison
- Add page load performance optimization (lazy video loading)
- Add analytics tracking (Google Analytics / Mixpanel)

## Next Tasks
- User review and feedback on design
- Potential copy iterations
- Social media URL integration
- Newsletter backend integration
