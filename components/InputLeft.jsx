import { View, Text, TextInput} from "react-native";
import {useEffect} from "react";
import { s } from "../App.style";


export function InputLeft({inputString1, setInputString1}) {

  return (
    <>
    <View style={s.input}>
        <Text style={inputString1.length===0?s.placeholder: s.inputText}>

            {inputString1.length===0?"Select letter tiles below to make a word.":inputString1}
        </Text>
        </View>
       
      {/* <TextInput style={inputString1?s.input:s.placeholder} 
      placeholder ="Select letter tiles below to make a word." placeholderTextColor="#aaa"
      
      >
        {inputString1 }
    </TextInput> */}
   
    </>
  );
}