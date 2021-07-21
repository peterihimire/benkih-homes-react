import React, { useCallback } from "react";
import "./App.css";
import HomePage from "../src/properties/pages/HomePage";
import ContactPage from "../src/properties/pages/ContactPage";
import AboutPage from "../src/properties/pages/AboutPage";
import LoginPage from "../src/properties/pages/LoginPage";
import SignupPage from "../src/properties/pages/SignupPage";
import ForgotPasswordPage from "../src/properties/pages/ForgotPasswordPage";
import NewPropertyPageOne from "../src/properties/pages/PropertyStepForm";
import PropertiesPage from "../src/properties/pages/PropertiesPage";
import ProfilePage from "../src/properties/pages/ProfilePage";


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

  const login = useCallback((uid, token, admin) => {
    setIsLoggedIn(true);
    setUserId(uid);
    setToken(token);
    setIsAdmin(admin);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    setToken(null);
    setIsAdmin(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
         <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/properties" exact component={PropertiesPage} />

        <Route path="/forgot-password" exact component={ForgotPasswordPage} />
        <Route path="/property/new" exact component={NewPropertyPageOne} />
        <Route path="/profile" exact component={ProfilePage} />

        <Redirect to="/profile" />
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

        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
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
