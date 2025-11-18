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