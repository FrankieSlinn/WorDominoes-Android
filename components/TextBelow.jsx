import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";


export function TextBelow({word1Success, dominoSelected, setDominoSelected, gameFinished}) {
  console.log("dominoSelected in ChooseDominoText", dominoSelected);
  console.log("word1Success in choose dominoText", word1Success);


  //To force rerender to get gameFinished updated quickly
  const [renderKey, setRenderKey] = useState(0);
  useEffect(()=>{
  
      setRenderKey((prevKey) => prevKey + 1); // Forces re-render

   console.log("gameFinished in Text Below", gameFinished)
    
  },[gameFinished])


  return (
    <>
 
 

          <View style={s.instructionTextBelow} key={renderKey}>
            { gameFinished===true?
             <Text style={s.instructionText}>You Have Scored Points</Text>
            : dominoSelected===false? 
            
            <Text style={s.instructionText}>
             

              Choose a domino above. You'll create 2 words for this tile: the
              word length is the number of dots on its side of the domino.
            </Text>
            :null}
          </View>
     
 
   
    </>
  );
}