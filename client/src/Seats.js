import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Seats = (props) => {
  const [seats, setSeats] = useState([]);
  useEffect(() => {
    const fetchKeywords = async () => {
      await fetch('http://localhost:3001/getAllSeatDetails')
        .then(results => results.json())
        .then(data => {
          console.log(data)
          setSeats(data)
        });
    }
    fetchKeywords();
  }, []);

  const handleReserveSeat = (e) => {
    if (document.getElementById(e).classList.contains('occupied')) {
      alert('Seat is Occupied')
    }
    else {
      document.getElementById(e).classList.remove("vacant")
      document.getElementById(e).classList.add("selected")
      console.log(e);
      fetch('http://localhost:3001/reserveSeat?seatreservedId='+e+'&title='+moviename, {
        method: 'post'
      }).then(res => res.json())
        .then((result) => {setSeats(result)})
    }

  }
  var moviename = decodeURIComponent(window.location.search.substring(11));
  return (
    <div className="df flexcolumn">
      <b><p className="selectmsg">Select seats from Below :</p></b>
      <div><br />
        <div className="row df flexcolumn aligncenter">
          {seats[moviename]?.map((seat, index) => (
            <div id={seat.id} onClick={() => handleReserveSeat(seat.id)} className={`seat ${seat.status}`}></div>
          ))}
        </div>


        <p className="selectmsg">Number of Seats Confirmed : {seats[moviename]?.filter(t => t.status == "selected").length}</p>
        <div className="df legenddiv">
          <div className="seat occupied"></div><span className="legend">Occupied</span>
          <div className="seat selected"></div><span className="legend">Selected</span>
          <div className="seat"></div><span className="legend">Vacant</span>
        </div>
      </div>
    </div>
  );
};
export default Seats;