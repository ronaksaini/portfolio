import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaAddressBook, FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMailUnread, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import './Social.css'
const Social = () => {
  return (
    <div className='social'>
      <div className="socials-container">
        <a href="https://leetcode.com/ronaksaini783/"><SiLeetcode/></a>
        <a href="https://www.linkedin.com/in/ronaksaini/"><BsLinkedin/></a>
        <a href="https://github.com/ronaksaini/"><FaGithub/></a>
        <a href="mailto:ronaktanwar0508@gmail.com"><IoIosMailUnread/></a>
      </div>
    </div>
  ) 
}

export default Social
