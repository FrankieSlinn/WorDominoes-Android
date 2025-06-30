import { View, Text, TouchableOpacity, Alert} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
// import { HOFDatabase} from "../utils/HOFDatabase"

export function HallOfFame({
  }) {

    return(<>
 <View style={s.headerContainer}>
    <View style={s.header}>
        <Text style={[s.logo, s.HOFText]}>WorDominoes Hall Of Fame</Text>
        </View>
        </View>
        <View style={s.HOFHeadings}>
            <Text style={s.HOFHeadingText}>Handle</Text>
            <Text style={s.HOFHeadingText}>Score</Text>


        </View>




        
        
        
        </>)


  }