import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Router =  createBrowserRouter([
    {
        path: '/', 
        element: <Layout></Layout>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/addproduct', 
                element: <AddProduct></AddProduct>
            }, 
            {
                path: '/mycart', 
                element: <MyCart></MyCart>
            },
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }
        ]
    }
])
export default Router;
