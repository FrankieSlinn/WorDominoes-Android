import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  app: {
    // flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#353839",
    fontSize: 30, // Roughly equivalent to 1.25rem (20px)
    backgroundColor: "#ffffff",
    fontFamily: "Arial",
    letterSpacing: -0.08,
    marginTop: 55,
  },
  statusBarBackground: {
    paddingTop: 90,
    paddingBottom: 25,
    backgroundColor: "#eee",
    position: "absolute",
    height: 70,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  body: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
    backgroundColor: "#eee",
    top: 40,
  },
  bold: {
    fontWeight: "bold",
  },
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 0.2,
    shadowColor: "#000",
    textAlign: "center",
  },
  icons: {
    height: 30,
    width: 30,
    margin: 20,
  },
  headerContainer: {
    // backgroundColor: "lightBlue",
    height: 50,
    zIndex: 10,
  },

  header: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    flex: 1,
    // maxHeight: 65,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    marginTop: 10,
  },

  closeButtonContainer: {
    marginTop: 80,
    marginRight: 25,
    marginBottom: -35,
    flexDirection: "row",
    justifyContent: "flex-end", // Aligns the button to the right
  },
  closeButton: {
    padding: 8,
    backgroundColor: "#053e4c",
    borderRadius: 10,
  },
  close: {
    fontWeight: "bold",
    color: "white",
  },
  popupHeading: {
    fontWeight: "bold",
    alignItems: "center",
    flexDirection: "row",
    fontSize: 22,
    marginBottom: -8,
  },
  statsHelpTextContainer: {
    top: 10,
    margin: 32,
  },

  helpText: {
    marginTop: -20,
    fontSize: 17,

    textAlign: "center",
  },
  statsText: {
    fontWeight: 550,
    fontSize: 17,
    textAlign: "center",
  },

  instructionBox: {
    margin: 20,
    marginBottom: -20,
    height: 95,
    // alignItems: "center",
    justifyContent: "center",
  },
  instructionText: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  errorMessageText: {
    backgroundColor: "lightorange",
  },
  gridContainer: {
    alignItems: "center",
  },
  grid: {
    height: 200,
    width: 240,
  },

  domino: {
    borderWidth: 3,
    borderColor: "darkgrey",
    borderRadius: 10,
  },
  selectedTile: {
    resizeMode: "stretch",
    borderRadius: 10,
    width: 26,
    height: 52,
  },
  selectedTileHorizontal: {
    width: 26,
    height: 52,
    transform: [{ rotate: "270deg" }],
  },
  selectedTileVertical: {
    width: 26,
    height: 52,
    transform: [{ rotate: "deg" }],
    // color: "pink",
  },

  selectedHorizontalTileRotated: {
    transform: [{ rotate: "90deg" }],
  },
  selectedVerticalTileRotated: {
    transform: [{ rotate: "180deg" }],
  },
  selectedHorizontalTileUnrotated: {
    transform: [{ rotate: "270deg" }],
  },

  horizontalDominoContainer: {
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },
  horizontalDomino: {
    height: 30,
    width: 60,
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",
  },
  verticalDomino: {
    height: 60,
    width: 30,
  },
  verticalDominoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verticalDominoContainerRight: {
    //  flexDirection: "column",
    // justifyContent: "space-between",
  },
  handDominoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 70,
  },
  handDomino: {
    height: 70,
    width: 35,
    backgoundColor: "darkgrey",
    borderColor: "darkgrey",
    borderWidth: 3,
    borderRadius: 10,
    margin: 5,
  },
  instructionTextBelow: {
    marginTop: 20,
  },
  displayDominoContainer: {
    // height: 80,
    marginTop: 0,

    alignItems: "center",
  },
  displayDomino: {
    height: 80,
    width: 40,
  },
  displayDominoUnrotated: {
    transform: [{ rotate: "270deg" }],
  },
  displayDominoRotated: {
    transform: [{ rotate: "90deg" }],
  },
  placeholder: {
    fontWeight: "normal",
    fontSize: 17,
    color: "darkGrey",
  },
  input: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightyellow",
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
  inputText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.75,
  },

  lettersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    marginBottom: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    width: 35,

    fontWeight: "bold",
    padding: 10,
    margin: 4,
    // borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  selectedLetter: {
    color: "#777",
    borderStyle: "dashed",
    borderColor: "gray",
  },
  wordButtonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wordButton: {
    backgroundColor: "lightyellow",
    borderWidth: 2,
    borderColor: "darkgray",
    borderRadius: 10,
    padding: 10,

    marginTop: -10,
    margin: 10,
  },
  wordButtonText: {
    color: "#353839",
    fontWeight: "bold",
  },
  startFinishGameContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  startFinishGameButton: {
    padding: 8,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  finishGameButton: {
    backgroundColor: "#C14432",
  },
  startFinishGameText: {
    fontWeight: "bold",
    color: "#eeeeee",
  },
  startGameButton: {
    backgroundColor: "#053e4c",
  },
  continuePlayingButton: {
    backgroundColor: "#053e4c",
    marginTop: -60,
    marginBottom: 50,
  },
  WorDominationCount: {
    marginTop: 45,
  },

  HOFMainHeading: {
    marginTop: 35,
    fontSize: 25,
    lineHeight: 25,
    // backgroundColor: "lightblue"
  
  },

  returnToGameContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -5,
    marginBottom: -110,
    height: "auto",
    // backgroundColor: "lightgreen",
   
  },
  returnToGameButton: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#053e4c",
    borderRadius: 15,
    padding: 5,
    borderWidth: 3,
    borderColor: "#D1D0CE",
  },
  returnToGameButtonText: {
    color: "white",
    fontSize: 17,
  },
  HOFContainer:{
flex:1,
justifyContent: "center",
alignItems: "center",
marginTop: 1,
marginBottom: 50,


  },

  HOFContentContainer: {
    flex:1,
    marginTop: 38,
    marginBottom:0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  width: "90%",
  height: "50%",
  borderWidth: 3,
  borderColor:  "#D1D0CE",
  backgroundColor: "lightyellow",
  borderRadius: 15,

  },
  HOFHeadings: {
  marginTop: 10,
   marginBottom:0,
  
    flexDirection: "row",
    justifyContent: "space-evenly"
    // backgroundColor: "pink",
   
  },
  HOFHeadingText: {
    fontWeight: "bold",
    fontSize: 20,
  },

  HOFRows:{
    marginTop: 10,
    // backgroundColor: "lightblue",



  },
  HOFRow:{
    flex:1,
    flexDirection: "row",
    justifyContent:"space-evenly",
    alignItems: "center",
    textAlign: "left",
    paddingLeft: "19%",
    // paddingRight: "17%",
  },

  HOFEntryText:{
    fontWeight: "bold",
    fontSize: 17,
    TextAlign: "center",

  },
  HOFRankContainer:{
    // backgroundColor: "lightgreen",
    paddingRight: 20,
    marginRight: 30,
    marginLeft: -20,


  },
  HOFHandleContainer:{
  alignItems: "center",
  //  backgroundColor: "yellow",
   textAlign: "left",
   width: "55%",
   marginLeft: -50,
   marginRight: 30,
  
   paddingLeft: -10,
   
  },
  HOFScoreContainer:{
    // backgroundColor: "grey",
    width: "12%",
    
    alignItems: "center",
 
    marginRight: 35,
    marginLeft: -35,
    // testAlign: "right"
 




  },
  //In main part
  HOFButtonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
  },
  HOFButton: {
    flex: 1,
    backgroundColor: "#d4af37",
    borderRadius: 15,
    padding: 10,
    borderWidth: 3,
    borderColor: "#353839",
  },
  HOFButtonInsideView: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  HOFButtonText: {
    fontWeight: "bold",
    flexDirection: "row",
    fontSize: 17,
  },

  youInHOFContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
