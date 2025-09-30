import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style";
import { handleFinishGame } from "../utils/finishGame";
import { loadEntries } from "../utils/loadEntries";


export function FinishGame({
  gameStart,
  setGameStart,
  gameFinished,
  setGameFinished,
  gamesArray,
  setGamesArray,
  worDominationCount,
  setWorDominationCount,
  singleGameScore,
  setSingleGameScore,
  showFinishGame,
  setShowFinishGame,
  dominoesInHand,
  setDominoesInHand,
  finalScore,
  setFinalScore,
  worDomination,
  setWorDomination,
  showHOFEntry,
  setShowHOFEntry,
  handle,
  minHOFScore,
  setMinHOFScore,
  entries,
  setEntries,
  word2Success,turnStart
}) {
  //runs finish game function sets game to finished
  async function handleClick(
    gameFinished,
    setGameFinished,
    gamesArray,
    setGamesArray,
    worDomination,
    setWorDomination,
    worDominationCount,
    setWorDominationCount,
    singleGameScore,
    setSingleGameScore,
    finalScore,
    setFinalScore,
    showHOFEntry,
    setShowHOFEntry,
    handle,
    minHOFScore
  ) {
    console.log("handleClick for Finishgame running");

    // Await the async call
    const newMinScore = await loadEntries(setEntries, setMinHOFScore);

    console.log("Min HOF Score in HandleClick!!!!!!!", minHOFScore);

    setShowFinishGame(false);
    setGameFinished(true);

    handleFinishGame(
      gameFinished,
      setGameFinished,
      gamesArray,
      setGamesArray,
      worDomination,
      setWorDomination,
      worDominationCount,
      setWorDominationCount,
      singleGameScore,
      setSingleGameScore,
      finalScore,
      setFinalScore,
      showHOFEntry,
      setShowHOFEntry,
      handle,
      newMinScore
    );

    console.log("game finished in finish game", gameFinished);
  }

  function showAlert() {
    console.log("alert should show");

    Alert.alert("Finish Game", "Are You Sure You Want To Finish This Game?", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel Pressed");
        },
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
     
          handleClick(
            gameFinished,
            setGameFinished,
            gamesArray,
            setGamesArray,
            worDomination,
            setWorDomination,
            worDominationCount,
            setWorDominationCount,
            singleGameScore,
            setSingleGameScore,
            finalScore,
            setFinalScore,
            showHOFEntry,
            setShowHOFEntry,
            handle,
            minHOFScore
          );
          console.log("word domination in finish game", worDomination)
        },
      },
    ]);
  }

  return (
    <>
      <View style={[s.startFinishGameContainer, {marginTop: worDomination?80:word2Success?33:turnStart?21:0, marginBottom: worDomination?40:40}]}>
        <TouchableOpacity
          style={[s.gameControlButton, s.buttonBorders, s.finishGameButton, ]}
          onPress={() => [showAlert()]}
        >
          <Text style={s.gameControlText}>Finish Game</Text>
        </TouchableOpacity>
        <Text>
          {" "}
          {"\n"} {"\n"} {"\n"}
          {"\n"}
        </Text>
      </View>
    </>
  );
}
