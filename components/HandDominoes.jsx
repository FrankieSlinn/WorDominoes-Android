import { View, Image, TouchableOpacity} from "react-native";

import { allocateDominoes, getDominoHand } from "../utils/allocateDominoes.js";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";
import { s } from "../App.style.js";

const displayDominoComponents = [
    require("./HandDomino1.jsx").HandDomino1,
    require("./HandDomino2.jsx").HandDomino2,
    require("./HandDomino3.jsx").HandDomino3,
    require("./HandDomino4.jsx").HandDomino4,
  ];

export function HandDominoes({gameStart, setGameStart, displayDomino, setDisplayDomino, wordSubmitted, setWordSubmitted,
  showMakeWord, setShowMakeWord, selectedDominoObject, setSelectedDominoObject, dominoesInGrid, setDominoesInGrid,
  numberDominoesInGrid, setNumberDominoesInGrid
}) {
  if(getDominoHand().length<4){
  allocateDominoes();}
  // console.log("dominoHand", getDominoHand())
  const dominoesInHand = getDominoHand();

  function handleClick(selectedDomino, domino){
    if(wordSubmitted ===false){
    setDisplayDomino(selectedDomino)
    setDominoesInGrid((prev) => [...prev, selectedDomino]);
    console.log("dominoesInGrid", dominoesInGrid)
    setNumberDominoesInGrid((prev) => prev + 1);}
    setSelectedDominoObject(domino)
    setWordSubmitted(true)
    setShowMakeWord(true) //Make word section can be displayed
  
    
    }


  

  return (
    <>
         <View style={[s.handDominoContainer]}>
         {dominoesInHand.map((domino, index) => (
        <View key={index} style={s.handDomino}>
          {/* {console.log("show  ind dominoh", dominoImageMappings[Object.keys(domino)[0]])} */}

          <TouchableOpacity onPress={()=>{handleClick(Object.keys(domino)[0], domino)}}>
          {/* {console.log("show selected domino", displayDomino)} */}
          <Image
        source={dominoImageMappings[Object.keys(domino)[0]]} // Use the mapping object
        style={{ width: 30, height: 60 }}
      />
      </TouchableOpacity>
        </View>
      ))}
          
        </View>
    </>
  );
}
