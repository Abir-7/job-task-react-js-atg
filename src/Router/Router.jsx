import { createBrowserRouter } from "react-router-dom";
import MainPageLatout from "../PageLayout/MainPageLatout";
import Home from "../Pages/HomePage/Home";
import Addnew from "../Pages/AddNew/Addnew";
 const router= createBrowserRouter([
    {
        path:'/',
        element:<MainPageLatout></MainPageLatout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/new',
                element:<Addnew/>
            }
        ]
    }
])

export default router