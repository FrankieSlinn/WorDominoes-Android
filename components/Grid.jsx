
import {Text, View} from "react-native";
import{useState} from "react";
import {HorizontalTileTop1} from "./HorizlontalTileTop1";
import {HorizontalTileTop2} from "./HorizontalTileTop2";
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

export function Grid({ dominoRotated, displayDomino, tilePlaced, setTilePlaced, turnStart, setTurnStart,
    wordSubmitted, setWordSubmitted, selectedDominoObject, setSelectedDominoObject, word1Success, setWord1Success, 
    word2Success, setWord2Success,  setDisplayDomino, showMakeWord, setShowMakeWord, numberDominoesInGrid, setNumberDominoesInGrid, 
    dominoesInGrid, setDominoesInGrid
}){





return <>
<View style={s.grid}>
<View style={s.horizontalDominoContainer}>
<HorizontalTileTop1
word2Success={word2Success}
dominoRotated={dominoRotated}
tilePlaced={tilePlaced}
setTilePlaced={setTilePlaced}
displayDomino={displayDomino}
setDisplayDomino={setDisplayDomino}
turnStart = {turnStart}
setTurnStart={setTurnStart}
wordSubmitted = {wordSubmitted}
setWordSubmitted={setWordSubmitted}
selectedDominoObject={selectedDominoObject}
setSelectedDominoObject={setSelectedDominoObject}
word1Success={word1Success}
setWord1Success={setWord1Success}
word2Success={word2Success}
setWord2Success={setWord2Success}
showMakeWord={showMakeWord}
setShowMakeWord={setShowMakeWord}
numberDominoesInGrid={numberDominoesInGrid}
setNumberDominoesOnGrid={setNumberDominoesInGrid}
dominoesInGrid={dominoesInGrid}
setDominoesInGrid={setDominoesInGrid}

/>
<HorizontalTileTop2/>
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