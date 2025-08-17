import Constants from "expo-constants";

// const localIP = Constants.manifest?.debuggerHost?.split(":").shift();

// const isDev = __DEV__; // true if in development mode

// Only build baseURL if localIP exists
export const baseURL = `http://192.168.0.246:3000/api`; // Dev server on PC


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
    console.error("Error fetching HOF entries:", error);
    return null; // Optional: fallback return value
  }
}
async function submitScore(handle, endOfGameScore) {
  try {
    console.log("submitScore running wit score", endOfGameScore);
    const response = await fetch(`${baseURL}/hofdataroute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handle: handle,
        score: endOfGameScore,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error in submitScore:", data.error);
    } else {
      console.log("Success:", data);
    }
  } catch (error) {
    console.error("Submit ScoreRequest failed:", error);
  }
}

async function deleteHOFEntriesBelowScore(threshold) {
  try {
    console.log("threshold score to delete",  threshold)
    const allEntries = await fetchHOFEntries(); // assumes it returns [{ _id, handle, score }, ...]

    const toDelete = allEntries.filter(entry => entry.score < threshold);
    console.log("toDelete", toDelete)

    for (const entry of toDelete) {
      const response = await fetch(`${baseURL}/hofdataroute/${entry._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.warn(`Failed to delete entry with ID ${entry._id}`);
      } else {
        console.log(`Deleted entry with score ${entry.score}`);
      }
    }

    console.log(`✅ Deleted ${toDelete.length} low-scoring entries`);
  } catch (error) {
    console.error("Error deleting low-scoring entries:", error);
  }
}

export { fetchHOFEntries, submitScore, deleteHOFEntriesBelowScore };
