import { useState, useEffect} from "react"
export default function Movies(){
    const [data, setData]= useState([])
    useEffect(async ()=>{
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=14df7912217b3871d3af70261869c1c6")
      {/*const thriller = await fetch("https://api.themoviedb.org/3/thriller/movie?api_key=14df7912217b3871d3af70261869c1c6")*/}
  
     
      const reesData = await response.json()
      setData(reesData.results)
    }, [])
    console.log(data)

    return(
        <ul>
       {/*<img src={`https://image.tmdb.org/t/p/w500/${data.images.base_url}`}/>*/ }
       {data.map((movie=>
       <div key={movie.id}> 
           <img className="my-api" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
       <h1>{movie.original_title}</h1>
       <h2>{movie.overview}</h2>
       <h3>{movie.popularity}</h3>
       <h4>{movie.release_date}</h4>
       <h5>{movie.video}</h5>
       <h6>{movie.vote_average}</h6>
       </div>))}
        
        </ul>
    )
}
