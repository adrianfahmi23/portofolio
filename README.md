# Fahmi Adrian Portfolio

Personal fullstack portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- React
- Vite
- Tailwind CSS
- EmailJS

## Features

- Full-page portfolio layout
- Featured project gallery with modal navigation
- Responsive design
- Contact form integrated with EmailJS
- Real project screenshots loaded from the local `image/` folder

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your EmailJS values.

```bash
cp .env.example .env
```

Required variables:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Your EmailJS template should accept these fields:

- `name`
- `email`
- `note`

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Project Structure

```text
.
├── image/              # Project screenshots grouped by project name
├── src/
│   ├── App.jsx         # Main portfolio page and gallery/form logic
│   ├── index.css       # Tailwind entry file
│   └── main.jsx        # React entry point
├── .env.example        # EmailJS env variable template
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Notes

- `.env` is ignored by git.
- Project images are imported directly from the local `image/` directory.
- The contact form will show an error message if EmailJS env values are missing.

## Deployment

This project can be deployed to any static hosting provider that supports Vite build output, such as:

- Vercel
- Netlify
- GitHub Pages

If you deploy it, remember to also configure the same EmailJS environment variables in your hosting platform.
