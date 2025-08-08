import { allocateDominoes } from "./allocateDominoes";
import { tileData } from "./getNeighborsAndCurrentTile";
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
  setDominoesUsed,
  finalScore,
  setFinalScore
) => {
  let dominoDots = Object.values(selectedDominoObject).join("");
  console.log("wordDomination in hadnletile fits")
  console.log("dominoDots in beginning of handlTileFits", dominoDots);
  console.log("handle tile fits running");
  console.log("tileData.currentTile", tileData.currentTile);
  console.log("dominoIds in grid in handleTilePress", dominoIdsInGrid);
  console.log(
    "gridSelectedDominoObjects in handleTileFits",
    gridSelectedDominoObjects
  );
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
    setSingleGameScore,
    finalScore,
    setFinalScore
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
    setWorDomination,
    worDominationCount,
    setWorDominationCount
  ) 


  allocateDominoesPrep(
    dominoesInHand,
    setDominoesInHand,
    selectedDominoObject,
    setSelectedDominoObject,
    gameStart,
    dominoesUsed,
    setDominoesUsed
  );
  // checkWorDomination(
  //   gridSelectedDominoObjects,
  //   worDomination,
  //   setWorDomination
  // );
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
  console.log("scoreSingleDomino", scoreSingleDomino);
  console.log("scoreArraySingleGame", scoreArraySingleGame);
  let scoreArrayPerDomino = [...scoreArraySingleGame];
  console.log("scoreArrayPerDomino", scoreArrayPerDomino);
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
  setWorDomination,
  worDominationCount,
  setWorDominationCount
) {
  console.log("populateValuesInGridRunning!!!!!!!!!");

  console.log("populateValuesInGrid running");

  console.log(
    "dominoIdsInGrid in beginning of populate values",
    dominoIdsInGrid
  );

  const selectedDominoObjectString =
    Object.values(selectedDominoObject).join("");

  const reverseSelectedDominoObject =
    tileData.currentTile[1] + tileData.currentTile[0];
  //   console.log("reverseSelectedDominoes in populatevalues", reverseSelectedDominoObject)

  console.log("tile id in populatevalues", tileId);

  setGridSelectedDominoObjects(
    gridSelectedDominoObjects.map((domino, index) => {
      console.log(`🔍 Mapping index ${index}`);
      if (index !== tileId) {
        console.log(`➡️ Index ${index} unchanged: ${domino}`);
        return domino;
      }

      const newValue = tileData.currentTile;

      console.log(`🛠 Updating index ${index}: ${domino} → ${newValue}`);
      return newValue;
    })
  );

  console.log("dominoIDSINGRID BEFORE UPDATE", dominoIdsInGrid);
  console.log(
    " Object.keys(selectedDominoObject).toString()",
    Object.keys(selectedDominoObject).toString()
  ); //works
  const newDominoIdsInGrid = dominoIdsInGrid.map((domino, index) => {
    return index === tileId
      ? Object.keys(selectedDominoObject).toString()
      : domino;
  });

  console.log("NEW DOMINOES IDS IN GRID", newDominoIdsInGrid);

  setDominoIdsInGrid(newDominoIdsInGrid);

  console.log("dominoeIdsGrid", newDominoIdsInGrid);
  checkWorDomination(
    newDominoIdsInGrid,
    worDomination,
    setWorDomination,
    worDominationCount,
    setWorDominationCount
  
  ) 
  console.log("about to run allocateDominoesPrep in function");
}
function allocateDominoesPrep(
  dominoesInHand,
  setDominoesInHand,
  selectedDominoObject,
  setSelectedDominoObject,
  gameStart,
  dominoesUsed,
  setDominoesUsed
) {
  console.log("allocateDominoPrep running in handleTileFits");
  let index = dominoesInHand.indexOf(selectedDominoObject);
  let dominoesInHandCopy = [...dominoesInHand];
  console.log("INDEX", index);
  //remove domino from dominoesInHand
  if (index !== -1) {
    dominoesInHandCopy.splice(index, 1); // ✅ Removes only selectedDominoObject
    setDominoesInHand(dominoesInHandCopy);
  }

  //reset to choose new displayDomino
  setSelectedDominoObject(null);
  // console.log("tile placed in handletilefits, NEXT FUNCTION WORDOMINATION", tilePlaced);
}
function checkWorDomination(
  gridSelectedDominoObjects,
  worDomination,
  setWorDomination,
  worDominationCount,
  setWorDominationCount

) {
  console.log("check worDomination running");
  console.log(
    "gridSeletedDominoObjects in WorDomination",
    gridSelectedDominoObjects
  );
  if (
    gridSelectedDominoObjects.every((item) => item !== "empty") 
  
  ) {
    setWorDomination(true);
    setWorDominationCount(prev=>prev+1)
    console.log("word domination", worDomination)
    console.log("worDomination condition met");
  } else {
    console.log("worDomination condition not met");
  }
}
export { handleTileFits };
