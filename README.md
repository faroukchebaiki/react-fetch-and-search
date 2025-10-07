# React Fetch & Search

React Fetch & Search is a modern single-page React app that loads sample people data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and lets you filter the list instantly from the browser. The UI is powered by Bulma with a light layer of custom styling.

## Highlights
- ⚛️ Functional React 19 components with hooks and graceful loading/error states
- 🔍 Instant client-side filtering with accessibility-friendly messaging
- 🎨 Bulma design system plus refreshed custom theme
- 🚀 Ready-to-ship GitHub Pages deployment using `gh-pages`

## Getting Started
```bash
git clone https://github.com/faroukChebaiki/react-fetch-and-search.git
cd react-fetch-and-search
npm install
npm start
```
The dev server starts on [http://localhost:3000](http://localhost:3000). The project targets Node.js 18 or newer.

## Available Scripts
- `npm start` – launch the local development server with hot reload
- `npm test` – run the interactive test runner powered by React Testing Library
- `npm run build` – create an optimized production bundle in `build/`
- `npm run deploy` – publish the latest build to GitHub Pages (`gh-pages` branch)
- `npm run eject` – expose the underlying webpack/babel config (one-way operation)

## Project Structure
- `src/App.jsx` – root component handling data fetching, search state, and layout
- `src/components/` – presentational components (`Header`, `Search`, `CardList`, `Card`)
- `src/styles.css` – custom styles layered on top of Bulma
- `public/` – base HTML template and static assets

## Deployment
1. Ensure the `homepage` field in `package.json` points to your GitHub Pages URL.
2. Run `npm run build` to generate the production bundle.
3. Execute `npm run deploy` to push the build to the `gh-pages` branch.
4. Visit `<username>.github.io/<repository>` once GitHub finishes publishing.

## License
Released under the MIT License. See [`LICENSE.md`](./LICENSE.md) for full details.  
© 2022–2025 Farouk Chebaiki
