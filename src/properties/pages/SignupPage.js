import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import { FaArrowLeft } from "react-icons/fa";

const SignupPage = (props) => {
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
            <h2>Create an account with us.</h2>
            <p>To access all properties, searches, notes and more.</p>
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
                placeholder="Email Address"
                className="form-field"
                value=""
                id="email"
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="form-field"
                id="password"
                value=""
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="form-group">
              <input
                name="confirm-password"
                type="confirm-password"
                placeholder="Confirm password"
                className="form-field"
                value=""
                id="confirm-password"
                onChange={(e) => console.log(e)}
              />
            </div>
            <button type="submit" className="btn btn-full">
              SignUp
            </button>
            <div className="alt-auth-div">
              <p>
                Already have an account ?
                <span>
                  <Link to="/login" className="alt-auth">
                    <b> Sign In</b>
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
