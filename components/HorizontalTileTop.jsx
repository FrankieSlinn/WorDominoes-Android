import { View, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { s } from "../App.style.js";
import { dominoImageMappings } from "../utils/dominoImageMappings.js";
import { handleTilePress } from "../utils/handleTilePress.js";

export function HorizontalTileTop({
    tileId, // Now tileId is dynamic
    dominoRotated, tilePlaced, setTilePlaced, displayDomino, turnStart, setTurnStart,
    wordSubmitted, setWordSubmitted, selectedDominoObject, setSelectedDominoObject,
    word1Success, setWord1Success, word2Success, setWord2Success, setDisplayDomino,
    showMakeWord, setShowMakeWord, dominoesInGrid, setDominoesInGrid,
    topHorizontalTilesInGrid, setTopHorizontalTilesInGrid,
    numberDominoesInGrid, setNumberDominoesInGrid, tileFullError, setTileFullError,
    gameStart, setGameStart
}) {
    // Unique state per tile
    const [tilePlacedState, setTilePlacedState] = useState(false);
    const [tileRotatedState, setTileRotatedState] = useState(false);

    useEffect(() => {
        console.log(`dominoRotated in Tile ${tileId} useEffect`, dominoRotated);
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
                        word2Success, tilePlaced, setTilePlaced, setTurnStart, setSelectedDominoObject,
                        setWord1Success, setWord2Success, displayDomino, setDisplayDomino, setShowMakeWord,
                        setWordSubmitted, topHorizontalTilesInGrid, setTopHorizontalTilesInGrid,
                        tileId, tileFullError, setTileFullError, setGameStart
                    );

                    if (!tilePlacedState) {
                        setTilePlacedState(true);
                    }
                }}
            >
                {
                    !tileRotatedState ? (
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
                    )
                }
            </TouchableOpacity>
        </View>
    );
}
