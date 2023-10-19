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
import BrandProductPage from "../components/BrandProductPage/BrandProductPage";
 

const Router =  createBrowserRouter([
    {
        path: '/', 
        element: <Layout></Layout>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/addbrand'),
                
            }, 
            {
                path: '/products', 
                element: <AllProducts></AllProducts>,
                loader: ()=> fetch('http://localhost:5000/addproducts')
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
            {
                path: '/products/:id', 
                element:  <BrandProductPage></BrandProductPage>,
                // loader: ()=> fetch('http://localhost:5000/addproducts')
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
                element: <AllProduct></AllProduct>, 
                loader: ()=> fetch('http://localhost:5000/addproducts')
            
            },
            {
                path: '/dashboard/allbrand',
                element: <AllBrand></AllBrand>,
                loader: ()=> fetch('http://localhost:5000/addbrand')
            },
            {
                path: '/dashboard/addbrand', 
                element: <AddBrand></AddBrand>
            }

        ]
    }
])
export default Router;
