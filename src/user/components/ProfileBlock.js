import React from "react";
import "./ProfileBlock.css";
import PropertyItem from "../../properties/components/PropertyItem";
// import { FaHome, FaDesktop } from "react-icons/fa";

const ProfileBlock = (props) => {
  console.log(props);
  const {profileProperties } = props;
  console.log(profileProperties)
  return (
    <div className="profile-container">
      <div className="profile-left">
        {/* <h2>Profile left</h2> */}
        <div className="profile-image-container">
          <div className="profile-image">
            <img src="../.." alt='person'/>
          </div>
        </div>
        <h4 className="profile-fullname">Peter Ihimire</h4>
        <h6 className="profile-name">peterihimire</h6>
        <h6 className="profile-email">peterihimire@gmail.com</h6>
        <div>
          <button className="profile-edit-btn">Edit profile</button>
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
