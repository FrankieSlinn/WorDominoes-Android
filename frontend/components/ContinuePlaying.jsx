import { View, Text, TouchableOpacity, Alert} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
import {gameResets} from "../utils/startNewGameFunction"



export function ContinuePlaying({gameStart, setGameStart, dominoesInHand, setDominoesInHand, gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
  word1Success, setWord1Success, word2Success, setWord2Success, displayDomino, setDisplayDomino, dominoRotated, setDominoRotated, setWorDominationCount, singleGameScore, 
    setSingleGameScore, numberDominoesInGrid, setNumberDominoesInGrid, dominoIdsInGrid, setDominoIdsInGrid, 
    selectedDominoObject, setSelectedDominoObject, gridSelectedDominoObjects, setGridSelectedDominoObjects, tilePlaced, setTilePlaced, turnStart, setTurnStart,
    scoreArraySingleGame, setScoreArraySingleGame, showMakeWord, setShowMakeWord, dominoSelected, setDominoSelected, howFinishGame, setShowFinishGame, 
    worDomination, setWorDomination, wordSubmitted, setWordSubmitted, dominoesUsed, setDominoesUsed, showHOFEntry, setShowHOFEntry, showYouInHOF, 
    setShowYouInHOF, handle, setHandle
}) {

 
  return (
    <>
    {worDomination?
    <View style={s.startFinishGameContainer}>
    
<TouchableOpacity style={[ s.continuePlayingButton, {marginBottom: worDomination? -74:null}]} onPress={()=>gameResets(gameStart, setGameStart,
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
  setHandle,
worDominationCount)
}>
 
   <Text  style={s.continuePlayingText}>Continue Playing</Text>
    </TouchableOpacity>
    </View>
    :null}


    </>
  )
  
}