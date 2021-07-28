import React from "react";
import "./ProfileBlock.css";
// import { FaHome, FaDesktop } from "react-icons/fa";

const ProfileBlock = () => {
  return (
    <div className="profile-container">
      <div className="profile-left">
        <h2>Profile left</h2>
      </div>
      <aside className="profile-right">
        <h2>Profile right</h2>
      </aside>
    </div>
  );
};

export default ProfileBlock;
