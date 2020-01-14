import { apiUrl } from './config';

const submitToEvaluate = async (url) => {

  try {
    let response = await fetch(apiUrl,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url:url})
      }
    );

    let data = await response.json();

    return data;
    
  } catch (e) {

    return e;
  }
}


export { submitToEvaluate };