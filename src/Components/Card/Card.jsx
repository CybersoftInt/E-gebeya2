import React from "react";
import wishimg from "../Assets/Gucci_bag.png";
import "./Card.css";
import card_image from "../Assets/redjoystick.png";
import wish_icon from "../Assets/wishlist-icon.png";
function Card() {
  return (
    <div className="card">
      <div className="card-top">
        <div className="discount">
          <span>-40%</span>
        </div>
        <div className="card-icons">
          <img src={wish_icon} alt="wi" />
        </div>
        <img src={card_image} alt="card image " />
        
        <div className="card-bottom">
          <h3>HAVIT HV-G92 Gamepad</h3>
          <div className="card-price">
          <span>$120</span>
          <span>$160</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
