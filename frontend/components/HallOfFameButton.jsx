import { View, Text, TouchableOpacity, Alert} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {startNewGameFunction} from "../utils/startNewGameFunction.js"
import {useEffect, useState} from "react";
import { s } from "../App.style";

export function HallOfFameButton({showHOF, setShowHOF, showYouInHOF, setShowYouInHOF, showHOFEntry, worDomination
  }) {

    function handlePress(){
        console.log("HOF handle press running")
        setShowHOF(true)
    
    
    }

    return(<>
    <View style={[s.HOFButtonContainer, {marginTop: showYouInHOF?60:worDomination?17:30}]}>

        <TouchableOpacity style={s.HOFButton} onPress={handlePress}>
        <View style={s.HOFButtonInsideView}>
        <Ionicons name="trophy" size={25} 
        />
        <Text style={s.HOFButtonText}> WorDominoes Hall Of Fame</Text>
        </View>
        </TouchableOpacity>

      <Text>{"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}</Text>  


    </View>
        
        
        
        </>)


  }