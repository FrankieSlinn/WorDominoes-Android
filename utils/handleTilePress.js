    function handleTilePress(word2Success, tilePlaced, setTilePlaced, setTurnStart, selectedDominoObject, setSelectedDominoObject, setWord1Success, setWord2Success, 
        displayDomino, setDisplayDomino, setShowMakeWord, setWordSubmitted,  topHorizontalTilesInGrid, setTopHorizontalTilesInGrid, 
        topSelectedDominoObjects, setTopSelectedDominoObjects, tileId, 
        tileFullError, setTileFullError, setGameStart, wrongTileError, setWrongTileError,wrongTileErrorInSpecificTile, 
        setWrongTileErrorInSpecificTile, tilePlacedState, setTilePlacedState){
        console.log("tile pressed!!!")
 
        console.log("word2Success", word2Success, "tilePlaced", tilePlaced)
        console.log("tilePlaced", tilePlaced)
        
        //With tiles as objects simpler to update in function
        let tileData = { leftNeighbor: null, rightNeighbor: null, currentTile: null };

        getNeighborsAndCurrentTile(selectedDominoObject, topSelectedDominoObjects, tileId, tileData);
        console.log("currentTile after getNeighbors run", tileData.currentTile);
        setWrongTileError(false);
        setWrongTileErrorInSpecificTile(false);
        setTileFullError(false);
    
    //   if(topSelectedDominoObjects[tileId - 1]){
    //     if(topSelectedDominoObjects[tileId - 1] ==="empty"){
    //         leftNeighbor = "empty";}
    //         else{leftNeighbor= topSelectedDominoObjects[tileId - 1][1]}
    //     }
         
      
    //  if(topSelectedDominoObjects[tileId+1]){
    //     if(topSelectedDominoObjects[tileId + 1] === "empty"){
    //       rightNeighbor = "empty"}
    //      else{rightNeighbor = topSelectedDominoObjects[tileId + 1][0]}
    //     }
      
    //  currentTile = topSelectedDominoObjects[tileId]?.toString();
    //     console.log("leftNeighbor", leftNeighbor, "rightNeighbor", rightNeighbor, "currentTile", currentTile);
    
 
        if(word2Success===true && tilePlaced===false){
            //for individual tile
            if(tilePlacedState===false){
                if (
                    //check If tiles don't match
               
                    ((tileData.currentTile[0] !== tileData.leftNeighbor )&& tileData.leftNeighbor!="empty"&& tileData.leftNeighbor!=null) ||
                
                    ((tileData.currentTile[1] !==tileData.rightNeighbor )&& tileData.rightNeighbor!="empty" && tileData.rightNeighbor!=null)
                ) {
                    console.log(`Setting wrongTileError for tile ${tileId}`);
                    //for generic error message
                    setWrongTileError(true);
                    //for specific tile
                    setWrongTileErrorInSpecificTile(true);
                    console.log("Wrongtile error in HOrizontal tile top", wrongTileError)
                    console.log("Wrongtile error in HOrizontal specific tile", wrongTileErrorInSpecificTile)
                }
            // console.log("condtinuing to validate if domino already in tile in handleTilePress")
            // console.log("topHorizontalTilesInGrid[tileId]", topHorizontalTilesInGrid[tileId])
            // console.log("displayDomino", displayDomino)
            // console.log("topHorizontalTilesInGrid[tileId]===displayDomino", topHorizontalTilesInGrid[tileId]===displayDomino)
            // console.log("!topHorizontalTilesInGrid[tileId]===displayDomino", topHorizontalTilesInGrid[tileId]!=displayDomino)
            else if(topSelectedDominoObjects[tileId]&&topSelectedDominoObjects[tileId]!="empty"){
                console.log("setting tileFullError to true in handleTilePress")
                setTileFullError(true);
            }
            else{

                console.log("topHorizontalTilesInGrid empty, can add tile to it.displaydomino:", displayDomino)
            setTopHorizontalTilesInGrid(prevTiles => 
                prevTiles.map((tile, index) => index === tileId? displayDomino : tile))
                console.log("topHorizontalTilesin grid", topHorizontalTilesInGrid)
            setTopSelectedDominoObjects(prevDominos=>
                prevDominos.map((domino, index) => index===tileId?Object.values(selectedDominoObject): domino)

            )
            
            setTilePlaced(true);
            setTurnStart(true);
            setWordSubmitted(false);
            setSelectedDominoObject("");
            setWord1Success(false);
            setWord2Success(false);
            setDisplayDomino("");
            setShowMakeWord(false);
            setGameStart(true);
            
            }
      
         
                
            

         
            


        }
    }
    }
    function getNeighborsAndCurrentTile(selectedDominoObject, topSelectedDominoObjects, tileId, tileData) {
        if (topSelectedDominoObjects[tileId - 1]) {
            tileData.leftNeighbor = topSelectedDominoObjects[tileId - 1] === "empty" ? "empty" : topSelectedDominoObjects[tileId - 1].toString()[1];
        }
    
        if (topSelectedDominoObjects[tileId + 1]) {
            tileData.rightNeighbor = topSelectedDominoObjects[tileId + 1] === "empty" ? "empty" : topSelectedDominoObjects[tileId + 1].toString()[0];
        }
    
        tileData.currentTile = Object.values(selectedDominoObject).toString();
       console.log("topSelectedDominoObjects[tileId - 1]", topSelectedDominoObjects[tileId - 1])
    
        console.log("!!!!!currentTile[0]", tileData.currentTile[0], "!!!leftNeighbor", tileData.leftNeighbor, "!!!rightNeighbor", tileData.rightNeighbor);
        console.log("left[1]Q==right[0]", tileData.currentTile[1] != tileData.rightNeighbor )
    }

    export{handleTilePress}
