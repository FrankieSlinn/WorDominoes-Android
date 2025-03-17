import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import {Tile} from "./Tile";
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
  worDomination,
  setWorDomination, 
  worDominationCount,
  setWorDominationCount
}) {
  const horizontalTopTileIds = [0, 1, 2, 3];
  const verticalRightTileIds = [4, 5];
  const horizontalBottomTileIds=[9,8,7,6];
  const verticalLeftTileIds=[11,10];

  console.log("dominoesInHand in grid", dominoesInHand)

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

  console.log(
    "TopSelectedHorizontal Top DominoObjects in grid",
    gridSelectedDominoObjects
  );
  console.log("topHorizontalTilesin grid in grid component", dominoIdsInGrid);
  console.log("tile placed in grid component", tilePlaced);
  console.log("selectedDominoObject", selectedDominoObject);

  return (
    <>
      <View style={s.grid}>
        <View style={s.horizontalDominoContainer}>
          {horizontalTopTileIds.map((id) => (
            <Tile
              key={id}
              tileId={id}
              dominoRotated={dominoRotated}
              tilePlaced={tilePlaced}
              setTilePlaced={setTilePlaced}
              displayDomino={displayDomino}
              turnStart={turnStart}
              setTurnStart={setTurnStart}
              wordSubmitted={wordSubmitted}
              setWordSubmitted={setWordSubmitted}
              selectedDominoObject={selectedDominoObject}
              setSelectedDominoObject={setSelectedDominoObject}
              dominoSelected={dominoSelected}
              setDominoSelected={setDominoSelected}
              word1Success={word1Success}
              setWord1Success={setWord1Success}
              word2Success={word2Success}
              setWord2Success={setWord2Success}
              setDisplayDomino={setDisplayDomino}
              showMakeWord={showMakeWord}
              setShowMakeWord={setShowMakeWord}
              dominoesInGrid={dominoesInGrid}
              setDominoesInGrid={setDominoesInGrid}
              dominoIdsInGrid={dominoIdsInGrid}
              setDominoIdsInGrid={setDominoIdsInGrid}
              numberDominoesInGrid={numberDominoesInGrid}
              setNumberDominoesInGrid={setNumberDominoesInGrid}
              tileFullError={tileFullError}
              setTileFullError={setTileFullError}
              gameStart={gameStart}
              setGameStart={setGameStart}
              gridSelectedDominoObjects={gridSelectedDominoObjects}
              setGridSelectedDominoObjects={setGridSelectedDominoObjects}
              selectedDominoObjects={selectedDominoObjects}
              setSelectedDominoObjects={setSelectedDominoObjects}
              wrongTileError={wrongTileError}
              setWrongTileError={setWrongTileError}
              dominoesInHand={dominoesInHand}
              setDominoesInHand={setDominoesInHand}
              gamesArray={gamesArray}
              setGamesArray={setGamesArray}
              worDomination={worDomination}
              setWorDomination={setWorDomination}
              worDominationCount={worDominationCount}
              setWorDominationCount={setWorDominationCount}
            />
          ))}
        </View>
        <View style={s.verticalDominoContainer}>
          <View style={s.verticalDominoContainerLeft}>
          {verticalLeftTileIds.map((id) => (
              <Tile
                key={id}
                tileId={id}
                dominoRotated={dominoRotated}
                tilePlaced={tilePlaced}
                setTilePlaced={setTilePlaced}
                displayDomino={displayDomino}
                turnStart={turnStart}
                setTurnStart={setTurnStart}
                wordSubmitted={wordSubmitted}
                setWordSubmitted={setWordSubmitted}
                selectedDominoObject={selectedDominoObject}
                setSelectedDominoObject={setSelectedDominoObject}
                dominoSelected={dominoSelected}
                setDominoSelected={setDominoSelected}
                word1Success={word1Success}
                setWord1Success={setWord1Success}
                word2Success={word2Success}
                setWord2Success={setWord2Success}
                setDisplayDomino={setDisplayDomino}
                showMakeWord={showMakeWord}
                setShowMakeWord={setShowMakeWord}
                dominoesInGrid={dominoesInGrid}
                setDominoesInGrid={setDominoesInGrid}
                dominoIdsInGrid={dominoIdsInGrid}
                setDominoIdsInGrid={setDominoIdsInGrid}
                numberDominoesInGrid={numberDominoesInGrid}
                setNumberDominoesInGrid={setNumberDominoesInGrid}
                tileFullError={tileFullError}
                setTileFullError={setTileFullError}
                gameStart={gameStart}
                setGameStart={setGameStart}
                selectedDominoObjects={selectedDominoObjects}
                setSelectedDominoObjects={setSelectedDominoObjects}
                wrongTileError={wrongTileError}
                setWrongTileError={setWrongTileError}
                gridSelectedDominoObjects={gridSelectedDominoObjects}
                setGridSelectedDominoObjects={setGridSelectedDominoObjects}
                dominoesInHand={dominoesInHand}
                setDominoesInHand={setDominoesInHand}
                gamesArray={gamesArray}
                setGamesArray={setGamesArray}
              />
            ))}
          </View>
          <View>
            {verticalRightTileIds.map((id) => (
              <Tile
                key={id}
                tileId={id}
                dominoRotated={dominoRotated}
                tilePlaced={tilePlaced}
                setTilePlaced={setTilePlaced}
                displayDomino={displayDomino}
                turnStart={turnStart}
                setTurnStart={setTurnStart}
                wordSubmitted={wordSubmitted}
                setWordSubmitted={setWordSubmitted}
                selectedDominoObject={selectedDominoObject}
                setSelectedDominoObject={setSelectedDominoObject}
                dominoSelected={dominoSelected}
                setDominoSelected={setDominoSelected}
                word1Success={word1Success}
                setWord1Success={setWord1Success}
                word2Success={word2Success}
                setWord2Success={setWord2Success}
                setDisplayDomino={setDisplayDomino}
                showMakeWord={showMakeWord}
                setShowMakeWord={setShowMakeWord}
                dominoesInGrid={dominoesInGrid}
                setDominoesInGrid={setDominoesInGrid}
                dominoIdsInGrid={dominoIdsInGrid}
                setDominoIdsInGrid={setDominoIdsInGrid}
                numberDominoesInGrid={numberDominoesInGrid}
                setNumberDominoesInGrid={setNumberDominoesInGrid}
                tileFullError={tileFullError}
                setTileFullError={setTileFullError}
                gameStart={gameStart}
                setGameStart={setGameStart}
                selectedDominoObjects={selectedDominoObjects}
                setSelectedDominoObjects={setSelectedDominoObjects}
                wrongTileError={wrongTileError}
                setWrongTileError={setWrongTileError}
                gridSelectedDominoObjects={gridSelectedDominoObjects}
                setGridSelectedDominoObjects={setGridSelectedDominoObjects}
                dominoesInHand={dominoesInHand}
                setDominoesInHand={setDominoesInHand}
                gamesArray={gamesArray}
                setGamesArray={setGamesArray}
              />
            ))}
          </View>
        </View>
        <View style={s.horizontalDominoContainer}>
        {horizontalBottomTileIds.map((id) => (
              <Tile
                key={id}
                tileId={id}
                dominoRotated={dominoRotated}
                tilePlaced={tilePlaced}
                setTilePlaced={setTilePlaced}
                displayDomino={displayDomino}
                turnStart={turnStart}
                setTurnStart={setTurnStart}
                wordSubmitted={wordSubmitted}
                setWordSubmitted={setWordSubmitted}
                selectedDominoObject={selectedDominoObject}
                setSelectedDominoObject={setSelectedDominoObject}
                dominoSelected={dominoSelected}
                setDominoSelected={setDominoSelected}
                word1Success={word1Success}
                setWord1Success={setWord1Success}
                word2Success={word2Success}
                setWord2Success={setWord2Success}
                setDisplayDomino={setDisplayDomino}
                showMakeWord={showMakeWord}
                setShowMakeWord={setShowMakeWord}
                dominoesInGrid={dominoesInGrid}
                setDominoesInGrid={setDominoesInGrid}
                dominoIdsInGrid={dominoIdsInGrid}
                setDominoIdsInGrid={setDominoIdsInGrid}
                numberDominoesInGrid={numberDominoesInGrid}
                setNumberDominoesInGrid={setNumberDominoesInGrid}
                tileFullError={tileFullError}
                setTileFullError={setTileFullError}
                gameStart={gameStart}
                setGameStart={setGameStart}
                selectedDominoObjects={selectedDominoObjects}
                setSelectedDominoObjects={setSelectedDominoObjects}
                wrongTileError={wrongTileError}
                setWrongTileError={setWrongTileError}
                gridSelectedDominoObjects={gridSelectedDominoObjects}
                setGridSelectedDominoObjects={setGridSelectedDominoObjects}
                dominoesInHand={dominoesInHand}
                setDominoesInHand={setDominoesInHand}
                gamesArray={gamesArray}
                setGamesArray={setGamesArray}
              />
            ))}
        </View>
      </View>
    </>
  );
}
