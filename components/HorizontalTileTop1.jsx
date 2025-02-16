
import {View, Image, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {s} from "../App.style.js";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";
// import {Tile} from "./Tile";
import {handleTilePress} from "../utils/handleTilePress.js";


export function HorizontalTileTop1({dominoRotated, tilePlaced, setTilePlaced, displayDomino, turnStart, setTurnStart, 
    wordSubmitted, setWordSubmitted, selectedDominoObject, setSelectedDominoObject, word1Success, setWord1Success, 
    word2Success, setWord2Success, setDisplayDomino, showMakeWord, setShowMakeWord,  dominoesInGrid, setDominoesInGrid, 
    topHorizontalTilesInGrid, setTopHorizontalTilesInGrid,
    numberDominoesInGrid, setNumberDominoesInGrid, tileFullError, setTileFullError,
}){
    const tileId=0;


    

    // function handleTilePress(){
    //     console.log("tile pressed!!!")
    //     console.log("dominoesInGrid in useEffect in tile in handlePress in H1", dominoesInGrid, "numberDominoesOnGrid", numberDominoesInGrid);
    //     console.log("word2Success", word2Success, "tilePlaced", tilePlaced)
    
 
    //     if(word2Success===true && tilePlaced===false){
            
    //         setTilePlaced(true);
    //         setTurnStart(true);
    //         setWordSubmitted(false);
    //         setSelectedDominoObject(null);
    //         setWord1Success(false);
    //         setWord2Success(false);
    //         setDisplayDomino("");
    //         setShowMakeWord(false);
            


    //     }
    // }




return <>



<View>


<TouchableOpacity  

style={[s.horizontalDomino, s.domino]} 
onPress={()=>handleTilePress(word2Success, tilePlaced, setTilePlaced, setTurnStart, setSelectedDominoObject, setWord1Success, setWord2Success, 
    displayDomino, setDisplayDomino, setShowMakeWord, setWordSubmitted,  topHorizontalTilesInGrid, setTopHorizontalTilesInGrid, tileId, tileFullError,
    setTileFullError
)}>
    {
   dominoRotated===false?(
    <Image
    source={dominoImageMappings[topHorizontalTilesInGrid[tileId]]} 
    style={[s.selectedTile, s.selectedTileUnrotated]}
   resizeMode="cover" 
    />):(
    <Image
    source={dominoImageMappings[topHorizontalTilesInGrid[tileId]]} 
    style={[s.selectedTile, s.selectedTileRotated]}
    resizeMode="cover" 
    />)
    }


</TouchableOpacity>


</View>


</>

}