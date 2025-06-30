function getNeighbourValues(tileId, gridSelectedDominoObjects, tileData) {
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
  }
  export {getNeighbourValues}