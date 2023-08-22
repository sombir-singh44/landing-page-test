import { lazy } from "react";
import LandingLayout from "./Layout";

export const Routing = [
  {
    path: "/",
    layout: LandingLayout,
    element: lazy(() => import("./View/Landing")),
  },

  {
    path: "*",
    element: lazy(() => import("./View/Error/Error404")), // 404 Page
  },
];
