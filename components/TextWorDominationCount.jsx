import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import {ContinuePlaying} from "../components/ContinuePlaying.jsx";
import { s } from "../App.style";



export function TextWorDominationCount({gameStart, setGameStart, dominoesInHand, setDominoesInHand, gameFinished, setGameFinished, gamesArray, setGamesArray, worDominationCount, 
  word1Success, setWord1Success, word2Success, setWord2Success, displayDomino, setDisplayDomino, dominoRotated, setDominoRotated, setWorDominationCount, singleGameScore, 
    setSingleGameScore, snumberDominoesInGrid, setNumberDominoesInGrid, dominoIdsInGrid, setDominoIdsInGrid, 
    selectedDominoObject, setSelectedDominoObject, gridSelectedDominoObjects, setGridSelectedDominoObjects, tilePlaced, setTilePlaced, turnStart, setTurnStart,
    scoreArraySingleGame, setScoreArraySingleGame, showMakeWord, setShowMakeWord, dominoSelected, setDominoSelected, howFinishGame, setShowFinishGame, 
    worDomination, setWorDomination
}) {





  return (
    <>
 
 

            {worDomination?
             <View style={[s.instructionContainer, s.WorDominationCount]}>
            <Text style={s.instructionText}>WorDomination Count: <Text>{worDominationCount}</Text></Text>
            <ContinuePlaying
          worDomination={worDomination}
          setWorDomination={setWorDomination}
          worDominationCount={worDominationCount}
          setWorDominationCount={setWorDominationCount}
          gameStart={gameStart}
          setGameStart={setGameStart}
          dominoesInHand={dominoesInHand}
          setDominoesInHand={setDominoesInHand}
          gameFinished={gameFinished}
          setGameFinished={setGameFinished}
          gamesArray={gamesArray}
          setGamesArray={setGamesArray}
           singleGameScore={singleGameScore} 
          setSingleGameScore={setSingleGameScore}
          showFinishGame={showFinishGame}
          setShowFinishGame={setShowFinishGame}
          word1Success={word1Success}
          setWord1Success={setWord1Success}
          word2Success={word2Success}
          setWord2Sucess={setWord2Success}
          displayDomino={displayDomino}
          setDisplayDomino={setDisplayDomino}
          dominoRotated={dominoRotated}
          setDominoRotated={setDominoRotated}
          selectedDominoObject={selectedDominoObject}
          setSelctedDominoObject={setSelectedDominoObject}
      
          gridSelectedDominoObjects={gridSelectedDominoObjects}
          setGridSelectedDominoObjects={setGridSelectedDominoObjects}
          tilePlaced={tilePlaced}
          setTilePlaced={setTilePlaced}
          turnStart={turnStart}
          setTurnStart={setTurnStart}
          scoreArraySingleGame={scoreArraySingleGame}
          setScoreArraySingleGAme={setScoreArraySingleGame}
          showMakeWord={showMakeWord}
          setShowMakeWord={setShowMakeWord}
          dominoSelected={dominoSelected}
          setDominoSelected={setDominoSelected}
        



          
          
          />
      
          </View>
              : null}
     
 
   
    </>
  );
}