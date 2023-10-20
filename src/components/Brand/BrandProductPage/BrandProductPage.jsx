import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../Banner/Banner";
import SingleCetagoryProductCard from "../../Products/SingleCetagoryProductCard/SingleCetagoryProductCard";

const BrandProductPage = () => {
  const [categoryProduct, setCetagoryProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://brand-shop-server-one-bice.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const brandProduct = data.filter(
          (cetagoriesItem) => cetagoriesItem.category === id
        );
        setCetagoryProduct(brandProduct);
      });
  }, [id]);
  return (
    <>
    <Banner></Banner>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-5 mt-20">
        {categoryProduct.map((singleCetagoryProduct) => (
          <SingleCetagoryProductCard
            key={singleCetagoryProduct._id}
            singleCetagoryProduct={singleCetagoryProduct}
          ></SingleCetagoryProductCard>
        ))}
      </div>
    </>
  );
};

export default BrandProductPage;
