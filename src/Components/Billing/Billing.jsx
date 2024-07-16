import React from 'react'
import "./Billing.css"
import Bill_item from '../Bill Items/Bill_item'
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
                    <form action="">
                        <label for="name">First Name</label>
                        <input type='name'/><br/>

                        <label for="name">Company Name</label>
                        <input type='name'/>
                        <br/>
                        <label for="adress">Street Address</label>
                        <input type='adress'/>
                        <br/>
                        <label for="name">Apartment floor, etc, (optional)</label>
                        <input type='name'/>
                        <br/>
                        <label for="name">First Name</label>
                        <input type='name'/>
                    </form>
                
                </div>
             <div className="bill_summary">
                <Bill_item/>
                <Bill_item/>
                
               <div className="total">
               <p>Subtotal</p><span>$1750</span>                
               </div>
               <div className="total">
               <p>Shipping</p><span>free</span>
               </div>
               <div className="coupon">
                    <input type='text' placeholder='Coupon Code'/>
                    <button>Apply Coupon</button>
                    </div>
                    <button>Place Order</button>
                </div>


            </div>

        </div>
    )
}

export default Billing