# Deployment Guide - Cartilage Healthcare Website

This guide explains how to deploy your Cartilage Healthcare website clone to preserve Google rankings and SEO.

## Pre-Deployment Checklist

- [ ] All pages accessible locally (`pnpm dev`)
- [ ] Navigation links working on all pages
- [ ] Company information updated
- [ ] Images replaced with your assets
- [ ] Contact information verified
- [ ] All forms configured for backend (if needed)

## Project Structure Verification

Verify you have this exact structure before deploying:

```
app/
├── about/page.tsx         ✓
├── careers/page.tsx       ✓
├── contact/page.tsx       ✓
├── products/page.tsx      ✓
├── services/page.tsx      ✓
├── layout.tsx             ✓
├── page.tsx               ✓
└── globals.css            ✓

components/
├── header.tsx             ✓
├── footer.tsx             ✓
└── [other components]     ✓

public/
├── hero-background.jpg    ✓
├── dialysis-machine.jpg   ✓
└── [other assets]         ✓
```

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

**Why Vercel?**
- Optimized for Next.js
- Automatic deployments from Git
- Preserves existing domain and Google rankings
- Zero-downtime deployments

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cartilage Healthcare website"
   git branch -M main
   git remote add origin https://github.com/yourusername/cartilagehealthcare.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Configure project settings:
     - Framework: Next.js
     - Build Command: `pnpm build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Configure Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain: `www.cartilagehealthcare.com`
   - Configure DNS records as shown
   - Wait for verification (up to 24 hours)

4. **Set Environment Variables (if needed)**
   - Settings → Environment Variables
   - Add any API keys or secrets
   - No variables needed for basic functionality

### Option 2: Deploy to Your Own Server

**For dedicated hosting:**

1. **Build locally**
   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

3. **Configure reverse proxy (Nginx example)**
   ```nginx
   server {
     listen 80;
     server_name www.cartilagehealthcare.com;
   
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

4. **Use process manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start "pnpm start" --name "cartilage-healthcare"
   pm2 startup
   pm2 save
   ```

5. **Set up SSL**
   ```bash
   # Using Let's Encrypt with Certbot
   sudo certbot certonly --nginx -d www.cartilagehealthcare.com
   ```

### Option 3: Deploy to AWS, Google Cloud, Azure

Use containerization:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## Post-Deployment Steps

### 1. Update Search Engine Registrations

**Google Search Console**
- Go to https://search.google.com/search-console
- Add property: `https://www.cartilagehealthcare.com`
- Submit sitemap: `/sitemap.xml`
- Monitor for crawl errors
- Monitor indexed pages

**Bing Webmaster Tools**
- Go to https://www.bing.com/webmasters
- Add website
- Submit sitemap

### 2. Verify SEO Setup

- [ ] Metadata tags present (in page source)
- [ ] Open Graph tags working
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Favicon displaying correctly

**Test SEO:**
```bash
# Check metadata
curl -I https://www.cartilagehealthcare.com

# View page source
# Look for meta tags in head section
```

### 3. Test All Pages

```bash
# Test each route
curl https://www.cartilagehealthcare.com/
curl https://www.cartilagehealthcare.com/about
curl https://www.cartilagehealthcare.com/services
curl https://www.cartilagehealthcare.com/products
curl https://www.cartilagehealthcare.com/careers
curl https://www.cartilagehealthcare.com/contact

# Should all return status 200
```

### 4. Set Up Analytics

**Google Analytics**
- Create property in Google Analytics 4
- Get measurement ID
- Add to `app/layout.tsx`

**Example integration:**
```tsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}></script>
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
`}} />
```

### 5. Monitor Deployment

```bash
# Check deployment logs
vercel logs  # If using Vercel

# Monitor application
# Set up error tracking (Sentry, Rollbar, etc.)
# Monitor performance metrics
```

## SEO Ranking Preservation

To preserve your existing Google rankings:

### 1. Keep the Same Domain
- Use `www.cartilagehealthcare.com` (same domain)
- Maintain same URL structure (`/about`, `/services`, etc.)

### 2. Set Up Redirects
If URLs have changed, add redirects in `next.config.ts`:

```typescript
async redirects() {
  return [
    {
      source: '/old-url',
      destination: '/new-url',
      permanent: true, // 301 redirect (important for SEO)
    },
  ]
}
```

### 3. Submit Sitemap
- Ensure `/sitemap.xml` is generated
- Submit to Google Search Console
- Update in `next-sitemap.config.js`:
  ```javascript
  module.exports = {
    siteUrl: 'https://www.cartilagehealthcare.com',
    generateRobotsTxt: true,
  }
  ```

### 4. Maintain Metadata
All pages have proper metadata for SEO:
- Title tags
- Meta descriptions
- Open Graph tags
- Schema markup (if needed)

## Troubleshooting

### Pages Not Displaying
- Check build logs: `vercel logs`
- Verify all components exist
- Check for TypeScript errors: `pnpm build`

### SEO Not Updating
- Resubmit sitemap in Google Search Console
- Wait for Google to recrawl (up to 7 days)
- Use Google's URL inspection tool

### Domain Issues
- Verify DNS configuration
- Check SSL certificate
- Test domain in different browsers

### Performance Issues
- Enable caching headers
- Use Next.js Image component
- Monitor Core Web Vitals in Search Console

## Continuous Deployment

Set up automatic deployments from Git:

**Vercel (Automatic)**
- Any push to main branch auto-deploys
- Preview deployments for pull requests

**GitHub Actions Alternative**
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: pnpm install
      - run: pnpm build
      - run: pnpm start &
```

## Rollback Procedure

**If deployment has issues:**

### Vercel
- Go to Deployments page
- Select previous successful deployment
- Click "Promote to Production"

### Manual Servers
```bash
# Keep backup of previous version
pm2 list
pm2 restart cartilage-healthcare  # Restart service
```

## Performance Monitoring

Monitor these metrics post-deployment:

- Page Load Time (target: <3 seconds)
- Core Web Vitals (Google's metrics)
- SEO Rankings (Check Search Console)
- Error Rate (target: <0.1%)
- Uptime (target: >99.9%)

## Maintenance

Schedule regular:
- Security updates (`pnpm update`)
- Content updates
- Google Search Console review
- Analytics review
- Page speed optimization

## Support & Next Steps

1. **Read STRUCTURE.md** - Full project structure guide
2. **Check README.md** - Component and feature documentation
3. **Monitor Search Console** - Track indexing progress
4. **Enable Analytics** - Understand user behavior
5. **Set up Email Forms** - Configure contact form backend

---

**Deployment successful?** 
Share your site: `https://www.cartilagehealthcare.com`
