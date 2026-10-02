# Lumière Photography — Collection Detail Page Design

## 01. Purpose

The Collection Detail page is the bridge between the broad **Collections** page and the individual photographic stories.

It should feel like entering a specific visual world.

Examples:

- `/collections/portraits`
- `/collections/weddings`
- `/collections/travel`
- `/collections/landscapes`
- `/collections/lifestyle`

The same structural template is reused across all collections, while the imagery, title, description, metadata, and visual pacing change.

The experience should feel like opening a photographic book rather than browsing a category page.

---

# 02. Core Experience

The page narrative is:

```text
ARRIVE
↓
UNDERSTAND THE COLLECTION
↓
ENTER THE PHOTOGRAPHIC WORLD
↓
EXPLORE THE STORIES
↓
PAUSE
↓
DISCOVER RELATED WORK
↓
MOVE TO THE NEXT COLLECTION
```

The collection itself should remain the protagonist.

Avoid:

- card grids
- excessive UI
- large filter panels
- badges
- generic gallery controls
- excessive text
- SaaS-style layouts

---

# 03. Page Structure

Complete page:

```text
GLOBAL NAVIGATION
        ↓
COLLECTION HERO
        ↓
COLLECTION INTRODUCTION
        ↓
CURATED IMAGE SEQUENCE
        ↓
FULL-BLEED FEATURE
        ↓
EDITORIAL IMAGE + TEXT
        ↓
MORE WORK
        ↓
RELATED STORIES
        ↓
NEXT COLLECTION
        ↓
GLOBAL FOOTER
```

---

# 04. Collection Hero

The hero should immediately establish the visual identity of the collection.

Recommended layout:

```text
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│                                             │
│                  HERO IMAGE                 │
│                                             │
│                                             │
│                                             │
│  PORTRAITS                                  │
│  PEOPLE · EMOTIONS · STORIES                │
│                                             │
└─────────────────────────────────────────────┘
```

The hero image should occupy approximately:

`82–95vh`

Do not force a full 100vh hero if important metadata would become inaccessible.

---

# 05. Hero Navigation

The global navigation remains over the image.

Desktop:

```text
← COLLECTIONS             LUMIÈRE             INQUIRE →
```

The left side should provide context.

Instead of a generic `BACK`, use:

`← COLLECTIONS`

This makes navigation immediately understandable.

Mobile:

```text
← COLLECTIONS       LUMIÈRE       ☰
```

---

# 06. Hero Typography

Bottom-left editorial stack:

```text
03 / 05

PORTRAITS

PEOPLE · EMOTIONS · STORIES
```

The collection title uses the display serif.

Recommended desktop size:

`72–110px`

Tablet:

`58–80px`

Mobile:

`44–60px`

The descriptor uses uppercase sans-serif typography with generous letter spacing.

---

# 07. Hero Image Treatment

The photograph should remain natural.

Recommended:

- `object-fit: cover`
- art-directed focal point
- subtle dark gradient only behind text
- no heavy overlay
- no border
- no shadow

The gradient should occupy only the lower portion of the image.

Avoid making every collection hero artificially dark.

---

# 08. Collection Metadata

A small metadata line can appear near the hero text:

```text
PORTRAITS

PEOPLE · EMOTIONS · STORIES

12 STORIES
2023 — 2026
```

For other collections:

### Weddings

`LOVE · MOMENTS · FOREVER`

### Travel

`PLACES · CULTURES · PERSPECTIVES`

### Landscapes

`NATURE · SERENITY · BEYOND`

### Lifestyle

`EVERYDAY · AUTHENTIC · REAL`

Keep metadata restrained.

---

# 09. Collection Introduction

After the hero, return to the cream background.

Use a large amount of whitespace.

Desktop structure:

```text
01 / COLLECTION

PORTRAITS

There is a story in every face,
a feeling in every gesture,
and a moment between them.

                              Based in India
                              Available Worldwide
```

The text should not become a long article.

Recommended length:

`40–90 words`

---

# 10. Collection Philosophy

Each collection should have a unique short statement.

Example:

## Portraits

> I look for the moments when people stop posing and simply become themselves.

## Weddings

> The photographs live in the spaces between the ceremony — a glance, a hand, a breath, a laugh.

## Travel

> I photograph places through the people, textures and quiet details that make them feel alive.

## Landscapes

> Light changes everything. I wait for the brief moments when a landscape becomes something more.

## Lifestyle

> The most honest stories are often found in ordinary moments.

These statements should be adapted to the photographer's authentic voice.

---

# 11. Collection Gallery

This is the heart of the page.

Do not use a fixed grid.

Use a **curated editorial sequence**.

Example:

```text
                 LARGE IMAGE

       ┌───────────────────────────┐
       │                           │
       │                           │
       │                           │
       └───────────────────────────┘


┌───────────────┐       ┌───────────────┐
│               │       │               │
│    IMAGE      │       │    IMAGE      │
│               │       │               │
└───────────────┘       └───────────────┘


                 WIDE IMAGE


┌──────────────────────┐
│                      │
│       IMAGE          │
│                      │
└──────────────────────┘
```

The layout should change according to the photography.

The photographer should be able to intentionally control the sequence.

---

# 12. Editorial Rhythm

Use a repeating rhythm:

```text
HERO
↓
PAUSE
↓
LARGE
↓
TWO SMALL
↓
PAUSE
↓
WIDE
↓
TEXT
↓
LARGE
↓
TWO SMALL
↓
FULL BLEED
```

This avoids gallery fatigue.

---

# 13. Full-Bleed Photograph

Every collection should contain at least one immersive full-width image.

Example:

```text
┌───────────────────────────────────────────────┐
│                                               │
│                                               │
│                 PHOTOGRAPH                    │
│                                               │
│                                               │
└───────────────────────────────────────────────┘
```

Height:

`65–90vh`

Use this moment as the emotional centerpiece of the collection.

No UI should compete with it.

Optional small caption:

```text
THE MOMENT BEFORE THE RAIN
RAJASTHAN · 2025
```

Place it below the image.

---

# 14. Image Captions

Captions should be used selectively.

Do not caption every photograph.

When used:

```text
01
OLD DELHI
2025
```

or:

```text
A QUIET MORNING
JAIPUR · INDIA
```

Typography:

- uppercase sans-serif
- 10–13px
- tracking around `0.12em`
- secondary color

Captions should feel like photographic archive metadata.

---

# 15. Image Interaction

Desktop hover:

- image scale: approximately `1.02`
- metadata fades in
- arrow shifts slightly
- cursor can change to `VIEW`

Keep the interaction subtle.

Do not apply aggressive zoom.

---

# 16. Collection Navigation

At approximately the midpoint or after the major image sequence, include a small navigation line:

```text
← PREVIOUS COLLECTION
```

and

```text
NEXT COLLECTION →
```

Do not make this into large buttons.

It should feel like moving through a book.

---

# 17. Related Work

Near the bottom:

```text
MORE FROM LUMIÈRE

Explore other photographic worlds.
```

Then show three carefully selected works.

Example:

```text
┌────────────────┐
│                │
│    WEDDINGS    │
│                │
└────────────────┘

┌────────────────┐
│                │
│    TRAVEL      │
│                │
└────────────────┘

┌────────────────┐
│                │
│  LANDSCAPES    │
│                │
└────────────────┘
```

These should be large editorial images, not card components.

---

# 18. Next Collection

The final transition should be visually strong.

Example:

```text
NEXT COLLECTION

WEDDINGS
LOVE · MOMENTS · FOREVER

                           →
```

Use a large background photograph.

Recommended height:

`60–75vh`

Interaction:

Hovering anywhere over the image can reveal:

`EXPLORE WEDDINGS →`

The entire section should be clickable.

---

# 19. Collection Footer Transition

After the next collection:

```text
NEXT COLLECTION
        ↓
large negative space
        ↓
GLOBAL FOOTER
```

Do not add another CTA between them.

The page should end calmly.

---

# 20. Desktop Layout

Recommended content width:

`1440px maximum`

Outer padding:

`48–64px`

Editorial gallery can use the full available width.

Suggested grid:

`12 columns`

Example:

- large image: 7–8 columns
- small image: 4–5 columns
- asymmetric offset: 1–2 columns

Do not force every image into identical dimensions.

---

# 21. Tablet Layout

Tablet should simplify the desktop composition.

Recommended:

- full-width hero
- centered/left editorial intro
- two-column gallery where appropriate
- full-width feature images
- fewer extreme offsets

Example:

```text
┌──────────────────────┐
│                      │
│       IMAGE          │
│                      │
└──────────────────────┘

┌────────────┐ ┌────────────┐
│            │ │            │
│   IMAGE    │ │   IMAGE    │
│            │ │            │
└────────────┘ └────────────┘
```

Avoid excessive masonry complexity on tablet.

---

# 22. Mobile Layout

Mobile becomes a vertical photographic narrative.

Structure:

```text
COLLECTION HERO

↓
INTRODUCTION

↓
IMAGE

↓
IMAGE

↓
IMAGE

↓
SHORT CAPTION

↓
FULL-BLEED IMAGE

↓
IMAGE

↓
RELATED WORK

↓
NEXT COLLECTION
```

Every image should have enough surrounding whitespace.

Recommended side margin:

`18–22px`

Full-bleed images can intentionally break the margin.

---

# 23. Mobile Hero

Recommended:

`72–88vh`

If the photograph is portrait-oriented:

Use approximately:

`4:5`

If the photograph is landscape-oriented:

Use approximately:

`3:2` or `16:9`

The crop should be manually art-directed.

---

# 24. Mobile Typography

Collection title:

`44–60px`

Intro heading:

`36–48px`

Body:

`16–18px`

Metadata:

`10–12px`

Avoid oversized desktop typography on mobile.

---

# 25. Scroll Behavior

The page should use normal scrolling.

Do not implement:

- scroll-jacking
- horizontal page scrolling
- pinned galleries that trap the user
- complex scroll-controlled animations

Optional:

- subtle image reveal
- subtle opacity transition
- very small parallax movement

Maximum parallax movement:

approximately `5–10px`

---

# 26. Loading Experience

For image-heavy pages:

Initial loading:

- hero image loads immediately
- first visible gallery images prioritized
- below-the-fold images lazy loaded

Use intrinsic image dimensions to prevent layout shifts.

Recommended image formats:

- AVIF where supported
- WebP fallback
- JPEG fallback when necessary

Maintain responsive image sizes.

---

# 27. Image Art Direction

Each collection should have its own visual character.

## Portraits

Prioritize:

- faces
- emotion
- natural expressions
- environmental portraits
- intimate framing

## Weddings

Prioritize:

- emotional moments
- ceremonies
- details
- family
- movement
- quiet interactions

## Travel

Prioritize:

- people
- architecture
- street scenes
- cultural details
- landscapes

## Landscapes

Prioritize:

- atmosphere
- light
- scale
- negative space
- changing weather

## Lifestyle

Prioritize:

- authentic moments
- interiors
- daily routines
- people in context
- natural movement

---

# 28. Collection-Specific Color

Do not create five completely different color themes.

The site remains cream-based.

Instead, allow each collection's photography to establish its own mood.

Possible subtle accents:

- Portraits → warm neutral
- Weddings → soft blush/brown
- Travel → muted earth
- Landscapes → stone/olive
- Lifestyle → warm beige

These should influence image selection and small metadata accents, not redesign the interface.

---

# 29. Accessibility

All collection pages must support:

- semantic headings
- meaningful image alt text
- keyboard navigation
- visible focus states
- accessible previous/next controls
- sufficient contrast
- reduced motion
- accessible navigation labels

Decorative images should use appropriate empty alt attributes.

Images conveying meaningful information require descriptive alt text.

---

# 30. SEO Structure

Recommended hierarchy:

```text
H1
Collection Name

H2
Collection Introduction

H2
Selected Work

H2
Related Collections
```

Each collection should have unique:

- title
- meta description
- Open Graph image
- canonical URL
- descriptive image alt text

Example:

```text
/collections/portraits
/collections/weddings
/collections/travel
/collections/landscapes
/collections/lifestyle
```

---

# 31. Content Model

Every collection should conceptually contain:

```text
Collection
├── title
├── number
├── descriptor
├── hero image
├── introduction
├── philosophy
├── metadata
├── gallery
│   ├── image
│   ├── caption
│   ├── location
│   └── year
├── featured image
├── related work
└── next collection
```

This allows the same design template to power all collections.

---

# 32. Interaction Rules

Maintain the global Lumière interaction language.

### Links

Subtle underline.

### Arrows

Move `4–8px`.

### Images

Scale `1.02–1.03`.

### Section reveals

Fade + very small upward movement.

### Navigation

Cream/transparent transition.

### Buttons

Avoid heavy fill states unless used for the primary CTA.

---

# 33. Reduced Motion

With reduced motion enabled:

Disable:

- image scale animations
- parallax
- page transitions
- staggered gallery reveals

Keep:

- instant image state changes
- focus indicators
- normal scrolling
- readable content

---

# 34. Recommended Collection Page Length

A collection should feel substantial without becoming exhausting.

Recommended:

`12–25 carefully selected images`

rather than hundreds of images.

The goal is:

**curation over quantity.**

---

# 35. Final Collection Experience

The visitor should finish a collection feeling:

> “I understand this photographer's perspective.”

Not:

> “I have seen every image.”

The page should leave some space for curiosity.

---

# 36. Example — Portraits

```text
GLOBAL NAV
      ↓

HERO

PORTRAITS
PEOPLE · EMOTIONS · STORIES

      ↓

INTRO

PORTRAITS

There is a story in every face,
a feeling in every gesture,
and a moment between them.

      ↓

LARGE PORTRAIT

      ↓

TWO IMAGES

      ↓

WIDE IMAGE

      ↓

SHORT CAPTION

      ↓

FULL-BLEED FEATURE

      ↓

EDITORIAL IMAGE + TEXT

      ↓

MORE FROM LUMIÈRE

      ↓

NEXT COLLECTION

WEDDINGS →

      ↓

FOOTER
```

This becomes the reusable master template for all five collections.

---

# 37. Final Design Principle

The Collection Detail page should feel like a **chapter in a photography book**.

The interface should disappear whenever the photograph deserves attention.

The correct visual hierarchy is:

```text
PHOTOGRAPH
    ↓
WHITESPACE
    ↓
TYPOGRAPHY
    ↓
METADATA
    ↓
NAVIGATION
```

Never reverse this hierarchy.

The final result should feel:

**quiet, cinematic, editorial, human, premium, warm, and intentionally curated.**
