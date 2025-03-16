import { allocateDominoes } from "./allocateDominoes";

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
    setGamesArray
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
    // console.log(
    //   "selectedDominoObject",
    //   selectedDominoObject,
    //   "reverseSelectedDomino Object",
    //   reverseSelectedDominoObject
    // );

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

  export {handleTileFits}
