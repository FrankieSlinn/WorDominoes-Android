import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";


export function ChooseDominoText({word1Success, dominoSelected, setDominoSelected}) {
  console.log("dominoSelected in ChooseDominoText", dominoSelected);
  console.log("word1Success in choose dominoText", word1Success);


  return (
    <>
 {dominoSelected===false? (
          <View style={s.instructionTextBelow}>
            <Text style={s.instructionText}>
              Choose a domino above. You'll create 2 words for this tile: the
              word length is the number of dots on its side of the domino.
            </Text>
          </View>
        ) : null}
       
 
   
    </>
  );
}