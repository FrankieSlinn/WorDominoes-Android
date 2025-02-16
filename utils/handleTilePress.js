    function handleTilePress(word2Success, tilePlaced, setTilePlaced, setTurnStart, setSelectedDominoObject, setWord1Success, setWord2Success, 
        displayDomino, setDisplayDomino, setShowMakeWord, setWordSubmitted,  topHorizontalTilesInGrid, setTopHorizontalTilesInGrid, tileId, tileFullError, setTileFullError){
        console.log("tile pressed!!!")
 
        console.log("word2Success", word2Success, "tilePlaced", tilePlaced)
        console.log("tilePlaced", tilePlaced)
    
 
        if(word2Success===true && tilePlaced===false){
            // console.log("condtinuing to validate if domino already in tile in handleTilePress")
            // console.log("topHorizontalTilesInGrid[tileId]", topHorizontalTilesInGrid[tileId])
            console.log("displayDomino", displayDomino)
            // console.log("topHorizontalTilesInGrid[tileId]===displayDomino", topHorizontalTilesInGrid[tileId]===displayDomino)
            // console.log("!topHorizontalTilesInGrid[tileId]===displayDomino", topHorizontalTilesInGrid[tileId]!=displayDomino)
            if(topHorizontalTilesInGrid[tileId]==="empty"){

                console.log("topHorizontalTilesInGrid empty, can add tile to it.displaydomino:", displayDomino)
            setTopHorizontalTilesInGrid(prevTiles => 
                prevTiles.map((tile, index) => index === tileId? displayDomino : tile))
                console.log("topHorizontalTilesin grid", topHorizontalTilesInGrid)
            
            setTilePlaced(true);
            setTurnStart(true);
            setWordSubmitted(false);
            setSelectedDominoObject(null);
            setWord1Success(false);
            setWord2Success(false);
            setDisplayDomino("");
            setShowMakeWord(false);
            }
            else{
                console.log("setting tileFullError to true in handleTilePress")
                setTileFullError(true);
                
            }

         
            


        }
    }

    export{handleTilePress}
