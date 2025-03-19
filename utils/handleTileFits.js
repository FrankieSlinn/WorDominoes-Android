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
        worDomination, 
        setWorDomination, 
        worDominationCount,
        setWorDominationCount
  ) {
    let numberTiles =12;

    let selectedDominoObjectString =
      Object.values(selectedDominoObject).join("");
    let reverseSelectedDominoObject =
      selectedDominoObjectString[1] + selectedDominoObjectString[0];
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
    addScoreToScoreArray(selectedDominoObject, gamesArray, setGamesArray, worDominationCount, setWorDominationCount)
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

  async function addScoreToScoreArray(selectedDominoObject, gamesArray, setGamesArray, worDominationCount, setWorDominationCount){
    let dominoDots = Object.values(selectedDominoObject).join("")
    console.log("dominoDots", dominoDots)
    console.log("Number(dominoDots[0])", Number(dominoDots[0]))
    console.log("worDominationCount", worDominationCount)
    console.log("worDominationCount*30", worDominationCount+30)
    let score= Number(dominoDots[0])+ Number(dominoDots[1])+worDominationCount*30;
    console.log("score", score)
    try {
      const games = await getGamesArray(); // Await for the stored games array
      console.log("Retrieved gamesArray:", games);
  
      let newGamesArray = games.concat(score); // Properly concatenate the score
      setGamesArray(newGamesArray); // Update state
      await storeGamesArray(newGamesArray); // Store updated array in AsyncStorage
  
      console.log("Updated games array:", newGamesArray);
    } catch (error) {
      console.error("Error updating games array:", error);
    }
  }

  export {handleTileFits}
