import { Text, View } from "react-native";
import { s } from "../App.style.js";
import { Header } from "../components/Header";
import { Grid } from "../components/Grid";
import {DisplayDominoes} from "../components/DisplayDominoes";


export default function Index() {
  return (
    <View>
      <View style={s.headerContainer}>
        <Header />
      </View>
      <View style={s.body}>
        <View style={s.instructionBox}>
          <Text style={s.instructionText}>
            Fill the grid with dominoes to achieve Word Domination.
          </Text>
        </View>
        <View style={s.gridContainer}>
          <Grid />
        </View>
     <DisplayDominoes/>
        <View style={s.instructionTextBelow}>
         <Text style={s.instructionText}>
         Choose a domino above. You'll create 2 words for this tile: the word length is the number of dots on its side of the domino.


          </Text>
        </View>
      </View>
    </View>
  );
}
