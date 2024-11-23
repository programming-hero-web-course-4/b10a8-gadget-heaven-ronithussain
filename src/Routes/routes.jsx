import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HeadLayout from "../Layouts/HeadLayout";
import Home from "../Pages/Home";
import Statistic from "../Pages/Statistic";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HeadLayout></HeadLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('./categories.json'),
        },
        {
            path: '/statistic',
            element: <Statistic></Statistic>,
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>,
        },
      ]
    }
  ])

export default router; 