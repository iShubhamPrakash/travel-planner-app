const production = false;

const apiUrl = production ? 'https://evaluate-text-with-nlp.herokuapp.com/evaluate' : 'http://localhost:8000/evaluate';

export {apiUrl}