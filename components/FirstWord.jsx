import { View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import { s } from "../App.style";
import {InputLeft} from "./InputLeft";
import {submitWordToAPI} from "../utils/apiCalls"


export function FirstWord({wordLength1, setWordLength1, inputString1, setInputString1, selectedLetters, setSelectedLetters, wordForAPI, setWordForAPI}) {
  // const{word1Text, setWord1Text}=useState("");

    function handleRedoPress(){

        setInputString1([]);
        setSelectedLetters([]);
        console.log("input string after redo")


    }
    function handleSubmitPress(inputString1) {
      console.log("inputString1 in FirstWord:", inputString1);
      console.log("handleSubmitPress running");
    
      // Convert letters to lowercase and join them into a string
      let letterArray = inputString1.map((letter) => letter.toLowerCase()).join("");
    
      console.log("letterArray:", letterArray);
 
    
      // Pass the updated value directly to the API function
      submitWordToAPI(letterArray, wordLength1);
    }

  return (
    <>
          <View >
        <Text style={s.instructionText}>
            {`Make a word with ${wordLength1} letters.`}

        </Text>
        <InputLeft
        inputString1={inputString1}
        setInputString1={setInputString1}
        />
        <View style={s.wordButtonContainer}>
            <TouchableOpacity style={s.wordButton} onPress={()=>{handleRedoPress()}}>
           
      <Text style={s.wordButtonText}>Redo Word 1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={s.wordButton} onPress={()=>handleSubmitPress(inputString1)}>
      <Text style={s.wordButtonText} >Submit Word 1</Text>
    </TouchableOpacity>
    </View>



      </View>

    </>
  );
}