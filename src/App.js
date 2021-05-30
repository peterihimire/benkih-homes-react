import "./App.css";
import HomePage from "../src/properties/pages/HomePage";
import ContactPage from "../src/properties/pages/ContactPage";
import AboutPage from "../src/properties/pages/AboutPage";
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
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
