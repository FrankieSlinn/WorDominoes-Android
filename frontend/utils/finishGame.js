import { storeGamesArray, getGamesArray } from "./asynchStorageUtils";
import AsyncStorage from "@react-native-async-storage/async-storage";

let numberTiles = 12;
// console.log("handleTileFits", handleTileFits())

function handleFinishGame(
  gameFinished,
  setGameFinished,
  gamesArray,
  setGamesArray,
  worDomination,
  setWorDomination,
  worDominationCount,
  setWorDominationCount,
  singleGameScore,
  setSingleGameScore,
  finalScore,
  setFinalScore,
  showHOFEntry,
  setShowHOFEntry,
  handle, 
  minHOFScore
) {
  console.log("handleFinishGame running!!!");

  // console.log("singleGameScore before addScoreToArray done", singleGameScore)
  addScoreToScoreArray(
    gameFinished,
    setGameFinished,
    gamesArray,
    setGamesArray,
    worDomination,
    setWorDomination,
    worDominationCount,
    setWorDominationCount,
    singleGameScore,
    setSingleGameScore,
    finalScore,
    setFinalScore,
    showHOFEntry,
    setShowHOFEntry,
    handle,
    minHOFScore
  );

  setWorDomination(false);
  setWorDominationCount(0);
}
async function addScoreToScoreArray(
  gameFinished,
  setGameFinished,
  gamesArray,
  setGamesArray,
  worDomination,
  setWorDomination,
  worDominationCount,
  setWorDominationCount,
  singleGameScore,
  setSingleGameScore,
  finalScore,
  setFinalScore,
  showHOFEntry,
  setShowHOFEntry,
  handle,
  minHOFScore
) {
  console.log("game finished - addScoretoScoreArray running!!!");
  console.log("worDominationCount", worDominationCount);
  console.log("worDominationCount*30", worDominationCount * 30);

  //   console.log("score", score)
  try {
    let endOfGameScore = Number(singleGameScore + worDominationCount * 30);
    console.log("END OF GAME SCORE", endOfGameScore)
    setFinalScore(endOfGameScore);
    console.log("finalScore in finishGame function", finalScore);
    const games = (await getGamesArray()) || []; // Await for the stored games array. Provide empty array if no gamesArray
    let newGamesArray = games.concat([endOfGameScore??0]);
    console.log(("NEW GAMES ARRAY", newGamesArray))
    setGamesArray(newGamesArray); // Update state
    await storeGamesArray(newGamesArray); // Store updated array in AsyncStorage
    console.log("finalsCore", finalScore)
    console.log("MIN HOF SCore in Finish Game Function", minHOFScore)
    if(endOfGameScore>minHOFScore){
      console.log("endOfGame Score GREATER THAN MINHOFSCORE")
      
    setShowHOFEntry(true);}
    console.log("showHOFEntry in handleFinishGame", showHOFEntry);
  } catch (error) {
    console.error("Error updating games array:", error);
  }
}

export { handleFinishGame };
