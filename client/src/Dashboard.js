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
  const handleSubmit = (e) => {
    //navigate("/seats");
  };
  if (!authenticated) {
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
        {movies.map((movie, index) => (
				<MovieComponent movie={movie}/>
		))}
	    
        <form onSubmit={handleSubmit}>
	      <input type="submit" value="Submit" />
	  </form>
      </div>
    )
  }
};
export default Dashboard;