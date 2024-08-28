import React, { useState } from 'react';
import "./CreateAccount.css";
import SideImage from "../Assets/Login_Side Image.png";
import google_icon from '../Assets/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/authService'; // Import the registerUser function
import { toast, ToastContainer } from 'react-toastify'; // Import toast functions
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

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
            await registerUser({ username: email, password, name,lname });
            toast.success('Account created successfully!');
            navigate('/profile'); // Redirect to profile page after successful account creation
        } catch (error) {
            setError('Account creation failed. Please try again.');
            console.log(error);
            toast.error('Account creation failed. Please try again.');
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
                                <button id='btn2'>
                                    <img src={google_icon} alt="Google icon" /> Sign up with Google
                                </button>
                            </div>
                            <p>
                                <span>Already have an account?</span>
                                <Link to="/login"><span id="login">Log in</span></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer /> {/* Add ToastContainer to display toast notifications */}
        </div>
    );
}

export default CreateAccount;
