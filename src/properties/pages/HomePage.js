import React from "react";
import Footer from "../../shared/components/Footer";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1>Lets get to work Q</h1>
        <p>This is the real application</p>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
