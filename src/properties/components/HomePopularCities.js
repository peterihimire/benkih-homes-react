import React from "react";
import "./HomePopularCities.css";
import properties from "../../property-items";

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
    </div>
  );
};

export default HomePopularCities;
