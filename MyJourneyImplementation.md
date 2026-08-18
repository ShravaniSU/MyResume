# Updated Detailed Prompt — My Journey Page

## Overview

Build a new **“My Journey”** page as an extension of the existing personal portfolio website.

This is **not a redesign of the existing website**. The existing website is already live and has an established visual identity, navigation, theme system, typography, spacing, components, footer, responsive behavior, and dark/light mode.

The new page must feel like it was designed and built as a **natural extension of the existing website**.

**Important:** Before implementing anything, inspect and reuse the existing website's design system and components. Do not invent a separate design language for this page.

The page is a personal storytelling experience about my journey through different stages of life, career, places, people, and travel.

---

# Phase 0 — Audit Existing Website

Before making any changes, inspect the existing project carefully.

### 0.1 Existing routing

* Identify the current routing implementation.
* Check how existing pages such as Projects and Blogs are routed.
* Add the new page using the **existing router**.
* Do not introduce another routing library or routing mechanism.
* Recommended route: `/journey`.
* Do not use `/about`, because “About” already exists as part of the current website/navigation structure.

### 0.2 Existing navigation

Inspect the existing navbar and add:

**My Journey**

Recommended placement:

**About → Skills → Projects → Experience → Blogs → My Journey → Contact**

The new navigation item must use exactly the same:

* font
* size
* spacing
* hover state
* active state
* responsive behavior
* animation
* theme behavior

as the existing navigation items.

Do not redesign the navbar.

### 0.3 Existing theme

Inspect the current:

* CSS variables
* color tokens
* typography
* dark/light mode
* background gradients
* shadows
* borders
* buttons
* cards
* section spacing

The My Journey page must use the **existing design tokens wherever possible**.

Do not introduce an unrelated color palette.

The current visual direction is light, elegant, soft, and modern, with the existing website's navy/teal/mint visual language.

### 0.4 Existing components

Before creating new components, check whether the project already contains reusable components for:

* Navbar
* Footer
* Buttons
* Cards
* Social links
* Section headings
* Images
* Scroll reveal
* Animations
* Theme toggle
* Responsive containers

Reuse existing components instead of duplicating them.

### 0.5 Existing footer

The website already has an existing footer.

**Keep the existing footer exactly as it currently exists.**

Do not create a new footer specifically for My Journey.

Do not create a new “Let's Connect” section.

The My Journey page should flow naturally into the existing website footer.

---

# Phase 1 — Page Structure

The page should follow this storytelling structure:

1. My Journey Hero
2. Chapter 1 — Where It All Began
3. Chapter 2 — Finding My Path
4. Chapter 3 — Standing On My Own
5. Shiro — Special Chapter
6. Chapter 4 — Journeys of the Spirit
7. Pull Quote
8. The Road Ahead
9. Existing Website Footer

There must be **NO “What I Do” section.**

There must be **NO separate “Let's Connect” section.**

The existing footer should appear after “The Road Ahead”.

---

# Phase 2 — Asset Preparation

Create or use the project's existing image/asset structure.

The page is intended to use real personal images wherever available.

Potential assets include:

* `Shravani.jpg` — personal portrait
* Mumbai / childhood photograph
* Bangalore / student-life photograph
* Gurugram photograph
* Shiro photograph
* Kedarnath / spiritual travel photograph
* Other personal travel photographs

### Important image rule

These are personal memories and should **not be replaced with generic stock photography if real assets are available**.

If an image is not available yet:

* create a clearly labeled temporary placeholder
* maintain the exact intended image dimensions/aspect ratio
* make it easy to replace later without changing the layout

Do not restructure the page when real images are added.

### Image requirements

Every image must have:

* meaningful `alt` text
* responsive sizing
* appropriate `loading` behavior
* no layout shift
* rounded corners consistent with the existing website
* subtle existing-style shadows/borders

---

# Phase 3 — Component Structure

Use a clean reusable structure.

Suggested components:

```text
JourneyPage
├── JourneyHero
├── JourneySection
│   ├── Chapter 1
│   ├── Chapter 2
│   ├── Chapter 3
│   └── Chapter 4
├── ShiroHighlight
├── JourneyQuote
├── JourneyClosing
└── ExistingFooter
```

### JourneySection

Create one reusable `JourneySection` component rather than creating four completely separate hardcoded components.

It should support:

* image
* heading
* chapter label
* text
* image position
* optional accent
* responsive stacking

The four chapters should alternate between:

**Image → Text**

and

**Text → Image**

on desktop.

On mobile, they should naturally stack vertically.

---

# Phase 4 — My Journey Hero

Create a personal, editorial-style hero section.

### Content

Main heading:

**My Journey**

Subtitle:

**A path shaped by curiosity, resilience, and a desire to build impact.**

Supporting text:

**From a small town in Mumbai to the cloud systems I build today — here's the story of how it all came together.**

### Visual treatment

Use the existing website's visual language.

The hero should include the personal portrait:

`Shravani.jpg`

Portrait treatment:

* rounded/circular or softly rounded
* subtle border
* soft shadow
* very subtle glow
* elegant rather than flashy
* responsive on mobile

The hero should immediately feel more personal than the technical homepage hero.

Do not add excessive animations.

If the existing website already has entrance animations, reuse them.

---

# Phase 5 — Chapter 1

## Where It All Began

Chapter label:

**CHAPTER 1**

Heading:

**Where It All Began**

The section tells the story of Mumbai and childhood.

Use the appropriate Mumbai/childhood image.

The visual should communicate:

* Mumbai
* childhood
* beginnings
* curiosity
* resilience
* dreams

Use the existing typography and spacing system.

Desktop layout:

**Image → Text**

Mobile:

**Image → Text**

---

# Phase 6 — Chapter 2

## Finding My Path

Chapter label:

**CHAPTER 2**

Heading:

**Finding My Path**

This chapter represents Bangalore and the student/college phase.

The content should communicate:

* college life
* Bangalore
* friendships
* late-night coding
* debugging
* learning
* discovering an interest in technology
* personal growth

Use the appropriate Bangalore/student-life image.

Desktop layout:

**Text → Image**

Mobile:

**Text → Image** or natural stacked order.

Maintain the same visual rhythm as Chapter 1.

---

# Phase 7 — Chapter 3

## Standing On My Own

Chapter label:

**CHAPTER 3**

Heading:

**Standing On My Own**

This chapter represents moving to Gurugram and becoming more independent.

The story should communicate:

* moving to a new city
* new challenges
* independence
* professional growth
* engineering experience
* responsibility
* learning how to build systems people can rely on

Use an appropriate Gurugram/city image.

Desktop layout:

**Image → Text**

Maintain the same reusable `JourneySection`.

---

# Phase 8 — Shiro Highlight

Create a visually warmer and slightly more playful section for **Shiro**.

This section should feel different from the formal career chapters while still belonging to the same website.

Heading:

**Shiro**

Give the name subtle visual emphasis.

A small paw icon can be used if it fits the existing visual language.

The section should communicate that Shiro is:

* a companion
* a source of happiness
* a stress buster
* a reminder to slow down
* part of the journey

Use a real photograph of Shiro if available.

Visual treatment:

* slightly warmer background
* soft rounded container
* subtle decorative elements
* tasteful paw-print details are acceptable
* no cartoonish design
* no oversized decorative graphics

Keep it elegant and personal.

---

# Phase 9 — Chapter 4

## Journeys of the Spirit

Chapter label:

**CHAPTER 4**

Heading:

**Journeys of the Spirit**

This chapter focuses on travel, spirituality, mountains, and personal reflection.

Use an appropriate Kedarnath/travel image.

The story should communicate:

* traveling beyond work
* mountains
* spirituality
* Kedarnath
* peace
* grounding
* reflection
* discovering a bigger perspective

Desktop layout:

**Image → Text**

Mobile layout:

Stack naturally.

---

# Phase 10 — Pull Quote

Create a large editorial-style quote section.

Quote:

**“Every place, every person, every challenge — they all shape who I am becoming.”**

This must NOT look like a testimonial card.

Do not use:

* boxed testimonial styling
* review-card styling
* stars
* user avatar
* quotation-card UI

Instead use:

* oversized quotation mark
* large typography
* generous whitespace
* subtle decorative line
* existing accent color
* elegant editorial treatment

The section should act as a visual pause between the journey chapters and the closing reflection.

---

# Phase 11 — The Road Ahead

Create a closing reflection section titled:

**The Road Ahead**

This section should be simple, personal, and meaningful.

### IMPORTANT — EXACT TEXT

The Road Ahead section must contain this exact sentence and **must not add additional motivational paragraphs around it**:

**“As I move forward, I carry that same hope—to continue building a life that feels meaningful, balanced, and truly my own.”**

This sentence should be the primary content of the section.

Do not rewrite it.

Do not expand it.

Do not add another generic career statement.

Do not add a “What I Do” section after it.

---

# Phase 12 — Travel Website Reference

Within the “The Road Ahead” section, add a subtle invitation for visitors interested in travel.

The purpose is to let visitors discover the places I have personally visited so far.

Use the following exact website:

**travel.shravaniurankar.in**

Suggested wording:

**“I also love exploring new places and sharing those experiences. Visit my travel site to explore the places I've visited so far.”**

Make:

**travel.shravaniurankar.in**

a clearly visible clickable link.

The link should:

* open in a new tab
* use `target="_blank"`
* use `rel="noopener noreferrer"`
* follow the existing website's link styling
* use the existing accent color
* have an accessible hover/focus state

Do not create an additional travel page inside this portfolio.

Do not embed the travel website.

Simply provide a tasteful link to:

`travel.shravaniurankar.in`

The travel link should feel like a natural extension of the personal story rather than an advertisement.

---

# Phase 13 — NO What I Do Section

Do NOT include:

**What I Do**

Do NOT include:

* Cloud Architecture
* Automation
* Travel Writing cards
* capability cards
* skill cards
* service cards

The My Journey page is specifically a personal storytelling page.

Professional skills already exist elsewhere on the website.

Do not duplicate that content here.

---

# Phase 14 — NO Let's Connect Section

Do NOT create a separate:

**Let's Connect**

section.

Do NOT add:

* GitHub card
* LinkedIn card
* Instagram card
* social CTA section

The website already has its existing footer and social links.

Use the existing footer instead.

---

# Phase 15 — Existing Footer

After “The Road Ahead”, render the **existing website footer**.

Do not redesign it.

Do not create a Journey-specific footer.

Do not duplicate navigation.

Do not duplicate social links.

Do not change footer content.

The page should visually transition naturally from:

**The Road Ahead → Existing Footer**

The footer must behave exactly as it does on the rest of the website.

---

# Phase 16 — Navigation Consistency

Add:

**My Journey**

to the existing navbar.

Recommended order:

**About | Skills | Projects | Experience | Blogs | My Journey | Contact**

The active state should indicate that the visitor is currently on My Journey.

Use the exact same active-state treatment as existing navigation items.

Do not change the existing navbar design.

---

# Phase 17 — Animation

Reuse the existing animation/scroll-reveal system.

If the project already uses:

* Framer Motion
* Intersection Observer
* scroll reveal
* fade-in
* slide-up

reuse the existing implementation.

Do not install another animation library.

Animations should be subtle:

* fade
* slight vertical movement
* image reveal

Avoid:

* excessive parallax
* aggressive zoom
* spinning elements
* distracting effects

Respect:

`prefers-reduced-motion`

When reduced motion is enabled, disable non-essential animations.

---

# Phase 18 — Responsive Design

The page must work across:

* desktop
* laptop
* tablet
* mobile

### Desktop

Use the alternating storytelling layout.

### Tablet

Reduce:

* image sizes
* heading sizes
* horizontal spacing

while preserving the storytelling rhythm.

### Mobile

Every chapter should become a clean single-column layout.

Images should:

* remain prominent
* fit the screen width
* retain their aspect ratio
* have consistent rounded corners

Typography must remain readable.

No horizontal scrolling.

The hero portrait should scale down appropriately.

The navigation should use the existing mobile navigation behavior.

---

# Phase 19 — Accessibility

Use semantic HTML.

Structure the page using:

```html
<main>
  <section>
  ...
  </section>
</main>
```

Requirements:

* proper heading hierarchy
* meaningful image alt text
* keyboard-accessible links
* visible focus states
* sufficient color contrast
* accessible travel-site link
* respect reduced motion
* no information conveyed through color alone

---

# Phase 20 — Dark/Light Mode

The page must support the existing website's dark/light mode.

Do not create a separate theme.

Use existing CSS variables/design tokens.

Verify:

* hero
* chapter backgrounds
* image borders
* shadows
* quote section
* Shiro section
* Road Ahead section
* travel link
* footer

all look intentional in both themes.

Avoid hardcoded colors where existing theme variables are available.

---

# Phase 21 — Visual Design Direction

The page should feel:

* personal
* elegant
* warm
* modern
* editorial
* spacious
* authentic
* calm
* visually connected to the existing portfolio

The current website already uses a soft light aesthetic with navy and teal/mint accents.

Maintain that visual identity.

Use:

* generous whitespace
* clean typography
* subtle gradients
* rounded image corners
* restrained shadows
* thin accent lines
* subtle decorative elements
* consistent section spacing

Do NOT make it look like:

* a corporate About Us page
* a resume
* a blog article
* a generic template
* a testimonial page
* a SaaS dashboard
* a separate website

It should feel like **a personal story within the existing portfolio**.

---

# Phase 22 — Content Hierarchy

The final page should communicate this narrative:

**My Journey**

↓

**Where It All Began**
Mumbai and childhood

↓

**Finding My Path**
Bangalore, college, learning and technology

↓

**Standing On My Own**
Gurugram, independence and professional growth

↓

**Shiro**
Companionship and balance

↓

**Journeys of the Spirit**
Kedarnath, travel, spirituality and reflection

↓

**Every place, every person, every challenge — they all shape who I am becoming.**

↓

**The Road Ahead**

**As I move forward, I carry that same hope—to continue building a life that feels meaningful, balanced, and truly my own.**

↓

**Travel**

Visitors can explore:

**travel.shravaniurankar.in**

↓

**Existing Website Footer**

---

# Phase 23 — Important Implementation Rules

1. This is an extension of the existing website.
2. Do not redesign the existing website.
3. Do not modify unrelated pages.
4. Do not replace the existing navbar.
5. Do not replace the existing footer.
6. Do not create a second footer.
7. Do not create a separate “Let's Connect” section.
8. Do not create a “What I Do” section.
9. Do not duplicate existing Skills/Projects/Experience content.
10. Reuse existing components whenever possible.
11. Reuse existing theme variables.
12. Reuse existing animation patterns.
13. Reuse existing responsive breakpoints.
14. Add only the new My Journey route and its required components/assets.
15. Use `/journey` as the route.
16. Add “My Journey” to the existing navbar.
17. Keep the page visually consistent with the existing portfolio.
18. Use real personal images when provided.
19. Use placeholders only where real images are not yet available.
20. Keep the exact “The Road Ahead” sentence provided above.
21. Include a link to `travel.shravaniurankar.in`.
22. Open the travel website safely in a new tab.
23. End the page with the existing website footer.
24. Do not make implementation decisions that contradict these requirements.

---

# Final Page Flow

The completed page should be:

**Existing Navbar**

→ **My Journey Hero**

→ **Chapter 1 — Where It All Began**

→ **Chapter 2 — Finding My Path**

→ **Chapter 3 — Standing On My Own**

→ **Shiro**

→ **Chapter 4 — Journeys of the Spirit**

→ **Pull Quote**

→ **The Road Ahead**

→ **Travel Site Link**

→ **Existing Footer**

This should feel like a natural new chapter of the existing `shravaniurankar.in` portfolio rather than a standalone website.


Section 02 

## Task: Refine the “My Journey” Page Layout Without Changing Existing Content

I have an existing personal portfolio website with a **“My Journey”** page. The current page is visually good, but the sections are much too large vertically. The screenshots show that the page contains excessive empty space around the actual content.

I want you to **refine the layout and spacing only** and redesign the **first/hero section**.

### IMPORTANT — DO NOT CHANGE MY EXISTING CONTENT

This is a refinement task, NOT a rewrite.

Do NOT:

* Rewrite any existing text.
* Remove any existing chapter.
* Add/remove/replace the existing chapter images.
* Change the order of the chapters.
* Change the meaning of any existing content.
* Change navigation items.
* Change footer content.
* Change links.
* Change the existing color theme unnecessarily.
* Change the existing typography unnecessarily.
* Change the existing animations unless required for the new hero.
* Replace the existing chapter images.
* Modify the actual story/content of the page.

Only change:

1. Section sizing and spacing.
2. Hero/intro visual design.
3. Responsive spacing where necessary.
4. Minor alignment adjustments required to make the page feel balanced.

---

# 1. MAIN PROBLEM — SECTIONS ARE TOO LARGE

Currently, each section takes up far more vertical space than the content actually requires.

For example, the first chapter section has:

* A relatively normal-sized image.
* A relatively short amount of text.
* But a very large amount of empty vertical space above/below the content.

The same problem appears throughout the page.

### Desired behavior

Every section should be approximately:

**Content height + comfortable padding**

rather than:

**Fixed/minimum viewport height + content**

Do NOT make every chapter section `100vh`, `90vh`, `80vh`, etc.

Avoid large fixed heights such as:

```css
min-height: 100vh;
height: 100vh;
```

for the individual journey chapters unless there is a very specific reason.

Prefer natural sizing:

```css
height: auto;
min-height: unset;
```

and use controlled vertical padding.

For example, desktop sections can generally use something around:

```css
padding: 80px 0;
```

or:

```css
padding: clamp(60px, 7vw, 100px) 0;
```

but choose the value based on the existing design rather than blindly applying it everywhere.

The goal is **not to make everything cramped**.

The goal is:

> Enough breathing room to feel premium, but no large empty areas that exist only because of an arbitrary section height.

---

# 2. HERO / FIRST SECTION — REMOVE MY PHOTO

The current first section contains my personal photograph on the left.

I DO NOT want my photograph in the opening/hero section.

Remove the personal photo from the hero section only.

### VERY IMPORTANT

Do NOT delete the image asset from the project if it is used elsewhere.

Do NOT replace the chapter images later in the page.

Only remove the personal photograph from the **first introductory hero section**.

---

# 3. NEW HERO VISUAL — LIFE + TRAVEL + FUN + JOURNEY

Instead of my photograph, create a visually interesting abstract representation of a personal journey.

The visual should communicate:

* Life
* Travel
* Exploration
* Curiosity
* Experiences
* Fun
* Growth
* Different places
* Moving forward
* Memories
* A journey that is still continuing

Do NOT make it look like a generic corporate illustration.

Do NOT use a stock photograph.

Do NOT use a giant globe.

Do NOT create something overly childish or cartoonish.

The visual should feel:

**minimal + elegant + personal + modern + slightly playful + premium**

and should fit the existing dark portfolio aesthetic.

---

# 4. SUGGESTED HERO VISUAL

Create an abstract **“journey path”** visual.

Imagine a thin glowing route/path moving organically across the hero area.

The route can contain:

* Small glowing destination dots.
* Tiny location markers.
* Subtle stars.
* Minimal mountain/landscape line art.
* A small airplane/travel trail.
* A tiny camera/travel-related symbol if appropriate.
* Small circles representing memorable moments.
* Curved lines representing different stages of life.
* Very subtle sparkles.
* A final glowing point representing “what comes next”.

The visual should NOT be overloaded.

Think of it as:

> A visual map of a life journey, rather than an actual geographical map.

The route can subtly travel from one side toward the other, giving the impression of movement and progress.

---

# 5. HERO VISUAL STYLE

Match the existing website.

The current design uses:

* Very dark navy background.
* Deep teal/blue tones.
* Bright cyan/turquoise accent.
* White typography.
* Soft glowing effects.

Keep that visual language.

Use the existing CSS variables/theme colors wherever possible instead of introducing a completely new color palette.

The journey lines can use the existing cyan/turquoise accent.

Use subtle glow rather than strong neon effects.

Example visual direction:

```text
             ✦
       ·             ·

    ●──────╮
            ╰─────●
                   ╲
                    ╲  ✈
                     ●──────╮
                             ╰────●
                                  ✦
```

But make the actual implementation much more elegant and visually polished than this ASCII representation.

---

# 6. HERO SHOULD FEEL LIKE AN INTRODUCTION

The current hero has:

* “PERSONAL STORY”
* “My Journey”
* Existing subtitle
* Existing description

KEEP THESE TEXT ELEMENTS EXACTLY AS THEY ARE.

Only change their layout if necessary.

The new hero should visually emphasize:

**My Journey**

while the abstract journey graphic acts as the visual identity of the section.

A good layout would be something like:

```text
        [ abstract journey visual ]

               PERSONAL STORY

               My JOURNEY

     existing subtitle/content
```

OR, if the existing horizontal layout looks better:

```text
[ journey visual ]    PERSONAL STORY
                      My JOURNEY
                      existing subtitle
                      existing description
```

Choose whichever works best with the existing design, but make sure the hero does NOT become unnecessarily tall.

---

# 7. HERO HEIGHT

The hero currently occupies too much vertical space.

Reduce it substantially.

The hero should feel like a strong introduction, but it should not consume almost the entire screen vertically.

On desktop, aim approximately for:

```css
min-height: 55vh;
```

to:

```css
min-height: 65vh;
```

ONLY if necessary.

Prefer content-driven height if possible.

Do NOT force `100vh`.

The next chapter should begin naturally after the hero with only a comfortable transition.

When the page loads at 100% browser zoom on a normal laptop screen, the user should be able to see:

* Most/all of the hero
* And at least the beginning of the next section

without feeling like the hero is consuming the entire page.

---

# 8. CHAPTER SECTIONS — CONTENT-DRIVEN HEIGHT

For each chapter section:

### Chapter 1

Keep:

* Existing kitten image.
* Existing “CHAPTER 1” label.
* Existing “Childhood & Roots” label.
* Existing “Where It All Began” heading.
* Existing body text.

Do NOT change any of these.

Only adjust:

* Section height.
* Padding.
* Image/text alignment.
* Gap between image and text.

The image should determine the approximate height of the content row.

For example:

```css
.chapter-content {
    display: grid;
    align-items: center;
    gap: clamp(40px, 6vw, 80px);
}
```

The section should end shortly after the content ends.

There should NOT be hundreds of pixels of empty space underneath the paragraph.

---

# 9. CHAPTER IMAGE SIZING

Do NOT make the images unnecessarily huge.

Images should have a visually comfortable maximum width.

For example:

```css
max-width: 560px;
width: 100%;
```

or an equivalent responsive value based on the existing design.

Keep the existing image aspect ratios.

Do NOT crop the images differently unless the existing CSS already requires it.

Do NOT replace the images.

Do NOT stretch them.

The image should feel like an important part of each chapter without dominating the page.

---

# 10. TEXT WIDTH

The text areas should also be controlled.

Do not allow paragraphs to become extremely wide.

Use something similar to:

```css
max-width: 560px;
```

or an appropriate value based on the current design.

The body text should remain easy to read.

The heading can remain large, but it should not create excessive vertical height.

---

# 11. VERTICAL SPACING BETWEEN CHAPTERS

Reduce the distance between consecutive chapters.

The current page feels like each chapter is almost a separate full-screen page.

Instead, it should feel like **one continuous personal story**.

Use consistent spacing such as:

```css
padding-block: clamp(60px, 8vw, 100px);
```

and adjust based on the actual content.

Avoid:

```css
margin-top: 200px;
margin-bottom: 200px;
```

or similar oversized spacing unless there is a deliberate visual reason.

The chapters should breathe, but the reader should naturally move from:

**Chapter 1 → Chapter 2 → Quote → Road Ahead**

without huge empty gaps.

---

# 12. ALTERNATING CHAPTER LAYOUT

Keep the current alternating layout.

For example:

### Chapter 1

```text
IMAGE       TEXT
```

### Chapter 2

```text
TEXT        IMAGE
```

Keep this behavior.

Do not make all chapters have the same image/text direction.

The alternating layout gives the page movement and should remain.

---

# 13. QUOTE SECTION

The quote section currently has a large amount of vertical space.

Keep the quote exactly as it is.

Do NOT rewrite it.

Reduce the excessive vertical padding around it.

The quote should feel like a deliberate pause in the story, but not like an entire viewport-sized section.

Suggested direction:

```css
.quote-section {
    padding: clamp(70px, 9vw, 120px) 20px;
}
```

Adjust based on the actual design.

Keep:

* Quote mark.
* Quote text.
* Decorative line/dot.
* Existing colors.
* Existing typography.

Only make the overall section more compact.

---

# 14. “THE ROAD AHEAD” SECTION

Keep the existing:

**The Road Ahead**

heading.

Keep the existing text exactly as written.

Keep the existing travel-site card/link.

Do NOT change the wording or destination.

Reduce the amount of empty vertical space around the section.

The content should visually determine the section's height.

The travel card should sit naturally below the paragraph with a comfortable gap.

It should NOT look like the card is floating in the middle of an enormous empty container.

---

# 15. FOOTER

Do not redesign the footer.

Do not change:

* Footer text.
* Social icons.
* Links.
* Copyright.
* Layout.

Only make sure the reduced spacing above it allows it to naturally follow the Road Ahead section.

---

# 16. RESPONSIVE DESIGN

This is very important.

The new sizing must work on:

* Desktop
* Laptop
* Tablet
* Mobile

Do NOT simply shrink the desktop design.

For mobile:

### Hero

The journey visual should move above or below the text depending on what looks best.

The hero should NOT become excessively tall.

### Chapter sections

Stack naturally:

```text
IMAGE

CHAPTER LABEL

HEADING

TEXT
```

Then next chapter.

Keep comfortable spacing, but avoid huge gaps.

For example:

```css
padding-block: 50px;
```

can be used as a starting point on mobile.

Images should use:

```css
width: 100%;
max-width: 100%;
```

while preserving aspect ratio.

---

# 17. USE CSS CLAMP WHERE APPROPRIATE

Instead of having completely different arbitrary values everywhere, use responsive CSS such as:

```css
padding: clamp(48px, 6vw, 90px) 0;
```

and:

```css
gap: clamp(30px, 5vw, 70px);
```

and:

```css
font-size: clamp(...);
```

where appropriate.

This will make the layout naturally scale between laptop, desktop and mobile.

---

# 18. DO NOT OVER-COMPACT THE DESIGN

I don't want the opposite problem.

Do NOT make the sections so short that the page feels cramped.

The desired visual balance is:

```text
CURRENT:

[       huge empty space       ]
[          content             ]
[       huge empty space       ]

[       huge empty space       ]
[          content             ]
[       huge empty space       ]


DESIRED:

[ comfortable spacing ]

[      IMAGE | CONTENT      ]

[ comfortable spacing ]

[      CONTENT | IMAGE      ]

[ comfortable spacing ]

[        QUOTE             ]

[ comfortable spacing ]

[      ROAD AHEAD          ]
[       travel card        ]

[ footer ]
```

The page should feel **editorial, premium and story-driven**, not compressed.

---

# 19. IMPORTANT — PRESERVE THE EXISTING DESIGN SYSTEM

Do not introduce a new design system.

Reuse:

* Existing colors.
* Existing fonts.
* Existing buttons.
* Existing border radius.
* Existing shadows.
* Existing animations.
* Existing navigation.
* Existing footer.
* Existing responsive breakpoints.

The redesign should look like an improved version of the current page, not a completely different website.

---

# 20. HERO ANIMATION

If the existing project supports animations, add a VERY subtle animation to the new journey graphic.

Possible effects:

* Route line slowly drawing itself.
* Destination dots gently pulsing.
* Tiny star/sparkle appearing occasionally.
* Small airplane/travel marker moving slowly along the route.

Keep the animation extremely subtle.

Do NOT make it distracting.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

and disable/reduce the animation for users who prefer reduced motion.

---

# 21. HERO VISUAL IMPLEMENTATION

Prefer using existing project technologies.

If this is a React application, implement the visual as a React component and CSS rather than adding a huge external dependency.

For example, something conceptually like:

```jsx
<JourneyVisual>
    <svg>
        <path />
        <circle />
        <circle />
        ...
    </svg>
</JourneyVisual>
```

An SVG-based visual would be ideal because it:

* scales cleanly.
* doesn't require a new image asset.
* fits the minimalist aesthetic.
* can be animated subtly.
* remains sharp on high-resolution screens.

However, inspect the existing project first and use the project's established architecture.

Do not add a library just for this visual if it can be achieved cleanly with existing React/CSS/SVG.

---

# 22. FINAL VISUAL GOAL

After implementation, the page should feel like:

> “This is someone's personal story and journey through life.”

rather than:

> “This is a collection of large website sections.”

The visual rhythm should be:

**Intro → Childhood → College → Growth → Reflection → Future → Travel**

with each section having only as much vertical space as it needs.

---

# 23. ACCEPTANCE CRITERIA

Before considering the task complete, verify all of the following:

### Hero

* [ ] Personal photo is removed ONLY from the hero.
* [ ] Existing photo asset is not deleted if used elsewhere.
* [ ] Existing hero text remains unchanged.
* [ ] New abstract life/travel/journey visual is present.
* [ ] Visual matches the existing dark/cyan design.
* [ ] Hero is significantly shorter than the current version.
* [ ] Hero does not use `100vh`.
* [ ] Hero does not feel empty.

### Chapters

* [ ] Existing images are unchanged.
* [ ] Existing text is unchanged.
* [ ] Existing headings are unchanged.
* [ ] Chapter order is unchanged.
* [ ] Alternating image/text layout remains.
* [ ] Sections are content-driven.
* [ ] Excessive empty vertical space is removed.
* [ ] Images are not oversized.
* [ ] Text width remains readable.
* [ ] Spacing remains premium and comfortable.

### Quote

* [ ] Quote text is unchanged.
* [ ] Quote design remains consistent.
* [ ] Excessive vertical padding is reduced.

### Road Ahead

* [ ] Heading unchanged.
* [ ] Paragraph unchanged.
* [ ] Travel card unchanged.
* [ ] Existing travel link unchanged.
* [ ] Excessive empty space removed.

### Footer

* [ ] Footer content unchanged.
* [ ] Footer links unchanged.
* [ ] Footer icons unchanged.

### Responsive

* [ ] Desktop looks balanced.
* [ ] Laptop looks balanced.
* [ ] Tablet layout works correctly.
* [ ] Mobile layout stacks naturally.
* [ ] No horizontal overflow.
* [ ] No content is clipped.
* [ ] No images are distorted.

---

# 24. MOST IMPORTANT INSTRUCTION

Before editing, inspect the existing implementation and identify which CSS properties are causing the excessive section height.

Do NOT blindly rewrite the page.

Make the **smallest clean set of changes necessary** to achieve the desired visual result.

Preserve the existing content and design.

The only major visual change should be:

**Current hero photograph → abstract life/travel/journey visual**

Everything else should be a refinement of spacing, sizing, alignment and responsive behavior.

After implementation, check the page at approximately 100% browser zoom on a laptop/desktop and make sure the sections no longer feel like oversized full-screen blocks.
