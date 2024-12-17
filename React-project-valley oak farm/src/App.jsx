import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { Map } from "./screens/Map";
import { MapPin } from "./screens/MapPin";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Desktop />,
  },
  {
    path: "/desktop-1",
    element: <Desktop />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/map-pin",
    element: <MapPin />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
