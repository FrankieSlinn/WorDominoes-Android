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
  console.log("handle tile fits running")

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
      setGridSelectedDominoObjects
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
  ) 
  console.log("about to run checkWorDomination")


  checkWorDomination(gridSelectedDominoObjects, worDomination, setWorDomination)
    

  console.log("tilePlaced in tile FITS", tilePlaced);


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
  let scoreSingleDomino = Number(dominoDots[0]) + Number(dominoDots[1]);
  // console.log("scoreSingleDomino", scoreSingleDomino)
  let scoreArrayPerDomino = [...scoreArraySingleGame];
  // console.log("scoreArrayPerDomino before concat with single domino", scoreArrayPerDomino);
  scoreArrayPerDomino.push(scoreSingleDomino);

  let placeholderSingleGameScore = scoreArrayPerDomino
    .reduce((sum, num) => sum + num, 0)
    .toFixed(1);
  setSingleGameScore(placeholderSingleGameScore);
  console.log("!!!!!!!!total single game Score", singleGameScore);
  setScoreArraySingleGame(scoreArrayPerDomino);
console.log("scoreArraySingleGame", scoreArraySingleGame)
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

  // setDominoesInHand(dominoesInHandCopy); // ✅ Updates state with the correct array


  setTilePlaced(true);
  //For individual tile
  setTilePlacedState(true);
  setTurnStart(true);
  setWordSubmitted(false);
  setDisplayDomino("");
  setShowMakeWord(false);

  setDominoSelected(false);
}

function populateValuesInGrid(
displayDomino, 
dominoRotated,
  selectedDominoObject,
  setGameFinished,
  dominoIdsInGrid,
  setDominoIdsInGrid,
  tileId,
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects
) {
  console.log("populateValuesInGrid running")
  let selectedDominoObjectString = Object.values(selectedDominoObject).join("");
  let reverseSelectedDominoObject =
    selectedDominoObjectString[1] + selectedDominoObjectString[0];

  console.log(
    "tile good to be placed",
    "dominoIdsInGrid empty, can add tile to it.displaydomino:",
    displayDomino,
    "domino rotated?",
    dominoRotated
  );
  console.log(
    "selected DominoObject in tile fits",
    selectedDominoObject,
    "tileId",
    tileId
  );
  setGameFinished(false);

  setDominoIdsInGrid((prevDominos) =>
    prevDominos.map((domino, index) =>
      index === tileId ? Object.keys(selectedDominoObject).toString() : domino
    )
  );
  console.log("dominoIdsInGrid", dominoIdsInGrid);

  if (tileId < 6) {
    // Adds number of dots to the array
    setGridSelectedDominoObjects((prevDominos) =>
      prevDominos.map((domino, index) =>
        index === tileId
          ? Object.values(selectedDominoObject).join("") // Converts to string correctly
          : domino
      )
    );
    console.log("gridselecteddominoObjects in populate values in grid", gridSelectedDominoObjects);
  } else {
    setGridSelectedDominoObjects((prevDominos) =>
      prevDominos.map((domino, index) =>
        index === tileId ? reverseSelectedDominoObject : domino
      )
    );
  }

  console.log("dominoes in grid in successful tile placement", dominoIdsInGrid);
  console.log(
    "gridSelectedDominoObjects after set in tile pressed n successful tile placement",
    gridSelectedDominoObjects
  );
}

function allocateDominoesPrep(
  dominoesInHand,
  setDominoesInHand,
  selectedDominoObject,
  setSelectedDominoObject, 

  gameStart
) {
  if (!selectedDominoObject) {
    console.warn("selectedDominoObject is null in allocateDominoesPrep");
  }
  console.log("allocateDominoPrep running");
  let index = dominoesInHand.indexOf(selectedDominoObject);
  let dominoesInHandCopy = [...dominoesInHand];
  console.log("INDEX", index);

  if (index !== -1) {
    dominoesInHandCopy.splice(index, 1); // ✅ Removes only selectedDominoObject
  }
  // console.log("tile placed in handletilefits", tilePlaced);
  allocateDominoes(dominoesInHandCopy, setDominoesInHand, gameStart);
  setSelectedDominoObject(null);
}
function checkWorDomination(gridSelectedDominoObjects, worDomination, setWorDomination){
  console.log("check worDomination running", worDomination)
  if (gridSelectedDominoObjects.every((item) => item !== "empty")) {
    setWorDomination(true);
    console.log("worDomination", worDomination);
  }
}

export { handleTileFits };
