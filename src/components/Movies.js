import { useState, useEffect, useContext } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { MessengerPiggeon } from "./App";

export default function Movies() {
  const [data, setData] = useState(null);
  const { user } = useContext(MessengerPiggeon)
  useEffect(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=14df7912217b3871d3af70261869c1c6"
    );
    {
      /*const thriller = await fetch("https://api.themoviedb.org/3/thriller/movie?api_key=14df7912217b3871d3af70261869c1c6")*/
    }

    const reesData = await response.json();
    setData(reesData.results);
  }, []);
  console.log(data);

  if (data === null) {
    return <div className="spinner">Loading...</div>;
  } else {
    return (
     
        <div className="movie-cards" >
        {data.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
            <h3>Title: {movie.original_title}</h3>
            <p>Overview: {movie.overview}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Video:{movie.video}</p>
            <p>Vote-Average: {movie.vote_average}</p>
            {user.id ? <button className="btn btn-outline-secondary">Add to favourites</button> : <p>Please log in to save this movie</p>}
          </div>
         
        ))}
       </div>
    );
  }
}
