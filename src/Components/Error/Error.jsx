import React from 'react';
import './Error.css';

function Error() {
    return (
        <div className='error-container'>
            <div className='error-content'>
                <div className='error-navigation'>
                    <a href="/">Home</a><span> / </span><a href="#">404 Error</a>
                </div>
                <div className='error-message'>
                    <h1>404 Not Found</h1>
                    <p>The page you visited could not be found. You may return to the home page.</p>
                </div>
                <button onClick={() => window.location.href = '/'}>Back to Home Page</button>
            </div>
        </div>
    );
}

export default Error;
