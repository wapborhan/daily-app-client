import Dashboard from "../home/dashboard/Dashboard";
import Task from "../pages/task/Task";

export const routers = [
  { path: "/", element: <Dashboard /> },
  { path: "/task", element: <Task /> },
];
