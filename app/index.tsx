import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { s } from "../App.style.js";
import { Header } from "../components/Header";
import { Grid } from "../components/Grid";
import { HandDominoes } from "../components/HandDominoes.jsx";
import { DisplayDomino } from "../components/DisplayDomino.jsx";
import { MakeWords } from "../components/MakeWords.jsx";


export default function Index() {
  const [gameStart, setGameStart] = useState(true);
  const [turnStart, setTurnStart] = useState(true);
  const [displayDomino, setDisplayDomino] = useState(); //to populate selected domino to make word from
  //maybe can remove
  const [wordSubmitted, setWordSubmitted] = useState(false); //ensures that domino can only be selected once for each turn
  const [showMakeWord, setShowMakeWord] = useState(false);
  const [showChooseDominoText, setShowChooseDominoText] = useState(true);
  const [selectedDominoObject, setSelectedDominoObject] = useState("");
  const [word1Success, setWord1Success] = useState(false);
  const [word2Success, setWord2Success] = useState(false);
  const [dominoRotated, setDominoRotated] = useState(false);
  const[tilePlaced,  setTilePlaced] = useState(false);
  const[dominoesInGrid, setDominoesInGrid]=useState([]);
  const[topHorizontalTilesInGrid, setTopHorizontalTilesInGrid]=useState(["empty", "empty", "empty", "empty"]);
  //relates to domino id(key) and number of dots on each side(value)
  const[topSelectedDominoObjects, setTopSelectedDominoObjects]=useState(["empty", "empty", "empty", "empty"]);
  const[numberDominoesInGrid, setNumberDominoesInGrid]=useState(0);
  const[tileFullError, setTileFullError]=useState(false);
  const[wrongTileError, setWrongTileError]=useState(false);

  console.log("tileFullError in index", tileFullError)
  console.log("wrong Tile Error in index", wrongTileError)
  return (
    <View>
      <View style={s.headerContainer}>
        <Header />
      </View>
      <ScrollView style={s.body}>
        <View style={s.instructionBox}>
          {tileFullError===false&&wrongTileError===false&&tilePlaced===false?
          <Text style={s.instructionText}>
            Fill the grid with dominoes to achieve Word Domination.
          </Text>
          :!tileFullError===true&&!wrongTileError===true&&tilePlaced===true?
          <Text style={s.instructionText}>
          Congratulations, you placed a tile!!!
        </Text>
        :wrongTileError===true?
        <Text style={s.instructionText}>
        The tile does not have the same amount of dots as the tile next to it. Try somewhere else.
      </Text>
      :
      tileFullError===true?

        <Text style={s.instructionText}>
        This space is already taken. Try somewhere else.
      </Text>
      :null

}

        </View>
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
          topHorizontalTilesInGrid={topHorizontalTilesInGrid}
          setTopHorizontalTilesInGrid={setTopHorizontalTilesInGrid}
          numberDominoesInGrid={numberDominoesInGrid}
          setNumberDominoesInGrid={setNumberDominoesInGrid}
          tileFullError={tileFullError}
          setTileFullError={setTileFullError}
          gameStart={gameStart}
          setGameStart={setGameStart}
          topSelectedDominoObjects={topSelectedDominoObjects}
          setTopSelectedDominoObjects={setTopSelectedDominoObjects}
          wrongTileError={wrongTileError}
          setWrongTileError={setWrongTileError}
          
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
          turnStart={turnStart}
          setTurnStart={setTurnStart}
          dominoRotated={dominoRotated}
          setDominoRotated={setDominoRotated}
          dominoesInGrid={dominoesInGrid}
          setDominoesInGrid={setDominoesInGrid}
          numberDominoesInGrid={numberDominoesInGrid}
          setNumberDominoesInGrid={setNumberDominoesInGrid}
        />
        {word1Success === false ? (
          <View style={s.instructionTextBelow}>
            <Text style={s.instructionText}>
              Choose a domino above. You'll create 2 words for this tile: the
              word length is the number of dots on its side of the domino.
            </Text>
          </View>
        ) : null}
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
          <View></View>
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
            {word2Success === true ? (
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
        </View>
      </ScrollView>
    </View>
  );
}
