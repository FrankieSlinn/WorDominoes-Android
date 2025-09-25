import { View, Text, TouchableOpacity, Alert } from "react-native";
import { getLetterHand, storeLetterHand, getSelectedLetters1, storeSelectedLetters1, getSelectedLetters2, storeSelectedLetters2 } from "../utils/asynchStorageUtils"
import { useEffect, useState } from "react";
import { s } from "../App.style";


import { startNewGameFunction } from "../utils/startNewGameFunction.js"


export function StartNewGameButton({ gameStart, setGameStart, setGameFinished, setSingleGameScore, dominoesInHand, setDominoesInHand, setWord1Success, setWord2Success, setDisplayDomino,
  setDominoRotated, setNumberDominoesInGrid, setDominoIdsInGrid, setSelectedDominoObject, setGridSelectedDominoObjects, setTilePlaced, turnStart, setTurnStart,
  setScoreArraySingleGame, worDomination, setWorDomination, setShowMakeWord, setDominoSelected, setWordSubmitted, dominoesUsed, setDominoesUsed,
  worDominationCount, setWorDominationCount, showHOFEntry, setShowHOFEntry , showYouInHOF, setShowYouInHOF, handle, setHandle}) {

  return (
    <>
      <View style={[ s.startGameContainer, {marginBottom: -12}]}>
        <TouchableOpacity style={[s.startGameButton, s.buttonBorders]} onPress={() => [startNewGameFunction(
  gameStart, setGameStart,
  setGameFinished,
  setSingleGameScore,
  dominoesInHand,
  setDominoesInHand,
  setWord1Success,
  setWord2Success,
  setDisplayDomino,
  setDominoRotated,
  setNumberDominoesInGrid,
  setDominoIdsInGrid,
  setSelectedDominoObject,
  setGridSelectedDominoObjects,
  setTilePlaced,
  turnStart,
  setTurnStart,
  setScoreArraySingleGame,
  worDomination,
  setWorDomination,
  setShowMakeWord,
  setDominoSelected,
  setWordSubmitted,
  dominoesUsed,
  setDominoesUsed,
  showHOFEntry,
  setShowHOFEntry,
  showYouInHOF,
  setShowYouInHOF, 
  handle, 
  setHandle, worDominationCount
        )]}>
          <Text style={s.gameControlText}>Start New Game</Text>
        </TouchableOpacity>


      </View>

    </>
  )

}