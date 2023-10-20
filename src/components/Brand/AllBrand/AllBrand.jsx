import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllBrandCard from "../AllBrandCard/AllBrandCard";

const AllBrand = () => {
  const allbrand = useLoaderData();
  const [brands, setBrand] = useState(allbrand)

    const handleDeleteBrand=(_id)=>{
      console.log('delete btn click', _id);
      fetch(`https://brand-shop-server-one-bice.vercel.app/${_id}`, {
        method: 'DELETE', 
      })
      .then(res=>res.json())
      .then(()=>{
    
        const remainingBrand = brands.filter(brand=>brand._id !== _id)
        setBrand(remainingBrand)
      })
    }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table flex justify-center items-center">
          {/* head */}
          <thead>
            <tr className="flex justify-around">
              <th>Brand logo </th>
              <th>Brand Name</th>
              <th>CRUD</th>
            </tr>
          </thead>
        </table>
      </div>
      {brands.map((brand) => (
        <AllBrandCard  handleDeleteBrand={handleDeleteBrand} key={brand._id} brand={brand}></AllBrandCard>
      ))}
    </div>
  );
};

export default AllBrand;
