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
// LANvxxCQ2VjDwsVt
// sr-task

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.tc8xqsk.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
