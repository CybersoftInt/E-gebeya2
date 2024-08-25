// src/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('jwt');
        if (!token) {
            navigate('/login');
        } else {
           
        }
    }, [navigate]);

    return isAuthenticated ? children : null;
}

export default ProtectedRoute;
