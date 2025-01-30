import { View, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {letters} from "../utils/letters";
import { s } from "../App.style";


export function LetterTiles({inputString1, setInputString1, wordLength1, turnStart, setTurnStart, selectedLetters, setSelectedLetters}) {
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

    //   useEffect(() => {
    //     selectedLetters.forEach(()=>)
    //   }, [selectedLetters])

      function handlePress(letter, index) {
        if (inputString1.length < wordLength1) {
          setInputString1((prevInputString1) => [...prevInputString1, letter]);
    
          // Remove the selected letter from `letterHand`
        //   setLetterHand((prevHand) =>
        //     prevHand.filter((handLetter, index) => index !== prevHand.indexOf(letter))
        //   );

        selectedLetters.push(index);
        console.log("selectedletters in LetterTiles", selectedLetters)
    
          console.log("Input string 1", [...inputString1, letter]);
          console.log("Updated letterHand after selection:", letterHand);
        } else {
          console.log("Max word length reached, here is the full string:", inputString1);
        }
      }

      
  return (
 
    <View style={s.lettersContainer}>
{letterHand.map((letter, index) => (
    <TouchableOpacity key={index} onPress={() => handlePress(letter, index)}>
  <Text style={[s.letter, selectedLetters.includes(index) ? s.selectedLetter : null]}>{letter}</Text>
  </TouchableOpacity>
))}
</View>

 
  );
}