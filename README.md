# Cartilage Healthcare Website Clone

A professional, responsive healthcare equipment specialist website built with Next.js 16, React 19, and Tailwind CSS. This is an exact replica of the Cartilage Healthcare website structure and design.

## Project Structure

```
app/
├── about/
│   └── page.tsx           # About Us page with mission, vision, and values
├── careers/
│   └── page.tsx           # Careers page with open positions
├── contact/
│   └── page.tsx           # Contact Us page with form and map
├── products/
│   └── page.tsx           # Products catalog page
├── services/
│   └── page.tsx           # Services page with detailed service offerings
├── layout.tsx             # Root layout with metadata
├── page.tsx               # Home page with hero and main sections
├── globals.css            # Global styles and theme configuration
├── favicon.ico            # Favicon for browser tab
└── layout.tsx             # Layout configuration

components/
├── header.tsx             # Navigation header with logo and menu
├── hero-section.tsx       # Main hero banner with CTAs
├── stats-section.tsx      # Statistics showcase section
├── services-grid.tsx      # 4-card services grid
├── products-section.tsx   # Product categories display
├── featured-product.tsx   # TORAY dialysis machine showcase
├── testimonials.tsx       # Customer testimonials
├── cta-section.tsx        # Call-to-action section
├── footer.tsx             # Footer with links and contact info
└── ui/                    # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── badge.tsx
    └── [other UI components]

lib/
└── utils.ts               # Utility functions

public/
├── hero-background.jpg    # Hero section background image
├── dialysis-machine.jpg   # Featured product image
└── favicon.ico            # Favicon file
```

## Website Pages

### Home Page (`/`)
The main landing page featuring:
- Hero section with company mission and CTA
- Statistics showcase (facilities, years experience, satisfaction rate)
- Services overview grid
- Products display
- Featured TORAY dialysis system
- Customer testimonials
- Call-to-action for consultation

### About Page (`/about`)
Company information including:
- Company mission and vision statements
- Core values (6 key values with descriptions)
- History and expertise
- Commitment to quality

### Services Page (`/services`)
Comprehensive service offerings:
- Equipment installation and setup
- Maintenance programs
- 24/7 technical support
- Staff training and certification
- Why choose services section

### Products Page (`/products`)
Product catalog featuring:
- Dialysis systems (TORAY focus)
- Monitoring equipment
- Respiratory support systems
- Diagnostic equipment
- Surgical systems
- Support equipment
- Featured TORAY section with CTAs

### Careers Page (`/careers`)
Recruitment and employment section:
- Company culture and values
- Why work with us benefits
- 4 featured open positions
- Application process information

### Contact Page (`/contact`)
Contact and communication hub:
- Phone numbers (Main and Support)
- Email addresses (General, Support, Sales)
- Headquarters address with business hours
- Contact form for inquiries
- Interactive map placeholder

## Features

### Navigation Structure
- **Header**: Sticky navigation with responsive menu links to all pages
- **Footer**: Company links, products, services, and contact information
- **Mobile Responsive**: Full mobile navigation support

### Design Features

- **Color Scheme**: Professional healthcare palette with primary blue, secondary teal, and neutral grays
- **Typography**: Clean sans-serif fonts for readability
- **Responsiveness**: Mobile-first design that adapts to all screen sizes
- **Interactive Elements**: Hover effects, smooth transitions, and animated backgrounds
- **Accessibility**: Semantic HTML, ARIA roles, and proper contrast ratios

## Technology Stack

- **Framework**: Next.js 16
- **React Version**: 19.2.4
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Geist (sans-serif)

## Installation & Setup

### Using shadcn CLI (Recommended)

```bash
npx shadcn-cli@latest init my-project
cd my-project
git clone <repo> .
pnpm install
pnpm dev
```

### Manual Setup

```bash
git clone <repo>
cd <project-name>
pnpm install
pnpm dev
```

The application will be available at `http://localhost:3000`

## Customization

### Update Company Information

Edit these files to customize the website:

1. **Header/Footer**: `components/header.tsx` and `components/footer.tsx`
   - Update company name, logo, and contact info

2. **Services**: `components/services-grid.tsx`
   - Modify service titles and descriptions

3. **Products**: `components/products-section.tsx`
   - Update product categories

4. **Contact Info**: `components/contact-section.tsx`
   - Update phone, email, and business hours

5. **Theme Colors**: `app/globals.css`
   - Modify CSS custom properties for brand colors

### Replace Images

Place your images in the `public/` directory:
- `hero-background.jpg` - Hero section background
- `dialysis-machine.jpg` - Featured product image

## Component Breakdown

### Header Component
- Sticky navigation with responsive mobile menu
- Logo with company branding
- Navigation links and CTA buttons

### Hero Section
- Full-height banner with gradient background
- Animated blob elements
- Dual action buttons (View Products, Contact Sales)

### Services Grid
- 4-column responsive grid
- Hover animations on cards
- Icon-based visual design

### Products Section
- 4-product category cards
- Badge system for product counts
- CTA for product catalog

### Featured Product
- Two-column layout with image
- Product overview card
- Features and support information grids
- Schedule demo CTA

### Testimonials
- 3-column grid of customer reviews
- Star ratings
- Professional details (name, role, hospital)

### Contact Section
- Multi-column contact information
- Business hours
- Quick contact form
- Map placeholder area

### Footer
- Company description
- Product links
- Company links
- Contact information
- Legal links (Privacy, Terms, Sitemap)

## Performance Optimizations

- Next.js 16 App Router for efficient routing
- Image optimization through Next.js Image component
- CSS custom properties for efficient theming
- Semantic HTML for better accessibility
- Responsive design reduces mobile payload

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Product catalog with filtering
- Blog/Resources section
- Case studies section
- Interactive product comparison
- Newsletter signup
- Search functionality
- Multi-language support
- Dark mode toggle

## License

This project is created for demonstration purposes.

## Support

For issues or questions about the template, please refer to the documentation or create an issue in the repository.
