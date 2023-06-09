const  express = require('express')
const cors = require("cors")
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser"); 
const RegUser = require("./models//RegUser");
const AdminRegUser = require("./models/AdminRegUser");
const axios = require('axios');
const Flight = require("./models/Flight");
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const corsConfig = {
    credentials: true,
    origin: ["http://localhost:3000","https://flightticket.onrender.com"],
};
app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
const salt = bcrypt.genSaltSync(10);
const secret = bcrypt.genSaltSync(10);
mongoose.connect("mongodb+srv://sarav18302:wVq9aSXajiewjxon@flightbookingcluster.7mf02fh.mongodb.net/?retryWrites=true&w=majority");
app.use(bodyParser.json());

app.post('/user/register', async (req, res) => {
    const {username,password}=req.body;
    try{
        const userDoc = await RegUser.create({
            username, 
            password:bcrypt.hashSync(password,salt)
        });
        res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);
    }
});

app.post('/user/login',async (req,res)=>{
    const {username,password} = req.body;
   
    const userDoc = await RegUser.findOne({username});
    const passOk = bcrypt.compareSync(password,userDoc.password);
    // res.json();
    
    if (passOk)
    {   
        jwt.sign({username,id: userDoc.id},secret, {}, (err,token)=>{
            if(err) 
            { 
                throw err;
            }
            res.cookie('token',token).json({
                id:userDoc.id,
                username,
            });
            
        })
    }
    else
    { 
        
        res.status(400).json('wrong credentials');
    }
});

app.post('/admin/login',async (req,res)=>{
    const {username,password} = req.body;
   
    const userDoc = await AdminRegUser.findOne({username});
    const passOk = bcrypt.compareSync(password,userDoc.password);
    // res.json();
    
    if (passOk)
    {   
        jwt.sign({username,id: userDoc.id},secret, {}, (err,token)=>{
            if(err) 
            { 
                throw err;
            }
            res.cookie('token',token).json({
                id:userDoc.id,
                username,
            });
            
        })
    }
    else
    { 
        
        res.status(400).json('wrong credentials');
    }
});

app.get("/user/profile",(req,res)=>{
    // console.log('Cookies: ', req.cookies);
    

    // // Cookies that have been signed
    // console.log('Signed Cookies: ', req.signedCookies);
    // res.json(req.cookies);
    const {token} =req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
          if(err) throw err;
          res.json(info);
    });
    app.post('/logout', (req,res)=>{
        res.cookie('token','').json("ok");
    });
   

});




app.get('/flight-details', async (req, res) => {
    const params = {
        access_key:'a966a1978973cbb8e18af0b4be83023c',
        limit:30
      }
      
      axios.get('http://api.aviationstack.com/v1/flights', {params})
        .then(response => {
          const apiResponse = response.data;
          res.json(apiResponse["data"]);
          if (Array.isArray(apiResponse['results'])) {
            res.send(apiResponse);
              apiResponse['results'].forEach(flight => {
                  if (!flight['live']['is_ground']) {
                      console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
                          `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
                          `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
                  }
              });
          }
        }).catch(error => {
          console.log(error);
        });
  });

  


// Define your API endpoint for updating or creating documents
app.put('/book/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Try to find the document by flight number
      const document = await Flight.findOne({ 'flight.number': id });
  
      if (document) {
       
        document.ticketsBooked = document.ticketsBooked +1
        
  
        
        await document.save();
  
        res.send('Document updated successfully');
      } else {
        // If no document is found, create a new one with default values from the request body
        const newDocument = new MyModel({
          flight_date: req.body.flight_date ,
          number: id,
          airline: req.body.airline,
          departure : req.body.departure,
          arrival: req.body.arrival,
          ticketsBooked: 1
        });
  
        // Save the new document
        await newDocument.save();
  
        res.send('Document created successfully');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  app.post('/add-flights', async (req, res) => {
    const {number,departure,arrival,flight_date}=req.body;
    try{
        const userDoc = await Flight.create({
          number,
          departure,
          arrival,
          flight_date

            
        });
        res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);
    }
});


  



app.listen(port, () => console.log(`Example app listening on port ${port}!`));