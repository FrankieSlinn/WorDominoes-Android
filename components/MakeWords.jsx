import { View, Text, Image } from "react-native";
import {useState, useEffect} from "react";
import {dominoes} from "../utils/dominoes";
import {FirstWord} from "./FirstWord";
import { s } from "../App.style";


export function MakeWords({displayDomino, setDisplayDomino, selectedDominoObject, setSelectedDominoObject,  showChooseDominoText, setShowChooseDominoText

}) {
  const [wordLength1, setWordLength1] = useState("");
  const [wordLength2, setWordLength2] = useState("");



  console.log("selectedDomino in MakeWords",  selectedDominoObject);

  useEffect(() => {
    if (selectedDominoObject) {
      const values = Object.values(selectedDominoObject).toString();
      setWordLength1(values[0]); // Set first character of the value
      setWordLength2(values[1]); // Set first character of the value
    }
  }, [selectedDominoObject]); 
    // console.log("firstWord", firstWord);
  return (
    <>
    <FirstWord
    
    wordLength1 = {wordLength1}
    setWordLength1= {setWordLength1}
 
    
    />

    </>
  );
}