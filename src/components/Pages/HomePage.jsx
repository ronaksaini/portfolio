import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Service from '../Service/Service'
import Portfolio from '../Portfolio/Portfolio'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'           
import Education from '../Education/Education'
import Social from '../Socials/Social'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
      <Header/>
      <About/>
      <Education/>
      <Service/>
      <Portfolio/>
      <Footer/>
      <Social/>     
      {/* <TrailingCursor/> */}
    </div>
  )
}

export default HomePage
