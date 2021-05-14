import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navigation/Navbar";
import Banner from "../../shared/components/Banner";
import HomeAbout from "../../properties/components/HomeAbout";
import HomeRecent from "../../properties/components/HomeRecent";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        <div className="main-content">
          <div className="main-content-container">
            <HomeAbout />
            <HomeRecent />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
