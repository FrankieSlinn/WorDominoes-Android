import { allocateDominoes } from "./allocateDominoes";
import {
  tileData,
  getNeighborsAndCurrentTile,
} from "./getNeighborsAndCurrentTile";

function handleTilePress(
  word2Success,
  tilePlaced,
  setTilePlaced,
  setTurnStart,
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
  setGameStart,
  wrongTileError,
  setWrongTileError,
  wrongTileErrorInSpecificTile,
  setWrongTileErrorInSpecificTile,
  tilePlacedState,
  setTilePlacedState,
  dominoRotated,
  dominoesInHand,
  setDominoesInHand
) {
  console.log("tile pressed!!! for tileId:", tileId);
  console.log("word2Success", word2Success, "tilePlacedState", tilePlacedState);
  console.log("tilePlaced", tilePlaced);
  console.log("dominoes in hand in tilePress", dominoesInHand);
  console.log("selectedDominoObject in handleTilePress", selectedDominoObject);

  getNeighborsAndCurrentTile(
    dominoRotated,
    selectedDominoObject,
    setSelectedDominoObject,
    gridSelectedDominoObjects,
    tileId,
    tileData,
    setWrongTileError,
    setWrongTileErrorInSpecificTile,
    setTileFullError
  );

  if (word2Success === true && tilePlaced === false) {
    //for individual tile
    console.log("doing all checks for whether domino can be placed");

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
      setGameStart,
      dominoesInHand,
      setDominoesInHand
    );
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
    setGameStart,
    dominoesInHand,
    setDominoesInHand
  ) {
    console.log("checking if domino doesn't fit");

    // if (!dominoRotated &&
    //check If tiles don't match

    if (
      (tileData.currentTile[0] !== tileData.leftNeighbor &&
        tileData.leftNeighbor != "empty" &&
        tileData.leftNeighbor != null) ||
      (tileData.currentTile[1] !== tileData.rightNeighbor &&
        tileData.rightNeighbor != "empty" &&
        tileData.rightNeighbor != null)
    ) {
      console.log("domino doesn't fit)");
      handleDominoDoesNotFit(
        tileId,
        wrongTileError,
        setWrongTileError,
        wrongTileErrorInSpecificTile,
        setWrongTileErrorInSpecificTile,
        setTilePlaced
      );
    } else {
      checkTileAlreadyPlaced(
        tileId,
        wrongTileErrorInSpecificTile,
        setTileFullError,
        tilePlaced,
        setTilePlaced,
        tileFullError,
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
        setGameStart,
        dominoesInHand,
        setDominoesInHand
      );
    }
  }

  function handleDominoDoesNotFit(
    tileId,
    wrongTileError,
    setWrongTileError,
    wrongTileErrorInSpecificTile,
    setWrongTileErrorInSpecificTile,
    setTilePlaced
  ) {
    console.log(
      "tile fits in going for tile full check. Showing wrongTile Error status",
      wrongTileError
    );
    console.log(`Setting wrongTileError for tile ${tileId}`);
    setTilePlaced(false);
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

  function checkTileAlreadyPlaced(
    tileId,
    wrongTileErrorInSpecificTile,
    setTileFullError,
    tilePlaced,
    setTilePlaced,
    tileFullError,
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
    setGameStart,
    dominoesInHand,
    setDominoesInHand
  ) {
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
    } else {
      //check if tile good to be placed

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
        setDominoesInHand
      );
    }
  }

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
    setDominoesInHand
  ) {
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
    console.log(
      "selectedDominoObject",
      selectedDominoObject,
      "reverseSelectedDomino Object",
      reverseSelectedDominoObject
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
    console.log("dominoes in grid", dominoIdsInGrid);
    console.log(
      "gridSelectedDominoObjects after set in tile pressed",
      gridSelectedDominoObjects
    );
    let dominoesInHandCopy = [...dominoesInHand];

    let index = dominoesInHandCopy.indexOf(selectedDominoObject);
    console.log("INDEX", index);

    if (index !== -1) {
      dominoesInHandCopy.splice(index, 1); // ✅ Removes only selectedDominoObject
    }

    console.log("dominoesInHand before shortened", dominoesInHand);

    setDominoesInHand(dominoesInHandCopy); // ✅ Updates state with the correct array

    console.log("DOMINOES IN HAND AFTER shortened", dominoesInHand);

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
}

export { handleTilePress };
