import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";


const Seats = (props) => {
  const [seats, setSeats] = useState({
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
    }]
  });
  useEffect(() => {
    
    fetch('http://localhost:3001/getAllSeatDetails')
      .then(results => results.json())
      .then(data => {
        console.log(data)
        setSeats(data)
      });
  }, []);

  const handleReserveSeat = (e) =>{

    document.getElementById(e).classList.add("selected")
    document.getElementById(e).classList.remove("occupied")
    console.log(e);
    fetch('http://localhost:3001/reserveSeat', {
      method: 'post',
      body: JSON.stringify({seatreservedId: e})
     }).then(res => res)
      .then(
      (result) => {
        

      })
    
  }
  var moviename = decodeURIComponent(window.location.search.substring(11));
    return (
        <div className="df">
         <div className="row">
          {seats[moviename].map((seat, index) => (
            <div id={seat.id} onClick={() => handleReserveSeat(seat.id)} className = {`seat ${seat.status}`}></div>
          ))}
         </div>
         
        </div>
      );
};
export default Seats;