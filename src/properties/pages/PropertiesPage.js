import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navigation/Navbar";
import AboutBanner from "../../shared/components/AboutBanner";
// import AboutBlock from "../../properties/components/AboutBlock";

const PropertiesPage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <AboutBanner />
        <div className="main-content">
          <div className="main-content-container">
            {/* <AboutBlock /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
