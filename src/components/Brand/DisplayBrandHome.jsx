import DisplayBrandCard from "./DisplayBrandCard";

const DisplayBrandHome = ({ brands }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold my-4">Shop by brand</h1>
      <div className="custom-grid">
        {brands.map((brand) => (
          <DisplayBrandCard key={brand._id} brand={brand}></DisplayBrandCard>
        ))}
      </div>
    </div>
  );
};

export default DisplayBrandHome;
