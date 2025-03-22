import {storeGamesArray, getGamesArray }from"./asynchStorageUtils";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

let numberTiles =12;
// console.log("handleTileFits", handleTileFits())


function handleFinishGame(gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore){
    console.log("handleFinishGame running!!!")
    // console.log("singleGameScore before addScoreToArray done", singleGameScore)
    addScoreToScoreArray( gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore)
  


    

  

}
async function addScoreToScoreArray(gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore
   
){
//  let gameFinishedScore= handleTileFits()

console.log("game finished - addScoretoScoreArray running!!!")


  console.log("worDominationCount", worDominationCount)
  console.log("worDominationCount*30", worDominationCount*30)
 

//   console.log("score", score)
  try {
    let endOfGameScore= Number(singleGameScore+worDominationCount*30)
    console.log("endOfGameScore", endOfGameScore)
      const games = (await getGamesArray()) || [];// Await for the stored games array. Provide empty array if no gamesArray 
    console.log("Retrieved gamesArray:", games);
  
    let newGamesArray = games.concat([endOfGameScore])
    console.log("newGamesArray", newGamesArray)
    setGamesArray(newGamesArray); // Update state
    await storeGamesArray(newGamesArray); // Store updated array in AsyncStorage

    console.log("FINISH GAME Updated games array:", gamesArray);
  } catch (error) {
    console.error("Error updating games array:", error);
  }
}
  

  export {handleFinishGame}