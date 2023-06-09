import React from 'react';
                         
export const RecomdFlights = () => {
 
    const recommendedFlights = [
        { id: 1, name: 'Chennai to Bangalore' },
        { id: 2, name: 'Chennai to Bangalore' },
        { id: 3, name: 'Chennai to Bangalore' },
        { id: 4, name: 'Chennai to Bangalore' },
        { id: 5, name: 'Chennai to Bangalore' },
        // Add more flights as needed
      ];
    
      return (
        <div className="flight-container">
          {/* Recommended Flights */}
          <div className="recommended-flights">
            {recommendedFlights.map(flight => (
              <div key={flight.id} className="card">
                {flight.name}
              </div>
            ))}
          </div>
        </div>
      );
}
