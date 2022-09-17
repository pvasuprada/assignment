const express = require("express")
const cors = require("cors")
const fs = require('fs');
const path = require('path')
var bodyParser = require('body-parser');

const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

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
}, {
  "Title": "starwars2",
  "Year": "1980",
  "imdbID": "tt0080684",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
  "Title": "empirestrikes2",
  "Year": "1983",
  "imdbID": "tt0086190",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}, {
  "Title": "starwars3",
  "Year": "1980",
  "imdbID": "tt0080684",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
  "Title": "empirestrikes3",
  "Year": "1983",
  "imdbID": "tt0086190",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}, {
  "Title": "starwars4",
  "Year": "1980",
  "imdbID": "tt0080684",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
  "Title": "empirestrikes4",
  "Year": "1983",
  "imdbID": "tt0086190",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}
]

var seatData = {
  "starwars": [{
    "id": 1,
    "status": "vacant"
  }, {
    "id": 2,
    "status": "vacant"
  }, {
    "id": 3,
    "status": "vacant"
  }, {
    "id": 4,
    "status": "vacant"
  }, {
    "id": 5,
    "status": "occupied"
  }],
  "empirestrikes": [{
    "id": 1,
    "status": "occupied"
  }, {
    "id": 2,
    "status": "vacant"
  }, {
    "id": 3,
    "status": "vacant"
  }, {
    "id": 4,
    "status": "occupied"
  }, {
    "id": 5,
    "status": "occupied"
  }],
  "starwars2": [{
    "id": 1,
    "status": "occupied"
  }, {
    "id": 2,
    "status": "vacant"
  }, {
    "id": 3,
    "status": "vacant"
  }, {
    "id": 4,
    "status": "vacant"
  }, {
    "id": 5,
    "status": "occupied"
  }],
  "empirestrikes2": [{
    "id": 1,
    "status": "vacant"
  }, {
    "id": 2,
    "status": "vacant"
  }, {
    "id": 3,
    "status": "vacant"
  }, {
    "id": 4,
    "status": "vacant"
  }, {
    "id": 5,
    "status": "vacant"
  }],
  "starwars3": [{
    "id": 1,
    "status": "vacant"
  }, {
    "id": 2,
    "status": "vacant"
  }, {
    "id": 3,
    "status": "vacant"
  }, {
    "id": 4,
    "status": "vacant"
  }, {
    "id": 5,
    "status": "vacant"
  }],
  "empirestrikes3": [{
    "id": 1,
    "status": "vacant"
  }, {
    "id": 2,
    "status": "vacant"
  }, {
    "id": 3,
    "status": "vacant"
  }, {
    "id": 4,
    "status": "vacant"
  }, {
    "id": 5,
    "status": "vacant"
  }],
  "starwars4": [{
    "id": 1,
    "status": "occupied"
  }, {
    "id": 2,
    "status": "vacant"
  }, {
    "id": 3,
    "status": "vacant"
  }, {
    "id": 4,
    "status": "vacant"
  }, {
    "id": 5,
    "status": "vacant"
  }],
  "empirestrikes4": [{
    "id": 1,
    "status": "vacant"
  }, {
    "id": 2,
    "status": "vacant"
  }, {
    "id": 3,
    "status": "vacant"
  }, {
    "id": 4,
    "status": "vacant"
  }, {
    "id": 5,
    "status": "vacant"
  }]

}
app.listen(3001, () => {
  console.log('Server run sucess')
});

app.get("/getAllMovieDetails", (req, res) => {
  res.send(movieData);
})

app.get("/getAllSeatDetails", (req, res) => {
  res.send(seatData);
})
app.post("/reserveSeat", (req, res) => {
  queryval = req.query.seatreservedId
  titleval = req.query.title
  seatData[titleval].find((it) => it.id == queryval).status = "selected"
  res.send(seatData)
})



