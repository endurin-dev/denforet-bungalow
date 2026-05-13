# 🌿 Denforet Bungalow Website

A premium luxury eco-tourism website for **Denforet Bungalow** — a peaceful forest retreat in Sri Lanka.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or later
- **npm** or **yarn**

### 1. Install dependencies

```bash
cd denforet-bungalow
npm install
```

### 2. Add your images

Place your images in these folders:

| Folder | Purpose |
|--------|---------|
| `public/images/logo.jpg` | Your logo |
| `public/images/rooms/` | Room photos (room1.jpg, room2.jpg, room3.jpg, etc.) |
| `public/images/other/` | All other images (see list below) |

#### Required images in `public/images/other/`:
- `hero.jpg` — Main hero background (full screen)
- `welcome.jpg` — Welcome section (portrait orientation)
- `welcome2.jpg` — Small accent image
- `about-hero.jpg` — About page hero
- `about1.jpg` — About page interior
- `ella.jpg` — Ella attraction
- `horton.jpg` — Horton Plains
- `tea.jpg` — Tea plantations
- `waterfall.jpg` — Waterfalls
- `hiking.jpg` — Nature trails
- `viewpoint.jpg` — Scenic viewpoints
- `cta-bg.jpg` — Contact CTA background
- `contact-hero.jpg` — Contact page hero

> 💡 **Tip:** Use high-quality landscape photos (at least 1920×1080px) for hero images. Portrait photos (4:5 ratio) work best for the welcome section.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, rooms preview, why us, attractions, testimonials |
| About | `/about` | Story, values, eco pledge |
| Rooms | `/rooms` | Full room showcase with enquiry |
| Attractions | `/attractions` | Nearby places with map |
| Contact | `/contact` | Contact form → WhatsApp, map |

---

## 🎨 Design System

### Colors
```
Forest Green:  #1F3B2D
Earth Brown:   #5C4033
Warm Beige:    #E8DCCB
Soft White:    #FAFAF7
Charcoal:      #1A1A1A
Gold:          #C9A96E
```

### Fonts
- **Headings:** Cormorant Garamond (elegant serif)
- **Body:** DM Sans (modern, clean)
- **Display:** Playfair Display

---

## 📞 Contact Details (pre-configured)

- **Phone:** +94 71 524 6617
- **Email:** info@denforetbungalow.com
- **WhatsApp:** https://wa.me/94715246617
- **Facebook:** https://www.facebook.com/denforetbungalow

---

## 🔧 Customization

### Update contact details
Search for `+94715246617` and `info@denforetbungalow.com` across the codebase and replace with your actual details.

### Update Google Maps
In `src/app/attractions/page.tsx` and `src/app/contact/page.tsx`, replace the Google Maps embed URL with your actual property location.

### Add more rooms
Edit `src/app/rooms/page.tsx` — add new room objects to the `rooms` array.

### Update testimonials
Edit `src/components/Testimonials.tsx` — update the `testimonials` array.

---

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (Utility-first styling)
- **Framer Motion** (Animations)
- **React Icons** (Icon library)
- **TypeScript** (Type safety)

---

## 🌍 SEO

The site is pre-configured with:
- Meta titles and descriptions for all pages
- Open Graph tags
- Semantic HTML structure
- Keyword-optimized content

---

## 📱 Mobile Features

- Fully responsive on all screen sizes
- Mobile hamburger navigation menu
- Sticky bottom call/WhatsApp bar on mobile
- Floating WhatsApp button on desktop

---

Built with 🌿 for Denforet Bungalow, Sri Lanka
