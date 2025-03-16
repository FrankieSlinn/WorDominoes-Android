import { View, Image, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style.js";
import { dominoImageMappings } from "../utils/dominoImageMappings.js";
import { handleTilePress } from "../utils/handleTilePress.js";

export function Tile({
  tileId,
  dominoRotated,
  tilePlaced,
  setTilePlaced,
  displayDomino,
  setTurnStart,
  setWordSubmitted,
  selectedDominoObject,
  setSelectedDominoObject,
  dominoSelected,
  setDominoSelected,
  setWord1Success,
  word2Success,
  setWord2Success,
  setDisplayDomino,
  showMakeWord,
  setShowMakeWord,
  dominoesInGrid,
  setDominoesInGrid,
  dominoIdsInGrid,
  setDominoIdsInGrid,
  numberDominoesInGrid,
  setNumberDominoesInGrid,
  tileFullError,
  setTileFullError,
  gameStart,
  setGameStart,
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,
  wrongTileError,
  setWrongTileError,
  dominoesInHand,
  setDominoesInHand,
  gamesArray, 
  setGamesArray
}) {
  //Only applies to this tile
  const [tilePlacedState, setTilePlacedState] = useState(false);
  //Only applies to this tile
  const [tileRotatedState, setTileRotatedState] = useState(false);
  const [wrongTileErrorInSpecificTile, setWrongTileErrorInSpecificTile] =
    useState(false);
  console.log("electedDominoObject", selectedDominoObject);
  console.log("dominoesInHand in tile", dominoesInHand);

  useEffect(() => {
    if (!tilePlacedState) {
      setTileRotatedState(dominoRotated);
    }
  }, [dominoRotated]);

  return (
    <>
      <View>
        <TouchableOpacity
          style={[
            (tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9)
              ? s.horizontalDomino
              : s.verticalDomino,
            s.domino,
          ]}
          onPress={() => {[
            handleTilePress(
              word2Success,
              tilePlaced,
              setTilePlaced,
              setTurnStart,
              selectedDominoObject,
              setSelectedDominoObject,
              dominoSelected,
              setDominoSelected,
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
            )
            // ,
            // getStats(gamesArray, setGamesArray)
          ]
          }}
        >
          {wrongTileErrorInSpecificTile ? null : !tileRotatedState ? (
            <Image
              source={dominoImageMappings[dominoIdsInGrid[tileId]]}
              style={[
                s.selectedTile,
                (tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9)
                  ? s.selectedTileHorizontal
                  : s.selectedTileVertical,
                (tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9)
                  ? s.selectedHorizontalTileUnrotated
                  : null,
              ]}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={dominoImageMappings[dominoIdsInGrid[tileId]]}
              style={[
                s.selectedTile,
                (tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9)
                  ? s.selectedTileHorizontal
                  : s.selectedTileVertical,
                (tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9)
                  ? s.selectedHorizontalTileRotated
                  : s.selectedVerticalTileRotated,
              ]}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}
