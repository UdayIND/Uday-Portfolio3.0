# Deployment Guide - Uday Portfolio 3.0

## 📋 Quick Start Checklist

- [x] Local development server running
- [x] All code committed to Git
- [ ] Repository pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Custom domain configured (optional)

---

## 🐙 GitHub Setup

### Option 1: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI if not already installed
brew install gh  # macOS
# or visit: https://cli.github.com/

# Authenticate
gh auth login

# Create repository and push
cd "/Users/udayhome/PORTFOLIO 3.0/Uday-Portfolio3.0"
gh repo create uday-portfolio --public --source=. --remote=origin --push
```

### Option 2: Manual Setup via GitHub.com
1. Go to https://github.com/new
2. Create a new repository named `uday-portfolio`
3. Make it **Public**
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

Then run these commands:
```bash
cd "/Users/udayhome/PORTFOLIO 3.0/Uday-Portfolio3.0"
git remote add origin https://github.com/YOUR_USERNAME/uday-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🚀 Vercel Deployment (Recommended)

### Why Vercel?
- ✅ Zero-config deployment for Next.js
- ✅ Automatic HTTPS and CDN
- ✅ Edge functions support
- ✅ Free hobby tier
- ✅ Instant deployments on every push

### Steps:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd "/Users/udayhome/PORTFOLIO 3.0/Uday-Portfolio3.0"
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **uday-portfolio**
   - In which directory is your code located? **./**
   - Want to override settings? **N**

4. **Production Deployment:**
   ```bash
   vercel --prod
   ```

5. **Connect to GitHub (for automatic deployments):**
   - Go to https://vercel.com/dashboard
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js and configure everything

### Environment Variables (if needed):
```bash
# Add via CLI
vercel env add API_KEY

# Or via dashboard:
# Settings → Environment Variables
```

---

## 🌐 Alternative: Netlify Deployment

### Steps:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=.next
   ```

4. **Or connect via GitHub:**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

---

## 🔧 Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain: `udayvallabhaneni.com`
3. Follow DNS configuration instructions
4. Add these records to your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### On Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME  
   Name: www
   Value: YOUR-SITE.netlify.app
   ```

---

## 📊 Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] All pages load correctly (/, /works)
- [ ] Animations work smoothly
- [ ] Custom cursor appears on desktop
- [ ] Mobile responsive design verified
- [ ] HTTPS is enabled
- [ ] Custom domain configured (if applicable)
- [ ] Google Analytics added (optional)
- [ ] Sitemap.xml configured
- [ ] robots.txt configured

---

## 🔍 Monitoring & Analytics

### Add Google Analytics:
```typescript
// src/app/layout.tsx
import Script from 'next/script'

// Add in <head>:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Add Vercel Analytics:
```bash
npm install @vercel/analytics
```

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

// Add before </body>:
<Analytics />
```

---

## 🚨 Troubleshooting

### Build fails on Vercel:
- Check Node.js version in `package.json`:
  ```json
  "engines": {
    "node": ">=18.0.0"
  }
  ```

### Animations not working:
- Ensure GSAP is not being tree-shaken
- Check `next.config.js` for proper transpilation

### Custom cursor not showing:
- Verify CSS is being loaded
- Check browser console for errors
- Test on different browsers

---

## 📈 Performance Optimization

### Before going live:

1. **Run Lighthouse audit:**
   ```bash
   npm install -g lighthouse
   lighthouse http://localhost:3001 --view
   ```

2. **Optimize images:**
   - Convert to WebP format
   - Add blur placeholders
   - Use Next/Image component

3. **Enable compression:**
   - Vercel does this automatically
   - For Netlify, add `netlify.toml`:
     ```toml
     [[headers]]
       for = "/*"
       [headers.values]
         X-Content-Type-Options = "nosniff"
         Content-Security-Policy = "default-src 'self'"
     ```

4. **Add caching headers:**
   ```javascript
   // next.config.js
   async headers() {
     return [
       {
         source: '/:all*(svg|jpg|png)',
         locale: false,
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           }
         ],
       },
     ]
   }
   ```

---

## 🎯 Next Steps After Deployment

1. Share your portfolio:
   - LinkedIn
   - Twitter
   - Dev.to
   - GitHub README

2. Set up monitoring:
   - Vercel Analytics
   - Google Search Console
   - Sentry (error tracking)

3. Continuous improvement:
   - Add more projects
   - Write case studies
   - Add blog section
   - Gather feedback

---

## 📞 Support

If you encounter issues:
- Check Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Open an issue on GitHub

---

**Your portfolio is ready to go live! 🚀**

