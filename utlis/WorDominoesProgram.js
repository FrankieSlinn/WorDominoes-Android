

//***GAME SETUP***//

//Game Pieces

let dominoes = [
    { d1: 22 },
    { d2: 23 },
    { d3: 24 },
    { d4: 25 },
    { d5: 26 },
    { d6: 32 },
    { d7: 33 },
    { d8: 34 },
    { d9: 35 },
    { d10: 36 },
    { d11: 43 },
    { d12: 44 },
    { d13: 45 },
    { d14: 46 },
    { d15: 53 },
    { d16: 54 },
    { d17: 55 },
    { d18: 56 },
    { d19: 62 },
    { d20: 63 },
    { d21: 64 },
    { d22: 65 },
    { d23: 66 },
  ];
  let letters = [
    "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E",
    "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I",
    "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N",
    "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R",
    "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X",
    "Y", "Y", "Z", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D",
    "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H",
    "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N",
    "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R",
    "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V",
    "W", "W", "X", "Y", "Y", "Z"
  ];
  //array for domino values for each space on grid
  let gridValues = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  //tiles on domino grid
  let gridTiles = [
    ".domGrid1",
    ".domGrid2",
    ".domGrid3",
    ".domGrid4",
    ".domGrid5",
    ".domGrid6",
    ".domGrid7",
    ".domGrid8",
    ".domGrid9",
    ".domGrid10",
    ".domGrid11",
    ".domGrid12",
  ];
  //letter tiles
  let tiles = [
    ".tile1",
    ".tile2",
    ".tile3",
    ".tile4",
    ".tile5",
    ".tile6",
    ".tile7",
    ".tile8",
    ".tile9",
    ".tile10",
    ".tile11",
    ".tile12",
    ".tile13",
    ".tile14",
    ".tile15",
  ];
  let dominoHandDisplayClasses = [".dom1", ".dom2", ".dom3", ".dom4"];
  
  //Define Initial Parameters
  
  //dictionary for words the dictionary api doesn't validate
  let dictionary = ["is", "be", "was", "look"];
  //current tile
  let currentGridValue = 0;
  //array of four. 0: end of last tile 1: beginning of current tile 2: end of current tile 3: beginning of next tile
  let gridValueCompare = [];
  let dominoHand = [];
  let domHandValues = [];
  //dominoes set up as objects in game setup. The value is the amount of dominoes on each side.
  let domHandKeys = [];
  //keys for second time dommino chosen
  let domHandKeys1 = [];
  let chosenKey = [];
  let domKey = "";
  let domHandFirst = [];
  let domLeft = "";
  let domRight = "";
  let selectedDomino = false;
  let dominoesUsed = [];
  let letterHand = [];
  let secondWord = "";
  let firstWordText = "";
  let secondWordText = "";
  let firstWordValid = false;
  let secondWordValid = false;
  let gridTilesi = "";
  let gridValuesi = [];
  //let wordText = "";
  let wordNumber = 1;
  let firstProg = false;
  let lettersUsed1 = [];
  let lettersUsed2 = [];
  let lettersUsedBoth = [];
  let pngName = "";
  let chosenName = "";
  let domindex = 0;
  //first & second digits of domino
  let order = 0;
  let lettersWord1 = 0;
  let lettersWord2 = 0;
  //values that define whether grid is full or no
  let chosenNums = [];
  let firstGo = true;
  //indicates if a new tile can be placed
  let blockPlaceTile = true;
  let turns = 1;
  let dominoesPlaced = 0;
  let rotated = false;
  let lettersWord1Temp = 0;
  let lettersWord2Temp = 0;
  let testExport = "testExport works!!!";
  let score = 0;
  let dominoPlaced = false;
  let wordDomination = false;
  let letterHandLength = 15;
  let delButtonActive = false;
  let delLength;
  
  //**DOM Shortcuts***//
  
  let hallOfFame = document.querySelector(".hallOfFame");
  let hallOfFameMessage = document.querySelector(".hallOfFameMessage");
  let submitHOFBut = document.querySelector(".submitHOFBut");
  let createWordGrid = document.querySelector(".createWordGrid");
  let wordText = document.querySelector(".wordText");
  let wordText1 = document.querySelector(".wordText1");
  let wordText2 = document.querySelector(".wordText2");
  let buttons1 = document.querySelector(".buttons1");
  let buttons2 = document.querySelector(".buttons1");
  let giveUp = document.querySelector(".giveUp");
  let giveUpContainer = document.querySelector(".giveUpContainer");
  let submit = document.querySelector(".submit");
  let submit1 = document.querySelector(".submit1");
  let submit2 = document.querySelector(".submit2");
  let redo = document.querySelector(".redo");
  let redo1But = document.querySelector(".redo1But");
  let redo2But = document.querySelector(".redo2But");
  let wordInstruct = document.querySelector(".wordInstruct");
  let word1Instruct = document.querySelector(".word1Instruct");
  let word2Instruct = document.querySelector(".word2Instruct");
  let placeDomInstruct = "Select letter tiles below to make the word";
  let chosenDom = document.querySelector(".chosenDom");
  let reverseOrder = document.querySelector(".reverseOrder");
  let instruction = document.querySelector(".instruction");
  let instructionCenter = document.querySelector(".instructionCenter");
  let scoresStats = document.querySelector(".scoresStats");
  let deleteButton = document.querySelector(".deleteButton");
  let newGame = document.querySelector(".newGame");
  let newGameContainer=document.querySelector(".newGameContainer");
  
  //***SET DISPLAY IN THE BEGINNING***//
  setInitialDisplay()
  function setInitialDisplay(){
    console.log("set initial display running")
  hallOfFame.style["display"] = "none";
  createWordGrid.style["display"] = "none";
  document.querySelectorAll(".wordText").forEach((item) => {
    item.style["display"] = "none";
  });
  document.querySelector(".wordText1").classList.add("placeholder");
  document.querySelector(".wordText2").classList.add("placeholder");
  buttons1.style["display"] = "none";
  buttons2.style["display"] = "none";
  instruction.innerText="Follow the instructions below and fill the grid with dominoes to achieve Word Domination."
  instruction.style["display"] = "inline-block";
  addBlankLine();
  instructionCenter.innerText="Choose a domino above. You'll create 2 words for this tile: the word length is the number of dots on its side of the domino."
  newGameContainer.style["display"] = "none";
  firstGo=true;
  }
  
  //***SCROLLING BEHAVIOURS***//
  
  // This function scrolls the user to the top of the page
  function scrollToTop() {
    console.log("Scroll to top working");
    window.scrollTo({
      top: 25,
      behavior: "smooth", // You can also use 'auto' or 'instant'
    });
  }
  
  //Scroll to just past first third of page
  function scrollToMiddleThird() {
    const screenHeight = window.innerHeight;
    const scrollToPosition = screenHeight / 2; // Scroll to a position between 1/3 and 2/3 of the screen
  
    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }
  
  //Ensures focus on top of the screen after refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  document.querySelector("html").style.scrollBehavior = "";
  
  //***SET SCORES IN THE BEGINNING***//
  console.log("title", document.querySelector("title"));
  console.log("HOFTitle", document.querySelector(".HOFTitle"));
  
  let averageScore = 0;
  //check if any games played via length of scores array.
  //If the array length is greater than zero, display the length otherwise display "games played" as "0"
  let gamesPlayed = JSON.parse(localStorage.getItem("longGameScores"))
    ? JSON.parse(localStorage.getItem("longGameScores")).length
    : 0;
  //**API CALL TO GET MINIMUM HALL OF FAME SCORE***//
  //API to get minimum value
  // Define the URL for the API endpoint
  const apiUrl = "http://localhost:3000/minimums"; // Replace with your actual API URL
  let minHOFScore; // Declare minHOFScore in a scope accessible to the entire program
  
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse response JSON
    })
    .then((responseData) => {
      // Handle the response data
      console.log("Response Data:", responseData);
      minHOFScore = responseData.minvalue[0].minvalue;
      console.log("minHOFScore", minHOFScore);
  
      // You can use minHOFScore here or assign it to other variables/functions
      // Example: myFunction(minHOFScore);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Fetch Error:", error);
      // Handle the error in your application as needed
    });
  console.log("minHOFScore just after API", minHOFScore);
  
  //score of last game played
  let gameScore = 0;
  
  //show a zero value for the game score if no games played
  if (JSON.parse(localStorage.getItem("gameScore")) == null) {
    //ensure a zero appears in stats in the beginning if user hasn't played games
    gameScore = 0;
    localStorage.setItem("gameScore", JSON.stringify(0));
  }
  
  //calculate average score if any games played
  function calcAverage() {
    if (JSON.parse(localStorage.getItem("longGameScores"))) {
      averageScore =
        JSON.parse(localStorage.getItem("longGameScores")).length != 0
          ? JSON.parse(localStorage.getItem("longGameScores")).reduce(
              (numa, numb) => numa + numb,
              0
            ) /
            JSON.parse(localStorage.getItem("longGameScores")).length.toFixed(0)
          : 0;
    } else {
      averageScore = 0;
    }
  }
  
  calcAverage();
  
  //store average score in local storage
  window.localStorage.setItem("averageScore", JSON.stringify(averageScore));
  
  //***UPDATE SCORES***/
  
  //Update Scores when givUp Button selected
  function calcScore(gridValues) {
    for (let i = 0; i < gridValues.length; i++) {
      score += gridValues[i][0];
      score += gridValues[i][1];
    }
    console.log("wordDomination, score before 30 added in calcscore", wordDomination, score);
    wordDomination == true ? (score = score + 30) : (score = score);
    console.log("score after 30 added for calcsore", score);
    //!!!important for getting score registered / in the HoF
    document.getElementById("score").value = score;
    //store score in local storage
    localStorage.setItem("gameScore", JSON.stringify(score));
  }
  
  //update scores in statistics after a game has been played
  //longGameScores for first turn JSON.parse(localStorage.getItem("longGameScores")); after longGameScores in local storage
  function updateScores() {
    let gameScore = JSON.parse(localStorage.getItem("gameScore"));
    console.log("gameScore", gameScore);
    //Add the latest score to the array of scores
    longGameScores =
      //check if longGameScores in local storage
      JSON.parse(localStorage.getItem("longGameScores"))
        ? //if not push latest score to array that isn't in local storage
          JSON.parse(localStorage.getItem("longGameScores")).concat([gameScore])
        : //otherwise push the latest score to the array that is in local storage
          [score];
  
    //Store the updated array in local storage
    localStorage.setItem("longGameScores", JSON.stringify(longGameScores));
  
    //define averageScore after change
  
    calcAverage();
    //amend stats message after score change
    //populate with last game score if that exists
    displayScoresInStatsPopup();
  }
  
  //**GENERAL DISPLAY FUNCTIONS***//
  function addBlankLine() {
    instruction.style["margin-bottom"] = "1.5rem";
  }
  
  //***NAVIGATION REGION BUTTONS***//
  function displayScoresInStatsPopup() {
    scoresStats.innerHTML = `WorDominoes Game Score: <strong>${
      JSON.parse(localStorage.getItem("longGameScores"))
        ? JSON.parse(localStorage.getItem("longGameScores"))[
            JSON.parse(localStorage.getItem("longGameScores")).length - 1
          ]
        : 0
    }
    </strong><br><br>Games Played: <strong>${gamesPlayed}</strong><br><br>Average Score: <strong>${averageScore.toFixed(
      0
    )}</strong><br/><br><a href="https://www.wordominoes.net">wordominoes.net</a>`;
  }
  displayScoresInStatsPopup();
  
  //Ensures the active popup is displayed and remaining content hidden.
  function displayPopup(inactivePopup, activePopup) {
    document.querySelector(`.${inactivePopup}`).style["display"] = "none";
    document.querySelector(".overallContainer").style["display"] = "none";
    document.querySelector(".overallContainer").style["z-index"] = "-1";
    document.querySelector(`.${activePopup}`).style["display"] = "inline-block";
  }
  function hidePopup(closedPopup) {
    document.querySelector(".overallContainer").style["display"] = "inline";
    document.querySelector(".overallContainer").style["z-index"] = "1";
    document.querySelector(`.${closedPopup}`).style["display"] = "none";
  }
  
  //Show Popup Content - Stats
  document.querySelector(".stats").addEventListener("click", function () {
    displayPopup("helpContent", "statsContent");
  });
  
  //Close Button - Stats
  document
    .querySelector(".closeButtonStats")
    .addEventListener("click", function () {
      hidePopup("statsContent");
    });
  
  //Show Popup Content - Help
  document.querySelector(".help").addEventListener("click", function () {
    displayPopup("statsContent", "helpContent");
  });
  
  //Close Button - Help
  document
    .querySelector(".closeButtonHelp")
    .addEventListener("click", function () {
      hidePopup("helpContent");
    });
  
  //Generate a Random Number within the range of the dominoes available
  function randomNumberDom() {
    return Math.abs(Math.floor(Math.random() * (dominoes.length - 1)));
  }
  
  //generate first domino hand
  if (firstGo) {
    for (let i = 0; i < 4; i++) {
      const randDomino = dominoes[randomNumberDom()];
      dominoHand.push(randDomino);
      dominoes.splice(dominoes.indexOf(randDomino), 1);
      dominoesUsed.push(randDomino);
    }
    //Flag that it isn't the user's first turn
    firstGo = false;
  }
  
  //displayDominoes
  for (let i = 0; i < dominoHand.length; i++) {
    //dominoes set up as objects in game setup. The key is the domino name. The value is the amount of dominoes on each side.
    domHandKeys.push(...Object.keys(dominoHand[i]));
  
    //domino image name and its style
    let pngName =
      "<img src = Images/" +
      domHandKeys[i] +
      '.png  style="width:30px;height:60px;">';
    //assign domino image and style to domino in hand to display domino
    if (document.querySelector(dominoHandDisplayClasses[i]))
      document.querySelector(dominoHandDisplayClasses[i]).innerHTML = pngName;
  }
  function initialDisplayChangeAfterDominoSelected(
    j,
    lettersWord1,
    lettersWord2
  ) {
    document.querySelector(".instructionCenter").innerHTML =
      "Now make two words with the same amount of letters as the domino dots so you can place this domino";
    //remove rows from grid
    createWordGrid.style["grid-template-rows"] = "1.5rem 3rem";
    createWordGrid.style["grid-template-columns"] = "1fr 1fr";
    document.querySelector(".wordText1").style["display"] = "inline-block";
    redo1But.style["display"] = "inline-block";
    document.querySelector(".buttons1").style["display"] = "inline-block";
    word1Instruct.style["display"] = "inline-block";
    document.querySelector(".wordText1").innerHTML = placeDomInstruct;
    document.querySelector(".wordText2").style["display"] = "none";
    document.querySelector(".wordText2").style["backgroundColor"] = "none";
    document.querySelector(".wordText2").style["visibility"] = "hidden";
    document.querySelector(".instruction").style["display"] = "none";
    document.querySelector(".wordText1").style["display"] = "inline-block";
    document.querySelector(".word2Instruct").style["display"] = "none";
    document.querySelector(".wordText2").style["display"] = "none";
    document.querySelector(".giveUp").style["display"] = "inline-block";
    document.querySelector(".wordText2").style["display"] = "none";
    document.querySelector(".submit1").style["display"] = "inline-block";
    document.querySelector(".wordText2").classList.add("placeholder");
    document.querySelector(".wordText").style["background-color"] = "#ABABAB";
    document.querySelector(".wordText2").innerHTML =
      "Select letter tiles below to make the word";
    document.querySelector(".chosenDom").style["display"] = "inline-block";
    document.querySelector(".handLetters").style["display"] = "inline-block";
    document.querySelector(dominoHandDisplayClasses[j]).style["display"] = "none";
    document.querySelector(
      ".word1Instruct"
    ).innerHTML = `Make a word with ${lettersWord1} letters`;
    document.querySelector(
      ".word2Instruct"
    ).innerHTML = `Make a word with ${lettersWord2} letters`;
  }
  function displaySelectedDomino(domKey) {
    //ensure tile has correct orientation settings
    rotated = false;
    //create HTML for domino image and style
    chosenName =
      "<img src = Images/" + domKey + '.png style="width:50px;height:100px;">';
    //populate chosen domino element with the HTML
    document.querySelector(".chosenDom").innerHTML = chosenName;
  }
  
  function getWordLengths(domHandValues) {
    //shows amount of letters for word 1
    lettersWord1 = String(domHandValues[0])[0];
    //shows amount of letters for word 2
    lettersWord2 = String(domHandValues[0])[1];
  }
  function selectedDominoParameterChanges(j) {
    //Create array of word lengths from domino for each side
    domHandValues.push(...Object.values(dominoHand[j]));
    //domino name
    chosenKey.push(...Object.keys(dominoHand[j]));
    dominoHand.splice(j, 1);
    domKey = String(chosenKey);
    //flag that a dominoe has been selected
    selectedDomino = true;
  }
  
  //user selects domino
  
  //get selectedDominoValue/
  let manageDominoSelectedChanges = function () {
  
    for (let j = 0; j < dominoHand.length; j++) {
      console.log("selectedDomino", selectedDomino);
      console.log(dominoHandDisplayClasses[j])
      if (document.querySelector(dominoHandDisplayClasses[j]))
        //check if a domino has been selected from the hand by a user
        document
          .querySelector(dominoHandDisplayClasses[j])
          .addEventListener("click", function () {
            if(selectedDomino==false){
            selectedDomino=true;
            //run parameter changes needed after domino selected
            selectedDominoParameterChanges(j);
            //display the chosen domino above the word creation section
            displaySelectedDomino(domKey);
            getWordLengths(domHandValues);
            //layout changes to enable word creation
            initialDisplayChangeAfterDominoSelected(
              j,
              lettersWord1,
              lettersWord2
            );
            //display letter tiles
            showLetters();
            //move screen down where words can be created
            scrollToMiddleThird();
            }
            
          });
    }
  }
  
  
  if (selectedDomino==false){manageDominoSelectedChanges()};
  //push letter selected from random letter into letter hand
  function pushLettersIntoHand() {
    let randLetter = randomNumLetters();
    letterHand.push(letters[randLetter]);
    letters.splice(randLetter, 1);
  }
  
  //generate first letter hand
  function randomNumLetters() {
    return Math.abs(Math.floor(Math.random() * letters.length) - 1);
  }
  for (let i = 0; i < letterHandLength; i++) {
    pushLettersIntoHand();
  }
  console.log("letterHandin beginning", letterHand);
  console.log("letters after splice", letters);
  //populate letter tiles
  function showLetters() {
    for (let i = 0; i < letterHand.length; i++) {
      document.querySelector(tiles[i]).innerHTML = `${letterHand[
        i
      ].toUpperCase()}`;
      document.querySelector(tiles[i]).classList.remove("inactive");
    }
  }
  
  //Make Word 1st field
  
  makeWordProcessLetters();
  
  function makeWordDisplay(wordLetters, wordTextElement, tileNum, buttons) {
    document.querySelector(wordTextElement).classList.remove("placeholder");
    document.querySelector(".createWordGrid").style["display"] = "inline-block";
    document.querySelector(".instructionCenter").innerHTML =
      "Now make two words with the same amount of letters as the domino dots so you can place this domino";
    document.querySelector(buttons).style["display"] = "inline-block";
  
    // document.querySelector(tiles[i]).style["display"] = "none";
    document.querySelector(tiles[tileNum]).classList.add("inactive");
  }
  //Delete last letter functionality
  document.querySelector(".deleteButton").addEventListener("click", (e) => {
    deleteClicked()
  });
  
  function makeWordProcessLetters() {
    //ensure input text starts blank
    firstWordText = "";
    secondWordText = "";
  
    for (let tileNum = 0; tileNum < 15; tileNum++) {
      if (document.querySelector(tiles[tileNum]))
        document
          .querySelector(tiles[tileNum])
          .addEventListener("click", function (event) {
            //as a safety check make sure no tiles are inactive.
            if (
              !document
                .querySelector(tiles[tileNum])
                .classList.contains("inactive")
            ) {
              //wordNumber indicates if the word is the first or second
              if (wordNumber == 1) {
                //letter selected added to placeholder text
                firstWordText += letterHand[tileNum];
                console.log(
                  "firstWordText.length just after letter tile added",
                  firstWordText.length
                );
  
                // console.log("in createword b4 function delete button false", delButtonActive)
  
                delLength = firstWordText.length;
                //this looks to work
                console.log("delLength before eventlistener", delLength);
  
                // deleteButton.removeEventListener("click", deleteClicked())
  
                //placeholder text added to wordText1innerHTML
                document.querySelector(".wordText1").innerHTML = firstWordText;
  
                console.log("firstWordText in make word", firstWordText);
                //function for display changes
                makeWordDisplay(wordText1, ".wordText1", tileNum, ".buttons1");
                //push letters used(now inactive) to array. If word needs to be redone the array can be
                //processed to remove inactive class from these
                lettersUsed1.push(tiles[tileNum]);
              }
              if (wordNumber == 2) {
                console.log("wordNumber 2");
                secondWordText += letterHand[tileNum];
                document.querySelector(".wordText2").innerHTML = secondWordText;
                makeWordDisplay(wordText2, ".wordText2", tileNum, ".buttons2");
                lettersUsed2.push(tiles[tileNum]);
                redoWord();
              }
            }
          });
    }
  }
  function deleteClicked() {
    console.log("first delete function running");
    //process depending which word being handled(first or second)
    if (wordNumber == 1) {
      console.log("firstword in delete", firstWordText);
      makeDeleteLetterChanges(wordNumber, firstWordText, lettersUsed1, ".wordText1");
    } else if (wordNumber == 2) {
      makeDeleteLetterChanges(
        wordNumber,
        secondWordText,
        lettersUsed2,
        ".wordText2"
      );
    }
  }
  
  function makeDeleteLetterChanges(
    wordNumber,
    numWordText,
    lettersUsedNum,
    wordTextSelector
  ) {
    console.log("run makeDeleteLetterChanges");
    //remove last letter from string and assign to temp value
    let wordTextTemp = numWordText.slice(0, -1);
    console.log("wordTextTemp", wordTextTemp);
    //from temp value create new string
    numWordText = wordTextTemp;
    console.log("numWordText", numWordText);
    //display string in input field element as innerHTML
    document.querySelector(wordTextSelector).innerHTML = numWordText;
    console.log("wordTextSelector.innerHTML", wordTextSelector.innerHTML);
    //empty temp value so this can be reused
    wordTextTemp = "";
   
    //If array of letters used not empty assign the "last letter" variable to the
    //letter tile for the last letter of the array
    lettersUsedNum != null
      ? (lastLetter = lettersUsedNum[lettersUsedNum.length - 1])
      : (lastLetter = "");
    //if the last letter in the array exists remove the inactive class from it.
    if (lastLetter) {
      document.querySelector(lastLetter).classList.remove("inactive");
    }
    //remove the last letter in the letters used array
    lettersUsedNum.pop();
    console.log(lettersUsedNum);
    //reset last letter variable
    lastLetter = "";
    //assign shortened text to text variable for first and second words
     wordNumber==1?firstWordText=numWordText:secondWordText=numWordText;
    // wordTextSelector.innerHTML = numWordText;
  }
  redoWord();
  
  //redo word
  function redoWord() {
    let redoButton = `.redo${wordNumber}But`;
  
    let letterText = `.wordText${wordNumber}`;
    document.querySelector(redoButton).addEventListener("click", function () {
      document.querySelector(letterText).classList.add("placeholder");
      document.querySelector(letterText).innerHTML =
        "Select letter tiles below to make the word";
      if (wordNumber == 1) {
        document.querySelector(
          ".word1Instruct"
        ).innerHTML = `Make a word with ${lettersWord1} letters`;
      } else {
        document.querySelector(
          ".word2Instruct"
        ).innerHTML = `Make a word with ${lettersWord2} letters`;
      }
  
      clearLetters();
    });
  }
  
  //remove inactive class from letters, set letter string to empty and clear lettersUsed arrays
  function clearLetters() {
    console.log("clearLetters running");
    console.log("word number", wordNumber);
    if (wordNumber == 1) {
      lettersUsed1.forEach((item) =>
        document.querySelector(`${item}`).classList.remove("inactive")
      );
      firstWordText = "";
      document.querySelector(".wordText1").innerHTML = firstWordText;
  
      lettersUsed1 = [];
    } else if (wordNumber == 2) {
      lettersUsed2.forEach((item) =>
        document.querySelector(`${item}`).classList.remove("inactive")
      );
      secondWordText = "";
      document.querySelector(".wordText2").innerHTML = secondWordText;
      lettersUsed2 = [];
    }
  }
  
  //display after first word successfully validated
  function firstWordCompleteDisplayChanges() {
    document.querySelector(".word1Instruct").innerHTML = "Valid Word";
    document.querySelector(".buttons1").style["display"] = "none";
    document.querySelector(".buttons2").style["display"] = "inline-block";
    document.querySelector(".wordText2").style["display"] = "inline-block";
    document.querySelector(".wordText2").style["visibility"] = "visible";
    document.querySelector(".wordText2").classList.add("placeholder");
    document.querySelector(
      ".word2Instruct"
    ).innerHTML = `Make a word with ${lettersWord2} letters`;
    document.querySelector(".word2Instruct").style["display"] = "Inline-block";
    secondWordText = "";
  }
  //display after both words validated - word area disappears and user is navigated to the domino grid.
  function secondWordCompleteDisplayChanges() {
    document.querySelector(".wordInstruct").style["display"] = "none";
    document.querySelector(".redo").style["display"] = "none";
    document.querySelector(".submit").style["display"] = "none";
    wordText.style["display"] = "none";
    document.querySelector(".wordText2").style["display"] = "none";
    word2Instruct.style["display"] = "none";
    createWordGrid.style["display"] = "none";
    document.querySelector(".instructionCenter").innerHTML =
      "<strong>Congratulations, you won a tile! <br><br>Click on a space in the domino grid on the top to place your tile. Remember: dominoes can only be placed next to each other if they have the same number of dots on their connecting sides.<br><br><p>To rotate, click on the domino above.</p></strong>";
    scrollToTop();
    //for instructions to show appropriate messages
    //around domino needing to be placed
    dominoPlaced = false;
    dominoSelected=false;
    //Ensures domino tile selected is displayed under the grid
    reverseOrder.style["flex-direction"] = "column-reverse";
    reverseOrder.style["margin-top"] = "-0.8rem";
    chosenDom.style["margin-bottom"] = "-1.5rem";
    firstWordText = "";
    secondWordText = "";
    document.querySelector(".buttons2").style["display"] = "none";
    document.querySelector(".handLetters").style["display"] = "none";
  }
  //generic changes required if a word is not correct for any reason
  function wordNotCorrect(wordNumber) {
    let inputText = `.wordText${wordNumber}`;
    document.querySelector(inputText).innerHTML = "";
    clearLetters();
  }
  //Displays word length not correct message
  function wordLengthIncorrect(wordNumber) {
    let wordInstructText = `.word${wordNumber}Instruct`;
    document.querySelector(
      wordInstructText
    ).innerHTML = `Not the right number of letters. The word needs ${wordNumber==1?lettersWord1:lettersWord2} letters.`;
    //display changes for incorrect word
    wordNotCorrect(wordNumber);
  }
  //display when word not found in dictionaries
  function invalidWord(wordNumber) {
    let wordInstructText = `.word${wordNumber}Instruct`;
    document.querySelector(wordInstructText).innerHTML =
      "Not a Valid Word. Try Again.";
    wordNotCorrect(wordNumber);
  }
  
  function validateWord(validationInformation) {
    console.log("response in 1", this.responseText);
    if (
      //check valid word(length of response isn't equal to error message length) - valid word
      // or check that word in exception words(is / be) dictionary - valid word
      //check number of letters is correct
  
      (validationInformation != 14 ||
        dictionary.includes(document.querySelector(".wordText1").innerHTML)) &&
      document.querySelector(".wordText1").innerHTML.length == lettersWord1
    ) {
      //if conditions met the word is valid
      firstWordCompleteDisplayChanges();
      wordNumber = 2;
    } else if (
      //check if first word has the same amount of letters as the side of the domino tile(lettersWord1)
      document.querySelector(".wordText1").innerHTML.length !==
      Number(lettersWord1)
    ) {
      //scenario letter numbers entered doesn't match domino value
      wordLengthIncorrect(1);
      wordNumber = 1;
      // wordNotCorrect(1);
    } else {
      //The first word isn't valid
      invalidWord(1);
      wordNumber = 1;
      // wordNotCorrect(1);
    }
  }
  
  const data = null;
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  //use api response to check word
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var parser = new DOMParser();
      doc = parser.parseFromString(this.responseText, "text/xml");
      //length to determine if error message
      let validationInformation = this.responseText.length;
      //validate word
      validateWord(validationInformation);
    }
  });
  //after submit button clicked api get request initiated for word validation
  if (document.querySelector(".submit1"))
    document.querySelector(".submit1").addEventListener("click", function () {
      //Run validation API after first word submit button clicked
      xhr.open(
        "GET",
        `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${
          document.querySelector(".wordText1").innerHTML.toLowerCase()
        }`
      );
      xhr.setRequestHeader(
        "X-RapidAPI-Key",
        "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695"
      );
      xhr.setRequestHeader("X-RapidAPI-Host", "lingua-robot.p.rapidapi.com");
  
      xhr.send(data);
    });
  
  //API Submit 2nd word
  const data2 = null;
  const xhr2 = new XMLHttpRequest();
  xhr2.withCredentials = true;
  xhr2.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var parser = new DOMParser();
      doc = parser.parseFromString(this.responseText, "text/xml");
      console.log("response in 2", this.responseText);
      //Check if first word valid
      if (
        (this.responseText.length != 14 ||
          dictionary.includes(document.querySelector(".wordText2").innerHTML)) &&
        document.querySelector(".wordText2").innerHTML.length == lettersWord2
      ) {
        secondWordValid = true;
        secondWordCompleteDisplayChanges();
        handleLetterHandChangesAfterDominoWon();
        //selectDomGrid();
        //reset for user to be able to place 1st tile
        wordNumber = 1;
        //flag to ensure domino can't be placed twice
        blockPlaceTile = false;
      } else if (
        //if wrong number of letters
        document.querySelector(".wordText2").innerHTML.length !==
        Number(lettersWord2)
      ) {
        wordNumber = 2;
        wordLengthIncorrect(2);
      } else {
        secondWordValid = false;
        invalidWord(2);
        wordNumber = 2;
      }
    }
  });
  console.log("secondWord", secondWord);
  
  //After 2nd word submitted run api get request to validate word
  if (document.querySelector(".submit2"))
    document.querySelector(".submit2").addEventListener("click", function () {
      secondWord = document.querySelector(".wordText2").value;
      xhr2.open(
        "GET",
        `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${
          document.querySelector(".wordText2").innerHTML.toLowerCase()
        }`
      );
      xhr2.setRequestHeader(
        "X-RapidAPI-Key",
        "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695"
      );
      xhr2.setRequestHeader("X-RapidAPI-Host", "lingua-robot.p.rapidapi.com");
      xhr2.send(data2);
    });
  
  //process an attempt to place tile on the board
  for (let i = 0; i < gridTiles.length; i++) {
    if (document.querySelector(gridTiles[i])&&wordDomination==false)
      document.querySelector(gridTiles[i]).addEventListener("click", function () {
        console.log("gridValues[i]", gridValues[i]);
        //Ensure a grid space is empty before it can be processed. When a domino is placed
        //the gridValues array is populated with the numbers of domino spots on each side
        document.querySelector(".instruction").innerText = "";
        //Check if there is a domino to place
        if (dominoPlaced == true) {
          document.querySelector(".instruction").innerText =
            "You can't place a tile now. Win a domino so you can place one.";
        }
        //check the values of the grid space hasn't been populated
        else if (
          !gridValues[i][0] == 0 &&
          !gridValues[i][1] == 0 &&
          dominoPlaced == false
        ) {
          document.querySelector(".instruction").innerText =
            "This space is already taken. Try somewhere else.";
          instruction.style["display"] = "inline-block";
        } else if (
          //if the user is allowed to place a tile and the grid space is empty
          //move domino tile values to evaluation grid
          blockPlaceTile == false &&
          gridValues[i][0] == 0 &&
          gridValues[i][1] == 0
        ) {
          // currentGridValue is domino tile number
          currentGridValue = i;
          console.log("in in selectDomGrid", i);
          console.log("pngName", pngName);
          pushtoGridValidationHelp(currentGridValue);
        }
      });
  }
  //handle rotation of selected domino after words made
  if (document.querySelector(".chosenDom"))
    //When the user clicks on the chosen domino it changes its rotation state
    document.querySelector(".chosenDom").addEventListener("click", function () {
      if (secondWordValid == true) {
        //below the domino will be rotated as the initial state was that the domino wasn't rotated
  
        if (rotated == false) {
          console.log("rotated is true.chosendom html should change");
          //ensure the domKey is present
          if (domKey != "") {
            //display the rotated domino
            document.querySelector(".chosenDom").innerHTML =
              "<img src = Images/" +
              domKey +
              '.png style="width:50px;height:100px;transform:rotate(180deg)">';
          }
          document.querySelector(".chosenDom").style["display"] = "inline-block";
          // The domino values need to be swapped here before being passed for validation
          lettersWord1Temp = lettersWord1;
          lettersWord2Temp = lettersWord2;
          lettersWord1 = lettersWord2Temp;
          lettersWord2 = lettersWord1Temp;
          console.log(
            " rotated lettersWord1, lettersWord2",
            lettersWord2Temp,
            lettersWord1Temp
          );
          rotated = true;
        }
        //The domino is not rotated
        else {
          console.log("else statement rotated is false");
          //reset rotate
          rotated = false;
  
          if (domKey != "") {
            document.querySelector(".chosenDom").innerHTML =
              "<img src = Images/" +
              domKey +
              '.png style="width:50px;height:100px;">';
          }
          lettersWord1 = lettersWord1Temp;
          lettersWord2 = lettersWord2Temp;
          rotated = false;
        }
      }
    });
  //ensure letters not used are kept for the next hand
  function handleLetterHandChangesAfterDominoWon() {
    console.log("secondWordValid", secondWordValid, secondWord);
    console.log("letterHand before splice", letterHand);
    console.log(
      "lettersUsed1, lettersUsed2 before processed",
      lettersUsed1,
      lettersUsed2
    );
    for (let i = 0; i < lettersUsed1.length; i++) {
      letterHand.splice(
        letterHand.indexOf(document.querySelector(lettersUsed1[i]).innerHTML),
        1
      );
    }
    console.log("letterhand 1 after splice", letterHand);
    for (let i = 0; i < lettersUsed2.length; i++) {
      letterHand.splice(
        letterHand.indexOf(document.querySelector(lettersUsed2[i]).innerHTML),
        1
      );
    }
    console.log("letterhand 2 after splice", letterHand);
  }
  function pushWordLetterAmountsIntoValidationArray() {
    gridValueCompare.push(Number(lettersWord1));
    gridValueCompare.push(Number(lettersWord2));
  }
  function pushtoGridValidationHelp(i) {
    //currentGridValue is latest selected domino tile
    currentGridValue = i;
    console.log("pushGridValues Running");
    console.log("i in pushGridValues", i);
    //Creates an array of four values to check the tile next to the tile can be placed or not
    //First value shows value of previous domino bordering it
    //Second value shows value first domino side of current dominno
    //Third value shows value of second domino side of current domino
    //Forth valud shows value of next domino's adjacent side
  
    if (1 <= i && i <= 4) {
      console.log("tile not first or last");
      if (gridValueCompare.length < 4) {
        gridValueCompare.push(Number(gridValues[i - 1][1]));
        pushWordLetterAmountsIntoValidationArray();
        gridValueCompare.push(Number(gridValues[i + 1][0]));
        console.log("gridValueCompare between 0 and 3", gridValueCompare);
        i = "";
      }
    } else if (i == 5) {
      console.log("i is 5");
      gridValueCompare.push(Number(gridValues[i - 1][1]));
      pushWordLetterAmountsIntoValidationArray();
      gridValueCompare.push(Number(gridValues[i + 1][1]));
      console.log("gridValueCompare 4", gridValueCompare);
      i = "";
    } else if (i == 6) {
      console.log("i is 6");
      gridValueCompare.push(Number(gridValues[i + 1][1]));
      pushWordLetterAmountsIntoValidationArray();
      gridValueCompare.push(Number(gridValues[i - 1][1]));
      console.log("gridValueCompare between 6", gridValueCompare);
      i = "";
    } else if (7 <= i && i <= 10) {
      gridValueCompare.push(Number(gridValues[i + 1][1]));
      pushWordLetterAmountsIntoValidationArray();
      gridValueCompare.push(Number(gridValues[i - 1][0]));
      i = "";
      console.log("i=0", gridValueCompare);
    } else if (i == 0) {
      gridValueCompare.push(Number(gridValues[gridValues.length - 1][0]));
      pushWordLetterAmountsIntoValidationArray();
      gridValueCompare.push(Number(gridValues[i + 1][0]));
      console.log("i=0", gridValueCompare);
      i = "";
    } else if (i == gridValues.length - 1) {
      gridValueCompare.push(Number(gridValues[0][0]));
      pushWordLetterAmountsIntoValidationArray();
      gridValueCompare.push(Number(gridValues[i - 1][0]));
      console.log("i=11", gridValueCompare);
      i = "";
    }
    console.log("currentGridValue in push Grid Values", currentGridValue);
    //review comparison grid to check if tile can be placed
    evaluateGrid(currentGridValue);
  }
  
  function wordDominationDisplayChanges(score) {
    instruction.style["display"] = "inline-block";
    document.querySelector(
      ".instruction"
    ).innerHTML = `Congratulations, You have achieved Word Domination! Your score is ${score}`;
    addBlankLine();
    instructionCenter.innerText = "WORD DOMINATION!!!";
    // document.querySelector(".domGrid").style["display"] = "inline-block";
    document.querySelector(".hallOfFame").style["display"] = "inline-block";
    document.querySelector(".hallOfFame").style["margin-top"] = "-8rem";
    updateScores();
    localStorage.setItem("gameScore", JSON.stringify(score));
    finishGameDisplay();
    document.querySelector(".giveUp").style["display"] = "none";
    document.querySelector(".chosenDom").style["display"] = "none";
    giveUp.style["display"] = "none";
    document.querySelector(".instruction").style["font-size"] = "1rem";
    document.querySelector(".instruction").style["line-height"] = "1.5rem";
    document.querySelector(".instruction").style["font-weight"] = "700";
    document.querySelector(".instruction").style["margin-top"] = "0.3";
    document.querySelector(".instructionCenter").style["margin"] =
      "1rem 0 -2rem 0";
  
    document.querySelector(".hallOfFame").style["margin-top"] = "-7rem;";
  }
  function tilePlacedDisplayChanges() {
    document.querySelector(".instruction").style["display"] = "inline-block";
    if(wordDomination==false){
    document.querySelector(
      ".instruction"
    ).innerHTML = `Congratulations, you placed a tile!`;}
  
    addBlankLine();
    giveUp.removeAttribute("hidden");
  }
  function processWordDominationScore(gridValues) {
    console.log("process word domination score running");
    let score = 0;
    calcScore(gridValues);
    console.log("score after calcScore in word domination", score);
  
    //ensure score populated
    console.log("score value in word domination", document.getElementById("score").value);
  
  }
  function assignDominoValuesToGridAfterPlaceTile(currentGridValue) {
    gridValues[currentGridValue][0] = Number(lettersWord1);
    gridValues[currentGridValue][1] = Number(lettersWord2);
  }
  function resetAfterPlaceTile() {
    secondWordValid = false;
    gridValueCompare = [];
    firstGo = false;
    i = "";
    tilesPlaced = true;
  }
  function layoutAfterPlaceTile() {
    document.querySelector(".instruction").style["display"] = "inline-block";
    document.querySelector(
      ".instruction"
    ).innerHTML = `Congratulations, you placed a tile!`;
    addBlankLine();
    giveUp.removeAttribute("hidden");
    displayTile(currentGridValue);
    document.querySelector(".chosenDom").style["display"] = "none";
  }
  function resetsAfterTileCannotBePlaced(currentGridValue) {
    gridValueCompare = [];
    gridValues[currentGridValue][0] = 0;
    gridValues[currentGridValue][1] = 0;
    tilesPlaced = false;
    i = "";
  }
  function nextGridSpaceSelectedEvaluation() {
    //When the user clicks on another tile
    //Submit the values to the grid evaluation array assembly so that
    //these values can be evaluated
  
    for (let i = 0; i < gridTiles.length; i++) {
      document.querySelector(gridTiles[i]).addEventListener("click", function () {
        currentGridValue = i;
        //make sure the user cannot click on a tile that has already been pouplated(gridValues for that tie updated)
        //and tile placement not blocked for any reason
        if (
          blockPlaceTile == false &&
          gridValues[i][0] == 0 &&
          gridValues[i][1] == 0
        ) {
          pushtoGridValidationHelp(currentGridValue);
        }
      });
    }
  }
  function displayChangesAfterTileCannotBePlaced() {
    document.querySelector(".instruction").innerHTML =
      "It looks like this tile doesn't fit, try somwhere else";
    instruction.style["display"] = "inline-block";
  }
  
  function evaluateGrid(i) {
    currentGridValue = i;
    console.log("currentGridValue in evaluate grid", currentGridValue);
    //Word Domination scenario - all tiles placed
    console.log("dominoesPlaced", dominoesPlaced)
  
    //tile placed but game not yet completed
     if (
      (gridValueCompare[0] == 0 && gridValueCompare[3] == 0) ||
    (gridValueCompare[0] == gridValueCompare[1] && gridValueCompare[3] == 0) ||
    (gridValueCompare[2] == gridValueCompare[3] && gridValueCompare[0] == 0) ||
    (gridValueCompare[0] == gridValueCompare[1] &&
      gridValueCompare[2] == gridValueCompare[3]
    )){
      dominoesPlaced+=1;
      if (
        //check all tiiles have been placed
        // console.log("dominoesPlaced", dominoesPlaced)
        dominoesPlaced >= gridTiles.length&&wordDomination==false
      ) {
        console.log("WordDomination!!!!!");
        wordDomination = true;
        //process word domination score
        processWordDominationScore(gridValues);
        //Display for Word Domination
        wordDominationDisplayChanges(score);
        displayTile(currentGridValue);
      }
      else{
      console.log("tile successfully placed");
      layoutAfterPlaceTile();
      console.log("rotated before?", rotated);
      console.log("lettersWord1 before placed", lettersWord1);
      console.log("lettersWord2 before placed", lettersWord2);
      resetAfterPlaceTile();
      //grid values are populated based on the word value and if they are rotated
      assignDominoValuesToGridAfterPlaceTile(currentGridValue);
      console.log("rotated?", rotated);
      console.log("new gridvalues", gridValues[i][0]);
      console.log("new gridvalues", gridValues[i][1]);
      console.log("gridValues", gridValues);
      }
    } 
  
    if (!((gridValueCompare[0] == 0 && gridValueCompare[3] == 0) ||
    (gridValueCompare[0] == gridValueCompare[1] && gridValueCompare[3] == 0) ||
    (gridValueCompare[2] == gridValueCompare[3] && gridValueCompare[0] == 0) ||
    (gridValueCompare[0] == gridValueCompare[1] &&
      gridValueCompare[2] == gridValueCompare[3]))){
      //the tile cannot be placed handle changes
      console.log("word can't be placed running");
      displayChangesAfterTileCannotBePlaced();
      resetsAfterTileCannotBePlaced(currentGridValue);
      nextGridSpaceSelectedEvaluation();
    }
  }
  //issue too many dominoes spliced only happens with wrong tile placed
  
  //Doesn't contain other functions
  function finishGameDisplay() {
    addBlankLine();
    if (wordDomination==false){
    document.querySelector(
      ".instructionCenter"
    ).innerHTML = `You Have Scored ${score} Points`;}
    document.querySelector(".domGridContainer").style["margin-bottom"] =
    "2rem";
    document.querySelector(".createWordGrid").style["z-index"] = "-1";
    document.querySelector(".createWordGrid").style["display"] = "none";
    document.querySelector(".createWordGrid").style["opacity"] = "none";
    document.querySelector(".handLetters").style["display"] = "none";
    document.querySelector(".wordText").style["display"] = "none";
    document.querySelector(".wordText1").style["display"] = "none";
    document.querySelector(".wordText2").style["display"] = "none";
    document.querySelector(".wordInstruct").style["display"] = "none";
    document.querySelector(".redo").style["display"] = "none";
    document.querySelector(".submit").style["display"] = "none";
    redo2But.style["display"] = "none";
    submit2.style["display"] = "none";
    word2Instruct.style["display"] = "none";
    chosenDom.style["display"] = "none";
    document.querySelector(".buttons").style["display"] = "none";
    document.querySelector(".domHand").style["display"] = "none";
    giveUpContainer.style["display"] = "none";
    giveUp.style['display'] = "none";
    newGameContainer.style['display'] = "inline-block";
    instruction.style["display"] = "inline-block";
    //add a space line height
    document.querySelector(".instructionCenter").style["font-size"] = "1rem";
    
  }
  //handle display after domino placed on grid
  function displayTileLayoutChanges(rotation, margin, gridTile) {
    const rotationStyle = `style="width:30px;height:60px;transform:rotate(${rotation}deg);margin-top:${margin}px;"`;
    const imgSrc = `Images/${domKey}.png`;
    const pngNameGrid = `<img src="${imgSrc}" ${rotationStyle}>`;
    document.querySelector(gridTiles[gridTile]).innerHTML = pngNameGrid;
    document.querySelector(".chosenDom").innerHTML = "";
    //name for chosenDom, ensure not impacted by rotation
    chosenName =
      "<img src = Images/" + domKey + '.png style="width:40px;height:80px;">';
  }
  //handle resets after domino placed on grid
  function displayTileResetParameters() {
    
    if(wordDomination==false){
    newTilesDominoes();
    refillLetters();
    
    blockPlaceTile = true;
    domKey = "";
    rotated = false;}
  
  }
  
  function displayTile(i) {
    if (firstGo == false && blockPlaceTile == false) {
      let rotation = 0;
      let margin = 0;
      let gridTile = i;
      //determine rotation and display of tile depending on grid location
      //for horizontal tiles
      if (i <= 3 || (6 <= i && i <= 9)) {
        rotation = rotated ? 90 : -90;
        margin = -15;
      }
      //for vertical tiles
      else if ((4 <= i && i <= 5) || (10 <= i && i <= 11)) {
        console.log("rotated before oriented in grid for 45 1011", rotated);
        rotation = rotated ? 180 : 0;
      }
      displayTileLayoutChanges(rotation, margin, gridTile);
      console.log("gridtilesi in displaytile", gridTiles[i]);
      displayTileResetParameters();
    }
  }
  function newTilesDominoesDisplayChanges(pngName, domCount) {
    document.querySelector(dominoHandDisplayClasses[domCount]).innerHTML =
      pngName;
    document.querySelector(dominoHandDisplayClasses[domCount]).style["display"] =
      "inline-block";
    document.querySelector(".instructionCenter").innerHTML =
      "Now select another domino above that will fit in the grid";
    //change the order of selected domino and instruction back
    reverseOrder.style["flex-direction"] = "column";
    reverseOrder.style["margin-top"] = "0";
    chosenDom.style["margin-bottom"] = "-5rem";
    document.querySelector(".wordText").style["display"] = "none";
    document.querySelector(".wordText2").style["display"] = "none";
    document.querySelector(".createWordGrid").style["display"] = "none";
    document.querySelector(".wordText").classList.add("placeholder");
    wordText1.innerHTML = "Select letter tiles below to make the word";
    document.querySelector(".wordText2").style["display"] = "none";
  }
  //define html for image and style initiate all layout changes
  function newTilesDominoDefineLayoutChanges() {
    for (let domCount = 0; domCount < dominoHand.length; domCount++) {
      //domHandKeys1.push(...Object.keys(dominoHand[i]));
      let pngName =
        "<img src = Images/" +
        String(Object.keys(dominoHand[domCount])) +
        '.png  style="width:30px;height:60px;">';
      newTilesDominoesDisplayChanges(pngName, domCount);
    }
  }
  //give new word tiles and domino after first go
  function newTilesDominoes() {
    if (firstGo == false) {
      //to ensure it is known that the domino has already been placed to provide
      //correct messages in instructions when the user tries to click
      dominoPlaced = true;
      let rand1 = randomNumberDom();
      if (dominoHand.length < 4) {
        dominoHand.push(dominoes[rand1]);
      }
      dominoes.splice(rand1, 1);
      newTilesDominoDefineLayoutChanges();
      //ensure a tile cannot be plaecd
      blockPlaceTile = true;
    }
  }
  function refillLettersResets() {
    //increase the turns
    turns += 1;
    resetNextTurn();
    //make sure can start with empty letters from word
    letters1Used = [];
    letters2Used = [];
  }
  
  function refillLetters() {
    //Unallocated tiles is different between original letter hand length and length after tiles used
    let unallocatedTiles = letterHandLength - letterHand.length;
    for (let i = 0; i < unallocatedTiles; i++) {
      //randomNumLetters generates random number that can be used to select a tile
      pushLettersIntoHand();
      secondWordValid = false;
    }
    //populate letter elements with letter content
    for (let j = 0; j < tiles.length; j++) {
      document.querySelector(tiles[j]).innerHTML = `${letterHand[j]}`;
      document.querySelector(tiles[j]).style["display"] = "inline-block";
    }
    refillLettersResets();
  }
  
  function resetNextTurn() {
    console.log("resetNextTurn running");
    selectedDomino = false;
    document.querySelector(".wordText1").innerHTML = "";
    wordText1 = "";
    document.querySelector(".wordText2").innerHTML = "";
    wordText2 = "";
    document.querySelector(".word1Instruct").innerHTML = "";
    document.querySelector(".word2Instruct").innerHTML = "";
    wordText.classList.add("placeholder");
    wordDomination = false;
    ///make sure not too many letters get removed
    lettersUsed1 = [];
    lettersUsed2 = [];
    //ensure selected domino is empty
    chosenKey = [];
    domHandValues = [];
    chosenDomIndex = 0;
    wordNumber = 1;
    //only compare latest letters
    gridValueCompare = [];
  }
  function checkQualifyForHOF() {
    //Check if the score qualifies for the Hall of Fame
    if (score >= Number(minHOFScore) && score > 0) {
      //Display the Hall of Fame Form
      document.querySelector(".hallOfFame").style["display"] = "inline-block";
    } else if (score < Number(minHOFScore)) {
      //If the user doesn't qualify for the Hall of Fame display message in instruction.
      instruction.innerHTML =
        "You have not made it into the Hall of Fame in this game. Better luck next time.";
      instruction.style["display"] = "inline-block";
    }
  }
  
  //The user has selected the giveUp button
  if (document.querySelector(".giveUp"))
    console.log("minHOFScore in giveup", minHOFScore);
  document.querySelector(".giveUp").addEventListener("click", function () {
    const isSure = window.confirm("Are you sure you want to give up?");
    if (isSure) {
      //After the giveUp button is clicked calculate the current score based on domino values in the grid.
      calcScore(gridValues);
      updateScores();
      checkQualifyForHOF();
      finishGameDisplay();
    }
  });
  
  //Make HOF Form section disappear after button clicked.
  submitHOFBut.addEventListener("click", function () {
    instruction.innerHTML = "You are now in the Hall of Fame!";
    createWordGrid.style["display"] = "none";
    hallOfFame.style["display"] = "none";
  });
  
  document.querySelector(".newGame").addEventListener("click", function () {
    // Refresh the page when the button is clicked
    window.location.reload();
  });
  
  
  fetchMinimumHOFScore();
  
  function fetchMinimumHOFScore() {
            console.log("updateMinimumHOFScore running")
          
                      fetch(/minimums/)
                  .then(response => {
                      if (!response.ok) {
                          console.log("Response not OK for change API");
                          throw new Error("Error");
                      }
          
                      return response.json(); // Call response.json() to parse JSON data
                  })
                  .catch(error => {
                    if (error) {
              console.log(error); // Log the error message  
            }
                  });
                  }
          
  