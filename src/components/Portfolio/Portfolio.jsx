import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import AloChefia from "../../img/alochefia.png";
import Pargos from "../../img/pargos.png";
import Henry from "../../img/entrego.png";
import Entrego from "../../img/henry.png";
import BuyCoffe from "../../img/buycoffe.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projetos Recentes</span>
      <span>Portifólio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={AloChefia} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pargos} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Entrego} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Henry} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BuyCoffe} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
