import React from "react";
// import LoginItem from "../../properties/components/LoginItem";
import "./LoginPage.css";
import homeBg from "../../assets/full-modal.svg";
import { FaArrowLeft } from "react-icons/fa";

const LoginPage = (props) => {
  console.log(props);
  return (
    // <div>
    //   <LoginItem />
    // </div>
    <div className="auth-item">
      <div className="login-bg-div hidden-xs visible-md visible-xl">
        <img src={homeBg} alt="home" />
      </div>
      <div className="login-form">
        <div className="login-form-content">
          <div className="back-arrow">
            <button className='back-btn' onClick={() => props.history.goBack()}>
              <FaArrowLeft className="arrow-back-icon" />
            </button>
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

export default LoginPage;
