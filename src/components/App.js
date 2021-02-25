import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import React, { useState } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LoginPopup from "./LoginPopup";
import Movies from "./Movies"

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
      <nav>
        <li className="navbar">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className="my-navbar">
          {user ? (
            <button onClick={logoutUser}>Log out</button>
          ) : (
            <NavLink to="/login">
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
