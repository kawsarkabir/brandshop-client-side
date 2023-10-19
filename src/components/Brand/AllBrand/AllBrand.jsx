import { useLoaderData } from "react-router-dom";
import AllBrandCard from "../AllBrandCard/AllBrandCard";

const AllBrand = () => {
  const allbrand = useLoaderData();
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
      {allbrand.map((brand) => (
        <AllBrandCard key={brand._id} brand={brand}></AllBrandCard>
      ))}
    </div>
  );
};

export default AllBrand;
