import { allocateDominoes } from "./allocateDominoes";
import {storeGamesArray, getGamesArray }from"./asynchStorageUtils";
import AsyncStorage from '@react-native-async-storage/async-storage'; 


function handleTileFits(
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
        setSingleGameScore
  ) {


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
 

    setDominoIdsInGrid((prevDominos) =>
      prevDominos.map((domino, index) =>
        index === tileId ? Object.keys(selectedDominoObject).toString() : domino
      )
    );

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
    console.log("dominoes in grid in successful tile placement", dominoIdsInGrid);
    console.log(
      "gridSelectedDominoObjects after set in tile pressed n successful tile placement",
      gridSelectedDominoObjects
    );
    let dominoesInHandCopy = [...dominoesInHand];

    let index = dominoesInHandCopy.indexOf(selectedDominoObject);
    // console.log("INDEX", index);

    if (index !== -1) {
      dominoesInHandCopy.splice(index, 1); // ✅ Removes only selectedDominoObject
    }

    // console.log("dominoesInHand before shortened", dominoesInHand);

    setDominoesInHand(dominoesInHandCopy); // ✅ Updates state with the correct array

    // console.log("DOMINOES IN HAND AFTER shortened", dominoesInHand);
    addScoreToScoreArraySingleGame(selectedDominoObject, scoreArraySingleGame, setScoreArraySingleGame, dominoDots, gameFinished, setGameFinished, gamesArray, 
      setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore
    )
   
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

  
      // addScoreToScoreArray(selectedDominoObject, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, dominoDots, singleGameScore,
       
      // )
    
   


  }
  // async function addScoreToScoreArray(selectedDominoObject, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, dominoDots, singleGameScore,
   
  // ){
  //   if(gameFinished===true){
  // console.log("game finished - addScoretoScoreArray running!!!")
  //   console.log("dominoDots", dominoDots)
  //   console.log("Number(dominoDots[0])", Number(dominoDots[0]))
  //   console.log("worDominationCount", worDominationCount)
  //   console.log("worDominationCount*30", worDominationCount+30)
  //   let endOfGameScore= singleGameScore+worDominationCount*30;
  //   console.log("score", score)
  //   try {
  //     const games = await getGamesArray(); // Await for the stored games array
  //     console.log("Retrieved gamesArray:", games);
  
  //     let newGamesArray = games.concat(endOfGameScore); // Properly concatenate the score
  //     setGamesArray(newGamesArray); // Update state
  //     await storeGamesArray(newGamesArray); // Store updated array in AsyncStorage
  
  //     console.log("Updated games array:", newGamesArray);
  //   } catch (error) {
  //     console.error("Error updating games array:", error);
  //   }
  // }
  // }

  export {handleTileFits}
