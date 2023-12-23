import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../components/home/HomePage";
import Dashboard from "../components/pages/dashboard/Dashboard";
import SignIn from "../layout/auth/SignIn";
import SignUp from "../layout/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "task",
        element: <Dashboard />,
      },
    ],
  },
]);
