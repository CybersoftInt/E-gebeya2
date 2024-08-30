import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import "./CreateAccount.css";
import SideImage from "../Assets/Login_Side Image.png";
import google_icon from '../Assets/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/authService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const lname = '';
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username: email, password, name, lname });
            toast.success('Account created successfully!');
            navigate('/login');
        } catch (error) {
            setError('Account creation failed. Please try again.');
            console.log(error);
            toast.error('Account creation failed. Please try again.');
        }
    };

    const handleGoogleSuccess = async (response) => {
        try {
            console.log('Google Sign-In Response:', response);
            const res = await fetch('https://localhost:5020/api/Auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ IdToken: response.credential }),
            });

            const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const data = await res.json();
            console.log('Backend Response:', data);
            if (data.success) {
                toast.success('Google Sign-In successful!');
                navigate('/');
            } else {
                toast.error(data.message || 'Google Sign-In failed.');
            }
        } else {
            const text = await res.text();
            console.log('Backend Response Er:', text);
            toast.error('Unexpected response from server.');
        }
        } catch (error) {
            console.error('Error in Google Sign-In:', error);
            toast.error('An error occurred. Please try again.');
        }
    };
    

    return (
        <div className='c-container'>
            <div className="img">
                <img src={SideImage} alt="Shopping illustration" />
            </div>
            <div className="create">
                <div className="sub-login">
                    <h3>Create an account</h3>
                    <p>Enter your details below</p>
                    <form onSubmit={handleCreateAccount}>
                        <div className="input-container">
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder='Email or Phone Number'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                name="pass"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <div className="c-btn">
                            <button type="submit">Create Account</button>
                            <div className="google">
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={() => toast.error('Google Sign-In failed.')}
                                />
                            </div>
                            <p>
                                <span>Already have an account?</span>
                                <Link to="/login"><span id="login">Log in</span></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CreateAccount;
