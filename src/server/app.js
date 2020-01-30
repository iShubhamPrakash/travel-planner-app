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

// GET route to send the travel data
app.get('/trip', (req,res)=>{
    res.send(travelData);
})

//POST route to update travel data
app.post('/trip', async (req,res)=>{
    const {place,date,note}= req.body;
    //Fetch coordinates from GeoNames API
    const coord= await getDataFromGeoNames(process.env.GEONAMES_USERNAME,place);

    if(coord){
        //Fetch weather from darksky API
        let weatherInfo= await getDataFromDarkSky(process.env.DARK_SKY_API_KEY, coord.lat, coord.lng,date);

        if(weatherInfo){
            //Fetch image from pixabay API
            const image = await getImageFromPixabay(process.env.PIXABAY_API_KEY,place);

            travelData=[
                {
                    name:place,
                    date:date,
                    note:note,
                    image:image,
                    high:weatherInfo.high || "No data available",
                    low:weatherInfo.low || "No data available",
                    weather:weatherInfo.weather|| "No data available"
                },
                ...travelData];
            res.send({success:true});
        }else{
            console.log("No weather info");
            res.send({success:false,message:"Could not get the weather data"});
        }

    }else{
        console.log("No cords...");
        res.send({success:false, message:"Could not get the coordinated"});
    }
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
            return "https://i.ibb.co/PwKhD7c/not-found-2384304-1280.jpg";
    });
}

const getDataFromDarkSky= async(key,lat,long,time)=>{
    const url= `https://api.darksky.net/forecast/${key}/${lat},${long},${time}T00:00:00`;
    try{
        return await axios.get(url).then(res => {
            return ({
                high: res.data.daily.data[0].temperatureHigh,
                low: res.data.daily.data[0].temperatureLow,
                weather: res.data.daily.data[0].summary
            });
        });
    }catch(e){
        console.log(e);
        return {}
    }
}

const getDataFromGeoNames= async (username,city)=>{
    const url=`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`;
    try{
        return await axios.get(url)
                .then(res=>{
                    return {
                        lat:res.data.geonames[0].lat,
                        lng:res.data.geonames[0].lng
                    }
                });
    } catch(e){
        console.log(e);
    }
}

module.exports = app;
