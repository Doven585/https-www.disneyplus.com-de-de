import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import React from "react";
import { Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"

function App() {
  return (
    <div>
      <nav className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
        </li>
      </nav>
      <Route path="/" exact>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
