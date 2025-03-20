import { View, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";


export function FinishGame({gameFinished, setGameFinished}) {
    function handleClick(){
        setGameFinished(true);
        console.log("game finished in finish game", gameFinished);
    }


  return (
    <>
    <View style={s.finishGameContainer}>
<TouchableOpacity style={s.finishGameButton} onPress={handleClick}>
 
   <Text  style={s.finishGameText}>Finish Game</Text>
    </TouchableOpacity>
    </View>

    </>
  )
  
}