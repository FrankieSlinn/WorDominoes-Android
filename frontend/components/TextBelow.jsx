import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
import {storeGamesArray, getGamesArray} from "../utils/asynchStorageUtils.js"


export function TextBelow({word1Success, dominoSelected, setDominoSelected, gameFinished, worDomination, gamesArray, gameStart}) {
  console.log("dominoSelected in ChooseDominoText", dominoSelected);
  console.log("word1Success in choose dominoText", word1Success);
  const [scoreForGame, setScoreForGame]=useState(0)





  return (
    <>
 
 {!worDomination?

          <View style={[s.chooseDominoContainer]}>
            { gameFinished===true?
            <View style={s.scoreMessageContainer}>
             <Text style={[s.instructionText, s.bold]}>You Have Scored {gamesArray[gamesArray.length-1]||0} Points</Text>
             </View>
            : dominoSelected===false||gameStart===true? 
            
            <Text style={s.instructionText}>
             

              Choose a domino above. You'll create 2 words for this tile: the
              word length is the number of dots on its side of the domino. If you can't place any more tiles click "Finish Game" to see your score.
            </Text>
            :null}
          </View>
          :null}
     
 
   
    </>
  );
}