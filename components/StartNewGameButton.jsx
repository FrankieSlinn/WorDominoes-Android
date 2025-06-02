import { View, Text, TouchableOpacity, Alert} from "react-native";
import {getLetterHand, storeLetterHand, getSelectedLetters1, storeSelectedLetters1, getSelectedLetters2, storeSelectedLetters2} from "../utils/asynchStorageUtils"
import {useEffect, useState} from "react";
import { s } from "../App.style";

import { allocateDominoes } from "../utils/allocateDominoes.js";


export function StartNewGameButton({gameStart, setGameStart, gameFinished, setGameFinished, singleGameScore, 
    setSingleGameScore, dominoesInHand, setDominoesInHand, word1Success, setWord1Success, word2Success, setWord2Success, displayDomino, setDisplayDomino,
   numberDominoesInGrid, setNumberDominoesInGrid, dominoIdsInGrid, setDominoIdsInGrid, selectedDominoObject, 
     setSelectedDominoObject, gridSelectedDominoObjects, setGridSelectedDominoObjects, tilePlaced, setTilePlaced, turnStart, setTurnStart, 
     scoreArraySingleGame, setScoreArraySingleGame, worDomination, setWorDomination, showMakeWord, setShowMakeWord, dominoSelected, setDominoSelected,
    setWordSubmitted}) {



  function startNewGame(){
    console.log("start new game running")
    setGameStart(true)
    setGameFinished(false)
    setSingleGameScore(0)
    setDominoesInHand([])
    setWord1Success(false)
    setWord2Success(false)
    setDisplayDomino=(null)
    setNumberDominoesInGrid(0)
    setDominoIdsInGrid(["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"])
    setSelectedDominoObject(null)
    setGridSelectedDominoObjects(["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"])
    setTilePlaced(false)
    setTurnStart(true)
    setScoreArraySingleGame([])
    setWorDomination(false)
    allocateDominoes([], setDominoesInHand, true);
    setShowMakeWord(false)
    setDominoSelected(false)
    setWordSubmitted(false)

   
  }


  return (
    <>
    <View style={s.startFinishGameContainer}>
   

    
    <TouchableOpacity style={[s.startFinishGameButton, s.startGameButton]} onPress={()=>[startNewGame()]}>
        <Text style={s.startFinishGameText}>Start New Game</Text>
    </TouchableOpacity>
    
    
    </View>

    </>
  )
  
}