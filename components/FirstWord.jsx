import { View, Text, TextInput} from "react-native";
import { s } from "../App.style";
import {InputLeft} from "./InputLeft";


export function FirstWord({wordLength1, setWordLength1}) {
  return (
    <>
          <View >
        <Text style={s.instructionText}>
            {`Make a word with ${wordLength1} letters.`}

        </Text>
        <InputLeft/>



      </View>

    </>
  );
}