# Bliss with Yoga

**Meera · Yoga, health & the everyday body**

A personal yoga and wellness website focused on gentle, everyday movement and healthy living.

🌐 **Live site:** [https://blisswithyoga.vercel.app](https://blisswithyoga.vercel.app)

---

## About

Bliss with Yoga is a single-page website for Meera's yoga and wellness practice. It introduces her approach to yoga, health and the everyday body, and gives visitors a calm, warm place to learn more and get in touch.

## Features

- Responsive layout for mobile, tablet and desktop
- Warm, earthy colour palette (theme colour `#403027`)
- Smooth, single-page navigation
- Social sharing metadata (Open Graph and Twitter cards)
- Deployed on Vercel with automatic builds

> Add or remove items here so the list matches the sections on your site (for example classes, about, testimonials, contact).

## Tech Stack

The project was generated with [Bolt.new](https://bolt.new) and is deployed on [Vercel](https://vercel.com). Typical Bolt projects use:

- [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons

> Check your `package.json` and edit this list to match what you actually use.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git

# Go into the project folder
cd <your-repo>

# Install dependencies
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The production files are generated in the `dist/` folder. To preview the build locally:

```bash
npm run preview
```

## Project Structure

```
.
├── public/          # Static assets (favicon, images)
├── src/
│   ├── components/  # Reusable UI components and page sections
│   ├── App.tsx      # Root component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles (Tailwind)
├── index.html       # HTML template and meta tags
├── package.json
└── vite.config.ts
```

> Update this tree to reflect your real folders and files.

## Deployment

The site is hosted on Vercel.

1. Push the code to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Use these settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Every push to the main branch will redeploy automatically.

## Customization

- **Content:** edit the text and images inside the components in `src/components/`.
- **Colours and fonts:** update the Tailwind configuration (`tailwind.config.js`) or `src/index.css`.
- **SEO and sharing:** change the `<title>` and meta tags in `index.html`. The default social preview image still points to a Bolt.new placeholder, so replace it with your own image.

## Contributing

Suggestions and improvements are welcome. Please open an issue to discuss a change before submitting a pull request.

## License

This project is for personal use. Add a license (for example MIT) here if you want others to reuse the code.

## Contact

Questions about the website or yoga practice? Reach out through the contact section on the [live site](https://blisswithyoga.vercel.app).

---

*Made with care for mindful movement 🧘‍♀️*
