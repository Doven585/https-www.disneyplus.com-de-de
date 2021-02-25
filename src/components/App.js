import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import React, { useState } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LoginPopup from "./LoginPopup";
import Movies from "./Movies"

export const MessengerPiggeon = React.createContext(null)

function App() {
  const [user, setUser] = useState({
    username: "Doven",
    favorites: [
      "Cinderella",
      "Ice Princess"
    ]
  });

  function loginUser(userData) {
    setUser(userData);
  }

  function logoutUser() {
    setUser({username: null})
  }

  return (
    <MessengerPiggeon.Provider value={{user, loginUser}}>
      <div>
        <nav>
          <li className="navbar">
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar">
            <NavLink to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="my-navbar">
            {user.username ? (
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
          {user.username ?
          
            <Redirect to="/" />
            : <LoginPopup />}
        </Route>
        <Route path="/movies">
          
            <Movies />
          
        </Route>
      </div>
    </MessengerPiggeon.Provider>
  );
}

export default App;
