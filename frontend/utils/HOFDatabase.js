import Constants from 'expo-constants';

const localIP = Constants.manifest?.debuggerHost?.split(':').shift();

const isDev = __DEV__; // true if in development mode

// Only build baseURL if localIP exists
export const baseURL = 
  `http://192.168.0.246:3000/api` // Dev server on PC

  function printURL(){
    console.log("baseUrl and hofdataroute", `${baseURL}/hofdataroute`)

  }


async function fetchHOFEntries() {



  try {

    const response = await fetch(`${baseURL}/hofdataroute`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data; // Optional: return the data if needed elsewhere
  } catch (error) {
    console.error('Error fetching HOF entries:', error);
    return null; // Optional: fallback return value
  }
}
async function submitScore(handle, endOfGameScore){
  try {
    const response = await fetch(`${baseURL}/hofdataroute`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        handle: handle,
        score: endOfGameScore,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error:', data.error);
    } else {
      console.log('Success:', data);
    }
  } catch (error) {
    console.error('Submit ScoreRequest failed:', error);
  }
};



export { fetchHOFEntries, submitScore };
