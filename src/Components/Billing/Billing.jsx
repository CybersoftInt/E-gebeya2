import React from 'react'
import "./Billing.css"
function Billing() {
    return (
        <div className='bill'>
            <div className="bill_header">
            <p>
                <a>Account/</a>
                <a>My Account/</a>
                <a>Product/</a>
                <a>View cart/</a>
                <a>CheckOut/</a>
            </p>
            <h1>Billing Details</h1>

            </div >
            <div className="bill_body">
                <div className="bill_form">
                
                </div>
                <div className="bill_summary">
                <div className="bill_items">
                <img/><span>LCD Monitor</span>
                <h3>$650</h3>
                <img/><span>LCD Monitor</span>
                <h3>$650</h3>
                </div>
                <p>Subtotal</p><span>$1750</span>

                </div>

            </div>

        </div>
    )
}

export default Billing