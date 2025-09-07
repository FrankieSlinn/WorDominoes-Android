import { View, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState } from "react";
import { loadEntries } from "../utils/loadEntries";
import { s } from "../App.style";

export function HallOfFame({
  showHOF,
  setShowHOF,
  minHOFScore,
  setMinHOFScore,
  entries,
  setEntries,
}) {

  function returnToGame() {
    console.log("returnToGame Button Clicked");
    setShowHOF(false);
  }

  useEffect(() => {
    const getEntries = async () => {
      await loadEntries(setEntries, setMinHOFScore);
    };

    getEntries();
  }, []);

  return (
    <>
      <View style={s.headerContainer}>
        <View style={[s.header, s.headerHOF]}>
          <Text style={[s.logo, s.HOFMainHeading]}>
            WorDominoes Hall Of Fame
          </Text>
        </View>
      </View>
      <View style={s.HOFContainerMain}>
        <View style={s.returnToGameContainer}>
          <TouchableOpacity style={[s.returnToGameButton, s.buttonBorders]} onPress={returnToGame}>
            <Text style={s.returnToGameButtonText}> Return To Game</Text>
          </TouchableOpacity>
        </View>
        <View style={s.HOFContainer}>
          <View
            style={[
              s.HOFContentContainer,
    
            ]}
          >
            <View style={s.HOFHeadings}>
              <Text style={s.HOFHeadingText}>Rank</Text>

              <Text style={s.HOFHeadingText}>Handle</Text>

              <Text style={s.HOFHeadingText}>Score</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={s.HOFRows}>
                {entries.map((entry, index) => (
                  <View key={index} style={s.HOFRow}>
                    <View style={s.HOFRankContainer}>
                      <Text style={s.HOFEntryText}>{index + 1}</Text>
                    </View>
                    <View style={s.HOFHandleContainer}>
                      <Text style={s.HOFEntryText}>{entry.handle}</Text>
                    </View>
                    <View style={s.HOFScoreContainer}>
                      <Text style={s.HOFEntryText}>{entry.score}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}
