# my-react-app

This project was bootstrapped manually to mirror the Vite + React template with Bulma styling.

## Available Scripts

### `npm install`

Installs dependencies.

### `npm run dev`

Starts the development server.

### `npm run build`

Builds the production bundle.

### `npm run preview`

Previews the production build locally.

### `npm run lint`

Runs ESLint using the shared configuration.

### `npm run format`

Formats the project using Prettier.

## Navigation refactor notes

- The top navigation (`NavBar`) now renders a persistent CTA plus a hamburger button that opens an accessible off-canvas sidebar (`Sidebar`).  
- `NavBar` accepts the existing landing props (`isLanding`, `activeSection`, `onAnchorClick`) and now coordinates the sidebar using the shared `Overlay` component and the new `useLockBodyScroll` hook.  
- All primary links are defined once and reused by the desktop navbar and mobile drawer to keep the CTA (“Talk to Sales”) visible at every breakpoint.

## Manual test checklist

1. View `/` at 320, 768, 1024, and 1440px — confirm the CTA button is fully visible and clickable.  
2. Toggle the hamburger with mouse and keyboard (Enter/Space); verify focus moves into the drawer, is trapped, and ESC or overlay click closes it.  
3. Tab through sidebar items; active routes highlight, and focus returns to the hamburger after closing.  
4. From the sidebar, trigger each section link and the “Talk to Sales” CTA; ensure body scrolling is disabled while open and restored on close.  
5. On desktop, verify the top navbar links highlight the active section/route and no horizontal scrolling appears when resizing.
