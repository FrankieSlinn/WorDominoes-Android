import { Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { s } from "../App.style.js";
import { Header } from "../components/Header";
import { Grid } from "../components/Grid";
import { HandDominoes } from "../components/HandDominoes.jsx";
import { DisplayDomino } from "../components/DisplayDomino.jsx";
import { MakeWords } from "../components/MakeWords.jsx";
import { TextAbove} from "../components/TextAbove.jsx";
import { ChooseDominoText} from "../components/ChooseDominoText.jsx";
import {HelpText} from "../components/HelpText.jsx";
import {StatsContent} from "../components/StatsContent.jsx";
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
          worDomination={worDomination}
          setWorDomination={setWorDomination}
          worDominationCount={worDominationCount}
          setWorDominationCount={setWorDominationCount}
    
          
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
        />
       
        <ChooseDominoText
        word1Success={word1Success}
        dominoSelected={dominoSelected}
        setDominoSelected={setDominoSelected}
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

              />
            ) : null}
          </View>
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
      />

          }
      
    </View>
  )
}
