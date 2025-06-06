import { Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { s } from "../App.style.js";
import { Header } from "../components/Header";
import { Grid } from "../components/Grid";
import { HandDominoes } from "../components/HandDominoes.jsx";
import { DisplayDomino } from "../components/DisplayDomino.jsx";
import { MakeWords } from "../components/MakeWords.jsx";
import { TextAbove} from "../components/TextAbove.jsx";
import { TextBelow} from "../components/TextBelow.jsx";
import { TextTileWin} from "../components/TextTileWin.jsx";
import {HelpText} from "../components/HelpText.jsx";
import {StatsContent} from "../components/StatsContent.jsx";
import {FinishGame} from "../components/FinishGame.jsx";

import {TextWorDominationCount} from "../components/TextWorDominationCount.jsx";
import { StartNewGameButton } from "@/components/StartNewGameButton.jsx";
import {getLetterHand, storeLetterHand, getSelectedLetters1, storeSelectedLetters1, getSelectedLetters2, storeSelectedLetters2} from "./../utils/asynchStorageUtils"
import { Stack } from "expo-router";
export default function Index() {
  const [gameStart, setGameStart] = useState(true);
  const [turnStart, setTurnStart] = useState(true);
  const [displayDomino, setDisplayDomino] = useState(); //to populate selected domino to make word from

  const [wordSubmitted, setWordSubmitted] = useState(false); //ensures that domino can only be selected once for each turn
  const [showMakeWord, setShowMakeWord] = useState(false);
  const [showChooseDominoText, setShowChooseDominoText] = useState(true);
  const [selectedDominoObject, setSelectedDominoObject] = useState("");
  //to cater for multile rotations
  const [originalSelectedDominoObject, setOriginalSelectedDominoObject] = useState("");
  const [dominoSelected, setDominoSelected] = useState(false);
  const [word1Success, setWord1Success] = useState(false);
  const [word2Success, setWord2Success] = useState(false);
  const [dominoRotated, setDominoRotated] = useState(false);
  const[tilePlaced,  setTilePlaced] = useState(false);
  const[dominoesInGrid, setDominoesInGrid]=useState([]);
  const[dominoIdsInGrid, setDominoIdsInGrid]=useState(["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]);
  //relates to domino id(key) and number of dots on each side(value)
  const[gridSelectedDominoObjects, setGridSelectedDominoObjects]=useState(["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]);
  const[numberDominoesInGrid, setNumberDominoesInGrid]=useState(0);
  const[tileFullError, setTileFullError]=useState(false);
  const[wrongTileError, setWrongTileError]=useState(false);
  const[dominoesInHand, setDominoesInHand]=useState([]);
  const[showHelpText, setShowHelpText]=useState(false);
  const[showStats, setShowStats]=useState(false);
  const[gamesArray, setGamesArray]=useState([]);
  const[worDomination, setWorDomination]=useState(false);
  const[worDominationCount, setWorDominationCount]=useState(0);
  const[scoreArraySingleGame, setScoreArraySingleGame]=useState([]);
  const[gameFinished, setGameFinished]=useState(false);
  const[singleGameScore, setSingleGameScore]=useState(0);
  const [showFinishGame, setShowFinishGame]=useState(false);
  const [selectedLetters1, setSelectedLetters1]=useState([]);
  const [selectedLetters2, setSelectedLetters2]=useState([]);
//tiles allocated more than once - prob fixed.
  //tile 3 / tile4 didn't fit. Tile 2 and tile 3 more likely
//check tile 9 shows values it's meant to in gridSelectedDominoObjects, may need to press after placed, rotate a few times.NOTE: happens when rotated a few times, e.g. 3 times.
//NOTE: tried to fix but image on grid switches whenever display domino rotated
//Runs out of dominoes after new game.
//No 42 or 52 dominoes?
  //ensure selected DominoObject unotated driven by originalSelectedDominoObject
//sometimes after click on tile that's already placed if something fts needs to click on that empty space twice(at first says tile doesn't fit)
//domino mages not always showing.  
//wrong value placed when reversed
//start new game need to empty array of used tiles
///check logic for accepting tiles 11 12 let different ones next to each other. 
//Make sure after tile placed cannot be allocated
//saw selected letter that wasn't in input


  useEffect(()=>{
    console.log("!!!!dominoSelected in index", dominoSelected);
  },[dominoSelected])






  //Function to clear letters at the start of the game
  useEffect(() => {
    console.log("gameStart in index before clearing letterTile", gameStart)
    const handleSelectedLetterTiles = async () => {
    const storedSelectedLetters1 = await getSelectedLetters1()
    const storedSelectedLetters2 = await getSelectedLetters2()
    

      if(gameStart ===true ){
        console.log("gameStart is true? ", gameStart)
        console.log("function to set letter arrays to empty")
        storeSelectedLetters1([]);

        storeSelectedLetters2([]);
    
        storeLetterHand([]);
        if(selectedLetters1.length!=0||selectedLetters2.length!=0){
          "setting selected letters to empty array as gameStart should be true here???????"
          setSelectedLetters1([])
          setSelectedLetters2([])
        }

      }
      // else{
      //   setSelectedLetters1(storedSelectedLetters1)
      //   setSelectedLetters2(storedSelectedLetters2)
      //   console.log("in index selectedLetters1 reset to have letters", selectedLetters1)

      // }
    };
  
    handleSelectedLetterTiles();
  },[] );
  return (
    <>
    <View style={s.statusBarBackground}>
    <Stack.Screen options={{ headerShown: false }} />
    <StatusBar 

    translucent={false} />
  </View>


<View>
      <View style={s.headerContainer}>
        <Header 
        showHelpText = {showHelpText}
        setShowHelpText = {setShowHelpText}
        showStats={showStats}
        setShowStats={setShowStats}
        />
      </View>
      {showHelpText===false && showStats===false?
      <ScrollView style={s.body}>
        
        <TextAbove
        gameFinished={gameFinished}
        setGameFinished={setGameFinished}
        wrongTileError={wrongTileError}
        tileFullError={tileFullError}
        tilePlaced={tilePlaced}
        worDomination={worDomination}
        setWorDomination={setWorDomination}
        
        
        />

        <View style={s.gridContainer}>
          <Grid 
          word2Success={word2Success}
          displayDomino={displayDomino}
          tilePlaced={tilePlaced}
          setTilePlaced={setTilePlaced}
          dominoRotated={dominoRotated}
          setDominoRotated={setDominoRotated}
          turnStart = {turnStart}
          setTurnStart={setTurnStart}
          wordSubmitted = {wordSubmitted}
          setWordSubmitted={setWordSubmitted}
          showChooseDominoText={showChooseDominoText}
          setShowChooseDominoText={setShowChooseDominoText}
          selectedDominoObject={selectedDominoObject}
          setSelectedDominoObject={setSelectedDominoObject}
          originalSelectedDominoObject={originalSelectedDominoObject}
          setOriginalSelectedDominoObject={setOriginalSelectedDominoObject}
          dominoSelected={dominoSelected}
          setDominoSelected={setDominoSelected}
          word1Success={word1Success}
          setWord1Success={setWord1Success}
          word2Success={word2Success}
          setWord2Success={setWord2Success}
          displayDomino={displayDomino}
          setDisplayDomino={setDisplayDomino}
          showMakeWord={showMakeWord}
          setShowMakeWord={setShowMakeWord}
          dominoesInGrid={dominoesInGrid}
          setDominoesInGrid={setDominoesInGrid}
          dominoIdsInGrid={dominoIdsInGrid}
          setDominoIdsInGrid={setDominoIdsInGrid}
          numberDominoesInGrid={numberDominoesInGrid}
          setNumberDominoesInGrid={setNumberDominoesInGrid}
          tileFullError={tileFullError}
          setTileFullError={setTileFullError}
          gameStart={gameStart}
          setGameStart={setGameStart}
          gridSelectedDominoObjects={gridSelectedDominoObjects}
          setGridSelectedDominoObjects={setGridSelectedDominoObjects}
          wrongTileError={wrongTileError}
          setWrongTileError={setWrongTileError}
          dominoesInHand={dominoesInHand}
          setDominoesInHand={setDominoesInHand}
          gamesArray={gamesArray}
          setGamesArray={setGamesArray}
          scoreArraySingleGame={scoreArraySingleGame}
          setScoreArraySingleGame={setScoreArraySingleGame}
          gameFinished={gameFinished}
          setGameFinished={setGameFinished}
          worDomination={worDomination}
          setWorDomination={setWorDomination}
          worDominationCount={worDominationCount}
          setWorDominationCount={setWorDominationCount}
          singleGameScore={singleGameScore}
          setSingleGameScore={setSingleGameScore}
          setSelectedLetters1={setSelectedLetters1}
          setSelectedLetters2={setSelectedLetters2}
    
          
          />
        </View>
     
      <TextWorDominationCount
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
                 gridSelectedsDominoObjects={gridSelectedDominoObjects}
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
       {gameFinished===false?
        <HandDominoes
       showFinishGame={showFinishGame}
       setShowFinishGame={setShowFinishGame}
          gameStart={gameStart}
          setGameStart={setGameStart}
          displayDomino={displayDomino}
          setDisplayDomino={setDisplayDomino}
          wordSubmitted={wordSubmitted}
          setWordSubmitted={setWordSubmitted}
          showMakeWord={showMakeWord}
          setShowMakeWord={setShowMakeWord}
          selectedDominoObject={selectedDominoObject}
          setSelectedDominoObject={setSelectedDominoObject}
          originalSelectedDominoObject={originalSelectedDominoObject}
          setOriginalSelectedDominoObject={setOriginalSelectedDominoObject}
          dominoSelected={dominoSelected}
          setDominoSelected={setDominoSelected}
          turnStart={turnStart}
          setTurnStart={setTurnStart}
          dominoRotated={dominoRotated}
          setDominoRotated={setDominoRotated}
          dominoesInGrid={dominoesInGrid}
          setDominoesInGrid={setDominoesInGrid}
          numberDominoesInGrid={numberDominoesInGrid}
          setNumberDominoesInGrid={setNumberDominoesInGrid}
          word1Success={word1Success}
          setWord1Success={setWord1Success}
          word2Success={word2Success}
          setWord2Success={setWord2Success}
          dominoesInHand={dominoesInHand}
          setDominoesInHand={setDominoesInHand}
          tilePlaced={tilePlaced}
          setTilePlaced={setTilePlaced}
          worDomination={worDomination}
          setWorDomination={setWorDomination}
        />
        :null}
       
        <TextBelow
        word1Success={word1Success}
        dominoSelected={dominoSelected}
        setDominoSelected={setDominoSelected}
        gameFinished={gameFinished}
        worDomination={worDomination}
        setWorDomination={setWorDomination}
        gamesArray={gamesArray}
        gameStart={gameStart}
        gameFinished={gameFinished}
        setGameFinished={setGameFinished}
        />
      
       
        { tilePlaced === false && gameFinished===false?
        <View style={s.displayDominoContainer}>
          
          <DisplayDomino
            displayDomino={displayDomino}
            setDisplayDomino={setDisplayDomino}
            wordSubmitted={wordSubmitted}
            setWordSubmitted={setWordSubmitted}
            selectedDominoObject={selectedDominoObject}
            setSelectedDominoObject={setSelectedDominoObject}
            originalSelectedDominoObject={originalSelectedDominoObject}
            setOriginalSelectedDominoObject={setOriginalSelectedDominoObject}
            showChooseDominoText={showChooseDominoText}
            setShowChooseDominoText={setShowChooseDominoText}
            dominoRotated={dominoRotated}
            setDominoRotated={setDominoRotated}
            word2Success={word2Success}
            setWord2Success={setWord2Success}
            tilePlaced={tilePlaced}
            setTilePlaced={setTilePlaced}
            dominoesInGrid={dominoesInGrid}
            setDominoesInGrid={setDominoesInGrid}
            worDomination={worDomination}
            setWorDomination={setWorDomination}
            gameStart={gameStart}
            dominoSelected={dominoSelected}
          />
         </View>
         :null}
          <View>
            {showMakeWord === true && word2Success === false && gameFinished===false? (
              <MakeWords
                displayDomino={displayDomino}
                setDisplayDomino={setDisplayDomino}
                selectedDominoObject={selectedDominoObject}
                setSelectedDominoObject={setSelectedDominoObject}

                showChooseDominoText={showChooseDominoText}
                setShowChooseDominoText={setShowChooseDominoText}
                gameStart={gameStart}
                setGameStart={setGameStart}
                turnStart={turnStart}
                setTurnStart={setTurnStart}
                word1Success={word1Success}
                setWord1Success={setWord1Success}
                word2Success={word2Success}
                setWord2Success={setWord2Success}
                dominoesInGrid={dominoesInGrid}
                setDominoesInGrid={setDominoesInGrid}
                tilePlaced={tilePlaced}
                setTilePlaced={setTilePlaced}
            wordSubmitted={wordSubmitted}
            worDomination={worDomination}
            setWorDomination={setWorDomination}
            worDominationCount={worDominationCount}
            setWorDominationCount={setWorDominationCount}
            selectedLetters1={selectedLetters1}
            setSelectedLetters1={setSelectedLetters1}
            selectedLetters2={selectedLetters2}
            setSelectedLetters2={setSelectedLetters2}

              />
            ) : null}
          </View>
          <TextTileWin
          word2Success={word2Success}
            tilePlaced={tilePlaced}
            worDomination={worDomination}
            worDominationCount={worDominationCount}
            gameFinished={gameFinished}
            setGameFinished={setGameFinished}
          
          
          />
  

     
          {!showFinishGame && gameFinished?
          <StartNewGameButton
          dominoesInHand={dominoesInHand}
          setDominoesInHand={setDominoesInHand}
          word1Success={word1Success}
          setWord1Success={setWord1Success}
          word2Success={word2Success}
          setWord2Success={setWord2Success}
          displayDomino={displayDomino}
          setDisplayDomino={setDisplayDomino}
          dominoRotated={dominoRotated}
          setDominoRotated={setDominoRotated}
          numberDominoesInGrid={numberDominoesInGrid}
          setNumberDominoesInGrid={setNumberDominoesInGrid}
          dominoIdsInGrid={dominoIdsInGrid}
          setDominoIdsInGrid={setDominoIdsInGrid}
          selectedDominoObject={selectedDominoObject}
          setSelectedDominoObject={setSelectedDominoObject}
          originalSelectedDominoObject={originalSelectedDominoObject}
          setOriginalSelectedDominoObject={setOriginalSelectedDominoObject}
          gridSelectedDominoObjects={gridSelectedDominoObjects}
         setGridSelectedDominoObjects={setGridSelectedDominoObjects}
         tilePlaced={tilePlaced}
         setTilePlaced={setTilePlaced}
         turnStart={turnStart}
          setTurnStart={setTurnStart}
          gameStart={gameStart}
          setGameStart={setGameStart}
          gameFinished={gameFinished}
          setGameFinished={setGameFinished}
          scoreArraySingleGame={scoreArraySingleGame}
          wordSubmitted={wordSubmitted}
          setWordSubmitted={setWordSubmitted}
        

          setScoreArraySingleGame={setScoreArraySingleGame}
          singleGameScore={singleGameScore}
          setSingleGameScore={setSingleGameScore}
          worDomination={worDomination}
          setWorDomination={setWorDomination}
          showMakeWord={showMakeWord}
          setShowMakeWord={setShowMakeWord}
          dominoSelected={dominoSelected}
          setDominoSelected={setDominoSelected}
          />:
          showFinishGame===true?
          <FinishGame
          gameStart={gameStart}
          setGameStart={setGameStart}
          gameFinished={gameFinished }
          setGameFinished={setGameFinished}
          gamesArray={gamesArray} 
          setGamesArray={setGamesArray}
          worDominationCount={worDominationCount} 
          setWorDominationCount={setWorDominationCount}
          singleGameScore={singleGameScore}
          setSingleGameScore={setSingleGameScore}
          showFinishGame={showFinishGame}
          setShowFinishGame={setShowFinishGame}
          dominoesInHand={dominoesInHand}
          setDominoesInHand={setDominoesInHand}

          />:null
          
          }
    
      </ScrollView>
      :showStats===false?
      <HelpText
      showHelpText={showHelpText}
      setShowHelpText={setShowHelpText}
      
      />
      :<StatsContent
      showStats={showStats}
      setShowStats={setShowStats}
      gamesArray={gamesArray}
      setGamesArray={setGamesArray}
      scoreArraySingleGame={scoreArraySingleGame}
      setScoreArraySingleGame={setScoreArraySingleGame}
      />

          }
      
    </View>
    </>
  )
}
