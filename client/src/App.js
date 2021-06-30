import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./Components/Views/LandingPage/LandingPage";
import LoginPage from "./Components/Views/LoginPage/LoginPage";
import RegisterPage from "./Components/Views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
