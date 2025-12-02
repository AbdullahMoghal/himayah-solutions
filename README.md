# Himayah Solutions - Cybersecurity Consulting Website

A modern, responsive website for Himayah Solutions, a cybersecurity consulting company. Built with React, featuring a sleek black and white theme with smooth animations and interactive UI elements.

## Features

- **Modern Design**: Clean black and white theme with professional aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and interactive elements using Framer Motion
- **Multiple Pages**: Home, Services, About, and Contact pages
- **Interactive UI**: Hover effects, smooth transitions, and engaging user experience

## Tech Stack

- React 18
- React Router DOM
- Framer Motion (for animations)
- Vite (build tool)
- CSS3 (for styling)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
himayah-solutions/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── himayah-solutions-Assets/
├── himayah-SVG-assets/
├── package.json
├── vite.config.js
└── index.html
```

## Pages

- **Home**: Hero section, services preview, features, and call-to-action
- **Services**: Detailed view of all cybersecurity services offered
- **About**: Company story, statistics, and values
- **Contact**: Contact form and company information

## Customization

To customize the website:
- Update contact information in `Contact.jsx` and `Footer.jsx`
- Modify service descriptions in `Home.jsx` and `Services.jsx`
- Adjust colors in the CSS files (currently using black (#000000) and white (#ffffff))
- Replace images in the `himayah-solutions-Assets/` folder

## License

This project is private and proprietary.



