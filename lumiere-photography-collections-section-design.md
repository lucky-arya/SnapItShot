# Lumière Photography Website --- Collections / Categories Section

**Project:** Lumière Photography Website\
**Section:** Collections / Categories\
**Design Direction:** Editorial Luxury Photography / Modern Cream
Minimalism\
**Document Version:** 1.0\
**Status:** Design Specification --- Ready for UI Implementation

------------------------------------------------------------------------

# 1. Section Overview

The Collections section is the third major visual chapter of the
homepage.

The previous sections establish:

``` text
01 / INTRO
Visual philosophy
        ↓
02 / WORK
Curated portfolio
        ↓
03 / COLLECTIONS
Photography worlds
```

The Selected Work section shows curated individual work.

The Collections section changes the experience by allowing the visitor
to enter **larger thematic bodies of work**.

Instead of showing individual photographs, this section introduces the
photographer's major visual categories as immersive image-led panels.

------------------------------------------------------------------------

# 2. Core Concept

The Collections section should feel like a set of **large photographic
chapters**.

Recommended categories:

``` text
01 — PORTRAITS
02 — WEDDINGS
03 — TRAVEL
04 — LANDSCAPES
05 — LIFESTYLE
```

Additional categories may be added later if the photographer has enough
strong work to support them.

The section should not feel like a filter system.

It should feel like:

> **Five doors into five different photographic worlds.**

------------------------------------------------------------------------

# 3. Design Personality

The section should feel:

-   Immersive
-   Editorial
-   Cinematic
-   Spacious
-   Curated
-   Emotional
-   Premium
-   Quiet
-   Photographic

Compared with Selected Work, this section should have **larger image
surfaces and less UI**.

Selected Work:

``` text
Curated gallery
```

Collections:

``` text
Immersive chapters
```

------------------------------------------------------------------------

# 4. Background

Primary background:

``` text
#F4F0E8
```

The left information column uses the cream background.

The category panels are image-led.

This creates a strong visual contrast:

``` text
CREAM INFORMATION AREA
          +
FULL-BLEED PHOTOGRAPHIC PANELS
```

------------------------------------------------------------------------

# 5. Section Dimensions

## Desktop

Recommended:

``` text
Top padding:
120–160px

Bottom padding:
140–180px
```

The overall section height will depend on the number and height of
category panels.

## Tablet

``` text
Top:
90–120px

Bottom:
120–150px
```

## Mobile

``` text
Top:
70–90px

Bottom:
100–120px
```

Do not force the entire section into one viewport.

The visitor should scroll through the categories.

------------------------------------------------------------------------

# 6. Section Number

Use the established numbering system:

``` text
03 / 06
```

This appears above the heading.

------------------------------------------------------------------------

# 7. Main Heading

Recommended:

``` text
COLLECTIONS
```

Large editorial serif.

The heading should remain compact because the photography panels are the
primary visual content.

------------------------------------------------------------------------

# 8. Introductory Copy

Recommended:

> Different stories.\
> The same language --- light, people and places.

This communicates that each category has a different subject while the
photographer maintains one visual identity.

The copy should be short.

------------------------------------------------------------------------

# 9. Desktop Layout

The desktop design uses a **split layout**.

Left:

``` text
CREAM EDITORIAL COLUMN
```

Right:

``` text
LARGE STACKED IMAGE PANELS
```

Conceptually:

``` text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  03 / 06        ┌────────────────────────────────────────┐   │
│                 │                                        │   │
│  COLLECTIONS    │             01 PORTRAITS              │   │
│                 │                                        │   │
│  ─────          └────────────────────────────────────────┘   │
│                                                              │
│  Different      ┌────────────────────────────────────────┐   │
│  stories.       │                                        │   │
│                 │             02 WEDDINGS                │   │
│  The same       │                                        │   │
│  language —     └────────────────────────────────────────┘   │
│  light, people                                                │
│  and places.     ┌────────────────────────────────────────┐  │
│                  │                                        │  │
│  EXPLORE →       │              03 TRAVEL                 │  │
│                  │                                        │  │
│                  └────────────────────────────────────────┘  │
│                                                              │
│                  ┌────────────────────────────────────────┐  │
│                  │            04 LANDSCAPES               │  │
│                  └────────────────────────────────────────┘  │
│                                                              │
│                  ┌────────────────────────────────────────┐  │
│                  │             05 LIFESTYLE               │  │
│                  └────────────────────────────────────────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The left column remains visually stable while the right side contains
the image sequence.

------------------------------------------------------------------------

# 10. Desktop Column Widths

Recommended starting point:

``` text
Information column:
26–30%

Gallery column:
70–74%
```

The exact proportion can vary with viewport size.

The left column should never become so narrow that the heading wraps
awkwardly.

------------------------------------------------------------------------

# 11. Desktop Information Column

Content:

``` text
03 / 06

COLLECTIONS

─────

Different stories.
The same language —
light, people and places.

[ circular arrow ]

EXPLORE
COLLECTIONS →
```

The information column can be sticky or visually stable while the
category panels move through the viewport, but scroll-pinning should be
used carefully.

A normal document flow is the default recommendation.

------------------------------------------------------------------------

# 12. Collection Panel

Each category is represented by a wide image.

Example:

``` text
┌────────────────────────────────────────────┐
│                                            │
│  01                                        │
│  PORTRAITS                         ( → )   │
│  People · Emotions · Stories               │
│                                            │
└────────────────────────────────────────────┘
```

The image fills the panel.

------------------------------------------------------------------------

# 13. Collection Panel Height

Desktop:

Approximately:

``` text
180–260px
```

per panel.

The exact height depends on the overall gallery width.

Panels should feel large enough to be immersive but short enough that
multiple categories can be seen during scrolling.

------------------------------------------------------------------------

# 14. Collection Panel Spacing

Use a very small gap between panels.

Recommended:

``` text
4–8px
```

This makes the categories feel like one continuous photographic
exhibition.

Avoid large card gaps.

------------------------------------------------------------------------

# 15. Image Aspect Ratio

Desktop category panels:

Approximately:

``` text
3:1
```

to:

``` text
4:1
```

depending on viewport width.

The image should feel cinematic and panoramic.

------------------------------------------------------------------------

# 16. Category Image Selection

Each category should have a visually representative photograph.

### Portraits

Close environmental portrait.

### Weddings

Emotional couple/wedding scene.

### Travel

Strong location/environment photograph.

### Landscapes

Wide cinematic landscape.

### Lifestyle

Human/environmental everyday moment.

The images should have enough negative space for text.

------------------------------------------------------------------------

# 17. Category Text Placement

Text sits directly over the photograph.

Recommended position:

Bottom-left or center-left.

Example:

``` text
01
PORTRAITS
People · Emotions · Stories
```

The text should remain consistent across all panels.

------------------------------------------------------------------------

# 18. Category Typography

### Number

Sans-serif:

`11–13px`

### Category name

Editorial serif:

`30–48px`

### Description

Sans-serif:

`11–14px`

Use cream/white text.

------------------------------------------------------------------------

# 19. Category Descriptions

Suggested examples:

### Portraits

``` text
People · Emotions · Stories
```

### Weddings

``` text
Love · Moments · Forever
```

### Travel

``` text
Places · Cultures · Perspectives
```

### Landscapes

``` text
Nature · Serenity · Beyond
```

### Lifestyle

``` text
Everyday · Authentic · Real
```

Descriptions should remain short.

------------------------------------------------------------------------

# 20. Arrow Control

Every category panel receives a small circular arrow control.

Example:

``` text
              ╭────╮
              │ →  │
              ╰────╯
```

Position:

Top-right or center-right.

Recommended:

Approximately `42–52px` diameter on desktop.

------------------------------------------------------------------------

# 21. Arrow Hover

Default:

Thin cream border.

Hover:

-   Slight cream fill
-   Arrow moves 3--5px
-   Circle may expand by 1--2px

Do not use aggressive animation.

------------------------------------------------------------------------

# 22. Panel Hover

On desktop hover:

1.  Image scales approximately `1.02–1.03`
2.  Overlay becomes slightly darker
3.  Category text becomes more prominent
4.  Arrow moves
5.  Optional subtle brightness adjustment

The image remains the dominant element.

------------------------------------------------------------------------

# 23. Panel Overlay

Use a subtle bottom/left gradient.

Purpose:

Ensure text remains readable.

The overlay should not visibly flatten the photograph.

Recommended:

``` text
Transparent
      ↓
Very subtle dark gradient
      ↓
Bottom-left
```

------------------------------------------------------------------------

# 24. Collection Panel Cursor

Optional desktop enhancement:

A small custom cursor could display:

``` text
OPEN →
```

when hovering over a panel.

This is optional.

If implemented, it must not replace the normal interactive affordance.

------------------------------------------------------------------------

# 25. Explore Collections CTA

The left column contains:

``` text
EXPLORE
COLLECTIONS →
```

Recommended design:

A small circular arrow button next to the label.

Example:

``` text
╭─────╮
│  →  │   EXPLORE
╰─────╯   COLLECTIONS
```

The CTA leads to the complete collections page.

------------------------------------------------------------------------

# 26. CTA Hover

On hover:

-   Circle expands subtly
-   Arrow moves
-   Text shifts 2--4px
-   Border darkens

Transition:

`250–400ms`

------------------------------------------------------------------------

# 27. Tablet Layout

Tablet changes from split-screen to a stacked header + gallery.

Recommended:

``` text
┌───────────────────────────────────┐
│                                   │
│  03 / 06                          │
│  COLLECTIONS                      │
│  ─────                            │
│                                   │
│  Different stories.               │
│  The same language —              │
│  light, people and places.        │
│                                   │
│  ( → )  EXPLORE COLLECTIONS       │
│                                   │
│  ┌─────────────────────────────┐  │
│  │       01 PORTRAITS          │  │
│  └─────────────────────────────┘  │
│  ┌─────────────────────────────┐  │
│  │       02 WEDDINGS           │  │
│  └─────────────────────────────┘  │
│  ┌─────────────────────────────┐  │
│  │       03 TRAVEL             │  │
│  └─────────────────────────────┘  │
│  ┌─────────────────────────────┐  │
│  │       04 LANDSCAPES         │  │
│  └─────────────────────────────┘  │
│  ┌─────────────────────────────┐  │
│  │       05 LIFESTYLE          │  │
│  └─────────────────────────────┘  │
│                                   │
└───────────────────────────────────┘
```

------------------------------------------------------------------------

# 28. Tablet Panel Height

Approximately:

`150–220px`

depending on available width.

The image should remain cinematic.

------------------------------------------------------------------------

# 29. Tablet Header

The header becomes full-width.

Order:

``` text
03 / 06
COLLECTIONS
Divider
Description
Explore CTA
```

Then categories.

This prevents the left-column layout from becoming cramped.

------------------------------------------------------------------------

# 30. Mobile Layout

Mobile becomes a sequence of full-width image chapters.

``` text
03 / 06

COLLECTIONS

─────

Different stories.
The same language —
light, people and places.

( → )  EXPLORE COLLECTIONS


┌─────────────────────────┐
│ 01                      │
│ PORTRAITS           →   │
│ People · Emotions       │
└─────────────────────────┘

┌─────────────────────────┐
│ 02                      │
│ WEDDINGS            →   │
│ Love · Moments          │
└─────────────────────────┘

┌─────────────────────────┐
│ 03                      │
│ TRAVEL              →   │
│ Places · Cultures       │
└─────────────────────────┘

...
```

------------------------------------------------------------------------

# 31. Mobile Panel Height

Recommended:

`170–230px`

The height should be enough for:

-   Image
-   Number
-   Category name
-   Description
-   Arrow

The image should not become a tiny thumbnail.

------------------------------------------------------------------------

# 32. Mobile Image Ratio

Recommended:

Approximately:

``` text
16:8
```

or slightly taller if necessary.

The exact crop should be art-directed per image.

------------------------------------------------------------------------

# 33. Mobile Text Placement

Bottom-left.

Example:

``` text
01
PORTRAITS
People · Emotions · Stories
```

The arrow remains at bottom-right or center-right.

------------------------------------------------------------------------

# 34. Mobile Touch Interaction

Each entire panel is tappable.

Do not require the user to hit the arrow.

On tap:

-   Small visual press state
-   Navigate to collection

No hover-only behavior.

------------------------------------------------------------------------

# 35. Mobile Scroll Behavior

The section should use normal vertical scrolling.

Do not convert the entire section into a horizontal swipe carousel.

Vertical category browsing is easier to understand and keeps the website
narrative consistent.

------------------------------------------------------------------------

# 36. Scroll Reveal Animation

When each category enters the viewport:

1.  Image starts slightly blurred/low opacity
2.  Image becomes sharp
3.  Panel moves upward slightly
4.  Text fades in
5.  Arrow becomes visible

Recommended duration:

`600–900ms`

------------------------------------------------------------------------

# 37. Category Stagger

Desktop:

Panels can reveal sequentially.

Example:

``` text
Portraits:
0ms

Weddings:
100ms

Travel:
200ms

Landscapes:
300ms

Lifestyle:
400ms
```

On mobile, avoid excessive stagger because the section may be long.

Use simple per-panel reveals.

------------------------------------------------------------------------

# 38. Scroll Parallax

Optional desktop enhancement.

The image can move internally by a very small amount while the panel
scrolls.

Maximum:

`5–10px`

Do not make the panel itself move independently of page scrolling.

The effect should be almost subconscious.

------------------------------------------------------------------------

# 39. Hover Image Motion

Desktop:

``` text
scale:
1.00 → 1.025
```

Optional internal image translation:

`2–5px`

The image must remain clipped inside the panel.

------------------------------------------------------------------------

# 40. Category Ordering

Recommended order:

``` text
01 — PORTRAITS
02 — WEDDINGS
03 — TRAVEL
04 — LANDSCAPES
05 — LIFESTYLE
```

This is a starting content order, not a rigid requirement.

The photographer may reorder categories based on actual portfolio
priorities.

------------------------------------------------------------------------

# 41. Category Selection Logic

The Collections section should not duplicate the Selected Work filter
system.

### Selected Work

Used for:

**Filtering and browsing individual featured work.**

### Collections

Used for:

**Entering complete thematic portfolios.**

This distinction prevents redundant UX.

------------------------------------------------------------------------

# 42. Collection Destination

Each panel should link to a dedicated collection page.

Example:

``` text
/collections/portraits
/collections/weddings
/collections/travel
/collections/landscapes
/collections/lifestyle
```

The exact routing system can be determined during development.

------------------------------------------------------------------------

# 43. Collection Page Relationship

A collection page can later contain:

``` text
Collection Hero
        ↓
Introduction
        ↓
Photography Story
        ↓
Full Gallery
        ↓
Related Collection
        ↓
Contact CTA
```

The homepage Collections section only introduces those worlds.

------------------------------------------------------------------------

# 44. Typography System

### Heading

Editorial serif.

### Category title

Editorial serif.

### Body

Modern sans-serif.

### UI

Modern sans-serif with letter spacing.

This maintains the established site-wide hierarchy.

------------------------------------------------------------------------

# 45. Recommended Fonts

Display:

-   Instrument Serif
-   Cormorant Garamond
-   Playfair Display

Body/UI:

-   Inter
-   Manrope
-   Helvetica-style sans

Use the same font families established in Hero, Introduction, and
Selected Work.

Do not introduce a new font just for Collections.

------------------------------------------------------------------------

# 46. Color Tokens

``` text
Background:
#F4F0E8

Primary Text:
#171614

Secondary Text:
#706B62

Muted Border:
#B8AC9B

Hero/Panel Text:
#F8F4EC

Accent:
Muted Warm Brown
```

------------------------------------------------------------------------

# 47. Responsive Typography

## Desktop

``` text
Section title:
56–76px

Category title:
30–48px

Description:
14–17px

UI:
10–12px
```

## Tablet

``` text
Section title:
46–62px

Category title:
26–40px

Description:
14–16px
```

## Mobile

``` text
Section title:
38–50px

Category title:
26–34px

Description:
12–14px

UI:
10–11px
```

------------------------------------------------------------------------

# 48. Accessibility

Requirements:

-   Each collection panel is keyboard accessible.
-   Each panel has a clear accessible name.
-   Image alt text should identify meaningful photographic content.
-   Decorative images should not create unnecessary screen-reader
    output.
-   Focus states must be visible.
-   Text must maintain adequate contrast.
-   Entire panel should be clickable/tappable.
-   Do not rely only on hover to communicate destination.

------------------------------------------------------------------------

# 49. Focus State

For keyboard navigation:

Use a visible outline around the entire collection panel.

Recommended:

``` text
2px high-contrast outline
```

with a small offset.

Do not remove browser focus indicators without replacing them.

------------------------------------------------------------------------

# 50. Reduced Motion

When reduced motion is enabled:

Disable:

-   Parallax
-   Image zoom
-   Long reveal transitions
-   Staggered movement

Keep:

-   Static image
-   Fade transitions if comfortable
-   Clear hover/focus state
-   Normal navigation

------------------------------------------------------------------------

# 51. Performance

The Collections section uses large images.

Use:

-   Responsive image variants
-   WebP/AVIF where appropriate
-   Compression
-   Lazy loading for lower panels
-   High priority for the first visible panel
-   Fixed aspect-ratio containers
-   Proper image dimensions

Do not load all five full-resolution desktop photographs at maximum
quality immediately.

------------------------------------------------------------------------

# 52. Responsive Image Art Direction

Recommended:

``` text
portrait-collection-desktop.webp
portrait-collection-tablet.webp
portrait-collection-mobile.webp
```

and equivalent assets for each category.

Each crop should prioritize the most important visual subject.

------------------------------------------------------------------------

# 53. Content Requirements

Every category should have:

``` text
Category Number
Category Name
Short Descriptor
Representative Image
Destination
```

Example:

``` text
01
PORTRAITS
People · Emotions · Stories
[image]
→
```

------------------------------------------------------------------------

# 54. Content Guidelines

Category descriptors should be:

-   Short
-   Human
-   Emotional
-   Descriptive
-   Consistent

Avoid long descriptions.

Avoid SEO-heavy copy inside the visual panels.

------------------------------------------------------------------------

# 55. Hover Interaction --- Desktop

Default:

``` text
Image
01
PORTRAITS
People · Emotions · Stories
                         →
```

Hover:

``` text
Image + slight zoom
Subtle dark overlay
Category becomes slightly brighter
Arrow moves
```

The interaction should take approximately:

`250–450ms`

------------------------------------------------------------------------

# 56. Panel Press State

For touch devices:

On tap:

-   Slight opacity change
-   Small scale response if desired
-   Navigate immediately

Do not delay navigation with a long animation.

------------------------------------------------------------------------

# 57. Explore CTA Interaction

Default:

``` text
( → )  EXPLORE
       COLLECTIONS
```

Hover:

``` text
(  →→ ) EXPLORE
          COLLECTIONS
```

The arrow should move slightly.

The CTA remains secondary to the photographs.

------------------------------------------------------------------------

# 58. Section Transition From Selected Work

Selected Work ends with:

``` text
Curated individual photographs
```

Collections begins with:

``` text
Large thematic photographic worlds
```

The background remains cream.

The image density increases.

This creates a natural escalation:

``` text
SELECTED WORK
Small curated set
        ↓
COLLECTIONS
Large visual chapters
```

------------------------------------------------------------------------

# 59. Section Transition Into Featured Photograph

After the five collections, introduce a single immersive photograph.

Conceptually:

``` text
COLLECTIONS
PORTRAITS
WEDDINGS
TRAVEL
LANDSCAPES
LIFESTYLE

        ↓

FULL-WIDTH IMAGE

THE QUIET MOMENT
```

This creates a strong visual reset.

------------------------------------------------------------------------

# 60. Component Structure

Conceptual implementation structure:

``` text
CollectionsSection
│
├── CollectionsHeader
│   ├── SectionNumber
│   ├── Heading
│   ├── Divider
│   ├── Description
│   └── ExploreCTA
│
└── CollectionsList
    └── CollectionPanel[]
        ├── Image
        ├── Overlay
        ├── Number
        ├── Title
        ├── Descriptor
        ├── Arrow
        └── Link
```

------------------------------------------------------------------------

# 61. Collection Panel Data

Each panel should conceptually contain:

``` text
Collection
├── ID
├── Number
├── Title
├── Description
├── Image
├── Desktop Image
├── Tablet Image
├── Mobile Image
├── Alt Text
└── Destination
```

This keeps content separate from presentation.

------------------------------------------------------------------------

# 62. Design Tokens

Initial values:

``` text
Background:
#F4F0E8

Panel Text:
#F8F4EC

Primary Text:
#171614

Muted Text:
#706B62

Border:
#B8AC9B

Desktop Section Padding:
120–160px

Tablet Section Padding:
90–120px

Mobile Section Padding:
70–90px

Desktop Panel Height:
180–260px

Tablet Panel Height:
150–220px

Mobile Panel Height:
170–230px

Panel Gap:
4–8px

Panel Hover Scale:
1.02–1.03

Hover Transition:
250–450ms

Reveal:
600–900ms

Desktop Parallax:
5–10px
```

------------------------------------------------------------------------

# 63. Visual QA --- Desktop

-   [ ] Cream information column is balanced
-   [ ] Category panels dominate the visual area
-   [ ] Images are cinematic
-   [ ] Text remains readable
-   [ ] Category hierarchy is clear
-   [ ] Panel gaps are subtle
-   [ ] Arrows are visible but understated
-   [ ] Hover zoom is subtle
-   [ ] Explore CTA is secondary
-   [ ] Section feels like an exhibition

------------------------------------------------------------------------

# 64. Visual QA --- Tablet

-   [ ] Header appears before categories
-   [ ] Category panels remain wide
-   [ ] Panel text remains readable
-   [ ] No horizontal overflow
-   [ ] Touch targets are comfortable
-   [ ] Images retain strong crops
-   [ ] Section doesn't feel overly tall

------------------------------------------------------------------------

# 65. Visual QA --- Mobile

-   [ ] Header is compact
-   [ ] Categories are full-width
-   [ ] Images remain large enough
-   [ ] Text remains readable
-   [ ] Arrow is easy to tap
-   [ ] Entire panel is clickable
-   [ ] No hover-only interaction
-   [ ] Category order is easy to understand
-   [ ] Images don't feel like thumbnails
-   [ ] Scrolling remains natural

------------------------------------------------------------------------

# 66. Example Desktop Content

``` text
03 / 06

COLLECTIONS

─────

Different stories.
The same language —
light, people and places.

( → )  EXPLORE COLLECTIONS


01
PORTRAITS
People · Emotions · Stories                         →

02
WEDDINGS
Love · Moments · Forever                            →

03
TRAVEL
Places · Cultures · Perspectives                    →

04
LANDSCAPES
Nature · Serenity · Beyond                          →

05
LIFESTYLE
Everyday · Authentic · Real                          →
```

------------------------------------------------------------------------

# 67. Example Mobile Content

``` text
03 / 06

COLLECTIONS

─────

Different stories.
The same language —
light, people and places.

( → ) EXPLORE COLLECTIONS


01
PORTRAITS
People · Emotions · Stories                     →

[ IMAGE ]


02
WEDDINGS
Love · Moments · Forever                       →

[ IMAGE ]


03
TRAVEL
Places · Cultures · Perspectives               →

[ IMAGE ]
```

------------------------------------------------------------------------

# 68. UX Intent

The visitor should leave this section understanding:

### 1. The photographer has multiple specialties

The categories communicate breadth.

### 2. Each specialty has its own emotional identity

The image and descriptor work together.

### 3. The portfolio can be explored deeply

Every panel provides a clear route to a complete collection.

------------------------------------------------------------------------

# 69. What This Section Should NOT Become

Do not make it:

-   A standard card grid
-   A list of service packages
-   A filter interface
-   A collection of tiny thumbnails
-   A horizontal slider by default
-   A busy navigation system
-   A text-heavy section
-   A stock-image showcase

The images must remain the primary content.

------------------------------------------------------------------------

# 70. Final Design Principle

> **Collections should feel like chapters, not categories.**

The visitor should feel:

``` text
PORTRAITS
      ↓
A world of people

WEDDINGS
      ↓
A world of emotion

TRAVEL
      ↓
A world of places

LANDSCAPES
      ↓
A world of stillness

LIFESTYLE
      ↓
A world of everyday moments
```

The design formula is:

``` text
Cream editorial introduction
        +
Large cinematic image panels
        +
Minimal typography
        +
Subtle arrows
        +
Quiet motion
        +
Clear collection destinations
```

This keeps the website visually consistent while giving the portfolio a
stronger sense of depth and storytelling.
