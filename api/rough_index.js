const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const Flights = require("./models/Flight")

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://sarav:saravanan18@flightbookingcluster.7mf02fh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect('mongodb+srv://sarav:saravanan18@flightbookingcluster.7mf02fh.mongodb.net/?retryWrites=true&w=majority');


  console.log('Connected to MongoDB');

  // const db = client.db('FlightBookingInfo');
  // const regUserInfoCollection = db.collection('RegUserInfo');
  // const adminRegUserInfoCollection = db.collection('AdminRegUserInfo');

  // app.post('/user/register', (req, res) => {
  //   const data = req.body;
  //   regUserInfoCollection.insertOne(data, (err, result) => {
  //     if (err) {
  //       console.error('Failed to insert data:', err);
  //       res.status(500).json({ message: 'Failed to insert data' });
  //     } else {
  //       res.json({ message: 'Data inserted successfully', id: result.insertedId.toString() });
  //     }
  //   });
  // });

  // app.post('/user/login', (req, res) => {
  //   const { username, password } = req.body;
  //   regUserInfoCollection.findOne({ username, password }, (err, user) => {
  //     if (err) {
  //       console.error('Failed to perform login validation:', err);
  //       res.status(500).json({ message: 'Failed to perform login validation' });
  //     } else if (user) {
  //       const token = jwt.sign({ username }, 'u67VJjmJIhJU5YaYI1HXww', { expiresIn: '1h' });
  //       res.cookie('access_token', token, { httpOnly: true });
  //       res.json({
  //         _id: user._id.toString(),
  //         access_token: token,
  //         username: user.username,
  //       });
  //     } else {
  //       res.status(401).json({ message: 'Invalid credentials' });
  //     }
  //   });
  // });

  // app.post('/admin/login', (req, res) => {
  //   const { username, password } = req.body;
  //   adminRegUserInfoCollection.findOne({ username, password }, (err, user) => {
  //     if (err) {
  //       console.error('Failed to perform admin login validation:', err);
  //       res.status(500).json({ message: 'Failed to perform admin login validation' });
  //     } else if (user) {
  //       const token = jwt.sign({ username }, 'u67VJjmJIhJU5YaYI1HXww', { expiresIn: '1h' });
  //       res.cookie('access_token', token, { httpOnly: true });
  //       res.json({
  //         _id: user._id.toString(),
  //         access_token: token,
  //         username: user.username,
  //       });
  //     } else {
  //       res.status(401).json({ message: 'Invalid credentials' });
  //     }
  //   });
  // });

  // app.post('/logout', (req, res) => {
  //   res.clearCookie('access_token');
  //   res.json({ message: 'Logout successful' });
  // });

  // app.get('/user/profile', verifyToken, (req, res) => {
  //   const current_user = req.user.username;
  //   res.json({ message: 'Protected route', user: current_user });
  // });

  // function verifyToken(req, res, next) {
  //   const token = req.cookies.access_token;
  //   if (!token) {
  //     return res.status(401).json({ message: 'Access token not found' });
  //   }
  //   jwt.verify(token, 'u67VJjmJIhJU5YaYI1HXww', (err, decoded) => {
  //     if (err) {
  //       return res.status(401).json({ message: 'Invalid access token' });
  //     }
  //     req.user = decoded;
  //     next();
  //   });
  // }

  app.post("/addFlights", async(req,res)=>{
    const {
      flightId,
      flightName,
      arrival,
      arrivalTime,
      destination,
      destinationTime,
      flightCapacity,
      ticketsBooked
    } = req.body;
    try{
      const userDoc = await Flights.create({
        flightId,
        flightName,
        arrival,
        arrivalTime,
        destination,
        destinationTime,
        flightCapacity,
        ticketsBooked
      });
      res.json(userDoc);
  }
  catch(e){
      res.status(400).json(e);
  }

  })

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });


