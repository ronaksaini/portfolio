import React from "react";
import "./About.css";
import me from "../images/me.jpeg";
const About = () => {
  return (
    <div className="about"id="about">
      <div className="about-container">
        <div className="about-image-container">
          <img src={me} alt="" />
        </div>
        <div className="about-text-container">
          <h2 className="title">About me</h2>
          <p>
            My name is Ronak. I'm from Jaipur, Rajasthan <br />
            Currently, I'm pursuing my Bachelor's in Technology from        
            Computer Science stream from Jaipur Engineering College and Research Centre University. <br />
            I'm a frontend web developer having expertise in crafting dynamic and visually appealing user interfaces. Armed with a strong foundation in HTML5, CSS3, JavaScript and React Js, I seamlessly blend creativity with technical proficiency to bring websites to life.
          </p>
          <div className="button-container">
            <a className="contact-btn info-btn" href="https://drive.google.com/file/d/1iU2hXChMh9roDOWuKvwlyf0Dxgx3jsbD/view?usp=drive_link" target="_blank">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
