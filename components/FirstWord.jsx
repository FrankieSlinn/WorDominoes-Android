import { View, Text, TextInput} from "react-native";
import { s } from "../App.style";
import {InputLeft} from "./InputLeft";


export function FirstWord({wordLength1, setWordLength1, inputString1, setInputString1}) {
  return (
    <>
          <View >
        <Text style={s.instructionText}>
            {`Make a word with ${wordLength1} letters.`}

        </Text>
        <InputLeft
        inputString1={inputString1}
        setInputString1={setInputString1}
        />



      </View>

    </>
  );
}