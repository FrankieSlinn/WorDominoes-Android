import {Image, TouchableOpacity, View, ScrollView, Text} from "react-native";
import {getGamesArray} from "../utils/asynchStorageUtils.js"
import{useState, useEffect} from "react";
 import {s} from "../App.style.js";



export function StatsContent({showStats, setShowStats, gamesArray, setGamesArray}){

    function closeStatsSection(){
        console.log("!!!close button pressed")
        setShowStats(false);
    }

    useEffect(() => {
      const fetchData = async () => {
        const storedGames = await newGamesArray();
        setgamesArray(storedGames);
      };
      fetchData();
    }, []);

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
          {"\n"}
          </Text>
       
          <Text>

          {gamesArray}

          </Text>
          </ScrollView>



</>)}