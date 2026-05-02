# SF Interior - Component Guide

## UI Components

### Button Component
**Location**: `src/components/ui/Button.tsx`

```tsx
<Button 
  variant="primary" | "secondary"
  onClick={handleClick}
  icon={<IconComponent />}
>
  Button Text
</Button>
```

**Props**:
- `variant`: 'primary' (blue) or 'secondary' (outlined)
- `children`: Button text
- `icon`: Optional icon element
- All standard HTML button attributes supported

**Variants**:
- **Primary**: Blue background (#0057ff), white text
- **Secondary**: Transparent with border, dark text

---

## Layout Components

### Navbar Component
**Location**: `src/components/layout/Navbar.tsx`

Features:
- Fixed positioning with backdrop blur
- Responsive mobile menu
- Active link indicator
- CTA button
- Smooth animations

**Customization**:
- Edit `NAVIGATION_LINKS` in `src/constants/index.ts` to change menu items
- Modify colors in `src/index.css` for styling

---

### Footer Component
**Location**: `src/components/layout/Footer.tsx`

Features:
- Branding section
- Copyright text
- Social media links
- Responsive layout

**Customization**:
- Update social links in the component
- Change copyright year/text directly in component

---

## Feature Components

### Hero Section
**Location**: `src/features/hero/Hero.tsx`

**Props**: None (uses static content)

**Features**:
- Full-height background image
- Gradient overlay
- Large typography
- Slide-up animations

**Customization**:
```tsx
// Change background image
<img src="your-image-url" />

// Change heading text
<h1>Your Heading</h1>

// Change subtitle
<p>Your subtitle</p>
```

---

### Services Section
**Location**: `src/features/services/Services.tsx`

**Data Source**: `SERVICES` array in `src/constants/index.ts`

**Structure**:
```ts
{
  id: number,
  title: string,
  image: string (URL),
  alt: string
}
```

**Features**:
- 3-column grid
- Hover effects
- Image zoom animation
- Staggered animations

**Customization**:
- Add/remove services in constants
- Adjust grid columns: Change `md:grid-cols-3` to `md:grid-cols-2` or `md:grid-cols-4`
- Modify hover overlay opacity in component

---

### Portfolio Section
**Location**: `src/features/portfolio/Portfolio.tsx`

**Data Source**: `PORTFOLIO_PROJECTS` array in `src/constants/index.ts`

**Structure**:
```ts
{
  id: number,
  title: string,
  category: string,
  image: string (URL),
  alt: string,
  featured: boolean
}
```

**Features**:
- Bento-style layout
- Featured project highlight
- Navigation buttons
- Hover overlays
- Smooth transitions

**Customization**:
- Set `featured: true` on one project to make it the main feature
- Adjust grid layout in component
- Modify overlay colors and opacity

---

### Contact Section
**Location**: `src/features/contact/Contact.tsx`

**Features**:
- Centered CTA layout
- Single consultation button
- Responsive text

**Customization**:
```tsx
// Change heading
<h2>Your Heading</h2>

// Change description
<p>Your description</p>

// Handle button click
const handleConsultation = () => {
  // Add your logic here
  // e.g., open modal, navigate to form, etc.
}
```

---

## Styling System

### CSS Classes

**Container**:
```css
.container-main {
  /* Max width 1280px, centered, 80px padding */
}
```

**Typography**:
```css
.section-title {
  /* 48px Noto Serif, 600 weight */
}

.section-divider {
  /* 64px wide, 4px tall, blue background */
}
```

**Buttons**:
```css
.btn-primary {
  /* Blue background, white text, uppercase */
}

.btn-secondary {
  /* Bordered, dark text, uppercase */
}
```

**Animations**:
```css
.animate-fade-in {
  /* 0.6s fade in */
}

.animate-slide-up {
  /* 0.6s slide up from 20px below */
}

.animate-scale-in {
  /* 0.5s scale from 0.95 */
}

.animate-slide-in-left {
  /* 0.6s slide from left 20px */
}

.animate-slide-in-right {
  /* 0.6s slide from right 20px */
}
```

---

## Tailwind Utilities

### Custom Spacing
```
jarak-mikro: 4px
jarak-kecil: 16px
jarak-sedang: 32px
jarak-besar: 64px
jarak-ekstra: 128px
gutter-grid: 24px
margin-kontainer: 80px
satuan-dasar: 8px
```

### Custom Colors
All Material Design 3 colors available:
- `bg-primary` / `text-primary`
- `bg-primary-container` / `text-on-primary-container`
- `bg-secondary` / `text-secondary`
- `bg-surface` / `text-on-surface`
- `bg-error` / `text-error`
- And many more...

### Responsive Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## Animation Usage

### Adding Animations to Elements

```tsx
// Fade in
<div className="animate-fade-in">Content</div>

// Slide up with delay
<div 
  className="animate-slide-up"
  style={{ animationDelay: '0.2s' }}
>
  Content
</div>

// Scale in
<div className="animate-scale-in">Content</div>

// Slide in from left
<div className="animate-slide-in-left">Content</div>

// Slide in from right
<div className="animate-slide-in-right">Content</div>
```

### Staggered Animations

```tsx
{items.map((item, index) => (
  <div
    key={item.id}
    className="animate-slide-up"
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    {item.content}
  </div>
))}
```

---

## Constants Reference

### Navigation Links
**File**: `src/constants/index.ts`

```ts
NAVIGATION_LINKS = [
  { label: 'BERANDA', href: '#beranda' },
  { label: 'LAYANAN', href: '#layanan' },
  { label: 'PORTOFOLIO', href: '#portofolio' },
  { label: 'KONTAK', href: '#kontak' },
]
```

### Services
```ts
SERVICES = [
  {
    id: 1,
    title: 'Desain Residensial',
    image: 'url',
    alt: 'description'
  },
  // ...
]
```

### Portfolio Projects
```ts
PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    image: 'url',
    alt: 'description',
    featured: true
  },
  // ...
]
```

---

## Common Customizations

### Change Primary Color
1. Update `#0057ff` in `src/index.css`
2. Update in `tailwind.config.ts` if needed
3. Update in components that use hardcoded colors

### Add New Navigation Link
1. Add to `NAVIGATION_LINKS` in `src/constants/index.ts`
2. Create corresponding section with matching `id`

### Modify Section Spacing
1. Edit `mb-jarak-ekstra` (128px) to `mb-jarak-besar` (64px) etc.
2. Or use standard Tailwind: `mb-16`, `mb-32`, etc.

### Change Animation Speed
1. Edit keyframe duration in `src/index.css`
2. Change `0.6s` to `0.3s` for faster, `1s` for slower

### Adjust Responsive Breakpoints
1. Edit grid columns: `grid-cols-1 md:grid-cols-3`
2. Change `md:` to `sm:`, `lg:`, etc.

---

## Accessibility Features

- ✅ Semantic HTML (nav, main, section, footer)
- ✅ ARIA labels on buttons
- ✅ Alt text on all images
- ✅ Keyboard navigation support
- ✅ High contrast colors (WCAG AA compliant)
- ✅ Smooth scroll behavior

---

## Performance Tips

1. **Images**: Use optimized formats (WebP, AVIF)
2. **Lazy Loading**: Add `loading="lazy"` to images below fold
3. **Code Splitting**: React Router enables automatic code splitting
4. **CSS**: Tailwind purges unused styles in production
5. **Animations**: Use `transform` and `opacity` for GPU acceleration

---

## Troubleshooting

### Animations not working
- Check if animation class is applied
- Verify animation is defined in `src/index.css`
- Check browser DevTools for CSS errors

### Responsive layout broken
- Verify Tailwind breakpoint syntax: `md:`, `lg:`, etc.
- Check container max-width
- Test with browser DevTools responsive mode

### Colors not applying
- Verify color name in Tailwind config
- Check for conflicting inline styles
- Clear browser cache

### Build errors
- Run `npm install` to ensure dependencies
- Check TypeScript errors: `npm run build`
- Verify all imports are correct

---

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Material Design 3](https://m3.material.io)
