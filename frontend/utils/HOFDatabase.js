async function fetchHOFEntries() {
  try {
    const response = await fetch('http://localhost:3000/api/hofdataroute');
    const data = await response.json();
    console.log(data);
    // Use setState or however you manage state to update UI
  } catch (error) {
    console.error('Error fetching HOF entries:', error);
  }
}

export {fetchHOFEntries}