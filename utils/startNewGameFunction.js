import { allocateDominoes } from "./allocateDominoes";
// import {dominoes} from ".dominoes";

function startNewGameFunction(setGameStart, setGameFinished, setSingleGameScore, setDominoesInHand, setWord1Success, setWord2Success, setDisplayDomino,
  setDominoRotated, setNumberDominoesInGrid, setDominoIdsInGrid, setSelectedDominoObject, setGridSelectedDominoObjects, setTilePlaced, setTurnStart, 
  setScoreArraySingleGame, worDomination, setWorDomination,  setShowMakeWord, setDominoSelected, setWordSubmitted, dominoesUsed, setDominoesUsed
){
    console.log("start new game running")
    setGameStart(true)
    setGameFinished(false)
    setSingleGameScore(0)
    setDominoesInHand([])
    setWord1Success(false)
    setWord2Success(false)
    setDisplayDomino=(null)
    setDominoRotated(false)
    setNumberDominoesInGrid(0)
    setDominoIdsInGrid(["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"])
    setSelectedDominoObject(null)
    setGridSelectedDominoObjects(["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"])
    setTilePlaced(false)
    setTurnStart(true)
    if(worDomination!=true){
   
    setScoreArraySingleGame([])}

    // allocateDominoes([], setDominoesInHand, true);
    setShowMakeWord(false)
    setDominoSelected(false)
    setWordSubmitted(false)
    setDominoesUsed([])

   
  }







export{startNewGameFunction}