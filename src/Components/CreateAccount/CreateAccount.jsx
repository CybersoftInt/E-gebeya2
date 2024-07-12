import React from 'react'
import './CreateAccount.css'
import login_create from "../Assets/login_create.png"
import google_icon from '../Assets/google.png'
function CreateAccount() {
    return (
        <div class="create_account">
            <div className="image">
                <img src={login_create} alt="" />
            </div>
            <div className="create_form">
                <div className="form_header">
                <h1>Create an account</h1>
                <p>Enter Your details below </p>
                </div>
                <div className="form">
                <form action="">
                    <input type="text" placeholder='Name'/><br/>
                    <input type="email" placeholder='Email or Phone Number' /><br/>
                    <input type="password" placeholder='Passworld' /><br/>
                    <button id='btn1'>Create Account</button><br/>
                    <div className="google">
                    <button id='btn2'><img src={google_icon} alt="" />  sign up with Google </button><br/>
                    </div>
                    <span>Already have account ?</span><span>Log in</span>
                </form>
                </div>
            </div>


        </div>
    )
}

export default CreateAccount