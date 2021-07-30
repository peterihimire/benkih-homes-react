import React from "react";
import "./ProfileBlock.css";
import PropertyItem from "../../properties/components/PropertyItem";
import Pix from "../../assets/profile.png";
// import { FaHome, FaDesktop } from "react-icons/fa";

const ProfileBlock = (props) => {
  console.log(props);
  const { profileProperties, profileUser } = props;
  console.log(profileProperties);
  console.log(profileUser);
  return (
    <div className="profile-container">
      <div className="profile-left">
        {/* <h2>Profile left</h2> */}
        <div className="profile-left-fullwidth">
          <div className="profile-image-container">
            <div className="profile-image">
              <img src={Pix} alt="person" />
            </div>
          </div>
          <h4 className="profile-fullname">{profileUser.fullname}</h4>
          {/* <h6 className="profile-name">peterihimire</h6> */}
          <h6 className="profile-email">{profileUser.email}</h6>
          <div className="profile-edit-btn-container">
            <button className="profile-edit-btn">Edit profile</button>
          </div>
        </div>
      </div>
      <aside className="profile-right">
        {/* <h2>Profile right</h2> */}
        <div>
          <div className="profile-property-block-grid">
            {profileProperties.map((property) => {
              // return console.log(property);
              return (
                <div className="">
                  <PropertyItem properties={property} />
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProfileBlock;
