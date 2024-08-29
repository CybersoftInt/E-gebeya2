import React, { useState } from 'react';
import './Billing.css';
import Bill_item from '../Bill Items/Bill_item';
import axios from 'axios';

function Billing() {
    // State for form fields
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        streetAddress: '',
        apartment: '',
        email: '',
        phoneNumber: '',
        currency: 'USD', // Default value
        amount: '' // Set amount based on your logic
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const txRef = `${form.firstName}-${Date.now()}`;

        const payload = {
            ...form,
            txRef,
        };

        console.log('Payload being sent:', payload); // Log payload to verify data

        try {
            const response = await axios.post('http://localhost:5021/api/Payment/accept-payment', payload);
            window.location.href = response.data.data.checkout_url;
            setForm({
                firstName: '',
                lastName: '',
                companyName: '',
                streetAddress: '',
                apartment: '',
                email: '',
                phoneNumber: '',
                currency: 'USD',
                amount: '',
            });
        } catch (error) {
            console.error('Payment error', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className='bill'>
            <div className="bill_header">
                <p>
                    <a href="#">Account/</a>
                    <a href="#">My Account/</a>
                    <a href="#">Product/</a>
                    <a href="#">View cart/</a>
                    <a href="#">CheckOut/</a>
                </p>
                <h1>Billing Details</h1>
            </div>
            <div className="bill_body">
                <div className="bill_form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type='text' 
                            id="firstName" 
                            name="firstName" 
                            value={form.firstName} 
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type='text' 
                            id="lastName" 
                            name="lastName" 
                            value={form.lastName} 
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="companyName">Company Name</label>
                        <input 
                            type='text' 
                            id="companyName" 
                            name="companyName" 
                            value={form.companyName} 
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="streetAddress">Street Address</label>
                        <input 
                            type='text' 
                            id="streetAddress" 
                            name="streetAddress" 
                            value={form.streetAddress} 
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="apartment">Apartment floor, etc (optional)</label>
                        <input 
                            type='text' 
                            id="apartment" 
                            name="apartment" 
                            value={form.apartment} 
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="email">Email</label>
                        <input 
                            type='email' 
                            id="email" 
                            name="email" 
                            value={form.email} 
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input 
                            type='text' 
                            id="phoneNumber" 
                            name="phoneNumber" 
                            value={form.phoneNumber} 
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="currency">Currency</label>
                        <input 
                            type='text' 
                            id="currency" 
                            name="currency" 
                            value={form.currency} 
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="amount">Amount</label>
                        <input 
                            type='number' 
                            id="amount" 
                            name="amount" 
                            value={form.amount} 
                            onChange={handleChange}
                        /><br/>

                        <button type="submit">Place Order</button>
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
                </div>
            </div>
        </div>
    );
}

export default Billing;
