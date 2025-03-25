import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";


export function TextAbove({tileFullError, wrongTileError, tilePlaced, worDomination, setWorDomination}) {
  
useEffect(() => {
  setWorDomination(true)
},[]);


  return (
    
        <>
          {
               worDomination===true?
               <View style={[s.instructionBox, {height:50, marginBottom: 12, marginRight: 20}]}>
               <Text style={[s.instructionText] }>
               CONGRATULATIONS!!!! YOU HAVE ACHIEVED WORDOMINATION!!!!
             </Text>
             </View>
             :
          
          tileFullError===false&&wrongTileError===false&&tilePlaced===false?
          <View style={[s.instructionBox, {height:50, marginBottom: 14, marginTop:25}]}>
          <Text style={s.instructionText}>
            Fill the grid with dominoes to achieve Word Domination.
        
       
          </Text>
          </View>
          :!tileFullError===true&&!wrongTileError===true&&tilePlaced===true?
      
          <View style={[s.instructionBox, {height:50, marginBottom: 10, marginTop:10}]}>
          <Text style={s.instructionText}s>
          Congratulations, you placed a tile!!!
        </Text>
        </View>
        :wrongTileError===true?
    
        <View style={[s.instructionBox, {marginBottom: 10}]}>
        <Text style={s.instructionText}>
        The tile does not have the same amount of dots as the tile next to it. Try somewhere else.
    
        
      </Text>
      </View>
      :
      tileFullError===true?
      <View style={[s.instructionBox, {height:50, marginBottom: 12, marginRight: 20}]}>
        <Text style={[s.instructionText] }>
        This space is already taken. Try somewhere else.
      </Text>
      </View>
   
      :null

}
</>

       
 
   
    
  );
}