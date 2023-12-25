import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/home/HomePage";
import Dashboard from "../components/pages/dashboard/Dashboard";
import AddTask from "../components/pages/task/AddTask";
import Task from "../components/pages/task/Task";
import Root from "../layout/Root";
import SignIn from "../layout/auth/SignIn";
import SignUp from "../layout/auth/SignUp";
import MyTask from "../components/pages/myTask/MyTask";

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
    path: "dashboard",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "task/all",
        element: <Task />,
      },
      {
        path: "task/add",
        element: <AddTask />,
      },
      {
        path: "task/my",
        element: <MyTask />,
      },
    ],
  },
]);
