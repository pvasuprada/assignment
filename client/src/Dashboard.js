import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieComponent from "./MovieComponent";
import "./App.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(null);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
    fetch('http://localhost:3001/getAllMovieDetails')
      .then(results => results.json())
      .then(data => {
        console.log(data)
        setMovies(data)
      });
  }, []);
  
  if (!authenticated) {
  } else {
    return (
      <>
      <div>
        <b><p className="welcomemsg">Welcome to the Movie Dashboard</p></b>
        <p className="selectmsg">Select a Movie to Book Seats</p>
        </div>
      <div className="moviesdiv">
        {movies.map((movie, index) => (
				<MovieComponent movie={movie}/>
		    ))}
	    
      </div>
      </>
    )
  }
};
export default Dashboard;