import React, { useEffect, useState, useCallback, useContext } from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navigation/Navbar";
import PropertyBanner from "../../shared/components/PropertyBanner";
import PropertyInfoBlock from "../../properties/components/PropertyInfoBlock";
import PropertyInfoTextBlock from "../../properties/components/PropertyInfoTextBlock";
import { AuthContext } from "../../shared/context/auth-context";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const PropertyInfoPage = (props) => {
  const auth = useContext(AuthContext);
  console.log(auth);
  console.log(auth.token);

  const [property, setProperty] = useState([]);

  const [propertyId, setPropertyId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(property);

  // GETTING A SINGLE PROPERTY
  const getProperty = useCallback(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/properties/${propertyId}`, {
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
            console.log(res.property);
            setProperty(res.property);
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
  }, [propertyId]);

  useEffect(() => {
    setIsLoading(true);

    getProperty();
  }, [getProperty]);

  // collecting the scapeid from the url using params
  useEffect(() => {
    setPropertyId(props.match.params.propertyId);
  }, [props.match.params.propertyId]);

  // REMOVES THE ERROR MODAL
  const errorModalHandler = () => {
    setError("");
  };
  return (
    <>
      <ErrorModal error={error} onClear={errorModalHandler} />
      {isLoading && <LoadingSpinner asOverlay />}
      {property && (
        <div id="page-container" className="App">
          <div id="content-wrapper">
            <Navbar />
            <PropertyBanner
              // The property banner recieves a prop named propertyTitle
              propertyTitle={property.title}
            />

            {<PropertyInfoBlock propertyImgs={property.propertyImages} />}
            <div className="main-content">
              <div className="main-content-container">
                {<PropertyInfoTextBlock property={property} />}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default PropertyInfoPage;
