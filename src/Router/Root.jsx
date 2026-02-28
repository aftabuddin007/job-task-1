import { createBrowserRouter } from "react-router";
import Home from "../Component/Home/Home";
import AuthLayout from "../Component/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";

import Analytics from "../Pages/Dashboard/Analytics";
import DashboardMain from "../Pages/Dashboard/DashboardMain";
import Statisticspage from "../Pages/Dashboard/Statisticspage";
import User from "../Pages/Dashboard/User";
import Products from "../Pages/Dashboard/Products";
import PrivateRoute from "./PrivateRoute";






const router = createBrowserRouter([
  {
    path: "/",
    element:<Login></Login>,
  },
  {
    path:"/dashboard",

    element:<PrivateRoute>

      <DashboardMain></DashboardMain>,
    </PrivateRoute>,
    children:[
      {
        path:"/dashboard/analytics",
        element:<Analytics></Analytics>
      },{
        path:"/dashboard/dashboard1",
        element:<Statisticspage></Statisticspage>
      },{
        path:"dashboard/user",
        element:<User></User>
      },{
        path:"/dashboard/products",
        element:<Products></Products>
      }
    ]
  }
  //{
  //   path:'/auth',
  //   Component: AuthLayout,
  //   children:[
  //       {
  //           path:"/auth/login",
  //           element:<Login></Login>

  //       }
  //   ]
  // }
]);
export default router