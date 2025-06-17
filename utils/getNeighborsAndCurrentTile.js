//tile IDs go in chronological order.

//With tiles as objects simpler to update in function
let tileData = { leftNeighbor: null, rightNeighbor: null, currentTile: null };
// let newSelectedDominoObject
let copySelectedDominoObjectFromHand;

//Gets current tile values and values of neighbours so they can be compared in handleTilePress
function getNeighborsAndCurrentTile(
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
  setDominoesInHand
) {
  console.log("dominoesInHand in getNeighbours", dominoesInHand);
  console.log("selectedDominoIndex in getNeighbours", selectedDominoIndex);
  console.log(
    "dominoesInHand[selectedDominoIndex] in getNeighbours",
    dominoesInHand[selectedDominoIndex]
  );
  // console.log(
  //   "COPY dominoesInHand[selectedDominoIndex] in getNeighbours",
  //   dominoesInHand[selectedDominoIndex]
  // );
  takeCopyOfSelectedDominoObjectFromHand(dominoesInHand, selectedDominoIndex);

  resetErrors(
    setWrongTileError,
    setWrongTileErrorInSpecificTile,
    setTileFullError
  );

  console.log("get Neighbours running");
  console.log(
    "gridSelectedDominoObjects in handle tile press",
    gridSelectedDominoObjects
  );

  if (copySelectedDominoObjectFromHand) {
    let key = Object.keys(copySelectedDominoObjectFromHand)[0]; // Get the only key

    setValuesForCopiedDominoObjectRotatedOrNot(dominoRotated, key);
    allocateCurrentTileNeighbourValues(copySelectedDominoObjectFromHand, key);
  }

  function allocateCurrentTileNeighbourValues(
    copySelectedDominoObjectFromHand,
    key
  ) {
  
    console.log(
      "selectedDominoObject in allocateCurrentTileNeighbors",
      copySelectedDominoObjectFromHand
    );

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
    if (tileId > 0 && tileId < 5) {
      console.log("tileid between 0 and 4");
      console.log(
        "ggridSelectedDominoObjects[tileId - 1] for tileId-1",
        gridSelectedDominoObjects[tileId - 1]
      );
      console.log(
        "ggridSelectedDominoObjects[tileId - 1] for tileId-1= EMPTy?",
        gridSelectedDominoObjects[tileId - 1] === "empty"
      );
      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
        console.log("tileData.leftNeighbot", tileData.leftNeighbor);
      }
      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
        console.log("tileData.rightNeighbot", tileData.rightNeighbor);
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
      if (gridSelectedDominoObjects[6]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[6] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[6].toString()[0];
      }
    }
    if (tileId === 6) {
      if (gridSelectedDominoObjects[5]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[5] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[5].toString()[1];
      }

      //tile on right

      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
      }
    }
    //right stays the same, left different Id
    //tile 9 on bottom right
    if (tileId === 9) {
      if (gridSelectedDominoObjects[8]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[8] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[5].toString()[1];
      }

      //tile on rightis tile 8

      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
      }
    }

    //left and right neighbours swapped as order different.
    //right neighbour in sense of array so itile is actually to left
    if (tileId > 6 && tileId < 11) {
      //actual tile to right
      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
      }

      //actual tile to left. rightNeighbor for comparison
      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
      }
    }
    if (tileId === 11) {
      //actual tile to right
      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
      }
      if (gridSelectedDominoObjects[0]) {
        if (gridSelectedDominoObjects[0]) {
          tileData.rightNeighbor =
            gridSelectedDominoObjects[0] === "empty"
              ? "empty"
              : gridSelectedDominoObjects[0].toString()[0];
        }
      }
    }

    if (selectedDominoObject) {
      if (tileId <= 5) {
        tileData.currentTile = copySelectedDominoObjectFromHand[key];
        console.log("tileDate.currentTile", tileId, tileData.currentTile);
      } else {
        let value1 = (tileData.currentTile =
          copySelectedDominoObjectFromHand[key][0]);
        let value2 = (tileData.currentTile =
          copySelectedDominoObjectFromHand[key][1]);
        tileData.currentTile = value2 + value1;
      }
    }

    if (tileData.currentTile) {
      console.log(
        "tile ID: ",
        tileId,
        "!!!!dominoRotated?",
        dominoRotated,
        "!!!!!currentTile[0] in handleTilePress",
        tileData.currentTile[0],
        "!!!currentTile[1] in handleTilePress",
        tileData.currentTile[1],
        "!!!leftNeighbor",
        tileData.leftNeighbor,
        "!!!rightNeighbor",
        tileData.rightNeighbor,
        "copySelectedDominoObjectFromHand",
        copySelectedDominoObjectFromHand
      );
    }
  }
  //The aim here is to always take a fresh object when this function is run so this is not modified
  function takeCopyOfSelectedDominoObjectFromHand(
    dominoesInHand,
    selectedDominoIndex
  ) {
    let selectedDominoObjectFromHand = dominoesInHand[selectedDominoIndex];
    console.log("selectedDominoObjectFromHand", selectedDominoObjectFromHand);

    copySelectedDominoObjectFromHand = JSON.parse(
      JSON.stringify(selectedDominoObjectFromHand)
    );
  }
  //done so previous errors don't register
  function resetErrors(
    setWrongTileError,
    setWrongTileErrorInSpecificTile,
    setTileFullError
  ) {
    setWrongTileError(false);
    setWrongTileErrorInSpecificTile(false);
    setTileFullError(false);
  }

  //change selectedDominoObject if the tile is rotated first so it can be compared to neighbors
  //unrotated: get value as string to be added to copySelectedDominoObjectFromHand
  function setValuesForCopiedDominoObjectRotatedOrNot(dominoRotated, key) {
    let value = copySelectedDominoObjectFromHand
      ? copySelectedDominoObjectFromHand[key].toString()
      : null;

    //rotated: get dot numbers as string from  selected objetct
    if (dominoRotated && copySelectedDominoObjectFromHand) {
      // Convert value to string
      console.log(
        "!!!!!copyselectedDominoObject[key] before reverse values",
        copySelectedDominoObjectFromHand[key]
      );

      // Reverse the string representation of the value
      let value1 = copySelectedDominoObjectFromHand[key].toString()[0];
      let value2 = copySelectedDominoObjectFromHand[key].toString()[1];
      let reversedValue = value2 + value1;
      //  newSelectedDominoObject = copySelectedDominoObjectFromHand;

      // Assign the reversed value back to the object
      copySelectedDominoObjectFromHand[key] = reversedValue;

      console.log(
        "!!!????copyselectedRotatedDominoObjectfromhand",
        copySelectedDominoObjectFromHand
      );
    } else if (!dominoRotated && copySelectedDominoObjectFromHand) {
      copySelectedDominoObjectFromHand[key] = value;
    }
  }
}

export { tileData, getNeighborsAndCurrentTile };
