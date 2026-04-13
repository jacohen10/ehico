# EHI Website Rebuild + SEO Content Plan

## Context
EHI (ehico.com) is dad's AV products and installation company, founded 1977, based in Norfolk, VA. Current site is a single-page HTML/jQuery site — dated, no blog, no SEO content. The goal is to rebuild it as a modern Next.js site with two audiences: (1) local B2B/B2C in Hampton Roads for services, and (2) national government/GSA contract work. A data-driven content plan using DataForSEO keyword research will take the site from 0 to 50 organic clicks/week.

**GSA Contract**: 47QSMS25D00A6, SIN 334310 (Audio and Video Equipment Manufacturing)
**Services**: TV/display installation, LED fixtures, shade installations, security cameras, handyman work, expanding
**Domain**: Keep ehico.com

---

## Phase 1: Keyword Research

### DataForSEO Setup
1. Create account at dataforseo.com, deposit $50 (pay-as-you-go)
2. Get API login/password from dashboard

### Keyword Research Script
Build a standalone script in the Next.js repo (`/scripts/keyword-research.ts`) that:

1. **Calls keyword suggestions endpoint** (`/v3/dataforseo_labs/google/keyword_suggestions/live`) for ~30 seed keywords across categories:
   - **Local residential**: `tv installation norfolk va`, `tv mounting virginia beach`, `tv wall mount installation near me`, `home theater installation hampton roads`, `tv above fireplace installation`, `outdoor tv installation`
   - **Local commercial**: `commercial av installation norfolk`, `conference room tv installation`, `digital signage installation virginia`, `restaurant menu display installation`
   - **LED**: `led fixture installation norfolk`, `commercial led lighting installation`, `led retrofit virginia beach`
   - **Shades**: `motorized shade installation norfolk`, `smart blinds installation virginia beach`, `window shade installer hampton roads`
   - **Security cameras**: `security camera installation norfolk va`, `home security camera installer virginia beach`, `commercial security camera installation`, `surveillance system installation hampton roads`
   - **Government/GSA (national)**: `gsa av equipment`, `gsa schedule audio visual`, `government audio visual installation`, `taa compliant displays`, `government digital signage`
   - Use `location_name: "Norfolk,Virginia,United States"` for local, `"United States"` for national

2. **Runs bulk keyword difficulty** (`/v3/dataforseo_labs/google/bulk_keyword_difficulty/live`) on top 500-1000 results

3. **Scores and ranks** with: `opportunity_score = (volume * (1 - difficulty/100)) / max(cpc, 0.5)`
   - Filter: difficulty < 40, volume >= 20/mo
   - Group by topic cluster
   - Output ranked CSV with: keyword, volume, difficulty, cpc, intent, score, suggested content type

**Estimated cost**: ~$5-8 of the $50 deposit

---

## Phase 2: Next.js Site Scaffold

### Tech Stack
- **Next.js** (App Router, TypeScript, `src/` directory)
- **Tailwind CSS v4** + `@tailwindcss/typography`
- **MDX** for blog posts (`@next/mdx`, stored in `/content/blog/`)
- **Vercel** for hosting
- **Resend** for contact form emails

### Route Structure
```
/                              Home (SSG)
/about                         Company history since 1977 (SSG)
/services/                     Services hub (SSG)
  /tv-installation
  /commercial-av
  /healthcare-av
  /led-fixtures
  /shade-installation
  /security-cameras
/government/                   GSA section (SSG)
  /gsa-contract                Contract 47QSMS25D00A6, SIN 334310
  /capabilities                Past performance, certifications
/service-areas/                Local SEO pages (SSG)
  /norfolk
  /virginia-beach
  /chesapeake
  /newport-news
  /hampton
  /suffolk
  /portsmouth
  /williamsburg
/blog/                         Blog index (SSG)
  /[slug]                      Posts from MDX files (SSG)
/contact                       Contact + quote form (SSG page, Server Action for form)
/manufacturers                 Partner brands (SSG)
/sitemap.xml                   Dynamic via sitemap.ts
```

All pages are statically generated. Government section uses formal language + contract details. Services/blog section uses warmer local-business language.

### Blog Content System
- MDX files in `/content/blog/` with exported metadata (title, description, date, category, tags)
- Blog index reads all MDX files, sorts by date
- `generateStaticParams` + `generateMetadata` for each post
- `Article` JSON-LD on each post
- Tailwind typography (`prose`) for styling

---

## Phase 3: Core Pages

Build in this order:
1. **Shared components**: nav, footer, CTA banner, quote form, service card
2. **Homepage**: hero, services overview, trust signals (est. 1977, GSA contract holder), service area
3. **Service pages** (7): each 800-1200 words, `Service` JSON-LD
4. **Service area pages** (8-9): templated with unique per-city content, `LocalBusiness` JSON-LD per city
5. **Government section**: GSA landing, contract details (47QSMS25D00A6), capabilities
6. **Contact/quote page**: Server Action to send email via Resend
7. **About + manufacturers pages**
8. **JSON-LD**: `LocalBusiness` schema on homepage/service pages with NAP, hours, service area

---

## Phase 4: Blog Launch + Content Cadence

### First batch (8 posts over 4 weeks, 2/week):
- 2x "how much does X cost in Hampton Roads" (highest intent)
- 2x "how to" guides (traffic builders)
- 2x local service posts ("TV installation in [city]")
- 1x commercial/B2B post
- 1x comparison/buying guide

### Ongoing: 1 post/week, Claude drafts, Josh reviews and publishes

### AI Content Workflow:
1. Pick keyword from research spreadsheet
2. Claude drafts MDX file following SEO template (H1 with keyword, H2 subtopics, internal links, CTA)
3. Review, add images, commit
4. Push → Vercel rebuilds → live

---

## Phase 5: Local SEO + Growth

### Google Business Profile (do immediately):
- Claim/update listing at 4016 Granby Street, Norfolk, VA 23504
- Primary category: "Audio Visual Equipment Supplier"
- Add secondary categories for each service
- Upload project photos, post weekly linking to blog

### NAP Consistency:
- EHI, 4016 Granby Street, Norfolk, VA 23504, (757) 640-0243
- List on: Yelp, BBB, Angi, HomeAdvisor, Houzz, local Chamber of Commerce

### 301 Redirects:
- Current site is single-page with anchor links — just ensure ehico.com resolves cleanly to new site

### Timeline to 50 clicks/week:
| Month | Clicks/week | Posts live |
|-------|-------------|------------|
| 1-2   | 0-2         | 0 (building) |
| 3-4   | 5-15        | 8-12 |
| 5-6   | 15-35       | 20-24 |
| 6-9   | 35-50+      | 30+ |
