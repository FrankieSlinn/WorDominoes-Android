import { View, Text, TouchableOpacity, Alert } from "react-native";
import { getLetterHand, storeLetterHand, getSelectedLetters1, storeSelectedLetters1, getSelectedLetters2, storeSelectedLetters2 } from "../utils/asynchStorageUtils"
import { useEffect, useState } from "react";
import { s } from "../App.style";


import { startNewGameFunction } from "../utils/startNewGameFunction.js"


export function StartNewGameButton({ setGameStart, setGameFinished, setSingleGameScore, setDominoesInHand, setWord1Success, setWord2Success, setDisplayDomino,
  setDominoRotated, setNumberDominoesInGrid, setDominoIdsInGrid, setSelectedDominoObject, setGridSelectedDominoObjects, setTilePlaced, setTurnStart,
  setScoreArraySingleGame, worDomination, setWorDomination, setShowMakeWord, setDominoSelected, setWordSubmitted, dominoesUsed, setDominoesUsed,
  worDominationCount, setWorDominationCount, showHOFEntry, setShowHOFEntry , showYouInHOF, setShowYouInHOF}) {

  return (
    <>
      <View style={s.startFinishGameContainer}>
        <TouchableOpacity style={[s.gameControlButton, s.startGameButton]} onPress={() => [startNewGameFunction(setGameStart, setGameFinished, setSingleGameScore, setDominoesInHand, setWord1Success, setWord2Success, setDisplayDomino,
          setDominoRotated, setNumberDominoesInGrid, setDominoIdsInGrid, setSelectedDominoObject, setGridSelectedDominoObjects, setTilePlaced, setTurnStart,
          setScoreArraySingleGame, worDomination, setWorDomination, setShowMakeWord, setDominoSelected, setWordSubmitted, dominoesUsed, setDominoesUsed,
          showHOFEntry, setShowHOFEntry, showYouInHOF, setShowYouInHOF
        )]}>
          <Text style={s.gameControlText}>Start New Game</Text>
        </TouchableOpacity>


      </View>

    </>
  )

}