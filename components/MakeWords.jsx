import { View, Text, Image, TouchableOpacity} from "react-native";
import {useState, useEffect} from "react";
import {word1Successful, word2Successful} from "../utils/apiCalls";
import {letters} from "../utils/letters";
import {FirstWord} from "./FirstWord";
import {LetterTiles} from "./LetterTiles";
import { s } from "../App.style";


export function MakeWords({displayDomino, setDisplayDomino, selectedDominoObject, setSelectedDominoObject,  showChooseDominoText, setShowChooseDominoText,
  turnStart, setTurnStart, word1Success, setWord1Success, word2Success, setWord2Success

}) {
  const [wordLength1, setWordLength1] = useState("");
  const [wordLength2, setWordLength2] = useState("");
  const [inputString1, setInputString1] = useState([]);
  const [inputString2, setInputString2] = useState([]);
  const [selectedLetters1, setSelectedLetters1]=useState([]);
  const [selectedLetters2, setSelectedLetters2]=useState([]);
  const [wordForAPI, setWordForAPI]=useState("");
  //shows if word 1 or word2
  const[wordNum, setWordNum]=useState(1);


  console.log("selectedDomino in MakeWords",  selectedDominoObject);

  useEffect (() => {
    console.log("word1Successful useEffect running. word1Successfulstats =", word1Success)
    if(word1Success){
   setWordNum(2)}

  },[word1Success])

  useEffect(() => {
  
    if (selectedDominoObject ) {
      const values = Object.values(selectedDominoObject).toString();
      if(word1Success===false){
     
      setWordLength1(values[0]); // Set first character of the value}
      }
      else{
      setWordLength2(values[1]); // Set first character of the value}
      console.log("wordLength2 in MakeWords", wordLength2)
      
    }
  }
}, [selectedDominoObject, word1Success]); 
    // console.log("firstWord", firstWord);
  return (
    <>
    
 
    <FirstWord
    
    wordLength1 = {wordLength1}
    setWordLength1= {setWordLength1}
    wordLength2 = {wordLength2}
    setWordLength2= {setWordLength2}
    inputString1={inputString1}
    setInputString1={setInputString1}
    inputString2={inputString2}
    setInputString2={setInputString2}
    turnStart={turnStart}
    setTurnStart={setTurnStart}
    selectedLetters1={selectedLetters1}
    setSelectedLetters1={setSelectedLetters1} 
    selectedLetters2={selectedLetters2}
    setSelectedLetters2={setSelectedLetters2} 
    wordForAPI={wordForAPI}
    setWordForAPI={setWordForAPI}
    word1Success={word1Success}
    setWord1Success={setWord1Success}
    word2Success={word2Success}
    setWord2Success={setWord2Success}
    wordNum={wordNum}
    setWordNum={setWordNum}
 
    />
    <LetterTiles
        inputString1={inputString1}
        setInputString1={setInputString1}
        inputString2={inputString2}
        setInputString2={setInputString2}
        wordLength1={wordLength1}
        wordLength2 = {wordLength2}
        setWordLength1={setWordLength1}
        turnStart={turnStart}
        setTurnStart={setTurnStart}
        selectedLetters1={selectedLetters1}
        setSelectedLetters1={setSelectedLetters1} 
        selectedLetters2={selectedLetters2}
        setSelectedLetters2={setSelectedLetters2} 
        wordForAPI={wordForAPI}
        setWordForAPI={setWordForAPI}
        wordNum={wordNum}
        setWordNum={setWordNum}
     
    
    />
 
    
  
   

    </>
  );
}