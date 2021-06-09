import React, { Component } from "react";
import "./LoginPage.css";
// import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import { FaArrowLeft } from "react-icons/fa";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class NewPropertyPageOne extends Component {
  state = {
    title: "",
    titleValid: false,
    slug: "",
    slugValid: false,
    address: "",
    addressValid: false,
    amount: "",
    amountValid: false,
    formValid: false,
    errorMsg: {},
    loading: false,
    error: "",
  };

  // FOR OVERALL FORM VALIDATION
  validateForm = () => {
    const { titleValid, slugValid, addressValid, amountValid } = this.state;
    this.setState({
      formValid: titleValid && slugValid && addressValid && amountValid,
    });
  };

  // FOR TITLE VALIDATION
  updateTitle = (title) => {
    this.setState({ title }, this.validatetitle);
  };

  validatetitle = () => {
    const { title } = this.state;
    let titleValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (title.length < 7) {
      titleValid = false;
      errorMsg.title = "Must be at least 7 characters long";
    }

    this.setState({ titleValid, errorMsg }, this.validateForm);
  };

  // FOR SLUG VALIDATION
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
                  valid={this.state.titleValid}
                  message={this.state.errorMsg.title}
                />
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="form-field"
                  id="title"
                  value={this.state.title}
                  onChange={(e) => this.updateTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.slugValid}
                  message={this.state.errorMsg.slug}
                />
                <input
                  name="slug"
                  type="text"
                  placeholder="Slug"
                  className="form-field"
                  id="slug"
                  value={this.state.slug}
                  onChange={(e) => this.updateSlug(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.addressValid}
                  message={this.state.errorMsg.address}
                />
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="form-field"
                  id="address"
                  value={this.state.address}
                  onChange={(e) => this.updateAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.amountValid}
                  message={this.state.errorMsg.amount}
                />
                <input
                  name="amount"
                  type="number"
                  placeholder="Amount"
                  className="form-field"
                  id="amount"
                  value={this.state.amount}
                  onChange={(e) => this.updateAmount(e.target.value)}
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

export default NewPropertyPageOne;
