import { View, Text, TouchableOpacity, Alert} from "react-native";
import {startNewGameFunction} from "../utils/startNewGameFunction.js"
import {useEffect, useState} from "react";
import { s } from "../App.style";

export function HallOfFameButton({showHOF, setShowHOF
  }) {

    function handlePress(){
        console.log("HOF handle press running")
        setShowHOF(true)
    
    
    }

    return(<>
    <View >
        <TouchableOpacity onPress={handlePress}>
        <Text>WorDominoes Hall Of Fame</Text>
        </TouchableOpacity>



    </View>
        
        
        
        </>)


  }