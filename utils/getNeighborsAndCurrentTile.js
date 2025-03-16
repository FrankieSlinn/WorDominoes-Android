  //With tiles as objects simpler to update in function
  let tileData = { leftNeighbor: null, rightNeighbor: null, currentTile: null };

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
    if (dominoRotated&&selectedDominoObject) {
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
    if (tileId === 6) {
        if (gridSelectedDominoObjects[11]) {
          tileData.leftNeighbor =
            gridSelectedDominoObjects[11] === "empty"
              ? "empty"
              : gridSelectedDominoObjects[11].toString()[1];
        }
  
        //tile on rightis tile 8
  
        if (gridSelectedDominoObjects[tileId + 1]) {
          tileData.rightNeighbor =
            gridSelectedDominoObjects[tileId +1] === "empty"
              ? "empty"
              : gridSelectedDominoObjects[tileId + 1].toString()[0];
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

   if(selectedDominoObject){tileData.currentTile = Object.values(selectedDominoObject).toString();

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
  }



  export{tileData, getNeighborsAndCurrentTile}