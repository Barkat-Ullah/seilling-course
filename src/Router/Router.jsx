import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([

    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
              
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader:()=>fetch('/courses.json')
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
]);

export default router;