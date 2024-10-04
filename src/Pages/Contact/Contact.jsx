import React, { useState } from 'react';
import './Contact.css';
import PhoneIcon from "../../Components/Assets/phone-icon.png";
import EmailIcon from "../../Components/Assets/email-icon.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://localhost:5020/api/Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        console.log(response);
        const errorText = await response.text();
        setStatus(`Failed to send message: ${errorText}`);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="page">
      <p><a href="#">Home</a> / <a href="#">Contact</a></p>
      <div className="contact-container">
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
            <p>Email: customer@Egebeya.com</p>
            <p>Email: support@Egebeya.com</p>
          </div>
        </div>
        <div className="right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <fieldset id='contact-fieldset'>
              <div className="details">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="button-container">
                <button type="submit">Send Message</button>
              </div>
              {status && <p className="status-message">{status}</p>}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
