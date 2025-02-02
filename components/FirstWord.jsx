import { View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import { s } from "../App.style";
import {InputLeft} from "./InputLeft";
import {submitWordToAPI} from "../utils/apiCalls"


export function FirstWord({wordLength1, setWordLength1, wordLength2, setWordLength2, inputString1, setInputString1, inputString2, setInputString2,
  selectedLetters, setSelectedLetters, 
  wordForAPI, setWordForAPI,
word1Success, setWord1Success, wordNum, setWordNum


}) {
  // const{word1Text, setWord1Text}=useState("");

    function handleRedoPress(){

        setInputString1([]);
        setSelectedLetters([]);
        console.log("input string after redo")


    }
    function handleSubmitPress(inputString1) {
    
      console.log("handleSubmitPress running");
      //shows if first word or second word submitted
      const wordNumber = 1;
    
      // Convert letters to lowercase and join them into a string
      let letterArray = inputString1.map((letter) => letter.toLowerCase()).join("");
    
   
 
    
      // Pass the updated value directly to the API function
      submitWordToAPI(letterArray, wordLength1, wordNumber, setWord1Success);
    }

  return (
    <>
          <View >
            {word1Success===false?
        <Text style={s.instructionText}>
            {`Make a word with ${wordLength1} letters.`}

        </Text>
        :<Text style={s.instructionText}>
           The first word is complete {"\u2713"}
           {"\n"}
           {`Now make a word with ${wordLength2} letters.`}
          </Text>}
        <InputLeft
        inputString1={inputString1}
        setInputString1={setInputString1}
        inputString2={inputString2}
        setInputString2={setInputString2}
        wordNum={wordNum}
        setWordNum={setWordNum}
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