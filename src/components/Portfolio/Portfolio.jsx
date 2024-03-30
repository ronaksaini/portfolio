import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './Portfolio.css'
import crypto from '../images/crypto.png'
import gym from '../images/gymxtream.png'
import dash from '../images/admin.jpg'
import ecom from '../images/ecommerce.jpg'
import projects from "../data";
const Portfolio = () => {
  // const [data,setData]=useState();
  // setData(projects);
  console.log(projects);    
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="title" style={{textAlign:"center"}}>My Portfolio</h2>
        <div className="portfolio-container-tabs">
        <Tabs>
          <TabList style={{textAlign:"center"}} className="tablist">
            <Tab className="tab-name">All</Tab>
            <Tab className="tab-name">UI/UX Design</Tab>
            <Tab className="tab-name">Website Design</Tab>
          </TabList>

          <TabPanel className="tab-panel">
            <div className="tab-panel-container">
            
            {projects.map((project) => (
                <div className="tab-panel-item" key={project.id}>
                    <img src={project.img} alt="img" />
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                    {/* Uncomment below if you want to add a "Read more" button */}
                    {/* <button className="read-more">Read more</button> */}
                </div>
            ))}
        
            </div>
          </TabPanel>
          <TabPanel className="tab-panel">
            <div className="tab-panel-container">
            <div className="tab-panel-item">
                <img src={dash}  alt="img" />
                <h2>Admin Dashboard Design</h2>
                <p>Presenting a sleek and user-friendly design for our React-based Admin Dashboard. The thoughtfully crafted interface prioritizes clarity and simplicity, providing a visually appealing overview for administrators. While functionality is pending, the design lays the foundation for a robust and efficient administrative experience.</p>
                {/* <button className="read-more">Read more</button> */}
                </div>
                <div className="tab-panel-item">
                <img src={ecom}  alt="img" />
                <h2>E-commerce Store Design</h2>
                <p>Meticulously designed using React JS, our e-commerce website features a visually captivating and user-centric design. With a focus on aesthetics and user experience, the design showcases a modern and intuitive interface, setting the stage for seamless functionality integration.</p>
                {/* <button className="read-more">Read more</button> */}
                </div>
            </div>
          </TabPanel>
          <TabPanel className="tab-panel">
          <div className="tab-panel-container">
            <div className="tab-panel-item">
                <img src={crypto} alt="img" />
                <h2>CyptoVerse - A Cryptocurrency App</h2>
                <p>Designed and implemented a dynamic cryptocurrency website, leveraging APIs to fetch real-time coin data and utilizing Chart.js for
interactive chart visualizations.</p>
                {/* <button className="read-more">Read more</button> */}
                </div>
                <div className="tab-panel-item">
                <img src={gym} alt="img" />
                <h2>GymXtream - A Gym Website</h2>
                <p>Engineered a fitness website using React.js, combining intuitive user interfaces with seamless navigation.</p>
                {/* <button className="read-more">Read more</button> */}
                </div>
            </div>
          </TabPanel>
        </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
