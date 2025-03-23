import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>
            {currState}
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
          </h2>
        </div>
        
        {/* Toggle between Login & Sign Up */}
        <p onClick={() => setCurrState(currState === "Sign Up" ? "Login" : "Sign Up")} className="toggle-text">
          {currState === "Sign Up" ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
