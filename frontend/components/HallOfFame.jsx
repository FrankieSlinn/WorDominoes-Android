import { View, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState } from "react";
import { fetchHOFEntries} from "../utils/HOFDatabase.js";
import { s } from "../App.style";





export function HallOfFame({ showHOF, setShowHOF }) {

  const [entries, setEntries] = useState([]);

  function returnToGame() {
    console.log("returnToGame Button Clicked");
    setShowHOF(false);
  }

  useEffect(() => {
    async function loadEntries() {
      try {
        const data = await fetchHOFEntries();
        const sorted = data.sort((a, b) => b.score - a.score);
        setEntries(sorted);
        console.log("Fetched HOF Entries:", data);
      } catch (error) {
        console.error("Error fetching Hall of Fame entries:", error);
      }
    }

    loadEntries();
  }, []);

  return (
    <>
      <View style={s.headerContainer}>
        <View style={s.header}>
          <Text style={[s.logo, s.HOFMainHeading]}>WorDominoes Hall Of Fame</Text>
        </View>
      </View>
      <View style={s.returnToGameContainer}>
        <TouchableOpacity style={s.returnToGameButton} onPress={returnToGame}>
          <Text style={s.returnToGameButtonText}> Return To Game</Text>
        </TouchableOpacity>
      </View>
      <View style={s.HOFContentContainer}>
      <View style={s.HOFHeadings}>
      <Text style={s.HOFHeadingText}>Rank</Text>
        <Text style={s.HOFHeadingText}>Handle</Text>
        <Text style={s.HOFHeadingText}>Score</Text>

      </View>
      <ScrollView >
        <View style={s.HOFRows}>
  
      {entries.map((entry, index) => (
        <View key={index} style={s.HOFRow}>
            <Text style={s.HOFEntryText}>{index+1}</Text>
          <Text style={s.HOFEntryText}>{entry.handle}</Text>
          <Text style={s.HOFEntryText}>{entry.score}</Text>
          </View>
    
      ))}
      </View>
    
     
        
          </ScrollView>
          <Text> {"\n"} {"\n"} {"\n"}{"\n"}</Text>
          </View>
    </>
  );
}
