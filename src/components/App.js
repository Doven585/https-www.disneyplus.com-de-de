import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import React from "react";
import { Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/footer">Footer</NavLink>
        </li>
      </nav>
      <Route path="/" exact>
      </Route>
      <Route path="/footer">
        <Footer />
      </Route>
    </div>
  );
}

export default App;
