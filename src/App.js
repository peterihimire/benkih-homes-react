import "./App.css";
import HomePage from "../src/properties/pages/HomePage";
import ContactPage from "../src/properties/pages/ContactPage";
import AboutPage from "../src/properties/pages/AboutPage";
import LoginPage from "../src/properties/pages/LoginPage";
import SignupPage from "../src/properties/pages/SignupPage";
import ForgotPasswordPage from "../src/properties/pages/ForgotPasswordPage";
import NewPropertyPage from "../src/properties/pages/NewPropertyPage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={SignupPage} />
        <Route path="/forgot-password" exact component={ForgotPasswordPage} />
        <Route path="/property/new" exact component={NewPropertyPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
