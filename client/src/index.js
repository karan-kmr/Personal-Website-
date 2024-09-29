import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Projects from "./pages/projects"
import { GlobalDataManager } from "./context/GlobalDataManager";
import Privacy from "./pages/Privacy";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <App />
      </React.Fragment>
    ),
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/pagepulse/privacy",
    element: <Privacy />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<GlobalDataManager>
<RouterProvider router={router} />
</GlobalDataManager>
   
  </React.StrictMode>
);