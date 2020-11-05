import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Home/Home";

const Routes: React.FC = () => {
  const routesElement = useRoutes([
    {
      path: "/",
      element: <Home />
    }
  ]);
  return routesElement;
};

export default Routes;