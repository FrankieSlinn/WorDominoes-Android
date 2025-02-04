import { View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import { s } from "../App.style";
import {InputLeft} from "./InputLeft";
import {submitWordToAPI} from "../utils/apiCalls"


export function FirstWord({wordLength1, setWordLength1, wordLength2, setWordLength2, inputString1, setInputString1, inputString2, setInputString2,
  selectedLetters1, setSelectedLetters1, selectedLetters2, setSelectedLetters2,
  wordForAPI, setWordForAPI,
word1Success, setWord1Success, word2Success, setWord2Success, wordNum, setWordNum


}) {
  // const{word1Text, setWord1Text}=useState("");

    function handleRedoPress(){
      if(wordNum===1){

        setInputString1([]);
        setSelectedLetters1([]);}
        else{
        setInputString2([])
        setSelectedLetters2([]);}



    }
    function handleSubmitPress(inputString1, inputString2) {
    
      console.log("handleSubmitPress running");
      //shows if first word or second word submitted
   let wordNumber = wordNum;
   let wordLength = wordNum===1?wordLength1:wordLength2;
   let setWordSuccess = wordNum===1?setWord1Success: setWord2Success;
   //Convert letters to lower case and convert to string
   let letterArray = wordNum===1?inputString1.map((letter) => letter.toLowerCase()).join(""):inputString2.map((letter) => letter.toLowerCase()).join("")
    



      
    
      // Pass the updated value directly to the API function
      submitWordToAPI(letterArray, wordLength, wordNumber, setWordSuccess);
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
           {`Now make a second word with ${wordLength2} letters.`}
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
           
      <Text style={s.wordButtonText}>Redo Word</Text>
    </TouchableOpacity>
    <TouchableOpacity style={s.wordButton} onPress={()=>handleSubmitPress(inputString1, inputString2)}>
      <Text style={s.wordButtonText} >Submit Word</Text>
    </TouchableOpacity>
    </View>



      </View>

    </>
  );
}