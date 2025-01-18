import { View} from "react-native";
import { DisplayDomino1 } from "../components/DisplayDomino1.jsx";
import { DisplayDomino2 } from "../components/DisplayDomino2.jsx";
import { DisplayDomino3 } from "../components/DisplayDomino3.jsx";
import { DisplayDomino4 } from "../components/DisplayDomino4.jsx";
import { s } from "../App.style";

export function DisplayDominoes() {
  return (
    <>
         <View style={[s.displayDominoContainer]}>
          <DisplayDomino1 />
          <DisplayDomino2 />
          <DisplayDomino3 />
          <DisplayDomino4 />
        </View>
    </>
  );
}
