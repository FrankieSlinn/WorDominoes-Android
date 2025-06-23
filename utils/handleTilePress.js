import {
  tileData,
  getNeighborsAndCurrentTile,
} from "./getNeighborsAndCurrentTile";
import { handleTileFits } from "./handleTileFits";

//1.) checks if itle already placed
//Y - set tilefullerror(true) / tile placed states(false)
//N - get neighboursAndCurrentTile function
// - then runs checkdominodoesnotfit

function handleTilePress(
  word2Success,
  tilePlaced,
  setTilePlaced,
  setTurnStart,
  originalSelectedDominoObject,
  setOriginalSelecteDominoObject,
  selectedDominoObject,
  setSelectedDominoObject,
  dominoSelected,
  setDominoSelected,
  displayDomino,
  setDisplayDomino,
  setShowMakeWord,
  setWordSubmitted,
  dominoIdsInGrid,
  setDominoIdsInGrid,
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,
  tileId,
  tileFullError,
  setTileFullError,
  gameStart,
  setGameStart,
  wrongTileError,
  setWrongTileError,
  wrongTileErrorInSpecificTile,
  setWrongTileErrorInSpecificTile,
  tilePlacedState,
  setTilePlacedState,
  dominoRotated,
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
  selectedDominoIndex, 
  setSelectedDominoIndex,
  dominoesUsed,
  setDominoesUsed
) {
  console.log("tile pressed!!! for tileId:", tileId);
  console.log("scoreArraySingleGame", scoreArraySingleGame)
  // console.log("tilePlaced", tilePlaced);
  console.log("dominoes in hand in tilePress", dominoesInHand);
  console.log("selectedDominoObject in handleTilePress", selectedDominoObject);

  console.log("dominoesInHand in HANDLETILEPRESS", dominoesInHand)
  console.log("selectedDominoIndex in HANDLETILEPSS", selectedDominoIndex)
  console.log("dominoesInHand[selectedDominoIndex] in HANDLETILEPRESS", dominoesInHand[selectedDominoIndex])

  setTileFullError(false);
  setWrongTileError(false);
  setWrongTileErrorInSpecificTile(false);

  if (word2Success === true && tilePlaced === false) {
    //for individual tile
    console.log("doing all checks for whether domino can be placed");
    checkTileAlreadyPlaced(
      tileId,
      wrongTileErrorInSpecificTile,
      tilePlaced,
      setTilePlaced,
      tileFullError,
      setTileFullError,
      dominoIdsInGrid,
      setDominoIdsInGrid,
      selectedDominoObject,
      setSelectedDominoObject,
      dominoSelected,
      setDominoSelected,
      gridSelectedDominoObjects,
      setGridSelectedDominoObjects,
      dominoRotated,
      setTilePlacedState,
      setTurnStart,
      setWordSubmitted,
      displayDomino,
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
      selectedDominoIndex,
      setSelectedDominoIndex,
      dominoesUsed,
      setDominoesUsed
    );
  }

  function checkTileAlreadyPlaced(
    tileId,
    wrongTileErrorInSpecificTile,
    tilePlaced,
    setTilePlaced,
    tileFullError,
    setTileFullError,
    dominoIdsInGrid,
    setDominoIdsInGrid,
    selectedDominoObject,
    setSelectedDominoObject,
    dominoSelected,
    setDominoSelected,
    gridSelectedDominoObjects,
    setGridSelectedDominoObjects,
    dominoRotated,
    setTilePlacedState,
    setTurnStart,
    setWordSubmitted,
    displayDomino,
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
    selectedDominoIndex,
    setSelectedDominoIndex,
    dominoesUsed,
    setDominoesUsed
  ) {
    console.log("scoreArraySingleGame in check tile placed!!!!", scoreArraySingleGame)

  console.log("dominoesInHand in TILEALREADYPLACED", dominoesInHand)
  console.log("selectedDominoIndex in TILEALREADYPLACED", selectedDominoIndex)
  console.log("dominoesInHand[selectedDominoIndex] in TILEALREADYPLACED", dominoesInHand[selectedDominoIndex])
    console.log("checking if tile already placed");
    console.log(
      "gridSelectedDominoObjects",
      gridSelectedDominoObjects,
      "tileId",
      tileId
    );

    if (
      gridSelectedDominoObjects[tileId] &&
      gridSelectedDominoObjects[tileId] != "empty" &&
      wrongTileErrorInSpecificTile === false
    ) {
      setTileFullError(true);
      setTilePlaced(false);
      setTilePlacedState(false);
    } else {
      //check if tile good to be placed
      getNeighborsAndCurrentTile(
        dominoRotated,
        displayDomino,
        selectedDominoObject,
        setSelectedDominoObject,
        originalSelectedDominoObject,
        setOriginalSelecteDominoObject,
        gridSelectedDominoObjects,
        tileId,
        tileData,
        setWrongTileError,
        setWrongTileErrorInSpecificTile,
        setTileFullError, 
        selectedDominoIndex,
        setSelectedDominoIndex,
        dominoesInHand, 
        setDominoesInHand,
      );

      //Check for tile does not fit
      checkDominoDoesNotFit(
        tileId,
        tilePlaced,
        setTilePlaced,
        setTilePlacedState,
        dominoRotated,
        tileData,
        wrongTileError,
        setWrongTileError,
        wrongTileErrorInSpecificTile,
        setWrongTileErrorInSpecificTile,
        dominoIdsInGrid,
        setDominoIdsInGrid,
        selectedDominoObject,
        setSelectedDominoObject,
        dominoSelected,
        setDominoSelected,
        gridSelectedDominoObjects,
        setGridSelectedDominoObjects,
        displayDomino,
        setDisplayDomino,
        setShowMakeWord,
        setWordSubmitted,
        tileFullError,
        setTileFullError,
        setTurnStart,
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
  
      
      );
    }
  }
}

function checkDominoDoesNotFit(
  tileId,
  tilePlaced,
  setTilePlaced,
  setTilePlacedState,
  dominoRotated,
  tileData,
  wrongTileError,
  setWrongTileError,
  wrongTileErrorInSpecificTile,
  setWrongTileErrorInSpecificTile,
  dominoIdsInGrid,
  setDominoIdsInGrid,
  selectedDominoObject,
  setSelectedDominoObject,
  dominoSelected,
  setDominoSelected,
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,
  displayDomino,
  setDisplayDomino,
  setShowMakeWord,
  setWordSubmitted,
  tileFullError,
  setTileFullError,
  setTurnStart,
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
) {
  console.log("checking if domino doesn't fit");
  console.log("ScoreArray ingle gamein check tile doesn't fit!!!", scoreArraySingleGame)

  // if (!dominoRotated &&
  //check If tiles don't match

  if (
    ((tileData.currentTile[0] !== tileData.leftNeighbor &&
      tileData.leftNeighbor != "empty" &&
      tileData.leftNeighbor != null) ||
      (tileData.currentTile[1] !== tileData.rightNeighbor &&
        tileData.rightNeighbor != "empty" &&
        tileData.rightNeighbor != null)) &&
    gridSelectedDominoObjects[tileId] === "empty"
  ) {
    console.log("domino doesn't fit)");
    handleDominoDoesNotFit(
      tileId,
      wrongTileError,
      setWrongTileError,
      wrongTileErrorInSpecificTile,
      setWrongTileErrorInSpecificTile,
      setTilePlaced,
      setTilePlacedState
    );
  } else {
    handleTileFits(
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
    );
  }
}

function handleDominoDoesNotFit(
  tileId,
  wrongTileError,
  setWrongTileError,
  wrongTileErrorInSpecificTile,
  setWrongTileErrorInSpecificTile,
  setTilePlaced,
  setTilePlacedState
) {
  console.log(
    "tile fits in going for tile full check. Showing wrongTile Error status",
    wrongTileError
  );
  console.log(`Setting wrongTileError for tile ${tileId}`);
  setTilePlaced(false);
  setTilePlacedState(false);
  //for generic error message
  setWrongTileError(true);
  //for specific tile
  setWrongTileErrorInSpecificTile(true);
  console.log("Wrongtile error in HOrizontal tile top", wrongTileError);
  console.log(
    "Wrongtile error in HOrizontal specific tile",
    wrongTileErrorInSpecificTile
  );
}

export { handleTilePress };
