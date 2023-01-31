import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { DetailPage } from "./pages/detail.page";
import { HomePage } from "./pages/home.page";
import { PeoplePage } from "./pages/people.page";
import { PlanetsPage } from "./pages/planets.page";
import { StarshipsPage } from "./pages/startships.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "planetas",
    element: <PlanetsPage viewName="planets" />,
  },
  {
    path: "personajes",
    element: <PeoplePage viewName="people" />,
  },
  {
    path: "naves",
    element: <StarshipsPage viewName="starships" />,
  },
  {
    path: "/:source/:number/detail",
    element: <DetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
