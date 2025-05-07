import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import {Tile} from "./Tile";
// import {tileProps} from "../utils/tileProps.js";
import { s } from "../App.style";

export function Grid({
  dominoRotated,
  displayDomino,
  tilePlaced,
  setTilePlaced,
  turnStart,
  setTurnStart,
  wordSubmitted,
  setWordSubmitted,
  selectedDominoObject,
  setSelectedDominoObject,
  originalSelectedDominoObject,
  setOriginalSelectedDominoObject,
  dominoSelected,
  setDominoSelected,
  word1Success,
  setWord1Success,
  word2Success,
  setWord2Success,
  setDisplayDomino,
  showMakeWord,
  setShowMakeWord,
  numberDominoesInGrid,
  setNumberDominoesInGrid,
  dominoesInGrid,
  setDominoesInGrid,
  dominoIdsInGrid,
  setDominoIdsInGrid,
  tileFullError,
  setTileFullError,
  wrongTileError,
  setWrongTileError,
  gameStart,
  setGameStart,
  gridSelectedDominoObjects,
  setGridSelectedDominoObjects,
  rightVerticalTilesInGrid,
  setRightVerticalTilesInGrid,
  selectedDominoObjects,
  setSelectedDominoObjects,
  dominoesInHand, 
  setDominoesInHand,
  gamesArray,
  setGamesArray,
  scoreArraySingleGame,
  setScoreArraySingleGame,
  gameFinished,
  setGameFinished,
  worDomination,
  setWorDomination, 
  worDominationCount,
  setWorDominationCount, 
  singleGameScore, 
  setSingleGameScore,
  setSelectedLetters1,
  setSelectedLetters2
}) {
  const horizontalTopTileIds = [0, 1, 2, 3];
  const verticalRightTileIds = [4, 5];
  const horizontalBottomTileIds=[9,8,7,6];
  const verticalLeftTileIds=[11,10];

  const tileProps = {
    dominoRotated,
    tilePlaced,
    setTilePlaced,
    displayDomino,
    turnStart,
    setTurnStart,
    wordSubmitted,
    setWordSubmitted,
    selectedDominoObject,
    setSelectedDominoObject,
    originalSelectedDominoObject,
    setOriginalSelectedDominoObject,
    originalSelectedDominoObject, 
    setOriginalSelectedDominoObject,
    dominoSelected,
    setDominoSelected,
    word1Success,
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
    selectedDominoObjects,
    setSelectedDominoObjects,
    wrongTileError,
    setWrongTileError,
    gridSelectedDominoObjects,
    setGridSelectedDominoObjects,
    dominoesInHand,
    setDominoesInHand,
    gamesArray,
    setGamesArray,
    scoreArraySingleGame,
    setScoreArraySingleGame,
    gameFinished, 
    setGameFinished,
    worDomination,
    setWorDomination,
    worDominationCount,
    setWorDominationCount,
    singleGameScore, 
    setSingleGameScore,
    setSelectedLetters1,
    setSelectedLetters2
  };

  // console.log("dominoesInHand in grid", dominoesInHand)

  //Needed to rerender after values changed in handleTilePress function
  useEffect(() => {
    console.log(
      "tilePlaced",
      tilePlaced,
      "turnStart",
      turnStart,
      "wordSubmitted",
      wordSubmitted,
      "selectedDominoObject",
      selectedDominoObject
    );
  }, [tilePlaced]);

  // console.log(
  //   "TopSelectedHorizontal Top DominoObjects in grid",
  //   gridSelectedDominoObjects
  // );
  // console.log("topHorizontalTilesin grid in grid component", dominoIdsInGrid);
  // console.log("tile placed in grid component", tilePlaced);
  // console.log("selectedDominoObject", selectedDominoObject);


  function renderTiles(tileIds) {
    return tileIds.map((id) => (
      <Tile key={id} tileId={id} {...tileProps} />
    ));
  }

  return (
    <>
      <View style={s.grid}>
        <View style={s.horizontalDominoContainer}>
        {renderTiles(horizontalTopTileIds)}
        </View>
        <View style={s.verticalDominoContainer}>
          <View style={s.verticalDominoContainerLeft}>
          {renderTiles(verticalLeftTileIds)}
          </View>
          <View>
          {renderTiles(verticalRightTileIds)}
          </View>
        </View>
        <View style={s.horizontalDominoContainer}>
        {renderTiles(horizontalBottomTileIds)}
      
        </View>
      </View>
    </>
  );
}
