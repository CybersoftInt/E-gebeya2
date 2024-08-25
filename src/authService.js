import axios from 'axios';

const API_URL = 'http://localhost:5021/api/Auth'; // Correct base URL for the API

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

        sessionStorage.setItem('jwt', response.data); // Store the JWT token in session storage
        sessionStorage.setItem('userName', data.username); // Store the user's first name
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error.message);
        throw new Error(error.message); // Rethrow with error message
    }
};
