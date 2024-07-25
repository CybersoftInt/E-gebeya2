import React from 'react'
import "./Error.css"
function Error() {
    return (
        <div className='error'>
            <div className="dir">
                <a href="#">Home</a><a href="#">404Error</a>
            </div>
            <div className="text">
            <h1>404 Not Found</h1>
            <p>Your  visited page not found you may go home page </p>
            </div>
            <button>Back to home page</button>
        </div>
    )
}

export default Error