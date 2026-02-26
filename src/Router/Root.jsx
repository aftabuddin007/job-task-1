import { createBrowserRouter } from "react-router";
import Home from "../Component/Home/Home";
import AuthLayout from "../Component/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },{
    path:'/auth',
    Component: AuthLayout,
    children:[
        {
            path:"/auth/login",
            element:<Login></Login>

        }
    ]
  }
]);
export default router