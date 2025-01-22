import { View, Image} from "react-native";

import { allocateDominoes, getDominoHand } from "../utils/allocateDominoes.js";
import {dominoImageMappings} from "../utils/dominoImageMappings.js";
import { s } from "../App.style.js";

const displayDominoComponents = [
    require("./HandDomino1.jsx").HandDomino1,
    require("./HandDomino2.jsx").HandDomino2,
    require("./HandDomino3.jsx").HandDomino3,
    require("./HandDomino4.jsx").HandDomino4,
  ];

export function HandDominoes({gameStart, setGameStart}) {
  allocateDominoes();
  console.log("dominoHand", getDominoHand())
  const dominoesInHand = getDominoHand();
  // console.log("image", `../assets/images/${Object.keys(domino)}.png`)
  return (
    <>
         <View style={[s.handDominoContainer]}>
         {dominoesInHand.map((domino, index) => (
        <View key={index} style={s.handDomino}>
          {console.log("show  ind dominoh", dominoImageMappings[Object.keys(domino)[0]])}
          {console.log(typeof Object.keys(domino).value)}
          <Image
        source={dominoImageMappings[Object.keys(domino)[0]]} // Use the mapping object
        style={{ width: 30, height: 60 }}
      />
        </View>
      ))}
          
        </View>
    </>
  );
}
