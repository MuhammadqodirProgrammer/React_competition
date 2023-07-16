import { createBrowserRouter,  } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage/HomePage";
import { Error404 } from "./pages/Error404/Error404";
import { Login } from "./pages/Login/login";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                index:true,
                path:'/',
                element:<HomePage />,
            },
          
            {
                path:'/login',
                element:<Login />
                
            },
        
            {
                path:'/*',
                element:<Error404 />
                
            },
       
           
        ]
    }
])