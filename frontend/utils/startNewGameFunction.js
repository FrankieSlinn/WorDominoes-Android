import { allocateDominoes } from "./allocateDominoes";
// import {dominoes} from ".dominoes";

function startNewGameFunction(
  gameStart, setGameStart,
  setGameFinished,
  setSingleGameScore,
  dominoesInHand,
  setDominoesInHand,
  setWord1Success,
  setWord2Success,
  setDisplayDomino,
  setDominoRotated,
  setNumberDominoesInGrid,
  setDominoIdsInGrid,
  setSelectedDominoObject,
  setGridSelectedDominoObjects,
  setTilePlaced,
  turnStart,
  setTurnStart,
  setScoreArraySingleGame,
  worDomination,
  setWorDomination,
  setShowMakeWord,
  setDominoSelected,
  setWordSubmitted,
  dominoesUsed,
  setDominoesUsed,
  showHOFEntry,
  setShowHOFEntry,
  showYouInHOF,
  setShowYouInHOF, 
  handle, 
  setHandle
) {
  console.log("start new game running");
  gameResets(  gameStart, setGameStart,
    setGameFinished,
    setSingleGameScore,
    dominoesInHand,
    setDominoesInHand,
    setWord1Success,
    setWord2Success,
    setDisplayDomino,
    setDominoRotated,
    setNumberDominoesInGrid,
    setDominoIdsInGrid,
    setSelectedDominoObject,
    setGridSelectedDominoObjects,
    setTilePlaced,
    turnStart,
    setTurnStart,
    setScoreArraySingleGame,
    worDomination,
    setWorDomination,
    setShowMakeWord,
    setDominoSelected,
    setWordSubmitted,
    dominoesUsed,
    setDominoesUsed,
    showHOFEntry,
    setShowHOFEntry,
    showYouInHOF,
    setShowYouInHOF, 
    handle, 
    setHandle)
  

  setSingleGameScore(0);
  allocateDominoes([], setDominoesInHand, true, true, [],setDominoesUsed);
 
  if (worDomination != true) {
    setScoreArraySingleGame([]);
    setWorDomination(false)
  }

}

function gameResets(  gameStart, setGameStart,
  setGameFinished,
  setSingleGameScore,
  dominoesInHand,
  setDominoesInHand,
  setWord1Success,
  setWord2Success,
  setDisplayDomino,
  setDominoRotated,
  setNumberDominoesInGrid,
  setDominoIdsInGrid,
  setSelectedDominoObject,
  setGridSelectedDominoObjects,
  setTilePlaced,
  turnStart,
  setTurnStart,
  setScoreArraySingleGame,
  worDomination,
  setWorDomination,
  setShowMakeWord,
  setDominoSelected,
  setWordSubmitted,
  dominoesUsed,
  setDominoesUsed,
  showHOFEntry,
  setShowHOFEntry,
  showYouInHOF,
  setShowYouInHOF, 
  handle, 
  setHandle){
  console.log("gameResets running - gameStart: ", gameStart)
  if (worDomination === true) {

    setWorDomination(false)
  }
  setGameStart(true);
  setDominoesInHand([]);
  setDominoesUsed([]);

  setGameFinished(false);

  setWord1Success(false);
  setWord2Success(false);
  setDisplayDomino = null;
  setDominoRotated(false);
  setNumberDominoesInGrid(0);
  setDominoIdsInGrid([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);
  setSelectedDominoObject(null);
  setGridSelectedDominoObjects([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);
  setTilePlaced(false);
  setTurnStart(true);
  setShowMakeWord(false);
  setDominoSelected(false);
  setWordSubmitted(false);
  setShowHOFEntry(false);
  setShowYouInHOF(false);
setHandle("");


}

export { startNewGameFunction, gameResets };
