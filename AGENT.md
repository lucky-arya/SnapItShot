# AGENT.md — Lumière Photography Website

## 0. Mission

You are the primary AI coding agent responsible for implementing the **Lumière Photography Website**.

Your job is to transform the approved Lumière design system, page specifications, MERN architecture documentation, and supplied visual reference/design images into a production-quality website.

This file is the **implementation operating manual** for the AI agent.

The existing Markdown specifications and approved visual designs are the source of truth. Do not replace the approved design with a generic interpretation.

---

# 1. Project Identity

**Project:** Lumière Photography Website  
**Architecture:** MERN  
**Frontend:** React + Vite  
**Backend:** Node.js + Express.js  
**Database:** MongoDB + Mongoose  
**Media:** Cloudinary  
**Primary visual direction:** Editorial luxury photography / modern cream minimalism

The website must feel like:

- a premium photography editorial
- cinematic
- warm
- quiet
- spacious
- artistic
- intentional
- image-led
- modern
- refined
- personal

It must NOT feel like:

- a generic SaaS dashboard
- a template portfolio
- a corporate agency website
- a generic three-column card grid
- an over-animated landing page
- a cyberpunk website
- a neon/glowing interface
- a heavy glassmorphism interface
- a UI component showcase

The photography is the product. The interface exists to frame, organize, and enhance the photography.

---

# 2. HIGHEST-PRIORITY RULE

When implementing anything, use this priority order:

1. **Approved visual design/reference images**
2. **Page-specific Markdown specification**
3. **Master Lumière design system**
4. **MERN architecture specification**
5. **This AGENT.md**
6. Sensible implementation decisions

If a generic coding convention conflicts with the approved Lumière design, preserve the Lumière design.

If an implementation detail is unspecified, choose the smallest solution that preserves the existing visual language and architecture.

Do not invent a new visual direction.

---

# 3. REQUIRED DOCUMENTS

Before implementing the project, inspect all existing Lumière Markdown files.

Known specification files include:

- `lumiere-photography-master-implementation-specification.md`
- `lumiere-photography-introduction-section-design.md`
- `lumiere-photography-selected-work-section-design.md`
- `lumiere-photography-collections-section-design.md`
- `lumiere-photography-featured-photograph-section-design.md`
- `lumiere-photography-about-photographer-section-design.md`
- `lumiere-photography-contact-section-design.md`
- `lumiere-photography-footer-global-navigation-design.md`
- `lumiere-photography-collection-detail-page-design.md`
- `lumiere-photography-individual-story-page-design.md`
- `lumiere-photography-about-page-design.md`
- `lumiere-photography-inquiry-contact-page-design.md`
- `lumiere-photography-mern-project-architecture-setup.md`

Also inspect any additional `.md`, design, image, or project documentation files present in the repository.

### Important

Do not implement from this AGENT.md alone.

This file defines **how to implement** the project.

The existing design documents define **what the website should look and behave like**.

---

# 4. VISUAL DESIGN REFERENCES ARE SOURCE OF TRUTH

The user may provide screenshots, mockups, image references, layout references, or generated design images.

Treat approved visual references as authoritative for:

- spacing
- composition
- image proportions
- typography hierarchy
- navigation placement
- section proportions
- visual density
- alignment
- button placement
- image cropping
- negative space
- desktop composition
- mobile composition
- interaction intent

Do not blindly copy an image's implementation technology.

Recreate the **visual result** using clean reusable React/CSS architecture.

### When an image and written specification differ

Resolve conflicts in this order:

1. If the image is clearly the latest approved visual design, follow the image.
2. Preserve the written content/data requirements.
3. Preserve accessibility and responsive behavior.
4. Avoid introducing unnecessary visual changes.

Do not silently redesign.

---

# 5. DESIGN LANGUAGE

## Colors

Primary background:

`#F4F0E8`

Secondary cream:

`#F8F4EC`

Primary text:

`#171614`

Secondary text:

`#706B62`

Border:

`#B8AC9B`

Light text:

`#F8F4EC`

Accent:

Muted warm brown.

Do not introduce bright neon colors unless explicitly required by a supplied design.

Avoid excessive pure black.

Avoid excessive pure white.

The site should feel warm rather than sterile.

---

# 6. TYPOGRAPHY

Preferred display font:

**Instrument Serif**

Preferred body/UI font:

**Inter**

Possible fallbacks:

- Cormorant Garamond
- Playfair Display
- Manrope

Typography should create an editorial hierarchy.

Use:

- serif for major artistic/display statements
- modern sans-serif for navigation, metadata, labels, forms, supporting copy

Do not use decorative fonts merely for visual novelty.

Do not overuse uppercase text.

When uppercase is used, use it intentionally for:

- navigation
- metadata
- section labels
- categories
- small editorial markers

---

# 7. LAYOUT PRINCIPLES

Maximum content width:

`1440px`

Desktop side padding:

`48–64px`

Tablet:

`32–40px`

Mobile:

`18–22px`

Desktop:

12-column editorial grid.

Mobile:

single-column editorial flow unless a specific specification calls for a two-column image pairing.

Spacing scale:

- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 80
- 96
- 120
- 160
- 200

Do not create arbitrary spacing values when an existing token works.

Use large negative space intentionally.

---

# 8. IMAGE RULES

Photography is the primary visual element.

Preferred ratios:

- 4:5
- 3:4
- 3:2
- 16:9
- 2:1
- full bleed

Use `object-fit: cover` where the design requires image filling.

Respect focal points.

Do not crop important subjects accidentally.

Use responsive image sources.

Prefer:

- AVIF
- WebP

Use lazy loading for non-critical images.

Preload only the appropriate hero/LCP image.

Always reserve image dimensions to prevent layout shift.

Every meaningful image needs useful alt text.

Decorative images must use appropriate empty alt attributes.

---

# 9. MOTION PRINCIPLES

Motion must be subtle.

Default behavior:

- image hover scale: approximately 1.02–1.03
- arrow movement: 4–8px
- underline animation: 200–300ms
- UI transition: 300–450ms
- image transition: 600–1000ms
- reveal animation: 400–700ms
- reveal movement: approximately 8–16px

Do not animate everything.

Do not use excessive parallax.

Do not use bounce animations.

Do not use flashy page loaders unless explicitly specified.

Respect:

`prefers-reduced-motion`

When reduced motion is enabled:

- remove parallax
- remove cursor effects
- remove image zoom
- minimize page transitions
- disable staggered reveal sequences

---

# 10. BORDER / SHAPE LANGUAGE

Prefer sharp editorial geometry.

Default radius:

`0–4px`

Do not make every section a rounded card.

Avoid:

- excessive rounded cards
- floating SaaS cards
- heavy shadows
- glossy UI panels
- excessive gradients

Borders should be thin and restrained.

---

# 11. GLOBAL NAVIGATION

The navigation has two visual states.

## Hero state

Transparent over hero image:

`MENU — LUMIÈRE — INQUIRE →`

Logo centered.

Minimal visual weight.

## Scrolled state

Cream background:

`LUMIÈRE — WORK — COLLECTIONS — ABOUT — INQUIRE →`

Use:

- cream background
- 88–96% opacity
- optional subtle backdrop blur
- thin bottom border
- approximately 72–82px height

## Mobile

Layout:

- hamburger left
- centered logo
- compact inquiry action right

Full-screen cream menu.

Large serif navigation:

`01 WORK`

`02 COLLECTIONS`

`03 ABOUT`

`04 INQUIRE`

Include Instagram/email.

Mobile menu requirements:

- keyboard accessible
- Escape closes
- visible focus states
- touch targets >=44px
- no inaccessible overlay

Logo links to `/`.

---

# 12. GLOBAL FOOTER

Footer should feel like the final page of a premium photography magazine.

Include:

- Lumière logo
- short brand statement
- Explore:
  - Work
  - Collections
  - About
  - Contact
- Connect:
  - Instagram
  - Pinterest
  - Email
- Based in India / Available Worldwide
- divider
- copyright
- Privacy
- Terms
- Back to Top ↑

Desktop:

spacious editorial arrangement.

Mobile:

stacked.

Do not turn the footer into a dense utility sitemap.

---

# 13. ROUTING

Required public routes:

`/`

`/work`

`/collections/portraits`

`/collections/weddings`

`/collections/travel`

`/collections/landscapes`

`/collections/lifestyle`

`/work/:slug`

`/about`

`/inquire`

Optional alias:

`/contact`

Admin routes may be added separately.

Use React Router.

Do not hardcode route navigation as scattered strings throughout components.

Centralize route definitions where practical.

---

# 14. PAGE IMPLEMENTATION ORDER

Build in this order.

## Phase 1 — Foundation

1. Root repository
2. Client
3. Server
4. Dependencies
5. Environment configuration
6. Git configuration
7. Vite
8. Tailwind
9. React Router
10. Express
11. MongoDB connection
12. `/api/health`
13. Frontend → backend test

## Phase 2 — Design system

1. colors
2. typography
3. spacing
4. containers
5. grid
6. transitions
7. responsive rules

## Phase 3 — Global UI

1. logo
2. navigation
3. mobile menu
4. footer
5. buttons
6. arrow links
7. page transitions

## Phase 4 — Reusable components

Create reusable components before duplicating page-specific implementations.

Examples:

- `EditorialHeading`
- `SectionLabel`
- `EditorialImage`
- `ImageTile`
- `ImageReveal`
- `Gallery`
- `GalleryFilter`
- `CollectionPreview`
- `StoryPreview`
- `Metadata`
- `Accordion`
- `FormField`
- `InquiryForm`
- `Lightbox`
- `BackToTop`

## Phase 5 — Homepage

Implement:

Hero
→ Introduction
→ Selected Work
→ Collections
→ Featured Photograph
→ About Photographer
→ Contact
→ Footer

## Phase 6 — Backend

Implement:

- models
- controllers
- routes
- validators
- middleware
- API
- Cloudinary integration

## Phase 7 — Dynamic pages

Implement:

- Work
- Collection detail
- Story detail
- About
- Inquiry

## Phase 8 — Admin CMS

Implement only after the public architecture works.

## Phase 9 — Production polish

- responsive QA
- image optimization
- accessibility
- SEO
- security
- performance
- deployment readiness
- browser testing
- visual QA

---

# 15. HOMEPAGE REQUIREMENTS

The homepage sequence is fixed:

1. Hero
2. Introduction / Manifesto
3. Selected Work
4. Collections
5. Featured Photograph
6. About Photographer
7. Contact
8. Footer

The narrative is:

**Discover → Understand → Explore → Choose a world → Feel → Meet the photographer → Connect → Navigate**

Do not reorder sections without a strong implementation reason.

---

# 16. HERO

Full-width photography.

Target:

approximately `100vh`.

Keep text minimal.

Navigation overlays hero.

Use:

- top-left CTA
- centered logo
- top-right CTA
- subtle corner border rectangles

Mobile and tablet require intentional responsive composition.

Do not simply shrink desktop.

---

# 17. INTRODUCTION / MANIFESTO

Use:

`01 / INTRO`

Large visual philosophy statement.

Supporting copy.

Optional CTA.

Cream background.

Large negative space.

Subtle reveal.

Do not overload with text.

---

# 18. SELECTED WORK

Use:

`02 / 06`

Title:

`SELECTED WORK`

Supporting description.

CTA:

`VIEW ALL WORK →`

Filters:

- ALL
- PORTRAITS
- WEDDINGS
- TRAVEL
- LANDSCAPES
- LIFESTYLE

Do not use a generic equal three-column card grid.

Use asymmetric editorial composition:

- dominant portrait
- medium travel
- medium wedding
- wide landscape
- smaller lifestyle

Image captions:

bottom-left:

number + category

bottom-right:

arrow

Hover:

- 2–3% image scale
- subtle overlay
- arrow movement

Mobile:

- full-width primary image
- carefully selected two-column secondary images where appropriate
- horizontally scrollable filters

---

# 19. COLLECTIONS

Use:

`03 / 06`

Headline:

`COLLECTIONS`

Supporting concept:

Different stories. The same language — light, people and places.

Desktop split:

approximately 26–30% editorial information

approximately 70–74% visual gallery

Five collection panels:

- Portraits
- Weddings
- Travel
- Landscapes
- Lifestyle

Each panel should feel like a chapter, not a card.

Descriptors:

Portraits:
`People · Emotions · Stories`

Weddings:
`Love · Moments · Forever`

Travel:
`Places · Cultures · Perspectives`

Landscapes:
`Nature · Serenity · Beyond`

Lifestyle:
`Everyday · Authentic · Real`

Desktop image panels:

approximately 180–260px tall.

Mobile:

approximately 170–230px.

---

# 20. FEATURED PHOTOGRAPH

Use:

`04 / 06`

Title:

`THE QUIET MOMENT`

Supporting text:

`A single frame can hold a thousand emotions, long after the moment has passed.`

Full-bleed immersive image.

Target:

80–95vh.

Localized gradient only where text requires readability.

CTA:

`VIEW STORY →`

Optional:

- thumbnail rail
- previous/next
- counter
- progress line

Transitions:

crossfade + subtle scale.

Mobile must support swipe and visible controls.

Autoplay is optional and must pause on interaction/focus/reduced motion.

---

# 21. ABOUT PHOTOGRAPHER HOMEPAGE SECTION

Use:

`05 / 06`

Concept:

`There is a person behind every photograph.`

Large statement:

`I LOOK FOR THE MOMENTS BETWEEN THE MOMENTS.`

Use:

- portrait-led asymmetric layout
- short first-person bio
- signature
- based in India
- available worldwide
- specialties
- `MORE ABOUT ME →`

Do not turn this into a résumé block.

---

# 22. CONTACT HOMEPAGE SECTION

Use:

`06 / 06`

Heading:

`LET'S CREATE SOMETHING TOGETHER.`

Supporting copy:

`Have a project, story, or moment you'd like to photograph? Tell me a little about it and let's start a conversation.`

CTA:

`START A CONVERSATION →`

Include:

- email
- Instagram
- location
- availability

Do not place a huge form on the homepage.

The full form belongs on `/inquire`.

---

# 23. WORK / GALLERY PAGE

Route:

`/work`

Purpose:

complete curated archive.

Opening:

`WORK`

`A collection of moments, people, places and stories.`

Filters:

- ALL
- PORTRAITS
- WEDDINGS
- TRAVEL
- LANDSCAPES
- LIFESTYLE

Use asymmetric editorial/masonry composition.

Avoid uniform card grids.

Use:

- large portrait
- smaller supporting images
- wide images
- full-width moments
- varied rhythm

Prefer:

`LOAD MORE WORK →`

over infinite scrolling.

Bottom CTA:

`LOOKING FOR SOMETHING A LITTLE MORE PERSONAL?`

`LET'S CREATE SOMETHING TOGETHER.`

`START A CONVERSATION →`

---

# 24. COLLECTION DETAIL PAGES

Routes:

`/collections/portraits`

`/collections/weddings`

`/collections/travel`

`/collections/landscapes`

`/collections/lifestyle`

Structure:

Global navigation
→ Hero
→ Collection information
→ Introduction
→ Philosophy
→ Curated sequence
→ Full-bleed image
→ Image + text
→ Gallery
→ Previous/next collection
→ Related collection
→ Next collection preview
→ Footer

Hero:

82–95vh.

Include:

`← COLLECTIONS`

Metadata:

`03 / 05`

Title.

Descriptor.

Use approximately 12–25 carefully selected images.

Mobile becomes a vertical photographic narrative.

---

# 25. INDIVIDUAL STORY / PHOTOGRAPH PAGE

Route:

`/work/:slug`

Treat this as a digital photography essay.

Structure:

Global nav
→ Story Hero
→ Story Information
→ Intro
→ Image Sequence
→ Image + Text
→ Full-Bleed Feature
→ More Image Sequence
→ Final Image
→ Story Details
→ Previous/Next Story
→ Footer

Hero:

85–100vh.

Metadata:

`01 / STORY`

Title.

Location/date.

Introduction:

approximately 40–120 words.

Support image types:

- portrait 4:5
- landscape 3:2
- wide 2:1–3:1
- full bleed

Major projects:

15–30 images.

Normal:

8–20 images.

Use a major emotional full-bleed image as a visual climax.

Avoid captions everywhere.

Use captions selectively.

Optional lightbox:

- counter
- previous
- next
- close
- swipe
- keyboard

Emotional arc:

**arrival → context → observation → intimacy → climax → reflection → departure**

---

# 26. ABOUT PAGE

Route:

`/about`

Purpose:

show the person behind the photographs.

Structure:

About Hero
→ Introduction
→ Philosophy
→ Working Portrait
→ Journey
→ How I Work
→ Signature Statement
→ Based / Available
→ Specialties
→ Behind the Work
→ optional Recognition
→ Inquiry CTA
→ Footer

Main title:

`THE PERSON BEHIND THE PHOTOGRAPHS.`

Use first-person writing.

Philosophy should have strong serif typography.

Journey:

150–300 words.

How I Work principles can use:

`01 OBSERVE`

`02 WAIT`

`03 PRESERVE`

Adapt wording to actual photographer identity/content.

Do not invent awards, clients, publications, statistics, equipment, or testimonials.

---

# 27. INQUIRY PAGE

Route:

`/inquire`

Optional alias:

`/contact`

This is a conversation starter, not a corporate lead form.

Use:

`06 / INQUIRE`

Headline:

`LET'S CREATE SOMETHING TOGETHER.`

Form.

Required:

- Name
- Email
- Project Type
- Message

Optional:

- Date
- Location
- Phone
- Budget
- How did you find me?

Project types:

- Portrait
- Wedding
- Travel
- Editorial
- Lifestyle
- Landscape
- Commercial
- Other

Inputs should feel editorial.

Avoid generic filled rounded boxes.

Primary CTA:

`SEND INQUIRY →`

Success:

`THANK YOU. I’VE GOT YOUR MESSAGE.`

`I’ll be in touch soon.`

CTA:

`VIEW WORK →`

Error state must offer direct email alternative.

Include:

- direct email
- social
- availability
- response time
- FAQ
- privacy note
- spam protection

Final statement:

`EVERY STORY STARTS WITH A CONVERSATION.`

---

# 28. CONTENT MODEL

## User

Fields:

- name
- email
- passwordHash
- role
- isActive
- createdAt
- updatedAt

## Collection

Fields:

- title
- slug
- number
- descriptor
- description
- philosophy
- heroImage
- featuredImage
- order
- published
- timestamps

## Story

Fields:

- title
- slug
- collection
- heroImage
- location
- date
- introduction
- sections
- closingNote
- order
- published
- timestamps

## Photograph

Fields:

- collection
- story
- imageUrl
- thumbnailUrl
- publicId
- alt
- caption
- location
- year
- type
- focalPoint
- width
- height
- order
- published
- timestamps

## Inquiry

Fields:

- name
- email
- phone
- projectType
- date
- location
- budget
- message
- source
- status
- timestamps

Statuses:

- new
- contacted
- inProgress
- booked
- archived

## SiteSettings

Fields:

- photographerName
- email
- location
- availability
- instagram
- pinterest
- bio
- philosophy
- responseTime
- updatedAt

---

# 29. STORY SECTION TYPES

Support:

- `image`
- `text`
- `imageText`
- `fullBleed`

Do not create unnecessary section types until actual content requires them.

---

# 30. PHOTOGRAPH TYPES

Support:

- `hero`
- `portrait`
- `landscape`
- `wide`
- `fullBleed`
- `detail`
- `imageText`
- `galleryPair`

---

# 31. API ARCHITECTURE

Base:

`/api`

Public:

`GET /api/collections`

`GET /api/collections/:slug`

`GET /api/stories`

`GET /api/stories/:slug`

`GET /api/settings`

`POST /api/inquiries`

Admin:

collection CRUD

story CRUD

photograph CRUD

inquiry management

settings update

Auth:

`POST /api/auth/login`

`POST /api/auth/logout`

`GET /api/auth/me`

Health:

`GET /api/health`

Expected health response:

```json
{
  "success": true,
  "message": "Lumière API is running"
}
```

---

# 32. API RESPONSE FORMAT

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Something went wrong."
}
```

Validation:

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": {}
}
```

Keep API responses consistent.

---

# 33. FRONTEND ARCHITECTURE

Expected client structure:

```text
client/
└── src/
    ├── assets/
    ├── components/
    │   ├── navigation/
    │   ├── footer/
    │   ├── layout/
    │   ├── typography/
    │   ├── buttons/
    │   ├── gallery/
    │   ├── collections/
    │   ├── stories/
    │   ├── forms/
    │   ├── lightbox/
    │   └── common/
    ├── layouts/
    ├── pages/
    ├── routes/
    ├── services/
    ├── hooks/
    ├── context/
    ├── utils/
    ├── data/
    ├── styles/
    ├── App.jsx
    └── main.jsx
```

Components should be focused and composable.

Do not create one giant component.

---

# 34. BACKEND ARCHITECTURE

Expected server structure:

```text
server/
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── validators/
    ├── utils/
    ├── app.js
    └── server.js
```

Do not create one giant Express route file.

Controllers should coordinate.

Services should handle reusable business logic/integrations.

Models should define database structure.

Validators should validate incoming data.

Middleware should handle cross-cutting concerns.

---

# 35. FRONTEND SERVICE LAYER

Use:

- `api.js`
- `collectionService.js`
- `storyService.js`
- `photographService.js`
- `inquiryService.js`
- `settingsService.js`

React components must NOT directly make Axios calls.

Use the service layer.

---

# 36. MEDIA ARCHITECTURE

Use Cloudinary.

Do not store original high-resolution photographs in MongoDB.

MongoDB stores:

- URLs
- public IDs
- metadata
- dimensions
- crop/focal information
- captions
- relationships
- ordering

Cloudinary stores the actual media.

Recommended folders:

```text
lumiere/
├── hero/
├── collections/
│   ├── portraits/
│   ├── weddings/
│   ├── travel/
│   ├── landscapes/
│   └── lifestyle/
├── stories/
├── about/
└── misc/
```

Use Cloudinary transformations for:

- responsive width
- quality
- format
- crop
- DPR

Never expose:

`CLOUDINARY_API_SECRET`

to the client.

---

# 37. SECURITY

Implement:

- Helmet
- express-rate-limit
- restricted CORS
- HTTP-only secure authentication cookies
- bcrypt password hashing
- JWT
- backend validation
- payload limits
- inquiry spam protection
- protected admin routes
- rate limiting on public inquiry endpoint
- no secret exposure
- no production stack traces
- never log passwords
- never log tokens

Do not store credentials in React.

---

# 38. ENVIRONMENT VARIABLES

Use:

```text
NODE_ENV=development
PORT=5000
MONGODB_URI=
CLIENT_URL=http://localhost:5173
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
EMAIL_API_KEY=
EMAIL_FROM=
```

Never commit actual secrets.

Use:

`.env.example`

for documentation.

---

# 39. ADMIN CMS

Admin structure:

```text
Admin
├── Login
└── Dashboard
    ├── Overview
    ├── Collections
    ├── Stories
    ├── Photographs
    ├── Inquiries
    └── Settings
```

Admin UI does NOT need to follow the public editorial aesthetic strictly.

Admin usability is more important.

Build admin only after public architecture works.

---

# 40. ACCESSIBILITY

Required:

- semantic HTML
- keyboard navigation
- visible focus
- meaningful alt text
- accessible forms
- accessible lightbox
- accessible mobile navigation
- sufficient contrast
- 44px minimum touch targets
- Escape support for dialogs/menus/lightboxes
- correct heading hierarchy
- labels for form controls

Do not sacrifice accessibility for visual effects.

---

# 41. PERFORMANCE

Priorities:

1. fast initial render
2. optimized hero/LCP image
3. responsive image loading
4. lazy loading
5. minimal JavaScript
6. code splitting where useful
7. stable layout dimensions
8. CDN delivery
9. avoid unnecessary libraries
10. avoid unnecessary API calls

Do not prematurely add:

- Redis
- complex caching
- microservices
- unnecessary state-management libraries
- unnecessary animation libraries

Use the simplest architecture that satisfies the specification.

---

# 42. SEO

Each public page should have:

- unique title
- meta description
- canonical URL where appropriate
- Open Graph metadata
- relevant structured data where appropriate
- descriptive image alt text
- clean URLs

Photography pages should have meaningful metadata.

Do not generate fake metadata.

---

# 43. DATA / CONTENT RULE

Never invent real-world claims.

Do not invent:

- awards
- publications
- client names
- testimonials
- years of experience
- locations
- statistics
- press mentions
- commercial clients

Use placeholder/demo content only when necessary during development, and clearly isolate it so it can be replaced.

---

# 44. RESPONSIVE DESIGN

Do not treat responsive design as simply:

desktop → smaller desktop.

Create intentional layouts for:

- desktop
- tablet
- mobile

The visual hierarchy must survive at all breakpoints.

Prioritize:

1. photography
2. typography
3. navigation
4. content hierarchy
5. whitespace
6. interaction

Mobile should feel like the mobile version of the same editorial experience, not a separate generic website.

---

# 45. COMPONENT DESIGN RULES

Build reusable components when:

- the visual pattern appears twice or more
- behavior is shared
- content varies but layout remains similar
- accessibility behavior should be centralized

Do not abstract every `<div>` into a component.

Prefer meaningful components:

`EditorialImage`

over meaningless components:

`Box`

---

# 46. STATE MANAGEMENT

Use local React state for local UI.

Use context only when shared state is genuinely needed.

Avoid global state libraries unless actual requirements justify them.

Examples of reasonable shared state:

- mobile navigation state
- authenticated admin user
- global site settings where necessary

Do not use global state for every form field or hover state.

---

# 47. ERROR / LOADING STATES

Every API-driven page must account for:

- loading
- empty
- error
- success

States should preserve the editorial visual language.

Avoid generic default browser error pages.

Use restrained messaging.

Example:

`THE LIGHT IS STILL ARRIVING.`

may be used only when appropriate to the brand and should never reduce clarity.

For forms, use clear functional error messages.

---

# 48. IMAGE LOADING

Prevent layout shift.

Every image should have:

- known dimensions/aspect ratio
- appropriate loading behavior
- alt text
- focal position when necessary

For hero images:

- optimize aggressively
- prioritize LCP
- preload only where justified

For gallery images:

- lazy load
- use responsive variants

---

# 49. LIGHTBOX

If implemented:

Desktop:

- centered image
- dark/neutral overlay
- counter
- close
- previous/next

Mobile:

- swipe
- close
- visible navigation

Keyboard:

- Escape
- ArrowLeft
- ArrowRight

Focus must be trapped appropriately.

Do not make the lightbox difficult to close.

---

# 50. GALLERY BEHAVIOR

Gallery should support:

- category filtering
- responsive layout
- image metadata
- lazy loading
- keyboard-accessible links
- hover interactions on capable devices
- reduced-motion behavior

Do not rely only on hover to reveal important information.

---

# 51. NAVIGATION BEHAVIOR

Desktop:

- transparent over hero
- transitions to cream on scroll

Mobile:

- full-screen menu

Navigation must remain usable when:

- JavaScript loads slowly
- viewport changes
- user uses keyboard
- reduced motion is enabled

---

# 52. FORM IMPLEMENTATION

Use:

React Hook Form

Zod

Validate on:

- client
- server

Never trust client-side validation alone.

Sanitize/validate data server-side.

Prevent spam.

Rate-limit inquiries.

Do not expose internal error details.

---

# 53. AUTHENTICATION

Admin authentication should use:

- bcrypt
- JWT
- HTTP-only secure cookies

Never store admin passwords in plaintext.

Never place JWT secrets in frontend code.

Protect every admin API route.

---

# 54. GIT WORKFLOW

Branches:

`main`

`develop`

`feature/*`

`fix/*`

Commit conventions:

`feat: ...`

`fix: ...`

`refactor: ...`

`style: ...`

Keep commits focused.

Do not combine unrelated changes into one commit.

---

# 55. DEVELOPMENT RULE

Work incrementally.

After each meaningful phase:

1. run the application
2. inspect the output
3. verify the design
4. test responsive behavior
5. fix issues
6. continue

Do not build hundreds of files before running the application.

---

# 56. VISUAL QA LOOP

For each page:

1. implement structure
2. run locally
3. compare with approved design image
4. compare with page-specific Markdown
5. inspect desktop
6. inspect tablet
7. inspect mobile
8. inspect spacing
9. inspect typography
10. inspect image crop
11. inspect interactions
12. inspect accessibility
13. optimize
14. repeat

The agent should prioritize visual fidelity over blindly maximizing feature count.

---

# 57. WHEN DESIGN DETAILS ARE MISSING

Do not ask unnecessary questions.

Make the smallest reasonable implementation decision based on:

1. existing design system
2. nearest page pattern
3. visual references
4. editorial photography conventions

Only stop and ask the user when the missing decision would materially change:

- architecture
- content model
- route structure
- visual direction
- major functionality
- data ownership

---

# 58. DO NOT DRIFT

The following are prohibited unless explicitly requested:

- redesigning the site into SaaS style
- adding neon colors
- adding cyberpunk styling
- excessive glassmorphism
- excessive gradients
- excessive shadows
- excessive rounded cards
- generic dashboard-style galleries
- autoplay video backgrounds
- unnecessary 3D effects
- cursor gimmicks
- excessive parallax
- huge animated text
- unnecessary loaders
- giant navigation bars
- cluttered footers
- excessive UI chrome

The design should remain quiet.

---

# 59. DO NOT OVER-ENGINEER

Do not add technology simply because it is available.

Before adding a dependency, ask:

1. Is it required?
2. Is the functionality difficult without it?
3. Does it improve maintainability?
4. Does it add significant bundle/runtime cost?
5. Does an existing dependency already solve the problem?

Prefer fewer dependencies.

---

# 60. DO NOT BREAK THE ARCHITECTURE

Never:

- put MongoDB credentials in React
- store original images in MongoDB
- expose Cloudinary secrets
- duplicate Axios logic in components
- create one giant React component
- create one giant Express route
- hardcode production URLs
- commit `.env`
- bypass backend validation
- expose admin routes publicly
- mix database logic directly into UI components

---

# 61. ACCEPTANCE CRITERIA

The implementation is successful only when:

### Visual

- approved design direction is recognizable immediately
- cream editorial palette is preserved
- typography hierarchy matches specification
- photography dominates
- spacing feels intentional
- layouts are asymmetric where specified
- no generic card-grid aesthetic
- animations are subtle

### Technical

- MERN architecture works
- MongoDB connection works
- API works
- frontend consumes API through service layer
- authentication is protected
- Cloudinary integration works
- inquiry flow works
- environment variables are secure

### Responsive

- desktop works
- tablet works
- mobile works
- navigation works
- galleries work
- forms work
- lightbox works if enabled

### Accessibility

- keyboard navigation works
- focus states are visible
- forms are labeled
- images have appropriate alt text
- menus/dialogs are accessible
- reduced motion is respected

### Performance

- images optimized
- layout shift minimized
- hero image prioritized
- non-critical images lazy-loaded
- unnecessary dependencies avoided

---

# 62. DEFINITION OF DONE

A page is not done merely because it renders.

A page is done when:

- structure matches the specification
- visual design matches approved references
- responsive behavior is intentional
- interactions work
- content hierarchy is correct
- images are optimized
- accessibility is addressed
- loading/error/empty states exist where needed
- no console errors
- no obvious layout shifts
- no duplicated architecture
- no secret leakage
- the implementation remains reusable

---

# 63. FINAL IMPLEMENTATION PRINCIPLE

Build Lumière like a photographer's digital exhibition, not like a software demo.

Every decision should answer:

> Does this help the photography, story, atmosphere, or usability?

If yes, implement it carefully.

If no, remove it.

The final result should feel:

**quiet, cinematic, editorial, warm, premium, personal, and timeless.**

