import { View, Text, TouchableOpacity, Alert, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";
import {submitScore} from "../utils/HOFDatabase"

export function HOFEntry({handle, setHandle, finalScore, setFinalScore, showHOFEntry, setShowHOFEntry
  }) {
  const[showYouInHOF, setShowYouInHOF]=useState(false)

    useEffect(() => {
      console.log("useeffect for logging final score in HOFEntry running!!!!!!!")
    console.log("finalScore in HOFEntry", finalScore)
  // setShowYouInHOF(true)
    },[finalScore])

    function submitHOFEntry(handle, finalScore){
      console.log("📣 Button was pressed");
      submitScore(handle, finalScore)
      setShowHOFEntry(false)
   
    }

    return(<>
 <View style={s.HOFHeaderContainer}>
        <Text style={[s.logo, s.HOFMainHeading]}>Congratulations, You Have Made It Into the WorDominoes Hall Of Fame!</Text>
        </View>
   
        <View style={s.HOFContentContainer}>
      
        <Text style={s.HOFHeadingText}>Handle</Text>
        <TextInput style={handle.length === 0 ? s.placeholder : s.inputText} placeholder={"Enter Your Handle"}     value={handle}
        onChangeText={setHandle}>
    
          </TextInput>
     
            <Text style={s.HOFHeadingText}>Score</Text>
                <Text>{finalScore}
            {"\n"} {"\n"} {"\n"} 

            </Text>
            <TouchableOpacity onPress={() => submitHOFEntry(handle, finalScore)}>
            <Text>Enter The Hall Of Fame</Text>

            </TouchableOpacity>
           <Text>{"\n"}  {"\n"} {"\n"} {"\n"} {"\n"} </Text> 


         

        </View>
   




        
        
        
        </>)


  }