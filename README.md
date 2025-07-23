# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed specifically for freelance web developers to showcase their services and attract business clients.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimization
- **Business-Focused**: Professional messaging that converts visitors into clients
- **Modular Components**: Reusable UI components for maintainability
- **Performance**: Optimized fonts, images, and loading speeds

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── (Home)/
│       │   └── page.tsx          # Home page
│       ├── layout.tsx            # Root layout with Navbar/Footer
│       └── globals.css           # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx            # Reusable button component
│   │   ├── Card.tsx              # Reusable card component
│   │   ├── Section.tsx           # Layout section component
│   │   └── index.ts              # UI components export
│   ├── Navbar.tsx                # Navigation component
│   ├── Footer.tsx                # Footer component
│   └── index.ts                  # Components export
├── data/
│   ├── services.ts               # Services data and types
│   └── testimonials.ts           # Testimonials data and types
├── styles/
│   └── globals.css               # Additional global styles
└── public/                       # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### 1. Update Personal Information

- Replace "YourName" in components with your actual name
- Update social media links in the Footer component
- Modify the hero section content in `src/app/(Home)/page.tsx`

### 2. Add Your Services

- Edit `data/services.ts` to reflect your actual services
- Update pricing and delivery times
- Add or remove service categories

### 3. Add Testimonials

- Replace sample testimonials in `data/testimonials.ts`
- Add real client feedback and project details

### 4. Customize Styling

- Modify colors in Tailwind classes
- Update the color scheme in components
- Add custom styles in `styles/globals.css`

## 📄 Pages to Create

Based on the navigation structure, you'll want to create these additional pages:

- `/work` - Portfolio/case studies page
- `/about` - About page with your story
- `/contact` - Contact form and information
- `/services/*` - Individual service pages
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Deploy with `railway up`
- **DigitalOcean**: Use App Platform

## 📈 SEO & Performance

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Optimized fonts with `display: swap`
- ✅ Responsive images with Next.js Image
- ✅ Fast loading with Next.js optimization
- ✅ Accessibility features

## 🔧 Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Geist Font](https://vercel.com/font) - Modern typography
