import { Text, View } from "react-native";
import {s} from "../App.style.js";
import {Header} from "../components/Header";
import {Grid} from "../components/Grid";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header/>
      <View style={s.instructionBox}>
        <Text style={s.instructionText}>
          Fill the grid with dominoes to achieve Word Domination.
          </Text>
      </View>
      <View>
      <Grid/>

      </View>

    </View>
  );
}
