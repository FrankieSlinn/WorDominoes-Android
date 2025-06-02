import { allocateDominoes } from "./allocateDominoes";
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
  setSelectedLetters2
) => {
  let dominoDots = Object.values(selectedDominoObject).join("");
  console.log("handle tile fits running");

  resetForTilePlaced(
    setSelectedDominoObject,
    setTilePlaced,
    setTilePlacedState,
    setTurnStart,
    setWordSubmitted,
    setDisplayDomino,
    setShowMakeWord,
    setDominoSelected
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
    setWorDomination 
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
    setSingleGameScore
  );

  allocateDominoesPrep(
    dominoesInHand,
    setDominoesInHand,
    selectedDominoObject,
    setSelectedDominoObject,
    gameStart
  );

  checkWorDomination(
    gridSelectedDominoObjects,
    worDomination,
    setWorDomination
  )
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
  let scoreArrayPerDomino = [...scoreArraySingleGame];
  //Add domino's value to values of all other dominoes placed
  scoreArrayPerDomino.push(scoreSingleDomino);
  //count how many domino dots in all dominoes placed
  let placeholderSingleGameScore = scoreArrayPerDomino
    .reduce((sum, num) => sum + num, 0)
    .toFixed(1);
  setSingleGameScore(placeholderSingleGameScore);
  console.log("!!!!!!!!total single game Score", singleGameScore);
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
  setDominoSelected
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
  setWorDomination // Add this
) {
  console.log("populateValuesInGrid running");

  const selectedDominoObjectString = Object.values(selectedDominoObject).join("");
  const reverseSelectedDominoObject =
    selectedDominoObjectString[1] + selectedDominoObjectString[0];

  setGameFinished(false);

  setDominoIdsInGrid((prevDominos) =>
    prevDominos.map((domino, index) =>
      index === tileId ? Object.keys(selectedDominoObject).toString() : domino
    )
  );

  const newGrid = gridSelectedDominoObjects.map((domino, index) => {
    if (index !== tileId) return domino;
    //array will have bottom and left dominoes in reverse to how they're displayed
    return tileId < 6
      ? Object.values(selectedDominoObject).join("")
      : reverseSelectedDominoObject;
  });

  setGridSelectedDominoObjects(newGrid); // update state with local copy
  checkWorDomination(newGrid, setWorDomination); // use updated copy

  console.log("updated gridSelectedDominoObjects", newGrid);
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
  }
  // console.log("tile placed in handletilefits", tilePlaced);
  allocateDominoes(dominoesInHandCopy, setDominoesInHand, gameStart);
  //reset to choose new displayDomino
  setSelectedDominoObject(null);
}
function checkWorDomination(gridSelectedDominoObjects, setWorDomination) {
  console.log("check worDomination running");
  if (gridSelectedDominoObjects.every((item) => item !== "empty")) {
    setWorDomination(true);
    console.log("worDomination condition met");
  }
}
export { handleTileFits };
