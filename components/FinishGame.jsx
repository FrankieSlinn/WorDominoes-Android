import { View, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
import {handleFinishGame} from "../utils/finishGame"


export function FinishGame({gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, 
    setSingleGameScore
}) {
   
    function handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
        setWorDominationCount, singleGameScore, setSingleGameScore
    ){
        setGameFinished(true);
    
    handleFinishGame( gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore)
        
        console.log("game finished in finish game", gameFinished);
    }


  return (
    <>
    <View style={s.finishGameContainer}>
        {!gameFinished?
<TouchableOpacity style={s.finishGameButton} onPress={()=>handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
    setWorDominationCount, singleGameScore, setSingleGameScore
    )}>
 
   <Text  style={s.finishGameText}>Finish Game</Text>
    </TouchableOpacity>
    :null}
    </View>

    </>
  )
  
}