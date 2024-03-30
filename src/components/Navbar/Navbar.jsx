import React from "react";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { HiMenuAlt1 } from "react-icons/hi";
import "./Navbar.css";
import { app } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Navbar = () => {
  const [users, setUser] = useState();
  const [text, setText] = useState("Login");
  const[toggle,setToggle]=useState(false);
  const[right,setRight]=useState('-100%');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(users.email);
        setText(user.email);
      } else {
        console.log("logged out");
      }
    });
  });

  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth);
    navigate("/");
  };
  const handleProfileToggle=()=>{
    setToggle(!toggle);
  }
  const handleShow=()=>{
    setRight(right === '-100%' ? '0%' : '-100%');
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <h1 className="logo">
            Rona<span className="k">k.</span>
          </h1>
          <ul className="navlist"style={{right:right}}>
            <li>
              <a href="/" className="nav-item"onClick={handleShow}>
                Home
              </a>
            </li>
            <li>
            <a href="#about" className="nav-item"onClick={handleShow}>
                About
              </a>
            </li>
            <li>
            <a href="#portfolio" className="nav-item"onClick={handleShow}>
                Portfolio
              </a>
            </li>
            
            <li>
            <a href="#education" className="nav-item"onClick={handleShow}>
                Education
              </a>
            </li>
            
            <li>
            <a href="#contact" className="nav-item"onClick={handleShow}>
                Contact
              </a>
            </li>
            <li>
              <a href="/signin" className="link nav-item"onClick={handleShow}>
                Login
              </a>
            </li>
          </ul>
          
          <HiMenuAlt1 className="menu-btn" onClick={handleShow}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
