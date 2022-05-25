import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Devbenjamim@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/devbenjamim/" target='_blank' rel="noreferrer"><Insta color="white" size={"3rem"} /></a>

          <a href="https://www.linkedin.com/in/jpbenjamim/" target="_blank" rel="noreferrer"><Linkedin color="white" size={"3rem"} /></a>
          
    
          <a href="https://github.com/JPBenjamim" target="_blank" rel="noreferrer"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
