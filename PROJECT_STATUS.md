# Friends of Recovery Website - Project Status

**Last Updated:** January 21, 2026
**Status:** Production Deployed

---

## Live URLs

- **Production:** https://forwebcomp.deven.site
- **Vercel URL:** https://friends-of-recovery-czr1c1afv-deven-projects.vercel.app
- **GitHub Repo:** https://github.com/devenspear/for-website-test-1.0

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Domain:** Custom subdomain on deven.site

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with Inter font
│   ├── page.tsx          # Main page assembling all sections
│   └── globals.css       # Tailwind config + custom CSS variables
├── components/
│   ├── Header.tsx        # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx          # Full-screen hero with background image
│   ├── OurStory.tsx      # Two-column story section
│   ├── Services.tsx      # Job Placement + Housing cards
│   ├── Partners.tsx      # 4-column partner types grid
│   ├── GetInvolved.tsx   # Donate + Sponsorship cards
│   ├── PartnerCTA.tsx    # Full-width CTA banner
│   ├── Footer.tsx        # 3-column footer
│   └── ui/
│       ├── Button.tsx    # Reusable button (primary/secondary/outline)
│       ├── Card.tsx      # Reusable card component
│       └── SectionHeading.tsx  # Section title with accent underline
└── lib/
    └── content.ts        # All website copy centralized
```

---

## Design System

### Colors
| Purpose | Color | Hex |
|---------|-------|-----|
| Primary | Deep Teal | `#0D7377` |
| Primary Dark | Ocean | `#14575A` |
| Accent | Warm Amber | `#E8A838` |
| Background | Off-white | `#FAFAFA` |
| Surface | White | `#FFFFFF` |
| Text Primary | Charcoal | `#1F2937` |
| Text Secondary | Slate | `#6B7280` |

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold weight
- **Body:** Regular/Medium weight

---

## Assets

Located in `/public/`:
- `logo.png` - Friends of Recovery logo (teal/green gradient)
- `hero-bg.jpg` - Hero background (community/recovery collage)
- `transparency-app.jpg` - Transparency App screenshot for Our Story

---

## Page Sections (in order)

1. **Header** - Sticky, logo left, nav links + CTA right, mobile hamburger
2. **Hero** - Full-screen background image, dark overlay, white text with shadows
3. **Our Story** - Image left, text right (stacks on mobile)
4. **Services** - Two cards: Job Placement, Housing Support
5. **Partners** - Four cards: Employers, Housing Providers, Treatment Centers, Community Orgs
6. **Get Involved** - Two cards: Donate, Sponsorship
7. **Partner CTA** - Full-width teal banner with contact CTA
8. **Footer** - Logo/tagline, quick links, contact info, social icons

---

## Responsive Breakpoints

- **Mobile:** < 640px (single column layouts)
- **Tablet (sm):** 640px+ (2 columns for partners)
- **Desktop (md):** 768px+ (2 columns for most sections)
- **Large (lg):** 1024px+ (4 columns for partners)

---

## Completed Work

- [x] Project setup (Next.js 14 + TypeScript + Tailwind)
- [x] Custom color palette and typography
- [x] All UI components (Button, Card, SectionHeading)
- [x] All page sections built
- [x] Mobile responsive design
- [x] Logo integration (header + footer)
- [x] Hero background image with overlay
- [x] Transparency App image in Our Story
- [x] GitHub repo created and pushed
- [x] Vercel deployment configured
- [x] Custom domain (forwebcomp.deven.site) connected

---

## Future Enhancements (Not Started)

- [ ] Contact/Partner inquiry form (functional)
- [ ] Donation integration (Stripe/PayPal)
- [ ] Blog/News section
- [ ] Testimonials section
- [ ] Team/Staff page
- [ ] FAQ section
- [ ] Analytics integration
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Accessibility audit (WCAG compliance)
- [ ] Performance optimization (image compression, lazy loading)

---

## Commands

```bash
# Development
cd /Users/dspear/friends-of-recovery
npm run dev

# Build
npm run build

# Deploy (auto via GitHub push)
git add -A && git commit -m "message" && git push

# Manual Vercel deploy
vercel --prod
```

---

## Notes

- All website copy is centralized in `src/lib/content.ts` for easy editing
- Images are stored in `/public/` directory
- Vercel auto-deploys on every push to `main` branch
- Custom domain DNS is managed through Vercel (nameservers already configured)
