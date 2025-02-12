
import {Text, View, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import {s} from "../App.style";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";


export function H1({word2Success, dominoRotated, tilePlaced, setTilePlaced, displayDomino}){
   
    
    function handlePress(){
        console.log("H1 pressed")
        if(word2Success===true){
            setTilePlaced(true);

        }
    }


return <>


<View>


<TouchableOpacity  

style={[s.horizontalDomino, s.domino]} 
onPress={()=>handlePress()}>
    {tilePlaced?
    dominoRotated==false?
    <Image
    source={dominoImageMappings[displayDomino]} 
    style={[s.selectedTile, s.selectedTileUnrotated]}
   resizeMode="cover" 
    />:
    <Image
    source={dominoImageMappings[displayDomino]} 
    style={[s.selectedTile, s.selectedTileRotated, s.v1]}
    resizeMode="cover" 
    />:
    null
    }


</TouchableOpacity>


</View>


</>

}