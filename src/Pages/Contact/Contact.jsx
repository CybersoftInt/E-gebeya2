
import React from 'react'
import './Contact.css'
import PhoneIcon from "../../Components/Assets/phone-icon.png"
import EmailIcon from "../../Components/Assets/email-icon.png"

const Contact = () => {
  return (
    <div className="page">
      <p><a href="#">Home</a> / <a href="#">Contact</a> </p>
      <div className="container">
        <div className="left">
          <div className="upper">
            <div className="phonetxt">
              <div className="phone">
                <img src={PhoneIcon} alt="Phone" />
              </div>
              <span>Call Us</span>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +2519161111</p>
          </div>
          <hr />
          <div className="lower">
            <div className="phonetxt">
              <div className="phone">
                <img src={EmailIcon} alt="Email" />
              </div>
              <span>Write To Us</span>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="right">
          <form className="form">
            <fieldset id='contact-fieldset'>

              <div className="details">
                <input type="text" name="name" placeholder="Your Name *" required />
                <input type="email" name="email" placeholder="Your Email *" required />
                <input type="tel" name="phone" placeholder="Your Phone *" required />
              </div>
              <textarea name="message" placeholder="Your Message" required></textarea>
              <div className="button-container">
                <button type="submit">Send Message</button>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
