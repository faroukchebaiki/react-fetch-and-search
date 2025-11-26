import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "bulma/css/bulma.min.css";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Bootstraps the React app into the DOM with development StrictMode enabled.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
