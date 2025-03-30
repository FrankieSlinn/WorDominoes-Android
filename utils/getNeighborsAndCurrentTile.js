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
    if(selectedDominoObject){
    let key = Object.keys(selectedDominoObject)[0]; // Get the only key
    let value = selectedDominoObject?selectedDominoObject[key].toString():null
    }

    //reverse value if domino rotated
    if (dominoRotated&&selectedDominoObject) {
 // Convert value to string

      // Reverse the string representation of the value
      let reversedValue = value.split("").reverse().join("");

      // Assign the reversed value back to the object
      selectedDominoObject[key] = reversedValue;

      // Update state
      setSelectedDominoObject({ ...selectedDominoObject });
      console.log("!!!????selectedRotatedDominoObject", selectedDominoObject)

      // console.log("stringNewValue in getNeighbors if rotated", reversedValue);
      // console.log("selectedDominoObject for Rotated", selectedDominoObject);
      // console.log("in get neighbours gridSelecteddominoObjects[tileId+1", gridSelectedDominoObjects[tileId + 1])
    }else if(!dominoRotated && selectedDominoObject){

      selectedDominoObject[key] = value;
    



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
    if (tileId > 0 && tileId < 5) {
      console.log("tileid between 0 and 4");
      console.log("ggridSelectedDominoObjects[tileId - 1] for tileId-1", gridSelectedDominoObjects[tileId - 1] )
      console.log("ggridSelectedDominoObjects[tileId - 1] for tileId-1= EMPTy?", gridSelectedDominoObjects[tileId - 1] ==="empty")
      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
            console.log("tileData.leftNeighbot", tileData.leftNeighbor)
      }
      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
            console.log("tileData.rightNeighbot", tileData.rightNeighbor)
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
            : gridSelectedDominoObjects[9].toString()[0];
      }
    }
    if (tileId === 6) {
        if (gridSelectedDominoObjects[5]) {
          tileData.leftNeighbor =
            gridSelectedDominoObjects[5] === "empty"
              ? "empty"
              : gridSelectedDominoObjects[5].toString()[1];
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
    if (tileId > 6 &&tileId< 11) {
      //actual tile to right
      if (gridSelectedDominoObjects[tileId - 1]) {
        tileData.leftNeighbor =
          gridSelectedDominoObjects[tileId - 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId - 1].toString()[1];
      }

      //actual tile to left. rightNeighbor for comparison
      if (gridSelectedDominoObjects[tileId + 1]) {
        tileData.rightNeighbor =
          gridSelectedDominoObjects[tileId + 1] === "empty"
            ? "empty"
            : gridSelectedDominoObjects[tileId + 1].toString()[0];
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

   if(selectedDominoObject){
 

    if(tileId<=5){tileData.currentTile = Object.values(selectedDominoObject).toString()}
   else{
    let value1 = Object.values(selectedDominoObject).toString()[0]
    let value2 = Object.values(selectedDominoObject).toString()[1]
    tileData.currentTile = value2+value1;

   }
  }

if(tileData.currentTile){
    console.log(
      "tile ID: ", tileId,
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