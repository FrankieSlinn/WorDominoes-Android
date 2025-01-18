import { Text, View } from "react-native";
import {s} from "../App.style.js";
import {Header} from "../components/Header";
import {Grid} from "../components/Grid";

export default function Index() {
  return (
    <View >
      <View style={s.headerContainer}>
      <Header/>
      </View>
      <View style={s.body}>
      <View style={s.instructionBox}>
        <Text style={s.instructionText}>
          Fill the grid with dominoes to achieve Word Domination.
          </Text>
      </View>
      <View style={s.gridContainer}>
      <Grid/>

      </View>
      </View>

    </View>
  );
}
