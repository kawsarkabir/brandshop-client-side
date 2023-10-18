import { useLoaderData } from "react-router-dom";
import AllProductCard from "./AllProductCard";

const AllProduct = () => {
  const allProducts = useLoaderData();
  const products = allProducts;
  console.log(products);
  return (
    <div className="flex justify-center">
      {
        products?.map(product=> <AllProductCard key={product._id} product={product}></AllProductCard>)
      }
    </div>
  );
};

export default AllProduct;
