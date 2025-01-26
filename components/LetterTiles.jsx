import { View, Text, TouchableOpacity} from "react-native";
import {letters} from "../utils/letters";
import { s } from "../App.style";


export function LetterTiles() {
    const letterHand = [];
    const letterHandLength = 15;

    function randomNumLetters() {
        return Math.abs(Math.floor(Math.random() * letters.length) - 1);
      }
      for (let i = 0; i < letterHandLength; i++) {
        pushLettersIntoHand();
      }

      function pushLettersIntoHand() {
        let randLetter = randomNumLetters();
        letterHand.push(letters[randLetter]);
        letters.splice(randLetter, 1);
        letterHand.sort();
      }

      console.log("letterHandin beginning", letterHand);
console.log("letters after splice", letters);

function handlePress(){
    
}

      
  return (
 
    <View style={s.lettersContainer}>
{letterHand.map((letter, index) => (
    <TouchableOpacity key={index}>
  <Text style={s.letter} key={index}>{letter}</Text>
  </TouchableOpacity>
))}
</View>

 
  );
}