import { View, Text, TextInput} from "react-native";
import {useEffect} from "react";
import { s } from "../App.style";


export function InputLeft({inputString1, setInputString1, inputString2, setInputString2, wordNum, setWordNum}) {
  console.log("wordnum in 1", wordNum)

  return (
    <>
    <View style={s.input}>
      {wordNum===1?

        <Text style={inputString1.length===0?s.placeholder: s.inputText}>

            {inputString1.length===0?"Select letter tiles below to make a word.":inputString1}
        </Text>
        :

        <Text style={inputString2.length===0?s.placeholder: s.inputText}>

            {inputString2.length===0?"Select letter tiles below to make a word.":inputString2}
        </Text>


  }
        </View>
       
 
   
    </>
  );
}