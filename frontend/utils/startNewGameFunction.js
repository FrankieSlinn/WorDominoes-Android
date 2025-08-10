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
 
  if (worDomination != true) {
    setScoreArraySingleGame([]);
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
  console.log("gameResets running")
  setGameStart(true);
  allocateDominoes(dominoesInHand, setDominoesInHand, turnStart, true, dominoesUsed,setDominoesUsed);
  setGameFinished(false);
  setDominoesInHand([]);
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
  setDominoesUsed([]);
  setShowHOFEntry(false);
  setShowYouInHOF(false);
setHandle("");


}

export { startNewGameFunction, gameResets };
