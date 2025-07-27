import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style";
import { submitScore } from "../utils/HOFDatabase";

export function HOFEntry({
  handle,
  setHandle,
  finalScore,
  setFinalScore,
  showHOFEntry,
  setShowHOFEntry,
  showYouInHOF,
  setShowYouInHOF,
}) {
  useEffect(() => {
    console.log("useeffect for logging final score in HOFEntry running!!!!!!!");
    console.log("finalScore in HOFEntry", finalScore);
    console.log("showHOFEntry in HOFENTRY"), showHOFEntry
    // setShowYouInHOF(true)
  }, [finalScore]);

  function submitHOFEntry(handle, finalScore) {
    console.log("📣 Button was pressed");
    if(handle.length<12){
    const scoreToSubmit=finalScore?finalScore:0;
    submitScore(handle, scoreToSubmit);
    setShowHOFEntry(false);
    setShowYouInHOF(true);
    console.log("You In HOF", showYouInHOF);
    }
  }

  return (
    <>
      <View style={s.HOFEntryOuterContainer}>
        <View style={[s.HOFEntryContainer, s.HOFEntryAndContentContainer]}>
          <View style={s.HOFEntryHeadingContainer}>
            <Text style={[s.logo, s.HOFEntryHeading]}>
              Congratulations, You Made It Into the WorDominoes Hall Of Fame!
            </Text>
          </View>
          <View style={s.handleAndScoreView}>
            <View style={s.handleView}>
              <Text style={s.HOFEntryText}>Handle
                {/* <Text>{"\n"}</Text> */}
                </Text><Text style ={s.maxLengthText}>Max Length: 12</Text>
              <TextInput
                style={handle.length === 0 ? s.placeholder : s.inputText}
                placeholder={"Enter Your Handle"}
                value={handle}
                onChangeText={setHandle}
          
              >
                     </TextInput>
                     </View>
             {handle.length>12?
         
              <View style = {s.handleLengthMessage}>
                <Text>Try a shorter handle</Text>
              </View>:
    
            null
             }

            <View style={s.scoreView}>
              <Text style={s.HOFEntryText}>Score</Text>
              <Text style={s.HOFScoreText}>{finalScore}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={[s.gameControlButton, s.startGameButton, s.HOFEntryButton]}
            onPress={() => submitHOFEntry(handle, finalScore)}
          >
            <Text style={s.gameControlText}>Enter The Hall Of Fame</Text>
          </TouchableOpacity>
          <Text>{"\n"}</Text>
        </View>
      </View>
    </>
  );
}
