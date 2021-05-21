import React from "react";
import "./PropertySlide.css";
import ItemsCarousel from "react-items-carousel";
import PropertyItem from "../components/PropertyItem";
import properties from "../../property-items";

const PropertySlide = () => {
  console.log(properties);
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 40;
  return (
    <div className="property-slide">
      <div className="property-slide-container">
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={10}
            freeScrolling={true}
            outsideChevron={true}
            leftChevron={<button>{"<"}</button>}
            rightChevron={<button>{">"}</button>}
            chevronWidth={chevronWidth}
            showSlither={true}
            // infiniteLoop={true}
          >
            {properties.map((property) => {
              return <PropertyItem properties={property} key={property.id} />;
            })}
          </ItemsCarousel>
        </div>
      </div>
    </div>
  );
};

export default PropertySlide;
