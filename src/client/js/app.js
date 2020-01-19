import { submitToEvaluate } from './api';
import { updateUI } from './view';
import { validatePlace } from './util';


let init = (event) => {
  console.log('DOM fully loaded and parsed');
  //Handle form submit event
  const submitBtn = document.querySelector('#submit-btn');
  const loadingBox = document.querySelector('#loader-box');
  const resultBox = document.querySelector('#result-box');

  submitBtn.addEventListener('click', async e => {
    e.preventDefault();
    const place = document.querySelector('#place').value;

    if (!validatePlace(place)) {
      alert("Please enter a Place Name");
      return ;
    }

    try {
      //Show loading animation
      loadingBox.classList.remove('hidden');

      let data = await submitToEvaluate(place);
      await updateUI(data);
      //Hide loader and show result
      loadingBox.classList.add('hidden');
      resultBox.classList.remove('hidden');

    } catch (e) {
      document.querySelector('#results').innerText = "Something gone wrong.. please try again...";
      console.log(e);
    }

  })

}


window.addEventListener('DOMContentLoaded', init);

export { init };