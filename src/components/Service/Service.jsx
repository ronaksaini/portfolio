import React from 'react'
import './Service.css'
import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { TbApi, TbFileTypeSql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


const Service = () => {
  return (
    <div className='service'id='service'>
      <div className="service-container">
        <h2 className="title" style={{textAlign:"center"}}>Tech Stack</h2>
        <div className="service-box-container">
            <div className="service-box">
                <FaHtml5 className='service-icon'/>
                <h2 className="service-title">HTML5</h2>
            </div>
            <div className="service-box">
                <FaCss3Alt className='service-icon'/>
                <h2 className="service-title">CSS3</h2>
            </div>
            <div className="service-box">
                <RiJavascriptFill className='service-icon'/>
                <h2 className="service-title">JavaScript</h2>
            </div>
            <div className="service-box">
                <FaReact className='service-icon'/>
                <h2 className="service-title">React Js</h2>
            </div>
            <div className="service-box">
                <BsBootstrapFill className='service-icon'/>
                <h2 className="service-title">Bootstrap</h2>
            </div>
            <div className="service-box">
                <FaJava className='service-icon'/>
                <h2 className="service-title">Java</h2>
            </div>
            <div className="service-box">
                <TbFileTypeSql className='service-icon'/>
                <h2 className="service-title">MySQL</h2>
            </div>
            <div className="service-box">
                <TbApi className='service-icon'/>
                <h2 className="service-title">API</h2>
            </div>
            <div className="service-box">
                <FaNodeJs className='service-icon'/>
                <h2 className="service-title">Node Js</h2>
            </div>
            <div className="service-box">
                <SiExpress className='service-icon'/>
                <h2 className="service-title">Express Js</h2>
            </div>
            <div className="service-box">
                <SiMongodb className='service-icon'/>
                <h2 className="service-title">MongoDB</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
