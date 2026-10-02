# Lumière Photography — Inquiry / Contact Page Design

## 01. Purpose

The Inquiry page is the final conversion experience of the Lumière website.

It should make contacting the photographer feel natural, personal, and considered.

The visitor should never feel like they are submitting a generic business form.

The emotional progression is:

```text
I LIKE THE WORK
      ↓
I UNDERSTAND THE PHOTOGRAPHER
      ↓
I HAVE A STORY / PROJECT
      ↓
I WANT TO TALK
      ↓
START A CONVERSATION
```

Primary URL:

```text
/inquire
```

Optional alias:

```text
/contact
```

Recommended public navigation label:

`INQUIRE`

---

# 02. Core Design Direction

The Inquiry page should feel:

- calm
- warm
- personal
- minimal
- premium
- approachable
- editorial

Avoid:

- corporate contact forms
- excessive form fields
- sales language
- aggressive conversion elements
- pricing tables on the first screen
- popups
- chat widgets
- generic contact-card layouts

The goal is conversation, not pressure.

---

# 03. Page Structure

Complete page:

```text
GLOBAL NAVIGATION
        ↓
INQUIRY HERO
        ↓
SHORT INTRODUCTION
        ↓
INQUIRY FORM
        ↓
DIRECT CONTACT
        ↓
AVAILABILITY / LOCATION
        ↓
FAQ
        ↓
FINAL IMAGE / CTA
        ↓
GLOBAL FOOTER
```

---

# 04. Inquiry Hero

Use a simple cream background rather than a large photographic hero.

This creates contrast after the image-heavy Work and Story pages.

Desktop:

```text
                     INQUIRE

           LET'S CREATE
           SOMETHING
           TOGETHER.

        Tell me a little about
        what you're imagining.
```

The typography should be the main visual element.

---

# 05. Hero Typography

Small label:

```text
06 / INQUIRE
```

Main heading:

```text
LET'S CREATE
SOMETHING
TOGETHER.
```

Display serif:

`72–110px`

Supporting text:

`18–22px`

Maximum width:

`500–620px`

Mobile heading:

`44–58px`

---

# 06. Intro Copy

Recommended tone:

> Whether you're planning a wedding, creating a campaign, documenting a place, or simply have a story worth photographing, I'd love to hear about it.

Keep it approximately:

`30–70 words`

Use first person.

The copy should sound like the photographer, not a marketing department.

---

# 07. Inquiry Form

The form should be intentionally short.

Recommended fields:

```text
NAME *
EMAIL *

PROJECT TYPE *

DATE

LOCATION

TELL ME ABOUT YOUR PROJECT *
```

Optional:

```text
PHONE

BUDGET RANGE

HOW DID YOU FIND ME?
```

Do not require information that is not genuinely needed.

---

# 08. Project Type

Use a select field or visually simple option list.

Options:

```text
PORTRAIT
WEDDING
TRAVEL
EDITORIAL
LIFESTYLE
LANDSCAPE
COMMERCIAL
OTHER
```

The exact options should match the photographer's actual services.

---

# 09. Date Field

Label:

`WHEN IS YOUR PROJECT?`

Allow:

- exact date
- approximate date
- flexible date

Do not force a date if the project does not have one.

Optional placeholder:

`DD / MM / YYYY`

---

# 10. Location Field

Label:

`WHERE WILL IT TAKE PLACE?`

Placeholder:

`City / Country`

This can help determine travel requirements.

Do not request an exact private address unless genuinely necessary later in the process.

---

# 11. Message Field

This is the most important form field.

Label:

`TELL ME ABOUT YOUR PROJECT`

Placeholder:

> Tell me what you're planning, what you're imagining, or simply what you'd like photographed.

Recommended height:

`160–220px`

Allow natural writing.

Do not impose a strict character limit unless necessary.

---

# 12. Optional Budget Field

If the photographer needs budget information, make it optional.

Example:

```text
BUDGET RANGE

Under ₹25K
₹25K–₹50K
₹50K–₹1L
₹1L+
Let's discuss
```

Do not display pricing assumptions if the photographer has not established these ranges.

Alternative:

Use a free-text optional field:

`Approximate budget`

---

# 13. Form Layout — Desktop

Use an asymmetric editorial layout.

```text
┌────────────────────────────┐
│                            │
│     START A                │
│     CONVERSATION           │
│                            │
│     A little context       │
│     about the project.     │
│                            │
└────────────────────────────┘

                          NAME
                          ───────────────

                          EMAIL
                          ───────────────

                          PROJECT TYPE
                          ───────────────

                          DATE
                          ───────────────

                          LOCATION
                          ───────────────

                          TELL ME ABOUT
                          YOUR PROJECT
                          ───────────────

                          SEND INQUIRY →
```

The form should occupy approximately:

`50–60%`

The left side remains visually quiet.

---

# 14. Form Layout — Mobile

Stack everything.

```text
NAME
──────────────

EMAIL
──────────────

PROJECT TYPE
──────────────

DATE
──────────────

LOCATION
──────────────

TELL ME ABOUT
YOUR PROJECT

[ textarea ]


SEND INQUIRY →
```

Spacing:

`24–32px`

between fields.

Do not put two tiny fields beside each other if it reduces readability.

---

# 15. Form Visual Style

Do not use traditional input cards.

Preferred:

- cream background
- bottom border
- no filled input container
- no heavy shadow
- generous vertical padding

Example:

```text
NAME

____________________________
```

Focus state:

- border darkens
- subtle label transition
- optional small underline animation

---

# 16. Labels

Use uppercase sans-serif.

Approximate:

`10–12px`

Letter spacing:

`0.12em–0.18em`

Example:

```text
YOUR NAME
```

Input text:

`16–18px`

This keeps the form elegant and readable.

---

# 17. Required Fields

Mark only genuinely required fields.

Use:

`*`

Example:

```text
NAME *
EMAIL *
```

Do not make every field mandatory.

---

# 18. Primary Submit CTA

Primary button:

```text
SEND INQUIRY →
```

Alternative:

```text
START THE CONVERSATION →
```

Recommended:

`SEND INQUIRY →`

Button style:

- outlined dark border
- cream background
- dark text

Hover:

- dark charcoal fill
- cream text
- arrow moves 5–8px

Height:

`50–56px`

Width:

approximately `190–240px`

---

# 19. Form Validation

Validation should be quiet and helpful.

Example:

```text
Please enter your name.
```

or:

```text
Please enter a valid email address.
```

Do not use:

- red warning banners
- aggressive animations
- vague errors such as “Invalid input”

Validation should appear near the relevant field.

---

# 20. Submit State

When submitted:

Button changes to:

```text
SENDING…
```

Prevent duplicate submissions.

After success:

```text
THANK YOU.

Your message has been sent.

I'll get back to you as soon as I can.

BACK TO HOME →
```

Do not immediately redirect the visitor away.

---

# 21. Error State

If submission fails:

```text
SOMETHING WENT WRONG.

Your message wasn't sent.
Please try again or contact me directly.

TRY AGAIN
```

Also provide direct email access.

---

# 22. Direct Contact

Some visitors will prefer email.

Place a direct contact section below the form.

Example:

```text
PREFER EMAIL?

hello@lumierephotography.com
```

Email should be clickable.

Add:

```text
INSTAGRAM
PINTEREST
```

only if those channels are actually active.

---

# 23. Availability

Add a small editorial information block.

Example:

```text
BASED IN

INDIA

AVAILABLE

WORLDWIDE

CURRENTLY ACCEPTING

PORTRAITS
WEDDINGS
TRAVEL
EDITORIAL
LIFESTYLE
```

This should remain informational rather than promotional.

---

# 24. Response Expectations

If appropriate, include:

```text
RESPONSE TIME

Usually within 24–72 hours.
```

Only publish a response timeframe that the photographer can realistically maintain.

Avoid promising immediate responses.

---

# 25. FAQ Section

A small FAQ section can reduce unnecessary back-and-forth.

Recommended questions:

```text
DO YOU TRAVEL?

HOW FAR IN ADVANCE SHOULD I BOOK?

DO YOU OFFER CUSTOM PACKAGES?

CAN I REQUEST A SPECIFIC LOCATION?

HOW DOES THE BOOKING PROCESS WORK?

DO YOU PHOTOGRAPH COMMERCIAL PROJECTS?
```

Keep answers short.

Approximately:

`30–80 words`

each.

---

# 26. FAQ Interaction

Desktop:

Accordion.

Example:

```text
DO YOU TRAVEL?                              +

HOW FAR IN ADVANCE SHOULD I BOOK?           +

DO YOU OFFER CUSTOM PACKAGES?               +
```

When opened:

```text
DO YOU TRAVEL?                              −

Yes. I am available for selected projects
outside my base location. Travel details
can be discussed during the inquiry process.
```

Only one or two items need to be open simultaneously.

---

# 27. FAQ Mobile

Full-width accordion.

Touch target:

minimum `44px`

Use:

`+`

and

`−`

indicators.

Do not use tiny disclosure controls.

---

# 28. Optional Availability Calendar

Do not add a calendar unless the photographer genuinely needs scheduling.

If implemented later, keep it separate from the initial inquiry.

Recommended flow:

```text
INQUIRY
↓
CONVERSATION
↓
AVAILABILITY
↓
BOOKING
```

Do not make visitors choose an appointment slot before they can explain their project.

---

# 29. Final Image

After the practical content, bring photography back into the page.

Use one quiet full-width image.

Example:

```text
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│                  IMAGE                       │
│                                              │
│                                              │
└──────────────────────────────────────────────┘
```

Height:

`55–70vh`

No form overlay.

This returns the visitor to the emotional world of Lumière.

---

# 30. Final Statement

Below the image:

```text
EVERY STORY
STARTS WITH
A CONVERSATION.
```

Large serif typography.

Centered.

Then:

```text
hello@lumierephotography.com
```

This acts as the final invitation.

---

# 31. Mobile Final CTA

On mobile:

```text
EVERY STORY
STARTS WITH
A CONVERSATION.

hello@lumierephotography.com
```

Keep it simple.

---

# 32. Navigation

Use the global navigation.

Desktop:

```text
LUMIÈRE
WORK
COLLECTIONS
ABOUT
INQUIRE →
```

`INQUIRE` should have the active indicator.

Example:

```text
INQUIRE
───────
```

Mobile:

```text
☰       LUMIÈRE       INQUIRE
```

---

# 33. Breadcrumb Context

A small contextual label can appear above the hero:

```text
HOME / INQUIRE
```

But this should remain subtle.

Do not create a large breadcrumb component.

---

# 34. Page Spacing

Hero:

`120–160px` vertical breathing room

Form:

`120–160px`

Direct contact:

`80–120px`

FAQ:

`100–140px`

Final image:

`120–160px`

Footer:

`80–120px`

The page should never feel compressed.

---

# 35. Desktop Grid

Use the global 12-column system.

Example:

```text
Intro:
4 columns

Form:
6–7 columns

Direct contact:
3–4 columns

FAQ:
8 columns

Final statement:
6–8 columns
```

Use asymmetric placement.

Do not center every section.

---

# 36. Tablet Layout

Tablet:

- hero remains centered or slightly offset
- form becomes approximately 70–80% width
- FAQ becomes full-width
- direct contact becomes two columns
- final CTA remains centered

Avoid overly complex desktop offsets.

---

# 37. Mobile Layout

Recommended:

```text
HERO
↓
INTRO
↓
FORM
↓
DIRECT EMAIL
↓
AVAILABILITY
↓
FAQ
↓
IMAGE
↓
FINAL STATEMENT
↓
FOOTER
```

Everything should be easy to scan.

---

# 38. Form Accessibility

Requirements:

- every field has a visible label
- labels remain associated with fields
- keyboard navigation works
- focus state is clearly visible
- errors are announced appropriately
- required fields are identified
- submit state is communicated
- sufficient color contrast
- touch targets are at least 44px where applicable

Never rely on placeholder text as the only label.

---

# 39. Spam Protection

The design should support unobtrusive spam protection.

Prefer:

- server-side validation
- rate limiting
- honeypot field
- CAPTCHA only when necessary

Avoid forcing every visitor through an intrusive CAPTCHA.

---

# 40. Privacy

If collecting personal information, provide a concise privacy note.

Example:

```text
By sending this inquiry, you agree that your
information may be used to respond to your request.
```

Link to the site's privacy policy.

Do not place a giant legal paragraph beside the form.

---

# 41. Data Handling

The implementation should conceptually support:

```text
Form
↓
Validation
↓
Spam protection
↓
Secure submission
↓
Email / inquiry storage
↓
Confirmation
```

The exact backend is an implementation concern, not part of the visual design.

---

# 42. SEO

Recommended:

```text
/inquire
```

Page title:

`Inquire — Lumière Photography`

Meta description should explain:

- photography services
- location
- worldwide availability
- inquiry purpose

Use a unique Open Graph image.

---

# 43. Reduced Motion

When reduced motion is enabled:

Disable:

- field transitions beyond basic focus state
- page transition movement
- image parallax
- CTA hover movement
- accordion animation

Keep all states instant and understandable.

---

# 44. Performance

The Inquiry page should be lightweight.

Prioritize:

- typography
- form
- one major image
- minimal JavaScript

Do not load the entire photography gallery.

The final image can be lazy-loaded if it is below the fold.

---

# 45. Content Model

Conceptual structure:

```text
Inquiry Page
├── heading
├── introduction
├── form
│   ├── name
│   ├── email
│   ├── phone
│   ├── project type
│   ├── date
│   ├── location
│   ├── budget
│   ├── message
│   └── discovery source
├── direct email
├── social links
├── availability
├── response time
├── FAQ
├── final image
└── final statement
```

Optional fields should remain configurable.

---

# 46. Booking Flow

The overall photography inquiry journey should be:

```text
VISITOR
  ↓
INQUIRE
  ↓
FORM
  ↓
CONFIRMATION
  ↓
PHOTOGRAPHER RESPONSE
  ↓
CONVERSATION
  ↓
AVAILABILITY
  ↓
QUOTE / PROPOSAL
  ↓
BOOKING
```

The website should handle the first step elegantly without trying to turn the entire booking process into one giant form.

---

# 47. Recommended Confirmation Page

After successful submission, use a calm confirmation state.

```text
THANK YOU.

I'VE GOT YOUR MESSAGE.

I'll be in touch soon.

In the meantime,
you can explore the latest work.

VIEW WORK →
```

Optional:

```text
INSTAGRAM →
```

Do not immediately dump the visitor back on the homepage.

---

# 48. Email Confirmation — Optional

If automated confirmation is used:

Subject:

`Your inquiry has reached Lumière`

Body should be brief:

```text
Thank you for reaching out.

I've received your inquiry and will get back
to you as soon as possible.

Until then,

Lumière
```

Keep automated communication consistent with the site's human tone.

---

# 49. Final Creative Principle

The Inquiry page should never feel like:

**“Submit your lead.”**

It should feel like:

**“Tell me about what you're imagining.”**

The ideal hierarchy is:

```text
PERSON
   ↓
STORY
   ↓
CONVERSATION
   ↓
FORM
```

not:

```text
FORM
   ↓
FORM
   ↓
FORM
```

The final experience should be:

**warm, personal, simple, editorial, trustworthy, and inviting.**

---

# 50. Complete Inner-Page System

With this page, the Lumière inner-page architecture is complete:

```text
HOME
 │
 ├── WORK / GALLERY
 │      │
 │      └── INDIVIDUAL STORY
 │
 ├── COLLECTIONS
 │      ├── PORTRAITS
 │      ├── WEDDINGS
 │      ├── TRAVEL
 │      ├── LANDSCAPES
 │      └── LIFESTYLE
 │
 ├── ABOUT
 │
 └── INQUIRE
```

Together with the homepage:

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
ABOUT
↓
CONTACT
↓
FOOTER
```

This creates a complete photography website architecture rather than a single portfolio landing page.
