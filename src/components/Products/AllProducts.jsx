import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const allProducts = useLoaderData()
console.log(allProducts);
  return (
    <div>
      
    </div>
  );
};

export default AllProducts;
