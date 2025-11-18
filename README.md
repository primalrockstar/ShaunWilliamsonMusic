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