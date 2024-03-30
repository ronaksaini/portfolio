import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMailUnread, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import Social from "../Socials/Social";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-text-container">
          <h3 className="hello">Hello,</h3>
          <h1 className="me">
            I'm <span className="name">Ronak</span> Saini
          </h1>
          <h2 className="profile">
            <Typewriter
              options={{
                strings: ["Frontend web Developer", "Freelancer","Graphic Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
