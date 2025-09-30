# Uday Vallabhaneni - Portfolio

A modern, high-performance portfolio website built with Next.js 14, featuring smooth parallax animations, custom cursor effects, and interactive project showcases.

## ✨ Features

### 🎨 Visual Effects
- **MNTN-style parallax hero** with layered backgrounds and smooth scrolling
- **Custom cursor overlay** with soft glow effect (desktop only)
- **Pinned sections** with animated vertical stepper
- **Staggered reveal animations** powered by GSAP

### 🚀 Performance
- **60fps animations** using transform/opacity only
- **Smooth scrolling** powered by Lenis
- **Optimized bundle size** with code splitting
- **Responsive design** that works on all devices

### ♿ Accessibility
- **Prefers-reduced-motion** support for all animations
- **Keyboard navigation** friendly
- **Screen reader** compatible
- **High contrast** color schemes

### 🎯 Interactive Elements
- **Filterable project grid** (All/Web/AI/Design)
- **Hover tilt effects** on project cards
- **Smooth page transitions**

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP + ScrollTrigger
- **Smooth Scroll:** Lenis (@studio-freight/lenis)
- **Interactive Effects:** react-tilt

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page (MNTN-style hero)
│   ├── globals.css          # Global styles
│   └── works/
│       └── page.tsx         # Works page (filterable grid)
├── components/
│   ├── HeroMNTN/            # Layered parallax hero
│   │   ├── Hero.tsx
│   │   ├── Layers/
│   │   │   └── HeroLayers.tsx
│   │   └── SectionStepper.tsx
│   ├── CursorLight/
│   │   └── CursorOverlay.tsx
│   ├── Works/
│   │   ├── WorksHeader.tsx  # Pinned header with filters
│   │   ├── WorksGrid.tsx    # Responsive grid
│   │   └── WorkCard.tsx     # Individual cards
│   └── providers/
│       └── LenisProvider.tsx
├── hooks/
│   └── useLenis.ts
└── utils/
    └── SplitText.ts         # Text animation utility
```

## 🎯 Key Features Explained

### 1. MNTN-Style Parallax Hero
Inspired by the MNTN landing page design, featuring:
- Three layered backgrounds moving at different speeds
- Split-text heading animation on load
- Smooth scroll-triggered animations
- Vertical section stepper indicator

### 2. Custom Cursor Light
A sophisticated cursor overlay that:
- Follows mouse movement with smooth easing
- Enlarges over interactive elements
- Uses mix-blend-mode for a glowing effect
- Respects accessibility preferences
- Automatically hides on mobile devices

### 3. Works Page
Project showcase with:
- Pinned section header during initial scroll
- Client-side filtering by category
- Staggered GSAP reveal animations
- Hover tilt effects using react-tilt
- Responsive two-column grid layout

## 🎨 Design Principles

1. **Performance First**: All animations use transform/opacity for 60fps
2. **Accessibility**: Full support for reduced motion and keyboard navigation
3. **Responsive**: Mobile-first design that scales beautifully
4. **Clean Code**: TypeScript, modular components, clear separation of concerns

## 🚀 Performance Optimizations

- ✅ Transform/opacity animations only
- ✅ Will-change property used sparingly
- ✅ No layout thrashing
- ✅ Code splitting for faster initial load
- ✅ Optimized bundle size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🙏 Acknowledgments

Design inspiration from:
- [MNTN Landing Page](https://github.com/YT-PixelPerfectLabs/MNTN-Landing-Page-UI)
- [Drish Devfolio](https://github.com/Drish-xD/Devfolio)
- [Ayush Singh's Portfolio](https://github.com/ayush013/folio)

## 📞 Contact

Uday Vallabhaneni - [udayvallabhaneni.com](https://udayvallabhaneni.com)

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!
```

