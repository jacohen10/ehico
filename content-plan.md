# EHI Co SEO Content Plan — 0 to 50+ Organic Clicks/Week

## Context
EHI Co (ehico.com) is an AV installation company in Norfolk, VA (est. 1977). The site is built and deployed with 6 service pages, 8 service area pages, government section, and 5 blog posts. This plan adds ~40 pieces of content and the infrastructure to support them, targeting 50+ organic clicks/week within 6-9 months.

## Current Content Inventory
- 6 service pages (`/services/[slug]`)
- 8 service area pages (`/service-areas/[city]`)
- 5 blog posts (TV cost, fireplace guide, digital signage, security cameras, LED retrofit)
- Government section (GSA contract, capabilities)
- About, manufacturers, contact

## SEO Gaps to Fix First (Infrastructure)

Before writing content, these need to be built:

### 1. `InlineCTA` MDX component
Usable inside blog posts. Customizable heading/text. Links to `/contact`.
- File: `src/components/marketing/inline-cta.tsx`
- Register in `mdx-components.tsx`

### 2. `RelatedArticles` component
Auto-populated from `relatedSlugs` in post metadata. Shows 2-3 related post cards at bottom of each post, above the full-width CTA.
- Add `relatedSlugs` field to `BlogPostMeta` interface in `src/lib/blog/mdx.ts`
- New component: `src/components/marketing/related-articles.tsx`
- Wire into `src/app/(marketing)/blog/[slug]/page.tsx`

### 3. `TableOfContents` component
Auto-generated from headings for pillar pages and long posts. Sticky sidebar on desktop, collapsible on mobile.
- File: `src/components/marketing/table-of-contents.tsx` (client component)

### 4. FAQ schema on blog posts
Add optional `faqs` field to blog metadata. Render FAQ section and inject `FAQPage` JSON-LD when present.
- Update `BlogPostMeta` in `src/lib/blog/mdx.ts`
- Update `src/app/(marketing)/blog/[slug]/page.tsx`

### 5. Breadcrumbs
Add breadcrumb navigation to service pages, service area pages, blog posts, and government pages. Include `BreadcrumbList` JSON-LD.
- New component: `src/components/ui/breadcrumbs.tsx`

### 6. Blog tag/category pages
Add `/blog/category/[category]` route for filtering posts.
- File: `src/app/(marketing)/blog/category/[category]/page.tsx`

### 7. `lastUpdated` field on blog posts
Signals freshness to Google. Display on page and include in Article JSON-LD `dateModified`.

### 8. Open Graph images
Default OG image for the site + per-page OG metadata. Even a simple branded template helps click-through from social/search.
- Add `opengraph-image.tsx` using Next.js image generation, or a static default image.

---

## Content Plan (40 pieces)

### Writing Guidelines (All Content)
- **Internal links**: Every article links to 2-4 other EHI Co pages (related articles, service pages, service area pages, contact). Use descriptive anchor text matching target keywords.
- **External links**: 1-3 outbound links to authoritative sources (manufacturer sites, industry data, government resources).
- **CTA**: Each article ends with an `<InlineCTA>` component. Customize heading/text to match the article topic.
- **Frontmatter**: Always fill in `relatedSlugs` (2-3 related articles) so Related Articles populates automatically.
- **FAQ section**: Include 3-5 FAQs at the bottom of every post for FAQ schema markup.

---

### PILLAR PAGES (4) — 3,000-5,000 words, own the core topic

| # | Title | Target Keyword | Links To |
|---|-------|---------------|----------|
| P1 | The Complete Guide to TV Installation in Hampton Roads | tv installation hampton roads | TV service page, fireplace post, cost post, city pages |
| P2 | Commercial AV Systems: The Complete Guide for Hampton Roads Businesses | commercial av installation | Commercial AV service page, digital signage post, healthcare AV page |
| P3 | Home Security Camera Systems: Everything You Need to Know | security camera installation norfolk | Security camera service page, placement post, city pages |
| P4 | Smart Home Automation Guide: Shades, AV, and Connected Living | smart home installation | Shade service page, TV service page, related posts |

Each pillar page gets a table of contents, FAQ section with schema, and is the hub linking to all related cluster content.

---

### LANDING PAGES (8) — 800-1,500 words, conversion-focused

These target specific **service + city** or **service + audience** combos not covered by existing pages.

| # | Title | Target Keyword | Intent |
|---|-------|---------------|--------|
| L1 | TV Mounting Service in Virginia Beach, VA | tv mounting virginia beach | Local bottom-funnel |
| L2 | Conference Room AV Setup in Hampton Roads | conference room av installation norfolk | Commercial bottom-funnel |
| L3 | Home Theater Installation in Norfolk & Virginia Beach | home theater installation norfolk | Residential bottom-funnel |
| L4 | Outdoor TV Installation in Hampton Roads | outdoor tv installation virginia beach | Seasonal/residential |
| L5 | Restaurant Digital Menu Board Installation | restaurant digital signage installation | Niche commercial |
| L6 | Church & House of Worship AV Systems | church av installation norfolk | Niche commercial |
| L7 | GSA Audio Visual Equipment for Government Agencies | gsa av equipment | National/government |
| L8 | Surveillance Systems for Construction Sites | construction site security cameras | Niche commercial |

These go in `/blog/` with a `landing` category but are really conversion pages — shorter, more CTAs, pricing-focused.

---

### SEO BLOG POSTS — How-To & Educational (15) — 1,200-2,000 words

5 already exist. 10 new ones needed:

| # | Title | Target Keyword | Category |
|---|-------|---------------|----------|
| B1 | How to Hide TV Wires: 5 Methods Compared | hide tv wires | Guides |
| B2 | What Size TV Should I Get? A Room-by-Room Guide | what size tv for room | Guides |
| B3 | How to Set Up a Conference Room for Video Calls | conference room video setup | Guides |
| B4 | How Much Do Security Cameras Cost to Install? (2026) | security camera installation cost | Pricing |
| B5 | Motorized Shades vs. Manual Blinds: Which Are Worth It? | motorized shades vs blinds | Guides |
| B6 | How to Choose the Right TV Mount for Your Wall Type | tv mount types guide | Guides |
| B7 | What Is TAA Compliance? A Guide for Government Buyers | taa compliant meaning | Educational |
| B8 | How to Improve Your Office Lighting with LED | office led lighting upgrade | Guides |
| B9 | Smart Home Wiring: What to Plan Before You Build | smart home wiring new construction | Guides |
| B10 | How to Choose a Security Camera System for Your Business | commercial security camera guide | Guides |

**Existing posts (5):**
- TV Installation Cost in Hampton Roads (Pricing)
- TV Above Fireplace Guide (Guides)
- Digital Signage for Your Business (Commercial)
- Security Camera Placement Guide (Guides)
- LED Retrofit vs. New Fixtures (Guides)

---

### LISTICLES & ROUNDUPS (7) — Easy to rank, shareable

| # | Title | Target Keyword |
|---|-------|---------------|
| R1 | 7 Signs You Need a Professional TV Installer (Not DIY) | professional tv installation vs diy |
| R2 | 5 Best TV Mounts for Above-Fireplace Installation | best tv mount for fireplace |
| R3 | 8 Ways to Upgrade Your Conference Room AV on a Budget | conference room av upgrade |
| R4 | 6 Security Camera Features That Actually Matter | best security camera features |
| R5 | Top 5 LED Lighting Mistakes Businesses Make | commercial led lighting mistakes |
| R6 | 10 Questions to Ask Before Hiring an AV Installer | questions for av installer |
| R7 | 5 Smart Home Upgrades That Add Value to Your Hampton Roads Home | smart home upgrades home value |

---

### USE-CASE / AUDIENCE PAGES (6) — Target specific audiences

| # | Title | Target Keyword |
|---|-------|---------------|
| U1 | AV Solutions for Medical Offices & Clinics | medical office av installation |
| U2 | AV Installation for Property Managers & Apartment Complexes | apartment complex tv installation |
| U3 | AV for Hotels & Hospitality in Virginia Beach | hotel av installation virginia beach |
| U4 | AV for Schools & Education Facilities | school av installation |
| U5 | New Construction AV Pre-Wire & Installation | new construction av wiring |
| U6 | AV Upgrades for Home Sellers Preparing to List | home staging tv installation |

---

## Content Clusters (Internal Linking Map)

### Cluster 1: TV Installation
- **Hub**: P1 (Pillar — Complete Guide to TV Installation)
- **Spokes**: TV cost post, fireplace post, L1 (VB mounting), L3 (home theater), L4 (outdoor), B1 (hide wires), B2 (TV size), B6 (mount types), R1 (DIY vs pro), R2 (fireplace mounts)
- **Service page**: `/services/tv-installation`

### Cluster 2: Commercial AV
- **Hub**: P2 (Pillar — Commercial AV Guide)
- **Spokes**: Digital signage post, L2 (conference rooms), L5 (restaurants), L6 (churches), B3 (video calls), R3 (AV on budget), U1 (medical), U3 (hotels), U4 (schools)
- **Service page**: `/services/commercial-av`, `/services/healthcare-av`

### Cluster 3: Security Cameras
- **Hub**: P3 (Pillar — Security Camera Guide)
- **Spokes**: Camera placement post, L8 (construction sites), B4 (camera costs), B10 (business cameras), R4 (camera features), U2 (apartments)
- **Service page**: `/services/security-cameras`

### Cluster 4: Smart Home / Shades / LED
- **Hub**: P4 (Pillar — Smart Home Guide)
- **Spokes**: LED retrofit post, B5 (shades vs blinds), B8 (office LED), B9 (smart wiring), R5 (LED mistakes), R7 (smart home value), U5 (new construction), U6 (home sellers)
- **Service pages**: `/services/led-fixtures`, `/services/shade-installation`

---

## Publishing Schedule

**Months 1-2** (8 posts): All 4 pillar pages + 4 landing pages
- Pillar pages are the foundation — they need to exist before spoke content links to them
- Landing pages target bottom-funnel immediately

**Months 3-4** (12 posts): Remaining 4 landing pages + 5 blog posts + 3 listicles
- Fill out the spoke content for each cluster

**Months 5-6** (12 posts): 5 blog posts + 4 listicles + 3 use-case pages
- Long-tail audience targeting, authority building

**Months 7-8** (8 posts): Remaining 3 use-case pages + 5 refresh/new posts
- Update pillar pages with new internal links, refresh dates
- Write new posts based on Search Console data (what's getting impressions but not clicks)

---

## Implementation Steps

### Step 1: Build SEO infrastructure
- `InlineCTA` component + register in MDX
- `RelatedArticles` component + `relatedSlugs` metadata field
- `TableOfContents` component for pillar pages
- FAQ schema support on blog posts
- Breadcrumbs component + JSON-LD
- Blog category pages
- `lastUpdated` field
- OG image default

### Step 2: Update existing 5 posts
- Add `relatedSlugs` to each
- Add FAQ sections where missing
- Add `<InlineCTA>` at strategic points
- Add `lastUpdated` dates

### Step 3: Write & publish content per schedule above

### Step 4: Google Search Console
- Verify site ownership
- Submit sitemap
- Monitor after month 2 for impressions/clicks data

### Step 5: Monthly review
- Check Search Console for keywords getting impressions but low CTR — optimize titles/descriptions
- Update pillar pages with links to new spoke content
- Refresh `lastUpdated` dates on updated posts

---

## Verification
- `npm run build` passes with all new components and posts
- Every blog post renders with InlineCTA, RelatedArticles, breadcrumbs, and FAQ schema
- JSON-LD validates for Article, FAQPage, and BreadcrumbList schemas
- Sitemap includes all new content
- Internal linking: every spoke links to its pillar, every pillar links to all spokes
