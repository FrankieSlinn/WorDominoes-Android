import { View, Text, TouchableOpacity, Alert} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
import {handleFinishGame} from "../utils/finishGame"


export function FinishGame({gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, 
    setSingleGameScore
}) {
   
    function handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
        setWorDominationCount, singleGameScore, setSingleGameScore
    ){console.log("handleClick for Finishgame running")
        
        setGameFinished(true);
    
    handleFinishGame( gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore)
        
        console.log("game finished in finish game", gameFinished);
    }

//    function showAlert() {
//         console.log("alert should show")
//         Alert.alert(
    
//           "Are you sure you want to give up?", 
//           [
//             {
//               text: "Cancel",
//               style: "cancel",
//             },
//             {
//               text: "OK",
//               onPress: () => console.log("User gave up"),
//             },
//           ],
//           { cancelable: true }
//         );
//       };

      const showAlert = () =>
        console.log("alert should show")
      if(gameFinished===true){
        Alert.alert('FinishGame', 'Are You Sure You Want To Finish This Game?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => {handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
            setWorDominationCount, singleGameScore, setSingleGameScore
            )}},
        ]
    
      )
  };


  return (
    <>
    <View style={s.finishGameContainer}>
        {!gameFinished?
<TouchableOpacity style={s.finishGameButton} onPress={()=>[setGameFinished(true), showAlert()]
}>
 
   <Text  style={s.finishGameText}>Finish Game</Text>
    </TouchableOpacity>
    :null}
    </View>

    </>
  )
  
}