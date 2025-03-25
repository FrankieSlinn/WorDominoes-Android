import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";



export function TextWorDominationCount({word2Success, tilePlaced, worDomination, worDominationCount}) {




  return (
    <>
 
 

            {worDomination?
             <View style={[s.instructionContainer, s.WorDominationCount]}>
            <Text style={s.instructionText}>WorDomination Count: <Text>{worDominationCount}</Text></Text>
      
          </View>
              : null}
     
 
   
    </>
  );
}