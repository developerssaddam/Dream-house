import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import one from "../../assets/img/1.jpg";
import two from "../../assets/img/2.jpg";
import three from "../../assets/img/3.jpg";
import four from "../../assets/img/4.jpg";

const Slider = () => {
  return (
    <div className="slider_wrapper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        slidesPerView={1}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
