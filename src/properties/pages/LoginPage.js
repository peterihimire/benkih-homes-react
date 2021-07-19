import React, { Component } from "react";
// import LoginItem from "../../properties/components/LoginItem";
import "./LoginPage.css";
import homeBg from "../../assets/full-modal.svg";
import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";
import closeIcon from "../../assets/close-icon.svg";
import { AuthContext } from "../../shared/context/auth-context";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class LoginPage extends Component {
  static contextType = AuthContext;
  // context = this.context;

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

  // LOGIN HANDLER
  loginHandler = (e) => {
    e.preventDefault();
    console.log({
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({ loading: true });
    fetch(`http://localhost:4000/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => {
        console.log(response);
        response
          .json()
          .then((res) => {
            console.log(res);
            console.log(res.token);
            console.log(res.userId);
            console.log(res.fullname);
            console.log(res.admin);

            if (!response.ok) {
              throw new Error(res.msg);
            }
            this.setState({ loading: false });
            this.context.login(res.userId, res.token, res.admin);
            // this.props.history.push("/profile");
          })
          .catch((err) => {
            console.log(err);
            this.setState({ loading: false });
          });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  // FOR STATE MANAGEMENT
  componentDidMount() {
    const context = this.context;
    console.log(context);
    console.log(context.login);
  }

  render() {
    return (
      <div className="auth-item">
        <div className="login-bg-div hidden-xs visible-md visible-xl">
          <img src={homeBg} alt="home" />
        </div>
        <div className="login-form">
          <div className="close-form-btn-div">
            <button
              className="back-btn"
              onClick={() => this.props.history.goBack()}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>
          <div className="login-form-content">
            {/* <div className="back-arrow">
              <button
                className="back-btn"
                onClick={() => this.props.history.goBack()}
              >
                <FaArrowLeft className="arrow-back-icon" />
              </button>
            </div> */}
            <div className="heading">
              <h2>Login to your account</h2>
              <p>Access all your saved properties, searches, notes and more.</p>
            </div>
            <form onSubmit={this.loginHandler}>
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
