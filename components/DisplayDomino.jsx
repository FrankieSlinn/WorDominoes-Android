import { View, Image } from "react-native";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";
import { s } from "../App.style";


export function DisplayDomino({displayDomino, setDisplayDomino}) {
    console.log("displayDomino in DisplayDomino", displayDomino)
  return (
    <>
      <View style={s.displayDomino}>

      <Image
        source={dominoImageMappings[displayDomino]} // Use the mapping object
        style={s.displayDomino}
      />
      </View>
    </>
  );
}