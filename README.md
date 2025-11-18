
# Shaun Williamson - Musician Website

A modern, responsive website showcasing the work and career of musician and composer Shaun Williamson.

## Features

### 🎵 About Page
The comprehensive about page (`about.html`) includes:

- **Hero Portrait Section**: Professional circular portrait with gradient background
- **Biography Section**: Detailed bio with professional typography
- **Career Milestones Timeline**: Interactive vertical timeline showcasing key career moments from 2010-2024
- **Album Highlights**: Gallery of featured albums with artwork and descriptions
- **Music Players**: Embedded Spotify and SoundCloud players for streaming music

### 🏠 Home Page
A clean landing page (`index.html`) with:
- Bold hero section
- Call-to-action button linking to the about page
- Responsive navigation

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with:
  - CSS Grid and Flexbox layouts
  - CSS Custom Properties (variables)
  - Smooth animations and transitions
  - Responsive design (mobile-first approach)
- **JavaScript**: Interactive features including:
  - Intersection Observer API for scroll animations
  - Smooth scrolling navigation
  - Dynamic element visibility

## File Structure

```
ShaunWilliamsonMusic/
├── index.html          # Home/landing page
├── about.html          # Comprehensive about page
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

### Local Development

1. Clone the repository
2. Open any HTML file in a web browser, or
3. Start a local server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server is installed)
npx http-server
```

4. Navigate to `http://localhost:8000`

## Customization

### Updating Content

**Portrait Image**: Replace the SVG placeholder in the `.hero-portrait` section of `about.html` with an actual image:
```html
<img src="path/to/portrait.jpg" alt="Shaun Williamson">
```

**Album Artwork**: Replace SVG placeholders in `.album-artwork` sections with actual album cover images.

**Music Players**: Update the iframe `src` attributes with actual Spotify/SoundCloud URLs:
- Spotify: Use the embed URL from the Spotify share menu
- SoundCloud: Use the embed code from SoundCloud

**Social Media Links**: Update the `href` attributes in the footer from `#` to actual social media profile URLs.

### Styling

All styles are managed through CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --accent-color: #3b82f6;       /* Accent highlights */
    /* ... more variables */
}
```

Modify these variables to quickly change the site's color scheme.

## Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (default)
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features to Add

- [ ] Actual portrait photograph
- [ ] Real album artwork images
- [ ] Live Spotify/SoundCloud integration
- [ ] Contact form
- [ ] Photo gallery
- [ ] Tour dates section
- [ ] Press/media section

## License

© 2024 Shaun Williamson. All rights reserved.
=======

# Shaun Williamson Music

A modern, animated music portfolio website built with Next.js, featuring Framer Motion animations and an OLED-friendly dark theme.

## Features

- 🎨 **OLED-Friendly Dark Mode**: Deep blue gradients (#000814 → #001d3d → #003566) optimized for OLED displays
- ✨ **Framer Motion Animations**: 
  - Fade-up animations on scroll
  - Staggered grid animations for album cards
  - Smooth section transitions
  - Interactive hover effects with physics-based springs
- 🎸 **Portfolio Sections**:
  - Hero with animated gradient text
  - About the artist
  - Discography grid
  - Upcoming tour dates
  - Contact section
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 💎 **Visual Effects**: Glass morphism, subtle reflections, gradient overlays

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/primalrockstar/ShaunWilliamsonMusic.git
cd ShaunWilliamsonMusic
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion 11.11.17
- **Linting**: ESLint

## Project Structure

```
ShaunWilliamsonMusic/
├── app/
│   ├── globals.css       # Global styles with OLED theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page with all sections
├── components/
│   ├── FadeUp.tsx        # Fade-up animation component
│   ├── StaggeredGrid.tsx # Staggered grid animation
│   └── SectionTransition.tsx # Section transition wrapper
├── public/               # Static assets
└── ...config files
```

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --background: #000814;
  --foreground: #e0e0e0;
  --primary: #1e3a8a;
  --accent: #3b82f6;
  /* ... */
}
```

### Animation Timing

Adjust animation parameters in component props:
- `delay`: Animation start delay
- `duration`: Animation duration
- `staggerDelay`: Delay between staggered items

## License

This project is open source and available under the MIT License.
=======
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


