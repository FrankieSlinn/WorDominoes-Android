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

  //   let tileDoesNotFit=false;

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

  checkTileCanBePlaced(
    selectedDominoObject,
    topSelectedDominoObjects,
    tileId,
    tileData
  );
  console.log("currentTile after getNeighbors run", tileData.currentTile);
  //   setWrongTileError(false);
  //   setWrongTileErrorInSpecificTile(false);
  //   setTileFullError(false);

  checkTileCanBePlaced(
    setTilePlaced,
    setTurnStart,
    selectedDominoObject,
    word2Success,
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
    setTilePlacedState,
    dominoRotated,
    tileData
  );

  //Checks if tile can be placed
  function checkTileCanBePlaced(
    setTilePlaced,
    setTurnStart,
    selectedDominoObject,
    word2Success,
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
    setTilePlacedState,
    dominoRotated,
    tileData
  ) {
    console.log("check tile is ok function running");
    console.log("word2Success", word2Success, "tilePlacedS", tilePlaced);

    if (word2Success === true && tilePlaced === false) {
      //for individual tile
      console.log("doing all checks for whether domino can be placed");

      //Check for tile does not fit
      dominoRotatedChecksDoesNotFit(
        tileId,
        setTilePlaced,
        dominoRotated,
        tileData,
        wrongTileError,
        setWrongTileError,
        wrongTileErrorInSpecificTile,
        setWrongTileErrorInSpecificTile
      );

      //check if tile already placed

      if (
        topSelectedDominoObjects[tileId] &&
        topSelectedDominoObjects[tileId] != "empty" &&
        wrongTileErrorInSpecificTile === false
      ) {
        console.log("setting tileFullError to true in handleTilePress");
        setTileFullError(true);
        setTilePlaced(false);
      }
      //check if tile good to be placed
      else if (
        wrongTileErrorInSpecificTile === false &&
        tileFullError === false
      ) {
        console.log(
          "tile good to be placed",
          "topHorizontalTilesInGrid empty, can add tile to it.displaydomino:",
          displayDomino
        );
        setTopHorizontalTilesInGrid((prevTiles) =>
          prevTiles.map((tile, index) =>
            index === tileId ? displayDomino : tile
          )
        );
        console.log("topHorizontalTilesin grid", topHorizontalTilesInGrid);
        setTopSelectedDominoObjects((prevDominos) =>
          prevDominos.map((domino, index) =>
            index === tileId ? Object.values(selectedDominoObject) : domino
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
  }
}

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
    "current tile in getCurrenttile & Neighbors",
    tileData.currentTile
  );

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
  setTilePlaced,
  dominoRotated,
  tileData,
  wrongTileError,
  setWrongTileError,
  wrongTileErrorInSpecificTile,
  setWrongTileErrorInSpecificTile
) {
  console.log("checking if domino doesn't fit");
  console.log(
    "currnettile in check if fits with neighbor",
    tileData.currentTile
  );
  if (!dominoRotated) {
    console.log("checking for domino not rotated)");
    if (
      //check If tiles don't match

      (tileData.currentTile[0] !== tileData.leftNeighbor &&
        tileData.leftNeighbor != "empty" &&
        tileData.leftNeighbor != null) ||
      (tileData.currentTile[1] !== tileData.rightNeighbor &&
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
    }
  } else if (dominoRotated) {
    if (
      (tileData.currentTile[1] !== tileData.leftNeighbor &&
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

export { handleTilePress };
