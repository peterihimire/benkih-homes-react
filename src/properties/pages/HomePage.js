import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navigation/Navbar";
import Banner from "../../shared/components/Banner";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        <div className="main-content">
          <div className="main-content-container">
            <h1>This is the HomePage Q</h1>
            <p>This is the real application</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
