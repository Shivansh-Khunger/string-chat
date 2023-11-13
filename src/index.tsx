import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.tsx";
import "./tailwind.css";

const domNode = document.getElementById("root");
domNode?.classList.add("h-screen", "bg-slate-300", "bg-polka-dot-pattern");
ReactDOM.createRoot(domNode!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
