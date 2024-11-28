import { createBrowserRouter } from "react-router-dom";
import HeadLayout from "../Layouts/HeadLayout";
import Home from "../Pages/Home";
import Statistic from "../Pages/Statistic";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../Components/ErrorPage";
import CategoriesCards from "../Components/CategoriesCards";
import View from "../Pages/View";
import CardDetails from "../Pages/CardDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HeadLayout></HeadLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('../categories.json'),
            children:[
              {
                path: '/',
                element: <CategoriesCards></CategoriesCards>,
                loader: ()=> fetch('../categoriesData.json')
              },
              {
                path: '/category/:category',
                element: <CategoriesCards></CategoriesCards>,
                loader: ()=> fetch('../categoriesData.json')
              }
            ]
        },
        {
            path: '/statistic',
            element: <Statistic></Statistic>,
        },
        {
            path: '/view',
            loader: ()=> fetch('./views.json'),
            element: <View></View>,
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>,
        },
        {
            path: '/products/:id',
            loader: ()=> fetch('../categoriesData.json'),
            element: <CardDetails></CardDetails>,
        },
        
        
      ]
    }
  ])

export default router; 