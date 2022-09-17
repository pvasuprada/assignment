const express = require("express")
const cors = require("cors")
const fs = require('fs');
const path = require('path')

const formidable = require("formidable")
const app = express()
app.use(cors());
app.use(express.json());

var movieData = [{
    "Title": "starwars",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
    "Title": "empirestrikes",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}]

var seatData = {
    "starwars": [{
      "id": 1,
      "status": "occupied"
    }, {
      "id": 2,
      "status": "selected"
    }, {
      "id": 3,
      "status": "selected"
    }, {
      "id": 4,
      "status": "occupied"
    }, {
      "id": 5,
      "status": "occupied"
    }],
    "empirestrikes": [{
      "id": 1,
      "status": "occupied"
    }, {
      "id": 2,
      "status": "selected"
    }, {
      "id": 3,
      "status": "occupied"
    }, {
      "id": 4,
      "status": "occupied"
    }, {
      "id": 5,
      "status": "occupied"
    }],
    "starwars5": [{
        "id": 1,
        "status": "occupied"
      }, {
        "id": 2,
        "status": "selected"
      }, {
        "id": 3,
        "status": "occupied"
      }, {
        "id": 4,
        "status": "occupied"
      }, {
        "id": 5,
        "status": "occupied"
      }],

  }
app.listen(3001, ()=>{
    console.log('Server run sucess')
});

app.get("/getAllMovieDetails", (req,res)=> {
  res.send(movieData);
})

app.get("/getAllSeatDetails",  (req,res)=>{
    res.send(seatData);
})
app.post("/reserveSeat", (req,res)=>{
    res.send("Reserved Seat")
})



