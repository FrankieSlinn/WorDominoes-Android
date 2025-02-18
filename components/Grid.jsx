
import {Text, View} from "react-native";
import{useState, useEffect} from "react";
import{HorizontalTileTop} from "./HorizontalTileTop";
import {HorizontalTileTop1} from "./HorizontalTileTop1";
import {HorizontalTileTop2} from "./HorizontalTileTop2";
import {HorizontalTileTop3} from "./HorizontalTileTop3";
import {HorizontalTileTop4} from "./HorizontalTileTop4";
import {HorizontalTileBottom1} from "./HorizontalTileBottom1";
import {HorizontalTileBottom2} from "./HorizontalTileBottom2";
import {HorizontalTileBottom3} from "./HorizontalTileBottom3";
import {HorizontalTileBottom4} from "./HorizontalTileBottom4";
import {V1}  from "./V1";
import {V2}  from "./V2";
import {V3}  from "./V3";
import {V4}  from "./V4";
import {s} from "../App.style";

export function Grid({ dominoRotated, displayDomino, tilePlaced, setTilePlaced, turnStart, setTurnStart,
    wordSubmitted, setWordSubmitted, selectedDominoObject, setSelectedDominoObject, word1Success, setWord1Success, 
    word2Success, setWord2Success,  setDisplayDomino, showMakeWord, setShowMakeWord, numberDominoesInGrid, setNumberDominoesInGrid, 
    dominoesInGrid, setDominoesInGrid, topHorizontalTilesInGrid, setTopHorizontalTilesInGrid, tileFullError, setTileFullError, gameStart, setGameStart
}){

    const horizontalTopTileIds = [0, 1, 2, 3]; 

    //Needed to rerender after values changed in handleTilePress function
    useEffect(() => {
        console.log("tilePlaced", tilePlaced, "turnStart", turnStart, "wordSubmitted", wordSubmitted, "selectedDominoObject",
            selectedDominoObject
        )
    }, [tilePlaced])

    console.log("topHorizontalTilesin grid in grid component", topHorizontalTilesInGrid)
    console.log("tile placed in grid component", tilePlaced)
    console.log("selectedDominoObject", selectedDominoObject)







return <>
<View style={s.grid}>
<View style={s.horizontalDominoContainer}>
        {horizontalTopTileIds.map((id) => (
            <HorizontalTileTop
                key={id}
                tileId={id}
                dominoRotated={dominoRotated}
                tilePlaced={tilePlaced} setTilePlaced={setTilePlaced}
                displayDomino={displayDomino}
                turnStart={turnStart} setTurnStart={setTurnStart}
                wordSubmitted={wordSubmitted} setWordSubmitted={setWordSubmitted}
                selectedDominoObject={selectedDominoObject} setSelectedDominoObject={setSelectedDominoObject}
                word1Success={word1Success} setWord1Success={setWord1Success}
                word2Success={word2Success} setWord2Success={setWord2Success}
                setDisplayDomino={setDisplayDomino}
                showMakeWord={showMakeWord} setShowMakeWord={setShowMakeWord}
                dominoesInGrid={dominoesInGrid} setDominoesInGrid={setDominoesInGrid}
                topHorizontalTilesInGrid={topHorizontalTilesInGrid} setTopHorizontalTilesInGrid={setTopHorizontalTilesInGrid}
                numberDominoesInGrid={numberDominoesInGrid} setNumberDominoesInGrid={setNumberDominoesInGrid}
                tileFullError={tileFullError} setTileFullError={setTileFullError}
                gameStart={gameStart} setGameStart={setGameStart}
            />
        ))}
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

<HorizontalTileBottom1/>
<HorizontalTileBottom2/>
<HorizontalTileBottom3/>
<HorizontalTileBottom4/>
</View>
</View>



</>

}