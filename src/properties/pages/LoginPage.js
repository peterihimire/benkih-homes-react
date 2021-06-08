import React, { Component } from "react";
// import LoginItem from "../../properties/components/LoginItem";
import "./LoginPage.css";
import homeBg from "../../assets/full-modal.svg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class LoginPage extends Component {
  state = {
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
    formValid: false,
    errorMsg: {},
    loading: false,
    error: null,
  };

  // FOR OVERALL FORM VALIDATION
  validateForm = () => {
    const { emailValid, passwordValid } = this.state;
    this.setState({
      formValid: emailValid && passwordValid,
    });
  };

  // FOR EMAIL VALIDATION
  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // Regex checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = "Invalid email format";
    }

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  // FOR PASSWORD VALIDATION
  updatePassword = (password) => {
    this.setState({ password }, this.validatePassword);
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = "Password must be at least 6 characters long";
    } else if (!/\d/.test(password)) {
      passwordValid = false;
      errorMsg.password = "Password must contain a digit";
    }
    // else if (!/[!@#$%^&*]/.test(password)) {
    //   passwordValid = false;
    //   errorMsg.password = "Password must contain special character: !@#$%^&*";
    // }

    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  render() {
    return (
      <div className="auth-item">
        <div className="login-bg-div hidden-xs visible-md visible-xl">
          <img src={homeBg} alt="home" />
        </div>
        <div className="login-form">
          <div className="login-form-content">
            <div className="back-arrow">
              <button
                className="back-btn"
                onClick={() => this.props.history.goBack()}
              >
                <FaArrowLeft className="arrow-back-icon" />
              </button>
            </div>
            <div className="heading">
              <h2>Login to your account</h2>
              <p>Access all your saved properties, searches, notes and more.</p>
            </div>
            <form>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.emailValid}
                  message={this.state.errorMsg.email}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-field"
                  value={this.state.email}
                  id="email"
                  onChange={(e) => this.updateEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.passwordValid}
                  message={this.state.errorMsg.password}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-field"
                  id="password"
                  value={this.state.password}
                  onChange={(e) => this.updatePassword(e.target.value)}
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
  }
}

export default LoginPage;
