import React, { useState } from "react";
import axios from 'axios';
// import './signUp.css'
import '../SignIn/SignIn.css'
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";




const SignUp = () => {
  
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const[bg,setBg]=useState('');
  

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSignUp=async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      console.log(response.data); // You can handle success here
    } catch (error) {
      console.error(error); // Handle error
    }
  }
  return (
    <>
    <div className="signin">
      <div className="signin-container">
        <div className="dummy-container">
        <h2 className="title signin-title" style={{textAlign:"center",color:"black"}}>Sign Up</h2>
        <div className="signin-input-container">
            <div className="input-item">
                <label htmlFor="email">Enter E-mail Address</label>
                <input type="email" className="input-field" value={formData.email} onChange={handleChange}name="email"/>
            </div>
            <div className="input-item">
                <label htmlFor="pass">Enter Password</label>
                <input type="text" className="input-field" value={formData.password} onChange={handleChange}name="password"/>
            </div>
            {/* <div className="input-item">
                <label htmlFor="pass">Confirm Password</label>
                <input type="password" className="input-field" value={confirmpass} onChange={(e)=>setConfirmPass(e.target.value)}/>
            </div> */}
            <div className="button-container">
                <button className="signin-button"onClick={handleSignUp}>Sign Up</button>
            </div>
            <div className="signup-text">
                <span>Already a user ?</span>
                <Link to="/signin" className="signup-shortcut">Login</Link>
            </div>
        </div>
        <div className="back-button">
        <IoIosCloseCircle className="close-btn" onClick={()=>navigate('/')}/>
        </div>
        </div>
        
      </div>
    </div>
    {errorPopupVisible&&
    <div className="popup"style={{backgroundColor:bg}}>
        {bg==="green"?<FaCheckCircle/>:<IoIosCloseCircle/>}
        <h2 className="popup-message">{errorMessage}</h2>
    </div>}
    </>
  );
};

export default SignUp;
