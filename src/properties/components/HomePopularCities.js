import React from "react";
import "./HomePopularCities.css";
import properties from "../../property-items";
import property3 from "../../assets/property-3.jpg";
import property4 from "../../assets/property-4.jpg";
import property5 from "../../assets/property-5.jpg";
import property9 from "../../assets/property-9.jpg";

const HomePopularCities = () => {
  console.log(properties);
  const lekkiProperty = properties.filter((property) => {
    return property.location === "Lekki";
  });

  const abujaProperty = properties.filter((property) => {
    return property.location === "Abuja";
  });

  const ikoyiProperty = properties.filter((property) => {
    return property.location === "Ikoyi";
  });

  const ikejaProperty = properties.filter((property) => {
    return property.location === "Ikeja";
  });
  console.log(lekkiProperty);
  console.log(abujaProperty);
  console.log(ikoyiProperty);
  console.log(ikejaProperty);
  properties.map((propa) => {
    return console.log(propa.location);
  });

  return (
    <div className="home-popular-cities">
      <h4>HomePopularCities compoent</h4>
      <div className="home-popular-container">
        <div className="home-popular-item">
          <div className="home-popular-img">
            <img src={property3} alt="home" />
          </div>
          <div>
            <h4>Lekki</h4>
            <p>
              {lekkiProperty.length} <span>Properties Listed</span>
            </p>
          </div>
        </div>
        <div className="home-popular-item">
          <div className="home-popular-img">
            <img src={property4} alt="home" />
          </div>
          <div>
            <h4>Abuja</h4>
            <p>
              {abujaProperty.length} <span>Properties Listed</span>
            </p>
          </div>
        </div>
        <div className="home-popular-item">
          <div className="home-popular-img">
            <img src={property5} alt="home" />
          </div>
          <div>
            <h4>Ikoyi</h4>
            <p>
              {ikoyiProperty.length} <span>Properties Listed</span>
            </p>
          </div>
        </div>
        <div className="home-popular-item">
          <div className="home-popular-img">
            <img src={property9} alt="home" />
          </div>
          <div>
            <h4>Ikeja</h4>
            <p>
              {ikejaProperty.length} <span>Properties Listed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePopularCities;
