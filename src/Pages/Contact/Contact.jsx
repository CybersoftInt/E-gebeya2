import React from 'react'
import "../Contact/Contact.css"
import PhoneIcon from "../../Components/Assets/phone-icon.png"
import EmailIcon from "../../Components/Assets/email-icon.png"
function Contact() {
  return (
    <div className='page'>
      <p>Home / Contact</p>
      <div className="container">
        <div className="left">
          <div className="upper">
            <div className="phonetxt">
              <div className="phone">
                <img src={PhoneIcon} alt="" />
              </div>
              <span>Call Us</span>
            </div>

            <p>We are available 24/7, 7 days a week</p>
            <p>Phone: +2519113454</p>
          </div>

        </div>

        <div className="lower">
          <div className="phonetxt">
            <div className="phone">
              <img src={EmailIcon} alt="" />
            </div>
            <span>Write to Us</span>
          </div>

          <p>Fill out the form and we will contact you within 24 hours</p>
          <p>Email: hdgfhdg@gmail.com</p>
        </div>
        <div className="right">
          <div className="form">
            <fieldset>
              <div className="details">
                <label htmlFor="name">
                  <input type="text" placeholder='Your Name *' />
                </label>
                <label htmlFor="Email">
                  <input type="email" name="email" id="" placeholder='Your Email *' />
                </label>
                <label htmlFor="phone">
                  <input type="number" name="pno" id="" placeholder='Your Phone *' />
                </label>
              </div>
              <textarea name="comment" id="" placeholder='Your Message'></textarea>
              <button type="submit">Send Message</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact