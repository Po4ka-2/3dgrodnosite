# BC Architecture - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F5F5F5',
        'bg-dark': '#1A1A1A',
        'bg-dark-secondary': '#2A2A2A',
        'text-primary': '#1A1A1A',
        'text-secondary': '#666666',
        'text-muted': '#999999',
        'accent': '#E85A24',
        'border-light': '#E5E5E5',
        'border-dark': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'stats': ['64px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'service': ['32px', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      borderRadius: {
        'card': '24px',
        'card-lg': '32px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    }
  }
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)

| Component | Usage | Customization |
|-----------|-------|---------------|
| Button | CTAs, form submit | Custom variants: primary, secondary, ghost |
| Input | Form fields | Underline style variant |
| Card | Stats, projects | Custom radius 24px |
| Badge | Tags, labels | Pill shape, border style |
| Separator | List dividers | Dark variant |

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Navigation` | `scrolled: boolean` | Fixed nav with scroll state |
| `HeroSection` | - | Full-height hero with parallax |
| `StatsCard` | `value, label, variant, badge?` | Animated stat display |
| `AboutSection` | - | Image grid with text |
| `ServicesSection` | - | Interactive service list |
| `ServiceItem` | `name, number, image` | Individual service with hover |
| `PortfolioSection` | - | Projects grid and list |
| `ProjectCard` | `project: Project` | Featured project display |
| `ProjectListItem` | `project: Project` | List row for projects |
| `ContactSection` | - | Form + contact info |
| `AnimatedSection` | `children, delay?` | Scroll-triggered animation wrapper |
| `CountUp` | `end, duration?` | Animated number counter |

### Type Definitions

```typescript
interface Project {
  id: string;
  name: string;
  category: string;
  status: string;
  area: string;
  image: string;
  stats?: {
    area: string;
    apartments?: string;
    parking?: string;
  };
  description?: string;
}

interface Service {
  name: string;
  number: string;
  image: string;
}
```

## 4. Animation Implementation Plan

| Interaction Name | Tech Choice | Implementation Logic |
|------------------|-------------|---------------------|
| Page Load Fade | Framer Motion | `initial={{ opacity: 0 }}` `animate={{ opacity: 1 }}` duration 0.6s |
| Hero Text Reveal | Framer Motion | `staggerChildren: 0.1` on container, `y: 30 -> 0` + opacity on items |
| Nav Background | React State + CSS | `useScroll` hook, toggle `scrolled` class at 100px |
| Stats Cards Enter | Framer Motion | `whileInView`, `y: 50 -> 0`, stagger 0.15s |
| Count Up Numbers | Custom Hook | `useCountUp` with requestAnimationFrame |
| About Images | Framer Motion | `whileInView` with stagger, subtle parallax via `useScroll` |
| Service Hover Image | React State + Framer | Mouse position tracking, `AnimatePresence` for image |
| Service Text Highlight | CSS | Opacity transition on hover |
| Project Card Hover | Framer Motion | `whileHover={{ scale: 1.02 }}` |
| List Item Hover | CSS | Background color transition |
| Contact Form Focus | CSS | Border/underline animation |
| Scroll Reveal | Framer Motion | `whileInView` wrapper component |

### Animation Timing Reference

```typescript
const ANIMATION_CONFIG = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.6,
    reveal: 0.8,
  },
  ease: {
    default: [0.25, 0.1, 0.25, 1],
    bounce: [0.34, 1.56, 0.64, 1],
    smooth: [0.4, 0, 0.2, 1],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  }
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/
│       ├── hero-skyscrapers.jpg
│       ├── hero-video-thumb.jpg
│       ├── about-1.jpg
│       ├── about-2.jpg
│       ├── about-3.jpg
│       ├── about-4.jpg
│       ├── service-urban.jpg
│       ├── service-interiors.jpg
│       ├── service-architecture.jpg
│       ├── service-landscape.jpg
│       ├── service-retail.jpg
│       ├── service-arts.jpg
│       ├── service-graphics.jpg
│       ├── service-3d.jpg
│       ├── project-skyhall.jpg
│       ├── project-architecture.jpg
│       ├── project-business.jpg
│       └── contact-abstract.jpg
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── Navigation.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── CountUp.tsx
│   │   └── ServiceItem.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── ContactSection.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── animations.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "BC Architecture"

# Install animation library
cd /mnt/okcomputer/output/app && npm install framer-motion

# No additional packages needed - shadcn/ui components pre-installed
```

## 7. Implementation Order

1. **Setup**: Initialize project, configure Tailwind, install framer-motion
2. **Layout**: Create App.tsx structure with sections
3. **Navigation**: Build fixed nav with scroll detection
4. **Hero**: Full-height hero with animations
5. **Stats**: Animated stat cards with count-up
6. **About**: Image grid with scroll reveal
7. **Services**: Interactive service list with hover images
8. **Portfolio**: Project cards and list
9. **Contact**: Form and footer
10. **Polish**: Final animations, responsive testing

## 8. Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Single column, reduced font sizes, hamburger nav |
| Tablet | 640-1024px | 2-column grids, medium fonts |
| Desktop | > 1024px | Full layout as designed |

## 9. Performance Considerations

- Use `will-change` on animated elements
- Lazy load images below fold
- Use `transform` and `opacity` for animations
- Implement `prefers-reduced-motion` support
- Optimize images before adding to public folder
