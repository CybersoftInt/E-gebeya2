// src/utils/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated, isAdmin } from './authService'; // Adjust the import path as needed

function ProtectedRoute({ children, adminOnly = true }) {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const [isAdminUser, setIsAdminUser] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const checkAuthStatus = () => {
            const authenticated = isAuthenticated();
            setIsAuthChecked(true);
            if (authenticated) {
                setIsAdminUser(isAdmin());
            }
        };
        checkAuthStatus();
    }, []);

    if (!isAuthChecked) {
        // Return null or a loading spinner while authentication status is being checked
        return null; // Or a loading spinner
    }

    if (!isAuthenticated()) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" state={{ from: location }} />;
    }

    if (adminOnly && !isAdminUser) {
        // Redirect to error if not admin and adminOnly is true
        return <Navigate to="/error" state={{ from: location }} />;
    }

    // Render children if authenticated and authorized
    return children;
}

export default ProtectedRoute;
