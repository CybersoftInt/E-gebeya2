import React, { useState } from 'react';
import "../../Components/Login/Login.css";
import SideImage from "../Assets/Login_Side Image.png";
import { loginUser } from '../../authService'; // Import the login function
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast functions
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use navigate for programmatic navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await loginUser({ username: email, password });
            sessionStorage.setItem('jwt', token); // Store JWT token in session storage
            sessionStorage.setItem('username', email);
            toast.success(token);
            toast.success('Login successful!');
            navigate('/profile'); // Redirect to home page or desired page after login
        } catch (error) {
            setError('Login failed. Please check your credentials.');
            toast.error('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className='l-container'>
            <div className="img">
                <img src={SideImage} alt="Shopping illustration" />
            </div>
            <div className="login">
                <div className="sub-login">
                    <h3>Log in</h3>
                    <p>Enter your details below</p>
                    <form onSubmit={handleLogin}>
                        <div className="input-container">
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
                        <div className="btn">
                            <button id='login-btn' type="submit">Log In</button>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>
                    </form>
                    <div className="create-account-link">
                        <p><Link to="/create" className="create-account-btn">Don't have an account?</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
