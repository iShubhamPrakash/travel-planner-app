
const updateUI = (data) => {

  console.log("Res data", data);
  
  document.querySelector('#polarity').innerHTML = data.polarity
  document.querySelector('#subjectivity').innerHTML = data.subjectivity
  document.querySelector('#polarity_confidence').innerHTML = data.polarity_confidence
  document.querySelector('#subjectivity_confidence').innerHTML = data.subjectivity_confidence
  document.querySelector('#article').innerHTML = data.text
}

export { updateUI };