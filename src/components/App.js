import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LoginPopup from "./LoginPopup";
import Movies from "./Movies";
import * as ReactBootstrap from 'react-bootstrap';





export const MessengerPiggeon = React.createContext(null);

function App() {
  const [user, setUser] = useState({
    username: "Doven",
    favorites: ["Cinderella", "Ice Princess"],
  });

  function loginUser(userData) {
    setUser(userData);
  }

  function logoutUser() {
    setUser({ username: null });
  }

  return (
    <MessengerPiggeon.Provider value={{ user, loginUser }}>
      <div className="backgruond">
        
       <nav>
          <li className="navbar-home">
            <NavLink className="nav-link" to="/">
             <button className="btn btn-outline-secondary">Home</button> 
            </NavLink>
          </li>
          <li className="navbar-movies">
            <NavLink to="/movies"><button className="btn btn-outline-secondary">Movies</button></NavLink>
          </li>
          <li className="my-navbar">
            {user.username ? (
              <button className="btn btn-outline-secondary" onClick={logoutUser}>
                Log out
              </button>
            ) : (
              <NavLink to="/login"><button className="btn btn-outline-secondary">Login</button></NavLink>
            )}
          </li>
       </nav>
        <Route path="/" exact> 
        </Route>
        <Route path="/login">
          {user.username ? <Redirect to="/" /> : <LoginPopup />}
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </div>
    </MessengerPiggeon.Provider>
  );
}

export default App;
