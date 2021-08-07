import React from "react";
import "./LoginItem.css";
import homeBg from "../../assets/full-modal.svg";
import { FaArrowLeft } from "react-icons/fa";

const LoginItem = (props) => {
  console.log(props);
  return (
    <div className="auth-item">
      <div className="login-bg-div hidden-xs visible-md visible-xl">
        <img src={homeBg} alt="home" />
      </div>
      <div className="login-form">
        <div className="login-form-content">
          <div className="back-arrow">
            <FaArrowLeft className="arrow-back-icon" />
          </div>
          <div className="heading">
            <h2>Login to your account</h2>
            <p>Access all your saved properties, searches, notes and more.</p>
          </div>
          <form>
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="form-field"
                id="name"
                value=""
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="form-field"
                value=""
                id="email"
                onChange={(e) => console.log(e)}
              />
            </div>
            <button type="submit" className="btn btn-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginItem;
