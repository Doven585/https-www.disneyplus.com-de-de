import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LoginPopup from "./LoginPopup";
import Movies from "./Movies"

export const MessengerPiggeon = React.createContext(null)

function App() {
  const [data, setData]= useState([])
  useEffect(async ()=>{
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=14df7912217b3871d3af70261869c1c6")

   
    const reesData = await response.json()
    setData(reesData.results)
  }, [])
  console.log(data)
  
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
        <ul>
       {/*<img src={`https://image.tmdb.org/t/p/w500/${data.images.base_url}`}/>*/ }
       {data.map((movie=><div> <img className="my-api" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/><h3>{movie.original_title}</h3></div>))}
       
        </ul>
        <nav>
          <li className="navbar-home">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar-movies">
            <NavLink to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="my-navbar">
            {user.username ? (
              <button className="log-out" onClick={logoutUser}>Log out</button>
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
