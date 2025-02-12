import { View, Image, Pressable } from "react-native";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";
import { s } from "../App.style";


export function DisplayDomino({displayDomino, wordSubmitted, setWordSubmitted, selectedDominoObject, setSelectedDominoObject,
  showChooseDominoText, setShowChooseDominoText, dominoRotated, setDominoRotated, word2Success, setWord2Success, tilePlaced
}) {
   function handlePress(){
    if(word2Success===true && tilePlaced===false){
      console.log("Domino rotated before rotation?", dominoRotated)
    setDominoRotated(!dominoRotated)
    console.log("Domino rotated?", dominoRotated)
    }
   }

  return (
    <>
     
<Pressable onPress={()=>{handlePress()}}>
<View style={s.displayDominoContainer}>
  {dominoRotated===false?

      <Image
        source={dominoImageMappings[displayDomino]} 
        style={[s.displayDomino, s.displayDominoUnrotated]}
      />
  

      :
 
      <Image
      source={dominoImageMappings[displayDomino]} 
      style={[s.displayDomino, s.displayDominoRotated]}
    />

  }
  </View>

      </Pressable>

    </>
  );
}