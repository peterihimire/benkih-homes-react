import React from "react";
import "./ContactItem.css";
import { FaHome, FaDesktop } from "react-icons/fa";

const ContactItem = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="customer-resource-container">
          <div className="customer-resource-icon">
            <FaDesktop className="home-resource-icon" />
          </div>
          <div className="customer-resource-text">
            <h4>customer service contact information:</h4>
            <div className="customer-resource-contacts">
              <p>
                estate.com : <br /> (+234) 813-864-7368 <br />
                customercare@estate.com
              </p>
              <p>
                new homes : <br /> (+234) 813-864-7368 <br />
                newhomes@estate.com
              </p>
              <p>
                rentals : <br /> (+234) 813-864-7368 <br />
                estaterentals@estate.com
              </p>
            </div>
          </div>
        </div>
        <div className="contact-resource-container">
          <div className="contact-resource-title">
            <h4>
              Our professional resource centers were designed to answer many of
              your questions.
            </h4>
          </div>
          <div className="contact-resource">
            <div className="estate-resource">
              <div className="estate-item-icon">
                <FaHome className="home-resource-icon" />
              </div>
              <div className="estate-resource-text">
                <p>estate.com resource center</p>
              </div>
            </div>
            <div className="estate-resource">
              <div className="estate-item-icon">
                <FaHome className="home-resource-icon" />
              </div>
              <div className="estate-resource-text">
                <p>Homebuilding resource center</p>
              </div>
            </div>
            <div className="estate-resource">
              <div className="estate-item-icon">
                <FaHome className="home-resource-icon" />
              </div>
              <div className="estate-resource-text">
                <p>Rental resource center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="contact-right">
        <div className="contact-form-container">
          <h4>Send us a Note</h4>
          <p>
            We welcome your feedback and question to get in touch with us,
            please fill out the information below.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="form-field"
                id="name"
                value=""
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="form-field"
                value=""
                id="email"
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="form-field"
                value=""
                id="subject"
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                className="form-field-textarea"
                id="message"
                value=""
                onChange={(e) => console.log(e)}
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default ContactItem;
