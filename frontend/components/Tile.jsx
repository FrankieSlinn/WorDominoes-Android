import { View, Image, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style.js";
import { dominoImageMappings } from "../utils/dominoImageMappings.js";
import { handleTilePress } from "../utils/handleTilePress.js";
import {
  getTileRotatedState,
  storeTileRotatedState,
  getTilePlacedState,
  storeTilePlacedState,
  getRotatedTiles,
  storeRotatedTiles,
} from "../utils/asynchStorageUtils.js";
import { dominoes } from "../utils/dominoes.js";

export function Tile({
  tileId,
  dominoRotated,
  tilePlaced,
  setTilePlaced,
  turnStart,
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
  setSelectedLetters2,
  selectedDominoIndex,
  setSelectedDominoIndex,
  dominoesUsed,
  setDominoesUsed,
  finalScore,
  setFinalScore,
}) {
  //Only applies to this tile
  const [tilePlacedState, setTilePlacedState] = useState(false);
  //Only applies to this tile
  const [tileRotatedState, setTileRotatedState] = useState(false);
  const [rotatedTiles, setRotatedTiles] = useState([]);
  const [wrongTileErrorInSpecificTile, setWrongTileErrorInSpecificTile] =
    useState(false);
  // const storedTileRotatedState =  getTileRotatedState();

  console.log("tilePlacedState, tileID", tilePlacedState, tileId);

  //reset and load rotated tiles

  useEffect(() => {
    const fetchTileRotatedState = async () => {
      try {
        const storedRotatedTiles = await getRotatedTiles();
        //set all rotatd tiles to false in beginning
        if (gameStart === true) {
          console.log("gameStart is true steRotated Tiles to false.");
          storeRotatedTiles([]);
          setTileRotatedState(false);
        }
        //if tile Id in list of rotated tiles set tileRotatedState to true(this drives image displayed)
        else if (storedRotatedTiles.includes(tileId)) {
          setTileRotatedState(true);
        }
      } catch (e) {
        console.error("Error loading tile rotated state", e);
      }
    };

    fetchTileRotatedState();
  }, []);

  useEffect(() => {

    //If tile placed and tile rotated, add tile to rotated tiles list. Reset wrong tile error when placed. 
    const updatedTileRotatedState = async () => {
      try {
        const storedRotatedTiles = await getRotatedTiles();

        if (
          tilePlaced === false &&
          gridSelectedDominoObjects[tileId] === "empty"
        ) {
          setWrongTileErrorInSpecificTile(false);
        } else if (tilePlacedState === true && tileRotatedState === true) {
          storeRotatedTiles([...storedRotatedTiles, tileId]);
        }
      } catch (e) {
        console.error("Error loading tile rotated state", e);
      }
    };
    updatedTileRotatedState();
  }, [
    dominoRotated,
    turnStart,
    gameStart,
    gameFinished,
    wrongTileErrorInSpecificTile,
  ]);

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
          onPress={() => {
            [
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
                gameStart,
                setGameStart,
                wrongTileError,
                setWrongTileError,
                wrongTileErrorInSpecificTile,
                setWrongTileErrorInSpecificTile,
                tilePlacedState,
                setTilePlacedState,
                dominoRotated,
                tileRotatedState,
                setTileRotatedState,
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
                setSelectedLetters2,
                selectedDominoIndex,
                setSelectedDominoIndex,
                dominoesUsed,
                setDominoesUsed,
                finalScore,
                setFinalScore
              ),
            ];
          }}
        >
          {wrongTileErrorInSpecificTile ? null : !tileRotatedState ? (
            //no wrong tile error and tile not rotated
            <Image
              source={dominoImageMappings[dominoIdsInGrid[tileId]]}
              style={[
                s.selectedTile,
                //Below: all horizontal tiles
                (tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9)
                  ? //horizontal tiles
                    [
                      s.selectedTileHorizontal,
                      s.selectedHorizontalTileUnrotated,
                    ]
                  : //vertical tiles
                    s.selectedTileVertical,
              ]}
              resizeMode="cover"
            />
          ) : (
            //tile rotated

            <Image
              source={dominoImageMappings[dominoIdsInGrid[tileId]]}
              style={[
                s.selectedTile,
                (tileId >= 0 && tileId <= 3) || (tileId >= 6 && tileId <= 9)
                  ? [s.selectedTileHorizontal, s.selectedHorizontalTileRotated]
                  : [s.selectedTileVertical, s.selectedVerticalTileRotated],
              ]}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}
s;
