# Plastic® Design System Style Guide

## Overview

This style guide documents the design system for Plastic®, a minimalist and elegant design agency website. The design system emphasizes clean typography, subtle animations, and a sophisticated black-and-white color scheme with strategic accent colors.

**Design Philosophy:**
- Minimalist and refined aesthetic
- Focus on typography and whitespace
- Smooth transitions and micro-interactions
- Responsive and fluid layouts
- High-end luxury brand feel

**Technical Stack:**
- Pure HTML/CSS (no framework dependencies)
- Custom CSS with CSS variables for theming
- Inter typeface family
- Responsive design using media queries and viewport units

---

## Color Palette

### Brand Colors

```css
--color-brand-blue: #4040ff;    /* Primary brand accent */
--color-brand-pink: #ff6b88;    /* Secondary brand accent */
--color-black: #000000;         /* Primary dark */
--color-white: #ffffff;         /* Primary light */
```

**Usage Guidelines:**
- **Brand Blue (#4040ff)**: Used for visual accents, gradient backgrounds, and interactive elements
- **Brand Pink (#ff6b88)**: Secondary accent for diversity in graphics and visual interest
- **Black (#000000)**: Primary text color, dark section backgrounds, buttons
- **White (#ffffff)**: Light section backgrounds, text on dark backgrounds

### Bootstrap Extended Palette

The system includes a full Bootstrap color palette for extended use cases:

```css
--bs-blue: #0d6efd;
--bs-indigo: #6610f2;
--bs-purple: #6f42c1;
--bs-pink: #d63384;
--bs-red: #dc3545;
--bs-orange: #fd7e14;
--bs-yellow: #ffc107;
--bs-green: #198754;
--bs-teal: #20c997;
--bs-cyan: #0dcaf0;
```

### Gray Scale

```css
--bs-gray-100: #f8f9fa;   /* Lightest - subtle backgrounds */
--bs-gray-200: #e9ecef;   /* Light - borders, placeholder backgrounds */
--bs-gray-300: #dee2e6;   /* Light-medium - dividers, borders */
--bs-gray-400: #ced4da;   /* Medium-light */
--bs-gray-500: #adb5bd;   /* Medium */
--bs-gray-600: #6c757d;   /* Medium-dark */
--bs-gray-700: #495057;   /* Dark - secondary text */
--bs-gray-800: #343a40;   /* Darker */
--bs-gray-900: #212529;   /* Darkest - primary text alternative */
```

### Semantic Colors

```css
--bs-primary: #0d6efd;
--bs-secondary: #6c757d;
--bs-success: #198754;
--bs-info: #0dcaf0;
--bs-warning: #ffc107;
--bs-danger: #dc3545;
--bs-light: #f8f9fa;
--bs-dark: #212529;
```

### Gradient Combinations

**Blue Gradient:**
```css
background: linear-gradient(135deg, #4040ff 0%, #6060ff 100%);
```

**Pink Gradient:**
```css
background: linear-gradient(135deg, #ff6b88 0%, #ff8ba0 100%);
```

**Black Gradient:**
```css
background: linear-gradient(135deg, #000000 0%, #333333 100%);
```

**Red-Blue Gradient:**
```css
background: linear-gradient(135deg, #ff3366 0%, #4040ff 100%);
```

---

## Typography

### Font Family

**Primary Typeface:** Inter
- Weights available: 100, 200, 300, 400, 500
- Loaded from Google Fonts
- Fallback stack: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

```css
--bs-font-sans-serif: "Inter", system-ui, -apple-system, "Segoe UI",
                      Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Monospace:** SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

### Font Weight Scale

| Weight | Usage |
|--------|-------|
| 100 | Ultra light (not commonly used) |
| 200 | Light (not commonly used) |
| 300 | **Light - Primary body text and headings** |
| 400 | **Regular - Emphasis, labels, category tags** |
| 500 | Medium (available but rarely used) |

**Note:** The design heavily favors font-weight 300 (Light) for a sophisticated, airy feel.

### Typography Hierarchy

#### Hero Title
```css
font-size: clamp(3.71rem, 9.89vw, 7.65rem);  /* ~59px to ~122px */
font-weight: 300;
line-height: 1.1;
letter-spacing: -0.02em;
max-width: 72vw;
```
**Usage:** Main landing hero headlines

#### Display Headings (Large)
```css
font-size: clamp(6.6rem, 13.2vw, 11rem);  /* ~105px to ~176px */
font-weight: 300;
```
**Usage:** Contact section, major CTAs

#### Section Headings (Extra Large)
```css
font-size: 7.5rem;  /* 120px */
font-weight: 400;
letter-spacing: -0.02em;
line-height: 1.2;
```
**Usage:** Client names in grid

#### Section Titles (Large)
```css
font-size: 3.5rem;  /* 56px */
font-weight: 400;
letter-spacing: 0.05em;
```
**Usage:** Services sidebar, Works sidebar

#### Body Large
```css
font-size: 2.64rem;  /* ~42px */
line-height: 1.1;
font-weight: 300;
```
**Usage:** About section descriptive text

#### Heading 1
```css
font-size: 2.5rem;  /* 40px */
font-weight: 400;
line-height: 1.1;
```

#### Heading 2
```css
font-size: 2.25rem;  /* 36px */
font-weight: 300;
line-height: 1.1;
```

#### Heading 3
```css
font-size: 1.875rem;  /* 30px */
font-weight: 300;
line-height: 1.2;
```

#### Heading 4
```css
font-size: 1.625rem;  /* 26px */
font-weight: 300;
line-height: 1.2;
```

#### Heading 5
```css
font-size: 1.5rem;  /* 24px */
font-weight: 300;
line-height: 1.3;
```

#### Heading 6
```css
font-size: 1.25rem;  /* 20px */
font-weight: 300;
line-height: 1.4;
```

#### Body Text / Paragraphs
```css
font-size: 1.125rem;  /* 18px */
line-height: 1.8;
font-weight: 300;
color: var(--bs-gray-700);
```
**Usage:** Service descriptions, body content

#### Base Body
```css
font-size: 1rem;  /* 16px */
font-weight: 300;
line-height: 1.5;
```
**Usage:** Default body text

#### Small Text
```css
font-size: 0.875rem;  /* 14px */
font-weight: 300;
letter-spacing: 0.05em;
```
**Usage:** Header center text, buttons, footer links

#### Category Labels
```css
font-size: 0.875rem;  /* 14px */
font-weight: 400;
letter-spacing: 0.1em;
text-transform: uppercase;
opacity: 0.8;
```
**Usage:** Story categories, section labels

#### Fine Print
```css
font-size: 0.75rem;  /* 12px */
opacity: 0.7;
```
**Usage:** Copyright, footer secondary text

### Letter Spacing Guidelines

| Context | Letter Spacing |
|---------|---------------|
| Display headings | -0.02em (tighter) |
| Section labels | 0.05em to 0.2em (wider) |
| Alphabet showcase | 0.2em |
| Numbers showcase | 0.15em |
| Category labels | 0.1em |
| Normal text | Default (no spacing) |

### Line Height Guidelines

| Context | Line Height |
|---------|------------|
| Display headings | 1.1 |
| Regular headings | 1.2 - 1.3 |
| Smaller headings | 1.4 |
| Body text | 1.5 - 1.8 |

---

## Spacing System

### Base Spacing Unit

The design uses a flexible spacing system based on viewport width:

```css
padding: 3.296vw;  /* Primary section padding */
```

**Conversion:**
- On 1920px viewport: ~63px
- On 1440px viewport: ~47px
- On 768px viewport: ~25px

### Common Spacing Values

#### Padding
```css
/* Section padding */
padding: 3.296vw;

/* Header padding */
padding: 1.5rem 3rem;         /* Desktop */
padding: 1.5rem 2rem;         /* Tablet */
padding: 1rem 1.5rem;         /* Mobile */

/* Button padding */
padding: 0.75rem 1.5rem;

/* Card content padding */
padding: 2rem;                /* Small */
padding: 3rem;                /* Large */

/* Service items */
padding: 3rem 3rem 3rem 0;
```

#### Gaps (Flexbox/Grid)
```css
gap: 0.5rem;    /* Tight - footer links */
gap: 1rem;      /* Small - general */
gap: 1.5rem;    /* Medium-small - graphics */
gap: 2rem;      /* Medium - cards, stories */
gap: 3rem;      /* Large - service items, footer columns */
gap: 4rem;      /* Extra large - service content */
gap: 20rem;     /* XXL - services grid */
```

#### Margins
```css
margin-bottom: 0.375rem;  /* Tight */
margin-bottom: 0.75rem;   /* Small */
margin-bottom: 1rem;      /* Medium */
margin-bottom: 2rem;      /* Large */
margin-bottom: 3rem;      /* XL */
margin-bottom: 4rem;      /* XXL */
margin-bottom: 10rem;     /* Section spacing */
margin-bottom: 20rem;     /* Major section spacing */

margin: 3.2rem auto;      /* Container vertical margin */
```

### Viewport-Based Spacing

The design system intelligently uses viewport units for fluid scaling:

```css
/* Responsive approach */
max-width: 72vw;     /* Hero title */
max-width: 65vw;     /* About text */

/* Horizontal spacing */
padding: 0 2vw;
```

---

## Component Styles

### Header

**Desktop:**
```css
position: fixed;
top: 0;
padding: 1.5rem 3rem;
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
z-index: 1000;
```

**Scrolled State:**
```css
background: rgba(255, 255, 255, 0.98);
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
```

**Logo:**
```css
font-size: 1.5rem;
font-weight: 400;
color: var(--color-black);
```

**Header Center Text:**
```css
font-size: 0.875rem;
font-weight: 300;
letter-spacing: 0.05em;
color: var(--bs-gray-700);
```

### Buttons

**Primary Button:**
```css
padding: 0.75rem 1.5rem;
background: var(--color-black);
color: var(--color-white);
border: none;
border-radius: 50px;
font-size: 0.875rem;
font-weight: 300;
cursor: pointer;
transition: transform 0.2s ease;
```

**Hover State:**
```css
transform: scale(1.05);
```

### Sticky Contact Button

```css
position: fixed;
bottom: 2rem;
right: 2rem;
z-index: 999;
background: var(--color-black);
color: var(--color-white);
padding: 0.75rem 1.5rem;
border-radius: 50px;
width: 320px;
overflow: hidden;
transition: all 0.6s ease;
```

**Light Theme Variant:**
```css
background: var(--color-white);
color: var(--color-black);
```

**Animated Text:**
```css
display: inline-flex;
gap: 0.5rem;
animation: scroll-text 4s linear infinite;
font-weight: 300;
font-size: 18px;
```

### Graphic Circles

```css
width: 165px;
height: 165px;
border-radius: 50%;
flex-shrink: 0;
```

**Variants with gradients:**
- Blue: `linear-gradient(135deg, #4040ff 0%, #6060ff 100%)`
- Pink: `linear-gradient(135deg, #ff6b88 0%, #ff8ba0 100%)`
- Black: `linear-gradient(135deg, #000000 0%, #333333 100%)`

### Service Items

```css
padding: 3rem 3rem 3rem 0;
border-top: 1px solid var(--bs-gray-300);
display: flex;
gap: 3rem;
align-items: flex-start;
justify-content: space-between;
```

**Last Item:**
```css
border-bottom: 1px solid var(--bs-gray-300);
```

**Service Number:**
```css
font-size: 2.25rem;
font-weight: 300;
max-width: 400px;
```

**Service Description:**
```css
font-size: 1.125rem;
line-height: 1.8;
color: var(--bs-gray-700);
max-width: 500px;
font-weight: 300;
```

### Story Cards

```css
width: 45%;
min-width: 420px;
max-width: 600px;
aspect-ratio: 1 / 0.7;
border-radius: 8px;
overflow: hidden;
position: relative;
cursor: pointer;
transition: transform 0.3s ease;
```

**Hover State:**
```css
transform: translateY(-10px);
```

**Typography Variant:**
```css
background: var(--color-white);
color: var(--color-black);
padding: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
```

**Content Area:**
```css
padding: 2rem;
position: absolute;
bottom: 0;
left: 0;
right: 0;
```

### Work Slides

```css
min-width: 70%;
display: flex;
flex-direction: column;
gap: 1rem;
flex-shrink: 0;
scroll-snap-align: start;
```

**Work Image:**
```css
width: 100%;
height: 691px;
background-size: cover;
background-position: center;
border-radius: 4px;
margin: 0.5rem;
```

**Work Title:**
```css
font-size: 1.5rem;
font-weight: 300;
margin-top: 0.5rem;
padding: 0 0.5rem;
```

### Hamburger Menu

```css
display: flex;
flex-direction: column;
gap: 5px;
cursor: pointer;
```

**Lines:**
```css
width: 25px;
height: 2px;
background: var(--color-black);
transition: all 0.3s ease;
```

---

## Shadows & Elevation

### Header Shadow (Scrolled)
```css
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
```
**Usage:** Subtle elevation for fixed header when scrolled

### Backdrop Filter
```css
backdrop-filter: blur(10px);
```
**Usage:** Glass morphism effect on header for depth

**Note:** The design uses minimal shadows, preferring clean edges and backdrop filters for a modern, flat aesthetic.

---

## Animations & Transitions

### Scroll Text Animation

```css
@keyframes scroll-text {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

animation: scroll-text 4s linear infinite;
```
**Usage:** Infinite horizontal text scrolling in sticky contact button

### Hover Transitions

**Scale Transform:**
```css
transition: transform 0.2s ease;
transform: scale(1.05);     /* Buttons */
transform: scale(1.2);      /* Arrows */
```

**Vertical Movement:**
```css
transition: transform 0.3s ease;
transform: translateY(-10px);  /* Story cards */
```

**Opacity:**
```css
transition: opacity 0.2s ease;
opacity: 0.7;
```

**Background:**
```css
transition: background 0.3s ease;
```

**All Properties:**
```css
transition: all 0.3s ease;   /* Hamburger lines */
transition: all 0.6s ease;   /* Sticky contact */
```

### Scroll Behavior

```css
scroll-behavior: smooth;
scroll-snap-type: x mandatory;
scroll-snap-align: start;
```

**Usage:** Smooth scrolling for internal links and horizontal carousels

---

## Border Radius

### Radius Scale

| Value | Usage |
|-------|-------|
| 4px | Work images |
| 8px | Story cards |
| 50px | Buttons (pill shape) |
| 50% | Circular elements (graphic circles) |

**Design Pattern:** The system uses minimal border radius values, favoring either sharp edges (4-8px) or fully rounded pills/circles.

---

## Opacity & Transparency

### Opacity Values

```css
opacity: 0.7;    /* Footer copyright, footer links on hover */
opacity: 0.8;    /* Category labels */
```

### RGBA Transparency

**Header Backgrounds:**
```css
rgba(255, 255, 255, 0.95)  /* Default header */
rgba(255, 255, 255, 0.98)  /* Scrolled header */
```

**Border Colors:**
```css
rgba(255, 255, 255, 0.2)   /* Footer top border on dark background */
```

**Shadows:**
```css
rgba(0, 0, 0, 0.05)        /* Subtle shadow */
```

---

## Layout Patterns

### Container System

**Max Width:**
```css
max-width: 1700px;
margin: 0 auto;
```
**Usage:** Most content containers use 1700px max-width for consistent content width

### Grid Layouts

**Services Grid:**
```css
display: grid;
grid-template-columns: 300px 1fr;
gap: 20rem;
```

**Works Grid:**
```css
display: grid;
grid-template-columns: 500px 1fr;
gap: 0;
```

**Clients Grid:**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);  /* Desktop */
grid-template-columns: repeat(2, 1fr);  /* Tablet */
grid-template-columns: 1fr;              /* Mobile */
gap: 3rem 2rem;
```

**Footer Grid:**
```css
display: grid;
grid-template-columns: auto auto 1fr;
gap: 3rem;
```

### Flexbox Patterns

**Header:**
```css
display: flex;
justify-content: space-between;
align-items: center;
```

**Horizontal Scrolling:**
```css
display: flex;
overflow-x: auto;
scroll-snap-type: x mandatory;
scroll-behavior: smooth;
scrollbar-width: none;
-ms-overflow-style: none;
```

---

## Responsive Breakpoints

### Desktop
Default styles (no media query)

### Tablet (1024px and below)
```css
@media (max-width: 1024px)
```
**Changes:**
- Header padding reduced to `1.5rem 2rem`
- Services/Works become single column
- Clients grid becomes 2 columns
- Story cards min-width: 375px

### Mobile (768px and below)
```css
@media (max-width: 768px)
```
**Changes:**
- Header padding: `1rem 1.5rem`
- Header center text hidden
- Hero title: 3rem
- Clients grid becomes 1 column
- Story cards: width 80%, min-width 320px
- Footer becomes single column
- Sticky contact button: smaller padding

---

## CSS Architecture

### Custom Properties Approach

This project uses CSS custom properties (CSS variables) instead of Tailwind CSS:

```css
:root {
  /* Color variables */
  --color-brand-blue: #4040ff;
  --bs-gray-700: #495057;

  /* Font variables */
  --bs-font-sans-serif: "Inter", system-ui, ...;
}
```

**Benefits:**
- Centralized theming
- Easy color/font changes
- Consistent values across components
- Better browser support for dynamic styling

### Class Naming Convention

**Pattern:** Semantic, component-based naming
```
.component-name
.component-name-element
.component-name.modifier
```

**Examples:**
- `.header`, `.header-logo`, `.header-right`
- `.story-card`, `.story-card.blue`, `.story-content`
- `.service-item`, `.service-number`, `.service-description`

### Reusable Utility Classes

```css
.dark-section {
  background: var(--color-black);
  color: var(--color-white);
}
```

**Usage:** Applied to multiple sections (clients, works, stories, contact, footer)

---

## Example Component Code

### Primary Button Component

```html
<button class="header-btn">Let's talk</button>
```

```css
.header-btn {
  padding: 0.75rem 1.5rem;
  background: var(--color-black);
  color: var(--color-white);
  border: none;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 300;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.header-btn:hover {
  transform: scale(1.05);
}
```

### Story Card Component

```html
<div class="story-card image blue">
  <div class="story-content">
    <div class="story-category">INSIGHTS</div>
    <h3 class="story-title">
      The Digital challenge of the industrial sector
    </h3>
  </div>
</div>
```

```css
.story-card {
  width: 45%;
  min-width: 420px;
  max-width: 600px;
  aspect-ratio: 1 / 0.7;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.story-card:hover {
  transform: translateY(-10px);
}

.story-card.blue {
  background: linear-gradient(135deg, #4040ff 0%, #6060ff 100%);
}

.story-content {
  padding: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.story-category {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.story-title {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
}
```

### Graphic Circle Component

```html
<div class="graphic-circle blue"></div>
```

```css
.graphic-circle {
  width: 165px;
  height: 165px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
}

.graphic-circle.blue {
  background: linear-gradient(135deg,
    var(--color-brand-blue) 0%,
    #6060ff 100%
  );
}
```

### Service Item Component

```html
<div class="service-item">
  <h3 class="service-number">01. Strategy and Consultancy.</h3>
  <p class="service-description">
    We help brands define their digital strategy, from
    conceptualization to implementation.
  </p>
</div>
```

```css
.service-item {
  padding: 3rem 3rem 3rem 0;
  border-top: 1px solid var(--bs-gray-300);
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;
}

.service-number {
  font-size: 2.25rem;
  font-weight: 300;
  margin-bottom: 0;
  max-width: 400px;
  flex-shrink: 0;
}

.service-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--bs-gray-700);
  max-width: 500px;
  font-weight: 300;
}
```

---

## Accessibility Considerations

### Text Rendering

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: geometricPrecision;
```
**Purpose:** Ensures crisp, consistent text rendering across browsers

### Scrollbar Hiding

```css
scrollbar-width: none;           /* Firefox */
-ms-overflow-style: none;        /* IE/Edge */

::-webkit-scrollbar {
  display: none;                 /* Chrome/Safari */
}
```
**Usage:** Creates clean horizontal scrolling experiences without visible scrollbars

### Touch Scrolling

```css
-webkit-overflow-scrolling: touch;
```
**Purpose:** Smooth momentum scrolling on iOS devices

### Semantic HTML

The project uses proper heading hierarchy (h1-h6) and semantic HTML5 elements:
- `<header>`, `<footer>`, `<section>`
- `<nav>` for navigation elements
- Proper heading levels for content structure

---

## Best Practices

### 1. **Consistent Spacing**
Use the 3.296vw pattern for section padding to maintain visual rhythm across all screen sizes.

### 2. **Typography Hierarchy**
Maintain clear visual hierarchy using font size, weight, and spacing. Favor font-weight 300 for body text.

### 3. **Color Contrast**
Ensure sufficient contrast between text and backgrounds:
- White text on black backgrounds
- Black text on white backgrounds
- Gray text (--bs-gray-700) for secondary information

### 4. **Smooth Interactions**
All interactive elements should have transitions:
```css
transition: transform 0.2s ease;  /* Buttons, small elements */
transition: transform 0.3s ease;  /* Cards, larger elements */
```

### 5. **Responsive Images**
```css
width: 100%;
height: auto;
object-fit: cover;
```

### 6. **Gradient Usage**
Use 135deg angle for all gradients to maintain consistent light direction.

### 7. **Mobile-First Considerations**
While desktop-first in implementation, ensure touch targets are at least 44x44px on mobile.

---

## Performance Optimizations

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```
**Purpose:** Preconnect to font provider for faster loading

### Font Display Strategy
```
display=swap
```
**Purpose:** Show fallback fonts while custom fonts load

### Scroll Performance
```css
scroll-behavior: smooth;
will-change: transform;  /* Use sparingly for animated elements */
```

### Box Sizing
```css
* {
  box-sizing: border-box;
}
```
**Purpose:** Predictable sizing calculations

---

## Implementation Checklist

When implementing new components, ensure:

- [ ] Uses CSS custom properties for colors and fonts
- [ ] Font weight is 300 for body, 400 for emphasis
- [ ] Hover states have transitions (0.2s-0.3s ease)
- [ ] Responsive breakpoints at 1024px and 768px
- [ ] Padding uses 3.296vw for sections or rem units for components
- [ ] Border radius follows scale: 4px, 8px, 50px, or 50%
- [ ] Text rendering optimization applied
- [ ] Semantic HTML5 elements used
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Proper heading hierarchy maintained
- [ ] Color contrast meets WCAG AA standards
- [ ] Smooth scroll behavior for user interactions

---

## Version History

**Version 1.0** - Initial style guide based on index.html analysis
- Documented all color variables and usage
- Complete typography system
- Spacing and layout patterns
- Component styles and examples
- Animation and transition specifications
- Responsive design patterns

---

## Additional Resources

### Font Resource
- **Google Fonts:** [Inter](https://fonts.google.com/specimen/Inter)
- **Weights Used:** 100, 200, 300, 400, 500

### Image Resources
- Unsplash for placeholder images
- Minimum resolution: 1600px width

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS Custom Properties support required
- Backdrop-filter support (progressive enhancement)

---

*This style guide is a living document and should be updated as the design system evolves.*
