# Photography Website --- Hero Section Design Specification

**Project:** Lumière Photography Website\
**Section:** Hero / Home Screen\
**Design Direction:** Editorial Luxury Photography / Modern Cream
Minimalism\
**Document Version:** 1.0\
**Status:** Design Specification --- Ready for UI Implementation

------------------------------------------------------------------------

## 1. Hero Vision

The Hero is the visual identity of the entire photography website.

The design should feel less like a conventional website and more like an
**interactive photography exhibition**.

The hierarchy is:

1.  Photography
2.  Brand identity
3.  Minimal navigation
4.  Subtle interaction controls
5.  Motion and atmosphere

The Hero intentionally avoids large marketing headlines, paragraphs,
feature lists, cards, gradients, or conventional landing-page CTAs.

### Core statement

> **The photograph owns the screen. The interface frames the
> photograph.**

The Hero should communicate quality, emotion, and visual storytelling
before the visitor reads anything.

------------------------------------------------------------------------

# 2. Design Personality

### Keywords

-   Editorial
-   Cinematic
-   Minimal
-   Elegant
-   Warm
-   Artistic
-   Premium
-   Quiet
-   Modern
-   Immersive
-   Human
-   Photography-first

### Avoid

-   Cyberpunk styling
-   Excessive gradients
-   Neon colors
-   Large marketing headlines
-   Heavy shadows
-   Excessive glassmorphism
-   Thick borders
-   Generic portfolio cards
-   Oversized buttons
-   Busy navigation
-   Stock-template appearance
-   Excessive animation

------------------------------------------------------------------------

# 3. Color Direction

The Hero itself is image-led, so the UI colors should adapt visually
while maintaining the brand palette.

## Primary brand palette

  Token           Color       Usage
  --------------- ----------- --------------------------------------
  Warm Ivory      `#F4F0E8`   Main website background outside Hero
  Soft Beige      `#E9E2D6`   Secondary surfaces
  Deep Charcoal   `#171614`   Main typography on light sections
  Warm Gray       `#706B62`   Secondary typography
  Muted Taupe     `#B8AC9B`   Dividers and subtle borders
  Cream White     `#F8F4EC`   Hero controls over dark imagery

### Hero UI color

Use a warm cream/white rather than pure white.

Recommended visual treatment:

-   Primary UI: cream-white
-   Secondary UI: 60--75% opacity cream-white
-   Borders: 50--70% opacity cream-white
-   Hover fill: 8--15% cream-white
-   Focus state: clearly visible cream outline

Do not use pure `#FFFFFF` unless necessary for accessibility.

------------------------------------------------------------------------

# 4. Hero Dimensions

## Desktop

Target:

-   Minimum: `1200px`
-   Primary design reference: `1440px`
-   Height: `100vh`
-   Width: `100vw`

Use the viewport's available height carefully so browser UI does not
create awkward clipping.

## Tablet

Range:

-   `768px – 1199px`
-   Height: approximately `100vh`

The composition remains similar to desktop, but spacing and typography
are reduced.

## Mobile

Range:

-   `320px – 767px`
-   Preferred height behavior: `100svh`

Use the small viewport unit where supported to avoid browser-address-bar
problems.

The mobile Hero should not simply be a compressed desktop Hero.

It is a deliberate mobile composition.

------------------------------------------------------------------------

# 5. Hero Layout --- Desktop

## Conceptual layout

``` text
┌──────────────────────────────────────────────────────────────┐
│ ┌───                                                    ───┐ │
│ │                                                         │ │
│ │  [ WORK ☰ ]                  LUMIÈRE            [ CONTACT → ] │
│ │                              PHOTOGRAPHY                 │ │
│ │                                                         │ │
│ │                                                         │ │
│ │                                                         │ │
│ │                    FULLSCREEN IMAGE                     │ │
│ │                                                         │ │
│ │                                                         │ │
│ │  ←                                                 →    │ │
│ │                                                         │ │
│ │                                              01         │ │
│ │                                              │          │ │
│ │                                              03         │ │
│ │                                                         │ │
│ │                         SCROLL                          │ │
│ └───                                                    ───┘ │
└──────────────────────────────────────────────────────────────┘
```

### Main principle

All interface elements should sit **above the image**.

There should be no separate navigation bar consuming Hero height.

------------------------------------------------------------------------

# 6. Hero Image

The image is the dominant visual element.

## Image requirements

The primary Hero image should:

-   Be high resolution
-   Be cinematic
-   Have strong natural lighting
-   Have an identifiable focal subject
-   Include useful negative space
-   Work well with cream UI
-   Avoid overly saturated colors
-   Have a refined editorial feel
-   Support both desktop and mobile crops

## Recommended image subjects

Examples:

-   Portrait at golden hour
-   Couple in a landscape
-   Fashion editorial
-   Quiet architectural scene
-   Documentary street scene
-   Travel landscape
-   Wedding moment
-   Environmental portrait

------------------------------------------------------------------------

# 7. Image Composition

The image must be selected with interface placement in mind.

### Desktop composition

Prefer:

``` text
        SKY / NEGATIVE SPACE

              LOGO
                ↓

        [ SUBJECT / SCENE ]

    LANDSCAPE / ENVIRONMENT
```

The subject should not overlap heavily with the centered logo.

### Important

Do not automatically center-crop every image.

Each Hero slide should have a deliberate focal point.

------------------------------------------------------------------------

# 8. Image Treatment

Use:

-   Natural color grading
-   Slight warmth
-   Moderate contrast
-   Controlled highlights
-   Natural shadows
-   Optional subtle film grain

Avoid:

-   Strong black overlays
-   Heavy vignette
-   HDR appearance
-   Extreme saturation
-   Artificial glow
-   Strong color filters

------------------------------------------------------------------------

# 9. Image Overlay

The interface needs readability without destroying the photograph.

Use a subtle responsive overlay.

### Top region

Slightly darker if necessary for logo/navigation readability.

### Bottom region

Very subtle darkening around the scroll indicator.

### Center

Keep as natural as possible.

The overlay should be perceived as part of the photographic atmosphere,
not as a visible UI layer.

------------------------------------------------------------------------

# 10. Logo

The logo is positioned at the top center.

Example:

``` text
LUMIÈRE
PHOTOGRAPHY
```

## Typography

### Brand name

Recommended style:

-   Elegant serif
-   Uppercase
-   Thin/regular weight
-   High letter spacing
-   Center aligned

Possible font directions:

-   Cormorant Garamond
-   Instrument Serif
-   Playfair Display
-   Similar refined editorial serif

### Descriptor

`PHOTOGRAPHY`

-   Sans-serif
-   Very small
-   Uppercase
-   High letter spacing
-   Medium/light weight

------------------------------------------------------------------------

# 11. Logo Sizing

## Desktop

Approximate:

-   Brand name: `26–36px`
-   Descriptor: `7–10px`

## Tablet

-   Brand name: `22–30px`
-   Descriptor: `6–9px`

## Mobile

-   Brand name: `18–25px`
-   Descriptor: `5–8px`

These are visual targets rather than strict values.

The logo should remain elegant rather than oversized.

------------------------------------------------------------------------

# 12. Left Navigation

Desktop and tablet:

``` text
WORK   ☰
```

The control may be presented inside a thin pill.

### Recommended visual

``` text
╭────────────────╮
│ WORK       ☰   │
╰────────────────╯
```

### Purpose

The `WORK` control opens the primary navigation or portfolio navigation.

Possible menu destinations:

-   Work
-   About
-   Services
-   Journal
-   Contact

The exact menu content belongs to the broader website specification.

------------------------------------------------------------------------

# 13. Right Navigation

Desktop and tablet:

``` text
CONTACT →
```

Recommended visual:

``` text
╭────────────────────╮
│ CONTACT        →   │
╰────────────────────╯
```

The Contact control is a direct CTA.

It should lead to the contact section/page rather than opening an
unnecessary intermediate screen.

------------------------------------------------------------------------

# 14. Navigation Button Style

## Default

-   Transparent background
-   1px border
-   Cream/white text
-   Slightly rounded pill
-   Small uppercase typography
-   Generous letter spacing

## Hover

On hover:

-   Border becomes slightly brighter
-   Background receives a subtle translucent cream fill
-   Arrow/menu icon moves slightly
-   Button may expand by a few pixels

Do not create a large scale effect.

------------------------------------------------------------------------

# 15. Navigation Interaction

## WORK hover

Default:

``` text
WORK   ☰
```

Hover:

``` text
WORK   →
```

The icon can transition from hamburger to arrow or reveal the arrow
alongside the menu icon.

## CONTACT hover

Default:

``` text
CONTACT   →
```

Hover:

``` text
CONTACT    →→
```

The arrow shifts slightly to communicate clickability.

------------------------------------------------------------------------

# 16. Corner Frame System

The corner frame is one of the Hero's signature visual elements.

Do not create a complete rectangle around the Hero.

Instead, use four independent corner brackets.

### Top-left

``` text
┌──────
│
│
```

### Top-right

``` text
──────┐
      │
      │
```

### Bottom-left

``` text
│
│
└──────
```

### Bottom-right

``` text
      │
      │
──────┘
```

------------------------------------------------------------------------

# 17. Corner Frame Specifications

## Desktop

Approximate:

-   Viewport offset: `24–32px`
-   Stroke: `1px`
-   Bracket length: `40–60px`
-   Opacity: `50–70%`

## Tablet

-   Offset: `20–24px`
-   Bracket length: `30–45px`
-   Stroke: `1px`

## Mobile

-   Offset: `16–18px`
-   Bracket length: `20–32px`
-   Stroke: `1px`

The brackets should feel like a **camera viewfinder**, not a decorative
border.

------------------------------------------------------------------------

# 18. Corner Border Animation

On initial page load:

1.  Top-left draws horizontally then vertically
2.  Top-right draws horizontally then vertically
3.  Bottom-left draws vertically then horizontally
4.  Bottom-right draws vertically then horizontally

The entire frame should complete quickly.

Recommended total:

`700–1200ms`

The animation should be subtle and synchronized with the Hero image
reveal.

------------------------------------------------------------------------

# 19. Hero Image Navigation

Desktop/tablet:

Place navigation arrows approximately at the vertical center of the
image.

``` text
←                                      →
```

Each arrow sits inside a small circular control.

### Default

``` text
╭───╮
│ ← │
╰───╯
```

### Hover

``` text
╭────╮
│  ← │
╰────╯
```

The circle can brighten subtly.

------------------------------------------------------------------------

# 20. Arrow Specifications

### Desktop

-   Diameter: approximately `42–52px`
-   1px border
-   Minimal arrow icon
-   Center aligned

### Tablet

-   Diameter: approximately `40–48px`

### Mobile

Do not keep permanent side arrows.

Use swipe interaction instead.

------------------------------------------------------------------------

# 21. Arrow Animation

On hover:

-   Arrow translates approximately `3–5px`
-   Circle subtly brightens
-   Optional 1--2px scale increase

Avoid:

-   Large bouncing arrows
-   Rotation
-   Elastic animation
-   Strong shadows

------------------------------------------------------------------------

# 22. Slide Indicator

Use a minimal editorial slide counter.

Desktop/tablet:

``` text
01

│

03
```

This communicates:

`Current slide / Total slides`

For three slides:

``` text
01
│
03
```

For ten slides:

``` text
01
│
10
```

------------------------------------------------------------------------

# 23. Slide Indicator Animation

When the image changes:

-   Current number fades/updates
-   Vertical progress line transitions
-   New image begins revealing
-   Indicator remains fixed

Do not move the entire indicator around the screen.

The UI should feel stable while the photograph changes.

------------------------------------------------------------------------

# 24. Mobile Slide Indicator

On mobile use a horizontal format.

Recommended:

``` text
01 ───────── 03
```

or:

``` text
01 / 03
```

The horizontal version is easier to read and visually balanced on narrow
screens.

------------------------------------------------------------------------

# 25. Scroll Indicator

Bottom-center:

``` text
SCROLL
  │
  ↓
```

Keep it extremely small.

The purpose is to suggest continuation without competing with the
photograph.

------------------------------------------------------------------------

# 26. Scroll Animation

The vertical line should:

1.  Begin short
2.  Extend downward
3.  Fade
4.  Reset
5.  Repeat slowly

Recommended cycle:

`2.5–4 seconds`

Use a calm, linear/ease-in-out motion.

No bouncing.

------------------------------------------------------------------------

# 27. Desktop Responsive Layout

### Width

`1200px+`

### Layout

``` text
WORK                  LOGO                  CONTACT

                FULLSCREEN PHOTO

       ←                                  →

                                      01
                                      │
                                      03

                         SCROLL
```

### Behavior

-   Full image
-   Side arrows
-   Vertical slide indicator
-   Corner frame
-   Center logo
-   Full navigation
-   Subtle mouse parallax

------------------------------------------------------------------------

# 28. Tablet Layout

### Width

`768–1199px`

The visual language remains the same.

### Changes

-   Reduce logo size
-   Reduce navigation size
-   Reduce corner-frame offsets
-   Reduce arrow size
-   Slightly adjust image crop
-   Maintain side arrows
-   Maintain vertical slide indicator
-   Maintain scroll indicator

### Tablet composition

``` text
┌───────────────────────────────────┐
│ ┌──                           ──┐ │
│ │ WORK       LOGO       CONTACT │ │
│ │                              │ │
│ │                              │ │
│ │          HERO IMAGE          │ │
│ │                              │ │
│ │ ←                         →  │ │
│ │                         01   │ │
│ │                         │    │ │
│ │                         03   │ │
│ │          SCROLL              │ │
│ └──                           ──┘ │
└───────────────────────────────────┘
```

------------------------------------------------------------------------

# 29. Mobile Layout

Mobile is a deliberate redesign.

### Top navigation

``` text
☰             LUMIÈRE             →
```

The hamburger opens the menu.

The right arrow is the Contact action.

The logo remains centered.

------------------------------------------------------------------------

# 30. Mobile Image Composition

The image should use a portrait-oriented crop.

Do not simply scale the desktop crop.

### Desktop

``` text
[ landscape + subject + sky + environment ]
```

### Mobile

``` text
[ subject + light + essential environment ]
```

The subject receives priority.

------------------------------------------------------------------------

# 31. Mobile Corner Frame

Use shorter brackets.

Example:

``` text
┌───                         ───┐
│                               │
│                               │
│                               │
│                               │
│                               │
│                               │
└───                         ───┘
```

The frame must remain visible but should never interfere with the
subject.

------------------------------------------------------------------------

# 32. Mobile Navigation

### Left

Hamburger icon.

### Center

Logo.

### Right

Contact arrow.

No pill-shaped Work and Contact buttons by default.

This keeps the mobile interface cleaner.

------------------------------------------------------------------------

# 33. Mobile Menu

When the hamburger is tapped, use a full-screen or near-full-screen
cream navigation overlay.

Suggested structure:

``` text
LUMIÈRE

WORK
ABOUT
SERVICES
JOURNAL
CONTACT

Instagram
Behance
```

The menu can transition in vertically.

The Hero photograph should no longer compete with the menu.

------------------------------------------------------------------------

# 34. Mobile Swipe

The Hero becomes swipe-first.

### Gesture

Swipe left:

`Next photograph`

Swipe right:

`Previous photograph`

The slide indicator updates after the transition.

The swipe should have a small amount of inertia but should not feel like
a native carousel template.

------------------------------------------------------------------------

# 35. Mobile Controls

Do not display permanent side arrows.

Bottom:

``` text
01 ───────── 03

SCROLL
  │
```

This gives the photograph maximum width.

------------------------------------------------------------------------

# 36. Hero CTA Behavior

There are two primary Hero actions.

## WORK

Destination:

Selected Work / Portfolio

Interaction:

-   Hover/tap state
-   Navigation transition
-   Portfolio begins from the selected Work section

## CONTACT

Destination:

Contact section/page

Interaction:

-   Hover/tap state
-   Subtle arrow movement
-   Smooth navigation transition where appropriate

------------------------------------------------------------------------

# 37. Hero Does Not Need a Marketing CTA

Do not add:

``` text
BOOK NOW
EXPLORE MY WORK
DISCOVER MORE
VIEW PORTFOLIO
```

as large central buttons.

The navigation already provides the necessary actions.

This preserves the premium editorial character.

------------------------------------------------------------------------

# 38. Initial Page Load Animation

Recommended sequence:

### Phase 1 --- Background

Warm cream or muted dark transition layer.

### Phase 2 --- Image

Hero image reveals with:

-   opacity
-   subtle scale
-   optional mask reveal

### Phase 3 --- Frame

Corner brackets draw in.

### Phase 4 --- Brand

Logo fades/slides into place.

### Phase 5 --- Navigation

Work and Contact controls appear.

### Phase 6 --- Controls

Arrows and slide counter appear.

### Phase 7 --- Scroll

Scroll indicator appears last.

------------------------------------------------------------------------

# 39. Recommended Entrance Timing

Approximate sequence:

  Element           Delay
  --------------- -------
  Image               0ms
  Corner frame      150ms
  Logo              250ms
  Work              350ms
  Contact           400ms
  Arrows            500ms
  Slide counter     600ms
  Scroll            750ms

Total visual entrance:

Approximately `1.2–1.8 seconds`.

The animation should never delay access to the website.

------------------------------------------------------------------------

# 40. Hero Image Transition

When switching photographs, use:

### Stage 1

Current image slowly scales from approximately:

`1.00 → 1.03`

### Stage 2

Transition layer creates a subtle blur/fade.

### Stage 3

Next image reveals.

### Stage 4

Next image settles:

`1.03 → 1.00`

The transition should feel cinematic rather than like a slideshow.

------------------------------------------------------------------------

# 41. Image Transition Timing

Recommended:

`700–1100ms`

Avoid extremely fast transitions.

The photograph is the content, so it deserves time to breathe.

------------------------------------------------------------------------

# 42. Mouse Parallax --- Desktop

A subtle cursor-based effect can be used.

### Movement

Mouse movement:

`→`

Image movement:

`→ 5–12px`

Maximum movement should remain extremely small.

UI elements should either remain fixed or move at a substantially
smaller rate.

This creates depth without distracting from the photography.

------------------------------------------------------------------------

# 43. Tablet Parallax

Use reduced parallax.

Maximum:

`3–6px`

If performance is poor, disable it.

------------------------------------------------------------------------

# 44. Mobile Motion

Do not use cursor parallax.

Use:

-   Swipe transitions
-   Image reveal
-   Minimal scroll animation
-   Simple menu animation

The mobile experience should prioritize performance and battery usage.

------------------------------------------------------------------------

# 45. Hover System

## Work

Default:

``` text
WORK   ☰
```

Hover:

``` text
WORK   →
```

Visual changes:

-   Slight fill
-   Border brightens
-   Icon shifts

## Contact

Default:

``` text
CONTACT →
```

Hover:

``` text
CONTACT  →→
```

Visual changes:

-   Arrow shifts
-   Background slightly fills
-   Border brightens

## Image arrows

Default:

Transparent circle.

Hover:

Subtle cream fill.

Arrow shifts 3--5px.

------------------------------------------------------------------------

# 46. Focus States

Keyboard users must receive a visible focus state.

Recommended:

-   2px high-contrast outline
-   Small offset from the control
-   Maintain cream/white visual language
-   Never remove focus indication

Focus should be clearly distinguishable from the default border.

------------------------------------------------------------------------

# 47. Accessibility

The Hero must remain accessible despite its minimal visual design.

### Requirements

-   All interactive controls must have accessible labels.
-   Decorative corner brackets must not be announced as content.
-   Hero photographs require meaningful alt text when informative.
-   Decorative background images may use empty alternative text
    semantics.
-   Keyboard navigation must work.
-   Focus states must remain visible.
-   Reduced-motion preferences must be respected.
-   Touch targets should be comfortably tappable.
-   Text must maintain sufficient contrast against the image.

------------------------------------------------------------------------

# 48. Reduced Motion

When reduced motion is enabled:

Disable or minimize:

-   Parallax
-   Continuous scroll animation
-   Large image zooms
-   Complex menu transitions
-   Dramatic slide transitions

Keep:

-   Static Hero image
-   Corner frame
-   Navigation
-   Slide controls
-   Simple opacity transitions if appropriate

The design should remain beautiful without animation.

------------------------------------------------------------------------

# 49. Performance

Because the Hero uses a full-screen photograph, performance is critical.

### Image strategy

Use:

-   Responsive image sizes
-   Modern formats such as WebP/AVIF where appropriate
-   Proper compression
-   Desktop/mobile art direction
-   Lazy loading for non-Hero images
-   Hero image prioritized for loading

Do not load a massive original image when a smaller viewport-specific
asset is sufficient.

------------------------------------------------------------------------

# 50. Responsive Image Art Direction

The Hero should ideally have separate crops.

Example:

``` text
hero-desktop.webp
hero-tablet.webp
hero-mobile.webp
```

### Desktop

Wide cinematic composition.

### Tablet

Slightly tighter crop.

### Mobile

Portrait-oriented crop emphasizing the subject.

This is preferable to forcing one image crop across every device.

------------------------------------------------------------------------

# 51. Hero Slide Structure

Each Hero slide should conceptually contain:

``` text
Slide
├── Image
├── Image positioning
├── Focal point
├── Alt text
├── Slide number
└── Transition configuration
```

Example:

``` text
Slide 01
Image: golden-hour-portrait
Focal Point: subject
Position: 52% center
Theme: warm
```

This allows each photograph to be independently art-directed.

------------------------------------------------------------------------

# 52. Recommended Number of Hero Slides

Start with:

**3 slides**

This is enough to create a feeling of an active photography portfolio
without making the Hero unnecessarily complicated.

Suggested:

### Slide 01

Portrait / cinematic landscape

### Slide 02

Wedding / emotional human moment

### Slide 03

Fashion / editorial / architecture

Each slide should represent a different part of the photographer's
visual identity.

------------------------------------------------------------------------

# 53. Autoplay Recommendation

Autoplay can be used, but it should be slow.

Suggested:

`6–8 seconds per slide`

Do not autoplay too aggressively.

The visitor should have enough time to appreciate each photograph.

Pause or reduce autoplay behavior when:

-   User interacts with controls
-   User opens the menu
-   User focuses on the Hero controls
-   Reduced motion is enabled

------------------------------------------------------------------------

# 54. Hero Scroll Behavior

When the visitor scrolls:

The Hero should naturally leave the viewport.

Avoid pinning the Hero for an unnecessarily long duration.

The next section should begin with the warm cream background.

This creates the transition:

``` text
CINEMATIC IMAGE
       ↓
       ↓
WARM CREAM
       ↓
EDITORIAL CONTENT
```

------------------------------------------------------------------------

# 55. Hero-to-Section Transition

The first section after Hero should intentionally contrast with it.

Hero:

**Dark / warm / photographic**

Next:

**Cream / quiet / typographic**

This gives the website breathing room.

The first transition should feel like moving from a photograph into a
gallery room.

------------------------------------------------------------------------

# 56. Desktop Spacing Reference

Approximate visual spacing:

``` text
Viewport edge
      ↓
24–32px
      ↓
Corner frame
      ↓

Navigation area

      ↓

Large negative space

      ↓

Image focal point

      ↓

Slide controls

      ↓

Scroll indicator
```

Avoid filling every empty region.

Negative space is part of the design.

------------------------------------------------------------------------

# 57. Tablet Spacing Reference

Reduce desktop spacing by approximately 15--25%.

The Hero should still feel spacious.

Do not allow the navigation to become cramped.

------------------------------------------------------------------------

# 58. Mobile Spacing Reference

Use:

-   `16–18px` outer frame offset
-   Compact logo
-   Minimal controls
-   Larger touch areas
-   More vertical breathing room
-   Bottom controls positioned safely above browser/gesture areas

------------------------------------------------------------------------

# 59. Z-Index / Layering Concept

The visual layer order should conceptually be:

``` text
Layer 1 — Hero image
Layer 2 — Subtle image overlay
Layer 3 — Corner brackets
Layer 4 — Navigation
Layer 5 — Slide controls
Layer 6 — Scroll indicator
Layer 7 — Menu overlay when open
```

The menu overlay must completely dominate the Hero when opened.

------------------------------------------------------------------------

# 60. Hero States

The Hero should support these states:

### State A --- Initial loading

Image is being prepared.

### State B --- Intro animation

Image and UI reveal.

### State C --- Idle

Normal Hero experience.

### State D --- Navigation hover

Button interaction.

### State E --- Arrow hover

Slide interaction.

### State F --- Slide transition

Photograph changing.

### State G --- Menu open

Navigation overlay active.

### State H --- Mobile swipe

Touch interaction.

### State I --- Reduced motion

Minimal animation mode.

------------------------------------------------------------------------

# 61. Mobile Menu Open State

Recommended structure:

``` text
┌───────────────────────┐
│ ×        LUMIÈRE      │
│                       │
│                       │
│ WORK                  │
│                       │
│ ABOUT                 │
│                       │
│ SERVICES              │
│                       │
│ JOURNAL               │
│                       │
│ CONTACT               │
│                       │
│                       │
│ Instagram   Behance   │
└───────────────────────┘
```

Background:

Warm cream.

Typography:

Large elegant serif.

Animation:

Vertical reveal.

------------------------------------------------------------------------

# 62. Desktop Menu Open State

The desktop menu can appear as a full-height cream overlay.

Suggested structure:

``` text
LUMIÈRE

01  WORK
02  ABOUT
03  SERVICES
04  JOURNAL
05  CONTACT
```

A small image preview may appear alongside the active menu item.

This can be designed later as part of the navigation system.

------------------------------------------------------------------------

# 63. Content Density

The Hero should intentionally have very low information density.

### Required content

-   Logo
-   Work
-   Contact
-   Navigation arrows
-   Slide count
-   Scroll cue

### Avoid

-   Paragraphs
-   Services
-   Social links
-   Phone number
-   Email address
-   Pricing
-   Testimonials
-   Long descriptions

Those belong to later sections.

------------------------------------------------------------------------

# 64. Design Tokens --- Initial

``` text
Hero Height:
100vh / 100svh

Desktop Outer Offset:
24–32px

Tablet Outer Offset:
20–24px

Mobile Outer Offset:
16–18px

Border:
1px

Border Opacity:
50–70%

Desktop Arrow:
42–52px

Tablet Arrow:
40–48px

Mobile Arrow:
Hidden / swipe-first

Transition:
700–1100ms

Hero Intro:
1200–1800ms

Autoplay:
6000–8000ms

Desktop Parallax:
5–12px

Tablet Parallax:
3–6px

Mobile Parallax:
Disabled
```

------------------------------------------------------------------------

# 65. Visual QA Checklist

Before considering the Hero finished, verify:

### Desktop

-   [ ] Image fills viewport
-   [ ] Subject is correctly positioned
-   [ ] Logo is centered
-   [ ] Work is readable
-   [ ] Contact is readable
-   [ ] Corner brackets are visible
-   [ ] Arrows do not cover subject
-   [ ] Slide indicator is visible
-   [ ] Scroll indicator is visible
-   [ ] Image remains visually dominant

### Tablet

-   [ ] No navigation collision
-   [ ] Image crop remains intentional
-   [ ] Logo remains centered
-   [ ] Arrows remain usable
-   [ ] Corner brackets remain balanced
-   [ ] Slide indicator remains readable

### Mobile

-   [ ] Hamburger is accessible
-   [ ] Logo is centered
-   [ ] Contact arrow is accessible
-   [ ] Subject remains visible
-   [ ] Corner brackets don't cover subject
-   [ ] Swipe works
-   [ ] Slide indicator is readable
-   [ ] Scroll cue does not overlap browser controls
-   [ ] Menu overlay is usable

------------------------------------------------------------------------

# 66. Final Hero Design Summary

The Hero should communicate the photographer's brand in approximately
three seconds without requiring the visitor to read a sentence.

The visitor sees:

``` text
             LUMIÈRE

     ┌──────────────────────┐
     │                      │
     │                      │
     │      PHOTOGRAPH      │
     │                      │
     │                      │
     └──────────────────────┘

WORK                         CONTACT

             SCROLL
```

The photograph is the message.

The UI is the frame.

The animation is the atmosphere.

The navigation is intentionally quiet.

------------------------------------------------------------------------

# 67. Implementation Handoff

The Hero should eventually be implemented as a reusable component rather
than a single monolithic page section.

Conceptually:

``` text
Hero
├── HeroImage
├── HeroOverlay
├── CornerFrame
├── HeroNavigation
│   ├── WorkButton
│   └── ContactButton
├── BrandLogo
├── HeroSliderControls
│   ├── PreviousButton
│   ├── NextButton
│   └── SlideIndicator
├── ScrollIndicator
└── MobileMenu
```

The design system should remain independent from the actual photography
content.

This allows the photographer to replace images without redesigning the
Hero.

------------------------------------------------------------------------

# 68. Recommended Technology Direction

When implementation begins, the Hero is well suited to:

-   Next.js
-   React
-   Tailwind CSS
-   Framer Motion or GSAP
-   Responsive image optimization
-   CSS custom properties for design tokens

Animation should be component-driven and respect reduced-motion
preferences.

------------------------------------------------------------------------

# 69. Final Design Principle

The most important rule for the entire Hero is:

> **Do less, but make every detail intentional.**

A premium photography Hero should not try to prove how much technology
is being used.

It should make the visitor stop and look at the photograph.

Everything else exists to support that moment.
