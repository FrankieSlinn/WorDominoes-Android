import {Image, TouchableOpacity, View, ScrollView, Text} from "react-native";
import {s} from "../App.style.js";



export function StatsContent({showStats, setShowStats}){

    function closeStatsSection(){
        console.log("!!!close button pressed")
        setShowStats(false);
    }

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
          </ScrollView>



</>)}