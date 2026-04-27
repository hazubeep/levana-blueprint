# Personal Website

This is a personal website intended for showing information about someone. The site is built with Vite, React, TypeScript, and Tailwind CSS and showcases a profile, expertise, experience, track records, and component-driven content.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hazubeep/levana-blueprint.git
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

## Usage

To start the development server, run the following command:

```bash
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

To build the application for production, run the following command:

```bash
pnpm build
```

To preview the production build locally, run the following command:

```bash
pnpm preview
```

## Folder Structure

The folder structure of this project is as follows:

```
/
├── public/
│   └── site.webmanifest
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   ├── company/
│   │   └── profile/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── NavLink.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   └── pages/
│       ├── About.tsx
│       ├── Blog.tsx
│       ├── Contact.tsx
│       ├── Home.tsx
│       ├── Index.tsx
│       ├── NotFound.tsx
│       └── Portfolio.tsx
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- `public/`: Static assets and web manifest.
- `src/`: Application source files.
- `src/components/`: Reusable UI components and shadcn-style primitives.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Utility functions and helpers.
- `src/pages/`: Page views for the site routes.

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast frontend tooling for modern web apps.
- [React](https://reactjs.org/) - UI library for building interactive interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [shadcn-ui](https://ui.shadcn.com/) - Component primitives and UI patterns.
- [lucide-react](https://lucide.dev/) - Icon components for React.
- [react-router-dom](https://reactrouter.com/) - Routing for React applications.
- [sonner](https://sonner.js.org/) - Toast notifications.

## Contributing

Contributions are welcome! Please feel free to submit a pull request with any improvements or new features.
