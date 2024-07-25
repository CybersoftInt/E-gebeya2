import React from 'react';
import "../../Components/Login/Login.css";
import SideImage from "../Assets/Login_Side Image.png";

function Login() {
    return (
        <div className='l-container'>
            <div className="img">
                <img src={SideImage} alt="Shopping illustration" />
            </div>
            <div className="login">
                <div className="sub-login">
                    <h3>Log in</h3>
                    <p>Enter your details below</p>
                    <div className="input-container">
                        <input type="text" name="email" placeholder='Email or Phone Number' />
                        <input type="password" name="pass" placeholder='Password' />
                    </div>
                </div>
                <div className="btn">
                    <button>Log In</button>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;