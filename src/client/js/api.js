import {updateUI} from './view'

const submitToServer = async (apiUrl,{place,date,note}) => {

  try {
    let response = await fetch(apiUrl+"/trip",
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

const deleteTrip = async (apiUrl,index)=>{
  let dlt= confirm(`Delete this trip?`);

  if(dlt===false) return;

  try {
    await fetch(apiUrl+"/trip",
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