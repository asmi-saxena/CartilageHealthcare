# Project Structure - Exact Match to Cartilage Healthcare

This document outlines the complete project structure that matches the deployed Cartilage Healthcare website.

## Directory Structure

```
cartilage-healthcare/
├── app/
│   ├── about/
│   │   └── page.tsx                    # /about route
│   ├── careers/
│   │   └── page.tsx                    # /careers route
│   ├── contact/
│   │   └── page.tsx                    # /contact route
│   ├── products/
│   │   └── page.tsx                    # /products route
│   ├── services/
│   │   └── page.tsx                    # /services route
│   ├── favicon.ico                     # Website favicon
│   ├── globals.css                     # Global styles and theme
│   ├── layout.tsx                      # Root layout with metadata
│   └── page.tsx                        # / home page
│
├── components/
│   ├── ui/                             # shadcn/ui components (65+ components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── [60+ other UI components]
│   ├── contact-section.tsx             # Reusable contact section
│   ├── cta-section.tsx                 # Call-to-action section
│   ├── featured-product.tsx            # Featured TORAY product
│   ├── footer.tsx                      # Footer component
│   ├── header.tsx                      # Navigation header
│   ├── hero-section.tsx                # Hero banner
│   ├── products-section.tsx            # Products showcase
│   ├── services-grid.tsx               # Services grid
│   ├── stats-section.tsx               # Statistics display
│   ├── testimonials.tsx                # Customer testimonials
│   └── theme-provider.tsx              # Theme context provider
│
├── lib/
│   └── utils.ts                        # Utility functions
│
├── public/
│   ├── favicon.ico                     # Favicon
│   ├── hero-background.jpg             # Hero section image
│   ├── dialysis-machine.jpg            # Product showcase image
│   ├── robots.txt                      # SEO robots file
│   └── sitemap.xml                     # XML sitemap for SEO
│
├── .eslintrc.json                      # ESLint configuration
├── components.json                     # shadcn/ui configuration
├── eslint.config.mjs                   # ESLint config (new format)
├── next-env.d.ts                       # Next.js type definitions
├── next-sitemap.config.js              # Sitemap generation config
├── next.config.ts                      # Next.js configuration
├── package-lock.json                   # Dependency lock file
├── package.json                        # Project dependencies
├── postcss.config.mjs                  # PostCSS configuration
├── tailwind.config.ts                  # Tailwind CSS configuration
├── tsconfig.json                       # TypeScript configuration
└── README.md                           # Project documentation
```

## Route Structure

The application uses Next.js App Router with the following routes:

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page with hero, services, products, testimonials |
| `/about` | `app/about/page.tsx` | Company information, mission, vision, values |
| `/services` | `app/services/page.tsx` | Service offerings and support options |
| `/products` | `app/products/page.tsx` | Product catalog with detailed information |
| `/careers` | `app/careers/page.tsx` | Jobs and employment opportunities |
| `/contact` | `app/contact/page.tsx` | Contact information, form, and map |

## Page Structure

Each page follows this pattern:

```tsx
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Page Title - Cartilage Healthcare',
  description: 'Page description for SEO',
}

export default function PageName() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Page-specific content */}
      <Footer />
    </main>
  )
}
```

## Component Tree

```
Root (app/layout.tsx)
├── Header (components/header.tsx)
│   └── Navigation links: /, /about, /careers, /contact, /products, /services
│
├── Page Content (app/page.tsx or route-specific)
│   ├── HeroSection
│   ├── StatsSection
│   ├── ServicesGrid
│   ├── ProductsSection
│   ├── FeaturedProduct
│   ├── Testimonials
│   ├── CTASection
│   └── [Route-specific content]
│
└── Footer (components/footer.tsx)
    └── Links: /about, /careers, /contact, /services, /products, /
```

## Configuration Files

### next.config.ts
- React strict mode enabled
- Compression enabled
- Production source maps disabled
- Font optimization enabled

### tailwind.config.ts
- Tailwind CSS 4 configuration
- Custom theme tokens for healthcare branding
- Responsive breakpoints

### tsconfig.json
- TypeScript strict mode
- Path aliases (`@/components`, `@/lib`)
- JSX support with React

### next-sitemap.config.js
- Sitemap generation for SEO
- Site URL: https://www.cartilagehealthcare.com
- Robot.txt auto-generation

## Environment Setup

No environment variables required for basic functionality.

For deployment:
1. Update sitemap base URL in `next-sitemap.config.js`
2. Update metadata in `app/layout.tsx`
3. Replace images in `public/` directory

## Build & Deploy

```bash
# Install dependencies
pnpm install

# Development
pnpm dev        # http://localhost:3000

# Production build
pnpm build
pnpm start

# Deploy to Vercel
vercel deploy
```

## URL Mapping for SEO Preservation

When deploying to the same domain, all existing URLs remain intact:

- `https://www.cartilagehealthcare.com/` → Home
- `https://www.cartilagehealthcare.com/about` → About
- `https://www.cartilagehealthcare.com/services` → Services
- `https://www.cartilagehealthcare.com/products` → Products
- `https://www.cartilagehealthcare.com/careers` → Careers
- `https://www.cartilagehealthcare.com/contact` → Contact

This structure ensures Google rankings are preserved when deploying to the same domain.

## Next.js Features Utilized

- **App Router**: Modern file-based routing
- **Metadata API**: SEO optimization
- **Image Optimization**: Automatic image optimization
- **Server Components**: By default for performance
- **CSS Modules**: For component styling
- **Tailwind CSS**: Utility-first styling

## Deployment Checklist

- [ ] Update company contact information
- [ ] Replace images with company branding
- [ ] Update metadata titles and descriptions
- [ ] Configure sitemap URL
- [ ] Update social media links
- [ ] Configure analytics
- [ ] Set up email forms backend
- [ ] Deploy to Vercel or hosting provider
- [ ] Test all routes working correctly
- [ ] Verify SEO metadata
- [ ] Monitor 301 redirects (if applicable)
