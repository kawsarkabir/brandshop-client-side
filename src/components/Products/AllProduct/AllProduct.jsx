import { useLoaderData } from "react-router-dom";
import AllProductCard from "./AllProductCard";

const AllProduct = () => {
  const allProducts = useLoaderData();
  const products = allProducts;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table flex justify-center items-center">
          {/* head */}
          <thead>
            <tr className="flex justify-around">
              <th>Product image </th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Category</th>
              <th>CRUD</th>
            </tr>
          </thead>
        </table>
      </div>
      {products?.map((product) => (
        <AllProductCard key={product._id} product={product}></AllProductCard>
      ))}
    </div>
  );
};

export default AllProduct;
