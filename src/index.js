import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <body className="bg-white dark:bg-slate-800 transition-all,">
          <main>
            <App />
          </main>
        </body>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
