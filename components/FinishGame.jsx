import { View, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";


export function FinishGame({}) {


  return (
    <>
    <View style={s.finishGameContainer}>
<TouchableOpacity style={s.finishGameButton}>
 
   <Text  style={s.finishGameText}>Finish Game</Text>
    </TouchableOpacity>
    </View>

    </>
  )
  
}