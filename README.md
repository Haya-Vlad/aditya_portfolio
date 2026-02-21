# Aditya G — Portfolio

Personal portfolio site built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
aditya-portfolio/
├── app/
│   ├── globals.css       # Global styles + CSS vars
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   └── page.tsx          # Main page
├── components/
│   ├── Cursor.tsx         # Custom cursor
│   ├── Navbar.tsx         # Sticky navbar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills grid
│   ├── Projects.tsx       # Projects list
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   ├── FadeUp.tsx         # Reusable scroll animation
│   └── SectionHeader.tsx  # Reusable section title
├── public/               # Static assets
│   └── photo.jpg         # ← ADD YOUR PHOTO HERE
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## 🖼 Adding Your Photo

1. Add your photo to `/public/photo.jpg`
2. In `components/About.tsx`, replace the placeholder block with:
   ```tsx
   import Image from "next/image";
   // ...
   <Image src="/photo.jpg" alt="Aditya G" fill className="object-cover" />
   ```

---

## ✏️ Customizing Content

| What | Where |
|------|-------|
| Your name / title | `components/Hero.tsx` |
| Bio & stats | `components/About.tsx` |
| Skill cards | `components/Skills.tsx` — edit the `skills` array |
| Projects | `components/Projects.tsx` — edit the `projects` array |
| Email / socials | `components/Contact.tsx` — edit the `contactLinks` array |
| Page metadata | `app/layout.tsx` |

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — that's it! ✅

No configuration needed. Vercel auto-detects Next.js.

---

## 🌐 Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site**
3. Connect GitHub repo
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Click **Deploy** ✅

---

## 🎨 Theming

All colors are CSS variables in `app/globals.css`:

```css
--accent: #f97316;     /* Main orange */
--accent2: #fb923c;    /* Lighter orange */
--bg: #0a0a0a;         /* Background */
--border: rgba(249,115,22,0.2);
```

Change `--accent` to update the entire site's color scheme.
