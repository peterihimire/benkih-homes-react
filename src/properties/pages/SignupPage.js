import React, { Component } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import { FaArrowLeft } from "react-icons/fa";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class SignupPage extends Component {
  state = {
    fullName: "",
    fullNameValid: false,
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
    passwordConfirm: "",
    passwordConfirmValid: false,
    adminCode: "12345",
    adminCodeValid: false,
    formValid: false,
    errorMsg: {},
    loading: false,
    error: "",
  };

  // FOR OVERALL FORM VALIDATION
  validateForm = () => {
    const {
      fullNameValid,
      emailValid,
      passwordValid,
      passwordConfirmValid,
    } = this.state;
    this.setState({
      formValid:
        fullNameValid && emailValid && passwordValid && passwordConfirmValid,
    });
  };

  // FOR FULLNAME VALIDATION
  updateFullName = (fullName) => {
    this.setState({ fullName }, this.validateFullName);
  };

  validateFullName = () => {
    const { fullName } = this.state;
    let fullNameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (fullName.length < 7) {
      fullNameValid = false;
      errorMsg.fullName = "Must be at least 3 characters long";
    }

    this.setState({ fullNameValid, errorMsg }, this.validateForm);
  };

  // FOR EMAIL VALIDATION
  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // checks for format _@_._
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

    // password must be 6 chars and must contain a number
    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = "Password must be at least 6 characters long";
    } else if (!/\d/.test(password)) {
      passwordValid = false;
      errorMsg.password = "Password must contain a digit";
    }

    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  // FOR PASSWORD CONFIRM VALIDATION
  updatePasswordConfirm = (passwordConfirm) => {
    this.setState({ passwordConfirm }, this.validatePasswordConfirm);
  };

  validatePasswordConfirm = () => {
    const { passwordConfirm, password } = this.state;
    let passwordConfirmValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = "Passwords do not match";
    }

    this.setState({ passwordConfirmValid, errorMsg }, this.validateForm);
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
              <h2>Create an account with us.</h2>
              <p>To access all properties, searches, notes and more.</p>
            </div>
            <form>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.fullNameValid}
                  message={this.state.errorMsg.fullName}
                />
                <input
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="form-field"
                  id="fullname"
                  value={this.state.fullName}
                  onChange={(e) => this.updateFullName(e.target.value)}
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
  }
}

export default SignupPage;
