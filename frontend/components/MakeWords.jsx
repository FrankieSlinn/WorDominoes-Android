import { View, Text, Image, TouchableOpacity} from "react-native";
import {useState, useEffect} from "react";
import {loadWord1Success, getWord1Success, storeWord1Success} from "../utils/asynchStorageUtils"
import {Word} from "./Word";
import {LetterTiles} from "./LetterTiles";
import { s } from "../App.style";


export function MakeWords({displayDomino, setDisplayDomino, selectedDominoObject, setSelectedDominoObject,  showChooseDominoText, setShowChooseDominoText,
  gameStart, setGameStart, turnStart, setTurnStart, word1Success, setWord1Success, word2Success, setWord2Success, dominoesInGrid, tilePlaced, setTilePlaced, wordSubmitted, 
  setWordSubmitted, selectedLetters1, setSelectedLetters1, selectedLetters2, setSelectedLetters2

}) {
  const [wordLength1, setWordLength1] = useState("");
  const [wordLength2, setWordLength2] = useState("");
  const [inputString1, setInputString1] = useState([]);
  const [inputString2, setInputString2] = useState([]);

  const [wordForAPI, setWordForAPI]=useState("");
  //shows if word 1 or word2

  const[wordNum, setWordNum]=useState(1);


  console.log("word2Success in MakeWords", word2Success)

  console.log("dominoesInGrid in MakeWords", dominoesInGrid)

  //load and save wordSuccess

  useEffect (() => {

    const loadSaveWord1Success= async()=>{
      const storedWord1Success= await getWord1Success();
      const storedWord2Success = await getWord2Success();
      if(turnStart===true){
        storeWord1Success(false)
        setWord1Success(false)
        storedWord2Success(false)
        setWord2Success(false)
      }
      else{
   
      setWord1Success(storedWord1Success)
      setWord2Success(storedWord2Success)
      console.log("???????word1Success after retrieved from storage", word1Success)

      }

    console.log("word1Successful useEffect running. word1Successfulstats =", word1Success)
}
loadSaveWord1Success()

  },[])

  useEffect (() => {
    if(word1Success){
      console.log("word1Success true, setting wordNum to 2????!!!!!!!")
   setWordNum(2)
  
  }},[word1Success])


  useEffect (() => {
  setGameStart(false)

  },[])

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

  return (
    <>
  
    
 
    <Word
    
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
    tilePlaced={tilePlaced}
    setTilePlaced={setTilePlaced}
    wordSubmitted={wordSubmitted}
    setWordSubmitted={setWordSubmitted}
 
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
        gameStart = {gameStart}
     
    
    />
 
    
  
   

    </>
  );
}