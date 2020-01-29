const production = false;

const apiUrl = production ? 'https://travel-app.herokuapp.com/addTrip' : 'http://localhost:8000/trip';

export {apiUrl}