import { View, Image, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style.js";
import { dominoImageMappings } from "../utils/dominoImageMappings.js";
import { handleTilePress } from "../utils/handleTilePress.js";

export function HorizontalTileTop({
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
    console.log("topSelectedDominoObjects", topSelectedDominoObjects);
    console.log("topSelectedDominoObjects[tileId -1]", topSelectedDominoObjects[tileId - 1]);
    console.log("wrongTileError generic", wrongTileError)



    useEffect(() => {
        console.log(`dominoRotated in Tile ${tileId} useEffect`, dominoRotated);
        if (!tilePlacedState) {
            setTileRotatedState(dominoRotated);
        }
    }, [dominoRotated]);

    // //Check to see if tile fits
    // useEffect(() => {
    //     if(tilePlacedState===false){
    //     if (
    //         //check If tiles don't match
       
    //         (currentTile[0] !== leftNeighbor &&leftNeighbor!="empty") &&
        
    //         (currentTile[1] !== rightNeighbor && rightNeighbor!="empty")
    //     ) {
    //         console.log(`Setting wrongTileError for tile ${tileId}`);
    //         //for generic error message
    //         setWrongTileError(true);
    //         //for specific tile
    //         setWrongTileErrorInSpecificTile(true);
    //         console.log("Wrongtile error in HOrizontal tile top", wrongTileError)
    //         console.log("Wrongtile error in HOrizontal specific tile", wrongTileErrorInSpecificTile)
    //     }
        // else{
        // setTopSelectedDominoObjects((prevObjects) =>
        //     prevObjects.map((obj, index) =>
        //       index === tileId ? selectedDominoObject : "empty"
        //     )
        //   );
        // }

    //     if (!tilePlacedState) {
    //         setTilePlacedState(true);
        

    // }
    // }, [currentTile, leftNeighbor, rightNeighbor, setWrongTileError]);

    return (
        <View>
            <TouchableOpacity
                style={[s.horizontalDomino, s.domino]}
                onPress={() => {
                    handleTilePress(
                        word2Success, tilePlaced, setTilePlaced, setTurnStart, selectedDominoObject, setSelectedDominoObject,
                        setWord1Success, setWord2Success, displayDomino, setDisplayDomino, setShowMakeWord,
                        setWordSubmitted, topHorizontalTilesInGrid, setTopHorizontalTilesInGrid, topSelectedDominoObjects, setTopSelectedDominoObjects,
                        tileId, tileFullError, setTileFullError, setGameStart, wrongTileError, setWrongTileError, wrongTileErrorInSpecificTile, 
                        setWrongTileErrorInSpecificTile, tilePlacedState, setTilePlacedState
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
