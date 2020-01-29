const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

dotenv.config();

let app = express()

let travelData= [];

let sampledata={
    name:"Paris, 1",
    date:"07-07-2020",
    image:"https://pixabay.com/get/54e4d1434a54aa14f6da8c7dda79367a1c3ad8e355576c4870277bd7944cc651bf_1280.jpg",
    note:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque neque libero molestiae quod voluptas, alias ipsa ad dolorem soluta corrupti ratione magni quasi eum tenetur enim commodi ullam aperiam optio?",
    high: "46",
    low:"35",
    weather:"Mostly cloudy throughout the day"
};

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

// GET route to send the travel data
app.get('/trip', (req,res)=>{
    res.send(travelData);
})

//POST route to update travel data
app.post('/trip', (req,res)=>{
    const {place,date,note}= req.body;
    travelData=[{...sampledata,name:place,date:date,note:note},...travelData];
    res.send({success:true});
})

//POST route to delete an entry from the travel data
app.delete('/trip', (req,res)=>{
    travelData=travelData.filter((data,index)=>index!=req.body.id);
    res.send({success:true, detetedId:req.body.id});
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
