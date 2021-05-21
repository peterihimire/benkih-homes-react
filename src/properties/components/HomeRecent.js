import React from "react";
import "./HomeRecent.css";
import PropertySlide from '../components/PropertySlide';

const HomeRecent = () => {
  return (
    <div className="home-recent">
      <h5>recent</h5>
      <h4>recently added properties</h4>
      <div className="">
        <h5>find more properties</h5>
        <PropertySlide />
      </div>
    </div>
  );
};

export default HomeRecent;
