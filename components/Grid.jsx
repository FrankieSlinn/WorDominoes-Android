
import {Text, View} from "react-native";
import{useState} from "react";
import {H1} from "./H1";
import {H2} from "./H2";
import {H3} from "./H3";
import {H4} from "./H4";
import {H5} from "./H5";
import {H6} from "./H6";
import {H7} from "./H7";
import {H8} from "./H8";
import {V1}  from "./V1";
import {V2}  from "./V2";
import {V3}  from "./V3";
import {V4}  from "./V4";
import {s} from "../App.style";

export function Grid({word2Success, dominoRotated, displayDomino, tilePlaced, setTilePlaced}){
    const[tilePlaced,  setTilePlaced] = useState(false);
    // const[tilePlaced,  setTilePlaced] = useState(false);


return <>
<View style={s.grid}>
<View style={s.horizontalDominoContainer}>
<H1
word2Success={word2Success}
domnoRotated={dominoRotated}
tilePlaced={tilePlaced}
setTilePlaced={setTilePlaced}
displayDomino={displayDomino}

/>
<H2/>
<H3/>
<H4/>
</View>
<View style={s.verticalDominoContainer}>
<View style={s.verticalDominoContainerLeft}>
<V1/>
<V2/>
</View>
<View style={s.verticalDominoContainerRight}>
    <V3/>
    <V4/>
</View>
</View>
<View style={s.horizontalDominoContainer}>

<H5/>
<H6/>
<H7/>
<H8/>
</View>
</View>



</>

}