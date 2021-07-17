import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navigation/Navbar";
import AboutBanner from "../../shared/components/AboutBanner";
// import AboutBlock from "../../properties/components/AboutBlock";

const ProfilePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <AboutBanner />
        <div className="main-content">
          <div className="main-content-container">
            {/* <AboutBlock /> */}
            <h3>This is the profile Page</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
