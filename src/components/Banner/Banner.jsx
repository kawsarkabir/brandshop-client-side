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
          <div className=" flex items-center lg:h-[85vh] banner-section">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="ml-44">
                <span className="text-[#AEAEE4] text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="text-5xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn btn-primary mt-5">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center lg:h-[85vh] banner-section">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="ml-44">
                <span className="text-[#AEAEE4] text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="text-5xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn btn-primary mt-5">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center lg:h-[85vh] banner-section">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="ml-44">
                <span className="text-[#AEAEE4] text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="text-5xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn btn-primary mt-5">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
