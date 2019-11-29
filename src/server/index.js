// hide API credentials
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
let projectData = {}

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require('aylien_textapi')
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// Start up an instance of app
const app = express()

/* Dependencies */
/* Middleware*/

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Initialize the main project folder
app.use(express.static('./dist'))

// Initialize route
app.get('/', function (req, res) {
    res.send('./dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});


app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// Post route
app.post('/save', function (req, res) {
    projectData.name = req.body.name;
    console.log('Post recieved');
    res.end();
});

// Initialize route and make API call
app.get('/api', function(req, res) {
   let result = '';
   textapi.sentiment({
     url: projectData.name,
     mode: 'document'
}, function(error, response) {
      if (error === null) {
      console.log(response);
      res.send(response);
      }
    });
});
