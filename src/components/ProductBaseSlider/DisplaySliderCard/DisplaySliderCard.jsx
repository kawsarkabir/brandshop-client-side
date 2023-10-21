import PropTypes from "prop-types";
import "./DisplaySliderCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
const DisplaySliderCard = ({ singleSlider }) => {
  console.log(singleSlider);
  const { sliderTitle, sliderDecs } = singleSlider || {};
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
          <div className=" flex items-center">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="lg:ml-44 ml-10">
                <span className="text-[#FFBB38] font-medium text-3xl mb-6">
                  {sliderTitle}
                </span>
                <p className="my-3 w-3/4">{sliderDecs}</p>
                <button className="btn bg-[#FFBB38] border-none mt-5 px-12">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className=" flex items-center">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="lg:ml-44 ml-10">
                <span className="text-[#FFBB38] font-medium text-3xl mb-6">
                  {sliderTitle}
                </span>
                <p className="my-3 w-3/4">{sliderDecs}</p>
                <button className="btn bg-[#FFBB38] border-none mt-5 px-12">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className=" flex items-center">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div className="lg:ml-44 ml-10">
                <span className="text-[#FFBB38] font-medium text-3xl mb-6">
                  {sliderTitle}
                </span>
                <p className="my-3 w-3/4">{sliderDecs}</p>
                <button className="btn bg-[#FFBB38] border-none mt-5 px-12">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
DisplaySliderCard.propTypes = {
  singleSlider: PropTypes.object,
};
export default DisplaySliderCard;
