# COLLAB - Jam Band Landing Page

A modern, responsive landing page for COLLAB - Jam Band built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Features

- **Static Site Generation (SSG)** - Optimized for performance and SEO
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode Support** - Automatic theme detection with manual toggle
- **Smooth Animations** - Framer Motion powered animations
- **Component-Based Architecture** - Modular, maintainable code structure
- **TypeScript** - Full type safety and better developer experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jam-band-landing-page
```

2. Install dependencies:
```bash
bun install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
bun run dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production with static export
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run export` - Export static files

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── demo/              # Demo page
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── HeroSection.tsx    # Hero section
│   ├── FeaturesSection.tsx # Features showcase
│   ├── InstrumentsSection.tsx # Instruments showcase
│   ├── UseCasesSection.tsx # Use cases
│   ├── DetailSection.tsx  # Detailed features
│   ├── CTASection.tsx     # Call to action
│   ├── Footer.tsx         # Footer
│   └── index.ts           # Component exports
└── types/                  # TypeScript types
```

## Static Export

This project is configured for static export, making it perfect for:

- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

The build process automatically generates static HTML files in the `out/` directory.

## Customization

### Colors and Themes

The project uses Tailwind CSS with custom color schemes. Main colors are defined in the Tailwind config:

- Primary: Purple (`purple-600`)
- Secondary: Blue (`blue-600`)
- Accent: Amber (`amber-600`)

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to the exports in `src/components/index.ts`
3. Import and use it in `src/app/page.tsx`

### Modifying Styles

- Global styles: `src/app/globals.css`
- Component-specific styles: Use Tailwind classes in the component files
- Custom animations: Defined in `tailwind.config.ts`

## Performance Features

- **Static Generation** - Pages are pre-built at build time
- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic code splitting by route
- **CSS Optimization** - Tailwind CSS purging and optimization

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive Web App (PWA) ready

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- **smplr** - Professional audio library for instruments
- **Tone.js** - Web Audio framework for synthesizers
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
