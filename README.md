# Shaun Williamson Music - Design System

A modern, glassmorphism-based design system for a rock artist's website featuring deep blues, muted gold accents, and high-legibility typography.

## 🎨 Design Principles

### Color Palette

The design system is built on a foundation of deep blues and muted gold:

- **Primary Dark**: `#0A1124` - Deep navy background
- **Secondary Dark**: `#0F1A30` - Lighter navy for depth
- **Accent Gold**: `#C9A961` - Muted gold for highlights
- **Accent Gold Muted**: `#A68B4E` - Subdued gold variant
- **Accent Gold Dark**: `#8B7542` - Dark gold for gradients

### Glassmorphism Effects

All cards and UI elements feature glassmorphism with:
- **Backdrop blur**: 10px blur for frosted glass effect
- **Soft inner glow**: Subtle gold glow on card interiors
- **Semi-transparent backgrounds**: RGBA backgrounds for depth
- **Border accents**: Subtle gold borders that glow on hover

### Typography

Bold, modern, high-legibility fonts optimized for rock music aesthetic:

- **Display Font**: Impact/Franklin Gothic Bold - For headlines
- **Body Font**: System font stack - For maximum legibility
- **Font Weights**: Bold (700) and Black (900) for impact
- **Letter Spacing**: Tight for headlines, normal for body

## 🧩 Reusable Components

### Hero Component

Full-screen hero section with centered content, radial gradient background effect, and animated entrance.

**HTML Structure:**
```html
<section class="hero">
    <div class="hero-content">
        <h1 class="hero-title">Artist Name</h1>
        <p class="hero-subtitle">Description</p>
        <div class="hero-buttons">
            <button class="btn btn-primary">Primary Action</button>
            <button class="btn btn-secondary">Secondary Action</button>
        </div>
    </div>
</section>
```

**Features:**
- Radial gradient background glow
- Fade-in-up animations
- Responsive height (80vh desktop, 60vh mobile)

### Card Component

Glassmorphism cards with backdrop blur, soft inner glow, and interactive hover effects.

**HTML Structure:**
```html
<div class="card">
    <p>Card content goes here</p>
</div>
```

**Features:**
- Backdrop filter blur (10px)
- Inner soft glow effect
- Animated lift on hover
- Gold border accent on hover

### Button Component

Modern buttons with two variants: primary (filled gold) and secondary (glass outline).

**HTML Structure:**
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
```

**Features:**
- Ripple effect on hover
- Lift animation
- Gold gradient (primary) or glass background (secondary)
- Responsive full-width on mobile

### Section Header Component

Centered section headers with underline accent.

**HTML Structure:**
```html
<div class="section-header">
    <h2>Section Title</h2>
    <div class="section-header-line"></div>
</div>
```

**Features:**
- Gold gradient underline
- Text glow effect
- Centered alignment

### Timeline Component

Vertical timeline with alternating left/right content placement.

**HTML Structure:**
```html
<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content card">
            <h3 class="timeline-year">2024</h3>
            <p>Timeline event description</p>
        </div>
    </div>
</div>
```

**Features:**
- Vertical gold line connector
- Glowing circular markers
- Alternating left/right layout (desktop)
- Single column on mobile
- Uses card component for content

### Gallery Grid Component

Responsive grid layout for images/media with glassmorphism overlays.

**HTML Structure:**
```html
<div class="gallery-grid">
    <div class="gallery-item card">
        <div class="gallery-placeholder">
            <span>Label</span>
        </div>
    </div>
</div>
```

**Features:**
- Auto-fit responsive grid (min 300px)
- Square aspect ratio (1:1)
- Hover glow effect
- Glassmorphism overlay

## 📁 File Structure

```
ShaunWilliamsonMusic/
├── index.html              # Main HTML file with component examples
├── styles/
│   ├── global.css         # Design system foundation & variables
│   └── components.css     # All reusable components
└── README.md              # This file
```

## 🎯 CSS Variables

All design tokens are available as CSS variables for easy customization:

```css
/* Colors */
--color-primary: #0A1124;
--color-secondary: #0F1A30;
--color-accent-gold: #C9A961;

/* Glassmorphism */
--glass-bg: rgba(15, 26, 48, 0.6);
--glass-border: rgba(201, 169, 97, 0.2);
--glass-glow: rgba(201, 169, 97, 0.15);

/* Typography */
--font-size-base: 1rem;
--font-weight-bold: 700;

/* Spacing */
--spacing-md: 1rem;
--spacing-lg: 1.5rem;

/* Effects */
--glow-gold: 0 0 20px var(--glass-glow);
--transition-base: 250ms ease-in-out;
```

## 📱 Responsive Design

The design system includes three breakpoints:

- **Desktop**: > 768px - Full layout with all features
- **Tablet**: ≤ 768px - Adjusted typography, stacked timeline
- **Mobile**: ≤ 480px - Single column, optimized touch targets

## ♿ Accessibility

- High contrast text (WCAG AA compliant)
- Focus-visible indicators on all interactive elements
- Reduced motion support for users with motion sensitivity
- Semantic HTML structure
- Keyboard navigation support

## 🚀 Usage

Simply open `index.html` in a web browser to view the design system in action. No build process required!

To use in your project:

1. Link the CSS files in your HTML:
```html
<link rel="stylesheet" href="styles/global.css">
<link rel="stylesheet" href="styles/components.css">
```

2. Use the component classes as documented above

## 🎸 Customization

To customize the design system, edit the CSS variables in `styles/global.css`:

```css
:root {
    --color-accent-gold: #YOUR_COLOR;
    --font-size-6xl: YOUR_SIZE;
    /* ... other variables */
}
```

## 📄 License

This design system is created for Shaun Williamson Music.