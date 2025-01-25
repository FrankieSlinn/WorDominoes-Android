import { View, Text, Image } from "react-native";
import {dominoes} from "../utils/dominoes";
import { s } from "../App.style";


export function MakeWords({displayDomino, setDisplayDomino, selectedDominoObject, setSelectedDominoObject}) {



  console.log("selectedDomino in MakeWords",  selectedDominoObject);
  // const getValueFromKey = (obj, targetKey) => {
  //   if (obj.hasOwnProperty(targetKey)) {
  //     return obj[targetKey];
  //   }
  //   return null; // Return null if the key is not found
  // };
  const wordLengths = Object.values(selectedDominoObject)[0]
  console.log("selecteDominoObject", selectedDominoObject); 
  console.log("value", toString(wordLengths).toString()); 
    // console.log("dominoKeyFirstWord", dominoKeyFirstWord);
    const firstWord =Object.values(selectedDominoObject).toString();
    console.log("firstWord", firstWord);
  return (
    <>
      <View >
        <Text>
            {`Make a word with ${firstWord[0]} letters.`}

        </Text>



      </View>
    </>
  );
}