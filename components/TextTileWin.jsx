import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
import {storeGamesArray, getGamesArray} from "../utils/asynchStorageUtils.js"


export function TextTileWin({word2Success, tilePlaced}) {




  return (
    <>
 
 
 <View>
            {word2Success === true && tilePlaced===false?(
              <Text style={s.instructionText}>
        
                Congratulations, you won a tile!{"\n"}
                {"\n"}
                Click on a space in the domino grid on the top to place your
                tile. Remember: dominoes can only be placed next to each other
                if they have the same number of dots on their connecting sides.
                {"\n"}
                {"\n"}
                To rotate, click on the domino above.
              </Text>
            ) : null}
          </View>
     
 
   
    </>
  );
}