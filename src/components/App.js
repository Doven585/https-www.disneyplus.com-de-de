import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import React, { useState } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LoginPopup from "./LoginPopup";

function App() {
  const [user, setUser] = useState(null);

  function loginUser(userData) {
    setUser(userData);
  }

  function logoutUser() {
    setUser(null)
  }

  return (
    <div>
      <nav className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName="active" exact className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          {user ? (
            <button className="nav-link" onClick={logoutUser}>Log out</button>
          ) : (
            <NavLink activeClassName="active" className="nav-link" to="/login">
              Login
            </NavLink>
          )}
        </li>
      </nav>
      <Route path="/" exact></Route>
      <Route path="/login">
        {user ?
          <Redirect to="/" />
          : <LoginPopup login={loginUser} />}
      </Route>
    </div>
  );
}

export default App;
