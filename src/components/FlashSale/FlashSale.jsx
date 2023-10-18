import { Link } from "react-router-dom";
import "./FlashSale.css";

const FlashSale = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  max-w-screen-xl mx-auto gap-6 my-20">
      <div className="campaing-left flex items-center">
        <div className="ml-8">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 51 }}></span>
              </span>
              sec
            </div>
          </div>
          <h1 className="font-semibold lg:text-4xl text-2xl my-5">
            WOO! Flash Sale
          </h1>
          <Link className="underline mt-10">Shop Now</Link>
        </div>
      </div>
      <div className="campaing-right flex items-center">
        <div className="ml-8 space-y-10">
        <p className="font-semibold">MOBILE APP VERSION</p>
        <h1 className="lg:text-4xl font-medium  ">
          Get Our <span className="text-[#FFBB38] underline">Mobile App</span> 
          <br />
          It’s Make easy for you life !
        </h1>
        <div className="flex gap-x-4 items-center">
          <img src="https://i.ibb.co/QMDntjH/apple-store.png" className="max-w-full" alt="" />
          <img className="max-w-full" src="https://i.ibb.co/HPG4SC3/play-store.png" alt="" />
        </div>
        <img src="https://i.ibb.co/5hdFWs1/app-screen.png"  alt="" />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
