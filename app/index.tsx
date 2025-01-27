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
  const [wordSubmitted, setWordSubmitted] = useState(false); //ensures that domino can only be selected once for each turn
  const [showMakeWord, setShowMakeWord] = useState(false);
  const [showChooseDominoText, setShowChooseDominoText] = useState(true);
  const [selectedDominoObject, setSelectedDominoObject] = useState();
  return (
    <View>
      <View style={s.headerContainer}>
        <Header />
      </View>
      <ScrollView style={s.body}>
        <View style={s.instructionBox}>
          <Text style={s.instructionText}>
            Fill the grid with dominoes to achieve Word Domination.
          </Text>
        </View>
        <View style={s.gridContainer}>
          <Grid />
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
          turnStart ={turnStart}
          setTurnStart={setTurnStart}
        />
        <View style={s.instructionTextBelow}>
          <Text style={s.instructionText}>
            Choose a domino above. You'll create 2 words for this tile: the word
            length is the number of dots on its side of the domino.
          </Text>
        </View>
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
          />
          <View>
          {/* <Text style={s.instructionText}>
              {showChooseDominoText === true? "Choose a domino" : null}
            </Text> */}

          </View>
          <View>
            {showMakeWord === true ? (
              <MakeWords
                displayDomino={displayDomino}
                setDisplayDomino={setDisplayDomino}
                selectedDominoObject={selectedDominoObject}
                setSelectedDominoObject={setSelectedDominoObject}
                showChooseDominoText={showChooseDominoText}
                setShowChooseDominoText={setShowChooseDominoText}
                turnStart ={turnStart}
                setTurnStart={setTurnStart}
              />
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
