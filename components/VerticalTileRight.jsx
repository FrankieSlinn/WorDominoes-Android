import { View, Image, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style.js";
import { dominoImageMappings } from "../utils/dominoImageMappings.js";
import { handleTilePress } from "../utils/handleTilePress.js";

export function VerticalTileRight({
    tileId, 
    dominoRotated, tilePlaced, setTilePlaced, displayDomino, turnStart, setTurnStart,
    wordSubmitted, setWordSubmitted, selectedDominoObject, setSelectedDominoObject,
    word1Success, setWord1Success, word2Success, setWord2Success, setDisplayDomino,
    showMakeWord, setShowMakeWord, dominoesInGrid, setDominoesInGrid,
    topHorizontalTilesInGrid, setTopHorizontalTilesInGrid,
    numberDominoesInGrid, setNumberDominoesInGrid, tileFullError, setTileFullError,
    gameStart, setGameStart, topSelectedDominoObjects, setTopSelectedDominoObjects, 
    wrongTileError, setWrongTileError
}) {
    //Only applies to this tile
    const [tilePlacedState, setTilePlacedState] = useState(false);
    //Only applies to this tile
    const [tileRotatedState, setTileRotatedState] = useState(false);
    const[wrongTileErrorInSpecificTile, setWrongTileErrorInSpecificTile] = useState(false);
    console.log("electedDominoObject", selectedDominoObject);
    console.log("topSelectedDominoObjects[tileId -1]", topSelectedDominoObjects[tileId - 1]);
    console.log("wrongTileError generic", wrongTileError)



    useEffect(() => {
        console.log(`dominoRotated in Tile ${tileId} useEffect`, dominoRotated);
        console.log("tileplaced state in domino rotation prevention in tile", tilePlacedState)
        if (!tilePlacedState) {
            setTileRotatedState(dominoRotated);
        }
    }, [dominoRotated]);


    return (
        <View>
            <TouchableOpacity
                style={[s.verticalDomino, s.domino]}
                onPress={() => {
                    handleTilePress(
                        word2Success,
                        tilePlaced,
                        setTilePlaced,
                        setTurnStart,
                        selectedDominoObject,
                        setWord2Success,
                        displayDomino,
                        setDisplayDomino,
                        setShowMakeWord,
                        setWordSubmitted,
                        topHorizontalTilesInGrid,
                        setTopHorizontalTilesInGrid,
                        topSelectedDominoObjects,
                        setTopSelectedDominoObjects,
                        tileId,
                        tileFullError, 
                        setTileFullError,
                        setGameStart,
                        wrongTileError,
                        setWrongTileError,
                        wrongTileErrorInSpecificTile,
                        setWrongTileErrorInSpecificTile,
                        tilePlacedState,
                        setTilePlacedState,
                        dominoRotated
                    );

              
                }}
            >
                {
                    wrongTileErrorInSpecificTile?
              null
                 
                
                :!tileRotatedState ? (
                    <Image
                        source={dominoImageMappings[topHorizontalTilesInGrid[tileId]]}
                        style={[s.selectedTile, s.selectedTileUnrotated]}
                        resizeMode="cover"
                    />
                ) : (
                    <Image
                        source={dominoImageMappings[topHorizontalTilesInGrid[tileId]]}
                        style={[s.selectedTile, s.selectedTileRotated]}
                        resizeMode="cover"
                    />
                )}
            </TouchableOpacity>
        </View>
    );
}
