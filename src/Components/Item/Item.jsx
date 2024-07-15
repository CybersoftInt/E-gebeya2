import React from 'react'
import main_image from "../Assets/joystickmain.png"
import "./Item.css"
import side_image1 from "../Assets/PS_side01.png"
import side_image2 from "../Assets/PS_side02.png"
import side_image3 from "../Assets/PS_side03.png"
import side_image4 from "../Assets/PS_side04.png"

import fast_car_icon from "../Assets/fast_car_icon.png"
import recycle_icon from "../Assets/return-icon.png"
function Item() {
    return (
        <div className='item'>
            <div className="item_dir">
                <p><a href="#">Account</a>/<a href="#" >Gaming</a>/<a href="#">Havic HV G-92 Gamepad</a></p>
            </div>
           <div className="item_details">
           <div className="item_images">
            <div className="side_images">

            <img src={side_image1} alt="main image" className="side_image" />
            <img src={side_image2} alt="main image" className="side_image" />
            <img src={side_image3} alt="main image" className="side_image" />
            <img src={side_image4} alt="main image" className="side_image" />

            </div>
            <div className="main_image">
                <img src={main_image} alt="main image" />
            </div>
                
                </div>
            <div className="item_disc">
                <h1>Havic HV G-92 Gamepad</h1>
                <p>(150 reviews) | <span>in stock</span> </p>
                <h2>$192.00</h2>
                <p className='discription'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <hr/>
                <h3>Colours </h3>
                <div className="size">
                <h3>Size </h3>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                </div>
                <div className="buy_ammount">
                    <span>-</span><span>2</span><span>+</span>
                </div>
                <div className="delivery">
                    <div className="free">
                        <img src={fast_car_icon} alt="fast car icon" />
                        <div className="delivery_text">
                            <h1>Free Delivery</h1>
                            <p>Enter your postal code for Delivery Availability</p>
                            </div>
                    </div>
                    <div className="return">
                        <img src={recycle_icon} alt="fast car icon" />
                        <div className="delivery_text">
                            <h1>Return Delivery</h1>
                            <p>Free 30 Days Delivery Returns. Details</p>
                            </div>
                    </div>
                </div>



            </div>
           </div>
            
        </div>
    )
}

export default Item