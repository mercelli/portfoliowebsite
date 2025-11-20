import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Fragments from "./pages/Fragments.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // portfolio routes
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:slug", element: <Project /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
      { path: "fragments", element: <Fragments /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
