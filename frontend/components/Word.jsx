import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { s } from "../App.style";
import { Input } from "./Input";
import { submitWordToAPI } from "../utils/apiCalls";
import {getLetterHand, storeLetterHand, getSelectedLetters1, storeSelectedLetters1, getSelectedLetters2, storeSelectedLetters2} from "../utils/asynchStorageUtils"

export function Word({
  wordLength1,
  setWordLength1,
  wordLength2,
  setWordLength2,
  inputString1,
  setInputString1,
  inputString2,
  setInputString2,
  selectedLetters1,
  setSelectedLetters1,
  selectedLetters2,
  setSelectedLetters2,
  wordForAPI,
  setWordForAPI,
  word1Success,
  setWord1Success,
  word2Success,
  setWord2Success,
  wordNum,
  setWordNum,
  tilePlaced,
  setTilePlaced, 
  wordSubmitted, setWordSubmitted, 
  turnStart

  
}) {
  const [validationError, setValidationError] = useState(false);
  const [lengthError, setLengthError] = useState(false);



  function handleRedoPress() {
    console.log("handle REDO RUNNING")
    const resetLetters = async ()=>{
      const storedSelectedLetters1 = await getSelectedLetters1();
      const storedSelectedLetters2= await getSelectedLetters2();
      setValidationError(false)
      setLengthError(false)
    if (wordNum === 1) {
      setInputString1([]);
      storeSelectedLetters1([])
   
      console.log("inputString1", inputString1)
      setSelectedLetters1([]);
      console.log("SET STORED SELECTED LETTERS TO []!!!!!!!!")
      console.log(" AFTER RESET - storedSelectedLetters1, selectedLetters1", storedSelectedLetters1, selectedLetters1)
    } else {
      console.log("redo letters for word 2 running")
      setInputString2([]);
      storeSelectedLetters2([])
      console.log("inputString2", inputString2)
      setSelectedLetters2([]);
      console.log("selectedLetters2", selectedLetters2)
      console.log(" AFTER RESET - storedSelectedLetters2, selectedLetters2", storedSelectedLetters2(), selectedLetters2)
    }
    setLengthError(false);
    setValidationError(false);
  }
  resetLetters();
  }
  function handleSubmitPress(inputString1, inputString2) {
    //shows if first word or second word submitted
    let wordNumber = wordNum;
    let wordLength = wordNum === 1 ? wordLength1 : wordLength2;
    let inputString = wordNum === 1 ? inputString1 : inputString2;

    setValidationError(false)
    setLengthError(false)


    // }
    let letterArray =
      wordNum === 1
        ? inputString1.map((letter) => letter.toLowerCase()).join("")
        : inputString2.map((letter) => letter.toLowerCase()).join("");

    if (inputString.length < wordLength) {
      console.log("wordLengthError", inputString.length);
      setLengthError(true);
    } else {
      // Pass the updated value directly to the API function
      // resetSelectedLetters();
      submitWordToAPI(
        letterArray,
        wordLength,
        wordNumber,
        setWord1Success,
        setWord2Success,
        setTilePlaced,
        setValidationError
      );
    }
  

  }

  return (
    <>
      <View>
        {word1Success === false 
        ? (
          <Text style={s.instructionText}>
            {`Make a word with ${wordLength1} letters`}
          </Text>
        ) : 
        <Text style={s.instructionText}>
        The first word is complete {"\u2713"}
        {"\n"}
        <Text style={[s.instructionText, s.bold]}>{inputString1}</Text>
        {"\n"}
        {`Now make a second word with ${wordLength2} letters`}
      </Text>}
        
        
        {
        lengthError === true ? (
          <Text style={[s.instructionText, s.errorMessageText]}>
             {"\n"}
            Not the right number of letters. 
          </Text>
        ) : validationError === true ? (
          <Text style={[s.instructionText, s.errorMessageText]}>
             {"\n"}
            This is not a valid word - Try again. 
          
          </Text>
        ) : null}
          

        <Input
          inputString1={inputString1}
          setInputString1={setInputString1}
          inputString2={inputString2}
          setInputString2={setInputString2}
          wordNum={wordNum}
          setWordNum={setWordNum}
          wordLength1={wordLength1}
          wordLength2={wordLength2}
          turnStart={turnStart}
          word1Success={word1Success}
          setSelectedLetters1={setSelectedLetters1}
          setSelectedLetters2={setSelectedLetters2}
        />
        <View style={s.wordButtonContainer}>
          <TouchableOpacity
            style={[s.wordButton, s.buttonBorders]}
            onPress={() => {
              handleRedoPress();
            }}
          >
            <Text style={s.wordButtonText}>Redo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.wordButton, s.buttonBorders]}
            onPress={() => handleSubmitPress(inputString1, inputString2)}
          >
            <Text style={s.wordButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
