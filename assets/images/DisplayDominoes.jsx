import { View} from "react-native";

import { s } from "../App.style";

const displayDominoComponents = [
    require("../components/DisplayDomino1.jsx").DisplayDomino1,
    require("../components/DisplayDomino2.jsx").DisplayDomino2,
    require("../components/DisplayDomino3.jsx").DisplayDomino3,
    require("../components/DisplayDomino4.jsx").DisplayDomino4,
  ];

export function DisplayDominoes({gameStart, setGameStart}) {
  console.log("dominoHand", dominoHand)
  return (
    <>
         <View style={[s.displayDominoContainer]}>
         {dominoHand.map((domino, index) => (
        <View key={index} style={s.displayDomino}>
          <Image
            source={require(`../assets/images/${Object.keys(domino)[0]}.png`)}
            style={{ width: 30, height: 60 }}
          />
        </View>
      ))}
          
        </View>
    </>
  );
}
