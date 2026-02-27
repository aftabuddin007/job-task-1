import { createBrowserRouter } from "react-router";
import Home from "../Component/Home/Home";
import AuthLayout from "../Component/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>
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