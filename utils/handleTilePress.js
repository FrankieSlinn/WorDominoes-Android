import { allocateDominoes } from "./allocateDominoes";

function handleTilePress(
  word2Success,
  tilePlaced,
  setTilePlaced,
  setTurnStart,
  selectedDominoObject,
  setSelectedDominoObject,
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

  //With tiles as objects simpler to update in function
  let tileData = { leftNeighbor: null, rightNeighbor: null, currentTile: null };

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

  //   }
  // }

  function getNeighborsAndCurrentTile(
    dominoRotated,
    selectedDominoObject,
    setSelectedDominoObject,
    gridSelectedDominoObjects,
    tileId,
    tileData,
    setWrongTileError,
    setWrongTileErrorInSpecificTile,
    setTileFullError
  ) {
    console.log("get Neighbours running");
    console.log(
      "gridSelectedDominoObjects in handle tile press",
      gridSelectedDominoObjects
    );
    setWrongTileError(false);
    setWrongTileErrorInSpecificTile(false);
    setTileFullError(false);
    //change selectedDominoObject if the tile is rotated first so it can be compared to neighbors
    if (dominoRotated) {
      let key = Object.keys(selectedDominoObject)[0]; // Get the only key
      let value = selectedDominoObject[key].toString(); // Convert value to string

      // Reverse the string representation of the value
      let reversedValue = value.split("").reverse().join("");

      // Assign the reversed value back to the object
      selectedDominoObject[key] = reversedValue;

      // Update state
      setSelectedDominoObject({ ...selectedDominoObject });

      console.log("stringNewValue in getNeighbors if rotated", reversedValue);
      console.log("selectedDominoObject for Rotated", selectedDominoObject);
    }

    //Check as after 6 tileIds in reverse order
    if (tileId === 0) {
      if (gridSelectedDominoObjects[11]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[11] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[11].toString()[1];
      }
      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
      }
    }
    if (tileId > 0 && tileId < 6) {
      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
      }
      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
      }
    }
    //Left stays the same, right different Id
    if (tileId === 5) {
      //stays same as above
      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
      }
      if (gridSelectedDominoObjects[9]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[9] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[9].toString()[1];
      }
    }
    //right stays the same, left different Id
    //tile 9 on bottom right
    if (tileId === 9) {
      if (gridSelectedDominoObjects[5]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[5] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[5].toString()[1];
      }

      //tile on rightis tile 8

      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
      }
    }

    //left and right neighbours swapped as order different.
    //right neighbour in sense of array so itile is actually to left
    if (tileId > 6 < 11) {
      //actual tile to right
      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
      }

      //actual tile to left. rightNeighbor for comparison
      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
      }
    }
    if (tileId === 11) {
      //actual tile to right
      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
      }
      if (gridSelectedDominoObjects[0]) {
        if (gridSelectedDominoObjects[0]) {
          tileData.leftNeighbor =
            gridSelectedDominoObjects[0] === "empty"
              ? "empty"
              : gridSelectedDominoObjects[0].toString()[0];
        }
      }
    }

    tileData.currentTile = Object.values(selectedDominoObject).toString();

    console.log(
      "!!!!dominoRotated?",
      dominoRotated,
      "!!!!!currentTile[0] in handleTilePress",
      tileData.currentTile[0],
      "!!!currentTile[1] in handleTilePress",
      tileData.currentTile[1],
      "!!!leftNeighbor",
      tileData.leftNeighbor,
      "!!!rightNeighbor",
      tileData.rightNeighbor
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
      //   ||

      // dominoRotated &&
      //   (tileData.currentTile[1] !== tileData.leftNeighbor &&
      //   tileData.leftNeighbor != "empty" &&
      //   tileData.leftNeighbor != null) ||
      // (tileData.currentTile[0] !== tileData.rightNeighbor &&
      //   tileData.rightNeighbor != "empty" &&
      //   tileData.rightNeighbor != null)
      // )

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
  }
}

export { handleTilePress };
