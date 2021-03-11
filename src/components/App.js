import "./App.css";
import React, { useState, useReducer, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import Movies from "./Movies";
import * as ReactBootstrap from "react-bootstrap";
import Doven from "./dovennlogo.png";
import { Shopingcards } from "./Shopingcards"


export let MessengerPiggeon

function App() {
  {/*const [card, setCards] = useState(null)*/}
  
  const [user, setUser] = useState({});

  async function loginUser(userData) {
    const response = await fetch("http://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      body: JSON.stringify(userData)
    })
    const data = await response.json()
    if(data.status == "success") setUser(data.data);
  }

  MessengerPiggeon = React.createContext({ user, loginUser });

  function logoutUser() {
    setUser({ username: null });
  }

  return (
                    /* for all app with contex without props */
    
      <div className="backgruond">
        <li className="navbar-home">
          <NavLink className="nav-link" to="/">
            <button className="btn btn-outline-secondary">Home</button>
          </NavLink>
          {user.id && <div class="nav-link" title={user.id}>👨</div>}
        </li>
        <div className="logo">
          <img src={Doven} alt="logo" width="300" height="100" />
          <h1>This is just an exercise in React</h1>
          <p>Some ideas are based on disneyplus!!!</p>
          <Shopingcards />
        </div>
        <div>
          <NavLink to="/movies">
            <button id="disney" className="btn btn-outline-secondary">
              Movies
            </button>
          </NavLink>
          {user.id ? (
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
          {user.id ? <Redirect to="/" /> : <LoginPopup />}
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>
      </div>
    
  );
}

export default App;
