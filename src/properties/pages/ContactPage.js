import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navigation/Navbar";
import ContactBanner from "../../shared/components/ContactBanner";
import ContactItem from "../../properties/components/ContactItem";

const ContactPage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <ContactBanner />
        <div className="main-content">
          <div className="main-content-container">
            <ContactItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
