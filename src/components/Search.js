import React ,{useState} from 'react'
import { Card } from './Card';

export const Search = () => {
    const [departure,setDeparture] = useState("");
    const [arrival,setArrival] = useState("");
    const [date,setDate] = useState("");
    
  return (
    <div className ="column">
    <form >
        
    <div className="input-options">
      <div className="input-container">
        <label>Departure:</label>
        <input type="text" 
               name="departure" 
               value={departure}
               placeholder="Departure"
               onChange={ev => setDeparture(ev.target.value) }/>
      </div>
      <div className="input-container">
        <label>Arrival:</label>
        <input type="text" 
               name="arrival" 
               value ={arrival}
               placeholder="Arrival" 
               onChange={ev => setArrival(ev.target.value)}/>
      </div>
      <div className="input-container">
        <label>Date:</label>
        <input type="text" 
               name="date"
               value ={date} 
               placeholder="Date" 
               onChange={ev => setDate(ev.target.value)}/>
      </div>
      <div className="input-container-btn">
      <input type= "submit"  value="Search flights"/>
      </div>
    </div>
    </form>
    <Card  departure={departure} arrival = {arrival} date ={date} />
    
    
    </div>

    
    
    
  )
}
