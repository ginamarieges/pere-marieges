# Pere Marieges Architecture Portfolio

Web portfolio showcasing Pere Marieges' architecture projects, built with Astro and Tailwind CSS.

## Features

- Single-page main layout (`index.astro`) with reusable sections: `AboutMe`, `Projects`, `Experience`, and `Contact`.
- Architecture projects rendered via Astro's Content system, each with its own dynamic page (e.g. `[id].astro`).
- Responsive design using Tailwind CSS utilities, optimized to highlight images, descriptions, and professional experience.
- Continuous deployment to Netlify from the main repository branch.

## Tech Stack

- Astro
- Tailwind CSS
- Netlify (deployment)

## Project Structure

```text
/
├── public/
│   ├── fonts/
│   └── images/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── components/
│       ├── AboutMe.astro
│       ├── Projects.astro
│       ├── Contact.astro
│       ├── SectionContainer.astro
│       ├── Header.astro
│       ├── Footer.astro
│       └── Experience.astro
└── package.json
```

## Installation

Clone the repository and install dependencies:

```sh
git clone <https://github.com/ginamarieges/pere-marieges.git>
cd <project_name>
npm install
```

## Available Scripts

Local development:

```sh
npm run dev
```

Production build:

```sh
npm run build
```

Build preview:

```sh
npm run preview
```

## Deployment

Deployed on Netlify with standard configuration:
Build command: `npm run build`
Publish directory: `dist`
