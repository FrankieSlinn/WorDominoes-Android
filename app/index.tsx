import { Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
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
export default function Index() {
  const [gameStart, setGameStart] = useState(true);
  const [turnStart, setTurnStart] = useState(true);
  const [displayDomino, setDisplayDomino] = useState(); //to populate selected domino to make word from
  //maybe can remove
  const [wordSubmitted, setWordSubmitted] = useState(false); //ensures that domino can only be selected once for each turn
  const [showMakeWord, setShowMakeWord] = useState(false);
  const [showChooseDominoText, setShowChooseDominoText] = useState(true);
  const [selectedDominoObject, setSelectedDominoObject] = useState("");
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
  const [showFinishGame, setShowFinishGame]=useState(true);s

  console.log("showMakeWord in index", showMakeWord)
  console.log("word2Success in index", word2Success)
  
//rotated then unrotated might not work. 
//one of used letters stayed after redo word. 

  useEffect(()=>{
    console.log("!!!!dominoSelected in index", dominoSelected);
  },[dominoSelected])
  return (


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
    
          
          />
        </View>
        <HandDominoes
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
       
        <TextBelow
        word1Success={word1Success}
        dominoSelected={dominoSelected}
        setDominoSelected={setDominoSelected}
        gameFinished={gameFinished}
        worDomination={worDomination}
        setWorDomination={setWorDomination}
        />
      
       
        { tilePlaced === false ?
        <View style={s.displayDominoContainer}>
          
          <DisplayDomino
            displayDomino={displayDomino}
            setDisplayDomino={setDisplayDomino}
            wordSubmitted={wordSubmitted}
            setWordSubmitted={setWordSubmitted}
            selectedDominoObject={selectedDominoObject}
            setSelectedDominoObject={setSelectedDominoObject}
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
          />
         </View>
         :null}
          <View>
            {showMakeWord === true && word2Success === false ? (
              <MakeWords
                displayDomino={displayDomino}
                setDisplayDomino={setDisplayDomino}
                selectedDominoObject={selectedDominoObject}
                setSelectedDominoObject={setSelectedDominoObject}
                showChooseDominoText={showChooseDominoText}
                setShowChooseDominoText={setShowChooseDominoText}
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

              />
            ) : null}
          </View>
          <TextTileWin
          word2Success={word2Success}
            tilePlaced={tilePlaced}
            worDomination={worDomination}
          
          
          />

          <FinishGame
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
        
          
          />
    
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
  )
}
