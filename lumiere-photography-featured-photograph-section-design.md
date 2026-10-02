# Lumière Photography Website --- Featured Photograph Section

**Project:** Lumière Photography Website\
**Section:** Featured Photograph / The Quiet Moment\
**Section Number:** 04 / 06\
**Design Direction:** Cinematic Editorial Photography / Modern Cream
Minimalism\
**Document Version:** 1.0\
**Status:** Design Specification --- Ready for UI Implementation

------------------------------------------------------------------------

# 1. Section Overview

The Featured Photograph section is the visual breathing point after the
Collections section.

The previous sections progressively increase photographic density:

``` text
01 / INTRO
Visual philosophy
        ↓
02 / WORK
Curated portfolio
        ↓
03 / COLLECTIONS
Photography worlds
        ↓
04 / FEATURED PHOTOGRAPH
One unforgettable moment
```

This section deliberately reduces the amount of interface.

Instead of presenting many photographs, it presents **one photograph as
an experience**.

The purpose is to make the visitor stop scrolling.

------------------------------------------------------------------------

# 2. Core Concept

The Featured Photograph section should feel like a photograph being
displayed in a gallery.

The image becomes the environment.

The interface becomes almost invisible.

Recommended conceptual title:

> **THE QUIET MOMENT**

Supporting idea:

> A single frame can hold a thousand emotions, long after the moment has
> passed.

The actual copy can be changed to match the photographer's voice.

------------------------------------------------------------------------

# 3. Design Principle

The section follows one rule:

> **One image. One feeling. One story.**

Do not overload this section with:

-   Multiple paragraphs
-   Large navigation menus
-   Service information
-   Pricing
-   Testimonials
-   Large buttons
-   Multiple competing CTAs

The photograph must remain the dominant element.

------------------------------------------------------------------------

# 4. Visual Personality

The section should feel:

-   Cinematic
-   Emotional
-   Quiet
-   Immersive
-   Premium
-   Atmospheric
-   Editorial
-   Intimate
-   Story-driven

It should feel more immersive than Selected Work and Collections.

------------------------------------------------------------------------

# 5. Background Strategy

The Featured Photograph itself can occupy the full available width.

The surrounding website remains warm cream.

Conceptually:

``` text
CREAM
        ↓

┌─────────────────────────────────────┐
│                                     │
│          FEATURED PHOTOGRAPH         │
│                                     │
└─────────────────────────────────────┘

        ↓

CREAM
```

The image should create a temporary visual world.

------------------------------------------------------------------------

# 6. Desktop Height

Recommended:

``` text
80–95vh
```

It does not need to be exactly `100vh`.

Leaving a small amount of surrounding cream can make the section feel
like a gallery installation.

An alternate immersive mode can use:

``` text
100vh
```

if the selected photograph benefits from full-screen treatment.

------------------------------------------------------------------------

# 7. Desktop Composition

Recommended layout:

``` text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  04 / 06                                                     │
│                                                              │
│  THE                                                         │
│  QUIET                                                       │
│  MOMENT                                                      │
│                                                              │
│  ─────                                                       │
│                                                              │
│  A single frame can hold                                     │
│  a thousand emotions, long                                   │
│  after the moment has passed.                                │
│                                                              │
│  VIEW STORY →                                                │
│                                                              │
│                                                              │
│                                      FEATURED IMAGE           │
│                                                              │
│                                                              │
│  ←       01 / 05      ───────────────       →               │
│                                                              │
│        [thumb] [thumb] [thumb] [thumb] [thumb]              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The copy sits over the image rather than outside it.

------------------------------------------------------------------------

# 8. Image Position

The image should fill the section.

Recommended:

``` text
width:
100%

height:
100%

object-fit:
cover
```

The focal point must be manually art-directed.

Do not assume center positioning is correct for every photograph.

------------------------------------------------------------------------

# 9. Featured Image Selection

The image should have:

-   Strong emotional impact
-   Clear focal point
-   Strong lighting
-   Interesting depth
-   Cinematic composition
-   Enough negative space for text
-   Strong crop flexibility
-   High technical quality

Potential subjects:

-   Quiet portrait
-   Couple at sunset
-   Wedding moment
-   Solitary travel scene
-   Atmospheric landscape
-   Architectural scene
-   Documentary moment

------------------------------------------------------------------------

# 10. Recommended Hero Photograph

A strong example:

``` text
Person
   ↓
sitting/walking in a landscape
   ↓
warm sunset or dramatic light
   ↓
large environmental context
```

The photograph should communicate emotion without requiring explanation.

------------------------------------------------------------------------

# 11. Image Treatment

Use:

-   Natural color
-   Warm cinematic grading
-   Moderate contrast
-   Controlled highlights
-   Natural skin tones
-   Subtle film character

Avoid:

-   Strong HDR
-   Excessive saturation
-   Artificial glow
-   Heavy black overlay
-   Aggressive vignette

------------------------------------------------------------------------

# 12. Overlay System

The copy requires readability.

Use a localized gradient rather than a full-image dark overlay.

Recommended:

``` text
Left side:
slightly darker

Center:
mostly untouched

Right side:
natural

Bottom:
subtle darkening for controls
```

The gradient should disappear naturally into the photograph.

------------------------------------------------------------------------

# 13. Section Number

Top-left:

``` text
04 / 06
```

Typography:

-   Sans-serif
-   Small
-   Uppercase/numeric
-   Cream
-   Medium letter spacing

This continues the site's section numbering system.

------------------------------------------------------------------------

# 14. Featured Title

Recommended:

``` text
THE
QUIET
MOMENT
```

Use a large editorial serif.

The line breaks should be deliberate.

Do not allow random wrapping on desktop.

------------------------------------------------------------------------

# 15. Title Typography

Recommended display font:

-   Instrument Serif
-   Cormorant Garamond
-   Playfair Display
-   Similar high-contrast editorial serif

### Desktop

Approximately:

`58–90px`

### Tablet

Approximately:

`48–68px`

### Mobile

Approximately:

`36–52px`

The title should remain elegant rather than oversized.

------------------------------------------------------------------------

# 16. Title Color

Use:

``` text
#F8F4EC
```

or a warm cream-white.

Avoid pure white unless necessary for contrast.

------------------------------------------------------------------------

# 17. Supporting Divider

Under the title:

``` text
─────
```

Specifications:

-   1px
-   30--50px width
-   Cream/white
-   Slightly transparent

The divider creates a visual pause.

------------------------------------------------------------------------

# 18. Supporting Copy

Recommended:

> A single frame can hold a thousand emotions, long after the moment has
> passed.

This should be approximately:

`250–340px` wide on desktop.

Keep it short.

The Featured Photograph section is not an essay.

------------------------------------------------------------------------

# 19. Supporting Copy Typography

Use the site's sans-serif.

Recommended:

-   Inter
-   Manrope
-   Similar neutral sans-serif

### Desktop

`14–17px`

### Tablet

`14–16px`

### Mobile

`13–15px`

Line height:

`1.5–1.7`

------------------------------------------------------------------------

# 20. View Story CTA

Primary CTA:

``` text
VIEW STORY →
```

This should open the full story/photograph page.

It should not look like a conventional marketing button.

Recommended style:

-   Thin border
-   Transparent background
-   Small pill
-   Cream text
-   Minimal arrow

------------------------------------------------------------------------

# 21. CTA Default

``` text
╭────────────────╮
│ VIEW STORY  →  │
╰────────────────╯
```

Approximate desktop height:

`38–46px`

The button should have a comfortable click target.

------------------------------------------------------------------------

# 22. CTA Hover

On desktop:

-   Border becomes brighter
-   Background receives a subtle cream tint
-   Arrow shifts 4--6px
-   Button may expand slightly

Transition:

`250–400ms`

Avoid large scaling.

------------------------------------------------------------------------

# 23. Thumbnail Navigation

The Featured Photograph can optionally contain a small thumbnail strip.

Recommended:

``` text
[ 01 ] [ 02 ] [ 03 ] [ 04 ] [ 05 ]
```

Each thumbnail represents a related featured image/story.

This gives the section a gallery-like interaction without turning it
into a conventional carousel.

------------------------------------------------------------------------

# 24. Thumbnail Position

Desktop:

Bottom-center.

Example:

``` text
        [IMG] [IMG] [IMG] [IMG] [IMG]
```

The active thumbnail receives:

-   Slightly brighter border
-   Slightly higher opacity
-   Optional 1--2px scale

------------------------------------------------------------------------

# 25. Thumbnail Dimensions

Desktop:

Approximately:

`70–95px × 50–70px`

depending on image ratio.

Tablet:

`60–80px × 45–60px`

Mobile:

`42–60px × 34–45px`

Do not make thumbnails too large.

The main photograph must remain dominant.

------------------------------------------------------------------------

# 26. Thumbnail Interaction

Hover:

-   Slight scale
-   Border becomes brighter

Click:

-   Selected image becomes the Featured Photograph
-   Caption/story copy updates
-   Active indicator moves

Transition should feel smooth.

------------------------------------------------------------------------

# 27. Previous / Next Controls

Desktop:

``` text
←                                      →
```

Use circular controls.

Recommended:

`42–52px` diameter.

Place them near the bottom area, aligned with the thumbnail navigation.

------------------------------------------------------------------------

# 28. Arrow Default State

``` text
╭────╮
│ ←  │
╰────╯
```

Thin cream border.

Transparent background.

------------------------------------------------------------------------

# 29. Arrow Hover State

``` text
╭────╮
│  ← │
╰────╯
```

Arrow shifts.

Circle receives subtle fill.

------------------------------------------------------------------------

# 30. Slide Counter

Recommended:

``` text
01 / 05
```

Place near the arrows.

Alternative:

``` text
01
──────
05
```

For this section, the horizontal format is preferred because the bottom
navigation is already horizontal.

------------------------------------------------------------------------

# 31. Progress Line

Between the slide counter and thumbnails, use a thin progress line.

Example:

``` text
01 / 05   ─────────────
```

The line can animate as the active photograph changes.

This reinforces the gallery experience.

------------------------------------------------------------------------

# 32. Image Transition

When changing photographs:

1.  Current image slightly scales
2.  Current image fades
3.  New image appears underneath
4.  New image settles
5.  Text transitions to the new story

Recommended duration:

`700–1100ms`

------------------------------------------------------------------------

# 33. Transition Style

Preferred:

**Crossfade + subtle scale**

Avoid:

-   Hard horizontal slides
-   Cube transitions
-   3D carousel effects
-   Flash transitions
-   Excessive blur

The image should feel like another photograph being placed in the same
gallery frame.

------------------------------------------------------------------------

# 34. Text Transition

When the featured photograph changes:

### Number

Fade/update.

### Title

Crossfade or short vertical reveal.

### Description

Fade/update.

### CTA

Remain stable where possible.

The UI should not jump.

------------------------------------------------------------------------

# 35. Desktop Layout Zones

Conceptually:

``` text
TOP
Section number
        ↓

LEFT
Title
Divider
Description
CTA

CENTER/RIGHT
Featured photograph

BOTTOM
Arrow
Counter
Progress
Thumbnails
Arrow
```

The photograph remains visually dominant.

------------------------------------------------------------------------

# 36. Tablet Layout

Tablet should retain the immersive image but reduce the text footprint.

Conceptually:

``` text
┌────────────────────────────────────┐
│ 04 / 06                            │
│                                    │
│ THE                                │
│ QUIET                              │
│ MOMENT                             │
│                                    │
│ ─────                              │
│                                    │
│ A single frame can hold            │
│ a thousand emotions...             │
│                                    │
│ VIEW STORY →                       │
│                                    │
│          FEATURED IMAGE            │
│                                    │
│ ← 01 / 05 [thumb] [thumb] →       │
└────────────────────────────────────┘
```

The content remains over the photograph.

------------------------------------------------------------------------

# 37. Tablet Text Width

Maximum:

`280–330px`

Do not allow the paragraph to become too wide.

------------------------------------------------------------------------

# 38. Tablet Image Crop

Use a slightly tighter crop than desktop.

The focal subject must remain visible.

The text should not cover important facial details.

------------------------------------------------------------------------

# 39. Mobile Layout

Mobile becomes a vertically composed cinematic image.

Conceptually:

``` text
┌─────────────────────────┐
│ 04 / 06          ☰      │
│                         │
│                         │
│       IMAGE             │
│                         │
│                         │
│                         │
│ THE                     │
│ QUIET                   │
│ MOMENT                  │
│                         │
│ ─────                   │
│                         │
│ A single frame can hold │
│ a thousand emotions... │
│                         │
│ VIEW STORY →            │
│                         │
│ ← 01 / 05 →             │
│ [img][img][img]         │
└─────────────────────────┘
```

------------------------------------------------------------------------

# 40. Mobile Image Treatment

Use a portrait-oriented crop.

Recommended ratio:

`4:5`

or:

`3:4`

The subject should be prioritized.

The photograph should remain visible behind the text.

------------------------------------------------------------------------

# 41. Mobile Text Position

Recommended:

Lower-left.

Why?

The upper region can preserve the main visual subject.

The lower-left region often provides useful negative space for text.

This should be adjusted per photograph.

------------------------------------------------------------------------

# 42. Mobile Title Size

Recommended:

`36–52px`

Line height:

Approximately `0.9–1.0`

The title should remain compact.

------------------------------------------------------------------------

# 43. Mobile CTA

Use a compact outlined pill:

``` text
VIEW STORY →
```

Place below the description.

It should have a minimum comfortable touch area.

------------------------------------------------------------------------

# 44. Mobile Thumbnail Navigation

Keep only a few thumbnails visible.

Recommended:

``` text
[IMG] [IMG] [IMG] [IMG]
```

or use a horizontally scrollable thumbnail strip.

Do not allow the thumbnail navigation to dominate the bottom of the
screen.

------------------------------------------------------------------------

# 45. Mobile Arrows

Keep previous/next controls visible but compact.

Recommended:

`36–44px`

They should sit around the thumbnail navigation.

------------------------------------------------------------------------

# 46. Mobile Slide Interaction

Support:

**Swipe left → next photograph**

**Swipe right → previous photograph**

The swipe gesture should be the primary image navigation.

Buttons remain available for accessibility and discoverability.

------------------------------------------------------------------------

# 47. Autoplay

Autoplay is optional.

Recommended:

`6–8 seconds`

per image.

Pause autoplay when:

-   User interacts with thumbnails
-   User interacts with arrows
-   User focuses the controls
-   User opens navigation
-   Reduced motion is enabled

------------------------------------------------------------------------

# 48. Autoplay Recommendation

For a photography portfolio, autoplay should be subtle.

It should never feel like advertising.

If the photographer prefers a slower, contemplative website, autoplay
can be disabled entirely.

Manual navigation should always remain available.

------------------------------------------------------------------------

# 49. Scroll Behavior

The Featured Photograph should not trap the user.

Avoid:

-   Scroll-jacking
-   Mandatory slide changes based on scroll
-   Long pinned sections
-   Full-page scroll snapping

Normal vertical page scrolling is preferred.

------------------------------------------------------------------------

# 50. Optional Desktop Sticky Effect

An optional effect:

The Featured Photograph remains visually stable while the surrounding
section enters/exits the viewport.

If implemented, keep it subtle.

Do not pin the image for several viewport heights.

The section should not feel like an interaction experiment.

------------------------------------------------------------------------

# 51. Entrance Animation

When the section enters the viewport:

### Image

Fade from approximately `0.8 → 1`

and subtle scale:

`1.03 → 1.00`

### Section number

Fade in.

### Title

Reveal upward.

### Divider

Extend slightly.

### Description

Fade in.

### CTA

Fade in last.

------------------------------------------------------------------------

# 52. Entrance Timing

Suggested:

``` text
Image:
0ms

Section number:
150ms

Title:
220ms

Divider:
450ms

Description:
500ms

CTA:
650ms

Bottom controls:
750ms
```

Total:

Approximately `1.2–1.6 seconds`.

------------------------------------------------------------------------

# 53. Hover Interaction --- Main Image

The image itself should not behave like a button.

The photograph is content.

Only the navigation controls should provide obvious interaction.

Optional subtle image movement can occur when the cursor moves over the
image, but it should not imply clickability.

------------------------------------------------------------------------

# 54. Hover Interaction --- Thumbnail

Default:

Normal image.

Hover:

-   Slight scale
-   Brighter border
-   Optional brightness increase

Active:

-   Bright border
-   Full opacity

Inactive:

-   Slightly reduced opacity

------------------------------------------------------------------------

# 55. Hover Interaction --- View Story

Default:

``` text
VIEW STORY →
```

Hover:

``` text
VIEW STORY  →→
```

Arrow shifts approximately `4–6px`.

------------------------------------------------------------------------

# 56. Color Strategy

The section uses image-derived colors.

UI remains:

``` text
Cream white
Soft gray
Warm white
```

Do not dynamically change UI colors based on image analysis.

Consistency is more important than adapting to every photograph.

------------------------------------------------------------------------

# 57. Featured Photograph Modes

The section can support different visual moods.

## Warm / Golden

``` text
sunset
warm light
natural skin tones
```

## Dark / Night

``` text
deep shadows
stars
warm practical lights
```

## Neutral / Black & White

``` text
monochrome
high texture
strong composition
```

The UI remains consistent across all modes.

------------------------------------------------------------------------

# 58. Image Story Metadata

Each featured photograph can conceptually contain:

``` text
Featured Story
├── ID
├── Image
├── Desktop Crop
├── Tablet Crop
├── Mobile Crop
├── Title
├── Description
├── Alt Text
├── Story Link
└── Optional Date/Location
```

Do not show all metadata on the homepage.

------------------------------------------------------------------------

# 59. Optional Metadata

A small location/date can be shown under the description.

Example:

``` text
LADAKH — OCTOBER 2026
```

Use only when it contributes to the story.

Typography:

Small sans-serif.

This should remain optional.

------------------------------------------------------------------------

# 60. Featured Story Destination

The `VIEW STORY` CTA should lead to a dedicated story page.

Example conceptual route:

``` text
/stories/the-quiet-moment
```

The story page can contain:

-   Full photograph
-   Story introduction
-   Related photographs
-   Location
-   Date
-   Narrative
-   Related collection
-   Contact CTA

The homepage section should remain concise.

------------------------------------------------------------------------

# 61. Accessibility

Requirements:

-   Previous/next buttons have accessible labels.
-   Thumbnail buttons identify their image/story.
-   Active thumbnail is programmatically identifiable.
-   Swipe is optional, not the only navigation method.
-   CTA is keyboard accessible.
-   Focus states remain visible.
-   Images have appropriate alt text.
-   Decorative overlays do not create screen-reader noise.
-   Text maintains sufficient contrast.

------------------------------------------------------------------------

# 62. Focus State

Use a visible high-contrast focus outline.

Recommended:

``` text
2px outline
2–4px offset
```

The outline must remain visible over photographs.

------------------------------------------------------------------------

# 63. Reduced Motion

When reduced motion is enabled:

Disable:

-   Parallax
-   Image zoom
-   Complex crossfade
-   Staggered movement
-   Autoplay if appropriate

Use:

-   Immediate image replacement
-   Simple opacity transition
-   Static controls

The section remains fully usable.

------------------------------------------------------------------------

# 64. Performance

This section contains one large high-priority image.

Use:

-   Responsive image sizing
-   Modern image formats
-   Preload/prioritize the first featured image where appropriate
-   Lazy load secondary thumbnails
-   Responsive thumbnails
-   Proper intrinsic dimensions
-   Avoid loading full-resolution versions of all slides immediately

------------------------------------------------------------------------

# 65. Responsive Image Art Direction

Recommended assets:

``` text
featured-01-desktop.webp
featured-01-tablet.webp
featured-01-mobile.webp

featured-02-desktop.webp
featured-02-tablet.webp
featured-02-mobile.webp
```

Each photograph can have its own focal crop.

------------------------------------------------------------------------

# 66. Thumbnail Optimization

Thumbnails should use small optimized assets.

Do not load the full-resolution featured image into every thumbnail.

Conceptually:

``` text
Main image:
large optimized asset

Thumbnail:
small optimized asset
```

This significantly reduces bandwidth.

------------------------------------------------------------------------

# 67. Component Structure

Conceptual implementation:

``` text
FeaturedPhotographSection
│
├── FeaturedImage
├── FeaturedOverlay
├── FeaturedContent
│   ├── SectionNumber
│   ├── Title
│   ├── Divider
│   ├── Description
│   └── ViewStoryCTA
│
├── FeaturedNavigation
│   ├── PreviousButton
│   ├── SlideCounter
│   ├── ProgressLine
│   └── NextButton
│
└── ThumbnailRail
    └── Thumbnail[]
```

------------------------------------------------------------------------

# 68. Featured Photograph Data Structure

Conceptually:

``` text
FeaturedPhotograph
├── id
├── title
├── description
├── image
├── desktopImage
├── tabletImage
├── mobileImage
├── thumbnail
├── alt
├── storyUrl
└── metadata
```

The presentation should remain independent from the content.

------------------------------------------------------------------------

# 69. Design Tokens

Initial values:

``` text
Background:
#F4F0E8

Hero Text:
#F8F4EC

Primary Dark:
#171614

Muted Text:
#706B62

Desktop Section Height:
80–95vh

Mobile Section Height:
85–100svh

Desktop Title:
58–90px

Tablet Title:
48–68px

Mobile Title:
36–52px

Body:
13–17px

Arrow:
42–52px desktop
36–44px mobile

Thumbnail:
70–95px desktop
42–60px mobile

Image Transition:
700–1100ms

Entrance:
1200–1600ms

Autoplay:
6000–8000ms
```

------------------------------------------------------------------------

# 70. Desktop Visual Specification

``` text
04 / 06

THE
QUIET
MOMENT

─────

A single frame can hold
a thousand emotions, long
after the moment has passed.

VIEW STORY →

                    [FEATURED IMAGE]


←        01 / 05
         ─────────────
         [IMG] [IMG] [IMG] [IMG] [IMG]
                                              →
```

The photograph should remain the largest visual element.

------------------------------------------------------------------------

# 71. Tablet Visual Specification

``` text
04 / 06

THE
QUIET
MOMENT

─────

A single frame can hold
a thousand emotions...

VIEW STORY →

[ LARGE FEATURED IMAGE ]

←   01 / 05   → 
[IMG] [IMG] [IMG] [IMG]
```

------------------------------------------------------------------------

# 72. Mobile Visual Specification

``` text
04 / 06                         ☰


        FEATURED IMAGE


THE
QUIET
MOMENT

─────

A single frame can hold
a thousand emotions,
long after the moment
has passed.

VIEW STORY →

←   01 / 05   →

[IMG] [IMG] [IMG]
```

The exact text placement should be adjusted based on each photograph's
focal point.

------------------------------------------------------------------------

# 73. UX Intent

The visitor should experience:

### 1. A pause

The section interrupts the browsing rhythm.

### 2. A feeling

The photograph communicates emotion without explanation.

### 3. A story invitation

The CTA offers a deeper narrative.

### 4. A memorable visual moment

The section should be one of the strongest visual memories of the
homepage.

------------------------------------------------------------------------

# 74. What This Section Should NOT Become

Do not turn it into:

-   A standard carousel
-   A slideshow banner
-   A testimonial
-   A blog post
-   A full gallery
-   A promotional hero
-   A video advertisement
-   A complicated interaction demo

The section should remain a **single visual story experience**.

------------------------------------------------------------------------

# 75. Visual QA --- Desktop

-   [ ] Featured image dominates the viewport
-   [ ] Text remains readable
-   [ ] Text does not cover the focal subject
-   [ ] Section number is subtle
-   [ ] CTA is understated
-   [ ] Thumbnail rail remains secondary
-   [ ] Arrow controls are easy to understand
-   [ ] Progress line is visible
-   [ ] Image transition is smooth
-   [ ] No excessive overlay
-   [ ] Photograph remains natural

------------------------------------------------------------------------

# 76. Visual QA --- Tablet

-   [ ] Image remains immersive
-   [ ] Text doesn't become too wide
-   [ ] Crop preserves subject
-   [ ] Controls remain accessible
-   [ ] Thumbnail rail fits comfortably
-   [ ] No horizontal overflow
-   [ ] CTA remains usable

------------------------------------------------------------------------

# 77. Visual QA --- Mobile

-   [ ] Image uses intentional portrait crop
-   [ ] Main subject remains visible
-   [ ] Text remains readable
-   [ ] CTA is tappable
-   [ ] Swipe navigation works
-   [ ] Buttons remain available
-   [ ] Thumbnail rail doesn't dominate
-   [ ] Slide counter is readable
-   [ ] Bottom controls don't conflict with browser/gesture areas
-   [ ] Reduced motion works

------------------------------------------------------------------------

# 78. Recommended Content Examples

### Story 01

``` text
THE QUIET MOMENT

A single frame can hold a thousand emotions,
long after the moment has passed.
```

### Story 02

``` text
BETWEEN LIGHT

The moments between the moments
are often the ones worth remembering.
```

### Story 03

``` text
AFTER THE RAIN

Some places become unforgettable
only when the light changes.
```

These are example directions. Final copy should reflect the
photographer's actual voice.

------------------------------------------------------------------------

# 79. Relationship With Collections

Collections establishes:

``` text
Where the photographer works
```

Featured Photograph establishes:

``` text
How the photographer sees
```

This is why the section should use fewer images and more atmosphere.

------------------------------------------------------------------------

# 80. Relationship With About Section

After the Featured Photograph, the site can transition into:

``` text
05 / ABOUT

THE PERSON
BEHIND THE
CAMERA
```

The visual progression becomes:

``` text
COLLECTIONS
Many worlds
      ↓
FEATURED PHOTOGRAPH
One moment
      ↓
ABOUT
The person behind it
```

This creates a natural reduction from broad portfolio → individual story
→ human connection.

------------------------------------------------------------------------

# 81. Final Design Principle

> **Let one photograph say what ten paragraphs cannot.**

The Featured Photograph section should be the website's cinematic pause.

Its formula is:

``` text
One powerful photograph
        +
Minimal editorial title
        +
Short emotional copy
        +
Quiet story CTA
        +
Subtle gallery controls
        +
Strong responsive art direction
```

The visitor should leave the section remembering the image, not the
interface.
