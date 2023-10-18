import Banner from "../../components/Banner/Banner";
import Discount from "../../components/Discount/Discount";
import FlashSale from "../../components/FlashSale/FlashSale";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <FlashSale></FlashSale>
      <Discount></Discount>
    </div>
  );
};

export default Home;
