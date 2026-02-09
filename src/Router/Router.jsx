import { createBrowserRouter } from "react-router";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import RootLayOut from "../layout/RootLayOut";
import Home from "../pages/Home";
import Contoct from "../pages/Contoct";
import About from "../pages/About";
import MyTasks from "../Users/MyTasks";
import ManageTasks from "../Admin/ManageTasks";
import AllUsers from "../sheard/AllUsers";
import Tasks from "../sheard/Tasks";
// import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        path: "/",
        Component: Home,
      },

      {
        path: "/signUp",
        Component: Signup,
      },
      {
        path: "/login",
        Component: Login,
      },

      {
        path: "/contact",
        Component: Contoct,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/myTasks",
        Component: MyTasks,
      },
      {
        path:'/allUsers',
        Component:AllUsers,
      },
      {
        path:"/manageTasks",
        Component:ManageTasks
      },
      {
        path:"/allTask",
        Component:Tasks
      }
    ],
  },
]);
