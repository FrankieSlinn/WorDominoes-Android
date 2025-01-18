import { Text, View } from "react-native";
import {s} from "../App.style.js";
import {Header} from "../components/Header";
import {Grid} from "../components/Grid";
import {DisplayDomino1} from "../components/DisplayDomino1.jsx";
import {DisplayDomino2} from "../components/DisplayDomino2.jsx";
import {DisplayDomino3} from "../components/DisplayDomino3.jsx";
import {DisplayDomino4} from "../components/DisplayDomino4.jsx";

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
      <View style={[s.displayDominoContainer, {justifyContent:"center"}]}>
        <DisplayDomino1/>
        <DisplayDomino2/>
        <DisplayDomino3/>
        <DisplayDomino4/>


      </View>
      </View>

    </View>
  );
}
