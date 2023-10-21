import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCetagoryProductCard from "../../Products/SingleCetagoryProductCard/SingleCetagoryProductCard";
import DisplaySliderCard from "../../ProductBaseSlider/DisplaySliderCard/DisplaySliderCard";

const BrandProductPage = () => {
  const [categoryProduct, setCetagoryProduct] = useState([]);
  const { id } = useParams();
  const loadedSlider = useLoaderData();
  console.log(loadedSlider);

  const productBaseSlider = loadedSlider.filter(
    (slider) => slider.brandName === id
  );
  console.log(productBaseSlider);

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
      <div>
        {productBaseSlider.map((singleSlider) => (
          <DisplaySliderCard
            key={singleSlider._id}
            singleSlider={singleSlider}
          ></DisplaySliderCard>
        ))}
      </div>
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
