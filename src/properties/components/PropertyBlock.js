import React, { useCallback, useState, useEffect,  } from "react";
import "./PropertyBlock.css";
// import profIcon from "../../assets/profile.png";
import PropertyItem from "../components/PropertyItem";
import properties from "../../property-items";
// import { AuthContext } from "../../shared/context/auth-context";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const PropertyBlock = () => {
  console.log(properties);
  // const auth = useContext(AuthContext);
  // console.log(auth);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // GETTING ALL PROPERTIES
  const getAllProperties = useCallback(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/post`, {
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
            console.log(res.data);
            console.log(
              res.data.map((coordina) =>
                console.log(coordina.latitude, coordina.longitude),
              ),
            );
            console.log(res.data.longitude);
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

  return (
    <>
    <div className="property-block">
      <div className="property-block-search">
        <p>search</p>
      </div>

      <div className="">
        <div className="property-block-grid">
          {properties.map((property) => {
            // return console.log(property);
            return (
              <div className="">
                <PropertyItem properties={property} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default PropertyBlock;
