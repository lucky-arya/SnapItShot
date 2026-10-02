# Lumière Photography — Footer + Global Navigation System Design

## 01. Purpose

The Footer and Global Navigation are the final structural layer of the Lumière Photography website.

They should not feel like separate UI components. They should feel like one continuous editorial system that connects every section and every page.

The navigation must remain quiet and functional while the photography remains the visual hero.

The footer should feel like the final page of a premium photography magazine:
- minimal
- spacious
- warm
- editorial
- elegant
- highly readable
- visually memorable without being loud

---

# 02. Global Design Direction

## Visual Language

The entire navigation/footer system follows the established Lumière visual language:

- Warm cream background
- Charcoal typography
- Muted warm-brown accents
- Thin editorial dividers
- Serif display typography
- Modern sans-serif UI typography
- Large negative space
- Minimal shadows
- Restrained animation
- No SaaS-style cards
- No heavy gradients
- No excessive borders
- No visual clutter

## Core Colors

| Token | Suggested Value | Usage |
|---|---|---|
| Background | `#F4F0E8` | Main page/footer |
| Primary Text | `#171614` | Headlines/navigation |
| Secondary Text | `#706B62` | Supporting information |
| Border | `#B8AC9B` | Dividers |
| Light Text | `#F8F4EC` | Dark hover states |
| Accent | Muted warm brown | Small highlights |

These values should remain consistent with the previously designed sections.

---

# 03. Navigation Architecture

The website should use a two-state navigation system.

## State A — Hero Navigation

The navigation sits directly over the hero photograph.

### Desktop

Position:

- fixed or absolute at the top
- full viewport width
- approximately 32–48px horizontal padding
- approximately 24–32px top padding

Structure:

```text
[ MENU / WORK ]              LUMIÈRE              [ INQUIRE → ]
```

The exact left CTA can be:

`MENU`

or

`WORK`

Recommended:

`MENU`

The center contains the Lumière wordmark.

The right CTA:

`INQUIRE →`

The hero remains visually dominant.

### Visual Treatment

- transparent background
- cream/white text depending on hero brightness
- no large navigation container
- no heavy backdrop
- generous spacing
- very subtle text shadow only when required for readability

---

# 04. Navigation After Hero

Once the visitor scrolls beyond the hero, the navigation changes state.

## Desktop

The navigation becomes:

```text
LUMIÈRE      WORK   COLLECTIONS   ABOUT      INQUIRE →
```

It can remain fixed at the top.

Background:

- warm cream
- approximately 88–96% opacity
- optional subtle backdrop blur

Height:

- approximately 72–82px

Bottom border:

- 1px muted warm border

### Transition

The transition should be subtle:

1. Transparent hero navigation
2. Scroll threshold reached
3. Background fades into cream
4. Text changes to charcoal
5. Thin divider appears

Animation duration:

`300–450ms`

Use ease-out timing.

Avoid dramatic shrinking or bouncing.

---

# 05. Logo System

## Wordmark

Primary wordmark:

**LUMIÈRE**

Typography:

- Serif display font
- Medium/regular weight
- Letter spacing slightly increased

Recommended visual style:

```text
LUMIÈRE
```

The logo should be text-based or SVG rather than a raster image whenever possible.

## Desktop

Approximate width:

`110–150px`

## Tablet

Approximate width:

`105–130px`

## Mobile

Approximate width:

`95–120px`

The logo always links back to:

`/`

---

# 06. Desktop Navigation

## Recommended Structure

```text
LUMIÈRE

WORK
COLLECTIONS
ABOUT

INQUIRE →
```

Alternative compact version:

```text
MENU        LUMIÈRE        INQUIRE →
```

The first version is preferred after the hero because it makes the website structure immediately discoverable.

## Navigation Links

Primary:

- Work
- Collections
- About

Action:

- Inquire

Optional secondary links:

- Journal
- Contact

Do not expose too many links.

The photography should remain the focus.

---

# 07. Navigation Hover States

Navigation should use editorial micro-interactions.

## Text Link

Default:

```text
WORK
```

Hover:

```text
WORK
────
```

The underline should animate from left to right.

Animation:

- 200–300ms
- thin 1px line

Alternative:

A subtle arrow may appear:

`WORK →`

Avoid large pill-shaped hover backgrounds.

## Inquire

Default:

`INQUIRE →`

Hover:

- arrow moves approximately 5–8px right
- text remains stable
- optional underline appears

---

# 08. Mobile Navigation

Mobile navigation should be extremely clean.

## Closed State

```text
☰       LUMIÈRE       INQUIRE
```

However, if the width becomes too constrained:

```text
☰       LUMIÈRE       →
```

Recommended mobile header:

- hamburger on left
- centered logo
- compact inquire icon/action on right

Height:

`64–72px`

Horizontal padding:

`18–22px`

---

# 09. Mobile Full-Screen Menu

When the hamburger is activated, open a full-screen editorial menu.

Background:

`#F4F0E8`

Structure:

```text
LUMIÈRE                                  ×

01  WORK
02  COLLECTIONS
03  ABOUT
04  INQUIRE

----------------------------------------

INSTAGRAM
EMAIL
```

The menu should feel like a continuation of the website rather than a generic mobile drawer.

## Menu Typography

Large serif navigation:

- approximately 42–58px on larger phones
- approximately 34–44px on smaller phones

Supporting metadata:

- uppercase
- sans-serif
- small tracking

## Menu Animation

Opening:

1. background fades in
2. navigation items rise upward slightly
3. items appear sequentially

Closing:

- reverse animation

Animation duration:

`350–500ms`

Avoid excessive motion.

---

# 10. Mobile Menu Interaction

Each menu item should have a large touch target.

Minimum recommended touch area:

`44 × 44px`

Menu closes when:

- user selects a page
- close button is selected
- Escape is pressed on keyboard-enabled devices

Do not force-close the menu merely because the user taps outside unless the interaction is clearly intentional.

---

# 11. Navigation Scroll Behavior

## Desktop

The navigation should remain visible while scrolling.

Preferred behavior:

- hero: transparent
- after hero: cream navigation
- scrolling down: remains visible
- optional slight hide when rapidly scrolling down
- returns when scrolling upward

For the first version, a persistent navigation is safer and simpler.

## Mobile

Keep the header persistent.

Avoid disappearing navigation on mobile because users may need it frequently.

---

# 12. Page Transition Concept

Lumière can use subtle page transitions between major routes.

Recommended:

### Exit

Current page fades slightly.

### Enter

New page:

- opacity: 0 → 1
- translateY: 8px → 0

Duration:

`300–500ms`

The photography itself should not be aggressively animated.

The transition should feel like turning a page.

---

# 13. Footer Concept

The footer is the final visual statement of the website.

It should be intentionally oversized but minimal.

Recommended sequence:

```text
CONTACT SECTION

        ↓

large negative space

--------------------------------

LUMIÈRE

Photographs, stories,
and the moments between them.

WORK      COLLECTIONS      ABOUT

INSTAGRAM
EMAIL
PINTEREST

--------------------------------

© 2026 LUMIÈRE PHOTOGRAPHY

PRIVACY
TERMS

BACK TO TOP ↑
```

---

# 14. Footer Layout — Desktop

Use a spacious 3-column editorial layout.

## Column 1 — Brand

Large wordmark:

`LUMIÈRE`

Supporting sentence:

`Photographs, stories, and the moments between them.`

Keep the copy short.

## Column 2 — Navigation

```text
EXPLORE

WORK
COLLECTIONS
ABOUT
CONTACT
```

## Column 3 — Connect

```text
CONNECT

INSTAGRAM
PINTEREST
EMAIL

BASED IN INDIA
AVAILABLE WORLDWIDE
```

---

# 15. Footer Typography

## Logo

Large serif:

approximately `48–72px`

## Column Labels

Sans-serif uppercase:

approximately `11–13px`

Letter spacing:

`0.12em – 0.18em`

## Footer Links

Approximately:

`14–17px`

## Legal

Approximately:

`11–12px`

Color:

Secondary text.

---

# 16. Footer Bottom Bar

Use a thin divider.

Layout:

```text
© 2026 LUMIÈRE PHOTOGRAPHY

PRIVACY     TERMS                         BACK TO TOP ↑
```

Desktop:

- copyright aligned left
- legal links centered/right
- back-to-top aligned right

Mobile:

```text
© 2026 LUMIÈRE PHOTOGRAPHY

PRIVACY · TERMS

BACK TO TOP ↑
```

Stack vertically.

---

# 17. Back to Top

The back-to-top action should be small and editorial.

Label:

`BACK TO TOP ↑`

Hover:

- arrow moves upward 4–6px
- optional underline

On activation:

- smooth scroll to top
- duration around 800–1200ms

Do not use a large floating circular button unless necessary.

---

# 18. Footer Mobile Layout

Mobile footer should have generous spacing.

Recommended order:

1. Logo
2. Brand statement
3. Navigation
4. Social links
5. Email
6. Location/availability
7. Divider
8. Legal
9. Back to top

Example hierarchy:

```text
LUMIÈRE

Photographs, stories,
and the moments between them.


EXPLORE

WORK
COLLECTIONS
ABOUT
CONTACT


CONNECT

INSTAGRAM
PINTEREST
EMAIL


BASED IN INDIA
AVAILABLE WORLDWIDE

------------------------

© 2026 LUMIÈRE PHOTOGRAPHY

PRIVACY · TERMS

BACK TO TOP ↑
```

---

# 19. Footer Spacing

Desktop:

- top padding: 120–160px
- bottom padding: 36–56px
- column gap: 60–100px

Tablet:

- top padding: 90–120px
- bottom padding: 32–48px

Mobile:

- top padding: 80–110px
- bottom padding: 28–40px

The footer should never feel cramped.

---

# 20. Responsive Navigation Breakpoints

Recommended conceptual breakpoints:

### Large Desktop

`1440px+`

- full navigation
- large logo
- generous horizontal margins

### Desktop

`1024–1439px`

- full navigation
- slightly reduced spacing

### Tablet

`768–1023px`

- compact navigation
- potentially switch to hamburger if navigation becomes crowded

### Mobile

`<768px`

- hamburger
- centered logo
- compact action

### Small Mobile

`<390px`

- reduce logo width
- reduce horizontal padding
- use icon-only secondary action if necessary

---

# 21. Global Container

Use one consistent content system across the website.

Recommended maximum width:

`1440px`

Desktop horizontal padding:

`48–64px`

Tablet:

`32–40px`

Mobile:

`18–22px`

Do not allow content to touch the viewport edge except where intentionally designed for full-bleed photography.

---

# 22. Global Grid

Recommended desktop grid:

`12 columns`

Use the grid consistently across:

- Introduction
- Selected Work
- Collections
- Featured Photograph
- About
- Contact
- Footer

This creates visual continuity even when sections have different layouts.

---

# 23. Global Spacing Rhythm

Use a predictable spacing scale.

Suggested:

```text
8
12
16
24
32
48
64
80
96
120
160
```

Small values:

- icon gaps
- text spacing

Medium values:

- component spacing

Large values:

- section spacing
- editorial breathing room

---

# 24. Global Typography System

## Display

Recommended:

- Instrument Serif
- Cormorant Garamond
- Playfair Display

Use for:

- major statements
- section titles
- large footer logo
- editorial headlines

## UI / Body

Recommended:

- Inter
- Manrope

Use for:

- navigation
- labels
- descriptions
- metadata
- buttons

---

# 25. Cursor System

Desktop can use a restrained custom cursor.

Normal:

small circular cursor.

Over photography:

slightly larger cursor with:

`VIEW`

or

`OPEN`

Over links:

subtle scale increase.

Do not use an oversized animated cursor.

Mobile:

No custom cursor.

---

# 26. Accessibility

Navigation must support:

- keyboard navigation
- visible focus states
- semantic navigation landmarks
- accessible button labels
- accessible menu state
- Escape to close mobile menu
- sufficient contrast
- reduced-motion preference

Recommended semantic structure:

```text
<header>
<nav>
<main>
<footer>
```

The mobile menu should expose its open/closed state to assistive technology.

---

# 27. Reduced Motion

When `prefers-reduced-motion` is enabled:

Disable:

- page transition movement
- menu stagger animation
- custom cursor animation
- parallax
- image zoom effects
- animated underlines where necessary

Keep:

- instant state changes
- clear focus states
- readable navigation

The website should remain fully usable without animation.

---

# 28. Performance

Navigation and footer should remain extremely lightweight.

Avoid:

- heavy navigation libraries
- unnecessary animation packages
- large icon bundles
- video backgrounds
- excessive blur

Prefer:

- CSS transitions
- SVG icons
- optimized logo assets
- system/browser-native scrolling
- minimal JavaScript

The footer should not load unnecessary photography assets.

---

# 29. SEO / Semantic Structure

Use one primary site navigation.

Recommended page structure:

```text
Header
  Navigation

Main
  Hero
  Introduction
  Selected Work
  Collections
  Featured Photograph
  About
  Contact

Footer
```

Navigation labels should remain descriptive.

Avoid vague labels such as:

- Stuff
- Things
- Explore More
- Discover Here

Use:

- Work
- Collections
- About
- Inquire

---

# 30. Global Interaction Principles

Every interactive element should follow the same interaction language.

### Links

Subtle underline animation.

### Arrows

Move 4–8px toward the intended direction.

### Images

Very subtle scale:

`1.00 → 1.02–1.03`

### Buttons

Border/fill transition.

### Navigation

Color/background transition.

### Menu

Editorial fade + slight vertical movement.

Consistency is more important than visual complexity.

---

# 31. Footer-to-Contact Relationship

The Contact section should not abruptly end.

Recommended sequence:

```text
CONTACT

Let's create something together.

[ START A CONVERSATION → ]


                large breathing space


--------------------------------

LUMIÈRE FOOTER
```

This creates a visual pause between the emotional CTA and the utility-heavy footer.

---

# 32. Complete Homepage Flow

The finished homepage now follows:

```text
HERO
↓
INTRODUCTION
↓
SELECTED WORK
↓
COLLECTIONS
↓
FEATURED PHOTOGRAPH
↓
ABOUT PHOTOGRAPHER
↓
CONTACT
↓
FOOTER
```

Narrative:

```text
DISCOVER
   ↓
UNDERSTAND
   ↓
EXPLORE
   ↓
CHOOSE A WORLD
   ↓
FEEL
   ↓
MEET THE PHOTOGRAPHER
   ↓
CONNECT
   ↓
STAY / NAVIGATE
```

This gives the homepage an intentional editorial story rather than a collection of disconnected sections.

---

# 33. Final Design Checklist

## Navigation

- [ ] Hero navigation is transparent
- [ ] Logo remains centered
- [ ] Inquire CTA is always easy to find
- [ ] Scrolled navigation becomes cream
- [ ] Mobile menu is full-screen
- [ ] Menu is keyboard accessible
- [ ] Hover states are subtle

## Footer

- [ ] Footer feels spacious
- [ ] Logo is prominent
- [ ] Navigation is concise
- [ ] Social links are visible
- [ ] Email is easy to find
- [ ] Legal links are present
- [ ] Back-to-top is available
- [ ] Mobile footer is stacked cleanly

## Global

- [ ] Consistent typography
- [ ] Consistent spacing
- [ ] Consistent arrow interaction
- [ ] Consistent hover language
- [ ] Reduced-motion support
- [ ] Responsive from 320px to large desktop
- [ ] Strong accessibility
- [ ] Lightweight implementation
- [ ] No unnecessary UI clutter

---

# 34. Final Creative Direction

The navigation and footer should never compete with the photographs.

The photography is the protagonist.

The interface should behave like a quiet gallery attendant:

- present
- precise
- elegant
- easy to understand
- almost invisible when not needed

The final impression should be:

**A premium photography studio website that feels editorial, cinematic, warm, modern, and intentionally designed.**

The website should feel less like a conventional portfolio and more like entering a photographer's visual world.
