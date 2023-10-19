import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllProduct from "../components/Products/AllProduct/AllProduct";
import AllBrand from "../components/Brand/AllBrand/AllBrand";
import AddBrand from "../components/Brand/AddBrand/AddBrand";
import AllProducts from "../components/Products/AllProducts/AllProducts";
import BrandProductPage from "../components/Brand/BrandProductPage/BrandProductPage";
import ProductDetails from "../components/Products/ProductDetails./ProductDetails";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/addbrand"),
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/mycart",
        element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products/:id",
        element: <BrandProductPage></BrandProductPage>,
      },
      {
        path: "/productdetails/:id",
        element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter> ,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/allproduct",
        element: <AllProduct></AllProduct>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/dashboard/allbrand",
        element: <AllBrand></AllBrand>,
        loader: () => fetch("http://localhost:5000/addbrand"),
      },
      {
        path: "/dashboard/addbrand",
        element: <AddBrand></AddBrand>,
      },
    ],
  },
]);
export default Router;
