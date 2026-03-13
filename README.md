# Yenturi Investment Consulting Website

Professional institutional website for Yenturi Investment Consulting, a leading financial advisory and investment consulting firm specializing in the Asia-Pacific region. Designed with Venturi Effect physics principles for strategic capital acceleration across Asia-Pacific.

## 🌟 Features

- **Bilingual Support**: Full English/Simplified Chinese support with URL-based routing (`/en/` and `/zh/`)
- **Responsive Design**: Mobile-first design optimized for all screen sizes (320px, 768px, 1280px+)
- **Professional Aesthetic**: Deep navy and gold color scheme with premium institutional design
- **SEO Optimized**: Meta tags, Open Graph, XML sitemap, structured data, and robots.txt
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Next.js 14 with optimized builds and edge caching
- **Analytics Ready**: Placeholder integration for Google Analytics and Baidu Analytics

## 📋 Project Structure

```
yen-website/
├── app/
│   ├── [lang]/                          # Dynamic locale routes
│   │   ├── layout.tsx                   # Locale-specific layout
│   │   ├── page.tsx                     # Home page
│   │   ├── about/
│   │   │   └── page.tsx                # About Us page
│   │   ├── services/
│   │   │   ├── page.tsx                # Services overview
│   │   │   └── [service]/
│   │   │       └── page.tsx            # Individual service detail pages
│   │   ├── contact/
│   │   │   └── page.tsx                # Contact page with form
│   │   ├── privacy/
│   │   │   └── page.tsx                # Privacy policy
│   │   └── terms/
│   │       └── page.tsx                # Terms of service
│   ├── globals.css                      # Global styles
│   ├── layout.tsx                       # Root layout
│   ├── robots.ts                        # Robots metadata
│   └── sitemap.ts                       # Sitemap generation
├── components/
│   ├── Header.tsx                       # Navigation header with language toggle
│   ├── Footer.tsx                       # Footer with contact info
│   └── ContactForm.tsx                  # Contact form component
├── lib/
│   └── locales.ts                       # i18n translations and utilities
├── public/
│   ├── robots.txt                       # SEO robots file
│   ├── favicon.ico                      # Favicon
│   └── apple-touch-icon.png            # Apple touch icon
├── middleware.ts                        # Locale detection middleware
├── next.config.js                       # Next.js configuration
├── tailwind.config.ts                   # Tailwind CSS configuration
├── tsconfig.json                        # TypeScript configuration
├── package.json                         # Project dependencies
├── postcss.config.js                    # PostCSS configuration
└── README.md                            # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ginsualimig/yen-website.git
   cd yen-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site. The app will auto-redirect to `/en/` or `/zh/` based on browser language.

### Build for Production

```bash
npm run build
npm start
```

### Type checking
```bash
npm run type-check
```

## 🌍 Bilingual Routing

The website automatically detects the user's language preference and routes them to the appropriate version:

- **English**: `/en/*`
- **Simplified Chinese**: `/zh/*`

Users can toggle between languages using the language switcher in the header navigation.

### Key Pages by Locale

| Page | English | Chinese |
|------|---------|---------|
| Home | `/en` | `/zh` |
| About | `/en/about` | `/zh/about` |
| Services | `/en/services` | `/zh/services` |
| M&A Advisory | `/en/services/mna` | `/zh/services/mna` |
| Business Improvement | `/en/services/business-improvement` | `/zh/services/business-improvement` |
| Roll-Up Strategy | `/en/services/rollup-strategy` | `/zh/services/rollup-strategy` |
| Direct Investment | `/en/services/direct-investment` | `/zh/services/direct-investment` |
| Business Management | `/en/services/business-management` | `/zh/services/business-management` |
| Research & Reports | `/en/services/research-reports` | `/zh/services/research-reports` |
| Contact | `/en/contact` | `/zh/contact` |
| Privacy Policy | `/en/privacy` | `/zh/privacy` |
| Terms of Service | `/en/terms` | `/zh/terms` |

## 🎨 Design System

### Color Palette
- **Primary Navy**: `#0A1428` - Deep institutional navy
- **Light Navy**: `#1A2844` - Secondary navy shade
- **Gold Accent**: `#D4AF37` - Premium gold/brass
- **Light Gold**: `#E8C547` - Lighter gold for hover states
- **Gray Dark**: `#2C3E50` - Text color
- **Gray Light**: `#ECF0F1` - Light backgrounds
- **Background**: `#F8FAFB` - Soft background

### Typography
- **English**: Inter, Work Sans (clean modern sans-serif)
- **Chinese**: Noto Sans SC (proper CJK font)
- Google Fonts integration for performance

### Responsive Breakpoints
- Mobile: 320px (small), 480px (medium)
- Tablet: 768px
- Desktop: 1024px, 1280px, 1536px

## 📝 Content Management

### Translation Files

All translatable content is centralized in `/lib/locales.ts`. To add or update translations:

1. Open `lib/locales.ts`
2. Update the `translations` object for the relevant language
3. Use the `getTranslation(locale, key)` function in components

Example:
```typescript
const t = (key: string) => getTranslation(locale, key);
const title = t('services.mna.title');
```

### Service Pages

Service detail pages are dynamically generated from the data in `lib/locales.ts`. To add a new service:

1. Add translation keys in `lib/locales.ts`
2. Add service ID to the `serviceIds` array in `app/[lang]/services/[service]/page.tsx`
3. Add service details to the `serviceDetails` object in the same file

## 📧 Contact Form

The contact form in `/app/[lang]/contact/page.tsx` uses the `ContactForm` component. Currently, form submissions are logged to the console. To enable email notifications:

1. Connect to an email service (e.g., SendGrid, AWS SES, Resend)
2. Create an API route in `/app/api/contact`
3. Update `components/ContactForm.tsx` to call the API

Example implementation:
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    await resend.emails.send({
      from: 'Yenturi Contact <contact@yenturi.com>',
      to: 'inquiries@yenturi.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `<p>Name: ${data.name}</p>...`
    });
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
```

## 🔍 SEO

### Meta Tags
- Standard meta tags for description, viewport, theme color
- Open Graph tags for social media sharing
- Language alternates for bilingual SEO

### Sitemap
- Auto-generated XML sitemap at `/sitemap.xml`
- Includes all pages and service detail pages
- Proper priority and change frequency settings

### Robots.txt
- Configured at `/public/robots.txt` and `/app/robots.ts`
- Allows indexing of all public pages

### Structured Data
Ready to integrate JSON-LD schemas:
```typescript
// Add to layout.tsx or pages
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Yenturi Investment Consulting",
      "url": "https://yenturi.com",
      ...
    })
  }}
/>
```

## 📊 Analytics

### Google Analytics
Placeholder code is ready in `components/Footer.tsx`. To enable:

1. Create a Google Analytics account
2. Get your Measurement ID
3. Uncomment and replace `GA_MEASUREMENT_ID` in the footer

### Baidu Analytics
Placeholder code is ready for China-specific tracking. To enable:

1. Create a Baidu Analytics account
2. Replace `BAIDU_TRACK_ID` in the footer

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Create Vercel account**: https://vercel.com

2. **Connect GitHub repository**:
   - Import the GitHub repo in Vercel dashboard
   - Auto-detection of Next.js framework
   - Automatic environment setup

3. **Deploy**:
   ```bash
   git push origin main
   ```
   - Vercel automatically builds and deploys on push to main

4. **Custom domain** (optional):
   - Add your domain in Vercel project settings
   - Update DNS records as instructed

### China-Accessible Hosting

For optimal performance in China:

1. **Aliyun Deployment**:
   - Use Aliyun App Engine or Aliyun Container Service
   - Serves from Shanghai or Beijing nodes
   - ICP filing may be required (handled separately)

2. **Tencent Cloud**:
   - Alternative CDN with strong presence in China

3. **Configuration**:
   - Update `vercel.json` to include Singapore and Tokyo regions
   - Use Cloudflare or Alibaba CDN for edge caching

## 🔐 Environment Variables

Create a `.env.local` file for local development (never commit to git):

```
NEXT_PUBLIC_SITE_URL=https://yenturi.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_BAIDU_ID=your_baidu_analytics_id
```

For Vercel deployment, add these in the project settings.

## 🛠️ Development Tools

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npm run type-check
```

### Building
```bash
npm run build
```

## 📱 Responsive Testing

Test on multiple devices:

- **Mobile**: iPhone 12/13 (390px), Samsung Galaxy S21 (360px)
- **Tablet**: iPad (768px), iPad Pro (1024px)
- **Desktop**: 1280px, 1440px, 1920px+

Use Chrome DevTools for responsive design testing.

## ♿ Accessibility

The site meets WCAG 2.1 AA standards:

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Color contrast ratios ≥ 4.5:1
- Keyboard navigation support
- Focus indicators on interactive elements
- Skip to main content link

### Testing Tools
- WAVE: https://wave.webaim.org
- Lighthouse: Built into Chrome DevTools
- Axe DevTools: Browser extension

## 🔄 Git Workflow

All commits should be signed with GPG for security:

```bash
git config --global user.email "pengshanhui@gmail.com"
git config --global user.name "Pengshan Hui"
git config --global commit.gpgsign true

# Make changes
git add .
git commit -m "feat: add new feature" -S  # -S flag for signing
git push origin main
```

## 📚 Phase 2 Roadmap

Planned features for future releases:

- [ ] Team profiles page with staff bios and photos
- [ ] Blog/Insights section with articles and thought leadership
- [ ] Case studies showcase with detailed project examples
- [ ] ICP filing status indicator for China compliance
- [ ] Client testimonials and success stories
- [ ] Event/webinar registration
- [ ] Advanced search functionality
- [ ] Newsletter subscription
- [ ] Multi-language PDF downloads

## 🆘 Support & Troubleshooting

### Common Issues

**Issue**: Page not found when navigating
- **Solution**: Ensure the locale prefix (`/en/` or `/zh/`) is in the URL

**Issue**: Images not loading
- **Solution**: Use placeholder images from `via.placeholder.com` during development

**Issue**: Deployment fails
- **Solution**: Check Vercel logs, ensure all environment variables are set

### Getting Help

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Support: https://vercel.com/support

## 📄 License

MIT License - feel free to use as needed for Yenturi Investment Consulting.

## 👤 Contact

For questions about this website:
- Email: contact@yenturi.com
- Phone: +86 20 XXXX XXXX
- Office: Yuhai Tianhe City Tower, 208 Tianhe Road, Guangzhou, China

---

**Last Updated**: December 2024
**Status**: Production Ready
