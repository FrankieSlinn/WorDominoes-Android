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
  setTurnStart,
  setWordSubmitted,
  selectedDominoObject,
  setSelectedDominoObject,
  originalSelectedDominoObject, 
  setOriginalSelectedDominoObject,
  dominoSelected,
  setDominoSelected,
  setWord1Success,
  word2Success,
  setWord2Success,
  displayDomino,
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
  setGamesArray,
  scoreArraySingleGame,
  setScoreArraySingleGame,

  worDomination, 
  setWorDomination, 
  worDominationCount,
  setWorDominationCount, 
  gameFinished, 
  setGameFinished,
  singleGameScore, 
  setSingleGameScore, 
  setSelectedLetters1,
  setSelectedLetters2
}) {
  //Only applies to this tile
  const [tilePlacedState, setTilePlacedState] = useState(false);
  //Only applies to this tile
  const [tileRotatedState, setTileRotatedState] = useState(false);
  const [wrongTileErrorInSpecificTile, setWrongTileErrorInSpecificTile] =
    useState(false);
  // console.log("electedDominoObject", selectedDominoObject);
  // console.log("dominoesInHand in tile", dominoesInHand);
  // console.log("!!!!in Tile Component",  "dominoIdsInGrid", dominoIdsInGrid, "gridSelectedDominoObjects", gridSelectedDominoObjects)
  // console.log("wrongTileErrorInSpecificTile", wrongTileErrorInSpecificTile)

  useEffect(() => {
    if (!tilePlacedState) {
      setTileRotatedState(dominoRotated);
    }
  }, [dominoRotated]);
  // console.log("TILE ROTATED IN TILE", tileRotatedState)


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
              originalSelectedDominoObject,
              setOriginalSelectedDominoObject,
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
              setDominoesInHand,
              gamesArray,
              setGamesArray,
              scoreArraySingleGame,
              setScoreArraySingleGame,
              worDomination, 
              setWorDomination, 
              worDominationCount,
              setWorDominationCount,
              gameFinished,
              setGameFinished,
                singleGameScore, 
              setSingleGameScore,
              setSelectedLetters1,
              setSelectedLetters2
            )
            // ,
            // getStats(gamesArray, setGamesArray)
          ]
          }}
        >
          {wrongTileErrorInSpecificTile ? null : !tileRotatedState ? (
            //no wrong tile error and tile not rotated
            <Image
              source={dominoImageMappings[dominoIdsInGrid[tileId]]}
              style={[
                s.selectedTile,
                //Below: all horizontal tiles
                ((tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9))
                  ? [s.selectedTileHorizontal, s.selectedHorizontalTileUnroated]
                  : s.selectedTileVertical,
                // (tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9)
                //   ? s.selectedHorizontalTileUnrotated
                //   : null,
              ]}
              resizeMode="cover"
            />
          ) : 
          //tile rotated
          
          (
            <Image
              source={dominoImageMappings[dominoIdsInGrid[tileId]]}
              style={[
                s.selectedTile,
                ((tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9))
                  ? [s.selectedTileHorizontal, s.selectedHorizontalTileRotated]
                  : [s.selectedTileVertical, s.selectedVerticalTileRotated]
            
              ]}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}
