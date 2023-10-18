// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" flex items-center  banner-section">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="lg:ml-44 ml-10">
                <span className="text-blue-600 font-medium text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="lg:text-5xl text-2xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn btn-primary mt-5 px-12">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center  banner-section">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="lg:ml-44 ml-10">
                <span className="text-blue-600 font-medium text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="lg:text-5xl text-2xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn btn-primary mt-5 px-12">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center  banner-section">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="lg:ml-44 ml-10">
                <span className="text-blue-600 font-medium text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="lg:text-5xl text-2xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn btn-primary mt-5 px-12">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;