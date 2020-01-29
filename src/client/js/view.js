import { apiUrl } from './config';
import { deleteTrip } from './api';

const updateUI = async () => {
  try{
    let response = await fetch(apiUrl);
    let data = await response.json();

    document.querySelector('#results').innerHTML="";

    await data.map((trip,index)=>{
      document.querySelector('#results').innerHTML+=`
        <div class="trip">
          <button class="delete-btn" title="Delete this trip">X</button>
          <div class="photo">
              <img src="${trip.image}"/>
          </div>

          <div class="note">
              <strong>Note:</strong>
              <p>${trip.note}</p>
          </div>

          <div class="info">
              <strong>Destination:</strong>
              <p class="name">${trip.name}</p>
              <br/>
              <br/>
              <strong>Departing:</strong>
              <p class="time">${trip.date}</p>
              <br/>
              <br/>
              <strong>Typical weather for then is:</strong>
              <br/>
              <br/>
              <strong>High: </strong>
              <span class="high">${trip.high}</span>
              <br/>
              <br/>
              <strong>Low: </strong>
              <span class="low">${trip.low}</span>
              <br/>
              <br/>
              <p class="weather_text">${trip.weather}</p>
          </div>
        </div>
      `;
    });

    await document.querySelectorAll('.delete-btn').forEach((btn,index)=>{
      btn.addEventListener('click',e=>{
        deleteTrip(index);
      });
    });

  }
  catch(e){
    console.log(e);
  }
}

export { updateUI };
