import React, { useContext } from "react";
import "./Works.css";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import ReactLogo from "../../img/react.png";
import WordPress from "../../img/wp.png";
import Jslogo from "../../img/jslogo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Paginas de alta conversão.
          </span>
          <span>Landing Pages, sites, Ecommerce.</span>
          <spane>
            Entregamos sua Landing Page pronta e online.
            <br />
           Seu site online e pronto para receber seus clientes.
            <br />
            Sua Loja virtual pronta para vendas.
            <br />
            Cuidamos de toda parte de desenvolvimento, hospedagem e dominio!
          </spane>
          <a href="https://api.whatsapp.com/send?phone=5521983729141&text=Eu%20quero%20uma%20p%C3%A1gina%20de%20alta%20convers%C3%A3o" target="_blank" rel="noreferrer">
            <button className="button s-button">Eu quero!</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ReactLogo} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={WordPress} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jslogo} alt="" />
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
