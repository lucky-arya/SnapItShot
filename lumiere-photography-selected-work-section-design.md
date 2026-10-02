# Lumière Photography Website --- Selected Work Section

**Project:** Lumière Photography Website\
**Section:** Selected Work / Portfolio Gallery\
**Design Direction:** Editorial Luxury Photography / Modern Cream
Minimalism\
**Document Version:** 1.0\
**Status:** Design Specification --- Ready for UI Implementation

------------------------------------------------------------------------

# 1. Section Overview

The Selected Work section is the primary portfolio showcase of the
website.

The Hero introduces the photographer emotionally.

The Introduction communicates the photographer's visual philosophy.

The Selected Work section provides the actual visual evidence.

### Narrative progression

``` text
HERO
Emotion
   ↓
INTRODUCTION
Perspective
   ↓
SELECTED WORK
Portfolio
   ↓
COLLECTIONS
Deeper exploration
```

The visitor should immediately understand:

-   What type of photography the photographer creates
-   The visual quality of the work
-   The breadth of photography categories
-   That individual collections can be explored further

------------------------------------------------------------------------

# 2. Core Design Principle

Do not use a conventional equal-sized card grid.

Avoid:

``` text
┌────────┐ ┌────────┐ ┌────────┐
│ IMAGE  │ │ IMAGE  │ │ IMAGE  │
└────────┘ └────────┘ └────────┘

┌────────┐ ┌────────┐ ┌────────┐
│ IMAGE  │ │ IMAGE  │ │ IMAGE  │
└────────┘ └────────┘ └────────┘
```

Instead, use an asymmetric editorial composition.

The gallery should feel closer to:

-   A photography magazine
-   A printed portfolio
-   A gallery wall
-   An art exhibition

than a SaaS/product grid.

------------------------------------------------------------------------

# 3. Section Personality

The section should feel:

-   Editorial
-   Curated
-   Visual
-   Premium
-   Spacious
-   Artistic
-   Structured
-   Minimal
-   Confident

The section should not feel:

-   Crowded
-   Commercial
-   Template-based
-   Like an e-commerce gallery
-   Like a generic masonry component
-   Over-animated

------------------------------------------------------------------------

# 4. Background

Primary background:

``` text
#F4F0E8
```

Alternative:

``` text
#F6F1E8
```

The background should remain consistent with the Introduction section.

The photographs provide most of the visual color.

------------------------------------------------------------------------

# 5. Section Spacing

The Selected Work section should have generous vertical breathing room.

## Desktop

Approximate:

``` text
Top padding:
140–180px

Bottom padding:
160–200px
```

## Tablet

``` text
Top:
100–140px

Bottom:
120–160px
```

## Mobile

``` text
Top:
80–100px

Bottom:
100–130px
```

The exact values should adapt to the gallery height.

------------------------------------------------------------------------

# 6. Section Label

Use the established section numbering system.

Recommended:

``` text
02 / 06
```

or:

``` text
02
│
WORK
```

For responsive simplicity, use:

### Desktop

``` text
02 / 06
```

followed by the vertical editorial title.

### Tablet/mobile

``` text
02 / 06
```

followed by the heading.

------------------------------------------------------------------------

# 7. Main Heading

Recommended:

``` text
SELECTED
WORK
```

Use a large serif typeface.

Example:

``` text
SELECTED
WORK
```

The line break should remain intentional.

Do not use:

``` text
Selected Work
```

as a normal sentence-case heading.

Uppercase reinforces the editorial identity.

------------------------------------------------------------------------

# 8. Heading Typography

Use the same display serif as the Introduction section.

Recommended directions:

-   Instrument Serif
-   Cormorant Garamond
-   Playfair Display
-   Similar editorial serif

### Desktop

Approximately:

`56–78px`

### Tablet

Approximately:

`46–64px`

### Mobile

Approximately:

`36–48px`

The exact size depends on the selected font.

------------------------------------------------------------------------

# 9. Heading Color

Primary:

``` text
#171614
```

Avoid pure black.

The text should feel soft against the cream background.

------------------------------------------------------------------------

# 10. Supporting Description

Recommended copy:

> A collection of moments, places and people that continue to inspire.

This is intentionally short.

The paragraph should describe the collection without becoming a
marketing pitch.

------------------------------------------------------------------------

# 11. Supporting Copy Typography

Use the website's body sans-serif.

Recommended:

-   Inter
-   Manrope
-   Similar neutral sans

Approximate:

Desktop:

`14–17px`

Tablet:

`14–16px`

Mobile:

`14–16px`

Line-height:

`1.5–1.7`

Maximum width:

`280–340px`

------------------------------------------------------------------------

# 12. View All Work CTA

Recommended:

``` text
VIEW ALL WORK →
```

This should be a small editorial link.

Do not use a large filled button.

### Default

``` text
VIEW ALL WORK →
```

### Hover

Arrow shifts slightly.

Text may receive a subtle underline or border animation.

------------------------------------------------------------------------

# 13. Category Filters

Categories allow visitors to explore the portfolio.

Recommended categories:

``` text
ALL
PORTRAITS
WEDDINGS
TRAVEL
LANDSCAPES
LIFESTYLE
```

Additional categories can be added later if the photographer actually
has enough work to support them.

Do not create categories just for visual variety.

------------------------------------------------------------------------

# 14. Filter Design

Filters should look like editorial controls.

Example:

``` text
╭─────╮
│ ALL │
╰─────╯

╭──────────╮
│ PORTRAITS│
╰──────────╯
```

### Active

Filled dark charcoal background with cream text.

### Inactive

Cream background with thin muted border.

### Hover

Very subtle background transition.

------------------------------------------------------------------------

# 15. Filter Typography

Use sans-serif.

Approximate:

`10–12px`

Use:

-   Uppercase
-   Letter spacing
-   Medium weight

The filters should remain visually secondary to the photographs.

------------------------------------------------------------------------

# 16. Desktop Layout

Recommended composition:

``` text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  02 / 06                                                     │
│                                                              │
│  SELECTED            ┌────────────────┐ ┌──────────────┐    │
│  WORK                │                │ │              │    │
│                      │                │ │    TRAVEL    │    │
│  ─────               │   PORTRAITS   │ │              │    │
│                      │                │ └──────────────┘    │
│  A collection of     │                │ ┌──────────────┐    │
│  moments, places     │                │ │   WEDDINGS   │    │
│  and people...       └────────────────┘ └──────────────┘    │
│                                                              │
│  VIEW ALL WORK →       ┌──────────────────────┐              │
│                        │                      │              │
│                        │     LANDSCAPES       │              │
│                        │                      │              │
│                        └──────────────────────┘              │
│                                              ┌─────────────┐ │
│                                              │  LIFESTYLE  │ │
│                                              └─────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The exact mosaic can be adjusted according to the available photography.

------------------------------------------------------------------------

# 17. Desktop Grid Structure

The recommended visual hierarchy:

### Image 01 --- Portraits

Large dominant image.

### Image 02 --- Travel

Medium landscape image.

### Image 03 --- Weddings

Medium landscape image.

### Image 04 --- Landscapes

Wide medium image.

### Image 05 --- Lifestyle

Smaller supporting image.

This produces:

``` text
01 LARGE
02 MEDIUM     03 MEDIUM
04 WIDE       05 SMALL
```

The goal is rhythm, not mathematical symmetry.

------------------------------------------------------------------------

# 18. Dominant Image

The dominant Portraits image should establish the visual focus.

Recommended ratio:

Approximately:

`4:5`

or

`3:4`

It should be significantly larger than the supporting tiles.

------------------------------------------------------------------------

# 19. Secondary Images

Travel and Weddings:

Recommended ratio:

`16:10` or approximately `3:2`

These should work as horizontal editorial photographs.

------------------------------------------------------------------------

# 20. Bottom Images

Landscapes:

Wide cinematic crop.

Lifestyle:

Smaller portrait or square-ish crop depending on source material.

The image ratios can vary intentionally.

------------------------------------------------------------------------

# 21. Image Captions

Each image should have a small overlay label.

Example:

``` text
01
PORTRAITS
```

Bottom-left.

And an arrow:

``` text
→
```

Bottom-right.

This is enough.

Do not add long descriptions directly over the photographs.

------------------------------------------------------------------------

# 22. Caption Typography

Category label:

-   Serif or refined sans-serif
-   Uppercase
-   Small
-   Cream/white

Number:

-   Sans-serif
-   Small
-   Slightly muted

Example:

``` text
01
PORTRAITS                         →
```

------------------------------------------------------------------------

# 23. Image Overlay

Default images can have a very subtle gradient at the bottom.

Purpose:

To ensure labels remain readable.

The gradient should be almost invisible.

Avoid large black overlays.

------------------------------------------------------------------------

# 24. Hover Interaction

Desktop hover:

``` text
DEFAULT
┌───────────────┐
│               │
│    IMAGE      │
│               │
│ PORTRAITS  →  │
└───────────────┘

             ↓

HOVER
┌───────────────┐
│               │
│    IMAGE      │
│   slight      │
│    zoom       │
│ PORTRAITS  →  │
└───────────────┘
```

------------------------------------------------------------------------

# 25. Hover Zoom

Recommended:

`1.00 → 1.02/1.03`

Maximum:

Approximately `3%`

The photograph should remain elegant.

Avoid:

-   10% zoom
-   Rotation
-   3D effects
-   Glitch effects
-   Strong blur

------------------------------------------------------------------------

# 26. Hover Arrow

Default:

``` text
→
```

Hover:

The arrow moves approximately:

`4–8px`

The movement should be smooth.

------------------------------------------------------------------------

# 27. Hover Overlay

Optional:

Increase the bottom gradient slightly.

Do not darken the entire image heavily.

The photograph should remain visible.

------------------------------------------------------------------------

# 28. Gallery Item Interaction

Each image tile should be clickable.

Click behavior:

Open its collection or project page.

For example:

``` text
PORTRAITS
    ↓
Portraits Collection
```

The entire tile should be interactive, not just the arrow.

------------------------------------------------------------------------

# 29. Tablet Layout

Tablet should preserve the mosaic but simplify the surrounding layout.

Recommended:

``` text
02 / 06

SELECTED WORK

A collection of moments...

VIEW ALL WORK →

ALL  PORTRAITS  WEDDINGS  TRAVEL  LANDSCAPES  LIFESTYLE

┌──────────────────┐ ┌─────────────┐
│                  │ │             │
│    PORTRAITS     │ │   TRAVEL    │
│                  │ │             │
│                  │ ├─────────────┤
│                  │ │  WEDDINGS   │
└──────────────────┘ └─────────────┘

┌──────────────────┐ ┌─────────────┐
│   LANDSCAPES     │ │  LIFESTYLE  │
└──────────────────┘ └─────────────┘
```

------------------------------------------------------------------------

# 30. Tablet Header Arrangement

The section header should appear above the gallery.

This makes the layout easier to scan.

Recommended order:

``` text
02 / 06
SELECTED WORK
Description
View All Work
Filters
Gallery
```

------------------------------------------------------------------------

# 31. Tablet Filters

If all filters do not fit comfortably in one row:

Use horizontal scrolling.

Example:

``` text
ALL   PORTRAITS   WEDDINGS   TRAVEL   → 
```

The filter row should remain on one line rather than wrapping into a
messy multi-line cluster.

------------------------------------------------------------------------

# 32. Mobile Layout

Mobile becomes a compact editorial portfolio.

Recommended:

``` text
02 / 06

SELECTED
WORK

─────

A collection of moments,
places and people that
continue to inspire.

VIEW ALL WORK →

ALL   PORTRAITS   WEDDINGS
TRAVEL   LANDSCAPES   →
```

Then gallery:

``` text
┌─────────────────────────┐
│                         │
│       PORTRAITS         │
│                         │
└─────────────────────────┘

┌────────────┐ ┌────────────┐
│   TRAVEL   │ │  WEDDINGS  │
└────────────┘ └────────────┘

┌────────────┐ ┌────────────┐
│ LANDSCAPE  │ │ LIFESTYLE  │
└────────────┘ └────────────┘
```

------------------------------------------------------------------------

# 33. Mobile Dominant Image

Portraits remains the first and largest image.

Recommended:

``` text
Width:
100% of content area

Ratio:
approximately 4:5
```

The first image should establish the visual quality immediately.

------------------------------------------------------------------------

# 34. Mobile Secondary Grid

Travel and Weddings:

Two columns.

Landscapes and Lifestyle:

Two columns.

Keep the gutters small but intentional.

Recommended gutter:

Approximately `8–12px`.

------------------------------------------------------------------------

# 35. Mobile Filter Behavior

Use horizontal scrolling.

Do not create a dropdown unless the number of categories becomes very
large.

The visitor should be able to swipe:

``` text
ALL → PORTRAITS → WEDDINGS → TRAVEL → ...
```

Active category remains visually obvious.

------------------------------------------------------------------------

# 36. Mobile Captions

Captions remain inside the image.

Use:

``` text
01
PORTRAITS
```

with the arrow.

Keep typography small enough to preserve image dominance.

------------------------------------------------------------------------

# 37. Category Filtering Behavior

When a category is selected:

1.  Active filter changes state
2.  Existing gallery items begin transition
3.  New category arrangement appears
4.  Images settle into position
5.  Section height adjusts naturally

The transition should not feel like a hard reload.

------------------------------------------------------------------------

# 38. Filter Transition

Recommended animation:

``` text
Current gallery
      ↓
opacity / position transition
      ↓
new gallery
      ↓
settle
```

Timing:

Approximately `400–700ms`

Avoid overly long layout animations.

------------------------------------------------------------------------

# 39. Filter Active State

Default:

``` text
ALL
```

Active:

``` text
● ALL
```

or filled pill:

``` text
╭─────╮
│ ALL │
╰─────╯
```

Recommended filled pill.

------------------------------------------------------------------------

# 40. Filter Hover State

Inactive hover:

-   Border becomes darker
-   Background slightly darkens
-   Text becomes more prominent

Transition:

`200–300ms`

------------------------------------------------------------------------

# 41. Gallery Reveal Animation

When the section enters the viewport:

### Phase 1

Header fades/slides upward.

### Phase 2

Gallery images reveal one after another.

### Phase 3

Captions fade in.

### Phase 4

Filters settle into final state.

The stagger should be subtle.

------------------------------------------------------------------------

# 42. Image Reveal

Recommended:

-   Start with slight vertical offset
-   Use a clipping/mask reveal
-   Fade from low opacity
-   End at natural position

Avoid dramatic image zooming.

------------------------------------------------------------------------

# 43. Recommended Stagger

Example:

``` text
Image 01:
0ms

Image 02:
80ms

Image 03:
160ms

Image 04:
240ms

Image 05:
320ms
```

The exact timing can be adjusted based on performance and visual feel.

------------------------------------------------------------------------

# 44. Scroll Interaction

The gallery itself should not hijack scrolling.

Users should be able to naturally scroll through the section.

Avoid:

-   Fullscreen scroll snapping
-   Forced horizontal scrolling
-   Scroll-jacking
-   Long pinned gallery animations

The photography should feel integrated into the page.

------------------------------------------------------------------------

# 45. Image Loading

Use progressive image loading.

Suggested experience:

``` text
Placeholder
   ↓
Low-quality preview
   ↓
Full-resolution image
```

The final image should appear naturally.

Do not show large blank white rectangles while images load.

------------------------------------------------------------------------

# 46. Image Aspect Ratio Stability

Reserve the intended image dimensions before the actual image loads.

This prevents layout shift.

Each gallery item should know its intended aspect ratio.

Examples:

``` text
Portrait:
4:5

Landscape:
3:2

Cinematic:
16:9
```

------------------------------------------------------------------------

# 47. Responsive Art Direction

Use different crops where necessary.

Example:

``` text
portraits-desktop.webp
portraits-tablet.webp
portraits-mobile.webp
```

The mobile crop should prioritize the subject.

Never allow an important face or focal subject to be accidentally cut.

------------------------------------------------------------------------

# 48. Category Data Structure Concept

Each portfolio item should conceptually contain:

``` text
Work Item
├── ID
├── Title
├── Category
├── Image
├── Desktop Crop
├── Tablet Crop
├── Mobile Crop
├── Alt Text
├── Collection Link
└── Display Priority
```

This allows the gallery to remain content-driven.

------------------------------------------------------------------------

# 49. Suggested Initial Categories

Start with:

``` text
PORTRAITS
WEDDINGS
TRAVEL
LANDSCAPES
LIFESTYLE
```

Do not add more until the photographer has enough strong images for each
category.

Quality should determine category count.

------------------------------------------------------------------------

# 50. Suggested Initial Portfolio Items

Example:

``` text
01 — PORTRAITS
02 — TRAVEL
03 — WEDDINGS
04 — LANDSCAPES
05 — LIFESTYLE
```

This is the initial visual showcase.

The actual number of individual photographs should be much larger behind
each collection.

------------------------------------------------------------------------

# 51. View All Work

The Selected Work section should provide a path to a complete portfolio.

CTA:

``` text
VIEW ALL WORK →
```

This can open a dedicated Work page.

The homepage only shows the strongest curated selection.

------------------------------------------------------------------------

# 52. Editorial Curation

The homepage should not attempt to show every photograph.

Use only the photographer's strongest work.

The homepage gallery is a **curated exhibition**.

The complete portfolio can contain:

-   More images
-   Full collections
-   Individual stories
-   Metadata
-   Detailed project pages

------------------------------------------------------------------------

# 53. Relationship With Collections Section

The Selected Work section should be followed by a broader Collections
section.

Narrative:

``` text
SELECTED WORK
Curated highlights
       ↓
COLLECTIONS
Browse photography categories
       ↓
FEATURED PHOTOGRAPH
Immersive visual story
```

Selected Work should therefore remain concise.

------------------------------------------------------------------------

# 54. Accessibility

All gallery items should be keyboard accessible.

Requirements:

-   Interactive items must have accessible names.
-   Images need meaningful alt text when informative.
-   Decorative imagery should not create unnecessary screen-reader
    content.
-   Focus states must be visible.
-   Filters must expose selected state.
-   Keyboard users must be able to move through filters and gallery
    items.
-   Touch interactions must not be required for core functionality.

------------------------------------------------------------------------

# 55. Filter Accessibility

The active filter must be communicated programmatically.

Visual:

``` text
ALL
```

Active state:

Filled background.

Accessible state:

Selected/pressed semantics.

Do not rely solely on color to communicate selection.

------------------------------------------------------------------------

# 56. Reduced Motion

When reduced motion is enabled:

Disable or minimize:

-   Gallery stagger
-   Image zoom
-   Layout morphing
-   Long filter transitions

Use:

-   Simple opacity transitions
-   Immediate layout changes
-   Static hover states

The gallery should remain completely usable.

------------------------------------------------------------------------

# 57. Performance

The gallery can contain many images, so performance is important.

Use:

-   Responsive image sizes
-   Modern image formats
-   Compression
-   Lazy loading for below-the-fold images
-   Prioritized loading for the first visible gallery image
-   Fixed aspect-ratio containers
-   Avoid unnecessary duplicate image downloads

------------------------------------------------------------------------

# 58. Desktop Hover Details

### Default

``` text
Image
Caption
Arrow
```

### Hover

``` text
Image + 2–3% scale
Slight overlay
Caption becomes more prominent
Arrow moves
```

No additional text should suddenly appear.

------------------------------------------------------------------------

# 59. Touch Behavior

On mobile/tablet:

There is no traditional hover.

Use:

-   Tap feedback
-   Small image transition
-   Arrow/caption remains visible
-   Entire card remains clickable

Do not depend on hover-only information.

------------------------------------------------------------------------

# 60. Gallery Cursor --- Optional

On desktop, an optional custom cursor can be used.

Example:

``` text
VIEW
```

or:

``` text
OPEN →
```

It should only be used if it enhances the experience.

If used:

-   Small
-   Minimal
-   Low visual weight
-   Disabled on touch devices

The normal pointer should remain available for accessibility.

------------------------------------------------------------------------

# 61. Section Transition From Introduction

The Introduction ends with:

``` text
DISCOVER MORE →
```

Then Selected Work begins with:

``` text
02 / 06

SELECTED
WORK
```

The background remains cream.

This avoids a harsh visual break.

The main change is increased photographic density.

------------------------------------------------------------------------

# 62. Section Transition Into Collections

After Selected Work:

The gallery gradually gives way to larger photographic category strips.

The visual intensity increases.

Suggested progression:

``` text
INTRODUCTION
large negative space

        ↓

SELECTED WORK
asymmetric gallery

        ↓

COLLECTIONS
large immersive category imagery
```

------------------------------------------------------------------------

# 63. Component Structure

For implementation, the section can conceptually be divided into:

``` text
SelectedWorkSection
│
├── SectionHeader
│   ├── SectionNumber
│   ├── Heading
│   ├── Description
│   └── ViewAllCTA
│
├── CategoryFilters
│   ├── All
│   ├── Portraits
│   ├── Weddings
│   ├── Travel
│   ├── Landscapes
│   └── Lifestyle
│
├── WorkGallery
│   └── WorkCard[]
│
└── GalleryInteractionController
```

------------------------------------------------------------------------

# 64. Work Card Structure

Each work card conceptually contains:

``` text
WorkCard
├── Image
├── Overlay
├── Number
├── Category
├── Arrow
└── Link
```

Optional:

``` text
├── Collection Title
└── Metadata
```

Only add metadata when it improves the story.

------------------------------------------------------------------------

# 65. Design Tokens

Initial design tokens:

``` text
Background:
#F4F0E8

Primary Text:
#171614

Secondary Text:
#706B62

Border:
#B8AC9B

Accent:
Muted Warm Brown

Desktop Heading:
56–78px

Tablet Heading:
46–64px

Mobile Heading:
36–48px

Body:
14–17px

Filter:
10–12px

Gallery Hover Scale:
1.02–1.03

Filter Transition:
200–300ms

Gallery Transition:
400–700ms

Image Reveal:
600–1000ms

Desktop Section Padding:
140–180px

Tablet Section Padding:
100–140px

Mobile Section Padding:
80–100px
```

------------------------------------------------------------------------

# 66. Content Guidelines

The gallery should use real photographic work rather than generic stock
images.

Each image should be evaluated for:

-   Composition
-   Lighting
-   Subject clarity
-   Color consistency
-   Technical quality
-   Storytelling value
-   Crop flexibility
-   Mobile suitability

A weaker photograph should not be included merely to fill a grid
position.

------------------------------------------------------------------------

# 67. Image Color Consistency

The gallery should feel like one portfolio.

Avoid placing:

-   One highly saturated image
-   Next to a very desaturated image
-   Next to a heavily filtered image

unless the contrast is intentional.

Recommended overall direction:

-   Warm
-   Natural
-   Slightly muted
-   Cinematic
-   Editorial

------------------------------------------------------------------------

# 68. Visual QA --- Desktop

Check:

-   [ ] Section number is aligned correctly
-   [ ] Heading has intentional line breaks
-   [ ] Description remains readable
-   [ ] Filters don't overpower gallery
-   [ ] Dominant image is clearly dominant
-   [ ] Mosaic feels balanced
-   [ ] Images have consistent visual quality
-   [ ] Captions are readable
-   [ ] Hover zoom is subtle
-   [ ] Arrows move smoothly
-   [ ] No layout shift occurs during loading
-   [ ] Gallery doesn't feel like a generic grid

------------------------------------------------------------------------

# 69. Visual QA --- Tablet

Check:

-   [ ] Header moves above gallery
-   [ ] Filters remain usable
-   [ ] Horizontal filter scrolling works if necessary
-   [ ] Mosaic remains readable
-   [ ] No image becomes too small
-   [ ] Captions remain readable
-   [ ] Touch targets are comfortable
-   [ ] No horizontal page overflow

------------------------------------------------------------------------

# 70. Visual QA --- Mobile

Check:

-   [ ] Heading fits naturally
-   [ ] Description is comfortable to read
-   [ ] Filters are horizontally scrollable
-   [ ] First image is full-width
-   [ ] Secondary images form a clean two-column grid
-   [ ] Captions remain readable
-   [ ] Touch targets are large enough
-   [ ] Image crops preserve subjects
-   [ ] No hover-dependent behavior exists
-   [ ] Gallery doesn't feel crowded

------------------------------------------------------------------------

# 71. Final Desktop Content Example

``` text
02 / 06

SELECTED
WORK

─────

A collection of moments,
places and people that
continue to inspire.

VIEW ALL WORK →

ALL
PORTRAITS
WEDDINGS
TRAVEL
LANDSCAPES
LIFESTYLE


[ LARGE PORTRAIT ] [ TRAVEL ]
                   [ WEDDINGS ]

[      LANDSCAPES      ] [ LIFESTYLE ]
```

------------------------------------------------------------------------

# 72. Final Mobile Content Example

``` text
02 / 06

SELECTED
WORK

─────

A collection of moments,
places and people that
continue to inspire.

VIEW ALL WORK →

ALL  PORTRAITS  WEDDINGS
TRAVEL  LANDSCAPES  →


[       PORTRAITS       ]

[ TRAVEL ] [ WEDDINGS ]

[ LANDSCAPES ] [ LIFESTYLE ]
```

------------------------------------------------------------------------

# 73. UX Intent

The visitor should understand:

### 1. This photographer has a defined visual language

The photographs should feel curated rather than randomly collected.

### 2. There are multiple photography disciplines

Categories make the breadth visible.

### 3. They can explore deeper

Each category leads to a collection.

### 4. The homepage is curated

The strongest work appears first.

------------------------------------------------------------------------

# 74. What This Section Should NOT Become

Do not turn it into:

-   A Pinterest clone
-   A generic masonry gallery
-   A 3-column card grid
-   A product catalog
-   An Instagram feed
-   A huge infinite scroll
-   A slideshow with no structure
-   A dense portfolio archive

The homepage should remain selective.

------------------------------------------------------------------------

# 75. Final Design Principle

> **Selected Work should feel curated, not collected.**

Every image has a reason to be there.

The gallery should communicate quality through:

**Scale + spacing + composition + photography**

rather than:

**Borders + shadows + UI effects.**

The design formula is:

``` text
Editorial heading
        +
Asymmetric image hierarchy
        +
Minimal filters
        +
Subtle interaction
        +
Strong photography
```

That combination establishes the portfolio as a visual exhibition rather
than a conventional website gallery.
