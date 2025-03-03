function handleTilePress(
  word2Success,
  tilePlaced,
  setTilePlaced,
  setTurnStart,
  selectedDominoObject,
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
  dominoRotated
) {
  console.log("tile pressed!!!");

  console.log("word2Success", word2Success, "tilePlacedState", tilePlacedState);
  console.log("tilePlaced", tilePlaced);

  //With tiles as objects simpler to update in function
  let tileData = { leftNeighbor: null, rightNeighbor: null, currentTile: null };

  getNeighborsAndCurrentTile(
    selectedDominoObject,
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
      dominoRotatedChecksDoesNotFit(
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
        gridSelectedDominoObjects,
        setGridSelectedDominoObjects,
        displayDomino,
        setDisplayDomino,
        setShowMakeWord,
        setWordSubmitted,
        tileFullError,
        setTileFullError,
        setTurnStart,
        setGameStart
      );
    }
  
//   }
// }

function getNeighborsAndCurrentTile(
  selectedDominoObject,
  gridSelectedDominoObjects,
  tileId,
  tileData,
  setWrongTileError,
  setWrongTileErrorInSpecificTile,
  setTileFullError
) {
  console.log("get Neighbours running");
  console.log("gridSelectedDominoObjects in handle tile press", gridSelectedDominoObjects)
  setWrongTileError(false);
  setWrongTileErrorInSpecificTile(false);
  setTileFullError(false);

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


  tileData.currentTile = Object.values(selectedDominoObject).toString();


  console.log(
    "!!!!!currentTile[0] in handleTilePress",
    tileData.currentTile[0],
    "!!!leftNeighbor",
    tileData.leftNeighbor,
    "!!!rightNeighbor",
    tileData.rightNeighbor
  );
}

function dominoRotatedChecksDoesNotFit(
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
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,
  displayDomino,
  setDisplayDomino,
  setShowMakeWord,
  setWordSubmitted,
  tileFullError,
  setTileFullError,
  setTurnStart,
  setGameStart
) {
  console.log("checking if domino doesn't fit");

 

    if (!dominoRotated &&
      //check If tiles don't match

      (tileData.currentTile[0] !== tileData.leftNeighbor &&
        tileData.leftNeighbor != "empty" &&
        tileData.leftNeighbor != null) ||
      (tileData.currentTile[1] !== tileData.rightNeighbor &&
        tileData.rightNeighbor != "empty" &&
        tileData.rightNeighbor != null)
        ||

      dominoRotated &&
        (tileData.currentTile[1] !== tileData.leftNeighbor &&
        tileData.leftNeighbor != "empty" &&
        tileData.leftNeighbor != null) ||
      (tileData.currentTile[0] !== tileData.rightNeighbor &&
        tileData.rightNeighbor != "empty" &&
        tileData.rightNeighbor != null)
      )
      
 {
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
        gridSelectedDominoObjects,
        setGridSelectedDominoObjects,
        dominoRotated,
        setTilePlacedState,
        setTurnStart,
        setWordSubmitted,
        displayDomino,
        setDisplayDomino,
        setShowMakeWord,
        setGameStart
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
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,
  dominoRotated,
  setTilePlacedState,
  setTurnStart,
  setWordSubmitted,
  displayDomino,
  setDisplayDomino,
  setShowMakeWord,
  setGameStart
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
      setGridSelectedDominoObjects,
      dominoRotated,
      setTilePlaced,
      setTilePlacedState,
      setTurnStart,
      setWordSubmitted,
      setDisplayDomino,
      setShowMakeWord,
      setGameStart
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
  setGridSelectedDominoObjects,
  dominoRotated,
  setTilePlaced,
  setTilePlacedState,
  setTurnStart,
  setWordSubmitted,
  setDisplayDomino,
  setShowMakeWord,
  setGameStart
) {
  let rotatedDominoObject = [];
  rotatedDominoObject.push(selectedDominoObject[0]);
  rotatedDominoObject.push(selectedDominoObject[1]);

  console.log(
    "tile good to be placed",
    "dominoIdsInGrid empty, can add tile to it.displaydomino:",
    displayDomino
  );

  //Is this needed? E.g. to check if grid full with uniqiue tiles?
  setDominoIdsInGrid((prevTiles) =>
    prevTiles.map((tile, index) => (index === tileId ? displayDomino : tile))
  );
  console.log("topHorizontalTilesin grid", dominoIdsInGrid);

  //Adds number of dots to array
  setGridSelectedDominoObjects((prevDominos) =>
    prevDominos.map((domino, index) =>
      index === tileId
        ? dominoRotated
          ? rotatedDominoObject
          : Object.values(selectedDominoObject)
        : domino
    )
  );

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
