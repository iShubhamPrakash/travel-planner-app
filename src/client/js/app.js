import { submitToServer } from './api';
import { updateUI } from './view';
import { validatePlace } from './util';
import { apiUrl } from './config';


// Main function
let init = async (event) => {
  console.log('DOM fully loaded and parsed');
  //Handle form submit event
  const submitBtn = document.querySelector('#submit-btn');

  submitBtn.addEventListener('click', async e => {
    e.preventDefault();
    const place = document.querySelector('#place').value.trim();
    const date = document.querySelector('#date').value;
    const note = document.querySelector('#note').value.trim();

    if (!validatePlace(place)) {
      alert("Please enter a Place Name");
      return ;
    }

    if (date.length===0) {
      alert("Please enter a Date");
      return ;
    }

    try {

      await submitToServer(apiUrl,{place,date,note});
      await updateUI();

      clearTextInput();

    } catch (e) {
      document.querySelector('#results').innerText = "Something gone wrong.. please try again...";
      console.log(e);
    }
  })
}

//Clears the input boxes-
function clearTextInput(){
  document.querySelector('#place').value="";
  document.querySelector('#date').value="";
  document.querySelector('#note').value="";
}


export { init };
