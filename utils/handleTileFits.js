import { allocateDominoes } from "./allocateDominoes";
import {tileData } from "./getNeighborsAndCurrentTile"
import { storeGamesArray, getGamesArray } from "./asynchStorageUtils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getLetterHand,
  storeLetterHand,
  getSelectedLetters1,
  storeSelectedLetters1,
  getSelectedLetters2,
  storeSelectedLetters2,
} from "./asynchStorageUtils";

const handleTileFits = async (
  tileId,
  wrongTileErrorInSpecificTile,
  tileFullError,
  displayDomino,
  dominoIdsInGrid,
  setDominoIdsInGrid,
  selectedDominoObject,
  setSelectedDominoObject,
  dominoSelected,
  setDominoSelected,
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,
  dominoRotated,
  setTilePlaced,
  setTilePlacedState,
  setTurnStart,
  setWordSubmitted,
  setDisplayDomino,
  setShowMakeWord,
  gameStart,
  setGameStart,
  dominoesInHand,
  setDominoesInHand,
  gamesArray,
  setGamesArray,
  scoreArraySingleGame,
  setScoreArraySingleGame,
  worDomination,
  setWorDomination,
  worDominationCount,
  setWorDominationCount,
  gameFinished,
  setGameFinished,
  singleGameScore,
  setSingleGameScore,
  setSelectedLetters1,
  setSelectedLetters2,
  dominoesUsed,
  setDominoesUsed
) => {
  let dominoDots = Object.values(selectedDominoObject).join("");
  console.log("dominoDots in beginning of handlTileFits", dominoDots)
  console.log("handle tile fits running");
  console.log("tileData.currentTile", tileData.currentTile)
  console.log("dominoIds in grid in handleTilePress", dominoIdsInGrid)
  console.log("gridSelectedDominoObjects in handleTileFits", gridSelectedDominoObjects)
  resetForTilePlaced(
    setSelectedDominoObject,
    setTilePlaced,
    setTilePlacedState,
    setTurnStart,
    setWordSubmitted,
    setDisplayDomino,
    setShowMakeWord,
    setDominoSelected, 
    dominoesInHand,
    setDominoesInHand
  );

  console.log("calling addScoreToScoreArraySingleGame before try");

    console.log("calling addScoreToScoreArraySingleGame");
    addScoreToScoreArraySingleGame(
      selectedDominoObject,
      scoreArraySingleGame,
      setScoreArraySingleGame,
      dominoDots,
      gameFinished,
      setGameFinished,
      gamesArray,
      setGamesArray,
      worDominationCount,
      setWorDominationCount,
      singleGameScore,
      setSingleGameScore
    );
    populateValuesInGrid(
      displayDomino,
      dominoRotated,
      selectedDominoObject,
      setGameFinished,
      dominoIdsInGrid,
      setDominoIdsInGrid,
      tileId,
      gridSelectedDominoObjects,
      setGridSelectedDominoObjects,
      worDomination,
      setWorDomination 
    );

  allocateDominoesPrep(
    dominoesInHand,
    setDominoesInHand,
    selectedDominoObject,
    setSelectedDominoObject,
    gameStart,
    dominoesUsed,
    setDominoesUsed
  );


  


};

function addScoreToScoreArraySingleGame(
  selectedDominoObject,
  scoreArraySingleGame,
  setScoreArraySingleGame,
  dominoDots,
  gameFinished,
  setGameFinished,
  gamesArray,
  setGamesArray,
  worDominationCount,
  setWorDominationCount,
  singleGameScore,
  setSingleGameScore
) {
  console.log("running score function in handle tile fits");
  //How many dots a domino has in total
  let scoreSingleDomino = Number(dominoDots[0]) + Number(dominoDots[1]);
  console.log("scoreSingleDomino", scoreSingleDomino)
  console.log("scoreArraySingleGame", scoreArraySingleGame)
  let scoreArrayPerDomino = [...scoreArraySingleGame];
  console.log("scoreArrayPerDomino", scoreArrayPerDomino)
  //Add domino's value to values of all other dominoes placed
  scoreArrayPerDomino.push(scoreSingleDomino);
  //count how many domino dots in all dominoes placed
  let placeholderSingleGameScore = scoreArrayPerDomino
    .reduce((sum, num) => sum + num, 0)
    .toFixed(1);
  setSingleGameScore(placeholderSingleGameScore);
  console.log("!!!!!!!!total single game Score", placeholderSingleGameScore);

  setScoreArraySingleGame(scoreArrayPerDomino);
  console.log("scoreArraySingleGame", scoreArraySingleGame);
}

function resetForTilePlaced(
  setSelectedDominoObject,
  setTilePlaced,
  setTilePlacedState,
  setTurnStart,
  setWordSubmitted,
  setDisplayDomino,
  setShowMakeWord,
  setDominoSelected,
  dominoesInHand,
  setDominoesInHand
) {
  console.log("setting values in handleTileFits");
  setTilePlaced(true);
  //For individual tile
  setTilePlacedState(true);
  setTurnStart(true);
  setWordSubmitted(false);
  setDisplayDomino("");
  setShowMakeWord(false);
  setDominoSelected(false);
  // setDominoesInHand(dominoesInHand.splice(selectedDominoIndex, 1))
}

//updates domino values in grid
function populateValuesInGrid(
  displayDomino,
  dominoRotated,
  selectedDominoObject,
  setGameFinished,
  dominoIdsInGrid,
  setDominoIdsInGrid,
  tileId,
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,
  worDomination,
  setWorDomination // Add this
) {
  console.log("populateValuesInGridRunning!!!!!!!!!")

  

  console.log("populateValuesInGrid running");


  console.log("dominoIdsInGrid in beginning of populate values", dominoIdsInGrid)


  const selectedDominoObjectString = Object.values(selectedDominoObject).join("");

  const reverseSelectedDominoObject =
    tileData.currentTile[1] + tileData.currentTile[0];
  //   console.log("reverseSelectedDominoes in populatevalues", reverseSelectedDominoObject)

  console.log("tile id in populatevalues", tileId)

  
  setGridSelectedDominoObjects(

    gridSelectedDominoObjects.map((domino, index) => {
      console.log(`🔍 Mapping index ${index}`);
      if (index !== tileId) {
        console.log(`➡️ Index ${index} unchanged: ${domino}`);
        return domino;
      }
  
      const newValue =  tileData.currentTile

  
      console.log(`🛠 Updating index ${index}: ${domino} → ${newValue}`);
      return newValue;
    })
  );

  console.log("dominoIDSINGRID BEFORE UPDATE", dominoIdsInGrid)
  console.log(" Object.keys(selectedDominoObject).toString()",  Object.keys(selectedDominoObject).toString())//works
  const newDominoIdsInGrid = dominoIdsInGrid.map((domino, index) => {
    return index === tileId
      ? Object.keys(selectedDominoObject).toString()
      : domino;
  });
  
  console.log("NEW DOMINOES IDS IN GRID", newDominoIdsInGrid);
  
  setDominoIdsInGrid(newDominoIdsInGrid);
  
  console.log("dominoeIdsGrid", newDominoIdsInGrid)
  // console.log("Object.values sleectedDominoObject In handleTileFits", Object.values(selectedDominoObject).join(""))
  checkWorDomination(    gridSelectedDominoObjects,
    worDomination,
    setWorDomination); // use updated copy


  setGameFinished(false);

}


function allocateDominoesPrep(
  dominoesInHand,
  setDominoesInHand,
  selectedDominoObject,
  setSelectedDominoObject,
  gameStart
) {
  console.log("allocateDominoPrep running in handleTileFits");
  let index = dominoesInHand.indexOf(selectedDominoObject);
  let dominoesInHandCopy = [...dominoesInHand];
  console.log("INDEX", index);
  //remove domino from dominoesInHand
  if (index !== -1) {
    dominoesInHandCopy.splice(index, 1); // ✅ Removes only selectedDominoObject
    setDominoesInHand(dominoesInHandCopy)
  }
  // console.log("tile placed in handletilefits", tilePlaced);
  // allocateDominoes(dominoesInHandCopy, setDominoesInHand, true, gameStart, dominoesUsed, setDominoesUsed);
  //reset to choose new displayDomino
  setSelectedDominoObject(null);
}
function checkWorDomination(    gridSelectedDominoObjects,
  worDomination,
  setWorDomination) {
  console.log("check worDomination running");
  if (gridSelectedDominoObjects.every((item) => item !== "empty")) {
    setWorDomination(true);
    console.log("worDomination condition met");
  }
  else{console.log("worDomination condition not met")}
}
export { handleTileFits };
