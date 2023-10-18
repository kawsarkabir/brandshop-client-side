import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllProduct from "../components/AllProduct/AllProduct";
import AllBrand from "../components/Brand/AllBrand/AllBrand";
import AddBrand from "../components/Brand/AddBrand/AddBrand";
import AllProducts from "../components/Products/AllProducts";
 

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
                path: '/products', 
                element: <AllProducts></AllProducts>
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
            },
           
        ]
    },
    {
        path: '/dashboard', 
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allproduct',
                element: <AllProduct></AllProduct>
            },
            {
                path: '/dashboard/allbrand',
                element: <AllBrand></AllBrand>
            },
            {
                path: '/dashboard/addbrand', 
                element: <AddBrand></AddBrand>
            }

        ]
    }
])
export default Router;
