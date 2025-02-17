
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
    numberDominoesInGrid, setNumberDominoesInGrid, tileFullError, setTileFullError,gameStart, setGameStart
}){
    const tileId=0;
    //Ensures tileRotated cannot be changed after domino placed
    const[tile0Placed, setTile0Placed]=useState(false)
    //Added as dominoRotated applies to new domino. Need to keep rotation separate for each domino. 
    const[tile0Rotated, setTile0Rotated]=useState(false)

    useEffect(()=>{
        console.log("dominoRotated in Tile0 useEffect", dominoRotated)
        if(tile0Placed===false){
            setTile0Rotated(dominoRotated)
        }
    }, [dominoRotated])




return <>



<View>


<TouchableOpacity  

style={[s.horizontalDomino, s.domino]} 
onPress={()=>{handleTilePress(word2Success, tilePlaced, setTilePlaced, setTurnStart, setSelectedDominoObject, setWord1Success, setWord2Success, 
    displayDomino, setDisplayDomino, setShowMakeWord, setWordSubmitted,  topHorizontalTilesInGrid, setTopHorizontalTilesInGrid, tileId, tileFullError,
    setTileFullError, setGameStart
);
if(tile0Placed===false){

// console.log("tileRotated in tile0", tile0Rotated)
setTile0Placed(true);

}
}

}>
    {
   !tile0Rotated?(
    <Image
    source={dominoImageMappings[topHorizontalTilesInGrid[tileId]]} 
    style={[s.selectedTile, s.selectedTileUnrotated]}
   resizeMode="cover" 
    />
):(
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