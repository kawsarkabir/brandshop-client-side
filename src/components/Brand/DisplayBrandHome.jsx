import DisplayBrandCard from "./DisplayBrandCard";
import PropTypes from "prop-types";
const DisplayBrandHome = ({ brands }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold my-4">Shop by brand</h1>
      <div className="custom-grid">
        {brands?.map((brand) => (
          <DisplayBrandCard key={brand._id} brand={brand}></DisplayBrandCard>
        ))}
      </div>
    </div>
  );
};
DisplayBrandHome.propTypes = {
  brands: PropTypes.object,
};
export default DisplayBrandHome;
