import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import { AddFlight } from './AddFlight';

export const AdminProfile = () => {
  
  return (
    <div>
      <Link to ={"/add-flights"}><button>Add Flights</button></Link>
    
      <button>Delete Flights</button>
      <button>Flight Bookings</button>
      
    </div>
  )
}
