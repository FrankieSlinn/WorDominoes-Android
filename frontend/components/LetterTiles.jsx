import { View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { letters } from "../utils/letters";
import {
  getLetterHand,
  storeLetterHand,
  getSelectedLetters1,
  storeSelectedLetters1,
  getSelectedLetters2,
  storeSelectedLetters2,
  getInputString1,
  storeInputString1,
  getInputString2,
  storeInputString2,
} from "../utils/asynchStorageUtils";
import { s } from "../App.style";

export function LetterTiles({
  inputString1,
  setInputString1,
  inputString2,
  setInputString2,
  wordLength1,
  wordLength2,
  turnStart,
  setTurnStart,
  selectedLetters1,
  setSelectedLetters1,
  selectedLetters2,
  setSelectedLetters2,
  wordNum,
  setWordNum,
  gameStart,
}) {
  const [letterHand, setLetterHand] = useState([]);
  const [letterHandAllocated, setLetterHandAllocated] = useState(false);
  const letterHandLength = 15;


  //reset and load seleted letters
  useEffect(() => {
    console.log(
      "gameStart in letterTiles before clearing letterTile",
      gameStart
    );
    const handleSelectedLetterTiles = async () => {
      if (turnStart === true) {
        storeSelectedLetters1([]);
        setSelectedLetters1([]);
        storeSelectedLetters2([]);
        setSelectedLetters2([]);
      } else {
        const storedSelectedLetters1 = await getSelectedLetters1();
        const storedSelectedLetters2 = await getSelectedLetters2();
        setSelectedLetters1(storedSelectedLetters1);
        setSelectedLetters2(storedSelectedLetters2);

      }
    };

    handleSelectedLetterTiles();
  }, []);

  //Allocate Letters
  useEffect(() => {
    console.log("turnStart in allocate Letters", turnStart);
    const loadOrCreateLetterHand = async () => {
      const storedLetterHand = await getLetterHand();
      //reset letter hand
      if (turnStart === false) {
        setLetterHand(storedLetterHand);
      } else if (turnStart === true) {
        const newLetterHand = [];
        const availableLetters = [...letters];

        for (let i = 0; i < letterHandLength; i++) {
          const randomIndex = Math.floor(
            Math.random() * availableLetters.length
          );
          newLetterHand.push(availableLetters[randomIndex]);
          availableLetters.splice(randomIndex, 1);
        }

        const sortedHand = newLetterHand.sort();
        storeLetterHand(sortedHand);
        setLetterHand(sortedHand);
        setTurnStart(false);
      }
    };

    loadOrCreateLetterHand();
  }, []);

  function handlePress(letter, index) {
    const processLetters = async () => {
      const storedSelectedLetters1 = await getSelectedLetters1();
      const storedSelectedLetters2 = await getSelectedLetters2();

      let inputString =
        wordNum === 1
          ? (inputString = inputString1)
          : (inputString = inputString2);
      let wordLength =
        wordNum === 1 ? (wordLength = wordLength1) : (wordLength = wordLength2);

      if (
        inputString.length < wordLength &&
        !selectedLetters1.includes(index) &&
        !selectedLetters2.includes(index)
      ) {
        if (wordNum === 1) {
          const newInputString1 = [...inputString1, letter];
          setInputString1(newInputString1);
          storeInputString1(newInputString1);
          let copyStoredSelectedLetters1 = [...storedSelectedLetters1];

          copyStoredSelectedLetters1.push(index);

          setSelectedLetters1(copyStoredSelectedLetters1);
          storeSelectedLetters1(copyStoredSelectedLetters1);
        } else if (wordNum === 2) {
          const newInputString2 = [...inputString2, letter];
          setInputString2(newInputString2);
          storeInputString2(newInputString2);
          let copyStoredSelectedLetters2 = [...storedSelectedLetters2];

          copyStoredSelectedLetters2.push(index);

          setSelectedLetters2(copyStoredSelectedLetters2);
          storeSelectedLetters2(copyStoredSelectedLetters2);
        }
      } else {
        console.log(
          "Max word length reached, here is the full string:",
          inputString1
        );
      }
    };

    processLetters();
  }

  return (
    <View style={s.lettersContainer}>
      {letterHand.map((letter, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(letter, index)}
        >
          <Text
            style={[
              s.letter,
              selectedLetters1.includes(index) ||
              selectedLetters2.includes(index)
                ? s.selectedLetter
                : null,
            ]}
          >
            {letter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
