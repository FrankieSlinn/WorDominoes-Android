import { View, Text, TouchableOpacity, Alert} from "react-native";
import {startNewGameFunction} from "../utils/startNewGameFunction.js"
import {useEffect, useState} from "react";
import { s } from "../App.style";
// import {handleFinishGame} from "../utils/finishGame"


export function ContinuePlaying({gameStart, setGameStart, dominoesInHand, setDominoesInHand, gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
  word1Success, setWord1Success, word2Success, setWord2Success, displayDomino, setDisplayDomino, dominoRotated, setDominoRotated, setWorDominationCount, singleGameScore, 
    setSingleGameScore, numberDominoesInGrid, setNumberDominoesInGrid, dominoIdsInGrid, setDominoIdsInGrid, 
    selectedDominoObject, setSelectedDominoObject, gridSelectedDominoObjects, setGridSelectedDominoObjects, tilePlaced, setTilePlaced, turnStart, setTurnStart,
    scoreArraySingleGame, setScoreArraySingleGame, showMakeWord, setShowMakeWord, dominoSelected, setDominoSelected, howFinishGame, setShowFinishGame, 
    worDomination, setWorDomination
}) {
  function handleContinuePlaying(){
    // newWorDominationCount = worDominationCount+1
    // setWorDominationCount(newWorDominationCount)
    startNewGameFunction(setGameStart, setGameFinished, setSingleGameScore, setDominoesInHand, setWord1Success, setWord2Success, setDisplayDomino,
      setDominoRotated, setNumberDominoesInGrid, setDominoIdsInGrid, setSelectedDominoObject, setGridSelectedDominoObjects, setTilePlaced, setTurnStart, 
      setScoreArraySingleGame, worDomination, setWorDomination,  setShowMakeWord, setDominoSelected, setWordSubmitted);


  }
   
   
    // function handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
    //     setWorDominationCount, singleGameScore, setSingleGameScore
    // ){console.log("handleClick for Finishgame running")
    //     setShowFinishGame(false);
        
    //     setGameFinished(true);
    
    // handleFinishGame( gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore)
        
    //     console.log("game finished in finish game", gameFinished);
    // }

//      function showAlert(){
//         console.log("alert should show")
//     //   console.log("showFinishGame", showFinishGame, "game finished", gameFinished);
//     //   if(gameFinished===true){
//         Alert.alert('Finish Game', 'Are You Sure You Want To Finish This Game?', [
//           {
//             text: 'Cancel',
//             onPress: () => {console.log('Cancel Pressed');
//                 // setGameFinished(false);
//             }
//                 ,
//             style: 'cancel',
//           },
//           {text: 'OK', onPress: () => {handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
//             setWorDominationCount, singleGameScore, setSingleGameScore
//             )}},
//         ]
    
//       )
//   };


  return (
    <>
    {worDomination?
    <View style={s.startFinishGameContainer}>
    
<TouchableOpacity style={[s.startFinishGameButton, s.continuePlayingButton]} onPress={()=>[console.log("continuePlaying Pressed"), handleContinuePlaying]
}>
 
   <Text  style={s.startFinishGameText}>Continue Playing</Text>
    </TouchableOpacity>
    </View>
    :null}


    </>
  )
  
}