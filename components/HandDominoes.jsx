import { View, Image, TouchableOpacity} from "react-native";
import {useState, useEffect} from "react";

import { allocateDominoes } from "../utils/allocateDominoes.js";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";
import { s } from "../App.style.js";


export function HandDominoes({ turnStart, setTurnStart, displayDomino, setDisplayDomino, wordSubmitted, setWordSubmitted,
  showMakeWord, setShowMakeWord, selectedDominoObject, setSelectedDominoObject, 
 setDominoRotated, word1Success, setWord1Success,
  word2Success, setWord2Success, dominoesInHand, setDominoesInHand
}) {

  useEffect(() => {
    // Allocate dominoes when the component mounts
    allocateDominoes(dominoesInHand, setDominoesInHand);
  }, []);

  // console.log("dominoHand", getDominoHand())
  console.log("turnStart in HandDominoes", turnStart);
  console.log("wordSubmitted", wordSubmitted);


  function handleClick(selectedDomino, domino){
    if(wordSubmitted ===false && turnStart===true){
    setDisplayDomino(selectedDomino)

    console.log("selectedDominoObject in HandDominoes", selectedDominoObject)

    setSelectedDominoObject(domino)
    setWordSubmitted(true)
    setShowMakeWord(true) //Make word section can be displayed
    // setTurnStart(false)
    setDominoRotated(false)
    setWord1Success(false);
    setWord2Success(false);

  }

  
    
    }


  

  return (
    <>
        <View style={[s.handDominoContainer]}>
         {dominoesInHand.map((domino, index) => (
     
       
          domino!=selectedDominoObject?
           
          
          <View key={index} style={s.handDomino}>
          <TouchableOpacity onPress={()=>{handleClick(Object.keys(domino)[0], domino)}}>
   
          <Image
        source={dominoImageMappings[Object.keys(domino)[0]]} // Use the mapping object
        style={{ width: 30, height: 60 }}
      />
      </TouchableOpacity>
        </View>

      :null

         
      
       
      ))}
        </View>
          
       
    </>
  );
}
