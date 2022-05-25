import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Super atencioso e prestativo, tirou todas as dúvidas!",
    },
    {
      img: profilePic2,
      review:
        "Como prometido me entregou a página pronta, explicou todos os detalhes, super transparente.",
    },
    {
      img: profilePic3,
      review:
        "Me respondeu rapido, me informou todo passo-a-passo e me entregou antes do prazo.",
    },
    {
      img: profilePic4,
      review:
        "Superou minhas expectativas, para quem não entende muito, sem dúvidas é o melhor custo beneficio, já fiz a indico.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>O que meus </span>
        <span>Clientes</span>
        <span> sobre meu trabalho!</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
