import React, { useCallback, useEffect } from "react";
import "./App.css";
import HomePage from "../src/properties/pages/HomePage";
import ContactPage from "../src/properties/pages/ContactPage";
import AboutPage from "../src/properties/pages/AboutPage";
import LoginPage from "../src/user/pages/LoginPage";
import SignupPage from "../src/user/pages/SignupPage";
import ForgotPasswordPage from "../src/properties/pages/ForgotPasswordPage";
import NewPropertyPageOne from "../src/properties/pages/PropertyStepForm";
import PropertiesPage from "../src/properties/pages/PropertiesPage";
import ProfilePage from "../src/user/pages/ProfilePage";
import PropertyInfoPage from "../src/properties/pages/PropertyInfoPage";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { AuthContext } from "../src/shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userId, setUserId] = React.useState();
  const [token, setToken] = React.useState();
  const [isAdmin, setIsAdmin] = React.useState(false);
  console.log(isLoggedIn);

  const login = useCallback((uid, token, admin) => {
    setIsLoggedIn(true);
    setUserId(uid);
    setToken(token);
    setIsAdmin(admin);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        admin: admin,
      }),
    );
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    setToken(null);
    setIsAdmin(null);

    localStorage.removeItem("userData");
  }, []);

  // MAKES SURE WHEN PAGE RELOADS THE USER IS LOGGED IN
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      storedData.admin
      // new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.admin,
        // new Date(storedData.expiration),
      );
    }
  }, [login]);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/properties" exact component={PropertiesPage} />

        <Route path="/forgot-password" exact component={ForgotPasswordPage} />
        <Route path="/property/new" exact component={NewPropertyPageOne} />
        <Route path="/profile" exact component={ProfilePage} />

        {/* <Redirect to="/profile" /> */}
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/properties" exact component={PropertiesPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={SignupPage} />
        <Route path="/property/:propertId" exact component={PropertyInfoPage} />
        {/* FOR DEVELOPMENT */}
        <Route path="/property/new" exact component={NewPropertyPageOne} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        // isLoggedIn: isLoggedIn,
        isLoggedIn: !!token,
        userId: userId,
        token: token,
        isAdmin: isAdmin,
        login: login,
        logout: logout,
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
}

export default App;

/* <Switch>
  <Route path="/" exact component={HomePage} />
  <Route path="/about" exact component={AboutPage} />
  <Route path="/contact" exact component={ContactPage} />
  <Route path="/login" exact component={LoginPage} />
  <Route path="/register" exact component={SignupPage} />
  <Route path="/properties" exact component={PropertiesPage} />
  <Route path="/forgot-password" exact component={ForgotPasswordPage} />
  <Route path="/property/new" exact component={NewPropertyPageOne} />
  <Route path="/profile" exact component={ProfilePage} />
  <Redirect to="/" />
</Switch>; */
