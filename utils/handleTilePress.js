function handleTilePress(
  word2Success,
  tilePlaced,
  setTilePlaced,
  setTurnStart,
  selectedDominoObject,
  setWord2Success,
  displayDomino,
  setDisplayDomino,
  setShowMakeWord,
  setWordSubmitted,
  topHorizontalTilesInGrid,
  setTopHorizontalTilesInGrid,
  topSelectedDominoObjects,
  setTopSelectedDominoObjects,
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
    topSelectedDominoObjects,
    tileId,
    tileData,
    setWrongTileError,
    setWrongTileErrorInSpecificTile,
    setTileFullError
  );

  // checkTileCanBePlaced(
  //   setTilePlaced,
  //   setTurnStart,
  //   selectedDominoObject,
  //   word2Success,
  //   displayDomino,
  //   setDisplayDomino,
  //   setShowMakeWord,
  //   setWordSubmitted,
  //   topHorizontalTilesInGrid,
  //   setTopHorizontalTilesInGrid,
  //   topSelectedDominoObjects,
  //   setTopSelectedDominoObjects,
  //   tileId,
  //   tileFullError,
  //   setTileFullError,
  //   setGameStart,
  //   wrongTileError,
  //   setWrongTileError,
  //   wrongTileErrorInSpecificTile,
  //   setWrongTileErrorInSpecificTile,
  //   setTilePlacedState,
  //   dominoRotated,
  //   tileData
  // );

  //Checks if tile can be placed
  // function checkTileCanBePlaced(
  //   setTilePlaced,
  //   setTurnStart,
  //   selectedDominoObject,
  //   word2Success,
  //   displayDomino,
  //   setDisplayDomino,
  //   setShowMakeWord,
  //   setWordSubmitted,
  //   topHorizontalTilesInGrid,
  //   setTopHorizontalTilesInGrid,
  //   topSelectedDominoObjects,
  //   setTopSelectedDominoObjects,
  //   tileId,
  //   tileFullError,
  //   setTileFullError,
  //   setGameStart,
  //   wrongTileError,
  //   setWrongTileError,
  //   wrongTileErrorInSpecificTile,
  //   setWrongTileErrorInSpecificTile,
  //   setTilePlacedState,
  //   dominoRotated,
  //   tileData
  // ) {
  //   console.log("check tile is ok function running");
  //   console.log("word2Success", word2Success, "tilePlacedS", tilePlaced);

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
        topHorizontalTilesInGrid,
        setTopHorizontalTilesInGrid,
        selectedDominoObject,
        topSelectedDominoObjects,
        setTopSelectedDominoObjects,
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
  topSelectedDominoObjects,
  tileId,
  tileData,
  setWrongTileError,
  setWrongTileErrorInSpecificTile,
  setTileFullError
) {
  console.log("get Neighbours running");
  setWrongTileError(false);
  setWrongTileErrorInSpecificTile(false);
  setTileFullError(false);

  if (topSelectedDominoObjects[tileId - 1]) {
    tileData.leftNeighbor =
      topSelectedDominoObjects[tileId - 1] === "empty"
        ? "empty"
        : topSelectedDominoObjects[tileId - 1].toString()[1];
  }

  if (topSelectedDominoObjects[tileId + 1]) {
    tileData.rightNeighbor =
      topSelectedDominoObjects[tileId + 1] === "empty"
        ? "empty"
        : topSelectedDominoObjects[tileId + 1].toString()[0];
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
  topHorizontalTilesInGrid,
  setTopHorizontalTilesInGrid,
  selectedDominoObject,
  topSelectedDominoObjects,
  setTopSelectedDominoObjects,
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

  if (!dominoRotated) {
    console.log("checking for domino not rotated)");
    if (
      //check If tiles don't match

      (tileData.currentTile[0] !== tileData.leftNeighbor &&
        tileData.leftNeighbor != "empty" &&
        tileData.leftNeighbor != null) ||
      (tileData.currentTile[1] !== tileData.rightNeighbor &&
        tileData.rightNeighbor != "empty" &&
        tileData.rightNeighbor != null) ||
      (dominoRotated &&
        tileData.currentTile[1] !== tileData.leftNeighbor &&
        tileData.leftNeighbor != "empty" &&
        tileData.leftNeighbor != null) ||
      (tileData.currentTile[0] !== tileData.rightNeighbor &&
        tileData.rightNeighbor != "empty" &&
        tileData.rightNeighbor != null)
    ) {
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
        topHorizontalTilesInGrid,
        setTopHorizontalTilesInGrid,
        selectedDominoObject,
        topSelectedDominoObjects,
        setTopSelectedDominoObjects,
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
  topHorizontalTilesInGrid,
  setTopHorizontalTilesInGrid,
  selectedDominoObject,
  topSelectedDominoObjects,
  setTopSelectedDominoObjects,
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
    "topSelectedDominoObjects",
    topSelectedDominoObjects,
    "tileId",
    tileId
  );

  if (
    topSelectedDominoObjects[tileId] &&
    topSelectedDominoObjects[tileId] != "empty" &&
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
      topHorizontalTilesInGrid,
      setTopHorizontalTilesInGrid,
      selectedDominoObject,
      setTopSelectedDominoObjects,
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
  topHorizontalTilesInGrid,
  setTopHorizontalTilesInGrid,
  selectedDominoObject,
  setTopSelectedDominoObjects,
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
    "topHorizontalTilesInGrid empty, can add tile to it.displaydomino:",
    displayDomino
  );

  //Is this needed? E.g. to check if grid full with uniqiue tiles?
  setTopHorizontalTilesInGrid((prevTiles) =>
    prevTiles.map((tile, index) => (index === tileId ? displayDomino : tile))
  );
  console.log("topHorizontalTilesin grid", topHorizontalTilesInGrid);

  //Adds number of dots to array
  setTopSelectedDominoObjects((prevDominos) =>
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
