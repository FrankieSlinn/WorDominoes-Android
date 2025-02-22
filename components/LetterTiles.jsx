import { View, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {letters} from "../utils/letters";
import { s } from "../App.style";


export function LetterTiles({inputString1, setInputString1, inputString2, setInputString2,  wordLength1, wordLength2, turnStart, setTurnStart, 
  selectedLetters1, setSelectedLetters1, selectedLetters2, setSelectedLetters2,
  wordNum, setWordNum
}) {
    const [letterHand, setLetterHand] = useState([]);
    const letterHandLength = 15;
    

    useEffect(() => {
        if (turnStart) {
          const newLetterHand = [];
          const availableLetters = [...letters]; // Clone the original letters array
          const letterHandLength = 15;
    
          for (let i = 0; i < letterHandLength; i++) {
            const randomIndex = Math.floor(Math.random() * availableLetters.length);
            newLetterHand.push(availableLetters[randomIndex]);
            availableLetters.splice(randomIndex, 1);
          }
    
          setLetterHand(newLetterHand.sort()); // Sort alphabetically
          setTurnStart(false); // Mark turn as started
        }
      }, [turnStart, setTurnStart]);


      function handlePress(letter, index) {
   
     
    
           let inputString =wordNum===1?inputString = inputString1:inputString = inputString2;
           let wordLength = wordNum===1?wordLength = wordLength1: wordLength = wordLength2;
          //  console.log("inputstring in lettertiles", inputString)
          //  console.log("wordLength in Lettertiles", wordLength)
    
        if (inputString.length < wordLength && !selectedLetters1.includes(index) &&  !selectedLetters2.includes(index)) {
          if(wordNum===1){
          setInputString1((prevInputString1) => [...prevInputString1, letter]);}
          
          else if (wordNum===2){
            setInputString2((prevInputString2) => [...prevInputString2, letter]);}
            console.log("inputString2", inputString2)
          
        } else {
          console.log("Max word length reached, here is the full string:", inputString1);
        }
        
if(wordNum===1){
        selectedLetters1.push(index);}
        else{selectedLetters2.push(index)

        }
        // console.log("selectedletters2 in LetterTiles", selectedLetters2)
    
        //   console.log("Input string 1", [...inputString1, letter]);
        //   console.log("Updated letterHand after selection:", letterHand);
      }
 
      

      
  return (
 
    <View style={s.lettersContainer}>
{letterHand.map((letter, index) => (
    <TouchableOpacity key={index} onPress={() => handlePress(letter, index)}>
  <Text style={[s.letter, selectedLetters1.includes(index)||selectedLetters2.includes(index) ? s.selectedLetter : null]}>{letter}</Text>
  </TouchableOpacity>
))}
</View>

 
  );
}