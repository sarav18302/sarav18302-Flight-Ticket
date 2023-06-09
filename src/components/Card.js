import React, {useEffect,useState} from 'react';
import flight from "../assests/flight.jpg"

export const Card = (props) => {
  const [flightDat,setflightDat] = useState([]);
  const { departure, arrival, date } = props;
  console.log(props);
  let params = new URLSearchParams(
    {
      access_key:"a966a1978973cbb8e18af0b4be83023c",
      flight_date: date
    })

  useEffect(async ()=>{
    fetch ('http://localhost:4000/flight-details?param1=${params}',{

    credentials:'include',
  }).then (response =>{
    response.json().then(
      data=>{
        setflightDat(data);
      });
  },
  
  )},[]);


  console.log(flightDat);

  // async function search()
  // {
  //   let params = new URLSearchParams(
  //     {
  //       access_key:"a966a1978973cbb8e18af0b4be83023c",
  //       flight_date: date
  //     }
  //   )
  //   fetch ("https://api.aviationstack.com/v1/flights?${params}").then(res=>res.json()).then(console.log);
  // }
  

  return (


    <div className="card-grid">
      
      {flightDat.map((data)=>(
        
        <div className="card-search">
         <img src={flight} alt="Card" className="card-image" />
        <div className="card-content">
        <h2 className="card-title">{data.departure.airport} to {data.arrival.airport}</h2>
        <p className="card-description">{data.flight_date}</p>
        <p className="card-description">{data.flight_status}</p>
        <p className="card-description">INR 10000</p>
        <div>
        <button className="card-button" >Book Tickets</button>
        </div>
            
        </div>
        </div>
      ))}
    </div>
  )

}

