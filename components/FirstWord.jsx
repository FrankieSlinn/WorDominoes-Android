import { View, Text, TouchableOpacity} from "react-native";
import { s } from "../App.style";
import {InputLeft} from "./InputLeft";


export function FirstWord({wordLength1, setWordLength1, inputString1, setInputString1, selectedLetters, setSelectedLetters}) {

    function handleRedoPress(){
        setInputString1([]);
        setSelectedLetters([]);
        console.log("input string after redo")


    }
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
        <View style={s.wordButtonContainer}>
            <TouchableOpacity style={s.wordButton} onPress={()=>{handleRedoPress()}}>
           
      <Text style={s.wordButtonText}>Redo Word 1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={s.wordButton}>
      <Text style={s.wordButtonText} >Submit Word 1</Text>
    </TouchableOpacity>
    </View>



      </View>

    </>
  );
}