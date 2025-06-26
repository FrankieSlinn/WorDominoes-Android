import { View, Text, TouchableOpacity, Alert} from "react-native";
import {startNewGameFunction} from "../utils/startNewGameFunction.js"
import {useEffect, useState} from "react";
import { s } from "../App.style";

export function HallOfFameButton({
  }) {

    return(<>
    <View >
        <TouchableOpacity>
        <Text>WorDominoes Hall Of Fame</Text>
        </TouchableOpacity>



    </View>
        
        
        
        </>)


  }