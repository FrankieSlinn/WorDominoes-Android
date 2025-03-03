import { View, Image, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style.js";
import { dominoImageMappings } from "../utils/dominoImageMappings.js";
import { handleTilePress } from "../utils/handleTilePress.js";

export function HorizontalTileBottom({
    tileId, 
    dominoRotated, tilePlaced, setTilePlaced, displayDomino,  setTurnStart,
  setWordSubmitted, selectedDominoObject, setSelectedDominoObject,
   setWord1Success, word2Success, setWord2Success, setDisplayDomino,
    showMakeWord, setShowMakeWord, dominoesInGrid, setDominoesInGrid,
  

    dominoIdsInGrid, setDominoIdsInGrid,
    numberDominoesInGrid, setNumberDominoesInGrid, tileFullError, setTileFullError,
    gameStart, setGameStart, gridSelectedDominoObjects, setGridSelectedDominoObjects, 
    wrongTileError, setWrongTileError
}) {
    //Only applies to this tile
    const [tilePlacedState, setTilePlacedState] = useState(false);
    //Only applies to this tile
    const [tileRotatedState, setTileRotatedState] = useState(false);
    const[wrongTileErrorInSpecificTile, setWrongTileErrorInSpecificTile] = useState(false);
    console.log("electedDominoObject", selectedDominoObject);




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
                style={[s.horizontalDomino, s.domino]}
                onPress={() => {
                    handleTilePress(
                        word2Success,
                        tilePlaced,
                        setTilePlaced,
                        setTurnStart,
                        selectedDominoObject,
                        displayDomino,
                        setDisplayDomino,
                        setShowMakeWord,
                        setWordSubmitted,
                        dominoIdsInGrid,
                        setDominoIdsInGrid,
                        gridSelectedDominoObjects,
                        setGridSelectedDominoObjects,
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
                        source={dominoImageMappings[dominoIdsInGrid[tileId]]}
                        style={[s.selectedTile, s.selectedTileHOrizontal, s.selectedTileUnrotated]}
                        resizeMode="cover"
                    />
                ) : (
                    <Image
                        source={dominoImageMappings[dominoIdsInGrid[tileId]]}
                        style={[s.selectedTile, s.selectedTileHorizontal, s.selectedTileRotated]}
                        resizeMode="cover"
                    />
                )}
            </TouchableOpacity>
        </View>
    );
}

