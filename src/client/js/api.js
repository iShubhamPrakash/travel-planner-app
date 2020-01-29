import { apiUrl } from './config';
import {updateUI} from './view'

const submitToServer = async ({place,date,note}) => {

  try {
    let response = await fetch(apiUrl,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({place,date,note})
      }
    );

  } catch (e) {
    console.log(e);
  }
}

const deleteTrip = async (index)=>{
  let dlt= confirm(`Delete this trip?`);

  if(dlt===false) return;

  try {
    await fetch(apiUrl,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:index})
      }
    );
    await updateUI();
  } catch (e) {
    console.log(e);
  }
}


export { submitToServer,deleteTrip };