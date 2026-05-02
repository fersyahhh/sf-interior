# SF Interior - Getting Started Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or bun package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5174/
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview

# Output files in dist/ folder
```

---

## 📋 Project Overview

**SF Interior** is a modern, responsive website for an interior design company built with:
- React 19 + TypeScript
- Tailwind CSS 4
- Vite
- Feature-based architecture

The website showcases:
- **Hero Section** - Eye-catching introduction
- **Services** - 3 main service offerings
- **Portfolio** - Bento-style project gallery
- **Contact** - Call-to-action section
- **Navigation** - Responsive navbar with mobile menu
- **Footer** - Branding and links

---

## 📁 Project Structure

```
sf-interior-project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Atomic UI elements (Button)
│   │   └── layout/         # Layout components (Navbar, Footer)
│   ├── features/           # Feature modules
│   │   ├── hero/           # Hero section
│   │   ├── services/       # Services section
│   │   ├── portfolio/      # Portfolio section
│   │   └── contact/        # Contact section
│   ├── constants/          # App constants & data
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── dist/                   # Production build (generated)
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

---

## 🎨 Design System

### Colors
- **Primary Blue**: #0057ff
- **Light Background**: #f9f9f9
- **Dark Text**: #1a1c1c
- **Gray**: #5c5f60
- **Borders**: #737688

### Typography
- **Headings**: Noto Serif (64px, 48px, 24px)
- **Body**: Inter (16px)
- **Labels**: Inter (14px, uppercase)

### Spacing
- Micro: 4px
- Small: 16px
- Medium: 32px
- Large: 64px
- Extra: 128px

---

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start dev server on http://localhost:5174/

# Production
npm run build            # Build for production
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
```

---

## 📝 Updating Content

### Add a New Service

Edit `src/constants/index.ts`:

```ts
export const SERVICES = [
  // ... existing services
  {
    id: 4,
    title: 'Your Service Name',
    image: 'https://your-image-url.jpg',
    alt: 'Description for accessibility'
  }
]
```

### Add a Portfolio Project

Edit `src/constants/index.ts`:

```ts
export const PORTFOLIO_PROJECTS = [
  // ... existing projects
  {
    id: 4,
    title: 'Project Name',
    category: 'Category Name',
    image: 'https://your-image-url.jpg',
    alt: 'Description for accessibility',
    featured: false  // Set to true to make it the main feature
  }
]
```

### Update Navigation Links

Edit `src/constants/index.ts`:

```ts
export const NAVIGATION_LINKS = [
  { label: 'BERANDA', href: '#beranda' },
  { label: 'YOUR LINK', href: '#your-section' },
  // ...
]
```

---

## 🎯 Key Features

### ✨ Animations
- Fade in effects
- Slide up transitions
- Scale animations
- Staggered sequences
- Smooth hover effects

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Optimized layouts for all screen sizes
- Touch-friendly buttons

### ♿ Accessibility
- Semantic HTML
- ARIA labels
- Alt text on images
- Keyboard navigation
- High contrast colors

### ⚡ Performance
- Optimized build size (~65KB gzipped)
- GPU-accelerated animations
- Lazy loading ready
- Production-optimized CSS

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build first
npm run build

# Deploy dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
# Update vite.config.ts with base path
# Then build and push dist/ to gh-pages branch
```

---

## 🔍 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

---

## 📚 Documentation

- **IMPLEMENTATION_SUMMARY.md** - Detailed implementation overview
- **COMPONENT_GUIDE.md** - Component API and customization guide
- **ARCHITECTURE.md** - Project architecture standards

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5174
lsof -ti:5174 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling Issues
```bash
# Rebuild Tailwind CSS
npm run build

# Or restart dev server
npm run dev
```

---

## 📞 Support & Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Check for security vulnerabilities: `npm audit`
- Review TypeScript errors: `npm run build`

### Performance Monitoring
- Use Lighthouse in Chrome DevTools
- Monitor Core Web Vitals
- Test on real devices

### SEO Optimization
- Add meta tags in `index.html`
- Optimize images
- Add structured data
- Improve Core Web Vitals

---

## 🚀 Next Steps

1. **Customize Content**
   - Update services and portfolio
   - Change colors and fonts
   - Add your branding

2. **Add Functionality**
   - Integrate contact form backend
   - Add dark mode toggle
   - Implement image gallery
   - Add blog section

3. **Deploy**
   - Choose hosting platform
   - Set up domain
   - Configure analytics
   - Enable monitoring

4. **Maintain**
   - Keep dependencies updated
   - Monitor performance
   - Gather user feedback
   - Iterate and improve

---

## 📄 License

This project is created for SF Interior. All rights reserved.

---

## 🎉 You're All Set!

The website is ready to use. Start the dev server with `npm run dev` and begin customizing!

For detailed component information, see **COMPONENT_GUIDE.md**
For implementation details, see **IMPLEMENTATION_SUMMARY.md**
