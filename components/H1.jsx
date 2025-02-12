
import {View, Image, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {s} from "../App.style";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";


export function H1({word2Success, dominoRotated, tilePlaced, setTilePlaced, displayDomino}){
    // const [isRotated, setIsRotated] = useState(dominoRotated);

    // useEffect(() => {
    //     console.log("domino rotated in tile", dominoRotated);
    //     setIsRotated(dominoRotated);  // Ensure state updates when prop changes
    // }, [dominoRotated]);
   
    
    function handlePress(){
        console.log("H1 pressed")
        if(word2Success===true && tilePlaced===false){
            setTilePlaced(true);

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
    source={dominoImageMappings[displayDomino]} 
    style={[s.selectedTile, s.selectedTileUnrotated]}
   resizeMode="cover" 
    />):(
    <Image
    source={dominoImageMappings[displayDomino]} 
    style={[s.selectedTile, s.selectedTileRotated, s.v1]}
    resizeMode="cover" 
    />):
    null
    }


</TouchableOpacity>


</View>


</>

}