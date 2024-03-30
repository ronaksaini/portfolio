import React from 'react'
import './Education.css'
import bser  from  '../images/bser.jpg'
import jecrc from '../images/jecrc.png'
const Education = () => {
  return (
    <div className='education' id='education'>
        <h2 className="title" style={{textAlign:"center",marginBottom:"44px"}}>Education</h2>
      <div className="education-container">
        <div className="education-box">
            <img src={jecrc} alt="" />
            <h2>JECRC University</h2>
            <p className="education-class">B.Tech in Computer Science and Engineering</p>
            <p className="education-year">2020-2024</p>
            <p className="education-marks">Percentage/CGPA - 8.1 CGPA</p>
        </div>

        <div className="education-box">
            <img src={bser} alt="" />
            <h2>Board of Secondary Education, Rajasthan</h2>
            <p className="education-class">Class-XII</p>
            <p className="education-year">2018-2019</p>
            <p className="education-marks">Percentage/CGPA - 88.00%</p>
        </div>

        <div className="education-box">
            <img src={bser} alt="" />
            <h2>Board of Secondary Education, Rajasthan</h2>
            <p className="education-class">Class-X</p>
            <p className="education-year">2016-2017</p>
            <p className="education-marks">Percentage/CGPA - 83.83%</p>
        </div>
      </div>
    </div>
  )
}

export default Education
