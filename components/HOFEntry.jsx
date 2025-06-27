import { View, Text, TouchableOpacity, Alert, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
// import { HOFDatabase} from "../utils/HOFDatabase"

export function HOFEntry({
  }) {

    return(<>
 <View style={s.headerContainer}>
    <View >
        <Text style={[s.logo, s.HOFText]}>Congratulations, You Have Made It Into the WorDominoes Hall Of Fame!</Text>
        </View>
        </View>
        <View style={s.HOFHeadings}>
            <TextInput style={s.HOFHeadingText}>Enter Your Handle</TextInput>
            <Text style={s.HOFHeadingText}>Score</Text>


        </View>




        
        
        
        </>)


  }