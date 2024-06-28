//路由配置
import Layout from "@/pages/Layout";
import Login from  '@/pages/Login'
import {AuthRoute} from '@/components/AuthRoute.jsx'
//配置路由实例
import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/Home/index.jsx";
import Article from "@/pages/Article/index.jsx";
import Publish from "@/pages/Publish/index.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: <AuthRoute><Layout/></AuthRoute>,
        children:[
            {
                path:'home',
                element:<Home />
            },
            {
                path:'article',
                element:<Article />
            },
            {
                path:'publish',
                element:<Publish/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>,
    },
])

export default router