# Media Viewer App

A modern, interactive media viewer application built with React and Vite. Browse through beautiful image collections with smooth scrolling and explore detailed galleries.

## Features

### 🏠 Homepage - Scrollable Media Viewer
- Horizontal scrolling carousel with 6 curated image collections
- Each card displays a featured image with title and call-to-action button
- Smooth scroll-snap behavior for precise navigation
- Visual scroll indicators showing your current position
- Responsive design that works on all screen sizes

### 🖼️ Gallery Pages
- Individual gallery for each collection featuring 6 images
- Responsive grid layout that adapts to screen size
- Smooth hover effects and transitions
- Back button for easy navigation to homepage
- Collections include:
  - Mountain Landscapes
  - Ocean Views
  - City Lights
  - Forest Trails
  - Desert Sunsets
  - Northern Lights

## Technology Stack

- **React 19.2** - Modern UI framework
- **React Router 7** - Client-side routing
- **Vite 7** - Fast build tool and dev server
- **CSS3** - Modern styling with flexbox and grid
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hhawki11/chicken_run.git
cd chicken_run
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
chicken_run/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx       # Main scrollable viewer
│   │   ├── HomePage.css       # Homepage styles
│   │   ├── GalleryPage.jsx    # Individual gallery view
│   │   └── GalleryPage.css    # Gallery styles
│   ├── data/
│   │   └── mediaData.js       # Image collections data
│   ├── App.jsx                # Main app component with routing
│   ├── App.css                # App styles
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── public/                    # Static assets
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project uses ESLint for code quality. Run `npm run lint` to check for issues.

## Design Features

- **Black Background** - Clean, minimalist black background throughout the app
- **Smooth Animations** - Hover effects and transitions throughout
- **Responsive Design** - Mobile-first approach with breakpoints at 768px and 480px
- **Scroll Snap** - Precise card-by-card scrolling on homepage
- **Modern UI** - Clean, minimal interface with frosted glass effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Screenshots

### Homepage
![Homepage](https://github.com/user-attachments/assets/5465be2b-5eb5-45a8-a305-a9d58a8e176a)

### Gallery Page
![Gallery Page](https://github.com/user-attachments/assets/f915ce6c-1013-41e6-9a39-c863264f2a86)

