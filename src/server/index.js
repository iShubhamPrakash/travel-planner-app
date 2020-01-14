const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
var aylien = require("aylien_textapi");

const port = process.env.PORT || 8000;

dotenv.config();



var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

let app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/evaluate', function (req, res) {
    textapi.sentiment({
        'url': req.body.url
        }, function(error, response) {
            res.send(response)
        }
    ); 
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`App listening on port ${port}!`)
})

