import React, { useContext, useState, useCallback, useEffect } from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navigation/Navbar";
import ProfileBanner from "../../shared/components/ProfileBanner";
// import AboutBlock from "../../properties/components/AboutBlock";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import ProfileBlock from "../../user/components/ProfileBlock";

const ProfilePage = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  console.log(auth.token);
  const [user, setUser] = useState({});
  const [userProperties, setUserProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  console.log(user);
  console.log(userProperties);
  const [error, setError] = useState();

  // GET THE PROFILE USER ACCOUNT
  const getCurrentUser = useCallback(() => {
    setIsLoading(true);
    if (!auth.userId || auth.userId === "" || auth.userId === undefined) {
      return setIsLoading(true);
    }
    fetch(`http://127.0.0.1:4000/api/users/${auth.userId}`, {
      headers: {
        Authorization: "Bearer " + auth.token,
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
            console.log(res.user);
            const loadedUser = res.user;
            setUser(loadedUser);
            setUserProperties(res.user.properties);
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
  }, [auth.token, auth.userId]);

  useEffect(() => {
    //  THIS METHOD MAKES SURE THAT IF NO USER-ID THEN LOADING SPINNER ELSE THE METHOD WORKS, THE DEPENDENCY IS AUTH.USERID

    if (!auth.token) {
      setIsLoading(true);
    }
    getCurrentUser();
  }, [auth.token, getCurrentUser]);

  // REMOVES THE ERROR MODAL
  const errorModalHandler = () => {
    setError("");
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorModalHandler} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div id="page-container" className="App">
        <div id="content-wrapper">
          <Navbar />
          <ProfileBanner name={user.fullname} />
          <div className="main-content">
            <div className="main-content-container">
              {/* <AboutBlock /> */}
              {/* <h3>This is the profile Page</h3> */}
              <ProfileBlock
                profileProperties={userProperties}
                profileUser={user}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
