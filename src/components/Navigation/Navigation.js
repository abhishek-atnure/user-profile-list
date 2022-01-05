import React from "react";
import "./Navigation.css";

import { Link, BrowserRouter as Router } from "react-router-dom";

function Navigation({ auth }) {
  const handleLogout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("user");
    window.location = "/login";
  };
  return (
    <Router>
      <nav>
        <h2>{auth ? "User list" : "Login"}</h2>
        {auth ? (
          <span>
            <Link to="/login" onClick={handleLogout}>
              Log out
            </Link>
          </span>
        ) : null}
      </nav>
    </Router>
  );
}

export default Navigation;
