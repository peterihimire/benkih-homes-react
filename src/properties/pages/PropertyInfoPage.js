import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navigation/Navbar";
import PropertiesBanner from "../../shared/components/PropertiesBanner";
// import PropertyBlock from "../../properties/components/PropertyBlock";

const PropertyInfoPage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <PropertiesBanner />
        <div className="main-content">
          <div className="main-content-container">
            {/* <PropertyBlock /> */}
            <h2>This is the property Info page.</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyInfoPage;
