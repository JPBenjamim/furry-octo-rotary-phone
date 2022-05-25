import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Landing Pages de</span>
          <span>Alta Conversão</span>
          <span>
            Desenvolvedor FrontEnd React, apaixonado pelo código, pelas possibilidades. <br />
            Deixa eu te ajudar a colocar sua idéia online.
          </span>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5521983729141&text=Eu%20quero%20uma%20p%C3%A1gina%20de%20alta%20convers%C3%A3o" target="_blank" rel="noreferrer">
          <button className="button i-button">Eu quero!</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/JPBenjamim"  target="_blank" rel="noreferrer"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/jpbenjamim/" target="_blank" rel="noreferrer" > <img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/devbenjamim/"  target="_blank" rel="noreferrer"><img src={Instagram} alt="" /></a>
          
         
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Alta" text2="Conversão" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Qualidade" text2="Garantida" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
