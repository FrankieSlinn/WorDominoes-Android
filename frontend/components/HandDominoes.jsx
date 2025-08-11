import { View, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

import { allocateDominoes } from "../utils/allocateDominoes.js";
import { dominoImageMappings } from "../utils/dominoImageMappings.js";
import { s } from "../App.style.js";

export function HandDominoes({
  turnStart,
  setTurnStart,
  displayDomino,
  setDisplayDomino,
  wordSubmitted,
  setWordSubmitted,
  showMakeWord,
  setShowMakeWord,
  originalSelectedDominoObject,
  setOriginalSelectedDominoObject,
  selectedDominoObject,
  setSelectedDominoObject,
  dominoSelected,
  setDominoSelected,
  setDominoRotated,
  word1Success,
  setWord1Success,
  word2Success,
  setWord2Success,
  dominoesInHand,
  setDominoesInHand,
  tilePlaced,
  setTilePlaced,
  worDomination,
  showFinishGame,
  setShowFinishGame,
  gameStart,
  setGameStart,
  selectedDominoIndex,
  setSelectedDominoIndex,
  dominoesUsed,
  setDominoesUsed,
}) {
  useEffect(() => {
    console.log(
      "dominoesInHand in dominoesInHand b4 allocate dominoes in useEffect",
      dominoesInHand
    );
    allocateDominoes(
      dominoesInHand,
      setDominoesInHand,
      turnStart,
      gameStart,
      dominoesUsed,
      setDominoesUsed
    );
  }, [turnStart]);

  function handleClick(selectedDomino, domino, index) {
    console.log("index in handleClick dominoesInHand", index);
    console.log("dominoClicked");
    if (wordSubmitted === false && turnStart === true) {
      setDominoSelected(true);

      setDisplayDomino(selectedDomino);
      setSelectedDominoIndex(index);
      console.log("dominoesInHand in in handDominoes", dominoesInHand);
      console.log("selectedDominoIndex in handDominoes", selectedDominoIndex);
      console.log(
        "dominoesInHand[selectedDominoIndex] in handDominoes",
        dominoesInHand[selectedDominoObject]
      );
      setShowFinishGame(true);
      setSelectedDominoObject(domino);

      //value that doesn't change with rotations
      setOriginalSelectedDominoObject(domino);
      setWordSubmitted(true);
      setShowMakeWord(true); //Make word section can be displayed
      // setTurnStart(false)
      setDominoRotated(false);
      setWord1Success(false);
      setWord2Success(false);
      setTilePlaced(false);
      console.log(
        "dominoSelected in hand dominoes after click",
        dominoSelected
      );
    }
  }

  return (
    <>
      {!worDomination ? (
        <View style={[s.handDominoContainer]}>
          {dominoesInHand.map((domino, index) =>
            domino != selectedDominoObject ? (
              <View key={index} style={s.handDomino}>
                <TouchableOpacity
                  onPress={() => {
                    handleClick(Object.keys(domino)[0], domino, index);
                  }}
                >
                  <Image
                    source={dominoImageMappings[Object.keys(domino)[0]]} // Use the mapping object
                    style={{ width: 30, height: 60 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null
          )}
        </View>
      ) : null}
    </>
  );
}
