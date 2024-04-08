import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
// import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

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
          <img
            src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQg-Wdv3u7HFkcig9Z0hez0cMk7rSyEOCK5i5bkz8aEw&s"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
