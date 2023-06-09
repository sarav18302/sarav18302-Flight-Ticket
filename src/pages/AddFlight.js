import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
export const AddFlight = () => {
    const [flightId,setflightId]=useState('');
  const [arrival,setarrival]=useState('');
  const [departure,setdeparture]=useState('');
  const [date,setdate] = useState("");
  const navigate = useNavigate();
  async function addflight(ev)
  {
    ev.preventDefault();

    const response=  await fetch('http://localhost:4000/add-flights',{
      method:'POST',
      body: JSON.stringify({flightId,departure,arrival,date}),
      headers: {'Content-Type':'application/json'},

    });
    console.log(response);

    if(response.status!==200)
  {

    alert("Flight Exists");
  }
  else{
    navigate("/admin/profile");
  }

  return (
    <div className='form-content'>
          <div className='container'>
           
        <div className='form-container'>
        <h1 className='h-form'>Add Flight</h1>
        <form className='register'
          onSubmit={ addflight }>
        <input type="text"
              placeholder="FlightId"
              value={flightId}
              onChange={ev => setflightId(ev.target.value)}

                />
        <input type="text"
                placeholder='departure'
                value={departure}
              onChange={ev => setdeparture(ev.target.value)}
                />
        <input type="text"
                placeholder='arrival'
                value={arrival}
              onChange={ev => setarrival(ev.target.value)}
                />
        <input type="text"
                placeholder='date'
                value={date}
              onChange={ev => setdate(ev.target.value)}
                />

        <button>Add FLight</button>
        
        
       
        
    </form>
    
    
    </div>
    
    </div>
    </div>
  )
}}
