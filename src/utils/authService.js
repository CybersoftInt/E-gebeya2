import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const API_URL = 'http://localhost:5021/api/Auth'; // Correct base URL for the API
export const getToken = () => sessionStorage.getItem('jwt');
export const setToken = (token) => sessionStorage.setItem('jwt', token);
export const removeToken = () => sessionStorage.removeItem('jwt');
// Function to register a new user
export const registerUser = async (user) => {
    try {
        const data ={
            firstName: user.name,
            username: user.username,
            lastName: '',  // Correct parameter
            password: user.password
        }
        const url = "http://localhost:5021/api/Auth/register"
        const response = await axios.post(url, data);

        return response.data; // Return the JSON response
    } catch (error) {
        console.error('Error registering user:', error.message);
        throw new Error(error.message); // Rethrow with error message
    }
};

// Function to log in a user
export const loginUser = async (credentials) => {
    try {
        const data ={
            username: credentials.username,
            password: credentials.password,
        }
        const url = "http://localhost:5021/api/Auth/login"
        const response = await axios.post(url, data);

        const token = response.data; 
        sessionStorage.setItem('jwt', response.data); // Store the JWT token in session storage
        sessionStorage.setItem('userName', data.username); // Store the user's first name
        
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error.message);
        throw new Error(error.message); // Rethrow with error message
    }
};
export const isAdmin = () => {
    const token = getToken();
    if (token) {
        try {
            const decoded = jwtDecode(token);
            console.log('Decoded JWT:', decoded);
            const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ||  'user';
            //console.log('Decoded role:', role);
            return role === 'admin';
        } catch (error) {
            console.error('Error decoding JWT:', error);
            return false;
        }
    }
    return false;
};
export const isAuthenticated = () => {
    const token = getToken();
    if (token) {
        try {
            const decoded = jwtDecode(token);
            // Optionally, you can check if the token is expired
            const currentTime = Date.now() / 1000; // Current time in seconds
            if (decoded.exp < currentTime) {
                // Token is expired
                removeToken();
                return false;
            }
            return true;
        } catch (error) {
            console.error('Error decoding JWT:', error);
            return false;
        }
    }
    return false;
};