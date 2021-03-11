import "./App.css";
import React, { useState, useReducer, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import Movies from "./Movies";
import * as ReactBootstrap from "react-bootstrap";
import Doven from "./dovennlogo.png";
import { Shopingcards } from "./Shopingcards"
import Cart from "./Cart"

export const MessengerPiggeon = React.createContext(null);

function App() {
  {/*const [card, setCards] = useState(null)*/}
  
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
                    /* for all app with contex without props */
    <MessengerPiggeon.Provider value={{ user, loginUser }}>
      <div className="backgruond">
        <li className="navbar-home">
          <NavLink className="nav-link" to="/">
            <button className="btn btn-outline-secondary">Home</button>
          </NavLink>
        </li>
        <div className="logo">
          <img src={Doven} alt="logo" width="300" height="100" />
          <h1>This is just an exercise in React</h1>
          <p>Some ideas are based on disneyplus!!!</p>
          <Cart />
          <Shopingcards />
        </div>
        <div>
          <NavLink to="/movies">
            <button id="disney" className="btn btn-outline-secondary">
              Movies
            </button>
          </NavLink>
          {user.username ? (
            <button
              id="disney"
              className="btn btn-outline-secondary"
              onClick={logoutUser}
            >
              Log out
            </button>
          ) : (
            <NavLink to="/login">
              <button id="disney" className="btn btn-outline-secondary">
                Login
              </button>
            </NavLink>
            
            
            
          )}
        </div>
        <Route path="/" exact></Route>
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
