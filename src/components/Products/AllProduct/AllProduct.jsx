import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllProductCard from "./AllProductCard";

const AllProduct = () => {
  const allProducts = useLoaderData();
  const [products, setProducts] = useState(allProducts);

  const handleDeleteProduct = (_id) => {
    fetch(`https://brand-shop-server-one-bice.vercel.app/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const remainingBrand = products.filter(
          (product) => product._id !== _id
        );
        setProducts(remainingBrand);
      });
  };

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
        <AllProductCard
          handleDeleteProduct={handleDeleteProduct}
          key={product._id}
          product={product}
        ></AllProductCard>
      ))}
    </div>
  );
};

export default AllProduct;
