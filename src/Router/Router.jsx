import { createBrowserRouter } from "react-router";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import RootLayOut from "../layout/RootLayOut";
import Home from "../pages/Home";
import Contoct from "../pages/Contoct";
import About from "../pages/About";
// import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [

      {
        path: "/signUp",
        Component: Signup,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path:"/home",
        Component:Home
      },
      {
        path:"/contact",
        Component:Contoct
      },
      {
        path:"/about",
        Component:About
      }
    ],
  },
]);
