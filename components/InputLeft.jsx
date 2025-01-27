import { View, Text, TextInput} from "react-native";
import { s } from "../App.style";


export function InputLeft({inputString, setInputString}) {
  return (
    <>
      <TextInput style={s.input} placeholder ="Select letter tiles below to make a word." placeholderTextColor="#aaa">
    </TextInput>
    </>
  );
}