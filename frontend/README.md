# Portfolio Frontend - Next.js

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This frontend is designed to work seamlessly with a Python backend powered by OpenAI Agents SDK.

## Features

- ✨ Modern UI with smooth animations
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🎨 Beautiful gradient themes
- 🔍 Smooth scroll navigation
- 💼 Professional sections: Hero, About, Skills, Projects, Contact

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: CSS Animations
- **Navigation**: react-scroll

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
app/
├── components/         # React components
│   ├── Navbar.tsx     # Navigation bar
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills section
│   ├── Projects.tsx   # Projects section
│   └── Contact.tsx    # Contact form
├── page.tsx           # Main page
├── layout.tsx         # Root layout
└── globals.css        # Global styles

```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Change name and title
   - Update social media links

2. **About Section** (`components/About.tsx`):
   - Modify description text
   - Update stats

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skills
   - Update skill categories

4. **Projects Section** (`components/Projects.tsx`):
   - Add your projects
   - Update project links and details

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Modify form behavior when backend is ready

## Next Steps

1. ✅ Frontend completed
2. 🔄 Connect to Python backend
3. 🔄 Integrate OpenAI SDK
4. 🔄 Implement contact form API
5. 🔄 Add AI assistant features

## License

MIT
