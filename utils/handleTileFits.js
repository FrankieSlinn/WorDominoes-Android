import { allocateDominoes } from "./allocateDominoes";
import {storeGamesArray, getGamesArray }from"./asynchStorageUtils";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {getLetterHand, storeLetterHand, getSelectedLetters1, storeSelectedLetters1, getSelectedLetters2, storeSelectedLetters2} from "./asynchStorageUtils"


const handleTileFits= async(
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
  ) =>{

    const retrieveSelectedLetters1 = await getSelectedLetters1()
    const retrieveSelectedLetters2= await getSelectedLetters2()

    let selectedDominoObjectString =
      Object.values(selectedDominoObject).join("");
    let reverseSelectedDominoObject =
      selectedDominoObjectString[1] + selectedDominoObjectString[0];
      let dominoDots = Object.values(selectedDominoObject).join("")
    console.log(
      "tile good to be placed",
      "dominoIdsInGrid empty, can add tile to it.displaydomino:",
      displayDomino,
      "domino rotated?",
      dominoRotated
    );
 console.log("selected DominoObject in tile fits", selectedDominoObject, "tileId", tileId)
 setGameFinished(false);

    setDominoIdsInGrid((prevDominos) =>
      prevDominos.map((domino, index) =>
        index === tileId ? Object.keys(selectedDominoObject).toString() : domino
      )
    );
    // console.log("dominoIdsInGrid", dominoIdsInGrid);

    if (tileId < 6) {
      // Adds number of dots to the array
      setGridSelectedDominoObjects((prevDominos) =>
        prevDominos.map((domino, index) =>
          index === tileId
            ? Object.values(selectedDominoObject).join("") // Converts to string correctly
            : domino
        )
      );

    } else {
      setGridSelectedDominoObjects((prevDominos) =>
        prevDominos.map((domino, index) =>
          index === tileId ? reverseSelectedDominoObject : domino
        )
      );
    }
    // console.log("dominoes in grid in successful tile placement", dominoIdsInGrid);
    // console.log(
    //   "gridSelectedDominoObjects after set in tile pressed n successful tile placement",
    //   gridSelectedDominoObjects
    // );
    let dominoesInHandCopy = [...dominoesInHand];

    let index = dominoesInHandCopy.indexOf(selectedDominoObject);
    // console.log("INDEX", index);

    if (index !== -1) {
      dominoesInHandCopy.splice(index, 1); // ✅ Removes only selectedDominoObject
    }

   

    setDominoesInHand(dominoesInHandCopy); // ✅ Updates state with the correct array

   
    addScoreToScoreArraySingleGame(selectedDominoObject, scoreArraySingleGame, setScoreArraySingleGame, dominoDots, gameFinished, setGameFinished, gamesArray, 
      setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore
    )
    storeSelectedLetters1([])
    storeSelectedLetters2([])
    setSelectedLetters1([])
    setSelectedLetters2([])
   
    setSelectedDominoObject(null);
    allocateDominoes(dominoesInHandCopy, setDominoesInHand);
    setTilePlaced(true);
    //For individual tile
    setTilePlacedState(true);
    setTurnStart(true);
    setWordSubmitted(false);
    setDisplayDomino("");
    setShowMakeWord(false);
    setGameStart(true);
    setDominoSelected(false);
    
  }

  function addScoreToScoreArraySingleGame(selectedDominoObject, scoreArraySingleGame, setScoreArraySingleGame, dominoDots, gameFinished, setGameFinished, gamesArray, 
    setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore
  ){
    let scoreSingleDomino= Number(dominoDots[0])+ Number(dominoDots[1])
    console.log("scoreSingleDomino", scoreSingleDomino)
    let scoreArrayPerDomino=[...scoreArraySingleGame];
    console.log("scoreArrayPerDomino before concat with single domino", scoreArrayPerDomino);
    scoreArrayPerDomino.push(scoreSingleDomino);
console.log("scoreArrayPerDomino after concat with domino", scoreArrayPerDomino);
   
    console.log("scor4eArraySingleGame", scoreArraySingleGame)
   let placeholderSingleGameScore = scoreArrayPerDomino.reduce((sum, num) => sum + num, 0).toFixed(1);
   setSingleGameScore(placeholderSingleGameScore);
    console.log("!!!!!!!!total single game Score", singleGameScore);
    setScoreArraySingleGame(scoreArrayPerDomino);
    console.log("gameFinished", gameFinished)
  }




  export {handleTileFits}
