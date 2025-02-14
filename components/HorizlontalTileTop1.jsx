
import {View, Image, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {s} from "../App.style.js";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";


export function HorizontalTileTop1({dominoRotated, tilePlaced, setTilePlaced, displayDomino, turnStart, setTurnStart, 
    wordSubmitted, setWordSubmitted, selectedDominoObject, setSelectedDominoObject, word1Success, setWord1Success, 
    word2Success, setWord2Success, setDisplayDomino, showMakeWord, setShowMakeWord,  dominoesInGrid, setDominoesInGrid, 
    numberDominoesInGrid, setNumberDominoesInGrid
}){
    // let dominoesInGrid=[];

    // useEffect(()=>{
       
       

    //     console.log("dominoesInGrid in useEffect in tile", dominoesInGrid, "numberDominoesOnGrid", numberDominoesInGrid);
        
  
    // }, [dominoesInGrid])

   
    
    function handlePress(){
        console.log("tile pressed!!!")
        console.log("dominoesInGrid in useEffect in tile in handlePress in H1", dominoesInGrid, "numberDominoesOnGrid", numberDominoesInGrid);
        console.log("word2Success", word2Success, "tilePlaced", tilePlaced)
    
 
        if(word2Success===true && tilePlaced===false){
            
            setTilePlaced(true);
            setTurnStart(true);
            setWordSubmitted(false);
            setSelectedDominoObject(null);
            setWord1Success(false);
            setWord2Success(false);
            setDisplayDomino("");
            setShowMakeWord(false);
            


        }
    }


return <>


<View>


<TouchableOpacity  

style={[s.horizontalDomino, s.domino]} 
onPress={()=>handlePress()}>
    {tilePlaced?
   dominoRotated===false?(
    <Image
    source={dominoImageMappings[dominoesInGrid[numberDominoesInGrid-1]]} 
    style={[s.selectedTile, s.selectedTileUnrotated]}
   resizeMode="cover" 
    />):(
    <Image
    source={dominoImageMappings[dominoesInGrid[numberDominoesInGrid-1]]} 
    style={[s.selectedTile, s.selectedTileRotated]}
    resizeMode="cover" 
    />):
    null
    }


</TouchableOpacity>


</View>


</>

}