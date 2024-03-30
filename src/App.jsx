import React from 'react'
import './App.css'
import SignInPage from './components/Pages/SignInPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage'
import SignUpPage from './components/Pages/SignUpPage'
import EducationPage from './components/Pages/EducationPage';

const App = () => {
  return (

  
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>
      </Router>
    
  )
}

export default App
