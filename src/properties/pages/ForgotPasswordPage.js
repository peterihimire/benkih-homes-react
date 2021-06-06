import React from "react";
import "./LoginPage.css";
import homeBg from "../../assets/full-modal.svg";
// import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ForgotPasswordPage = (props) => {
  return (
    <div className="auth-item">
      <div className="login-bg-div hidden-xs visible-md visible-xl">
        <img src={homeBg} alt="home" />
      </div>
      <div className="login-form">
        <div className="login-form-content">
          <div className="back-arrow">
            <button className="back-btn" onClick={() => props.history.goBack()}>
              <FaArrowLeft className="arrow-back-icon" />
            </button>
          </div>
          <div className="heading">
            <h2>We got you covered</h2>
            <p>Enter the Email associated with your account.</p>
          </div>
          <form>
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
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
