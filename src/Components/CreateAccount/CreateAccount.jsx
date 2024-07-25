import React from 'react';
import "./CreateAccount.css";
import SideImage from "../Assets/Login_Side Image.png";
import google_icon from '../Assets/google.png'


function CreateAccount() {
    return (
        <div className='c-container'>
            <div className="img">
                <img src={SideImage} alt="Shopping illustration" />
            </div>
            <div className="login">
                <div className="sub-login">
                    <h3>Create an account</h3>
                    <p>Enter your details below</p>
                    <div className="input-container">
                        <input type="text" name='name' placeholder='Name' />
                        <input type="text" name="email" placeholder='Email or Phone Number' />
                        <input type="password" name="pass" placeholder='Password' />
                    </div>
                </div>
                <div className="c-btn">
                    <button>Create Account</button>
                    <div className="google">
                    <button id='btn2'><img src={google_icon} alt="" />  sign up with Google </button>
                    
                    </div>
                    <p><span>Already have account ?</span><a href='#'> Log in</a></p>

                </div>
            </div>
        </div>
    );
}

export default CreateAccount;