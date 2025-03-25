import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
import {storeGamesArray, getGamesArray} from "../utils/asynchStorageUtils.js"


export function TextBelow({word1Success, dominoSelected, setDominoSelected, gameFinished}) {
  console.log("dominoSelected in ChooseDominoText", dominoSelected);
  console.log("word1Success in choose dominoText", word1Success);
  const [scoreForGame, setScoreForGame]=useState(0)

  useEffect(() => {
    console.log("useEffect in Text Below running2");
  
  const fetchData = async () => {
    try {
    
      const storedGames = await getGamesArray(); // Call the correct function
      console.log("!!!!storedGames in TextBelow", storedGames);
   setScoreForGame(storedGames[storedGames.length-1])
   console.log("!!scoreForGame", scoreForGame)



    } catch (error) {
      console.error("Error fetching game data:", error);
    }
  };

  fetchData();
}, []);



  return (
    <>
 
 

          <View style={s.instructionTextBelow}>
            { gameFinished===true?
             <Text style={s.instructionText}>You Have Scored {scoreForGame} Points</Text>
            : dominoSelected===false? 
            
            <Text style={s.instructionText}>
             

              Choose a domino above. You'll create 2 words for this tile: the
              word length is the number of dots on its side of the domino.
            </Text>
            :null}
          </View>
     
 
   
    </>
  );
}