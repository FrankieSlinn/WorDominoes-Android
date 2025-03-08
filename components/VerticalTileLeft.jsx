import { View, Image, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style.js";
import { dominoImageMappings } from "../utils/dominoImageMappings.js";
import { handleTilePress } from "../utils/handleTilePress.js";
import { allocateDominoes } from "../utils/allocateDominoes.js";

export function VerticalTileLeft({
  tileId,
  dominoRotated,
  tilePlaced,
  setTilePlaced,
  displayDomino,

  setTurnStart,

  setWordSubmitted,
  selectedDominoObject,
  setSelectedDominoObject,

  word2Success,
 
  setDisplayDomino,
  showMakeWord,
  setShowMakeWord,
  dominoesInGrid,
  setDominoesInGrid,
  dominoIdsInGrid,
  setDominoIdsInGrid,
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,

  tileFullError,
  setTileFullError,
  gameStart,
  setGameStart,

  wrongTileError,
  setWrongTileError,
  dominoesInHand, 
  setDominoesInHand
}) {
  //Only applies to this tile
  const [tilePlacedState, setTilePlacedState] = useState(false);
  //Only applies to this tile
  const [tileRotatedState, setTileRotatedState] = useState(false);
  const [wrongTileErrorInSpecificTile, setWrongTileErrorInSpecificTile] =
    useState(false);
  console.log("electedDominoObject", selectedDominoObject);

  console.log("wrongTileError generic", wrongTileError);

  useEffect(() => {
    console.log(`dominoRotated in Tile ${tileId} useEffect`, dominoRotated);
    console.log(
      "tileplaced state in domino rotation prevention in tile",
      tilePlacedState
    );
    if (!tilePlacedState) {
      setTileRotatedState(dominoRotated);
    }
  }, [dominoRotated]);

  return (
    <View>
      <TouchableOpacity
        style={[s.verticalDomino, s.domino]}
        onPress={() => {
          handleTilePress(
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
            setDominoesInHand,
            allocateDominoes
          );
        }}
      >
        {wrongTileErrorInSpecificTile ? null : !tileRotatedState ? (
          <Image
            source={dominoImageMappings[dominoIdsInGrid[tileId]]}
            style={[
              s.selectedTile,
              s.selectedTileUnrotated,
              s.selectedTileVertical,
            ]}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={dominoImageMappings[dominoIdsInGrid[tileId]]}
            style={[
              s.selectedTile,
              s.selectedTileVertical,
              s.selectedTileVerticalRotated,
            ]}
            resizeMode="cover"
          />
        )}
      </TouchableOpacity>
    </View>
  );
}