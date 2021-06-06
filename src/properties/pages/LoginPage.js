import React from "react";
// import LoginItem from "../../properties/components/LoginItem";
import "./LoginPage.css";
import homeBg from "../../assets/full-modal.svg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const LoginPage = (props) => {
  console.log(props);
  // const ValidationMessage = (props) => {
  //   if (!props.valid) {
  //     return <div className="error-msg">{props.message}</div>;
  //   }
  //   return null;
  // };

  // const [email, setEmail] = React.useState("");
  // const [emailValid, setEmailValid] = React.useState(false);
  // const [password, setPassword] = React.useState("");
  // const [passwordValid, setPasswordValid] = React.useState(false);
  // const [formValid, setFormValid] = React.useState(false);
  // const [errorMsg, setErrorMsg] = React.useState({});
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);

  // const validateForm = () => {
  //   setFormValid(() => {

  //   })
  // }

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
            <h2>Login to your account</h2>
            <p>Access all your saved properties, searches, notes and more.</p>
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
            <div className="forgot-password-div">
              <p>
                <span>
                  <Link to="/forgot-password" className="alt-auth">
                    <b> Forgot your password ?</b>
                  </Link>
                </span>
              </p>
            </div>
            <button type="submit" className="btn btn-full">
              Login
            </button>
            <div className="alt-auth-div">
              <p>
                Don't have an account ?
                <span>
                  <Link to="/register" className="alt-auth">
                    <b> Sign Up</b>
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

export default LoginPage;
