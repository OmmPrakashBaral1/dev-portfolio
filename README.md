# Developer Portfolio — Architecture & File Guide

A single-page developer portfolio built with React (JavaScript), Tailwind CSS, and Framer Motion. Designed with a dark aesthetic, teal accents, glassmorphic surfaces, and responsive typography (Inter & JetBrains Mono).

---

## 1. Project Overview

- **Core Principle:** Single source of truth. All personal details, projects, skills, and links are defined in `src/data.js`. Components consume this data dynamically so updating your portfolio requires zero component edits.
- **Styling Architecture:** Utility-first CSS using Tailwind CSS with custom glassmorphism utilities defined in `src/index.css`.
- **Animations:** Subtle, performant scroll-reveal entrance animations powered by `framer-motion` (`whileInView` and `opacity/y` transitions).

---

## 2. Can You Remove the `dist` Folder?

**Yes, absolutely.** 
- `dist/` is the compiled production output created only when you run `npm run build`.
- It is not part of your source code and should never be committed to Git.
- Whenever you want to test or deploy a production bundle, Vite will regenerate `dist/` automatically.

---

## 3. File-by-File Breakdown

### Root Configuration Files

| File | What it is | Why it exists | How it works |
| :--- | :--- | :--- | :--- |
| `package.json` | Project manifest & dependency manager | Defines required libraries (`react`, `framer-motion`, `lucide-react`, `tailwindcss`) and CLI scripts. | Runs scripts like `npm run dev` (starts local server) and `npm run build` (builds production assets). |
| `vite.config.js` | Vite bundler configuration | Configures Vite to compile modern React (JSX) fast with hot module replacement (HMR). | Uses `@vitejs/plugin-react` to parse and bundle JSX files. |
| `tailwind.config.js` | Tailwind design tokens | Configures custom theme colors (`bg`, `surface`, `card`, `accent`), fonts (`Inter`, `JetBrains Mono`), and custom glows. | Scans `index.html` and `src/**/*.{js,jsx}` to generate minimal CSS classes used in the project. |
| `postcss.config.js` | PostCSS processing pipeline | Integrates Tailwind CSS and Autoprefixer into the build pipeline. | Automatically adds vendor prefixes and processes Tailwind directives. |
| `index.html` | HTML template & entry point | Serves the root `<div id="root"></div>` and imports Google Fonts. | Loads `Inter` and `JetBrains Mono` fonts and boots the app via `/src/main.jsx`. |

---

### Core Source Files (`src/`)

| File | What it is | Why it exists | How it works |
| :--- | :--- | :--- | :--- |
| `src/main.jsx` | React DOM mount point | Boots the React runtime and mounts the root component to the HTML DOM. | Calls `ReactDOM.createRoot` on the `#root` element and renders `<App />` inside `React.StrictMode`. |
| `src/index.css` | Global styling & glass classes | Houses Tailwind directives (`@tailwind base/components/utilities`) and reusable `.glass-card` CSS rules. | Provides backdrop filters (`backdrop-blur-md`), dark borders, and hover color transitions across cards. |
| `src/App.jsx` | Root application layout | Composes all 8 portfolio sections in sequential scroll order. | Imports each section component and arranges them inside a responsive layout wrapper. |
| `src/data.js` | Central data store | Decouples portfolio content from visual code so you never have to hardcode text in JSX. | Exports `portfolioData` containing personal info, social links, stats, skill groups, projects, and work history. |

---

### UI Components (`src/components/`)

Each component is dedicated to a single section of the page:

1. **`Navbar.jsx`**
   - **What:** Sticky navigation bar with desktop links, mobile hamburger drawer, and resume link.
   - **Why:** Allows smooth section navigation without losing context during scrolling.
   - **How:** Uses `position: sticky`, backdrop blur, and React state (`isOpen`) for mobile toggle.

2. **`Hero.jsx`**
   - **What:** The above-the-fold introductory hero section.
   - **Why:** First impression that immediately communicates your role, background, and primary CTAs.
   - **How:** Animates on page load via `framer-motion` (`initial`, `animate`), with action buttons for projects and resume.

3. **`About.jsx`**
   - **What:** 3-line direct bio paragraph + 2 stat cards (Cloud Internship & AWS CI/CD Pipeline).
   - **Why:** Summarizes your academic status (2027 fresher) and hands-on cloud focus honestly.
   - **How:** Renders glass stat cards with Lucide icons (`Cloud`, `GitBranch`) and triggers a scroll reveal via `whileInView`.

4. **`Skills.jsx`**
   - **What:** Categorized skill cards (Languages, Frontend, Backend, Databases, Cloud & DevOps).
   - **Why:** Demonstrates your tech stack in a structured tag format without arbitrary percentage bars.
   - **How:** Maps grouped items from `data.js` into hover-interactive glass cards with mono-font badge tags.

5. **`Projects.jsx`**
   - **What:** Interactive project showcase cards with stack tags, status badges, and source/demo links.
   - **Why:** Highlights real engineering experience (StudentHub AWS CI/CD + AI Interview Coach).
   - **How:** Dynamically maps `portfolioData.projects`, displays an "In Progress" badge when `inProgress: true`, and links directly to GitHub or demos.

6. **`Experience.jsx`**
   - **What:** Vertical timeline displaying your Cloud Computing internship and B.Tech CSE degree.
   - **Why:** Visualizes your career progression and academic milestones.
   - **How:** Uses a CSS pseudo-line with teal indicator nodes and glass cards for each timeline entry.

7. **`Contact.jsx`**
   - **What:** Contact section with direct social links (Email, GitHub, LinkedIn) and an interactive contact form.
   - **Why:** Allows recruiters and collaborators to reach you directly.
   - **How:** Handles client-side validation for name, valid email regex, and message content, transitioning to a clean confirmation view upon submit.

8. **`Footer.jsx`**
   - **What:** Minimal footer displaying copyright and the technologies used.
   - **Why:** Clean finish to the bottom of the page.
   - **How:** Pulls name and year directly from `data.js`.

---

## 4. How to Run & Build

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 5. How to Update Your Information

Open `src/data.js` and edit the relevant fields:
- Replace `[placeholder]` in `resumeUrl`, `socials`, or project links with your real URLs.
- To add a new project, add another object to the `projects` array in `data.js`.
