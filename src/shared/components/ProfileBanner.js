import React, { useContext } from "react";
import "./ProfileBanner.css";
import { AuthContext } from "../../shared/context/auth-context";

const ProfileBanner = (props) => {
  console.log(props);
  const auth = useContext(AuthContext);
  console.log(auth);

  return (
    <div className="profile-banner">
      <div className="profile-banner-container">
        <div className="profile-banner-content">
          <div className="profile-banner-left">
            <h1>{props.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
