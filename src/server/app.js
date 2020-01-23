const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

dotenv.config();

let app = express()

let travelData= [];

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

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const getImageFromPixabay= async (key,image)=>{
    const url= `https://pixabay.com/api/?key=${key}&q=${image}`;

    return await axios.get(url).then(res=>{
        if(res.data.totalHits !== 0)
            return res.data.hits[0].largeImageURL;
        else
            return {error: 'no results'};
    });
}

const getDataFromDarkSky= async(key,lat,long,time="")=>{
    const url= `https://api.darksky.net/forecast/${key}/${lat},${long},${time}`;
    return await axios.get(url).then(res => {
        return res.data.daily.data[0];
    });
}

const getDataFromGeoNames= async (username,city)=>{
    const url=`http://api.geonames.org/postalCodeSearchJSON?${city}&maxRows=10&username=${username}`;
    return axios.get(url).then(res => {
        return res.data.postalCodes[0];
    });
}

// app.get('/image',async (req,res)=>{
//     let data= await getImageFromPixabay(process.env.PIXABAY_API_KEY,req.body.iimage);
//     res.send(data);
// })

module.exports = app;
