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

class NewPropertyPageTwo extends Component {
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

  // FOR ADMIN CODE
  updateAdminCode = (adminCode) => {
    this.setState({ adminCode }, this.validateAdminCode);
  };

  validateAdminCode = () => {
    const { adminCode } = this.state;
    let adminValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (adminCode.length < 3) {
      adminValid = false;
      errorMsg.name = "Must be at least 3 characters long";
    }

    this.setState({ adminValid, errorMsg }, this.validateForm);
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
              <h2>Add new property.</h2>
              <p>Add or create new property for sale.</p>
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
                <ValidationMessage
                  valid={this.state.emailValid}
                  message={this.state.errorMsg.email}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="form-field"
                  id="email"
                  value={this.state.email}
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
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.passwordConfirmValid}
                  message={this.state.errorMsg.passwordConfirm}
                />
                <input
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm password"
                  className="form-field"
                  id="confirm-password"
                  value={this.state.passwordConfirm}
                  onChange={(e) => this.updatePasswordConfirm(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="admincode"
                  name="admincode"
                  className="form-field"
                  value={this.state.adminCode}
                  placeholder="ignore input field"
                  // onChange={(e) => e.target.value}
                  onChange={(e) => this.updateAdminCode(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-full"
                disabled={!this.state.formValid}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPropertyPageTwo;
