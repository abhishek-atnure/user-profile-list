import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CardList from "./components/CardList/CardList";
import LoginPage from "./components/LoginPage/LoginPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("password");
    if (token === "bar") {
      setAuth(true);
    } else {
      setAuth(false);
    }
  });
  return (
    <div className="App">
      <Navigation auth={auth} />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (auth ? <CardList /> : <Redirect to="/login" />)}
          />
          <Route
            path="/login"
            render={(props) => (!auth ? <LoginPage /> : <Redirect to="/" />)}
          />
          <Route
            path="/logout"
            render={(props) => (!auth ? <LoginPage /> : <Redirect to="/" />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
