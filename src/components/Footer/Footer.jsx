import React from 'react'
import './Footer.css'
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io'
import { FaFacebookSquare, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-col">
        <h1 className="logo footer-logo">
            Rona<span className="k1">k.</span>
          </h1>
          <p className="footer-address">Jaipur, Rajasthan</p>
          <p className="footer-copyright">Copyright @2024 All rights reserved</p>
        </div>
        <div className="footer-col">
            <div className="footer-icons">
            <Link to={`mailto:"ronaktanwar0508@gmail.com"`}className='socials'target="_blank"><IoMdMail className='footer-contact-icon'/></Link>
            <Link to='https://www.linkedin.com/in/ronaksaini/'className='socials'target="_blank"><IoLogoLinkedin className='footer-contact-icon'/></Link>
            <Link to='https://leetcode.com/ronaksaini783/'className='socials'target="_blank"><FaFacebookSquare className='footer-contact-icon'/></Link>
           <Link to='https://github.com/ronaksaini/'className='socials'target="_blank"> <FaGithub className='footer-contact-icon'/></Link>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
