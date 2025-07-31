import { fetchHOFEntries} from "./HOFDatabase.js";

const numberOfHOFEntries = 20;
async function loadEntries(setEntries, setMinHOFScore) {
    try {
      console.log("HOF Running")
      const data = await fetchHOFEntries();
      const sorted = data.sort((a, b) => b.score - a.score);
      const shortenedEntries = sorted.slice(0, numberOfHOFEntries)
      setEntries(shortenedEntries);
      const minScore = shortenedEntries[shortenedEntries.length-1].score
      setMinHOFScore(minScore)
      console.log("MINSCORE", minScore)
      console.log("Fetched HOF Entries:", data);
      return minScore; 
    } catch (error) {
      console.error("Error fetching Hall of Fame entries:", error);
    }
  }

  export {loadEntries}