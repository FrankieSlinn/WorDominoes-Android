import {Image, TouchableOpacity, View, ScrollView, Text} from "react-native";
import {storeGamesArray, getGamesArray} from "../utils/asynchStorageUtils.js"

import{useState, useEffect} from "react";
 import {s} from "../App.style.js";



export function StatsContent({showStats, setShowStats, gamesArray, setGamesArray}){

  const [averageScore, setAverageScore] = useState(0);
  console.log("!!!!!in Staaats!!!!")

    function closeStatsSection(){
        console.log("!!!close button pressed")
        setShowStats(false);
    }

    useEffect(() => {
      console.log("useEffect in Stats running2");
    
      const fetchData = async () => {
        try {
          let totalScore=0;
          const storedGames = await getGamesArray(); // Call the correct function
          console.log("!!!!storedGames in Stats", storedGames);
    
          if (!storedGames || storedGames.length === 0) {
            console.log("No games found, setting average score to 0");
            setGamesArray([]);
            setAverageScore(0);
            return;
          }
    
          setGamesArray(storedGames);
          if(storedGames){
     
        totalScore = storedGames.reduce((sum, num) => sum + num, 0).toFixed(1);}
          console.log("!!!!!!!!totalScore", totalScore);
    
          setAverageScore((totalScore / storedGames.length).toFixed(2)); // Use storedGames.length instead
    
        } catch (error) {
          console.error("Error fetching game data:", error);
        }
      };
    
      fetchData();
    }, []);

    console.log("gamesArray[gamesArray.length-1", gamesArray[gamesArray.length-1])
    

    // function getAverageScore(){
    //   let totalScore = newGamesArray.reduce((sum, num) => sum + num, 0);
    //   setAverageScore(totalScore / gamesArray.length)
      
    // }
    // getAverageScore();

return(<>
      <View style={s.closeButtonContainer}>
        <TouchableOpacity style={s.closeButton} onPress={closeStatsSection}>
          <Text style={s.close}>Close</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={s.helpTextContainer}
      >
        <Text style={s.helpText}>
          {"\n"}
          <Text style={s.popupHeading}>WorDominoes Stats</Text>
          {"\n"}
    
          </Text>
       
          <Text style={s.statsText}>

          Score: <Text style={s.bold}>{gamesArray[gamesArray.length-1]||0}</Text>
          {"\n"}
          {"\n"}
          Games Played: <Text style={s.bold}>{gamesArray.length}</Text>
          {"\n"}
          {"\n"}
          Average Score: <Text style={s.bold}>{averageScore}</Text>


          </Text>
          </ScrollView>



</>)}