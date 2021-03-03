import { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";

export default function Movies() {
  const [data, setData] = useState(null);
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
      <ul className="container">
        {/*<img src={`https://image.tmdb.org/t/p/w500/${data.images.base_url}`}/>*/}
        {data.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
            <h1>Title: {movie.original_title}</h1>
            <h2>Overview: {movie.overview}</h2>
            <h3>Popularity: {movie.popularity}</h3>
            <h4>Release Date: {movie.release_date}</h4>
            <h5>Video:{movie.video}</h5>
            <h6>Vote-Average: {movie.vote_average}</h6>
          </div>
        ))}
      </ul>
    );
  }
}
