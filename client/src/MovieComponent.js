import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

const MovieComponent = (props) => {
    const navigate = useNavigate();

    const handleSeats =(e) => {
        navigate("/seats?moviename="+e);
    }
    return (
        <div onClick={() => handleSeats(props.movie.Title)} className='image-container d-flex justify-content-start m-3'>
            <img src={props.movie.Poster} alt='movie' className="movieimage"></img>
            <p>{props.movie.Title}</p>
            <p>{props.movie.Year}</p>
		</div>
      );
};
export default MovieComponent;