import React from "react";
import "./AboutBanner.css";

const PropertyBanner = (props) => {
  return (
    <div className="about-banner">
      <div className="about-banner-container">
        <div className="about-banner-content">
          <div className="about-banner-left">
            {/* The property banner 'h1' expects a prop named propertyTitle */}
            <h1>{props.propertyTitle}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
