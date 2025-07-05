import { View, Text, TouchableOpacity, Alert} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
import {handleFinishGame} from "../utils/finishGame"
import {StartNewGameButton} from "./StartNewGameButton";


export function FinishGame({gameStart, setGameStart, gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, 
    setSingleGameScore, showFinishGame, setShowFinishGame, dominoesInHand, setDominoesInHand, finalScore, setFinalScore, worDomination, setWorDomination, 
    showHOFEntry, setShowHOFEntry, handle
   
}) {
   
   
    function handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDomination, setWorDomination, worDominationCount, 
        setWorDominationCount, singleGameScore, setSingleGameScore, finalScore, setFinalScore, showHOFEntry, setShowHOFEntry, handle
    ){console.log("handleClick for Finishgame running")
        setShowFinishGame(false);
        
        setGameFinished(true);
    
    handleFinishGame( gameFinished, setGameFinished, gamesArray, setGamesArray, worDomination, setWorDomination, worDominationCount, setWorDominationCount, 
      singleGameScore, setSingleGameScore, finalScore, setFinalScore, showHOFEntry, setShowHOFEntry, handle)

        
        console.log("game finished in finish game", gameFinished);
    }

     function showAlert(){
        console.log("alert should show")
 
        Alert.alert('Finish Game', 'Are You Sure You Want To Finish This Game?', [
          {
            text: 'Cancel',
            onPress: () => {console.log('Cancel Pressed');
               
            }
                ,
            style: 'cancel',
          },
          {text: 'OK', onPress: () => {handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDomination, setWorDomination, worDominationCount, 
            setWorDominationCount, singleGameScore, setSingleGameScore, finalScore, setFinalScore, showHOFEntry, setShowHOFEntry, handle
            )}},
        ]
    
      )
  };




  return (
    <>
    <View style={s.startFinishGameContainer}>
        
<TouchableOpacity style={[s.startFinishGameButton, s.finishGameButton]} onPress={()=>[showAlert()]
}>
 
   <Text  style={s.startFinishGameText}>Finish Game</Text>
    </TouchableOpacity>
    <Text>   {"\n"} {"\n"} {"\n"}
    {"\n"}</Text>
    

    </View>

    </>
  )
  
}