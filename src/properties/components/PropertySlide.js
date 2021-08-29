import React, { useState, useEffect, useCallback } from "react";
import "./PropertySlide.css";
import ItemsCarousel from "react-items-carousel";
import PropertyItem from "../components/PropertyItem";
// import properties from "../../property-items";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const PropertySlide = () => {
  // console.log(properties);

  // console.log(auth);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // GETTING ALL PROPERTIES
  const getAllProperties = useCallback(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/properties`, {
      headers: {
        // Authorization: "Bearer " + auth.token,
      },
    })
      .then((response) => {
        response
          .json()
          .then((res) => {
            console.log(res);
            if (!response.ok) {
              throw new Error(res.msg);
            }
            setIsLoading(false);
            console.log(res);
            console.log(res.properties);
            setProperties(res.properties);

            // const loadedPosts = res.data;
            // setPosts(loadedPosts);
          })
          .catch((err) => {
            console.log(err);
            // console.log(typeof err);
            setIsLoading(false);
            setError(
              err.message || "You are not Authorized to view this page!",
            );
          });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.msg || "Error occured , please try again!");
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getAllProperties();
  }, [getAllProperties]);

  // REMOVES THE ERROR MODAL
  const errorModalHandler = () => {
    setError("");
  };

  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 50;
  return (
    <>
      <ErrorModal error={error} onClear={errorModalHandler} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="property-slide">
        <div className="property-slide-container">
          {/* FOR LAPTOPS */}
          <div className="hidden-xs  hidden-md visible-xl">
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
                      <div className="one-slide">
                        <PropertyItem properties={property} key={property.id} />
                      </div>
                    );
                  })}
                </ItemsCarousel>
              </div>
            </div>
          </div>
          {/* FOR TABLETS */}
          <div className="hidden-xs visible-md ">
            <div className="carousel">
              <div>
                <ItemsCarousel
                  requestToChangeActive={setActiveItemIndex}
                  activeItemIndex={activeItemIndex}
                  numberOfCards={3}
                  gutter={20}
                  freeScrolling={true}
                  outsideChevron={true}
                  chevronWidth={chevronWidth}
                  showSlither={true}

                  // infiniteLoop={true}
                >
                  {properties.map((property) => {
                    return (
                      <div className="one-slide">
                        <PropertyItem properties={property} key={property.id} />
                      </div>
                    );
                  })}
                </ItemsCarousel>
              </div>
            </div>
          </div>
          {/* FOR PHONES */}
          <div className="visible-xs hidden-md ">
            <div className="carousel">
              <div>
                <ItemsCarousel
                  requestToChangeActive={setActiveItemIndex}
                  activeItemIndex={activeItemIndex}
                  numberOfCards={1}
                  gutter={20}
                  freeScrolling={true}
                  outsideChevron={true}
                  chevronWidth={chevronWidth}
                  showSlither={true}

                  // infiniteLoop={true}
                >
                  {properties.map((property) => {
                    return (
                      <div className="one-slide">
                        <PropertyItem properties={property} key={property.id} />
                      </div>
                    );
                  })}
                </ItemsCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySlide;
