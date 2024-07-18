import React from 'react'
import "../../Components/Login/Login.css"
import SideImage from "../Assets/Login_Side Image.png"
import { upload } from '@testing-library/user-event/dist/upload'
function Login() {
    return (
        <div className='container'>
            <div className="img">
                <img src={SideImage} alt="" />
            </div>
            <div className="login">


                <div className="sub-login">
                    <h3>Log in</h3>
                    <p>Enter your details below</p>
                    <label htmlFor="pass" >
                        <input type="text" name="email" id="" placeholder='Email or Phone Number' />
                        <input type="password" name="pass" id="" placeholder='Password' />
                    </label>
                </div>
                <div className="btn">
                    <button>Log In</button>
                    <span>Forgot Password?</span>
                </div>

            </div>

        </div>
    )
}

export default Login