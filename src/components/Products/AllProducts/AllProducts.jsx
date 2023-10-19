import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const allProducts = useLoaderData()
 
  return (
    <div>
      <h1>products: {allProducts.length}</h1>
    </div>
  );
};

export default AllProducts;
