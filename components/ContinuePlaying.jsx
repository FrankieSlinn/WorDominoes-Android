import { View, Text, TouchableOpacity, Alert} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
// import {handleFinishGame} from "../utils/finishGame"


export function ContinuePlaying({gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, 
    setSingleGameScore, showFinishGame, setShowFinishGame, worDomination, setWorDomination
}) {
   
   
    // function handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
    //     setWorDominationCount, singleGameScore, setSingleGameScore
    // ){console.log("handleClick for Finishgame running")
    //     setShowFinishGame(false);
        
    //     setGameFinished(true);
    
    // handleFinishGame( gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, setWorDominationCount, singleGameScore, setSingleGameScore)
        
    //     console.log("game finished in finish game", gameFinished);
    // }

//      function showAlert(){
//         console.log("alert should show")
//     //   console.log("showFinishGame", showFinishGame, "game finished", gameFinished);
//     //   if(gameFinished===true){
//         Alert.alert('Finish Game', 'Are You Sure You Want To Finish This Game?', [
//           {
//             text: 'Cancel',
//             onPress: () => {console.log('Cancel Pressed');
//                 // setGameFinished(false);
//             }
//                 ,
//             style: 'cancel',
//           },
//           {text: 'OK', onPress: () => {handleClick(gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
//             setWorDominationCount, singleGameScore, setSingleGameScore
//             )}},
//         ]
    
//       )
//   };


  return (
    <>
    {worDomination?
    <View style={s.startFinishGameContainer}>
    
<TouchableOpacity style={[s.startFinishGameButton, s.continuePlayingButton]} onPress={()=>[console.log("continuePlaying Pressed")]
}>
 
   <Text  style={s.startFinishGameText}>Continue Playing</Text>
    </TouchableOpacity>
    </View>
    :null}


    </>
  )
  
}