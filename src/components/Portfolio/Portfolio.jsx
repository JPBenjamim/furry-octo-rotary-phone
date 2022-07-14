import React, { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import AloChefia from '../../img/alochefia.png'
import Pargos from '../../img/pargos.png'
import Henry from '../../img/entrego.png'
import Entrego from '../../img/henry.png'
import BuyCoffe from '../../img/buycoffe.png'
import litto from '../../img/litto.jpg'
import mega from '../../img/mega.jpg'
import imobi from '../../img/imobi.jpg'
import { themeContext } from '../../Context'
const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Projetos Recentes</span>
      <span>Portifólio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://alochefia.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={AloChefia} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://littolins.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            {' '}
            <img src={litto} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://megaforca.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            {' '}
            <img src={mega} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://imobil.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={imobi} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://buymecoffe.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={BuyCoffe} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://pargosclube.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={Pargos} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Entrego} alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img src={Henry} alt="" />
          
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Portfolio
