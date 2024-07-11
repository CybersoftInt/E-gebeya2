import React from "react";
import "../Footer/Footer.css";
import insta from '../Assets/instagram-logo.png'
import fb from '../Assets/facebook-logo.png'
function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="subscribe">
          <h2>E-Gebeya</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter Your email" />
        </div>
        <div className="support">
          <h3>Support</h3>
          <ul>
            <li> Yabets and Henock,</li>
            <li>Addis Ababa, Ethiopia</li>
            <li>@eGebeya@gmail.com</li>
            <li>+251-976-678-541</li>
          </ul>
        </div>
        <div className="support">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            {/* <li>Shop</li> */}
          </ul>
        </div>
        <div className="support">
          <h3>Quick Link </h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="socials">
          <h3> Follow us on socials </h3>
          <ul>
            <li><img src={fb}></img></li>
            <li>twr</li>
            <li>in</li>
            <li>li</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
