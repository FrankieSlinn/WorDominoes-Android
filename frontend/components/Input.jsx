import { View, Text } from "react-native";
import { useEffect } from "react";
import {
  getInputString1,
  storeInputString1,
  getInputString2,
  storeInputString2,
  storeSelectedLetters1,
  storeSelectedLetters2,
} from "../utils/asynchStorageUtils";
import { s } from "../App.style";

export function Input({
  inputString1,
  setInputString1,
  inputString2,
  setInputString2,
  wordLength1,
  wordLength2,
  wordNum,
  setWordNum,
  turnStart,
  word1Success,
  setSelectedLetters1,
  
}) {
  console.log("wordnum in 1", wordNum);
  console.log("turnstart in input", turnStart);

  //Reset Input Strings if start of turn
  useEffect(() => {
    const resetInputValues = async () => {
      if (turnStart === true) {
        console.log("resetting all input strings to []");
        storeInputString1([]);
        setInputString1([]);
        storeInputString2([]);
        setInputString2([]);
        storeSelectedLetters1([]);
        setSelectedLetters1([]);
        storeSelectedLetters2([]);
        storeSelectedLetters2([]);
      }

      console.log("input string 1, 2", inputString1, inputString2);
    };
    resetInputValues();
  }, []);

  useEffect(() => {
    const handleInputStrings = async () => {
      if (inputString1 || inputString2) {
        const storedInputString1 = await getInputString1();
        const storedInputString2 = await getInputString2();

        storeInputString1(storedInputString1);
        storeInputString2(storedInputString2);

        setInputString1(storedInputString1);
        setInputString2(storedInputString2);
        console.log(
          "iretriedved input strings 1 and 2 in Input",
          inputString1,
          inputString2
        );
      }
    };

    handleInputStrings();
  }, []);

  return (
    <>
    <View style={s.inputContainer}>
      <View style={[s.wordInput, s.input]}>
        {wordNum === 1 ? (
          <Text style={inputString1.length === 0 ? s.placeholder : s.inputText}>
            {inputString1.length === 0
              ? "Select letter tiles below to make a word"
              : inputString1}
          </Text>
        ) : (
          <Text style={inputString2.length === 0 ? s.placeholder : s.inputText}>
            {inputString2.length === 0
              ? "Select letter tiles below to make a words"
              : inputString2}
          </Text>
        )}
      </View>
      </View>
    </>
  );
}
