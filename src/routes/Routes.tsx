import React from "react";
import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/login/index";
import HomePage from "../pages/home/index";

export const routes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ];
};
