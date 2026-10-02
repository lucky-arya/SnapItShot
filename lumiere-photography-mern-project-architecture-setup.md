# LUMIÈRE PHOTOGRAPHY
# MERN PROJECT ARCHITECTURE & SETUP SPECIFICATION

Version: 1.0
Status: Ready for Phase 1 Implementation

---

# 00. PURPOSE

This document defines the technical architecture for implementing the Lumière Photography website using the MERN stack.

Technology stack:

```text
Frontend
React + Vite

Styling
Tailwind CSS

Routing
React Router

Animation
Framer Motion

HTTP
Axios

Backend
Node.js + Express.js

Database
MongoDB + Mongoose

Image Storage
Cloudinary

Authentication
JWT + secure HTTP-only cookies

Validation
Zod or express-validator

Email
Transactional email provider

Deployment
Frontend + Node API + MongoDB + Cloudinary
```

The architecture must support:

- premium photography portfolio
- dynamic collections
- dynamic stories
- optimized photography
- inquiry management
- future admin CMS
- responsive frontend
- SEO
- scalability
- secure API access

---

# 01. ARCHITECTURAL PRINCIPLE

The application should separate:

```text
PRESENTATION
     ↓
BUSINESS LOGIC
     ↓
API
     ↓
DATABASE
     ↓
MEDIA STORAGE
```

The frontend should never communicate directly with MongoDB.

Correct:

```text
React
 ↓
Express API
 ↓
Mongoose
 ↓
MongoDB
```

Images:

```text
React
 ↓
Cloudinary URL
```

Admin uploads:

```text
Admin
 ↓
Express
 ↓
Cloudinary
 ↓
MongoDB metadata
```

---

# 02. HIGH-LEVEL SYSTEM

```text
                         INTERNET
                             │
                             ▼
                    ┌─────────────────┐
                    │   React Client  │
                    │     Vite        │
                    └────────┬────────┘
                             │
                         HTTPS/API
                             │
                             ▼
                    ┌─────────────────┐
                    │ Express Server  │
                    │    Node.js      │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
      ┌───────────────┐             ┌───────────────┐
      │    MongoDB    │             │  Cloudinary   │
      │   Metadata    │             │    Images     │
      └───────────────┘             └───────────────┘
```

---

# 03. MONOREPO STRUCTURE

Recommended repository:

```text
lumiere/
│
├── client/
│
├── server/
│
├── docs/
│
├── .gitignore
├── .env.example
├── README.md
├── package.json
└── LICENSE
```

The repository should contain both frontend and backend.

---

# 04. CLIENT STRUCTURE

```text
client/
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   │
│   │   ├── navigation/
│   │   ├── footer/
│   │   ├── layout/
│   │   ├── typography/
│   │   ├── buttons/
│   │   ├── gallery/
│   │   ├── collections/
│   │   ├── stories/
│   │   ├── forms/
│   │   ├── lightbox/
│   │   └── common/
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── AdminLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Work/
│   │   ├── Collections/
│   │   ├── Story/
│   │   ├── About/
│   │   ├── Inquiry/
│   │   ├── NotFound/
│   │   └── Admin/
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── collectionService.js
│   │   ├── storyService.js
│   │   ├── photographService.js
│   │   ├── inquiryService.js
│   │   └── settingsService.js
│   │
│   ├── hooks/
│   │   ├── useScroll.js
│   │   ├── useMediaQuery.js
│   │   └── useReducedMotion.js
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── utils/
│   │   ├── formatDate.js
│   │   ├── image.js
│   │   └── slug.js
│   │
│   ├── data/
│   │   └── fallbackData.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

# 05. SERVER STRUCTURE

```text
server/
│
├── src/
│   │
│   ├── config/
│   │   ├── database.js
│   │   ├── cloudinary.js
│   │   └── env.js
│   │
│   ├── controllers/
│   │   ├── collectionController.js
│   │   ├── storyController.js
│   │   ├── photographController.js
│   │   ├── inquiryController.js
│   │   ├── aboutController.js
│   │   ├── settingsController.js
│   │   └── authController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   ├── notFound.js
│   │   ├── rateLimiter.js
│   │   └── validate.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Collection.js
│   │   ├── Story.js
│   │   ├── Photograph.js
│   │   ├── Inquiry.js
│   │   └── SiteSettings.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── collectionRoutes.js
│   │   ├── storyRoutes.js
│   │   ├── photographRoutes.js
│   │   ├── inquiryRoutes.js
│   │   ├── aboutRoutes.js
│   │   └── settingsRoutes.js
│   │
│   ├── services/
│   │   ├── cloudinaryService.js
│   │   ├── emailService.js
│   │   └── authService.js
│   │
│   ├── validators/
│   │   ├── authValidator.js
│   │   ├── inquiryValidator.js
│   │   ├── collectionValidator.js
│   │   └── storyValidator.js
│   │
│   ├── utils/
│   │   ├── slug.js
│   │   ├── apiResponse.js
│   │   └── asyncHandler.js
│   │
│   ├── app.js
│   └── server.js
│
└── package.json
```

---

# 06. ROOT PACKAGE

The root package can provide development scripts.

Example responsibilities:

```text
npm run dev
npm run client
npm run server
npm run build
```

Use a concurrent process runner if desired.

---

# 07. FRONTEND PACKAGES

Core:

```text
react
react-dom
react-router-dom
axios
```

Styling:

```text
tailwindcss
```

Animation:

```text
framer-motion
```

Forms:

```text
react-hook-form
```

Validation:

```text
zod
```

Optional:

```text
@hookform/resolvers
```

Icons:

Use a lightweight icon approach.

Do not install a huge icon package unnecessarily.

---

# 08. BACKEND PACKAGES

Core:

```text
express
mongoose
cors
dotenv
```

Security:

```text
helmet
express-rate-limit
cookie-parser
```

Authentication:

```text
jsonwebtoken
bcryptjs
```

Validation:

```text
zod
```

Uploads:

```text
multer
cloudinary
```

Utilities:

```text
morgan
```

Email:

Use a transactional email SDK appropriate to the selected provider.

---

# 09. DATABASE

Use MongoDB.

Recommended production structure:

```text
Database
└── lumiere
    ├── users
    ├── collections
    ├── stories
    ├── photographs
    ├── inquiries
    └── siteSettings
```

Do not store binary image files inside MongoDB.

MongoDB stores:

- metadata
- relationships
- Cloudinary URLs
- Cloudinary public IDs
- ordering
- publishing state

---

# 10. USER MODEL

Admin user only.

Conceptual schema:

```text
User
├── name
├── email
├── passwordHash
├── role
├── isActive
├── createdAt
└── updatedAt
```

Role:

```text
admin
```

Future roles can be added if required.

Never store plain-text passwords.

---

# 11. COLLECTION MODEL

Conceptual schema:

```text
Collection
├── title
├── slug
├── number
├── descriptor
├── description
├── philosophy
├── heroImage
├── featuredImage
├── order
├── published
├── createdAt
└── updatedAt
```

Example:

```text
title: Portraits
slug: portraits
number: 01
descriptor: People · Emotions · Stories
```

---

# 12. STORY MODEL

Conceptual schema:

```text
Story
├── title
├── slug
├── collection
├── heroImage
├── location
├── date
├── introduction
├── sections
├── closingNote
├── order
├── published
├── createdAt
└── updatedAt
```

`collection` should reference the Collection document.

---

# 13. STORY SECTION MODEL

A story can contain different content blocks.

Concept:

```text
sections: [
  {
    type: "image",
    photograph: ...
  },
  {
    type: "text",
    content: ...
  },
  {
    type: "imageText",
    photograph: ...,
    content: ...
  },
  {
    type: "fullBleed",
    photograph: ...
  }
]
```

This allows the story page to remain editorial and flexible.

---

# 14. PHOTOGRAPH MODEL

Conceptual schema:

```text
Photograph
├── collection
├── story
├── imageUrl
├── thumbnailUrl
├── publicId
├── alt
├── caption
├── location
├── year
├── type
├── focalPoint
├── width
├── height
├── order
├── published
├── createdAt
└── updatedAt
```

`publicId` is used to manage the Cloudinary asset.

---

# 15. PHOTOGRAPH TYPES

Supported:

```text
hero
portrait
landscape
wide
fullBleed
detail
imageText
galleryPair
```

The frontend uses this value to determine visual composition.

---

# 16. INQUIRY MODEL

Conceptual schema:

```text
Inquiry
├── name
├── email
├── phone
├── projectType
├── date
├── location
├── budget
├── message
├── source
├── status
├── createdAt
└── updatedAt
```

Statuses:

```text
new
contacted
inProgress
booked
archived
```

Default:

```text
new
```

---

# 17. SITE SETTINGS MODEL

Store editable global information.

```text
SiteSettings
├── photographerName
├── email
├── location
├── availability
├── instagram
├── pinterest
├── bio
├── philosophy
├── responseTime
└── updatedAt
```

This prevents contact information from being hardcoded throughout the frontend.

---

# 18. CLOUDINARY ARCHITECTURE

Cloudinary stores the actual photographs.

Recommended folders:

```text
lumiere/
│
├── hero/
├── collections/
│   ├── portraits/
│   ├── weddings/
│   ├── travel/
│   ├── landscapes/
│   └── lifestyle/
│
├── stories/
│   ├── quiet-morning/
│   └── ...
│
├── about/
└── misc/
```

MongoDB stores the resulting Cloudinary URLs and public IDs.

---

# 19. IMAGE OPTIMIZATION

Use Cloudinary transformations for:

- width
- quality
- format
- crop
- DPR

Conceptual delivery:

```text
Original
↓
Cloudinary
↓
AVIF/WebP
↓
Responsive width
↓
Browser
```

Do not send original high-resolution files to every visitor.

---

# 20. RESPONSIVE IMAGE STRATEGY

The frontend should request appropriate sizes.

Concept:

```text
Mobile
≈ 480–768px

Tablet
≈ 768–1200px

Desktop
≈ 1200–1800px
```

Exact values can be tuned based on real image dimensions.

---

# 21. API BASE URL

Development:

```text
http://localhost:5000/api
```

Production:

```text
https://api.yourdomain.com/api
```

Keep the URL in an environment variable.

Never hardcode production URLs inside components.

---

# 22. API ROUTES

Base:

```text
/api
```

Collections:

```text
GET    /api/collections
GET    /api/collections/:slug
POST   /api/collections
PATCH  /api/collections/:id
DELETE /api/collections/:id
```

Stories:

```text
GET    /api/stories
GET    /api/stories/:slug
POST   /api/stories
PATCH  /api/stories/:id
DELETE /api/stories/:id
```

Photographs:

```text
GET    /api/photographs
POST   /api/photographs
PATCH  /api/photographs/:id
DELETE /api/photographs/:id
```

Inquiry:

```text
POST   /api/inquiries
GET    /api/inquiries
PATCH  /api/inquiries/:id
```

Settings:

```text
GET    /api/settings
PATCH  /api/settings
```

About:

```text
GET    /api/about
PATCH  /api/about
```

Authentication:

```text
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
```

---

# 23. PUBLIC VS ADMIN API

Public:

```text
GET collections
GET collection
GET stories
GET story
GET settings
POST inquiry
```

Admin:

```text
POST collection
PATCH collection
DELETE collection

POST story
PATCH story
DELETE story

POST photograph
PATCH photograph
DELETE photograph

GET inquiries
PATCH inquiry

PATCH settings
```

Protect admin routes with authentication middleware.

---

# 24. API RESPONSE FORMAT

Use consistent responses.

Success:

```text
{
  "success": true,
  "data": {}
}
```

Error:

```text
{
  "success": false,
  "message": "Something went wrong."
}
```

Validation:

```text
{
  "success": false,
  "message": "Validation failed.",
  "errors": {}
}
```

Consistency makes frontend service handling easier.

---

# 25. ERROR HANDLING

Centralize errors.

Flow:

```text
Route
 ↓
Controller
 ↓
Service
 ↓
Error
 ↓
errorHandler middleware
 ↓
JSON response
```

Do not expose stack traces in production.

---

# 26. VALIDATION

Validate both:

```text
Frontend
+
Backend
```

Frontend validation improves UX.

Backend validation provides security.

Never trust client-side validation alone.

---

# 27. INQUIRY SECURITY

The inquiry endpoint is public and should have:

- rate limiting
- input validation
- payload limits
- spam protection
- sanitization
- secure email handling

Never trust arbitrary form input.

---

# 28. AUTHENTICATION

Admin authentication:

```text
Login
↓
Verify password
↓
Create JWT
↓
HTTP-only secure cookie
↓
Protected request
↓
Auth middleware
```

Prefer HTTP-only cookies over storing authentication tokens in localStorage.

Use:

```text
Secure
HttpOnly
SameSite
```

appropriately for production.

---

# 29. ENVIRONMENT VARIABLES

Create:

```text
.env.example
```

Example structure:

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

Never commit the real `.env`.

---

# 30. CORS

Development:

```text
http://localhost:5173
```

Production:

Only allow the real frontend domain.

Do not use:

```text
origin: "*"
```

for authenticated production APIs.

---

# 31. SECURITY MIDDLEWARE

Use:

```text
helmet
express-rate-limit
cors
cookie-parser
```

Also configure:

- request body limits
- secure cookies
- trusted proxy settings when required
- production logging

---

# 32. FRONTEND ROUTING

Recommended:

```text
/
 /work
 /work/:slug

 /collections
 /collections/:slug

 /about

 /inquire

 /admin
 /admin/login
 /admin/dashboard
```

Protected admin pages should use:

```text
ProtectedRoute
```

---

# 33. FRONTEND SERVICE LAYER

Components should not directly contain Axios requests.

Correct:

```text
Component
 ↓
Service
 ↓
API
```

Example:

```text
collectionService.getCollections()
storyService.getStory(slug)
inquiryService.submitInquiry(data)
```

This keeps UI components clean.

---

# 34. FRONTEND STATE

Keep state simple.

Local state:

- menu open/closed
- lightbox
- filters
- form state

Server data:

- collections
- stories
- settings
- inquiries

A global state library should only be introduced if real complexity appears.

Do not add Redux just because the application uses MERN.

---

# 35. FALLBACK CONTENT

During early implementation, temporary local data can be used.

Example:

```text
src/data/fallbackData.js
```

This allows the visual frontend to be built before the API is complete.

Once backend data is ready, replace fallback data with API services.

---

# 36. DESIGN TOKEN IMPLEMENTATION

Centralize:

```text
colors
fonts
spacing
container widths
breakpoints
transition durations
z-index
```

The frontend should not contain random values across every component.

---

# 37. GLOBAL Z-INDEX SYSTEM

Suggested conceptual layers:

```text
base
navigation
mobile menu
modal/lightbox
toast
```

Example:

```text
base: 0
navigation: 100
mobile menu: 500
lightbox: 1000
toast: 1500
```

Exact values can be adjusted.

---

# 38. FRONTEND COMPONENT HIERARCHY

```text
App
│
└── MainLayout
    │
    ├── Navigation
    │
    ├── Page
    │
    └── Footer
```

Page:

```text
Home
├── Hero
├── Introduction
├── SelectedWork
├── Collections
├── FeaturedPhotograph
├── AboutPreview
└── ContactCTA
```

---

# 39. GALLERY COMPONENT ARCHITECTURE

```text
Gallery
├── GalleryFilter
├── GalleryGrid
│   └── ImageTile
│       ├── Image
│       ├── Metadata
│       └── Arrow
└── LoadMore
```

This component can be reused by:

- Work
- Collections
- Story previews
- About behind-the-scenes

---

# 40. STORY COMPONENT ARCHITECTURE

```text
StoryPage
├── StoryHero
├── StoryMeta
├── StoryIntro
├── StorySection
│   ├── StoryImage
│   ├── StoryText
│   ├── ImageText
│   └── FullBleedImage
├── StoryDetails
├── StoryNavigation
└── RelatedStory
```

---

# 41. COLLECTION COMPONENT ARCHITECTURE

```text
CollectionPage
├── CollectionHero
├── CollectionIntro
├── CollectionGallery
├── FeaturedCollectionImage
├── RelatedCollections
└── NextCollection
```

---

# 42. INQUIRY COMPONENT ARCHITECTURE

```text
InquiryPage
├── InquiryHero
├── InquiryIntro
├── InquiryForm
│   ├── FormField
│   ├── SelectField
│   ├── Textarea
│   └── SubmitButton
├── DirectContact
├── Availability
├── FAQ
├── FinalImage
└── FinalCTA
```

---

# 43. ADMIN ARCHITECTURE

```text
Admin
│
├── Login
│
└── Dashboard
    │
    ├── Overview
    ├── Collections
    ├── Stories
    ├── Photographs
    ├── Inquiries
    └── Settings
```

The admin dashboard should use a functional UI.

It does NOT need the same highly editorial visual style as the public website.

Admin usability takes priority.

---

# 44. ADMIN DASHBOARD — MVP

Dashboard overview:

```text
COLLECTIONS
5

STORIES
12

PHOTOGRAPHS
184

NEW INQUIRIES
4
```

Then quick actions:

```text
+ NEW STORY
+ NEW COLLECTION
VIEW INQUIRIES
```

Keep it simple.

---

# 45. COLLECTION ADMIN

Admin should support:

```text
Create collection
Edit collection
Publish/unpublish
Change order
Upload hero
Upload featured image
Edit description
Edit philosophy
```

---

# 46. STORY ADMIN

Admin should support:

```text
Create story
Edit title
Edit slug
Select collection
Upload hero
Edit location
Edit date
Edit introduction
Arrange image sequence
Add text blocks
Publish/unpublish
```

Story ordering should be manageable.

---

# 47. PHOTOGRAPH ADMIN

Support:

```text
Upload
Preview
Set alt text
Set caption
Set category
Set story
Set type
Reorder
Delete
```

Image deletion should also remove the corresponding Cloudinary asset when appropriate.

---

# 48. INQUIRY ADMIN

Statuses:

```text
NEW
CONTACTED
IN PROGRESS
BOOKED
ARCHIVED
```

Admin should be able to:

- open inquiry
- change status
- add internal notes if needed
- archive inquiry

Internal notes must never be exposed through the public API.

---

# 49. EMAIL FLOW

Inquiry:

```text
Visitor
 ↓
POST /api/inquiries
 ↓
Validate
 ↓
Save MongoDB
 ↓
Send photographer notification
 ↓
Optional visitor confirmation
 ↓
Return success
```

If email sending fails after the inquiry is saved, the inquiry should not be lost.

---

# 50. LOGGING

Development:

Use readable request logging.

Production:

Log:

- errors
- authentication failures
- important server events

Do not log:

- passwords
- authentication tokens
- sensitive inquiry content unnecessarily

---

# 51. DATABASE INDEXING

Useful indexes:

```text
Collection.slug
Story.slug
Story.collection
Photograph.story
Photograph.collection
Inquiry.createdAt
Inquiry.status
User.email
```

Unique where appropriate:

```text
Collection.slug
Story.slug
User.email
```

---

# 52. SLUG STRATEGY

URLs should be readable.

Example:

```text
Quiet Morning
↓
quiet-morning
```

Collection:

```text
Portraits
↓
portraits
```

Avoid database IDs in public URLs.

---

# 53. SEO + SERVER ARCHITECTURE NOTE

Because the initial frontend uses React + Vite, SEO needs deliberate implementation.

At minimum:

- dynamic document titles
- meta descriptions
- canonical URLs
- Open Graph metadata
- sitemap
- robots.txt
- descriptive image alt text

If organic search becomes a major acquisition channel, consider moving the public React layer to a React framework with stronger server rendering capabilities later.

Do not let this block the initial MERN build.

---

# 54. CACHING STRATEGY

Public content changes relatively infrequently.

Potential caching:

```text
Collections
Stories
Site Settings
```

Do not cache inquiry submission responses.

Start simple.

Add Redis only if actual traffic requires it.

Do not over-engineer the first version.

---

# 55. API VERSIONING

For the initial project:

```text
/api
```

If the API later becomes public or needs major evolution:

```text
/api/v1
```

Do not introduce unnecessary versioning complexity during MVP unless required.

---

# 56. DEVELOPMENT ENVIRONMENTS

Use:

```text
development
production
```

Optional later:

```text
staging
```

Development:

```text
localhost
```

Production:

real domains.

Never use production database credentials locally unless explicitly necessary.

---

# 57. GIT STRUCTURE

Recommended branches:

```text
main
develop
feature/*
fix/*
```

Example:

```text
feature/homepage-hero
feature/collection-api
feature/inquiry-form
```

Commit style:

```text
feat: add collection API
feat: build photography gallery
fix: correct mobile navigation
refactor: extract image tile
style: refine hero typography
```

---

# 58. DEVELOPMENT MILESTONES

## Milestone 1

```text
React running
Express running
MongoDB connected
```

## Milestone 2

```text
Global design tokens
Navigation
Footer
Responsive layout
```

## Milestone 3

```text
Homepage visual implementation
```

## Milestone 4

```text
MongoDB models
REST API
```

## Milestone 5

```text
Dynamic collections
Dynamic stories
```

## Milestone 6

```text
Inquiry system
```

## Milestone 7

```text
Admin CMS
```

## Milestone 8

```text
Optimization
SEO
Security
Deployment
```

---

# 59. FIRST IMPLEMENTATION TASKS

Do NOT start by building the homepage.

First create:

```text
01 Root repository
02 Client
03 Server
04 Environment files
05 Express server
06 MongoDB connection
07 React application
08 React Router
09 Tailwind
10 Global fonts
11 Global tokens
```

Then verify:

```text
Frontend → works
Backend → works
MongoDB → connected
API → responds
```

Only after this should UI implementation begin.

---

# 60. PHASE 1 CHECKLIST

```text
[ ] Create Git repository
[ ] Initialize root package
[ ] Create client
[ ] Create server
[ ] Install dependencies
[ ] Create .env.example
[ ] Create .gitignore
[ ] Configure Vite
[ ] Configure Tailwind
[ ] Configure React Router
[ ] Create Express app
[ ] Create server entry
[ ] Configure MongoDB
[ ] Test database connection
[ ] Create /api/health
[ ] Test frontend
[ ] Test backend
[ ] Test frontend → backend
```

---

# 61. HEALTH ENDPOINT

Create:

```text
GET /api/health
```

Response:

```json
{
  "success": true,
  "message": "Lumière API is running"
}
```

Use this during development and deployment checks.

---

# 62. DEFINITION OF DONE — FOUNDATION

Phase 1 is complete when:

```text
React app loads
        +
Express server starts
        +
MongoDB connects
        +
/api/health responds
        +
Frontend can call backend
        +
Environment variables work
        +
Git structure is clean
```

---

# 63. WHAT NOT TO DO

Do not:

- put MongoDB credentials in React
- store passwords in plain text
- store original images in MongoDB
- expose Cloudinary secrets to the client
- hardcode production URLs
- duplicate API logic across components
- duplicate navigation/footer
- create one giant React component
- create one giant Express route file
- install libraries without a reason
- build the admin panel before the public architecture works
- optimize prematurely
- sacrifice the editorial design for generic components

---

# 64. PRODUCTION ARCHITECTURE

Final conceptual deployment:

```text
                    DOMAIN
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
      FRONTEND                  API
       React                 Node/Express
          │                       │
          │                       ├──── MongoDB
          │                       │
          │                       └──── Cloudinary
          │
          └──────── HTTPS ─────────┘
```

Potential deployment:

```text
Frontend → Vercel / equivalent
Backend → Node hosting / VPS / managed platform
MongoDB → MongoDB Atlas
Images → Cloudinary
```

The exact provider can be selected later.

---

# 65. SCALABILITY PATH

Start:

```text
React
Express
MongoDB
Cloudinary
```

If traffic grows:

```text
CDN
+
Caching
+
MongoDB indexes
+
API optimization
```

If further growth requires it:

```text
Redis
+
background jobs
+
queue
+
separate media processing
```

Do not introduce these before they solve a real problem.

---

# 66. FINAL IMPLEMENTATION ORDER

The exact recommended order is:

```text
PHASE 1
Project Foundation
        ↓
PHASE 2
Design Tokens
        ↓
PHASE 3
Navigation + Footer
        ↓
PHASE 4
Reusable UI Components
        ↓
PHASE 5
Homepage
        ↓
PHASE 6
Backend Models + API
        ↓
PHASE 7
Dynamic Work + Collections
        ↓
PHASE 8
Story System
        ↓
PHASE 9
About
        ↓
PHASE 10
Inquiry
        ↓
PHASE 11
Admin CMS
        ↓
PHASE 12
SEO + Security + Performance
        ↓
PHASE 13
Deployment
        ↓
PHASE 14
Final QA
```

---

# 67. FINAL ARCHITECTURE SUMMARY

```text
                    LUMIÈRE
                       │
              ┌────────┴────────┐
              │                 │
           PUBLIC             ADMIN
           REACT              REACT
              │                 │
              └────────┬────────┘
                       │
                  EXPRESS API
                       │
          ┌────────────┼────────────┐
          │            │            │
       MongoDB     Cloudinary     Email
          │            │            │
       Metadata     Images       Inquiries
```

Frontend:

```text
React
Vite
React Router
Tailwind
Framer Motion
Axios
React Hook Form
Zod
```

Backend:

```text
Node.js
Express
Mongoose
JWT
bcrypt
Helmet
Rate Limiting
Cloudinary
```

Database:

```text
MongoDB
```

Media:

```text
Cloudinary
```

---

# 68. FINAL STATUS

```text
DESIGN SPECIFICATION       100%
SITE ARCHITECTURE          100%
MERN ARCHITECTURE          100%
DATABASE PLAN              100%
API PLAN                   100%
MEDIA STRATEGY             100%
SECURITY DIRECTION         100%
IMPLEMENTATION             0%
```

The project is now ready for actual Phase 1 development.

The next practical step is:

```text
CREATE MERN PROJECT
        ↓
CONFIGURE CLIENT
        ↓
CONFIGURE SERVER
        ↓
CONNECT MONGODB
        ↓
VERIFY /api/health
```

After the foundation is verified, begin the Lumière design system and global navigation before implementing the homepage.
