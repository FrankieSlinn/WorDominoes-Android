import { View, Image, Pressable } from "react-native";
import {useEffect} from "react";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";
import { s } from "../App.style";


export function DisplayDomino({displayDomino, wordSubmitted, setWordSubmitted, selectedDominoObject, setSelectedDominoObject,
  showChooseDominoText, setShowChooseDominoText, dominoRotated, setDominoRotated, word2Success, setWord2Success, tilePlaced, dominoSelected
}) {

  useEffect(()=>{
    console.log("dominoSelected", dominoSelected)


  },[dominoSelected])





   function handlePress(){
    if(word2Success===true && tilePlaced===false){
      console.log("display domino", displayDomino)
    setDominoRotated(!dominoRotated)
    console.log("Domino rotated? in display domino", dominoRotated)
    }
   }

  return (
    <>
     
<Pressable onPress={()=>{handlePress()}}>
<View style={s.displayDominoContainer}>
  {dominoSelected===true?dominoRotated===false?

      <Image
        source={dominoImageMappings[displayDomino]} 
        style={[s.displayDomino, s.displayDominoUnrotated]}
      />
  

      :
 
      <Image
      source={dominoImageMappings[displayDomino]} 
      style={[s.displayDomino, s.displayDominoRotated]}
    />:null

  }
  </View>

      </Pressable>

    </>
  );
}