import React from "react";
import "./HomeAbout.css";
import homeImg from "../../assets/home-1.jpg";

const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="home-about-title">
        <h2>about us</h2>
        <h4>a new way for working with professionals.</h4>
      </div>

      <div className="home-about-content">
        <div className="home-about-img-container">
          <img src={homeImg} alt="home-img" />
        </div>
        <div className="home-about-text-container">
          <p>
            When the time to invest on home comes dont fail to invest with
            bnk-homes and real-estate. we offer competitive home price offer and
            sales that you will always find attractive. Hurry up now and grab
            your best offer now.
          </p>
          <p>
            Our homes and real-estate are located in various part of Nigeria,
            from Benin, Lagos , Imo , Port-Harcourt and Abuja. And they are
            located in the urban and sub-urban areas of the state. Places youll
            always fall in love with once you see it .
          </p>
          <div className="">
            <button className="btn btn-bigger">learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
