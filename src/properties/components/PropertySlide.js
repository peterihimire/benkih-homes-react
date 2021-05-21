import React from "react";
import "./PropertySlide.css";
import ItemsCarousel from "react-items-carousel";
import PropertyItem from "../components/PropertyItem";
import properties from "../../property-items";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const PropertySlide = () => {
  console.log(properties);
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 20;
  return (
    <div className="property-slide">
      <div className="property-slide-container">
        <div className="hidden-xs">
          <div className="carousel">
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={10}
                freeScrolling={true}
                outsideChevron={true}
                leftChevron={
                  <button className="chev-btn">
                    {<FaChevronLeft className="arrow-icon" />}
                  </button>
                }
                rightChevron={
                  <button className="chev-btn">
                    {<FaChevronRight className="arrow-icon" />}
                  </button>
                }
                chevronWidth={chevronWidth}
                showSlither={true}
                disableSwipe={true}
                // infiniteLoop={true}
              >
                {properties.map((property) => {
                  return (
                    <PropertyItem properties={property} key={property.id} />
                  );
                })}
              </ItemsCarousel>
            </div>
          </div>
        </div>

        <div className="visible-xs hidden-md ">
          <div className="carousel">
            <div>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1.1}
                gutter={10}
                freeScrolling={true}
                outsideChevron={true}
                chevronWidth={chevronWidth}
                showSlither={true}

                // infiniteLoop={true}
              >
                {properties.map((property) => {
                  return (
                    <PropertyItem properties={property} key={property.id} />
                  );
                })}
              </ItemsCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySlide;
