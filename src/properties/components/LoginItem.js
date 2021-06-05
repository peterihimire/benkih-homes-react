import React from "react";
import "./LoginItem.css";
import homeBg from "../../assets/full-modal.svg";

const LoginItem = () => {
  return (
    <div className="auth-item">
      <div className="login-bg-div">
        <img src={homeBg} alt="home" />
      </div>
      <div className="login-form">
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
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginItem;
