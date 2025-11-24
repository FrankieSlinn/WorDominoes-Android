import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  appBody: {
    paddingHorizontal: 20,
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
  buttonBorders: {
    borderWidth: 2,
    borderColor: "#bdc5c7",
    borderRadius: 10,
  },

  bold: {
    fontWeight: "bold",
  },
  standardButtonText: {
    backgroundColor: "white",
    fontWeight: "bold",
  },
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 0.2,
    shadowColor: "#000",
    textAlign: "center",
    // backgroundColor: "green"
  },
  icons: {
    height: 30,
    width: 30,
    // margin: 20,
  },
  headerContainer: {
    height: 50,
    zIndex: 10,
    marginBottom: 50,
    // backgroundColor: "orange"
  },

  header: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    marginTop: 10,
    // backgroundColor: "pink"
  },
  headerWorDominoes: {
    top: 60,
  },
  headerHOF: {
    top: 50,
  },

  closeButtonContainer: {
    marginTop: 40,
    marginRight: 25,
    marginBottom: -35,
    flexDirection: "row",
    justifyContent: "flex-end", // Aligns the button to the right
  },
  closeButton: {
    padding: 4,

    backgroundColor: "#053e4c",
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
    paddingBottom: 25,
    marginBottom: 50,
  },
  helpTextContainer: {
    // flex: 0.1,
 marginBottom: 30,
   
  },
  helpTextContainerInner: {

  },

  helpText: {
    marginTop: -20,
    fontSize: 17,

    textAlign: "center",
  },
  helpTextSpaceBelow: {
    position: "absolute",
    bottom: 0,
    height: 50,
    marginTop: 50,
    backgroundColor: "hotpink",


  },
  statsText: {
    fontWeight: 550,
    fontSize: 17,
    textAlign: "center",
  },
  scoreMessageContainer: {
    marginTop: -20,
  },
  chooseDominoContainer: {
    paddingHorizontal: 20,

    marginTop: 20,
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
    // fontWeight: "bold",
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
    transform: [{ rotate: "0deg" }],
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
    marginTop: 5,
  },
  displayDominoContainer: {
    // height: 807
    marginTop: -10,

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
    textAlign: "center",
    width: "110%",
    padding: 5,
    borderRadius: 10,
  },
  placeholderHandle: {
    backgroundColor: "#e8e1c3",
  },

  input: {
    // flex: 0.1,
    marginTop: 10,
    marginBottom: 3,
    padding: 10,
    backgroundColor: "#bdc5c7",
    // height: 40,
    borderRadius: 10,
    textAlign: "center",

    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  inputContainer: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // marginTop: -10,
    // marginBottom: 5,
  },
  inputText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.75,
    // justifyContent: "center",
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
    marginBottom: -2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wordButton: {
    backgroundColor: "#053e4c",
    alignItems: "center",
    marginTop: -10,
    margin: 10,
    width: "35%",
    padding: 10,
  },
  wordButtonText: {
    color: "#eee",
    fontWeight: "bold",
  },

  startFinishGameContainer: {
    alignItems: "center",
  },
  startGameContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: -40,
    // backgroundColor: "lightyellow"
  },
  startGameButton: {
    marginTop: -3,
    backgroundColor: "#053e4c",
    padding: 8,
  },
  finishGameContainer: {
    marginBottom: -40,
  },
  gameControlButton: {
    padding: 8,
  },
  gameControlText: {
    fontWeight: "bold",
    color: "#eeeeee",
  },
  finishGameButton: {
    backgroundColor: "#C14432",
    marginBottom: -170,
  },

  continuePlayingButton: {
    backgroundColor: "#053e4c",
    marginTop: 20,
    marginBottom: 42,
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
  },
  continuePlayingText: {
    color: "white",
    fontWeight: "bold",
  },
  WorDominationCount: {
    marginTop: 0,
    fontWeight: "bold",
  },
  HOFEntryOuterContainer: {
    alignItems: "center",
    // marginTop: -9,
    // marginBottom: -32,
  },
  HOFEntryContainer: {
    marginTop: -32,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  HOFEntryHeadingContainer: {
    marginTop: 10,
    width: "90%",
  },
  //shared formatting with HOF Screen
  HOFEntryAndContentContainer: {
    borderWidth: 7,
    borderColor: "#D1D0CE",
    backgroundColor: "#f4f1de",
    borderRadius: 15,
    paddingBottom: 20,
  },

  HOFEntryHeading: {
    padding: 10,
    fontSize: 17,
  },
  HOFEntryText: {
    fontSize: 17,
  },
  handleAndScoreView: {
    flex: 1,
    // alignItems: "center"

    marginBottom: 10,
    width: "60%",
  },
  handleView: {
    alignItems: "center",

    marginBottom: 3,
  },
  handleLengthMessage: {
    alignItems: "center",
  },

  maxLengthText: {
    fontSize: 14,
    marginBottom: 2,
  },
  scoreView: {
    alignItems: "center",
  },
  HOFScoreText: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: -2,
  },
  HOFEntryButton: {
    marginBottom: -17,
  },
  HOFContainerMain: {
    flex: 1,
    // backgroundColor: "lightyellow",
    alignItems: "center",
    height: "100%",
    marginTop: 25,

  },

  HOFMainHeading: {
    fontSize: 25,
    lineHeight: 25,
    marginTop: 25,

    // backgroundColor: "lightblue"
  },

  returnToGameContainer: {
    // flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -5,
    marginBottom: -110,
    height: "5%",

    // backgroundColor: "lightgreen",
  },
  returnToGameButton: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#053e4c",

    padding: 5,
  },
  returnToGameButtonText: {
    color: "white",
    fontSize: 17,
  },
  HOFContainer: {
    flex: 0.9,
    // marginTop: 700,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 125,
    marginBottom: 50,
    backgroundColor: "lightyellow",
    //"#bdc5c7",
    width: "85%",
    height: "20%",
    // borderColor: "white",
    // //"#D1D0CE",
    // borderWidth: 5,
    borderRadius: 15,
  },

  HOFContentContainer: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "space-evenly",
    alignItems: "center",
    width: "97%",
    marginTop: 10,

    marginBottom: 0,
    // paddingBottom: 20,

    height: "70%",
  },
  HOFHeadings: {
    // flex: 1,
    paddingBottom: 10,
    paddingHorizontal: -40,
    marginHorizontal: -25,

    flexDirection: "row",

    justifyContent: "flex-start",
  },
  HOFHeadingText: {
    flex: 0.28,
    // justifyContent: "space-evenly",

    fontWeight: "bold",
    fontSize: 20,
    color: "#353839",
    textAlign: "center",
  },

  HOFRows: {
    marginTop: -7,
    paddingVertical: 15,
  },
  HOFRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    paddingLeft: "17%",
  },

  HOFEntryText: {
    color: "#353839",
    letterSpacing: -0.08,
    lineHeight: 25,
    fontWeight: "bold",
    fontSize: 17,
    TextAlign: "center",
  },
  HOFRankContainer: {
    // backgroundColor: "lightgreen",
    paddingRight: 20,
    marginRight: 30,
    marginLeft: -15,
  },
  HOFHandleContainer: {
    alignItems: "center",
    //  backgroundColor: "yellow",
    textAlign: "left",
    width: "57%",
    marginLeft: -30,
    marginRight: 35,

    paddingLeft: -10,
  },
  HOFScoreContainer: {
    // backgroundColor: "grey",
    width: "14%",

    alignItems: "center",

    marginRight: 23,
    marginLeft: -32,
  },
  //In main part
  HOFButtonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 200,
  },
  HOFButton: {
    flex: 1,
    backgroundColor: "lightyellow",
    borderRadius: 15,
    padding: 10,
  },
  HOFButtonInsideView: {
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
    marginTop: -340,
    marginBottom: 400,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "lightblue"
  },
  youInHOFText:{
    fontSize: 20,

  },
  footerContainer: {
    // flex:5,
    // backgroundColor: "purple",
    alignItems: "center",
    marginBottom: -285,
    paddingTop: 10,
  },
  footerText: {
    fontSize: 17,
  },
});
