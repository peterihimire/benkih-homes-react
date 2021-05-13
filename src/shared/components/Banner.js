import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-right">
            <h4>This is the right banner</h4>
          </div>
          <div className="banner-left">
            <h4>This is the left banner</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
