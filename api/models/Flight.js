const mongoose = require("mongoose");

const {Schema,model} = mongoose;
const FlightSchema = Schema(
    {   
        flight_date: {
            type :Date,
            required:true
        },
        number:{ 
            type : String, 
            required : true, 
            min:4, 
            unique : true},
       
        departure: {
            type: String,
            required: true
        },
        arrival: {
            type: String,
            required: true
        },
        
        flightCapacity: {
            type: Number,
            required: true,
            default:60
        },
        ticketsBooked: {
            type: Number,
            required: true,
            default:0
        }


        
    }   
);

const FlightModel = model('Flights', FlightSchema);

module.exports = FlightModel;