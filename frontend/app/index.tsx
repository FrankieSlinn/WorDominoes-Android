import { Text, View, ScrollView , Keyboard} from "react-native";
import { useState, useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { s } from "../App.style.js";
import { Header } from "../components/Header.jsx";
import { Grid } from "../components/Grid.jsx";
import { HandDominoes } from "../components/HandDominoes.jsx";
import { DisplayDomino } from "../components/DisplayDomino.jsx";
import { MakeWords } from "../components/MakeWords.jsx";
import { TextAbove } from "../components/TextAbove.jsx";
import { TextBelow } from "../components/TextBelow.jsx";
import { TextTileWin } from "../components/TextTileWin.jsx";
import { HelpText } from "../components/HelpText.jsx";
import { StatsContent } from "../components/StatsContent.jsx";
import { FinishGame } from "../components/FinishGame.jsx";
import { HallOfFameButton } from "../components/HallOfFameButton.jsx";
import { HallOfFame } from "../components/HallOfFame.jsx";
import { HOFEntry } from "../components/HOFEntry.jsx";
import { TextWorDominationCount } from "../components/TextWorDominationCount.jsx";
import { StartNewGameButton } from "../components/StartNewGameButton.jsx";
import { YouInHOF } from "../components/YouInHOF.jsx";
import {
  getLetterHand,
  storeLetterHand,
  getSelectedLetters1,
  storeSelectedLetters1,
  getSelectedLetters2,
  storeSelectedLetters2,
} from "../utils/asynchStorageUtils.js";
import { Stack } from "expo-router";
import { fetchHOFEntries } from "../utils/HOFDatabase.js";

export default function Index() {
  const [gameStart, setGameStart] = useState(true);
  const [turnStart, setTurnStart] = useState(true);
  const [displayDomino, setDisplayDomino] = useState(); //to populate selected domino to make word from
  const [wordSubmitted, setWordSubmitted] = useState(false); //ensures that domino can only be selected once for each turn
  const [showMakeWord, setShowMakeWord] = useState(false);
  const [showChooseDominoText, setShowChooseDominoText] = useState(true);
  const [selectedDominoObject, setSelectedDominoObject] = useState("");
  //to cater for multile rotations
  const [originalSelectedDominoObject, setOriginalSelectedDominoObject] =
    useState("");
  const [dominoSelected, setDominoSelected] = useState(false);
  const [word1Success, setWord1Success] = useState(false);
  const [word2Success, setWord2Success] = useState(false);
  const [dominoRotated, setDominoRotated] = useState(false);
  const [tilePlaced, setTilePlaced] = useState(false);
  const [dominoesInGrid, setDominoesInGrid] = useState([]);
  const [dominoIdsInGrid, setDominoIdsInGrid] = useState([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);
  //relates to domino id(key) and number of dots on each side(value)
  const [gridSelectedDominoObjects, setGridSelectedDominoObjects] = useState([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);
  const [numberDominoesInGrid, setNumberDominoesInGrid] = useState(0);
  const [tileFullError, setTileFullError] = useState(false);
  const [wrongTileError, setWrongTileError] = useState(false);
  const [dominoesInHand, setDominoesInHand] = useState([]);
  const [dominoesUsed, setDominoesUsed] = useState([]);
  const [showHelpText, setShowHelpText] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showHOF, setShowHOF] = useState(false);
  const [gamesArray, setGamesArray] = useState([]);
  const [worDomination, setWorDomination] = useState(false);
  const [worDominationCount, setWorDominationCount] = useState(0);
  const [scoreArraySingleGame, setScoreArraySingleGame] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [singleGameScore, setSingleGameScore] = useState(0);
  const [showFinishGame, setShowFinishGame] = useState(false);
  const [selectedLetters1, setSelectedLetters1] = useState([]);
  const [selectedLetters2, setSelectedLetters2] = useState([]);
  const [selectedDominoIndex, setSelectedDominoIndex] = useState(null);
  const [handle, setHandle] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const [showHOFEntry, setShowHOFEntry] = useState(false);
  const [showYouInHOF, setShowYouInHOF] = useState(false);

  const keyboardOffset = useSharedValue(0);
  //after rotated a few times, tile errors, wrong values picked up for current tile for tile 0//male sure dominoesInHand cannot be modified - prob fixed


  //after place tile and then do icon the tile unrotates - storage for grid?
  //tiles allocated more than once - prob fixed.
  //d2(32) showing as 23 - still issue. Shows in dominoes in hand - prob fixed.
  //showed two or more of same tile, e.g. 55 - prob fixed.
  //rotation state still issues - prob fixed.
  //Runs out of dominoes after new game - prob fixed
  //No 42 or 52 dominoes!!!!
  //ensure selected DominoObject unotated driven by originalSelectedDominoObject - prob fixed
  //sometimes after click on tile that's already placed if something fts needs to click on that empty space twice(at first says tile doesn't fit) - prob fixed.
  //domino mages not always showing.
  //wrong value placed when reversed - prob fixed.
  //start new game need to empty array of used tiles - prob fixed.
  ///check logic for accepting tiles 11 12 let different ones next to each other - prob fixed.
  //Make sure after tile placed cannot be allocated - prob fixed.
  //saw selected letter that wasn't in input


  //shifts keyboard when user types
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        let amountShiftedUp = 130;


        keyboardOffset.value = withSpring(
          -event.endCoordinates.height + amountShiftedUp,
          {
            damping: 100,
            stiffness: 100,
          }
        );
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        keyboardOffset.value = withSpring(0, {
          damping: 20,
          stiffness: 100,
        });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
        keyboardOffset.value 
        },
      ],
    };
  });



  useEffect(() => {
    fetchHOFEntries();
  }, []);

  useEffect(() => {
    console.log("!!!!dominoSelected in index", dominoSelected);
  }, [dominoSelected]);

  //Function to reset at the start of the game
  useEffect(() => {
    console.log("gameStart in index before clearing letterTile", gameStart);
    const handleSelectedLetterTiles = async () => {
      const storedSelectedLetters1 = await getSelectedLetters1();
      const storedSelectedLetters2 = await getSelectedLetters2();
      if (gameStart === true) {
        console.log("gameStart is true? ", gameStart);
        console.log("function to set letter arrays to empty");
        storeSelectedLetters1([]);
        storeSelectedLetters2([]);
        storeLetterHand([]);
        if (selectedLetters1.length != 0 || selectedLetters2.length != 0) {
          setSelectedLetters1([]);
          setSelectedLetters2([]);
        }
      }
    };

    handleSelectedLetterTiles();
  }, []);
  return (
    <>
      <View style={s.statusBarBackground}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar translucent={false} />
      </View>
      <View style={s.appBody}>
      {showHOF === false ? (
     
        <View>
          <View style={s.headerContainer}>
            <Header
              showHelpText={showHelpText}
              setShowHelpText={setShowHelpText}
              showStats={showStats}
              setShowStats={setShowStats}
            />
          </View>
         
          {showHelpText === false && showStats === false ? (
             <Animated.View
             style={
             
              animatedStyle
             }
             >
            <ScrollView >
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
                  turnStart={turnStart}
                  setTurnStart={setTurnStart}
                  wordSubmitted={wordSubmitted}
                  setWordSubmitted={setWordSubmitted}
                  showChooseDominoText={showChooseDominoText}
                  setShowChooseDominoText={setShowChooseDominoText}
                  selectedDominoObject={selectedDominoObject}
                  setSelectedDominoObject={setSelectedDominoObject}
                  originalSelectedDominoObject={originalSelectedDominoObject}
                  setOriginalSelectedDominoObject={
                    setOriginalSelectedDominoObject
                  }
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
                  selectedDominoIndex={selectedDominoIndex}
                  setSelectedDominoIndex={setSelectedDominoIndex}
                  dominoesUsed={dominoesUsed}
                  setDominoesUsed={setDominoesUsed}
                  finalScore={finalScore}
                  setFinalScore={setFinalScore}
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
              {gameFinished === false ? (
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
                  setOriginalSelectedDominoObject={
                    setOriginalSelectedDominoObject
                  }
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
                  selectedDominoIndex={selectedDominoIndex}
                  setSelectedDominoIndex={setSelectedDominoIndex}
                  dominoesUsed={dominoesUsed}
                  setDominoesUsed={setDominoesUsed}
                />
              ) : null}

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

              {tilePlaced === false && gameFinished === false ? (
                <View style={s.displayDominoContainer}>
                  <DisplayDomino
                    displayDomino={displayDomino}
                    setDisplayDomino={setDisplayDomino}
                    wordSubmitted={wordSubmitted}
                    setWordSubmitted={setWordSubmitted}
                    selectedDominoObject={selectedDominoObject}
                    setSelectedDominoObject={setSelectedDominoObject}
                    originalSelectedDominoObject={originalSelectedDominoObject}
                    setOriginalSelectedDominoObject={
                      setOriginalSelectedDominoObject
                    }
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
                    dominoesInHand={dominoesInHand}
                    setDominoesInHand={setDominoesInHand}
                  />
                </View>
              ) : null}
              <View>
                {showMakeWord === true &&
                word2Success === false &&
                gameFinished === false ? (
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

              {!showFinishGame && gameFinished ? (
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
                  setOriginalSelectedDominoObject={
                    setOriginalSelectedDominoObject
                  }
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
                  selectedDominoIndex={selectedDominoIndex}
                  setSelectedDominoIndex={setSelectedDominoIndex}
                  dominoesUsed={dominoesUsed}
                  setDominoesUsed={setDominoesUsed}
                  showHOFEntry={showHOFEntry}
                  setShowHOFEntry={setShowHOFEntry}
                  showYouInHOF={showYouInHOF}
                  setShowYouInHOF={setShowYouInHOF}
                />
              ) : showFinishGame === true ? (
                <>
                  <FinishGame
                    gameStart={gameStart}
                    setGameStart={setGameStart}
                    gameFinished={gameFinished}
                    setGameFinished={setGameFinished}
                    gamesArray={gamesArray}
                    setGamesArray={setGamesArray}
                    worDomination={worDomination}
                    setWorDomination={setWorDomination}
                    worDominationCount={worDominationCount}
                    setWorDominationCount={setWorDominationCount}
                    singleGameScore={singleGameScore}
                    setSingleGameScore={setSingleGameScore}
                    showFinishGame={showFinishGame}
                    setShowFinishGame={setShowFinishGame}
                    dominoesInHand={dominoesInHand}
                    setDominoesInHand={setDominoesInHand}
                    finalScore={finalScore}
                    setFinalScore={setFinalScore}
                    showHOFEntry={showHOFEntry}
                    setShowHOFEntry={setShowHOFEntry}
                    handle={handle}
                  />
                </>

              ) : null}
              {showHOFEntry === true ? (
                <View>
                  <HOFEntry
                    handle={handle}
                    setHandle={setHandle}
                    finalScore={finalScore}
                    setFinalScore={setFinalScore}
                    showHOFEntry={showHOFEntry}
                    setShowHOFEntry={setShowHOFEntry}
                    showYouInHOf={showYouInHOF}
                    setShowYouInHOF={setShowYouInHOF}
                  />
                </View>
              ) : (
                showYouInHOF===true?
                <View>
                
                  <YouInHOF />
                  </View>
                  :null
            
              )}

              <View>
                <HallOfFameButton showHOF={showHOF} setShowHOF={setShowHOF} />
              </View>
            </ScrollView>
            </Animated.View>
          ) : showStats === false ? (
            <HelpText
              showHelpText={showHelpText}
              setShowHelpText={setShowHelpText}
            />
          ) : (
            <StatsContent
              showStats={showStats}
              setShowStats={setShowStats}
              gamesArray={gamesArray}
              setGamesArray={setGamesArray}
              scoreArraySingleGame={scoreArraySingleGame}
              setScoreArraySingleGame={setScoreArraySingleGame}
              finalScore={finalScore}
              setFinalScore={setFinalScore}
            />
          )}
        </View>
     
      ) : (
        <HallOfFame 
        showHOF={showHOF}
        setShowHOF={setShowHOF}
        />
      )}
      </View>
    </>
  );
}
